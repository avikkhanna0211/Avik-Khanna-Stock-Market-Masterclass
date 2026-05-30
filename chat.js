// ============================================================
// Stock Market Academy — Live Stock Price API
// Source: Yahoo Finance (fetched server-side — no CORS issues)
// No API key needed. Completely free.
// Covers all 20 NSE-listed Indian stocks used in Paper Trading
// ============================================================

// All 20 stocks with their Yahoo Finance NSE ticker symbols
const SYMBOLS = [
  'RELIANCE.NS', 'TCS.NS',        'HDFCBANK.NS',   'INFY.NS',
  'ICICIBANK.NS','WIPRO.NS',      'BAJFINANCE.NS',  'TATAMOTORS.NS',
  'SUNPHARMA.NS','MARUTI.NS',     'ASIANPAINT.NS',  'LTIM.NS',
  'AXISBANK.NS', 'NESTLEIND.NS',  'HINDUNILVR.NS',  'TITAN.NS',
  'POWERGRID.NS','ONGC.NS',       'COALINDIA.NS',   'HCLTECH.NS'
];

// Fallback prices in case Yahoo Finance is down (these are approximate)
const FALLBACK = {
  RELIANCE:2847, TCS:3912, HDFCBANK:1634, INFY:1479, ICICIBANK:1189,
  WIPRO:467, BAJFINANCE:7224, TATAMOTORS:825, SUNPHARMA:1623, MARUTI:12304,
  ASIANPAINT:2856, LTIM:5432, AXISBANK:1098, NESTLEIND:2367, HINDUNILVR:2198,
  TITAN:3421, POWERGRID:298, ONGC:267, COALINDIA:434, HCLTECH:1876
};

export default async function handler(req, res) {
  // CORS — allow our frontend to call this route
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  // Cache response for 15 seconds (prevents hammering Yahoo Finance)
  res.setHeader('Cache-Control', 's-maxage=15, stale-while-revalidate=30');

  if (req.method === 'OPTIONS') return res.status(200).end();

  const fields = [
    'regularMarketPrice',
    'regularMarketOpen',
    'regularMarketPreviousClose',
    'regularMarketChangePercent',
    'regularMarketVolume',
    'regularMarketDayHigh',
    'regularMarketDayLow',
    'marketCap',
    'shortName'
  ].join(',');

  const symbolStr = SYMBOLS.join(',');
  const yahooUrl  = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbolStr}&fields=${fields}`;

  // Try Yahoo Finance query1, then query2 as fallback
  const endpoints = [
    `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbolStr}&fields=${fields}`,
    `https://query2.finance.yahoo.com/v7/finance/quote?symbols=${symbolStr}&fields=${fields}`
  ];

  let quotes = [];
  let source  = 'fallback';

  for (const url of endpoints) {
    try {
      const response = await fetch(url, {
        headers: {
          // Mimic a real browser to avoid Yahoo's bot detection
          'User-Agent':      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept':          'application/json, text/plain, */*',
          'Accept-Language': 'en-US,en;q=0.9',
          'Referer':         'https://finance.yahoo.com/',
          'Origin':          'https://finance.yahoo.com'
        },
        // 6 second timeout per endpoint
        signal: AbortSignal.timeout(6000)
      });

      if (!response.ok) continue; // try next endpoint

      const data = await response.json();
      const result = data?.quoteResponse?.result;

      if (Array.isArray(result) && result.length >= 10) {
        quotes = result;
        source  = url.includes('query1') ? 'yahoo_q1' : 'yahoo_q2';
        break; // success — stop trying endpoints
      }
    } catch (err) {
      console.warn(`[SMA Stocks] ${url} failed:`, err.message);
      continue; // try next endpoint
    }
  }

  // Build response object — keyed by clean symbol (without .NS)
  const prices = {};

  if (quotes.length >= 10) {
    // Real data from Yahoo Finance
    quotes.forEach(q => {
      const sym = q.symbol.replace('.NS', '');
      prices[sym] = {
        price:         Math.round((q.regularMarketPrice        || FALLBACK[sym] || 0) * 100) / 100,
        open:          Math.round((q.regularMarketOpen         || q.regularMarketPrice || 0) * 100) / 100,
        prevClose:     Math.round((q.regularMarketPreviousClose|| q.regularMarketPrice || 0) * 100) / 100,
        changePercent: Math.round((q.regularMarketChangePercent|| 0) * 100) / 100,
        volume:        q.regularMarketVolume || 0,
        dayHigh:       Math.round((q.regularMarketDayHigh || 0) * 100) / 100,
        dayLow:        Math.round((q.regularMarketDayLow  || 0) * 100) / 100,
        marketCap:     q.marketCap || 0,
        name:          q.shortName || sym,
        live:          true
      };
    });
  } else {
    // Fallback — return approximate prices with live:false flag
    Object.entries(FALLBACK).forEach(([sym, price]) => {
      prices[sym] = {
        price, open: price, prevClose: price,
        changePercent: 0, volume: 0,
        dayHigh: price, dayLow: price, marketCap: 0,
        name: sym, live: false
      };
    });
  }

  return res.json({
    prices,
    source,
    fetchedAt:   new Date().toISOString(),
    isLive:      source !== 'fallback',
    count:       quotes.length,
    message:     source === 'fallback'
      ? 'Yahoo Finance unavailable — using simulation baseline. Market may be closed.'
      : `Live prices from Yahoo Finance (${quotes.length} stocks)`
  });
}
