<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stock Market Academy — Learn, Practise, Trade</title>
<link href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;900&family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
:root{--bg:#070709;--surface:#0e0e14;--card:#13131c;--card2:#181824;--border:#1e1e2e;--border2:#2a2a40;--gold:#f5c842;--gold2:#e0a820;--green:#00e676;--green2:#00c853;--red:#ff4444;--red2:#cc2222;--blue:#4da6ff;--purple:#b388ff;--cyan:#00e5ff;--orange:#ff7043;--text:#eeeef5;--text2:#c4c4d8;--muted:#6868a0;--muted2:#4a4a70;}
*{box-sizing:border-box;margin:0;padding:0;}
html{scroll-behavior:smooth;}
body{background:var(--bg);color:var(--text);font-family:'Syne',sans-serif;overflow-x:hidden;cursor:none;}
.cursor{position:fixed;width:12px;height:12px;background:var(--gold);border-radius:50%;pointer-events:none;z-index:9999;transition:transform 0.1s;mix-blend-mode:difference;}
.cursor-ring{position:fixed;width:36px;height:36px;border:1px solid rgba(245,200,66,0.4);border-radius:50%;pointer-events:none;z-index:9998;transition:all 0.15s ease;}
::-webkit-scrollbar{width:4px;}
::-webkit-scrollbar-track{background:var(--bg);}
::-webkit-scrollbar-thumb{background:var(--gold2);border-radius:2px;}
.ticker-wrap{position:fixed;top:0;left:0;right:0;z-index:200;background:rgba(7,7,9,0.95);border-bottom:1px solid var(--border);overflow:hidden;height:32px;display:flex;align-items:center;}
.ticker-inner{display:flex;gap:0;white-space:nowrap;animation:ticker 30s linear infinite;}
.ticker-item{font-family:'JetBrains Mono',monospace;font-size:11px;padding:0 32px;color:var(--muted);display:flex;gap:8px;align-items:center;}
.ticker-item .sym{color:var(--text2);font-weight:600;}
.ticker-item .up{color:var(--green);}
.ticker-item .dn{color:var(--red);}
@keyframes ticker{0%{transform:translateX(0);}100%{transform:translateX(-50%);}}
.nav{position:fixed;top:32px;left:0;right:0;z-index:150;background:rgba(7,7,9,0.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:56px;display:flex;align-items:center;padding:0 40px;gap:0;overflow-x:auto;scrollbar-width:none;}
.nav::-webkit-scrollbar{display:none;}
.nav-logo{font-family:'Unbounded',sans-serif;font-size:13px;font-weight:900;color:var(--gold);margin-right:40px;white-space:nowrap;letter-spacing:-0.5px;}
.nav a{color:var(--muted);text-decoration:none;font-size:12px;font-weight:600;padding:8px 16px;border-radius:6px;white-space:nowrap;transition:all 0.2s;letter-spacing:0.5px;text-transform:uppercase;}
.nav a:hover,.nav a.active{color:var(--gold);background:rgba(245,200,66,0.08);}
main{padding-top:88px;}
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding:100px 24px 80px;position:relative;overflow:hidden;background:radial-gradient(ellipse 80% 60% at 50% -10%,#1a1030 0%,transparent 70%);}
.hero-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(245,200,66,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(245,200,66,0.04) 1px,transparent 1px);background-size:60px 60px;mask-image:radial-gradient(ellipse 80% 60% at 50% 50%,black 40%,transparent 100%);}
.hero-glow{position:absolute;width:600px;height:600px;background:radial-gradient(circle,rgba(245,200,66,0.06) 0%,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(245,200,66,0.08);border:1px solid rgba(245,200,66,0.25);border-radius:100px;padding:8px 20px;margin-bottom:40px;animation:fadeUp 0.8s ease both;}
.hero-badge span{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--gold);letter-spacing:3px;text-transform:uppercase;}
.hero-badge .dot{width:6px;height:6px;background:var(--green);border-radius:50%;animation:pulse 2s ease infinite;}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1);}50%{opacity:0.5;transform:scale(1.4);}}
.hero h1{font-family:'Unbounded',sans-serif;font-size:clamp(38px,8vw,110px);font-weight:900;line-height:0.9;letter-spacing:-3px;margin-bottom:32px;animation:fadeUp 0.9s ease 0.1s both;}
.hero h1 .line1{display:block;}
.hero h1 .line2{display:block;-webkit-text-stroke:2px var(--gold);color:transparent;}
.hero h1 .line3{display:block;font-size:0.45em;font-weight:300;color:var(--muted);letter-spacing:4px;margin-top:8px;}
.hero-sub{font-size:17px;color:var(--muted);max-width:560px;line-height:1.7;margin:0 auto 56px;animation:fadeUp 0.9s ease 0.2s both;}
.hero-cta{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;animation:fadeUp 0.9s ease 0.3s both;margin-bottom:80px;}
.btn-primary{background:var(--gold);color:#000;font-family:'Syne',sans-serif;font-weight:700;font-size:13px;padding:14px 32px;border:none;border-radius:8px;cursor:pointer;text-decoration:none;letter-spacing:0.5px;transition:all 0.2s;display:inline-flex;align-items:center;gap:8px;}
.btn-primary:hover{background:var(--gold2);transform:translateY(-2px);}
.btn-outline{background:transparent;color:var(--text);font-family:'Syne',sans-serif;font-weight:600;font-size:13px;padding:14px 32px;border:1px solid var(--border2);border-radius:8px;cursor:pointer;text-decoration:none;letter-spacing:0.5px;transition:all 0.2s;}
.btn-outline:hover{border-color:var(--gold);color:var(--gold);}
.hero-modules{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;max-width:900px;width:100%;animation:fadeUp 0.9s ease 0.4s both;}
.hero-mod{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:16px;text-align:left;transition:border-color 0.2s;}
.hero-mod:hover{border-color:var(--gold2);}
.hero-mod .mod-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;}
.hero-mod .mod-title{font-size:13px;font-weight:700;color:var(--text2);}
@keyframes fadeUp{from{opacity:0;transform:translateY(40px);}to{opacity:1;transform:translateY(0);}}
.progress-bar{position:fixed;bottom:0;left:0;height:3px;background:linear-gradient(90deg,var(--gold),var(--orange));z-index:999;transition:width 0.1s;width:0%;}
.container{max-width:980px;margin:0 auto;padding:0 28px;}
section{padding:100px 0;border-bottom:1px solid var(--border);}
.section-eyebrow{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;display:flex;align-items:center;gap:12px;}
.section-eyebrow::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,var(--border2),transparent);max-width:120px;}
section h2{font-family:'Unbounded',sans-serif;font-size:clamp(28px,4vw,50px);font-weight:900;line-height:1.05;letter-spacing:-2px;margin-bottom:20px;}
section h2 .g{color:var(--gold);}
.lead{font-size:17px;color:var(--muted);line-height:1.7;max-width:680px;margin-bottom:56px;}
p{color:var(--text2);line-height:1.75;margin-bottom:16px;font-size:15px;}
.grid-2{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:40px;}
.grid-3{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:18px;margin-top:40px;}
.grid-4{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px;margin-top:32px;}
.card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:28px;transition:all 0.25s;position:relative;overflow:hidden;}
.card::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(245,200,66,0.03),transparent);opacity:0;transition:opacity 0.3s;}
.card:hover{border-color:var(--border2);transform:translateY(-3px);}
.card:hover::before{opacity:1;}
.card .card-icon{font-size:32px;margin-bottom:16px;display:block;}
.card h4{font-family:'Unbounded',sans-serif;font-size:14px;font-weight:700;margin-bottom:10px;letter-spacing:-0.5px;}
.card p{font-size:14px;color:var(--muted);margin:0;}
.card-accent{border-color:rgba(245,200,66,0.3);background:linear-gradient(135deg,rgba(245,200,66,0.06),var(--card));}
.callout{display:flex;gap:20px;padding:24px 28px;border-radius:12px;margin:32px 0;border-left:4px solid;}
.callout-gold{background:rgba(245,200,66,0.06);border-color:var(--gold);}
.callout-green{background:rgba(0,230,118,0.05);border-color:var(--green);}
.callout-red{background:rgba(255,68,68,0.05);border-color:var(--red);}
.callout-blue{background:rgba(77,166,255,0.05);border-color:var(--blue);}
.callout-icon{font-size:24px;flex-shrink:0;margin-top:2px;}
.callout-body h4{font-weight:700;font-size:14px;margin-bottom:8px;color:var(--text);}
.callout-body p{margin:0;font-size:14px;}
.candle-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(155px,1fr));gap:16px;margin:32px 0;}
.candle-card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:20px;text-align:center;}
.candle-visual{height:100px;display:flex;align-items:center;justify-content:center;margin-bottom:12px;}
.candle-name{font-weight:700;font-size:13px;margin-bottom:6px;}
.tag-bull{display:inline-block;background:rgba(0,230,118,0.12);color:var(--green);font-size:10px;padding:2px 8px;border-radius:4px;font-family:'JetBrains Mono',monospace;}
.tag-bear{display:inline-block;background:rgba(255,68,68,0.12);color:var(--red);font-size:10px;padding:2px 8px;border-radius:4px;font-family:'JetBrains Mono',monospace;}
.tag-neutral{display:inline-block;background:rgba(245,200,66,0.12);color:var(--gold);font-size:10px;padding:2px 8px;border-radius:4px;font-family:'JetBrains Mono',monospace;}
.indicator-row{display:flex;align-items:flex-start;gap:24px;padding:28px;background:var(--card);border:1px solid var(--border);border-radius:12px;margin-bottom:16px;}
.ind-icon-box{width:52px;height:52px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
.ind-gold{background:rgba(245,200,66,0.12);}
.ind-green{background:rgba(0,230,118,0.12);}
.ind-blue{background:rgba(77,166,255,0.12);}
.ind-purple{background:rgba(179,136,255,0.12);}
.ind-orange{background:rgba(255,112,67,0.12);}
.ind-body h4{font-weight:700;font-size:15px;margin-bottom:6px;}
.ind-body p{font-size:13px;color:var(--muted);margin:0 0 12px;}
.ind-signals{display:flex;flex-wrap:wrap;gap:8px;}
.sig{font-family:'JetBrains Mono',monospace;font-size:11px;padding:4px 10px;border-radius:5px;}
.sig-buy{background:rgba(0,230,118,0.15);color:var(--green);}
.sig-sell{background:rgba(255,68,68,0.15);color:var(--red);}
.sig-neutral{background:rgba(245,200,66,0.15);color:var(--gold);}
.tabs{display:flex;gap:8px;margin-bottom:32px;flex-wrap:wrap;}
.tab{font-family:'JetBrains Mono',monospace;font-size:12px;padding:8px 18px;border-radius:8px;background:var(--card);border:1px solid var(--border);color:var(--muted);cursor:pointer;transition:all 0.2s;letter-spacing:0.5px;}
.tab.active,.tab:hover{background:rgba(245,200,66,0.1);border-color:var(--gold2);color:var(--gold);}
.tab-pane{display:none;}
.tab-pane.active{display:block;animation:fadeIn 0.3s ease;}
@keyframes fadeIn{from{opacity:0;transform:translateY(8px);}to{opacity:1;transform:translateY(0);}}
.tax-table{width:100%;border-collapse:separate;border-spacing:0;margin:24px 0;overflow:hidden;border-radius:12px;border:1px solid var(--border);}
.tax-table th{background:var(--card2);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--muted);padding:14px 20px;text-align:left;border-bottom:1px solid var(--border);}
.tax-table td{padding:14px 20px;font-size:14px;border-bottom:1px solid var(--border);color:var(--text2);}
.tax-table tr:last-child td{border-bottom:none;}
.tax-table tr:hover td{background:rgba(255,255,255,0.02);}
.rate-high{color:var(--red);font-family:'JetBrains Mono',monospace;font-weight:600;}
.rate-mid{color:var(--orange);font-family:'JetBrains Mono',monospace;font-weight:600;}
.rate-low{color:var(--green);font-family:'JetBrains Mono',monospace;font-weight:600;}
.steps{display:flex;flex-direction:column;gap:0;position:relative;margin-top:40px;}
.steps::before{content:'';position:absolute;left:24px;top:24px;bottom:24px;width:2px;background:linear-gradient(180deg,var(--gold),var(--border));z-index:0;}
.step{display:flex;gap:28px;align-items:flex-start;position:relative;z-index:1;margin-bottom:40px;}
.step-num{width:48px;height:48px;border-radius:50%;background:var(--card2);border:2px solid var(--gold);display:flex;align-items:center;justify-content:center;font-family:'Unbounded',sans-serif;font-size:14px;font-weight:900;color:var(--gold);flex-shrink:0;}
.step-body{padding-top:10px;flex:1;}
.step-body h4{font-weight:700;font-size:16px;margin-bottom:8px;}
.step-body p{font-size:14px;color:var(--muted);margin:0;}
.risk-list{display:flex;flex-direction:column;gap:14px;margin-top:32px;}
.risk-row{display:flex;align-items:center;gap:16px;}
.risk-label{width:170px;font-size:13px;color:var(--text2);flex-shrink:0;}
.risk-track{flex:1;height:8px;background:var(--border);border-radius:4px;overflow:hidden;}
.risk-fill{height:100%;border-radius:4px;transition:width 1.5s ease;}
.fill-low{background:linear-gradient(90deg,#00c853,#69f0ae);}
.fill-mid{background:linear-gradient(90deg,#ff9800,#ffcc02);}
.fill-high{background:linear-gradient(90deg,#ff4444,#ff6b6b);}
.risk-badge{font-family:'JetBrains Mono',monospace;font-size:10px;padding:3px 10px;border-radius:4px;white-space:nowrap;}
.rb-low{background:rgba(0,200,83,0.15);color:var(--green);}
.rb-mid{background:rgba(255,152,0,0.15);color:#ffcc02;}
.rb-high{background:rgba(255,68,68,0.15);color:var(--red);}
.portfolio-viz{background:var(--card);border:1px solid var(--border);border-radius:16px;padding:32px;margin:32px 0;}
.port-donut-wrap{display:flex;align-items:center;gap:40px;flex-wrap:wrap;}
.port-legend{flex:1;display:flex;flex-direction:column;gap:12px;min-width:200px;}
.port-item{display:flex;align-items:center;gap:12px;}
.port-dot{width:12px;height:12px;border-radius:3px;flex-shrink:0;}
.port-item-name{font-size:13px;color:var(--text2);flex:1;}
.port-item-pct{font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--text);}
.gloss-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px;margin-top:32px;}
.gloss-item{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:18px 20px;}
.gloss-term{font-family:'Unbounded',sans-serif;font-size:12px;color:var(--gold);font-weight:700;margin-bottom:6px;letter-spacing:-0.3px;}
.gloss-def{font-size:13px;color:var(--muted);line-height:1.6;}
.quiz-box{background:var(--card);border:1px solid var(--border2);border-radius:16px;padding:36px;margin-top:60px;}
.quiz-box h3{font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;letter-spacing:-1px;margin-bottom:6px;}
.quiz-meta{font-size:13px;color:var(--muted);margin-bottom:28px;}
.quiz-q{font-size:16px;font-weight:600;margin-bottom:20px;line-height:1.5;}
.quiz-opts{display:flex;flex-direction:column;gap:10px;margin-bottom:20px;}
.quiz-opt{background:var(--card2);border:1px solid var(--border);border-radius:8px;padding:14px 18px;color:var(--text2);font-size:14px;cursor:pointer;transition:all 0.2s;text-align:left;font-family:'Syne',sans-serif;}
.quiz-opt:hover{border-color:var(--gold2);color:var(--text);}
.quiz-opt.correct{background:rgba(0,230,118,0.12);border-color:var(--green);color:var(--green);}
.quiz-opt.wrong{background:rgba(255,68,68,0.12);border-color:var(--red);color:var(--red);}
.quiz-opt:disabled{cursor:default;}
.quiz-explain{background:rgba(245,200,66,0.06);border:1px solid rgba(245,200,66,0.2);border-radius:8px;padding:14px 18px;font-size:13px;color:var(--text2);display:none;margin-bottom:16px;line-height:1.6;}
.quiz-explain.show{display:block;}
.quiz-nav{display:flex;align-items:center;justify-content:space-between;}
.quiz-prog{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--muted);}
.cheat-wrap{background:linear-gradient(135deg,var(--card),var(--card2));border:1px solid var(--border2);border-radius:16px;padding:36px;margin-top:40px;}
.cheat-wrap h3{font-family:'Unbounded',sans-serif;font-size:18px;font-weight:900;margin-bottom:24px;color:var(--gold);}
.cheat-cols{display:grid;grid-template-columns:1fr 1fr;gap:32px;}
@media(max-width:600px){.cheat-cols{grid-template-columns:1fr;}}
.cheat-col h4{font-size:13px;font-weight:700;margin-bottom:14px;color:var(--text);display:flex;align-items:center;gap:8px;}
.cheat-list{list-style:none;display:flex;flex-direction:column;gap:8px;}
.cheat-list li{font-size:13px;color:var(--muted);display:flex;align-items:flex-start;gap:8px;line-height:1.5;}
.cheat-list li::before{content:'→';color:var(--gold);flex-shrink:0;font-family:'JetBrains Mono',monospace;}
.conf-table{width:100%;border-radius:12px;overflow:hidden;border:1px solid var(--border);margin:24px 0;}
.conf-table th{background:var(--card2);color:var(--muted);font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;padding:12px 20px;text-align:left;border-bottom:1px solid var(--border);}
.conf-table td{padding:12px 20px;font-size:13px;border-bottom:1px solid var(--border);color:var(--text2);}
.conf-table tr:last-child td{border:none;}
.conf-table tr:hover td{background:rgba(255,255,255,0.015);}
footer{padding:60px 28px;text-align:center;background:var(--surface);}
footer p{font-size:13px;color:var(--muted2);}
footer a{color:var(--muted);text-decoration:none;}
footer a:hover{color:var(--gold);}
.footer-logo{font-family:'Unbounded',sans-serif;font-size:20px;font-weight:900;color:var(--gold);margin-bottom:16px;letter-spacing:-1px;}
h3{font-family:'Syne',sans-serif;font-size:20px;font-weight:800;margin:40px 0 16px;}
.mono{font-family:'JetBrains Mono',monospace;}
.gold{color:var(--gold);}
.green{color:var(--green);}
.red{color:var(--red);}
.blue{color:var(--blue);}
.dim{color:var(--muted);}
strong{color:var(--text);font-weight:700;}
.pill{display:inline-block;font-family:'JetBrains Mono',monospace;font-size:11px;padding:4px 12px;border-radius:20px;margin:2px;}
.pill-gold{background:rgba(245,200,66,0.12);color:var(--gold);}
.pill-green{background:rgba(0,230,118,0.12);color:var(--green);}
.pill-red{background:rgba(255,68,68,0.12);color:var(--red);}
.pill-blue{background:rgba(77,166,255,0.12);color:var(--blue);}
@media(max-width:700px){.nav{padding:0 16px;}.container{padding:0 16px;}section{padding:64px 0;}.indicator-row{flex-direction:column;}.port-donut-wrap{flex-direction:column;}}
</style>
</head>
<body>
<div class="cursor" id="cursor"></div>
<div class="cursor-ring" id="cursorRing"></div>
<div class="progress-bar" id="progressBar"></div>
<div class="ticker-wrap"><div class="ticker-inner" id="ticker">
<span class="ticker-item"><span class="sym">RELIANCE</span><span class="up">▲ 2,847.30 +1.2%</span></span>
<span class="ticker-item"><span class="sym">TCS</span><span class="up">▲ 3,912.45 +0.8%</span></span>
<span class="ticker-item"><span class="sym">HDFC Bank</span><span class="dn">▼ 1,634.20 -0.4%</span></span>
<span class="ticker-item"><span class="sym">INFY</span><span class="up">▲ 1,478.60 +1.5%</span></span>
<span class="ticker-item"><span class="sym">ICICI Bank</span><span class="up">▲ 1,188.90 +0.6%</span></span>
<span class="ticker-item"><span class="sym">WIPRO</span><span class="dn">▼ 467.30 -0.9%</span></span>
<span class="ticker-item"><span class="sym">BAJFINANCE</span><span class="up">▲ 7,224.15 +2.1%</span></span>
<span class="ticker-item"><span class="sym">NIFTY 50</span><span class="up">▲ 24,008.30 +0.7%</span></span>
<span class="ticker-item"><span class="sym">SENSEX</span><span class="up">▲ 79,218.05 +0.6%</span></span>
<span class="ticker-item"><span class="sym">TATAMOTORS</span><span class="up">▲ 825.50 +1.8%</span></span>
<span class="ticker-item"><span class="sym">RELIANCE</span><span class="up">▲ 2,847.30 +1.2%</span></span>
<span class="ticker-item"><span class="sym">TCS</span><span class="up">▲ 3,912.45 +0.8%</span></span>
<span class="ticker-item"><span class="sym">HDFC Bank</span><span class="dn">▼ 1,634.20 -0.4%</span></span>
<span class="ticker-item"><span class="sym">INFY</span><span class="up">▲ 1,478.60 +1.5%</span></span>
<span class="ticker-item"><span class="sym">NIFTY 50</span><span class="up">▲ 24,008.30 +0.7%</span></span>
<span class="ticker-item"><span class="sym">SENSEX</span><span class="up">▲ 79,218.05 +0.6%</span></span>
</div></div>
<nav class="nav" id="mainNav">
<div class="nav-logo">SMA</div>
<a href="#basics">Basics</a>
<a href="#market">Market</a>
<a href="#candlesticks">Candlesticks</a>
<a href="#indicators">Indicators</a>
<a href="#strategies">Strategies</a>
<a href="#portfolio">Portfolio</a>
<a href="#taxes">Taxes</a>
<a href="#risk">Risk</a>
<a href="#papertrading">Paper Trade</a>
<a href="#aitutor">AI Tutor</a>
<a href="#quiz">Quiz</a>
</nav>
<main>
<section class="hero" id="top">
<div class="hero-grid"></div>
<div class="hero-glow"></div>
<div class="hero-badge"><span class="dot"></span><span>Professional Trading Education — 2026</span></div>
<h1><span class="line1">STOCK MARKET</span><span class="line2">ACADEMY</span><span class="line3">Master Markets. Trade with Precision.</span></h1>
<p class="hero-sub">From "what is a stock?" to reading charts like a pro — every concept, pattern, strategy, and tool you need to start trading with confidence.</p>
<div class="hero-cta"><a class="btn-primary" href="#basics">Start Learning ↓</a><a class="btn-outline" href="#quiz">Test Yourself</a></div>
<div class="hero-modules">
<div class="hero-mod"><div class="mod-num">01</div><div class="mod-title">Stock Basics</div></div>
<div class="hero-mod"><div class="mod-num">02</div><div class="mod-title">How Markets Work</div></div>
<div class="hero-mod"><div class="mod-num">03</div><div class="mod-title">Candlestick Patterns</div></div>
<div class="hero-mod"><div class="mod-num">04</div><div class="mod-title">Indicators (RSI, MACD…)</div></div>
<div class="hero-mod"><div class="mod-num">05</div><div class="mod-title">Trading Strategies</div></div>
<div class="hero-mod"><div class="mod-num">06</div><div class="mod-title">Portfolio Building</div></div>
<div class="hero-mod"><div class="mod-num">07</div><div class="mod-title">Stock Taxes India</div></div>
<div class="hero-mod"><div class="mod-num">08</div><div class="mod-title">Risk Management</div></div>
</div>
</section>

<!-- ===== MODULE 01: BASICS ===== -->
<section id="basics">
<div class="container">
<div class="section-eyebrow">Module 01 — Foundation</div>
<h2>What is the <span class="g">Stock Market?</span></h2>
<p class="lead">If you had zero knowledge of stocks yesterday, by the end of this module you will understand how an entire financial system works — from the ground up.</p>
<p>A <strong>stock</strong> (also called a share or equity) represents a tiny ownership slice of a company. When a company wants to raise money, it sells pieces of itself to the public — this is called an <strong>IPO (Initial Public Offering)</strong>. Once listed, those shares trade on a stock exchange and their price moves every second based on supply and demand.</p>
<p>India has two main exchanges: <strong>BSE (Bombay Stock Exchange)</strong> — the oldest in Asia, founded in 1875 — and <strong>NSE (National Stock Exchange)</strong>, which handles most trading volume. The <strong>NIFTY 50</strong> is NSE's index of 50 top companies. The <strong>SENSEX</strong> tracks 30 companies on BSE. Both act as a "report card" of the overall market's health.</p>
<div class="callout callout-gold">
<span class="callout-icon">💡</span>
<div class="callout-body">
<h4>The Core Idea in One Example</h4>
<p>You buy 1 share of Reliance at ₹2,800. If Reliance grows and more people want to own it, the price rises to ₹3,200. You sell — and pocket ₹400 profit (14.3% return). If it falls to ₹2,500, you've "lost" ₹300 on paper. That loss only becomes real if you sell. This is the entire stock market in a nutshell.</p>
</div>
</div>
<h3>Types of Financial Instruments</h3>
<div class="grid-3">
<div class="card"><span class="card-icon">🏢</span><h4>Stocks / Equities</h4><p>Ownership in a company. Highest potential return, highest risk. Profit via price appreciation and dividends.</p></div>
<div class="card"><span class="card-icon">📜</span><h4>Bonds / Debentures</h4><p>Loans you give to companies or governments. Fixed interest payments. Safer than stocks, lower returns.</p></div>
<div class="card"><span class="card-icon">🧺</span><h4>Mutual Funds</h4><p>A pool of money from many investors managed by a professional fund manager. Instant diversification for small amounts.</p></div>
<div class="card"><span class="card-icon">📊</span><h4>ETFs / Index Funds</h4><p>Like mutual funds but traded on exchange like stocks. Track an index (e.g. Nifty 50) passively, lowest cost. Best for beginners.</p></div>
<div class="card"><span class="card-icon">🔮</span><h4>Derivatives (F&amp;O)</h4><p>Futures and Options — contracts that derive value from an underlying asset. High leverage, extremely risky for beginners. Avoid until experienced.</p></div>
<div class="card"><span class="card-icon">🏠</span><h4>REITs</h4><p>Real Estate Investment Trusts. Own commercial real estate via the stock exchange. Regular dividend-like distributions. Good diversifier.</p></div>
</div>
<h3>Essential Glossary — Words You'll Use Every Day</h3>
<div class="gloss-grid">
<div class="gloss-item"><div class="gloss-term">Bull Market</div><div class="gloss-def">A market where prices are rising or expected to rise. Bulls charge upward — think horns pointing up. Typically defined as 20%+ gain from recent lows.</div></div>
<div class="gloss-item"><div class="gloss-term">Bear Market</div><div class="gloss-def">A market falling 20%+ from recent highs. Bears swipe downward. Characterized by pessimism, declining economic indicators.</div></div>
<div class="gloss-item"><div class="gloss-term">Market Cap</div><div class="gloss-def">Total market value of a company: Share Price × Total Shares Outstanding. TCS ≈ ₹13 lakh crore. Used to classify Large/Mid/Small-cap.</div></div>
<div class="gloss-item"><div class="gloss-term">Dividend</div><div class="gloss-def">A portion of company profits paid to shareholders, usually quarterly or annually. Companies like Coal India and ITC are known for high dividends.</div></div>
<div class="gloss-item"><div class="gloss-term">P/E Ratio</div><div class="gloss-def">Price-to-Earnings. Stock price ÷ EPS. Lower P/E may mean undervalued vs peers; higher P/E means market expects strong growth.</div></div>
<div class="gloss-item"><div class="gloss-term">Volume</div><div class="gloss-def">Number of shares traded in a period. High volume + strong price move = reliable signal. Low volume = weak, potentially false move.</div></div>
<div class="gloss-item"><div class="gloss-term">52-Week High / Low</div><div class="gloss-def">Highest and lowest price a stock reached in the past year. Breakouts above 52-week highs on high volume are significant bullish signals.</div></div>
<div class="gloss-item"><div class="gloss-term">Demat Account</div><div class="gloss-def">Dematerialized account — stores your shares electronically instead of paper certificates. Required to invest in Indian markets. Open on Zerodha, Groww, or Upstox.</div></div>
<div class="gloss-item"><div class="gloss-term">Stop-Loss</div><div class="gloss-def">A pre-set order to automatically sell a stock if it falls to a certain price — limiting your loss. The single most important risk tool available.</div></div>
<div class="gloss-item"><div class="gloss-term">Liquidity</div><div class="gloss-def">How easily an asset can be converted to cash without affecting price. Large-cap stocks (Reliance, TCS) are highly liquid. Small-caps often are not.</div></div>
<div class="gloss-item"><div class="gloss-term">Volatility</div><div class="gloss-def">How much a stock's price fluctuates. High volatility = big swings up AND down. Measured by India VIX (NIFTY's fear index). Higher VIX = more fear.</div></div>
<div class="gloss-item"><div class="gloss-term">Short Selling</div><div class="gloss-def">Borrowing shares to sell now, then buying back cheaper later to profit from price decline. Very risky — losses are theoretically unlimited.</div></div>
<div class="gloss-item"><div class="gloss-term">Circuit Breaker</div><div class="gloss-def">SEBI rule that halts trading if a stock or index moves ±10/15/20% in a session to prevent panic selling or manipulation.</div></div>
<div class="gloss-item"><div class="gloss-term">SIP</div><div class="gloss-def">Systematic Investment Plan — investing a fixed amount regularly (e.g. ₹1,000/month) regardless of market conditions. Eliminates timing risk via rupee cost averaging.</div></div>
<div class="gloss-item"><div class="gloss-term">Blue-Chip Stock</div><div class="gloss-def">Large, established, financially sound company with a long history of reliable performance. E.g. Reliance, HDFC Bank, TCS. Lower risk, stable returns.</div></div>
<div class="gloss-item"><div class="gloss-term">Penny Stock</div><div class="gloss-def">Very cheap, low-market-cap stocks (often below ₹10). Extremely risky, frequently manipulated by pump-and-dump schemes. Strictly avoid as a beginner.</div></div>
<div class="gloss-item"><div class="gloss-term">EPS</div><div class="gloss-def">Earnings Per Share = Net Profit ÷ Total Shares. Shows how much profit a company made per share. Growing EPS = healthy company.</div></div>
<div class="gloss-item"><div class="gloss-term">ROE</div><div class="gloss-def">Return on Equity. Net Profit ÷ Shareholders' Equity. Measures how efficiently a company uses investor money. Above 15% is generally good.</div></div>
</div>
</div>
</section>

<!-- ===== MODULE 02: HOW MARKET WORKS ===== -->
<section id="market">
<div class="container">
<div class="section-eyebrow">Module 02 — Market Mechanics</div>
<h2>How the Market <span class="g">Actually Works</span></h2>
<p class="lead">Understanding the mechanics beneath stock prices — how orders flow, who the players are, what moves markets, and the crucial difference between fundamental and technical analysis.</p>

<h3>Reading Price — The Core Skill</h3>
<p>Price is the collective opinion of millions of buyers and sellers at any moment. When more people want to <strong>buy</strong> than sell, price rises. When more want to <strong>sell</strong>, price falls. As Jason Graystone's trading course emphasizes: reading raw price action is the most fundamental skill a trader can develop — before any indicator, before any strategy.</p>
<p>Look at any chart and ask: Is it making <strong>Higher Highs + Higher Lows</strong> (uptrend)? <strong>Lower Highs + Lower Lows</strong> (downtrend)? Or oscillating in a range (sideways)? This one observation tells you more than most indicators.</p>

<div class="grid-2">
<div class="card card-accent">
<h4>📈 Types of Market Trends</h4>
<p><strong class="green">Uptrend:</strong> Series of Higher Highs (HH) and Higher Lows (HL). Each pullback is bought by bulls. Trade with the trend — go long.<br><br>
<strong class="red">Downtrend:</strong> Series of Lower Highs (LH) and Lower Lows (LL). Each rally is sold by bears. Avoid buying into downtrends.<br><br>
<strong class="gold">Sideways / Range:</strong> Price oscillates between support and resistance. Neither side in control. Range-trade or wait for a breakout.</p>
</div>
<div class="card">
<h4>🏦 Key Market Participants</h4>
<p><strong>Retail Investors</strong> — Individuals like you. Follow the smart money; don't fight institutions.<br><br>
<strong>FIIs (Foreign Institutional Investors)</strong> — Foreign funds (e.g. BlackRock). Big net-buy/sell moves the market significantly.<br><br>
<strong>DIIs (Domestic Institutional Investors)</strong> — LIC, domestic MFs. Often buy when FIIs sell, acting as stabilizers.<br><br>
<strong>HNIs / Prop Desks</strong> — High Net Worth Individuals and proprietary trading desks. Sophisticated, fast-moving.</p>
</div>
</div>

<h3>Order Types — Your Trading Toolkit</h3>
<div class="grid-3">
<div class="card"><h4>📥 Market Order</h4><p>Buy or sell immediately at the best available price. Guaranteed execution, but price may slip in volatile markets. Use only for highly liquid stocks.</p></div>
<div class="card"><h4>📌 Limit Order</h4><p>Buy/sell only at your specified price or better. You control the entry price. May not fill if price doesn't reach your level. Best practice for most trades.</p></div>
<div class="card"><h4>🛑 Stop-Loss Order</h4><p>Triggered when price hits your stop level — converts to a market order. Protects against catastrophic losses. Non-negotiable for serious traders.</p></div>
<div class="card"><h4>🎯 Stop-Limit Order</h4><p>Triggers at stop price but only executes at your limit price or better. Protects against slippage in fast-moving markets.</p></div>
<div class="card"><h4>📈 Trailing Stop</h4><p>Moves with the price as it goes in your favor, locking in profits while letting winners run. Set as a % or fixed amount below current price.</p></div>
<div class="card"><h4>⏱ GTT (Good Till Triggered)</h4><p>Stays active until price hits your pre-set level — even days or weeks later. Available on Zerodha and most Indian brokers. Great for disciplined entry.</p></div>
</div>

<h3>Fundamental vs Technical Analysis</h3>
<div class="grid-2">
<div class="card">
<h4>🔬 Fundamental Analysis</h4>
<p>Examines the underlying business: revenue, profits, debt, competitive moat, and management quality. Answers: <em>is this company worth owning for the long term?</em></p>
<br><p><strong>Key Metrics:</strong> P/E ratio, EPS growth, ROE, Debt-to-Equity, Revenue Growth (CAGR), Free Cash Flow, PEG Ratio, Promoter Holding %</p>
<br><p><span class="pill pill-gold">Long-term investing</span> <span class="pill pill-blue">Warren Buffett / Peter Lynch style</span></p>
</div>
<div class="card">
<h4>📉 Technical Analysis</h4>
<p>Studies price charts and patterns to predict future price moves. Based on the idea that history repeats and all known information is already reflected in price.</p>
<br><p><strong>Key Tools:</strong> Candlestick patterns, Support/Resistance zones, Moving Averages, RSI, MACD, Bollinger Bands, Volume, Fibonacci retracements</p>
<br><p><span class="pill pill-gold">Short to medium-term trading</span> <span class="pill pill-green">Active traders and swing traders</span></p>
</div>
</div>

<div class="callout callout-blue">
<span class="callout-icon">🏆</span>
<div class="callout-body">
<h4>Pro Insight: Opportunity Confluence</h4>
<p>The best traders combine both approaches. Use <strong>fundamentals</strong> to decide <em>which</em> stock to trade (is the company healthy and growing?), and <strong>technicals</strong> to decide <em>when</em> to enter and exit (is the chart giving a high-probability signal?). This overlap of multiple confirming factors is what Jason Graystone calls <strong>"Opportunity Confluence"</strong> — and it's the foundation of professional trading. Never act on just one signal.</p>
</div>
</div>

<h3>How Prices Actually Move — Supply &amp; Demand Zones</h3>
<p>Beyond simple support and resistance lines, professional traders think in <strong>zones</strong> — areas where significant buying or selling has previously occurred. When price returns to a demand zone (where big buyers stepped in), it often bounces. When it returns to a supply zone (where big sellers distributed shares), it often reverses.</p>
<div class="grid-2">
<div class="card">
<h4>📦 Demand Zones (Buy Zones)</h4>
<p>Areas where institutional buyers previously absorbed selling. Look for: rapid price moves away from a level (leaving behind few candles), previous swing lows, high-volume price areas. When price returns, watch for bullish reversal candles.</p>
</div>
<div class="card">
<h4>📦 Supply Zones (Sell Zones)</h4>
<p>Areas where large sellers previously distributed shares. Look for: rapid price drops from a level, previous swing highs, gaps down from high-volume areas. When price returns, watch for bearish reversal candles and declining volume.</p>
</div>
</div>
</div>
</section>

<!-- ===== MODULE 03: CANDLESTICKS ===== -->
<section id="candlesticks">
<div class="container">
<div class="section-eyebrow">Module 03 — Price Action</div>
<h2>Candlestick <span class="g">Patterns</span></h2>
<p class="lead">Developed by Japanese rice trader Munehisa Homma in the 1700s — candlestick patterns are the visual language of markets. Every candle tells the story of a battle between buyers and sellers in a given time period.</p>

<h3>Anatomy of a Candlestick</h3>
<div class="grid-2">
<div class="card">
<p>Each candle shows four prices: <strong>Open, High, Low, Close (OHLC)</strong>.</p>
<br>
<p>🟩 <strong class="green">Green/White Body</strong> — Close above Open (bulls won this period)<br>
🟥 <strong class="red">Red/Black Body</strong> — Close below Open (bears won this period)<br>
<strong>Upper Wick</strong> — Price tried to go higher but got rejected by sellers<br>
<strong>Lower Wick</strong> — Price tried to go lower but was pushed back up by buyers<br>
<strong>Long body</strong> = strong conviction; <strong>Short body</strong> = indecision</p>
<br>
<p>A candle can represent any timeframe: 1 minute, 5 minutes, 1 hour, 1 day, 1 week. The same patterns appear at every timeframe — though higher timeframes (Daily, Weekly) are more reliable.</p>
</div>
<div class="card" style="display:flex;align-items:center;justify-content:center;gap:40px;min-height:180px;">
<div style="text-align:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);">
<div style="width:2px;height:20px;background:currentColor;"></div>
<div style="width:22px;height:54px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:14px;background:currentColor;"></div>
</div>
<div style="font-size:11px;color:var(--green);margin-top:8px;font-family:'JetBrains Mono',monospace;">BULLISH</div>
</div>
<div style="text-align:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);">
<div style="width:2px;height:14px;background:currentColor;"></div>
<div style="width:22px;height:54px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:20px;background:currentColor;"></div>
</div>
<div style="font-size:11px;color:var(--red);margin-top:8px;font-family:'JetBrains Mono',monospace;">BEARISH</div>
</div>
<div style="font-size:11px;color:var(--muted);line-height:1.8;font-family:'JetBrains Mono',monospace;text-align:left;">← High<br><br><br>← Close/Open<br><br><br>← Open/Close<br><br>← Low</div>
</div>
</div>

<h3>🟢 Bullish Reversal Patterns <span style="font-size:13px;color:var(--muted);font-weight:400;">(appear after downtrends — potential buy signals)</span></h3>
<div class="candle-grid">
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:0;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);">
<div style="width:2px;height:8px;background:currentColor;"></div>
<div style="width:18px;height:10px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:44px;background:currentColor;"></div>
</div>
</div>
<div class="candle-name green">Hammer</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Small body at top, long lower wick (2×+ body). Sellers pushed down but buyers took back control. Nifty 50 studies show ~65% accuracy 3 days later.</div>
<span class="tag-bull">BUY SIGNAL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:3px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:14px;height:18px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:20px;height:34px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
</div>
<div class="candle-name green">Bullish Engulfing</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Large green candle completely engulfs the previous red one. Strong buying pressure decisively overtaking sellers. High-probability reversal.</div>
<span class="tag-bull">STRONG BUY</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:3px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:14px;height:16px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:#888;"><div style="width:2px;height:10px;background:currentColor;"></div><div style="width:12px;height:6px;background:rgba(200,200,200,0.15);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:10px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:18px;height:24px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
</div>
<div class="candle-name green">Morning Star</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">3-candle pattern: bearish → small doji/star → bullish. Marks transition from selling to buying. One of the most reliable reversal patterns.</div>
<span class="tag-bull">STRONG BUY</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:0;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);">
<div style="width:2px;height:44px;background:currentColor;"></div>
<div style="width:18px;height:10px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:8px;background:currentColor;"></div>
</div>
</div>
<div class="candle-name green">Inverted Hammer</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Small body at bottom, long upper wick after downtrend. Buyers tried to push up — sellers resisted but buyers are showing strength. Needs next-day confirmation.</div>
<span class="tag-bull">BUY (confirm)</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:3px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:16px;height:26px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:18px;height:32px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
</div>
<div class="candle-name green">Tweezer Bottom</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Two candles with the same lows. A key support level is being strongly defended by buyers. Powerful signal, especially at major support zones.</div>
<span class="tag-bull">BUY SIGNAL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:2px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:14px;height:20px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:16px;height:26px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:18px;height:32px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
</div>
<div class="candle-name green">Three White Soldiers</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Three consecutive large bullish candles each closing higher. Strong, sustained buying. Very reliable reversal pattern after a downtrend or consolidation.</div>
<span class="tag-bull">STRONG BUY</span>
</div>
</div>

<h3>🔴 Bearish Reversal Patterns <span style="font-size:13px;color:var(--muted);font-weight:400;">(appear after uptrends — potential sell/exit signals)</span></h3>
<div class="candle-grid">
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:0;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);">
<div style="width:2px;height:44px;background:currentColor;"></div>
<div style="width:18px;height:10px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:8px;background:currentColor;"></div>
</div>
</div>
<div class="candle-name red">Shooting Star</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Small body at bottom, long upper wick after uptrend. Buyers failed to hold the gains — sellers rejected the new highs. Strong bearish warning.</div>
<span class="tag-bear">SELL SIGNAL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:3px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:14px;height:18px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:20px;height:34px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
</div>
<div class="candle-name red">Bearish Engulfing</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Large red candle fully engulfs the prior green one. Sellers decisively take control. Strong reversal signal especially at key resistance.</div>
<span class="tag-bear">STRONG SELL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:3px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--green);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:16px;height:22px;background:rgba(0,230,118,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:#888;"><div style="width:2px;height:10px;background:currentColor;"></div><div style="width:12px;height:6px;background:rgba(200,200,200,0.15);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:5px;background:currentColor;"></div><div style="width:16px;height:22px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:5px;background:currentColor;"></div></div>
</div>
<div class="candle-name red">Evening Star</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">3-candle: bullish → small doji → bearish. Mirror of Morning Star. One of the most reliable top reversal patterns when appearing at resistance.</div>
<span class="tag-bear">STRONG SELL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:0;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);">
<div style="width:2px;height:8px;background:currentColor;"></div>
<div style="width:18px;height:10px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:44px;background:currentColor;"></div>
</div>
</div>
<div class="candle-name red">Hanging Man</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Looks like a Hammer but appears AFTER an uptrend. Small body at top, long lower wick. Sellers tested the lows — bearish warning if confirmed next day.</div>
<span class="tag-bear">SELL (confirm)</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="flex-direction:column;display:flex;gap:2px;align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:14px;height:20px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:16px;height:26px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
<div style="display:flex;flex-direction:column;align-items:center;color:var(--red);"><div style="width:2px;height:4px;background:currentColor;"></div><div style="width:18px;height:32px;background:rgba(255,68,68,0.25);border:2px solid currentColor;border-radius:2px;"></div><div style="width:2px;height:4px;background:currentColor;"></div></div>
</div>
<div class="candle-name red">Three Black Crows</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Three large consecutive bearish candles, each closing lower. Sustained, aggressive selling. A major reversal signal — sellers fully in control.</div>
<span class="tag-bear">STRONG SELL</span>
</div>
<div class="candle-card">
<div class="candle-visual" style="align-items:center;justify-content:center;">
<div style="display:flex;flex-direction:column;align-items:center;color:#888;">
<div style="width:2px;height:32px;background:currentColor;"></div>
<div style="width:14px;height:5px;background:rgba(200,200,200,0.2);border:2px solid currentColor;border-radius:2px;"></div>
<div style="width:2px;height:32px;background:currentColor;"></div>
</div>
</div>
<div class="candle-name gold">Doji</div>
<div style="font-size:11px;color:var(--muted);margin-bottom:8px;">Open ≈ Close, with long wicks both sides. Pure indecision — neither buyers nor sellers won. Critical: always watch the NEXT candle to determine direction.</div>
<span class="tag-neutral">INDECISION</span>
</div>
</div>

<div class="callout callout-gold">
<span class="callout-icon">⚡</span>
<div class="callout-body">
<h4>The Golden Rule of Candlestick Trading</h4>
<p>Never trade a pattern in isolation. <strong>Always confirm</strong> with at least one additional factor: volume (high volume strengthens the signal), location (at key support/resistance), trend direction (hammer in downtrend is more powerful), or a confirming indicator (RSI oversold + hammer = stronger buy). A hammer at a major support level with 2× average volume is far more reliable than one appearing in the middle of a range. This multi-factor confirmation is the difference between amateur and professional pattern reading.</p>
</div>
</div>
</div>
</section>


<!-- ===== MODULE 04: INDICATORS ===== -->
<section id="indicators">
<div class="container">
<div class="section-eyebrow">Module 04 — Technical Tools</div>
<h2>Indicators: <span class="g">When to Buy &amp; Sell</span></h2>
<p class="lead">Indicators are mathematical calculations applied to price and volume data. They help confirm what price is already telling you — never use them alone. Two to three indicators maximum; more creates "analysis paralysis."</p>

<div class="indicator-row">
<div class="ind-icon-box ind-gold">📉</div>
<div class="ind-body">
<h4>RSI — Relative Strength Index (14-period default)</h4>
<p>Created by J. Welles Wilder Jr. in 1978. Measures momentum on a scale of 0–100. Shows if a stock is overbought or oversold relative to its recent price moves. RSI = 100 − (100 ÷ (1 + Average Gain ÷ Average Loss)). Most commonly set to 14 periods.</p>
<div class="ind-signals">
<span class="sig sig-buy">RSI below 30 = Oversold → Potential BUY zone</span>
<span class="sig sig-sell">RSI above 70 = Overbought → Potential SELL zone</span>
<span class="sig sig-neutral">RSI near 50 = Neutral momentum, no clear signal</span>
<span class="sig sig-buy">Bullish Divergence: price new low but RSI higher low → reversal incoming</span>
<span class="sig sig-sell">Bearish Divergence: price new high but RSI lower high → reversal warning</span>
</div>
</div>
</div>

<div class="indicator-row">
<div class="ind-icon-box ind-blue">📊</div>
<div class="ind-body">
<h4>MACD — Moving Average Convergence Divergence (12, 26, 9)</h4>
<p>MACD Line = 12-period EMA minus 26-period EMA. Signal Line = 9-period EMA of the MACD line. Histogram = MACD minus Signal Line. A larger histogram = stronger momentum. When RSI identifies oversold/overbought AND MACD confirms with a crossover, the signal strength doubles.</p>
<div class="ind-signals">
<span class="sig sig-buy">MACD crosses ABOVE Signal Line (Golden Cross) → BUY signal</span>
<span class="sig sig-sell">MACD crosses BELOW Signal Line (Death Cross) → SELL signal</span>
<span class="sig sig-buy">Histogram bars growing in positive direction → bullish momentum strengthening</span>
<span class="sig sig-sell">Histogram shrinking from peak → momentum fading, potential reversal</span>
<span class="sig sig-neutral">Power combo: RSI below 30 + MACD Golden Cross = high-conviction BUY setup</span>
</div>
</div>
</div>

<div class="indicator-row">
<div class="ind-icon-box ind-green">〰️</div>
<div class="ind-body">
<h4>Moving Averages — SMA &amp; EMA</h4>
<p>Simple MA (SMA) averages past N closing prices equally. Exponential MA (EMA) weights recent prices more heavily, reacting faster to price changes. Both act as dynamic support/resistance. Key periods traders watch: 9 EMA (short-term), 20 EMA, 50 SMA (medium), 100 SMA, 200 SMA (long-term trend).</p>
<div class="ind-signals">
<span class="sig sig-buy">Price crosses ABOVE 50-day MA → medium-term bullish signal</span>
<span class="sig sig-sell">Price crosses BELOW 50-day MA → medium-term bearish signal</span>
<span class="sig sig-buy">50-day MA crosses ABOVE 200-day MA → Golden Cross (major bull signal, very reliable)</span>
<span class="sig sig-sell">50-day MA crosses BELOW 200-day MA → Death Cross (major bear signal)</span>
<span class="sig sig-neutral">Price bouncing off 200-day MA = strong long-term support test</span>
</div>
</div>
</div>

<div class="indicator-row">
<div class="ind-icon-box ind-purple">📐</div>
<div class="ind-body">
<h4>Bollinger Bands (20 SMA ± 2 Standard Deviations)</h4>
<p>Three bands: middle (20-day SMA), upper (SMA + 2 std dev), lower (SMA − 2 std dev). Bands expand during high volatility and contract during low volatility. Approximately 95% of price action stays within the bands. Price tends to revert toward the middle band. When the bands squeeze (contract), a big breakout is imminent.</p>
<div class="ind-signals">
<span class="sig sig-buy">Price touches/breaks LOWER band → potential oversold, watch for reversal candle</span>
<span class="sig sig-sell">Price touches/breaks UPPER band → potential overbought, watch for reversal candle</span>
<span class="sig sig-buy">Bollinger Squeeze (bands narrow tightly) → explosive move coming, watch direction</span>
<span class="sig sig-neutral">Price riding UPPER band in strong uptrend = continuation, not necessarily a sell</span>
</div>
</div>
</div>

<div class="indicator-row">
<div class="ind-icon-box ind-orange">📐</div>
<div class="ind-body">
<h4>Fibonacci Retracement — The Golden Ratio in Markets</h4>
<p>Based on the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8...). Draw from a significant swing low to swing high (in uptrend) or high to low (in downtrend). Key levels — 23.6%, 38.2%, 50%, 61.8% (the "Golden Ratio"), 78.6% — act as potential support during pullbacks. The 61.8% level is the most powerful and widely watched. Extensions (127.2%, 161.8%) serve as profit targets.</p>
<div class="ind-signals">
<span class="sig sig-buy">Price pulls back to 38.2% in uptrend → shallow pullback, strong trend, buy opportunity</span>
<span class="sig sig-buy">Price pulls back to 61.8% in uptrend → Golden Ratio support, highest-probability entry zone</span>
<span class="sig sig-sell">Price retraces to 38.2%/50% in downtrend → sell/short opportunity at resistance</span>
<span class="sig sig-neutral">Use 127.2% and 161.8% extensions as profit targets after entry</span>
</div>
</div>
</div>

<div class="indicator-row">
<div class="ind-icon-box ind-gold">📦</div>
<div class="ind-body">
<h4>Volume — The Confirmation Indicator</h4>
<p>Volume is the number of shares traded in a period. It's the "engine" behind price moves. A price move on high volume is meaningful and reliable. The same move on thin volume is suspect and often reverses. Always check volume before acting on any breakout or reversal signal.</p>
<div class="ind-signals">
<span class="sig sig-buy">Price breaks resistance on HIGH volume (1.5× avg) → confirmed breakout, strong BUY</span>
<span class="sig sig-sell">Price breaks resistance on LOW volume → likely false breakout, wait for confirmation</span>
<span class="sig sig-buy">Downtrend with DECREASING volume → sellers losing steam, reversal likely approaching</span>
<span class="sig sig-sell">Downtrend with INCREASING volume → sellers aggressive, avoid catching falling knife</span>
</div>
</div>
</div>

<h3>Support &amp; Resistance — The Foundation of All Trading</h3>
<p>Support is a price zone where buying interest is historically strong enough to halt a price decline — a "floor." Resistance is where selling pressure has repeatedly stopped advances — a "ceiling." When resistance is broken decisively, it often flips to become the new support, and vice versa. These zones form the backbone of every strategy.</p>

<!-- ===== SVG DIAGRAM 1: Support & Resistance ===== -->
<div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px 28px;margin:32px 0;">
<div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;">📊 Support &amp; Resistance — Visual Chart</div>
<svg viewBox="0 0 820 340" width="100%" style="max-width:820px;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <!-- Background -->
  <rect width="820" height="340" fill="#0e0e14" rx="10"/>
  <!-- Grid lines -->
  <line x1="60" y1="30" x2="780" y2="30" stroke="#1e1e2e" stroke-width="1"/>
  <line x1="60" y1="90" x2="780" y2="90" stroke="#1e1e2e" stroke-width="1"/>
  <line x1="60" y1="150" x2="780" y2="150" stroke="#1e1e2e" stroke-width="1"/>
  <line x1="60" y1="210" x2="780" y2="210" stroke="#1e1e2e" stroke-width="1"/>
  <line x1="60" y1="270" x2="780" y2="270" stroke="#1e1e2e" stroke-width="1"/>
  <!-- Y-axis labels -->
  <text x="50" y="93" fill="#4a4a70" font-family="JetBrains Mono" font-size="10" text-anchor="end">₹560</text>
  <text x="50" y="153" fill="#4a4a70" font-family="JetBrains Mono" font-size="10" text-anchor="end">₹520</text>
  <text x="50" y="213" fill="#4a4a70" font-family="JetBrains Mono" font-size="10" text-anchor="end">₹480</text>
  <text x="50" y="273" fill="#4a4a70" font-family="JetBrains Mono" font-size="10" text-anchor="end">₹440</text>

  <!-- RESISTANCE LINE (red dashed) at y=90 -->
  <line x1="60" y1="90" x2="780" y2="90" stroke="#ff4444" stroke-width="2" stroke-dasharray="10,5"/>
  <rect x="590" y="74" width="120" height="20" rx="4" fill="rgba(255,68,68,0.15)"/>
  <text x="650" y="87" fill="#ff4444" font-family="JetBrains Mono" font-size="10" text-anchor="middle" font-weight="600">RESISTANCE ₹560</text>

  <!-- SUPPORT LINE (green dashed) at y=210 -->
  <line x1="60" y1="210" x2="780" y2="210" stroke="#00e676" stroke-width="2" stroke-dasharray="10,5"/>
  <rect x="590" y="216" width="105" height="20" rx="4" fill="rgba(0,230,118,0.15)"/>
  <text x="643" y="229" fill="#00e676" font-family="JetBrains Mono" font-size="10" text-anchor="middle" font-weight="600">SUPPORT ₹480</text>

  <!-- Candlestick price path — uptrend hitting resistance, bouncing off support multiple times -->
  <!-- Candle helper: x=center, top=high, bot=low, open, close, color -->
  <!-- Bar 1 - small bull -->
  <line x1="80" y1="255" x2="80" y2="235" stroke="#00e676" stroke-width="1.5"/>
  <rect x="73" y="240" width="14" height="12" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="80" y1="252" x2="80" y2="262" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 2 - bull -->
  <line x1="110" y1="230" x2="110" y2="218" stroke="#00e676" stroke-width="1.5"/>
  <rect x="103" y="222" width="14" height="14" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="110" y1="236" x2="110" y2="245" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 3 - bull -->
  <line x1="140" y1="215" x2="140" y2="200" stroke="#00e676" stroke-width="1.5"/>
  <rect x="133" y="204" width="14" height="17" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="140" y1="221" x2="140" y2="228" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 4 - touches support at ₹480=210, bounces -->
  <line x1="170" y1="195" x2="170" y2="175" stroke="#00e676" stroke-width="1.5"/>
  <rect x="163" y="180" width="14" height="20" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="170" y1="200" x2="170" y2="212" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 5 - bull -->
  <line x1="200" y1="168" x2="200" y2="150" stroke="#00e676" stroke-width="1.5"/>
  <rect x="193" y="154" width="14" height="20" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="200" y1="174" x2="200" y2="182" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 6 - approaching resistance -->
  <line x1="230" y1="148" x2="230" y2="130" stroke="#00e676" stroke-width="1.5"/>
  <rect x="223" y="135" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="230" y1="153" x2="230" y2="160" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 7 - hits resistance, shooting star (rejection) -->
  <line x1="260" y1="85" x2="260" y2="90" stroke="#ff4444" stroke-width="1.5"/>
  <rect x="253" y="112" width="14" height="12" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
  <line x1="260" y1="124" x2="260" y2="132" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Shooting star wick label -->
  <text x="278" y="90" fill="#ff4444" font-family="JetBrains Mono" font-size="9">Rejected!</text>

  <!-- Bar 8 - bear pullback -->
  <line x1="290" y1="118" x2="290" y2="108" stroke="#ff4444" stroke-width="1.5"/>
  <rect x="283" y="122" width="14" height="18" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
  <line x1="290" y1="140" x2="290" y2="148" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Bar 9 - bear -->
  <line x1="320" y1="138" x2="320" y2="130" stroke="#ff4444" stroke-width="1.5"/>
  <rect x="313" y="150" width="14" height="22" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
  <line x1="320" y1="172" x2="320" y2="180" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Bar 10 - hits support again (bounce arrow) -->
  <line x1="350" y1="195" x2="350" y2="180" stroke="#ff4444" stroke-width="1.5"/>
  <rect x="343" y="198" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="350" y1="214" x2="350" y2="222" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Bounce label -->
  <text x="368" y="218" fill="#00e676" font-family="JetBrains Mono" font-size="9">Bounce!</text>

  <!-- Bar 11-12 rally -->
  <line x1="380" y1="175" x2="380" y2="162" stroke="#00e676" stroke-width="1.5"/>
  <rect x="373" y="168" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="380" y1="184" x2="380" y2="192" stroke="#00e676" stroke-width="1.5"/>
  <line x1="410" y1="155" x2="410" y2="140" stroke="#00e676" stroke-width="1.5"/>
  <rect x="403" y="144" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="410" y1="162" x2="410" y2="170" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 13 - approaching resistance again -->
  <line x1="440" y1="128" x2="440" y2="112" stroke="#00e676" stroke-width="1.5"/>
  <rect x="433" y="118" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="440" y1="136" x2="440" y2="144" stroke="#00e676" stroke-width="1.5"/>
  <!-- Bar 14 - BREAKOUT through resistance! Big bull candle -->
  <line x1="470" y1="78" x2="470" y2="65" stroke="#00e676" stroke-width="2"/>
  <rect x="462" y="80" width="16" height="36" rx="1" fill="rgba(0,230,118,0.4)" stroke="#00e676" stroke-width="2"/>
  <line x1="470" y1="116" x2="470" y2="122" stroke="#00e676" stroke-width="2"/>
  <!-- Breakout label -->
  <text x="492" y="75" fill="#00e676" font-family="Syne" font-size="10" font-weight="700">BREAKOUT!</text>
  <text x="492" y="88" fill="#00e676" font-family="JetBrains Mono" font-size="9">High Vol ↑</text>
  <!-- Breakout arrow -->
  <path d="M470 85 L470 96" stroke="#f5c842" stroke-width="2" marker-end="url(#arrowUp)"/>

  <!-- After breakout: old resistance becomes new support -->
  <line x1="500" y1="90" x2="780" y2="90" stroke="#00e676" stroke-width="1.5" stroke-dasharray="8,4"/>
  <rect x="590" y="93" width="145" height="18" rx="4" fill="rgba(0,230,118,0.12)"/>
  <text x="663" y="105" fill="#00e676" font-family="JetBrains Mono" font-size="9" text-anchor="middle">OLD RESISTANCE = NEW SUPPORT</text>

  <!-- Bar 15 pullback to new support -->
  <line x1="510" y1="60" x2="510" y2="48" stroke="#00e676" stroke-width="1.5"/>
  <rect x="503" y="62" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="510" y1="78" x2="510" y2="86" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Bar 16 -->
  <line x1="540" y1="55" x2="540" y2="42" stroke="#00e676" stroke-width="1.5"/>
  <rect x="533" y="58" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="540" y1="76" x2="540" y2="84" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Bar 17 - dips toward new support (pullback/retest) -->
  <line x1="570" y1="78" x2="570" y2="68" stroke="#ff4444" stroke-width="1.5"/>
  <rect x="563" y="85" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="570" y1="101" x2="570" y2="108" stroke="#ff4444" stroke-width="1.5"/>
  <!-- Retest label -->
  <text x="490" y="113" fill="#f5c842" font-family="JetBrains Mono" font-size="9">← Retest Entry</text>

  <!-- Bar 18-20 uptrend continues -->
  <line x1="610" y1="55" x2="610" y2="42" stroke="#00e676" stroke-width="1.5"/>
  <rect x="603" y="58" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="610" y1="74" x2="610" y2="82" stroke="#00e676" stroke-width="1.5"/>
  <line x1="640" y1="46" x2="640" y2="34" stroke="#00e676" stroke-width="1.5"/>
  <rect x="633" y="50" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
  <line x1="640" y1="68" x2="640" y2="75" stroke="#00e676" stroke-width="1.5"/>

  <!-- Labels: Buy zone arrow at support bounce -->
  <path d="M350 228 L350 218" stroke="#00e676" stroke-width="2" stroke-dasharray="3,2"/>
  <circle cx="350" cy="232" r="5" fill="rgba(0,230,118,0.3)" stroke="#00e676" stroke-width="1.5"/>
  <text x="310" y="250" fill="#00e676" font-family="Syne" font-size="10" font-weight="700">BUY ZONE</text>

  <!-- Sell zone at resistance -->
  <circle cx="260" cy="115" r="5" fill="rgba(255,68,68,0.3)" stroke="#ff4444" stroke-width="1.5"/>
  <text x="235" y="145" fill="#ff4444" font-family="Syne" font-size="10" font-weight="700">SELL ZONE</text>

  <!-- Arrow defs -->
  <defs>
    <marker id="arrowUp" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
      <path d="M0,8 L4,0 L8,8" fill="none" stroke="#f5c842" stroke-width="1.5"/>
    </marker>
  </defs>

  <!-- Title -->
  <text x="420" y="320" fill="#4a4a70" font-family="JetBrains Mono" font-size="10" text-anchor="middle">Price Chart — Support bounces → Breakout → Old Resistance becomes New Support → Retest entry</text>
</svg>
</div>

<!-- ===== SVG DIAGRAM 2: Trend Lines ===== -->
<div style="background:var(--card);border:1px solid var(--border);border-radius:16px;padding:24px 28px;margin:32px 0;">
<div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;">📐 Trend Lines — Uptrend, Downtrend &amp; Reversal</div>
<svg viewBox="0 0 820 280" width="100%" style="max-width:820px;display:block;margin:0 auto;" xmlns="http://www.w3.org/2000/svg">
  <rect width="820" height="280" fill="#0e0e14" rx="10"/>
  <!-- dividers -->
  <line x1="265" y1="20" x2="265" y2="260" stroke="#1e1e2e" stroke-width="1.5" stroke-dasharray="6,4"/>
  <line x1="550" y1="20" x2="550" y2="260" stroke="#1e1e2e" stroke-width="1.5" stroke-dasharray="6,4"/>

  <!-- === SECTION 1: UPTREND === -->
  <text x="132" y="35" fill="#00e676" font-family="Unbounded" font-size="11" text-anchor="middle" font-weight="700">UPTREND</text>
  <!-- Trendline (support) -->
  <line x1="70" y1="235" x2="255" y2="105" stroke="#00e676" stroke-width="2" stroke-dasharray="8,4"/>
  <!-- HH HL labels -->
  <!-- Candles rising -->
  <g fill="none">
    <!-- c1 -->
    <line x1="90" y1="228" x2="90" y2="215" stroke="#00e676" stroke-width="1.5"/>
    <rect x="83" y="218" width="14" height="14" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="90" y1="232" x2="90" y2="238" stroke="#00e676" stroke-width="1.5"/>
    <!-- HL label -->
    <text x="75" y="250" fill="#00e676" font-family="JetBrains Mono" font-size="9">HL</text>
    <!-- c2 -->
    <line x1="125" y1="202" x2="125" y2="188" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="118" y="205" width="14" height="14" rx="1" fill="rgba(255,68,68,0.2)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="125" y1="219" x2="125" y2="228" stroke="#ff4444" stroke-width="1.5"/>
    <!-- HH label -->
    <text x="133" y="185" fill="#00e676" font-family="JetBrains Mono" font-size="9">HH</text>
    <!-- c3 -->
    <line x1="155" y1="192" x2="155" y2="178" stroke="#00e676" stroke-width="1.5"/>
    <rect x="148" y="183" width="14" height="16" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="155" y1="199" x2="155" y2="208" stroke="#ff4444" stroke-width="1.5"/>
    <text x="140" y="213" fill="#00e676" font-family="JetBrains Mono" font-size="9">HL</text>
    <!-- c4 -->
    <line x1="190" y1="162" x2="190" y2="148" stroke="#00e676" stroke-width="1.5"/>
    <rect x="183" y="155" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="190" y1="173" x2="190" y2="182" stroke="#00e676" stroke-width="1.5"/>
    <text x="198" y="145" fill="#00e676" font-family="JetBrains Mono" font-size="9">HH</text>
    <!-- c5 -->
    <line x1="225" y1="140" x2="225" y2="125" stroke="#00e676" stroke-width="1.5"/>
    <rect x="218" y="130" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="225" y1="148" x2="225" y2="158" stroke="#00e676" stroke-width="1.5"/>
    <text x="210" y="162" fill="#00e676" font-family="JetBrains Mono" font-size="9">HL</text>
  </g>
  <text x="132" y="78" fill="#00e676" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Higher Highs + Higher Lows</text>
  <text x="132" y="90" fill="#4a4a70" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Buy pullbacks to trendline</text>

  <!-- === SECTION 2: DOWNTREND === -->
  <text x="407" y="35" fill="#ff4444" font-family="Unbounded" font-size="11" text-anchor="middle" font-weight="700">DOWNTREND</text>
  <!-- Trendline (resistance) -->
  <line x1="275" y1="90" x2="545" y2="210" stroke="#ff4444" stroke-width="2" stroke-dasharray="8,4"/>
  <!-- Candles falling -->
  <g fill="none">
    <line x1="295" y1="92" x2="295" y2="102" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="288" y="106" width="14" height="16" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="295" y1="122" x2="295" y2="130" stroke="#ff4444" stroke-width="1.5"/>
    <text x="280" y="88" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LH</text>

    <line x1="330" y1="115" x2="330" y2="105" stroke="#00e676" stroke-width="1.5"/>
    <rect x="323" y="120" width="14" height="18" rx="1" fill="rgba(0,230,118,0.2)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="330" y1="138" x2="330" y2="148" stroke="#ff4444" stroke-width="1.5"/>
    <text x="315" y="155" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LL</text>

    <line x1="365" y1="132" x2="365" y2="122" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="358" y="136" width="14" height="16" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="365" y1="152" x2="365" y2="160" stroke="#ff4444" stroke-width="1.5"/>
    <text x="350" y="118" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LH</text>

    <line x1="400" y1="155" x2="400" y2="144" stroke="#00e676" stroke-width="1.5"/>
    <rect x="393" y="158" width="14" height="18" rx="1" fill="rgba(0,230,118,0.2)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="400" y1="176" x2="400" y2="184" stroke="#ff4444" stroke-width="1.5"/>
    <text x="385" y="190" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LL</text>

    <line x1="435" y1="162" x2="435" y2="152" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="428" y="166" width="14" height="16" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="435" y1="182" x2="435" y2="190" stroke="#ff4444" stroke-width="1.5"/>
    <text x="420" y="148" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LH</text>

    <line x1="470" y1="182" x2="470" y2="170" stroke="#00e676" stroke-width="1.5"/>
    <rect x="463" y="186" width="14" height="20" rx="1" fill="rgba(0,230,118,0.2)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="470" y1="206" x2="470" y2="216" stroke="#ff4444" stroke-width="1.5"/>
    <text x="455" y="222" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LL</text>

    <line x1="522" y1="198" x2="522" y2="188" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="515" y="202" width="14" height="16" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="522" y1="218" x2="522" y2="226" stroke="#ff4444" stroke-width="1.5"/>
    <text x="507" y="184" fill="#ff4444" font-family="JetBrains Mono" font-size="9">LH</text>
  </g>
  <text x="407" y="255" fill="#ff4444" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Lower Highs + Lower Lows</text>
  <text x="407" y="267" fill="#4a4a70" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Don't buy falling knives</text>

  <!-- === SECTION 3: REVERSAL === -->
  <text x="685" y="35" fill="#f5c842" font-family="Unbounded" font-size="11" text-anchor="middle" font-weight="700">REVERSAL</text>
  <!-- Downtrend then breakout reversal -->
  <g fill="none">
    <!-- downtrend candles -->
    <line x1="578" y1="75" x2="578" y2="88" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="571" y="90" width="14" height="18" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="578" y1="108" x2="578" y2="116" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="608" y1="100" x2="608" y2="113" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="601" y="115" width="14" height="18" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="608" y1="133" x2="608" y2="142" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="638" y1="128" x2="638" y2="140" stroke="#ff4444" stroke-width="1.5"/>
    <rect x="631" y="142" width="14" height="20" rx="1" fill="rgba(255,68,68,0.25)" stroke="#ff4444" stroke-width="1.5"/>
    <line x1="638" y1="162" x2="638" y2="172" stroke="#ff4444" stroke-width="1.5"/>
    <!-- Morning Star reversal -->
    <!-- Small doji -->
    <line x1="668" y1="168" x2="668" y2="175" stroke="#888" stroke-width="1.5"/>
    <rect x="661" y="178" width="14" height="8" rx="1" fill="rgba(200,200,200,0.2)" stroke="#888" stroke-width="1.5"/>
    <line x1="668" y1="186" x2="668" y2="195" stroke="#888" stroke-width="1.5"/>
    <!-- big bull candle -->
    <line x1="698" y1="148" x2="698" y2="135" stroke="#00e676" stroke-width="2"/>
    <rect x="690" y="152" width="16" height="36" rx="1" fill="rgba(0,230,118,0.35)" stroke="#00e676" stroke-width="2"/>
    <line x1="698" y1="188" x2="698" y2="196" stroke="#00e676" stroke-width="2"/>
    <!-- Trend line break arrow -->
    <path d="M698 150 L698 138" stroke="#f5c842" stroke-width="2"/>
    <text x="715" y="135" fill="#f5c842" font-family="JetBrains Mono" font-size="9">Trend Break!</text>
    <!-- continuation up -->
    <line x1="730" y1="128" x2="730" y2="115" stroke="#00e676" stroke-width="1.5"/>
    <rect x="723" y="132" width="14" height="18" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="730" y1="150" x2="730" y2="158" stroke="#00e676" stroke-width="1.5"/>
    <line x1="760" y1="108" x2="760" y2="95" stroke="#00e676" stroke-width="1.5"/>
    <rect x="753" y="112" width="14" height="20" rx="1" fill="rgba(0,230,118,0.25)" stroke="#00e676" stroke-width="1.5"/>
    <line x1="760" y1="132" x2="760" y2="140" stroke="#00e676" stroke-width="1.5"/>
  </g>
  <!-- Morning Star label -->
  <text x="668" y="218" fill="#f5c842" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Morning Star</text>
  <text x="685" y="255" fill="#f5c842" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Trend reversals need confirmation</text>
  <text x="685" y="267" fill="#4a4a70" font-family="JetBrains Mono" font-size="9" text-anchor="middle">Pattern + Volume + Level</text>
</svg>
</div>

<div class="grid-2">
<div class="card">
<h4>🔍 How to Identify Key Levels</h4>
<p>Previous swing highs and lows on higher timeframes<br>
Round psychological numbers (₹100, ₹500, ₹1,000, ₹5,000)<br>
50-day and 200-day moving averages (dynamic S/R)<br>
Fibonacci retracement levels (38.2%, 50%, 61.8%)<br>
High-volume price areas and price gaps<br>
Weekly/Monthly pivot points</p>
</div>
<div class="card">
<h4>📋 Three Ways to Trade S/R</h4>
<p><strong class="green">Range Trading:</strong> Buy at support, sell at resistance when market is clearly sideways. Use RSI for confirmation.<br><br>
<strong class="gold">Breakout Trading:</strong> Enter when price breaks through a level on high volume. Target the measured move.<br><br>
<strong class="blue">Pullback/Retest:</strong> After breakout, wait for price to return to the broken level and confirm it as new support — best risk:reward entry.</p>
</div>
</div>
</div>
</section>

<!-- ===== MODULE 05: STRATEGIES ===== -->
<section id="strategies">
<div class="container">
<div class="section-eyebrow">Module 05 — Professional Trading Methods</div>
<h2>Proven Trading <span class="g">Strategies</span></h2>
<p class="lead">Professional traders don't guess — they follow defined, backtested systems. Here are the most widely used strategies, from beginner-friendly to advanced. Pick ONE to master before learning others.</p>

<div class="tabs" id="stratTabs">
<div class="tab active" data-tab="trend">Trend Following</div>
<div class="tab" data-tab="breakout">Breakout</div>
<div class="tab" data-tab="pullback">Pullback/Retest</div>
<div class="tab" data-tab="swing">Swing Trading</div>
<div class="tab" data-tab="momentum">Momentum</div>
<div class="tab" data-tab="value">Value Investing</div>
</div>

<div class="tab-pane active" id="tab-trend">
<div class="card">
<h4>📈 Trend Following Strategy — Best for Beginners</h4>
<p><strong>Philosophy:</strong> "The trend is your friend — until it bends at the end." Don't fight the market — ride it. Jason Graystone's course is built around this: identify the prevailing trend on higher timeframes, then find low-risk entries in that direction on lower timeframes.</p>
<br>
<p><strong>Step-by-Step Setup:</strong></p>
<p>1. Open a Daily chart. Confirm uptrend (higher highs + higher lows; price above 50-day EMA)<br>
2. Wait for a pullback — price retraces toward the 20 or 50-day EMA<br>
3. Look for a bullish reversal candlestick at the EMA (hammer, bullish engulfing, morning star)<br>
4. RSI should be between 40–60 (pulled back but not broken)<br>
5. Enter long on the next candle open after the signal candle<br>
6. Stop-loss: just below the recent swing low (not too tight)<br>
7. Target: next major resistance level (aim for at least 2:1 reward-to-risk)</p>
<br>
<p><strong>Confluence checklist:</strong> Uptrend ✓ | Pullback to EMA ✓ | Bullish candle signal ✓ | RSI not overbought ✓ | Volume declining on pullback (sellers weak) ✓</p>
<br>
<span class="pill pill-green">Best for Beginners</span>
<span class="pill pill-gold">Medium Risk</span>
<span class="pill pill-blue">Hold: Days to Weeks</span>
</div>
</div>

<div class="tab-pane" id="tab-breakout">
<div class="card">
<h4>💥 Breakout Strategy — Catch New Trends Early</h4>
<p><strong>Philosophy:</strong> When price breaks through a key resistance level with high volume after a period of consolidation, it signals the beginning of a potentially large new move. The goal is to enter early in a new trend before the crowd.</p>
<br>
<p><strong>Step-by-Step Setup:</strong></p>
<p>1. Find a stock consolidating in a tight range (low volatility, narrowing Bollinger Bands) near a key resistance zone<br>
2. Watch for the breakout: a candle that <em>closes</em> clearly above the resistance on volume at least 1.5× the 20-day average<br>
3. Enter on the close of the breakout candle OR wait for the first pullback to the broken resistance (now support)<br>
4. Stop-loss: just below the breakout level / back inside the range<br>
5. Target: measured move (height of the prior range added to the breakout point) or next major resistance<br>
6. RSI should be rising above 50 on the breakout, MACD histogram turning positive</p>
<br>
<p><strong>Key Warning:</strong> Low-volume breakouts fail 60–70% of the time. Volume IS the confirmation — never skip this check. Also watch for "fakeouts" that trap buyers before reversing — this is why waiting for a retest is often safer.</p>
<br>
<span class="pill pill-gold">Intermediate</span>
<span class="pill pill-gold">Medium-High Risk</span>
<span class="pill pill-blue">Hold: Days to Weeks</span>
</div>
</div>

<div class="tab-pane" id="tab-pullback">
<div class="card">
<h4>🎯 Pullback/Retest Strategy — The Professional's Entry</h4>
<p><strong>Philosophy:</strong> In a strong uptrend, don't chase price at highs. Instead, wait for price to pull back to a key level (EMA, Fibonacci, broken resistance = new support) and enter with a better price, tighter stop-loss, and superior risk:reward. This is the most common strategy used by professional swing traders.</p>
<br>
<p><strong>Step-by-Step Setup:</strong></p>
<p>1. Confirm the stock is in a strong uptrend (higher highs and higher lows; price above 50-day EMA)<br>
2. Wait for a breakout above a key resistance level<br>
3. Let price pull back and retest the broken resistance (now support)<br>
4. Look for a bullish reversal candlestick at the retest level (hammer, engulfing)<br>
5. RSI should be pulling back toward 40–50 — not broken, just resting<br>
6. Volume should decrease during the pullback (sellers weak) and ideally increase on the bullish reversal candle<br>
7. Enter on confirmation; stop-loss just below the retest level; target: 2× to 3× risk</p>
<br>
<p><strong>Why it works:</strong> You enter after a proven level has been confirmed as new support. Lower price, tighter stop, better R:R than chasing the initial breakout. This is the strategy combination of Fibonacci retracement + support/resistance flip that professional traders rely on.</p>
<br>
<span class="pill pill-green">Excellent R:R</span>
<span class="pill pill-blue">Used by Most Pro Traders</span>
<span class="pill pill-gold">Intermediate</span>
</div>
</div>

<div class="tab-pane" id="tab-swing">
<div class="card">
<h4>🔄 Swing Trading — The Best Style for Part-Time Traders</h4>
<p><strong>Philosophy:</strong> Capture "swings" in price — the short to medium-term movements between swing highs and swing lows. Positions held from 2 days to a few weeks. This is the most popular style among working professionals because you don't need to watch screens all day.</p>
<br>
<p><strong>Step-by-Step Setup:</strong></p>
<p>1. Scan for stocks near strong support or beginning a new move (Screener.in → filter for: price near 52-week low, RSI 30–50, above 200-day MA for quality stocks)<br>
2. Use Daily and 4-Hour charts to identify your setup — higher timeframes filter out noise<br>
3. Enter near support with a clear stop-loss just below it<br>
4. Target: previous swing high (minimum 2:1 R:R)<br>
5. Set a trailing stop-loss as the trade moves in your favor — let winners run<br>
6. Review your open positions once per day (after market close), not continuously</p>
<br>
<p><strong>The Swing Trader's Toolkit:</strong> RSI (14-period) • MACD (12,26,9) • Bollinger Bands • Candlestick patterns • Support/Resistance zones • Volume • 20/50/200 Moving Averages</p>
<br>
<p><strong>Mindset:</strong> Missing a trade is better than taking a bad trade. Wait for high-quality setups only. Quality over quantity.</p>
<br>
<span class="pill pill-green">Best for Part-Time Traders</span>
<span class="pill pill-gold">Medium Risk</span>
<span class="pill pill-blue">Hold: 2–14 Days</span>
</div>
</div>

<div class="tab-pane" id="tab-momentum">
<div class="card">
<h4>🚀 Momentum / Intraday Trading — Fast and Demanding</h4>
<p><strong>Philosophy:</strong> Stocks in motion tend to stay in motion. Find stocks making unusually large moves with high volume (news catalysts, earnings surprises, sector breakouts) and ride the momentum for quick profits. This requires fast decisions, iron discipline, and constant screen monitoring.</p>
<br>
<p><strong>Step-by-Step Setup (Long Side):</strong></p>
<p>1. Pre-market scan: stocks gapping up 3%+ on volume; stocks with news catalysts (earnings beat, product launch, FDA approval)<br>
2. RSI between 60–75 on the 5-minute chart — strong but not yet exhausted<br>
3. MACD histogram growing positively; price above all major MAs on 5-min and 15-min charts<br>
4. Enter on first pullback to VWAP (Volume Weighted Average Price) after the initial surge<br>
5. Tight stop-loss (1% below entry or below the VWAP); scale out in thirds at key resistance levels<br>
6. Never hold a momentum trade overnight unless you have a specific reason</p>
<br>
<p><strong>Critical Warning:</strong> Intraday / momentum trading is where 90% of beginners lose money. SEBI data consistently shows that 70–80% of F&amp;O and intraday traders lose money. Do not attempt until you have 6+ months of swing trading experience and are consistently profitable on paper first.</p>
<br>
<span class="pill pill-red">Advanced Only</span>
<span class="pill pill-red">High Risk</span>
<span class="pill pill-blue">Hold: Minutes to Hours</span>
</div>
</div>

<div class="tab-pane" id="tab-value">
<div class="card">
<h4>💎 Value / Growth Investing — Build Real Wealth Long-Term</h4>
<p><strong>Philosophy:</strong> Buy fundamentally excellent businesses at fair or discounted prices and hold for years or decades. Let compound interest work its magic. This is how Warren Buffett, Charlie Munger, and most great Indian investors built wealth. Humphrey Yang's video on stock basics emphasizes this foundation.</p>
<br>
<p><strong>What to Look For — The Quality Checklist:</strong></p>
<p>1. <strong>Competitive Moat:</strong> What makes this company hard to displace? (Brand power, patents, network effects, cost advantage, switching costs)<br>
2. <strong>Strong Financials:</strong> Revenue growing 10%+ CAGR, ROE above 15% consistently, low debt (D/E below 1.0), positive and growing free cash flow<br>
3. <strong>Good Management:</strong> Track record of honesty, shareholder-friendly capital allocation, high promoter holding (skin in the game)<br>
4. <strong>Fair Valuation:</strong> P/E below 5-year average and below sector peers; PEG ratio below 1.5 is attractive<br>
5. <strong>Long Runway:</strong> Large addressable market with room to grow for 10+ years<br>
6. <strong>Patience:</strong> Hold for 5–10+ years through market cycles. Time in the market beats timing the market.</p>
<br>
<p><strong>The Compound Effect:</strong> ₹1 lakh invested at 15% CAGR for 20 years = ₹16.4 lakhs. For 30 years = ₹66.2 lakhs. The last decade does most of the work. Start early.</p>
<br>
<span class="pill pill-green">Beginner Friendly</span>
<span class="pill pill-green">Lowest Stress</span>
<span class="pill pill-blue">Hold: Years to Decades</span>
</div>
</div>

<h3>Backtesting — Your Non-Negotiable First Step</h3>
<p>Before risking a single rupee with any strategy, you <strong>must backtest it</strong> against historical data. As Jason Graystone's full trading course makes clear: backtesting reveals whether your strategy has a statistical edge, builds confidence, and exposes flaws before the market exposes them for you at a cost.</p>
<div class="card card-accent" style="margin-top:20px;">
<h4>How to Backtest for Free on TradingView</h4>
<p>1. Open TradingView → select any Indian stock (e.g. Reliance, TCS) → set your timeframe (Daily for swing)<br>
2. Click the "Bar Replay" button (⏮ rewind icon) — this rewinds the chart to a date you choose<br>
3. Apply your strategy rules forward, bar by bar, as if trading live — paper trade manually<br>
4. Record every trade in a Google Sheet: Date | Stock | Entry Price | Stop-Loss | Target | Actual Exit | P&amp;L | R:R | Notes<br>
5. Run at least 50–100 trades across different market conditions (uptrend, downtrend, sideways)<br>
6. Calculate: Win Rate % and Average R:R per trade<br>
7. If Win Rate &gt; 50% with R:R ≥ 2:1 OR Win Rate &gt; 35% with R:R ≥ 3:1 → you have <strong>positive expectancy</strong> and can trade live with small size</p>
</div>
</div>
</section>


<!-- ===== MODULE 06: PORTFOLIO ===== -->
<section id="portfolio">
<div class="container">
<div class="section-eyebrow">Module 06 — Portfolio Construction</div>
<h2>Building Your <span class="g">Portfolio</span></h2>
<p class="lead">A portfolio is your collection of investments. The goal is not just picking good stocks — it's constructing a balanced mix that grows your wealth while letting you sleep at night through market downturns.</p>

<h3>Sample Beginner Portfolio Allocation</h3>
<div class="portfolio-viz">
<div class="port-donut-wrap">
<div style="position:relative;width:200px;height:200px;flex-shrink:0;">
<svg width="200" height="200" viewBox="0 0 200 200" style="transform:rotate(-90deg);">
<circle cx="100" cy="100" r="75" fill="none" stroke="#f5c842" stroke-width="30" stroke-dasharray="188.5 301.6" stroke-dashoffset="0"/>
<circle cx="100" cy="100" r="75" fill="none" stroke="#4da6ff" stroke-width="30" stroke-dasharray="117.8 372.3" stroke-dashoffset="-188.5"/>
<circle cx="100" cy="100" r="75" fill="none" stroke="#00e676" stroke-width="30" stroke-dasharray="94.2 395.9" stroke-dashoffset="-306.3"/>
<circle cx="100" cy="100" r="75" fill="none" stroke="#ff7043" stroke-width="30" stroke-dasharray="47.1 443" stroke-dashoffset="-400.5"/>
<circle cx="100" cy="100" r="75" fill="none" stroke="#b388ff" stroke-width="30" stroke-dasharray="23.6 466.5" stroke-dashoffset="-447.6"/>
<circle cx="100" cy="100" r="60" fill="var(--card)"/>
</svg>
<div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
<div style="font-family:'Unbounded',sans-serif;font-size:11px;font-weight:900;color:var(--gold);">BEGINNER</div>
<div style="font-family:'JetBrains Mono',monospace;font-size:9px;color:var(--muted);">PORTFOLIO</div>
</div>
</div>
<div class="port-legend">
<div class="port-item"><div class="port-dot" style="background:#f5c842;"></div><span class="port-item-name">Nifty 50 / Sensex Index ETF</span><span class="port-item-pct">40%</span></div>
<div class="port-item"><div class="port-dot" style="background:#4da6ff;"></div><span class="port-item-name">Flexi-cap / Large-cap Mutual Fund</span><span class="port-item-pct">25%</span></div>
<div class="port-item"><div class="port-dot" style="background:#00e676;"></div><span class="port-item-name">Individual Blue-chip Stocks (3–5 max)</span><span class="port-item-pct">20%</span></div>
<div class="port-item"><div class="port-dot" style="background:#ff7043;"></div><span class="port-item-name">Gold ETF / REITs (inflation hedge)</span><span class="port-item-pct">10%</span></div>
<div class="port-item"><div class="port-dot" style="background:#b388ff;"></div><span class="port-item-name">Cash / Liquid Fund (dry powder)</span><span class="port-item-pct">5%</span></div>
</div>
</div>
</div>

<h3>The 4 Pillars of Smart Portfolio Construction</h3>
<div class="grid-2">
<div class="card">
<h4>🌍 Diversification</h4>
<p>Spread across <strong>sectors</strong> (IT, Finance, Pharma, FMCG, Consumer, Auto, Energy), <strong>market caps</strong> (Large-cap core, mid-cap growth, small-cap satellites), and <strong>asset classes</strong> (Equity, Debt, Gold). When one sector falls, others may hold or rise. Morningstar's 2025 data showed international stocks returned 33.2% vs 17% for US stocks — proving global diversification consistently matters.</p>
</div>
<div class="card">
<h4>⚖️ Asset Allocation Formula</h4>
<p>The classic rule: <strong>(100 − Your Age) % in equities.</strong> Age 20 → 80% stocks, 20% bonds/safe assets. Age 40 → 60/40. This shifts automatically as you age and need more stability. Adjust aggressively upward if you have a very long time horizon and high risk tolerance — you can afford volatility when you have decades to recover.</p>
</div>
<div class="card">
<h4>🔄 Rebalancing — The Automated Discipline</h4>
<p>Review your portfolio allocation every 6–12 months. As some assets outperform, they become overweight — sell them (book some profit) and add to underweight assets. This mechanically enforces "buy low, sell high" without emotion. If Nifty grows your equity to 50% from target 40%, trim it and add to the 10% gold position.</p>
</div>
<div class="card">
<h4>💰 SIP — Your Most Powerful Tool</h4>
<p>Systematic Investment Plans let you invest ₹500–₹5,000 monthly regardless of market levels. When markets fall, you buy more units at lower prices (rupee cost averaging). When they rise, your existing units gain. ₹5,000/month in a Nifty 50 SIP for 20 years at 12% CAGR grows to approximately ₹1.8 crore on just ₹12 lakh invested. Start on Zerodha Coin or Groww today.</p>
</div>
</div>

<div class="callout callout-green">
<span class="callout-icon">🌱</span>
<div class="callout-body">
<h4>The Math of Compound Interest — Why Starting Early Changes Everything</h4>
<p>Investor A starts a ₹3,000/month SIP at age 20 and stops at 30 (10 years, ₹3.6 lakh invested). Investor B starts at 30 and continues to 60 (30 years, ₹10.8 lakh invested). At 60, assuming 12% CAGR: <strong>Investor A has ₹1.87 crore. Investor B has ₹1.05 crore.</strong> Starting 10 years earlier — investing LESS money — results in MORE wealth. Time is the most valuable asset in investing. Start now.</p>
</div>
</div>

<h3>Stock Screening — How to Find Quality Stocks</h3>
<p>Use <strong>Screener.in</strong> (free, India-focused) to filter stocks using custom formulas. Here's a quality-focused fundamental filter:</p>
<table class="conf-table">
<thead><tr><th>Metric</th><th>What to Look For</th><th>Why it Matters</th></tr></thead>
<tbody>
<tr><td>P/E Ratio</td><td>Below sector 5-year average; ideally below 40 for growth stocks</td><td>Are you overpaying? High P/E = high expectations baked in</td></tr>
<tr><td>ROE (Return on Equity)</td><td>Consistently above 15% for 3+ years</td><td>How efficiently does the company use your invested capital?</td></tr>
<tr><td>Debt-to-Equity Ratio</td><td>Below 1.0; prefer below 0.5</td><td>Lower debt = more resilient in economic downturns and rate hike cycles</td></tr>
<tr><td>Revenue Growth (CAGR)</td><td>10%+ over 3–5 years consistently</td><td>Is the underlying business actually growing its sales?</td></tr>
<tr><td>Promoter Holding</td><td>Above 40%; not declining over quarters</td><td>Founders have skin in the game. Pledging of shares is a red flag.</td></tr>
<tr><td>Free Cash Flow</td><td>Positive and growing year-over-year</td><td>Real cash in the bank, not just accounting profit that can be manipulated</td></tr>
<tr><td>Market Cap</td><td>Above ₹20,000 Cr for beginners (large-cap)</td><td>Stability, high liquidity, analyst coverage, lower manipulation risk</td></tr>
<tr><td>PEG Ratio</td><td>Below 1.5 (P/E divided by earnings growth rate)</td><td>A P/E of 40 with 40% growth = PEG of 1.0 — actually fair value</td></tr>
</tbody>
</table>
</div>
</section>

<!-- ===== MODULE 07: TAXES ===== -->
<section id="taxes">
<div class="container">
<div class="section-eyebrow">Module 07 — Taxation</div>
<h2>Stock Market <span class="g">Taxes in India</span></h2>
<p class="lead">Taxes are the most overlooked part of investing — but they significantly impact real returns. After Union Budget 2024, India's capital gains tax framework was overhauled. Know this before you trade.</p>

<div class="callout callout-gold">
<span class="callout-icon">⚠️</span>
<div class="callout-body">
<h4>Post-Budget 2024 Update — Effective July 23, 2024</h4>
<p>Finance Minister Nirmala Sitharaman restructured capital gains taxation significantly. LTCG on listed equity was hiked from 10% to <strong>12.5%</strong>, STCG was raised from 15% to <strong>20%</strong>, and indexation benefits were removed for most asset classes. The LTCG annual exemption was raised from ₹1 lakh to <strong>₹1.25 lakh</strong>. These rates remained unchanged in Budgets 2025 and 2026.</p>
</div>
</div>

<h3>Capital Gains Tax Rates (FY 2025-26)</h3>
<table class="tax-table">
<thead><tr><th>Investment Type</th><th>Holding Period</th><th>Classification</th><th>Tax Rate</th><th>Exemption</th></tr></thead>
<tbody>
<tr><td>Listed Equity Shares</td><td>12 months or less</td><td>STCG</td><td><span class="rate-high">20%</span></td><td>None — every rupee of STCG is taxable</td></tr>
<tr><td>Listed Equity Shares</td><td>More than 12 months</td><td>LTCG</td><td><span class="rate-mid">12.5%</span></td><td>First ₹1.25 lakh per financial year is tax-free</td></tr>
<tr><td>Equity Mutual Funds</td><td>12 months or less</td><td>STCG</td><td><span class="rate-high">20%</span></td><td>None</td></tr>
<tr><td>Equity Mutual Funds</td><td>More than 12 months</td><td>LTCG</td><td><span class="rate-mid">12.5%</span></td><td>₹1.25 lakh/year (combined with equity shares)</td></tr>
<tr><td>Debt Mutual Funds</td><td>Any holding period</td><td>Added to Income</td><td><span class="rate-high">As per your income slab</span></td><td>None</td></tr>
<tr><td>Gold ETFs / Gold Funds</td><td>More than 12 months</td><td>LTCG</td><td><span class="rate-mid">12.5%</span></td><td>Within the ₹1.25 lakh combined limit</td></tr>
<tr><td>F&amp;O (Futures &amp; Options)</td><td>Any period</td><td>Business Income</td><td><span class="rate-high">As per income slab (up to 30%)</span></td><td>Business expenses are deductible</td></tr>
<tr><td>Intraday Stock Trading</td><td>Same day</td><td>Speculative Business</td><td><span class="rate-high">As per income slab</span></td><td>Can only offset against speculative income</td></tr>
</tbody>
</table>

<h3>STT — Securities Transaction Tax</h3>
<p>STT is automatically deducted at the point of transaction by your broker — you cannot avoid it. Factor it into your P&amp;L calculations from day one.</p>
<div class="grid-3">
<div class="card"><h4>📦 Delivery (CNC)</h4><p>0.1% on both the buy AND sell leg. Applied on total transaction value. For ₹1,00,000 purchase = ₹100 STT.</p></div>
<div class="card"><h4>⚡ Intraday (MIS)</h4><p>0.025% on the sell leg only. For ₹1,00,000 intraday sell = ₹25 STT. But add to broker commissions for true cost.</p></div>
<div class="card"><h4>🔮 F&amp;O Options</h4><p>0.1% on the sell side of option exercise. Hiked significantly in Budget 2024 to curb rampant retail speculation in derivatives.</p></div>
</div>

<h3>Tax Loss Harvesting — The Legal Strategy to Reduce Tax</h3>
<p><strong>LTCG Harvesting:</strong> Since the first ₹1.25 lakh of LTCG is tax-free every financial year, sell long-term holdings in March to book gains up to ₹1.25 lakh, then <em>immediately repurchase</em> the same shares. This legally resets your cost basis higher and reduces your future taxable gain. Repeat every year. Over a decade, the savings compound significantly.</p>
<p><strong>Loss Harvesting:</strong> If you have unrealized losses in any stock and realized gains in others, sell the losing position before March 31 to set off the loss against the gain — reducing your tax bill. You can carry forward unabsorbed capital losses for up to 8 assessment years (subject to ITR filing rules).</p>

<div class="callout callout-blue">
<span class="callout-icon">📋</span>
<div class="callout-body">
<h4>Which ITR Form Should You File?</h4>
<p><strong>ITR-2:</strong> For individuals with income from salary + capital gains from listed shares/equity MFs only (no business income). Most beginner investors use this.<br><strong>ITR-3:</strong> Mandatory if you do ANY intraday trading or F&amp;O, as these are treated as business income/speculative income. A CA is strongly recommended for F&amp;O tax filing.<br>Download your Capital Gains Report and P&amp;L Statement from your broker's platform (Zerodha Console → Reports → Tax P&amp;L) before filing.</p>
</div>
</div>

<div class="cheat-wrap">
<h3>📌 Tax Quick-Reference Cheatsheet</h3>
<div class="cheat-cols">
<div class="cheat-col">
<h4>✅ Smart Tax Moves</h4>
<ul class="cheat-list">
<li>Hold equity investments longer than 12 months — saves 7.5% tax (12.5% vs 20%)</li>
<li>Harvest LTCG up to ₹1.25 lakh every March — fully tax-free</li>
<li>Set off short-term capital losses against STCG or LTCG gains in the same year</li>
<li>Carry forward capital losses for 8 years — ensure you file ITR on time to claim this</li>
<li>Use ELSS mutual funds for 80C deduction — combines tax saving with equity exposure</li>
<li>Download broker Tax P&amp;L report before April — makes ITR filing simple</li>
</ul>
</div>
<div class="cheat-col">
<h4>❌ Costly Tax Mistakes</h4>
<ul class="cheat-list">
<li>Trading F&amp;O without knowing it's taxed as business income (need ITR-3, not ITR-2)</li>
<li>Selling equity at 11 months instead of waiting 1 more month — costs 7.5% extra tax</li>
<li>Not filing ITR thinking gains are below exemption limit — STCG on equity always requires filing</li>
<li>Ignoring STT and brokerage in P&amp;L calculations — these reduce actual profitability significantly</li>
<li>Not reporting F&amp;O losses — you lose the ability to carry them forward and offset future profits</li>
</ul>
</div>
</div>
</div>
</div>
</section>

<!-- ===== MODULE 08: RISK ===== -->
<section id="risk">
<div class="container">
<div class="section-eyebrow">Module 08 — Capital Preservation</div>
<h2>Risk Management — <span class="g">The Real Skill</span></h2>
<p class="lead">Trading success is 20% picking the right stock and 80% managing risk. The greatest traders in the world lose on 40–50% of their trades. What separates them: when they lose, they lose small; when they win, they win big.</p>

<div class="callout callout-red">
<span class="callout-icon">🔥</span>
<div class="callout-body">
<h4>The 7 Most Common Beginner Mistakes (That Wipe Out Accounts)</h4>
<p>1. No stop-loss — holding losers and hoping they recover. 2. Over-sizing — putting too much of capital on one trade. 3. Trading on tips from friends, Telegram groups, YouTube channels. 4. Using margin/leverage before understanding risk. 5. Revenge trading — taking bigger risks after losses to "make it back." 6. Averaging down on losing positions (adding to a losing trade). 7. Overtrading — taking low-quality setups out of boredom.</p>
</div>
</div>

<h3>Risk by Asset Class</h3>
<div class="risk-list">
<div class="risk-row"><div class="risk-label">FD / Govt Bonds</div><div class="risk-track"><div class="risk-fill fill-low" style="width:7%;"></div></div><span class="risk-badge rb-low">Very Low</span></div>
<div class="risk-row"><div class="risk-label">Nifty 50 Index ETF</div><div class="risk-track"><div class="risk-fill fill-low" style="width:25%;"></div></div><span class="risk-badge rb-low">Low-Medium</span></div>
<div class="risk-row"><div class="risk-label">Flexi-cap Mutual Fund</div><div class="risk-track"><div class="risk-fill fill-mid" style="width:38%;"></div></div><span class="risk-badge rb-mid">Medium</span></div>
<div class="risk-row"><div class="risk-label">Large-cap Stocks</div><div class="risk-track"><div class="risk-fill fill-mid" style="width:50%;"></div></div><span class="risk-badge rb-mid">Medium-High</span></div>
<div class="risk-row"><div class="risk-label">Mid-cap Stocks</div><div class="risk-track"><div class="risk-fill fill-high" style="width:65%;"></div></div><span class="risk-badge rb-high">High</span></div>
<div class="risk-row"><div class="risk-label">Small-cap Stocks</div><div class="risk-track"><div class="risk-fill fill-high" style="width:78%;"></div></div><span class="risk-badge rb-high">Very High</span></div>
<div class="risk-row"><div class="risk-label">Crypto / F&amp;O</div><div class="risk-track"><div class="risk-fill fill-high" style="width:96%;"></div></div><span class="risk-badge rb-high">Extreme</span></div>
</div>

<h3>Position Sizing — The 1–2% Rule</h3>
<p>Never risk more than <strong>1–2% of your total trading capital on any single trade.</strong> This is not a suggestion — it is the law of trading survival. With this rule, you'd need 50+ consecutive losses to lose your account, which is statistically near-impossible with any decent strategy.</p>
<div class="card card-accent" style="margin-bottom:20px;">
<h4>💡 Position Sizing in Practice (₹1,00,000 Account)</h4>
<p>Max risk per trade = 2% = <strong>₹2,000</strong><br>
You want to buy a stock at ₹800 with a stop-loss at ₹760 (risk = ₹40 per share).<br>
Number of shares = ₹2,000 ÷ ₹40 = <strong>50 shares</strong> (position value = ₹40,000 = 40% of capital)<br>
If stopped out: lose ₹2,000 — your account is still ₹98,000. You live to trade another day.<br>
If target hit at ₹880 (R:R = 1:2): profit = 50 × ₹80 = <strong>₹4,000</strong> on 2% risk.</p>
</div>

<h3>Risk:Reward Ratio — Your Edge in Numbers</h3>
<div class="grid-3">
<div class="card">
<h4>40% Win Rate, 1:2 R:R</h4>
<p>10 trades: 4 wins × ₹2,000 = ₹8,000<br>6 losses × ₹1,000 = ₹6,000<br><strong class="green">Net: +₹2,000 profit ✓</strong></p>
</div>
<div class="card">
<h4>50% Win Rate, 1:2 R:R</h4>
<p>10 trades: 5 wins × ₹2,000 = ₹10,000<br>5 losses × ₹1,000 = ₹5,000<br><strong class="green">Net: +₹5,000 profit ✓✓</strong></p>
</div>
<div class="card">
<h4>35% Win Rate, 1:3 R:R</h4>
<p>10 trades: 3.5 wins × ₹3,000 = ₹10,500<br>6.5 losses × ₹1,000 = ₹6,500<br><strong class="green">Net: +₹4,000 profit ✓</strong></p>
</div>
</div>
<p style="margin-top:20px;">This is why a high win rate is <strong>not</strong> the only path to profitability. A trader with a 35% win rate and a disciplined 1:3 R:R beats a trader with a 60% win rate and 1:1 R:R. Focus on <strong>positive expectancy</strong>, not just wins.</p>

<div class="callout callout-gold">
<span class="callout-icon">🛡️</span>
<div class="callout-body">
<h4>The 5 Unbreakable Rules of Risk Management</h4>
<p><strong>Rule 1: Always use a stop-loss.</strong> No exceptions, no "just this once." | <strong>Rule 2: Risk max 1–2% of capital per trade.</strong> Size your position accordingly. | <strong>Rule 3: Plan your trade before entering.</strong> Know your entry, stop, and target before you click buy. | <strong>Rule 4: Never average down into a losing trade.</strong> If the market proved you wrong, accept it. | <strong>Rule 5: Keep a trading journal.</strong> Every trade, every lesson. Review weekly. The journal is your coach.</p>
</div>
</div>
</div>
</section>

<!-- ===== PAPER TRADING SIMULATOR ===== -->
<section id="papertrading">
<div class="container">
<div class="section-eyebrow">Live Simulator — Practice Arena</div>
<h2>Paper Trading <span class="g">Simulator</span></h2>
<p class="lead">Trade 20 real NSE-listed companies with ₹10,00,000 virtual capital. Prices are seeded from <strong>real Yahoo Finance data</strong> as a live baseline, then micro-fluctuate in real time to simulate market movement — exactly how professional paper trading simulators work. Zero real money at risk.</p>
</div>

<div style="max-width:1200px;margin:0 auto;padding:0 28px;">
<!-- Portfolio Summary Bar -->
<div id="pt-summary" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:24px;">
  <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;">PORTFOLIO VALUE</div>
    <div id="pt-total" style="font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;color:var(--gold);">₹10,00,000</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;">CASH BALANCE</div>
    <div id="pt-cash" style="font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;color:var(--text);">₹10,00,000</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;">UNREALISED P&amp;L</div>
    <div id="pt-pnl" style="font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;color:var(--muted);">₹0</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;">RETURN %</div>
    <div id="pt-ret" style="font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;color:var(--muted);">0.00%</div>
  </div>
  <div style="background:var(--card);border:1px solid var(--border);border-radius:12px;padding:18px 20px;">
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:6px;">TRADES MADE</div>
    <div id="pt-trades" style="font-family:'Unbounded',sans-serif;font-size:22px;font-weight:900;color:var(--text);">0</div>
  </div>
</div>

<!-- Market + Trade Panel -->
<div style="display:grid;grid-template-columns:1fr 340px;gap:20px;margin-bottom:24px;" id="pt-main-grid">
  <!-- Stock Grid -->
  <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;">
    <div style="padding:16px 20px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--gold);">LIVE MARKET — 20 STOCKS</div>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <div id="pt-data-badge"><span style="color:var(--muted);font-family:JetBrains Mono,monospace;font-size:10px;">⏳ Fetching live prices...</span></div>
        <div style="display:flex;align-items:center;gap:8px;">
          <div style="width:7px;height:7px;border-radius:50%;background:var(--green);animation:pulse 1.5s infinite;"></div>
          <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--green);">MARKET OPEN</span>
        </div>
      </div>
    </div>
    <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;" id="pt-market-table">
      <thead>
        <tr style="border-bottom:1px solid var(--border);">
          <th style="padding:10px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">SYMBOL</th>
          <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">PRICE</th>
          <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">CHANGE</th>
          <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">TREND</th>
          <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">HOLDING</th>
          <th style="padding:10px 16px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">ACTION</th>
          <th style="padding:10px 16px;text-align:center;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:1.5px;font-weight:400;">CHART</th>
        </tr>
      </thead>
      <tbody id="pt-tbody"></tbody>
    </table>
    </div>
  </div>

  <!-- Trade Panel + Holdings -->
  <div style="display:flex;flex-direction:column;gap:16px;">
    <!-- Order Entry -->
    <div style="background:var(--card);border:1px solid var(--border2);border-radius:14px;padding:22px;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--gold);margin-bottom:16px;">PLACE ORDER</div>
      <div id="pt-selected-info" style="background:var(--card2);border-radius:8px;padding:12px;margin-bottom:14px;font-size:13px;color:var(--muted);font-family:'JetBrains Mono',monospace;">← Select a stock from the market</div>
      <div style="margin-bottom:12px;">
        <label style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;letter-spacing:1px;display:block;margin-bottom:6px;">QTY</label>
        <input id="pt-qty" type="number" min="1" value="10" style="width:100%;background:var(--card2);border:1px solid var(--border2);color:var(--text);font-family:'JetBrains Mono',monospace;font-size:16px;padding:10px 14px;border-radius:8px;outline:none;"/>
      </div>
      <div style="margin-bottom:16px;">
        <label style="font-size:11px;color:var(--muted);font-family:'JetBrains Mono',monospace;letter-spacing:1px;display:block;margin-bottom:6px;">STOP-LOSS PRICE (optional)</label>
        <input id="pt-sl" type="number" placeholder="e.g. 480" style="width:100%;background:var(--card2);border:1px solid var(--border2);color:var(--text);font-family:'JetBrains Mono',monospace;font-size:14px;padding:10px 14px;border-radius:8px;outline:none;"/>
      </div>
      <div id="pt-order-cost" style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);margin-bottom:14px;padding:10px;background:var(--card2);border-radius:6px;">Cost: —</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
        <button onclick="ptOrder('BUY')" style="background:rgba(0,230,118,0.15);border:1px solid var(--green);color:var(--green);font-family:'Syne',sans-serif;font-weight:700;font-size:13px;padding:12px;border-radius:8px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(0,230,118,0.3)'" onmouseout="this.style.background='rgba(0,230,118,0.15)'">▲ BUY</button>
        <button onclick="ptOrder('SELL')" style="background:rgba(255,68,68,0.15);border:1px solid var(--red);color:var(--red);font-family:'Syne',sans-serif;font-weight:700;font-size:13px;padding:12px;border-radius:8px;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,68,68,0.3)'" onmouseout="this.style.background='rgba(255,68,68,0.15)'">▼ SELL</button>
      </div>
      <div id="pt-msg" style="margin-top:12px;font-size:12px;font-family:'JetBrains Mono',monospace;min-height:18px;text-align:center;"></div>
    </div>

    <!-- Holdings -->
    <div style="background:var(--card);border:1px solid var(--border);border-radius:14px;padding:22px;flex:1;">
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--gold);margin-bottom:14px;">MY HOLDINGS</div>
      <div id="pt-holdings" style="font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">No positions yet.</div>
    </div>
  </div>
</div>

<!-- Trade History -->
<div style="background:var(--card);border:1px solid var(--border);border-radius:14px;overflow:hidden;">
  <div style="padding:16px 20px;border-bottom:1px solid var(--border);">
    <div style="font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:3px;color:var(--gold);">TRADE HISTORY</div>
  </div>
  <div style="overflow-x:auto;">
  <table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr style="border-bottom:1px solid var(--border);">
        <th style="padding:10px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">#</th>
        <th style="padding:10px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">SYMBOL</th>
        <th style="padding:10px 16px;text-align:left;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">ACTION</th>
        <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">QTY</th>
        <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">PRICE</th>
        <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">TOTAL</th>
        <th style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);font-weight:400;">P&amp;L</th>
      </tr>
    </thead>
    <tbody id="pt-history"></tbody>
  </table>
  </div>
  <div id="pt-history-empty" style="padding:24px;text-align:center;font-size:13px;color:var(--muted);font-family:'JetBrains Mono',monospace;">No trades yet — select a stock and place your first order.</div>
</div>

</div>
</section>

<!-- ===== AI TUTOR ===== -->
<section id="aitutor">
<div class="container">
<div class="section-eyebrow">AI-Powered — Ask Anything</div>
<h2>Stock Market Academy <span class="g">AI Tutor</span></h2>
<p class="lead">Ask any question about stocks, trading, indicators, strategies, or the Indian market. Powered by Claude — get instant, expert-level answers tailored to your level.</p>

<div style="background:var(--card);border:1px solid var(--border2);border-radius:20px;overflow:hidden;">
  <!-- Chat Header -->
  <div style="background:linear-gradient(135deg,rgba(245,200,66,0.08),rgba(77,166,255,0.05));padding:20px 28px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:14px;">
    <div style="width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">🤖</div>
    <div>
      <div style="font-family:'Unbounded',sans-serif;font-size:14px;font-weight:900;color:var(--text);">Stock Market Academy AI Tutor</div>
      <div style="font-size:12px;color:var(--muted);margin-top:2px;">Stock market expert • Always available • Instant answers</div>
    </div>
    <div style="margin-left:auto;display:flex;align-items:center;gap:6px;">
      <div style="width:7px;height:7px;border-radius:50%;background:var(--green);animation:pulse 2s infinite;"></div>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--green);">ONLINE</span>
    </div>
  </div>

    <!-- Suggested questions -->
  <div style="padding:16px 28px;border-bottom:1px solid var(--border);display:flex;flex-wrap:wrap;gap:8px;" id="ai-suggestions">
    <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;align-self:center;margin-right:4px;">TRY:</span>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">What is RSI and how do I use it?</button>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">Explain a Hammer candlestick</button>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">How do I calculate position size?</button>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">What is LTCG tax in India?</button>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">Best strategy for beginners?</button>
    <button onclick="aiAsk(this.textContent)" style="background:var(--card2);border:1px solid var(--border);color:var(--text2);font-size:12px;padding:6px 14px;border-radius:20px;cursor:pointer;transition:all 0.2s;font-family:'Syne',sans-serif;" onmouseover="this.style.borderColor='var(--gold)';this.style.color='var(--gold)'" onmouseout="this.style.borderColor='var(--border)';this.style.color='var(--text2)'">Difference between SMA and EMA?</button>
  </div>

  <!-- Chat window -->
  <div id="ai-chat-window" style="height:480px;overflow-y:auto;padding:24px 28px;display:flex;flex-direction:column;gap:20px;scroll-behavior:smooth;">
    <!-- Welcome message -->
    <div style="display:flex;gap:12px;align-items:flex-start;">
      <div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">🤖</div>
      <div style="background:var(--card2);border:1px solid var(--border);border-radius:4px 14px 14px 14px;padding:14px 18px;max-width:75%;">
        <div style="font-size:14px;color:var(--text);line-height:1.65;">Hello! I'm the <strong>Stock Market Academy AI Tutor</strong> — your personal stock market expert. 📈<br><br>Ask me anything about trading, investing, technical analysis, candlestick patterns, indicators, portfolio construction, Indian market taxes, or any financial concept you're trying to understand. I'll explain it clearly, at whatever level you need.</div>
        <div style="font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:8px;">SMA AI • Ready</div>
      </div>
    </div>
  </div>

  <!-- Input area -->
  <div style="padding:20px 28px;border-top:1px solid var(--border);display:flex;gap:12px;align-items:flex-end;">
    <div style="flex:1;position:relative;">
      <textarea id="ai-input" placeholder="Ask anything about stocks, trading, or investing..." rows="2" style="width:100%;background:var(--card2);border:1px solid var(--border2);color:var(--text);font-family:'Syne',sans-serif;font-size:14px;padding:14px 18px;border-radius:12px;outline:none;resize:none;line-height:1.5;transition:border-color 0.2s;" onfocus="this.style.borderColor='var(--gold2)'" onblur="this.style.borderColor='var(--border2)'" onkeydown="if(event.key==='Enter'&&!event.shiftKey){event.preventDefault();aiSend();}"></textarea>
    </div>
    <button onclick="aiSend()" id="ai-send-btn" style="background:var(--gold);color:#000;border:none;border-radius:12px;width:48px;height:48px;font-size:20px;cursor:pointer;flex-shrink:0;transition:all 0.2s;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='var(--gold2)'" onmouseout="this.style.background='var(--gold)'">↑</button>
  </div>
</div>

<div style="margin-top:16px;padding:14px 20px;background:rgba(245,200,66,0.05);border:1px solid rgba(245,200,66,0.15);border-radius:10px;font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">
  ⚠️ AI responses are for educational purposes only — not financial advice. Always consult a SEBI-registered advisor before investing real money.
</div>
</div>
</section>

<!-- ===== QUIZ ===== -->
<section id="quiz">
<div class="container">
<div class="section-eyebrow">Final Assessment</div>
<h2>Test Your <span class="g">Knowledge</span></h2>
<p class="lead">10 questions covering everything from basics to strategies. No peeking back at the guide — see what you have genuinely retained.</p>
<div class="quiz-box">
<h3>🧠 Stock Market Academy — Knowledge Check</h3>
<p class="quiz-meta">Answer all 10 questions. Instant feedback and explanations after each answer.</p>
<div id="quiz-container"></div>
</div>
</div>
</section>


<!-- ===== CANDLESTICK CHART MODAL ===== -->
<div id="cs-modal" style="display:none;position:fixed;inset:0;z-index:9000;background:rgba(0,0,0,0.85);backdrop-filter:blur(6px);align-items:center;justify-content:center;padding:20px;">
  <div style="background:var(--card);border:1px solid var(--border2);border-radius:20px;width:100%;max-width:820px;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,0.6);">
    <div style="padding:18px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;">
      <div>
        <div id="cs-modal-sym" style="font-family:'Unbounded',sans-serif;font-size:18px;font-weight:900;color:var(--gold);letter-spacing:-1px;"></div>
        <div id="cs-modal-name" style="font-size:12px;color:var(--muted);margin-top:3px;font-family:'JetBrains Mono',monospace;"></div>
      </div>
      <div style="display:flex;align-items:center;gap:16px;">
        <div id="cs-modal-price" style="font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:700;color:var(--text);"></div>
        <div id="cs-modal-chg" style="font-family:'JetBrains Mono',monospace;font-size:13px;"></div>
        <button onclick="csClose()" style="background:var(--card2);border:1px solid var(--border2);color:var(--text2);width:36px;height:36px;border-radius:8px;cursor:pointer;font-size:18px;display:flex;align-items:center;justify-content:center;">✕</button>
      </div>
    </div>
    <!-- Chart timeframe tabs -->
    <div style="padding:12px 24px;border-bottom:1px solid var(--border);display:flex;gap:8px;">
      <button onclick="csSetTF(this,'1m')" class="cs-tf active-tf" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 14px;border-radius:6px;border:1px solid var(--gold);background:rgba(245,200,66,0.12);color:var(--gold);cursor:pointer;">1 min</button>
      <button onclick="csSetTF(this,'5m')" class="cs-tf" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 14px;border-radius:6px;border:1px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;">5 min</button>
      <button onclick="csSetTF(this,'15m')" class="cs-tf" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 14px;border-radius:6px;border:1px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;">15 min</button>
      <button onclick="csSetTF(this,'1h')" class="cs-tf" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 14px;border-radius:6px;border:1px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;">1 hr</button>
      <button onclick="csSetTF(this,'1d')" class="cs-tf" style="font-family:'JetBrains Mono',monospace;font-size:11px;padding:5px 14px;border-radius:6px;border:1px solid var(--border);background:transparent;color:var(--muted);cursor:pointer;">1 day</button>
      <div style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);align-self:center;">🕯 Candlestick chart — simulated OHLC data based on live price</div>
    </div>
    <div id="cs-chart-wrap" style="padding:16px 24px 8px;">
      <svg id="cs-chart-svg" viewBox="0 0 760 280" width="100%" style="display:block;overflow:visible;"></svg>
    </div>
    <!-- Volume -->
    <div id="cs-vol-wrap" style="padding:0 24px 8px;">
      <svg id="cs-vol-svg" viewBox="0 0 760 60" width="100%" style="display:block;"></svg>
    </div>
    <!-- MA Legend -->
    <div style="padding:8px 24px 16px;display:flex;gap:20px;flex-wrap:wrap;">
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#4da6ff;">— MA 9</span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#f5c842;">— MA 20</span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#b388ff;">— MA 50</span>
      <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);">Hover a candle for details</span>
      <div id="cs-hover-info" style="margin-left:auto;font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--gold);min-height:14px;"></div>
    </div>
  </div>
</div>
</main>

<footer>
<div class="footer-logo">STOCK MARKET<br>ACADEMY</div>
<p>Built with research from <a href="https://www.youtube.com/watch?v=_YVQN6_nkfs" target="_blank">Jason Graystone (Trading for Beginners Part 1)</a>, <a href="https://www.youtube.com/watch?v=rpDdQ0N2l50" target="_blank">Jason Graystone (Part 2)</a>, <a href="https://www.youtube.com/watch?v=bb6_M_srMBk" target="_blank">Humphrey Yang</a>, Zerodha Varsity, Morningstar 2025/2026 Research, 5Paisa, Strike.money, Screener.in, TradingView, NSE India, and Budget 2024 SEBI guidelines.</p>
<p style="margin-top:8px;color:#333;">For educational purposes only. Not financial advice. Consult a SEBI-registered investment advisor before making investment decisions.</p>
<p style="margin-top:16px;font-size:11px;color:#2a2a40;">📈 Markets reward the patient, disciplined, and curious. Start learning. Start small. Stay consistent. Never stop improving.</p>
</footer>

<script>
// Custom cursor
const cursor=document.getElementById('cursor'),ring=document.getElementById('cursorRing');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX-6+'px';cursor.style.top=e.clientY-6+'px';
  ring.style.left=e.clientX-18+'px';ring.style.top=e.clientY-18+'px';
});
document.querySelectorAll('a,button,.tab,.quiz-opt').forEach(el=>{
  el.addEventListener('mouseenter',()=>{cursor.style.transform='scale(2)';ring.style.transform='scale(1.5)';});
  el.addEventListener('mouseleave',()=>{cursor.style.transform='scale(1)';ring.style.transform='scale(1)';});
});

// Progress bar
window.addEventListener('scroll',()=>{
  const pct=(window.scrollY/(document.body.scrollHeight-window.innerHeight))*100;
  document.getElementById('progressBar').style.width=pct+'%';
});

// Nav active state
const sects=document.querySelectorAll('section[id]'),navAs=document.querySelectorAll('.nav a');
window.addEventListener('scroll',()=>{
  let cur='';
  sects.forEach(s=>{if(window.scrollY>=s.offsetTop-120)cur=s.id;});
  navAs.forEach(a=>{a.classList.remove('active');if(a.getAttribute('href')==='#'+cur)a.classList.add('active');});
});

// Strategy tabs
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    const pane=document.getElementById('tab-'+tab.dataset.tab);
    if(pane)pane.classList.add('active');
  });
});

// Quiz
// ============================================================
// QUIZ — 30-question pool, 10 random per attempt
// ============================================================
const questionPool=[
  {q:"A stock trades at ₹1,000 with 10 crore shares outstanding. What is its market cap?",opts:["₹100 Crore","₹1,000 Crore","₹10,000 Crore","₹1 Lakh Crore"],ans:2,exp:"Market Cap = Price × Total Shares = ₹1,000 × 10,00,00,000 = ₹10,000 Crore. Above ₹20,000 Cr is large-cap by most standard definitions."},
  {q:"A Hammer candlestick appears at the bottom of a downtrend with 2× average volume. What does it signal?",opts:["Continue the downtrend","A potential bullish reversal","Guaranteed price rise","Pure market indecision"],ans:1,exp:"A Hammer at the bottom of a downtrend with high volume signals buyers pushed back against sellers — a high-probability bullish reversal. Always wait for the next candle to confirm."},
  {q:"The RSI of a stock reads 27. Which is most accurate?",opts:["Overbought — consider selling","Oversold — potential buy zone","RSI below 30 guarantees a rise","Ignore this signal"],ans:1,exp:"RSI below 30 = oversold territory. The stock may have been sold too aggressively. It's a potential buy zone — not a guarantee. Combine with a bullish candle at support for higher probability."},
  {q:"What happens in a MACD Golden Cross?",opts:["Price crosses above the 200-day MA","MACD line crosses above the Signal Line","Signal Line crosses above MACD","Histogram turns green"],ans:1,exp:"MACD Golden Cross = MACD Line crosses ABOVE Signal Line. Short-term momentum is outpacing long-term — a bullish signal. The opposite (Death Cross) signals bearish momentum."},
  {q:"You buy at ₹500, stop-loss at ₹470, target at ₹560. What is your Risk:Reward ratio?",opts:["1:1","1:2","2:1","3:1"],ans:1,exp:"Risk = ₹30 (₹500−₹470). Reward = ₹60 (₹560−₹500). R:R = 1:2. You risk ₹1 to make ₹2. A 1:2 R:R means you stay profitable with just 40% wins."},
  {q:"You hold listed equity for 14 months, sell at ₹2,00,000 profit. LTCG tax owed? (FY 2025-26)",opts:["₹25,000","₹9,375","Zero","₹20,000"],ans:1,exp:"LTCG on equity >12 months = 12.5%. First ₹1.25L exempt. Taxable = ₹75,000. Tax = 12.5% × ₹75,000 = ₹9,375."},
  {q:"What does Opportunity Confluence mean (Jason Graystone)?",opts:["Trading the most popular stocks","Multiple factors aligning to confirm a high-probability setup","Using 10+ indicators simultaneously","Following tips from social media"],ans:1,exp:"Confluence = multiple independent factors agreeing on the same trade. Hammer at support + RSI oversold + MACD crossover + high volume = strong confluence. More alignment = higher probability."},
  {q:"₹80,000 trading capital. Maximum risk per trade using the 2% rule?",opts:["₹800","₹1,600","₹8,000","₹16,000"],ans:1,exp:"2% of ₹80,000 = ₹1,600. You need 50 consecutive losses to blow the account — nearly impossible with any decent strategy. This rule is the backbone of capital preservation."},
  {q:"Three consecutive large bearish candles each closing lower — what pattern?",opts:["Morning Star","Bearish Engulfing","Three Black Crows","Evening Star"],ans:2,exp:"Three Black Crows = three large bearish candles each opening within the prior body and closing lower. Signals strong sustained selling — a major reversal pattern after an uptrend."},
  {q:"Safest first investment for an Indian beginner?",opts:["F&O for quick returns","Penny stocks","Nifty 50 Index Fund via SIP","Intraday trading on small-caps"],ans:2,exp:"Nifty 50 Index Fund via SIP: diversified (50 top companies), low cost (0.05–0.20% expense ratio), historically 12–14% CAGR over long periods. Zero stock-picking skill required."},
  {q:"What does a Doji candlestick indicate?",opts:["Strong bullish momentum","Strong bearish momentum","Market indecision — neither buyers nor sellers won","Always signals a reversal"],ans:2,exp:"A Doji = open ≈ close, with equal wicks both sides. Neither bulls nor bears won this period. It signals indecision. Always watch the NEXT candle to determine which side takes control."},
  {q:"Bollinger Bands squeeze (bands narrow significantly). What does this mean?",opts:["The stock is overbought","Volatility is low — a large breakout is imminent","The trend is strongly bullish","Sell immediately"],ans:1,exp:"A Bollinger Squeeze = volatility compresses to very low levels. This historically precedes a large price move. Watch the direction of the breakout carefully — it could go either way."},
  {q:"A Shooting Star appears after a strong uptrend. What does it signal?",opts:["Continue buying the uptrend","A potential bearish reversal","Guaranteed price drop","Strong bullish momentum"],ans:1,exp:"Shooting Star = small body at the bottom, long upper wick, after an uptrend. Buyers pushed price higher but sellers rejected the new highs. Bearish reversal warning — look for confirmation next candle."},
  {q:"50-day MA crosses ABOVE the 200-day MA. What is this called?",opts:["Death Cross","Double Top","Golden Cross","Bull Trap"],ans:2,exp:"When the 50-day MA crosses above the 200-day MA, it's called a Golden Cross — one of the most widely watched long-term bullish signals. The opposite (50-day crosses below 200-day) is the Death Cross."},
  {q:"Which Fibonacci level is called the Golden Ratio and is the most powerful retracement zone?",opts:["38.2%","50.0%","61.8%","78.6%"],ans:2,exp:"61.8% is the Golden Ratio, derived directly from the Fibonacci sequence. It is the most widely watched retracement level — in an uptrend, a pullback to 61.8% is considered a high-probability buy zone."},
  {q:"What is ROE and what does a high ROE indicate?",opts:["Return on Equity — measures how profitably a company uses shareholder funds","Rate of Earnings — measures revenue growth","Risk on Equity — measures investment risk","Return on Exchange — measures market returns"],ans:0,exp:"ROE = Net Profit ÷ Shareholders Equity. A consistently high ROE (above 15%) means the company generates strong profits from each rupee of investor capital. Companies like Asian Paints and HDFC Bank are known for high sustained ROE."},
  {q:"Intraday trading is classified as what type of income for Indian tax purposes?",opts:["Long-term capital gains","Short-term capital gains","Speculative business income","Tax-free income"],ans:2,exp:"Intraday trading (buying and selling the same stock on the same day) is treated as SPECULATIVE BUSINESS INCOME under Indian tax law. It is taxed at your income slab rate and requires ITR-3 filing."},
  {q:"What does a Bullish Engulfing pattern look like?",opts:["A small green candle followed by a large red candle","A large green candle that fully engulfs the previous red candle","Two candles with the same low","A red candle inside a green candle"],ans:1,exp:"Bullish Engulfing = a large green candle whose body completely covers (engulfs) the prior red candle's body. Signals decisive buying pressure overtaking sellers. Most powerful when it appears at a key support level after a downtrend."},
  {q:"You have a 40% win rate with an average 1:2 R:R. Over 10 trades risking ₹1,000 each, what is your net P&L?",opts:["-₹2,000 (losing)","Breakeven","₹2,000 profit","₹5,000 profit"],ans:2,exp:"4 wins × ₹2,000 = ₹8,000. 6 losses × ₹1,000 = ₹6,000. Net = +₹2,000. This proves you can be profitable with a below-50% win rate if your R:R is at least 1:2. Positive expectancy is everything."},
  {q:"What is the key difference between SMA and EMA?",opts:["SMA is faster; EMA is slower","EMA weights recent prices more heavily and reacts faster to price changes","SMA is only for long-term; EMA is only for intraday","They are identical — different names for the same indicator"],ans:1,exp:"SMA (Simple Moving Average) averages all prices equally. EMA (Exponential Moving Average) gives more weight to recent prices, making it react faster to new price moves. Traders often use EMA for entries and SMA for trend confirmation."},
  {q:"What does Support/Resistance Flip mean?",opts:["A support level reverses and becomes stronger support","When a resistance level is broken, it often becomes new support","A technical glitch in chart software","When price gaps over a resistance level"],ans:1,exp:"Support/Resistance Flip (also called Role Reversal): once a resistance level is broken convincingly, it flips to become new support. This is why traders use 'retest entries' — waiting for price to return to the broken level and confirm the flip."},
  {q:"STT (Securities Transaction Tax) on equity delivery trades in India?",opts:["0.01% on sell side only","0.025% on buy and sell","0.1% on both buy and sell sides","No STT on delivery trades"],ans:2,exp:"STT on equity delivery = 0.1% on both the buy AND sell leg of each transaction. It is automatically deducted by your broker and cannot be avoided. On ₹1 lakh transaction, STT = ₹100 per leg, ₹200 total round-trip."},
  {q:"What is the Morning Star candlestick pattern?",opts:["A single large bullish candle after a downtrend","Three candles: bearish → small doji → large bullish","Two candles with the same low","A gap up opening after a downtrend"],ans:1,exp:"Morning Star = 3-candle reversal pattern: (1) Large bearish candle, (2) Small doji or indecision candle (gap down), (3) Large bullish candle closing above the midpoint of candle 1. One of the most reliable bullish reversal patterns."},
  {q:"What does 'P/E Ratio' tell you about a stock?",opts:["How much profit the company makes per employee","How many years of current earnings you're paying for one share","The percentage return you'll earn each year","How much debt the company has relative to equity"],ans:1,exp:"P/E = Price ÷ EPS (Earnings Per Share). A P/E of 25 means you're paying 25 years of current earnings for one share. Compare P/E with the sector average and historical range. High P/E = high growth expectation; low P/E = potentially undervalued (or slow growing)."},
  {q:"What is Rupee Cost Averaging in SIP investing?",opts:["Always buying at the lowest monthly price","Buying a fixed amount each month regardless of price — automatically buying more units when cheap","Averaging down on losing stocks","Splitting a lump sum into equal monthly parts"],ans:1,exp:"Rupee Cost Averaging via SIP: you invest ₹5,000 every month no matter what. When the market is down, ₹5,000 buys MORE units (cheaper). When up, fewer units. Over time, your average cost per unit is lower than buying in a lump sum at the wrong time."},
  {q:"What is the key risk of 'averaging down' in a losing trade?",opts:["You reduce your average cost (always beneficial)","You can multiply losses if the stock continues falling with no recovery","It is guaranteed to work if you wait long enough","There is no risk — it is always the correct strategy"],ans:1,exp:"Averaging down (buying more of a falling stock to reduce average cost) multiplies your position size in a losing trade. If the stock continues falling — or worse, goes to zero — your total loss is far larger than your original position. Professional traders have hard rules against this."},
  {q:"Which order type automatically sells your position if price drops to a pre-set level?",opts:["Market Order","Limit Order","Stop-Loss Order","GTT Order"],ans:2,exp:"Stop-Loss Order: once price falls to your stop level, it automatically triggers a sell (converting to a market or limit order). Non-negotiable for every trade. A GTT (Good Till Triggered) achieves the same but stays active for days/weeks without constant monitoring."},
  {q:"What does FII net buying in Indian markets generally indicate?",opts:["Foreign institutional investors are selling Indian stocks","Foreign funds are putting money into Indian markets — generally a bullish signal","Retail investors are exiting","SEBI is intervening in the market"],ans:1,exp:"FII (Foreign Institutional Investor) net buying = large foreign funds are purchasing Indian stocks. Their capital flows significantly move markets. Sustained FII buying usually supports an uptrend. FII data is published daily by NSE and is widely tracked."},
  {q:"In a strong uptrend, which pullback level is considered the most powerful re-entry zone?",opts:["23.6% Fibonacci retracement","38.2% Fibonacci retracement","61.8% Fibonacci retracement (Golden Ratio)","100% retracement"],ans:2,exp:"The 61.8% Fibonacci retracement (the Golden Ratio) is the deepest high-probability pullback zone in a strong uptrend. When price retraces to 61.8% and shows a bullish reversal candle with decreasing volume, it is one of the highest-probability buy setups available."},
  {q:"What does a P/E ratio of 60 tell you about investor expectations?",opts:["The stock is definitely overvalued and should be sold","Investors expect very strong future earnings growth — they're paying a premium for it","The company has low debt","The stock will return 60% this year"],ans:1,exp:"A high P/E (e.g. 60) means investors are paying a large premium over current earnings because they expect high future growth. It doesn't automatically mean overvalued — a company growing earnings at 40% CAGR with a P/E of 60 has a PEG ratio of 1.5, which may be reasonable. Context is everything."}
];

// Fisher-Yates shuffle
function shuffle(arr){
  const a=[...arr];
  for(let i=a.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}

let questions=[], cur=0, score=0, answered=false;

function quizInit(){
  questions=shuffle(questionPool).slice(0,10);
  cur=0; score=0; answered=false;
  renderQ();
}

function renderQ(){
  answered=false;
  const q=questions[cur];
  document.getElementById('quiz-container').innerHTML=`
    <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--muted);letter-spacing:2px;margin-bottom:12px;">QUESTION ${cur+1} OF 10</div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-opts">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="pick(${i})">${String.fromCharCode(65+i)}. ${o}</button>`).join('')}</div>
    <div class="quiz-explain" id="qexp"><strong>💡 Explanation:</strong> ${q.exp}</div>
    <div class="quiz-nav">
      <span class="quiz-prog">Score so far: ${score}/${cur} ${score>0?'✓':''}</span>
      <button class="btn-primary" id="nxtBtn" onclick="nextQ()" style="display:none;padding:10px 24px;font-size:13px;">${cur<9?'Next Question →':'See Final Results'}</button>
    </div>`;
}

function pick(i){
  if(answered)return;
  answered=true;
  const q=questions[cur];
  if(i===q.ans)score++;
  document.querySelectorAll('.quiz-opt').forEach((o,idx)=>{
    o.disabled=true;
    if(idx===q.ans)o.classList.add('correct');
    else if(idx===i)o.classList.add('wrong');
  });
  document.getElementById('qexp').classList.add('show');
  document.getElementById('nxtBtn').style.display='block';
}

function nextQ(){
  cur++;
  if(cur>=questions.length){
    const pct=Math.round((score/10)*100);
    const emoji=pct>=80?'🏆':pct>=60?'📈':'📚';
    const grade=pct>=90?'Expert':pct>=80?'Advanced':pct>=60?'Intermediate':'Beginner';
    const msg=pct>=80?'Outstanding! You have a solid foundation. Move to the Paper Trading simulator.':pct>=60?'Good progress! Review the modules you missed, then try a fresh set.':'Keep studying — revisit the guide and take a new set of questions. Each attempt is different!';
    document.getElementById('quiz-container').innerHTML=`
      <div style="text-align:center;padding:20px;">
        <div style="font-size:64px;margin-bottom:16px;">${emoji}</div>
        <div style="font-family:'Unbounded',sans-serif;font-size:56px;font-weight:900;color:var(--gold);letter-spacing:-3px;">${score}<span style="font-size:32px;color:var(--muted);">/10</span></div>
        <div style="font-family:'JetBrains Mono',monospace;font-size:13px;color:var(--gold);margin:8px 0;">${pct}% · ${grade} Level</div>
        <div style="font-size:15px;color:var(--muted);max-width:480px;margin:16px auto 32px;line-height:1.6;">${msg}</div>
        <div style="background:var(--card2);border-radius:10px;padding:14px 20px;max-width:360px;margin:0 auto 28px;font-size:12px;color:var(--muted);font-family:'JetBrains Mono',monospace;">
          Each attempt draws 10 random questions from a pool of 30.<br>You'll likely see different questions next time!
        </div>
        <div style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;">
          <button class="btn-primary" onclick="quizInit()">New Question Set →</button>
          <a class="btn-outline" href="#basics">Review Guide</a>
        </div>
      </div>`;
  } else {renderQ();}
}

quizInit();

// ============================================================
// PAPER TRADING SIMULATOR — Real baseline prices via Yahoo Finance
// ============================================================

// Stock definitions with Yahoo Finance .NS tickers and fallback prices
const PT_STOCKS = [
  {sym:'RELIANCE',  name:'Reliance Industries',      yf:'RELIANCE.NS',  price:2847, sector:'Energy'},
  {sym:'TCS',       name:'Tata Consultancy Services',yf:'TCS.NS',       price:3912, sector:'IT'},
  {sym:'HDFCBANK',  name:'HDFC Bank',                yf:'HDFCBANK.NS',  price:1634, sector:'Banking'},
  {sym:'INFY',      name:'Infosys',                  yf:'INFY.NS',      price:1479, sector:'IT'},
  {sym:'ICICIBANK', name:'ICICI Bank',               yf:'ICICIBANK.NS', price:1189, sector:'Banking'},
  {sym:'WIPRO',     name:'Wipro',                    yf:'WIPRO.NS',     price:467,  sector:'IT'},
  {sym:'BAJFINANCE',name:'Bajaj Finance',            yf:'BAJFINANCE.NS',price:7224, sector:'NBFC'},
  {sym:'TATAMOTORS',name:'Tata Motors',              yf:'TATAMOTORS.NS',price:825,  sector:'Auto'},
  {sym:'SUNPHARMA', name:'Sun Pharma',               yf:'SUNPHARMA.NS', price:1623, sector:'Pharma'},
  {sym:'MARUTI',    name:'Maruti Suzuki',            yf:'MARUTI.NS',    price:12304,sector:'Auto'},
  {sym:'ASIANPAINT',name:'Asian Paints',             yf:'ASIANPAINT.NS',price:2856, sector:'FMCG'},
  {sym:'LTIM',      name:'LTIMindtree',              yf:'LTIM.NS',      price:5432, sector:'IT'},
  {sym:'AXISBANK',  name:'Axis Bank',                yf:'AXISBANK.NS',  price:1098, sector:'Banking'},
  {sym:'NESTLEIND', name:'Nestle India',             yf:'NESTLEIND.NS', price:2367, sector:'FMCG'},
  {sym:'HINDUNILVR',name:'HUL',                      yf:'HINDUNILVR.NS',price:2198, sector:'FMCG'},
  {sym:'TITAN',     name:'Titan Company',            yf:'TITAN.NS',     price:3421, sector:'Consumer'},
  {sym:'POWERGRID', name:'Power Grid',               yf:'POWERGRID.NS', price:298,  sector:'Utility'},
  {sym:'ONGC',      name:'ONGC',                     yf:'ONGC.NS',      price:267,  sector:'Energy'},
  {sym:'COALINDIA', name:'Coal India',               yf:'COALINDIA.NS', price:434,  sector:'Mining'},
  {sym:'HCLTECH',   name:'HCL Technologies',         yf:'HCLTECH.NS',   price:1876, sector:'IT'},
];

// Per-stock intraday volatility profile (% move per tick — matches NSE typical ranges)
const PT_VOL = [1.4,1.1,0.9,1.2,1.0,1.4,2.1,2.2,1.3,1.0,
                0.9,1.5,1.2,0.7,0.8,1.6,1.0,1.3,1.2,1.1];

let ptPrices     = PT_STOCKS.map(s=>s.price);  // starts with fallback, updated by fetch
let ptPrev       = [...ptPrices];
let ptOpen       = [...ptPrices];               // real open/last price becomes the anchor
let ptTrend      = PT_STOCKS.map(()=>(Math.random()>0.5?1:-1)*(0.001+Math.random()*0.003));
let ptMini       = PT_STOCKS.map(()=>[]);
let ptLiveLoaded = false;
let ptTickerInterval = null;

// Show live data badge status
function ptSetDataBadge(live){
  const el = document.getElementById('pt-data-badge');
  if(!el) return;
  if(live){
    el.innerHTML='<span style="color:var(--green);font-family:JetBrains Mono,monospace;font-size:10px;">🟢 LIVE BASELINE (Yahoo Finance)</span>';
  } else {
    el.innerHTML='<span style="color:var(--orange);font-family:JetBrains Mono,monospace;font-size:10px;">🟡 SIMULATION MODE (market closed / offline)</span>';
  }
}

// Fetch live prices from our /api/stocks backend route
// Yahoo Finance's v8 quote endpoint returns current price data
async function ptFetchLivePrices(){
  try {
    // Call our own backend API — server fetches Yahoo Finance without CORS issues
    const res = await fetch('/api/stocks');
    if(!res.ok) throw new Error(`API error: ${res.status}`);
    const data = await res.json();

    if(data.isLive && data.prices){
      let fetched = 0;
      PT_STOCKS.forEach((s,i)=>{
        const p = data.prices[s.sym];
        if(p && p.price > 0){
          ptPrices[i] = p.price;
          ptOpen[i]   = p.open   || p.price;
          ptPrev[i]   = p.prevClose || p.price;
          fetched++;
        }
      });
      if(fetched >= 10){
        ptLiveLoaded = true;
        ptSetDataBadge(true);
        PT_STOCKS.forEach((_,i)=>{ ptMini[i]=[ptPrices[i],ptPrices[i],ptPrices[i]]; });
        console.log(`[SMA] Live prices loaded for ${fetched} stocks via /api/stocks`);
      } else {
        ptSetDataBadge(false);
      }
    } else {
      // Backend returned fallback data (market closed / Yahoo down)
      ptSetDataBadge(false);
      console.warn('[SMA] Backend returned simulation baseline:', data.message);
    }
  } catch(e){
    console.warn('[SMA] /api/stocks failed:', e.message);
    ptSetDataBadge(false);
  }

  ptRenderTable();
  ptRenderSummary();
  if(!ptTickerInterval) ptTickerInterval = setInterval(ptTick, 2500);
}

// Refresh live baseline every 3 minutes (Yahoo Finance rate-limit friendly)
// Refresh live prices every 60 seconds from our backend
setInterval(async ()=>{
  if(document.visibilityState==='visible') await ptFetchLivePrices();
}, 60*1000);

let ptCash   = 1000000;
let ptHoldings = {};   // sym -> {qty, avgCost, stopLoss}
let ptHistory  = [];
let ptSelected = null;
let ptTradeCount = 0;

function ptFmt(n){
  if(Math.abs(n)>=10000000) return '₹'+(n/10000000).toFixed(2)+'Cr';
  if(Math.abs(n)>=100000)   return '₹'+(n/100000).toFixed(2)+'L';
  return '₹'+n.toLocaleString('en-IN',{maximumFractionDigits:2});
}
function ptFmtSmall(n){
  return '₹'+n.toLocaleString('en-IN',{maximumFractionDigits:2});
}

// Realistic price simulation with mean-reversion + trend + noise
function ptTick(){
  ptPrev = [...ptPrices];
  for(let i=0;i<ptPrices.length;i++){
    const vol = PT_VOL[i]*0.01;
    // Gaussian-ish noise
    const u1=Math.random(), u2=Math.random();
    const noise = Math.sqrt(-2*Math.log(u1+0.0001))*Math.cos(2*Math.PI*u2)*vol*0.4;
    // Slow mean reversion to base + trend drift
    const drift = ptTrend[i]*0.3;
    // Random trend flip (2% chance per tick)
    if(Math.random()<0.02) ptTrend[i]*=-1;
    // Circuit breaker ±8% from open
    let newP = ptPrices[i]*(1+drift+noise);
    const lo = ptOpen[i]*0.92, hi = ptOpen[i]*1.08;
    newP = Math.min(hi, Math.max(lo, newP));
    ptPrices[i] = Math.round(newP*100)/100;
    // Sparkline history (keep last 20)
    ptMini[i].push(ptPrices[i]);
    if(ptMini[i].length>20) ptMini[i].shift();
  }
  // Check stop-losses
  Object.keys(ptHoldings).forEach(sym=>{
    const idx = PT_STOCKS.findIndex(s=>s.sym===sym);
    const h = ptHoldings[sym];
    if(h.stopLoss && ptPrices[idx]<=h.stopLoss){
      const proceeds = h.qty * ptPrices[idx];
      const realizedPnl = proceeds - h.qty*h.avgCost;
      ptCash += proceeds;
      ptHistory.unshift({sym, action:'SELL (SL)', qty:h.qty, price:ptPrices[idx], total:proceeds, pnl:realizedPnl, auto:true});
      delete ptHoldings[sym];
      ptShowMsg(`⚠️ Stop-loss triggered on ${sym} @ ${ptFmtSmall(ptPrices[idx])}`, '#ff4444');
    }
  });
  ptRenderTable();
  ptRenderSummary();
  ptRenderHoldings();
  ptRenderHistory();
}

function ptSparkline(data, up){
  if(data.length<2) return '';
  const w=80,h=28;
  const mn=Math.min(...data), mx=Math.max(...data), rng=mx-mn||1;
  const pts = data.map((v,i)=>`${(i/(data.length-1))*w},${h-(((v-mn)/rng)*(h-4)+2)}`).join(' ');
  const col = up ? '#00e676' : '#ff4444';
  return `<svg width="${w}" height="${h}" style="display:block;"><polyline points="${pts}" fill="none" stroke="${col}" stroke-width="1.5" stroke-linejoin="round"/></svg>`;
}

function ptRenderTable(){
  const tb = document.getElementById('pt-tbody');
  if(!tb) return;
  let html='';
  PT_STOCKS.forEach((s,i)=>{
    const p=ptPrices[i], prev=ptPrev[i];
    const chg=p-prev, chgPct=((chg/prev)*100);
    const up=chg>=0;
    const held = ptHoldings[s.sym];
    const heldTxt = held ? `<span style="color:var(--gold);font-weight:700;">${held.qty}</span>` : `<span style="color:var(--muted);">—</span>`;
    const sel = ptSelected===s.sym;
    html+=`<tr style="border-bottom:1px solid var(--border);cursor:pointer;transition:background 0.15s;${sel?'background:rgba(245,200,66,0.07);':''}" onclick="ptSelect('${s.sym}')" onmouseover="this.style.background='rgba(255,255,255,0.03)'" onmouseout="this.style.background='${sel?'rgba(245,200,66,0.07)':'transparent'}'">
      <td style="padding:10px 16px;">
        <div style="font-weight:700;font-size:13px;color:var(--text);font-family:'JetBrains Mono',monospace;">${s.sym}</div>
        <div style="font-size:10px;color:var(--muted);margin-top:2px;">${s.sector}</div>
      </td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:var(--text);">${ptFmtSmall(p)}</td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px;color:${up?'#00e676':'#ff4444'};">${up?'▲':'▼'} ${Math.abs(chgPct).toFixed(2)}%</td>
      <td style="padding:10px 16px;text-align:right;">${ptSparkline(ptMini[i],up)}</td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px;">${heldTxt}</td>
      <td style="padding:10px 16px;text-align:center;">
        <button onclick="event.stopPropagation();ptSelect('${s.sym}');ptOrder('BUY')" style="background:rgba(0,230,118,0.12);border:1px solid rgba(0,230,118,0.3);color:var(--green);font-size:10px;padding:4px 10px;border-radius:5px;cursor:pointer;font-family:'JetBrains Mono',monospace;margin-right:4px;">B</button>
        <button onclick="event.stopPropagation();ptSelect('${s.sym}');ptOrder('SELL')" style="background:rgba(255,68,68,0.12);border:1px solid rgba(255,68,68,0.3);color:var(--red);font-size:10px;padding:4px 10px;border-radius:5px;cursor:pointer;font-family:'JetBrains Mono',monospace;">S</button>
      </td>
    </tr>`;
  });
  tb.innerHTML=html;
}

function ptSelect(sym){
  ptSelected=sym;
  const idx=PT_STOCKS.findIndex(s=>s.sym===sym);
  const s=PT_STOCKS[idx], p=ptPrices[idx];
  const held=ptHoldings[sym];
  document.getElementById('pt-selected-info').innerHTML=
    `<div style="margin-bottom:6px;"><span style="color:var(--gold);font-weight:700;">${sym}</span> <span style="color:var(--muted);font-size:11px;">${s.name}</span></div>
     <div style="color:var(--text);font-size:15px;font-weight:700;">CMP: ${ptFmtSmall(p)}</div>
     ${held?`<div style="color:var(--green);font-size:11px;margin-top:4px;">Holding: ${held.qty} shares @ avg ${ptFmtSmall(held.avgCost)}</div>`:''}`;
  // Auto-fill stop loss suggestion (2% below)
  if(!document.getElementById('pt-sl').value){
    document.getElementById('pt-sl').value = Math.round(p*0.98*100)/100;
  }
  ptUpdateCost();
  ptRenderTable();
}

function ptUpdateCost(){
  if(!ptSelected) return;
  const idx=PT_STOCKS.findIndex(s=>s.sym===ptSelected);
  const qty=parseInt(document.getElementById('pt-qty').value)||0;
  const cost=qty*ptPrices[idx];
  const el=document.getElementById('pt-order-cost');
  if(el) el.textContent=`Cost: ${ptFmtSmall(cost)} | Cash: ${ptFmt(ptCash)}`;
}

document.addEventListener('input',e=>{
  if(e.target.id==='pt-qty'||e.target.id==='pt-sl') ptUpdateCost();
});

function ptOrder(action){
  if(!ptSelected){ptShowMsg('Select a stock first','#f5c842');return;}
  const idx=PT_STOCKS.findIndex(s=>s.sym===ptSelected);
  const qty=parseInt(document.getElementById('pt-qty').value)||0;
  const slVal=parseFloat(document.getElementById('pt-sl').value)||null;
  if(qty<=0){ptShowMsg('Enter a valid quantity','#f5c842');return;}
  const p=ptPrices[idx];
  const sym=ptSelected;

  if(action==='BUY'){
    const cost=qty*p;
    if(cost>ptCash){ptShowMsg('❌ Insufficient cash!','#ff4444');return;}
    ptCash-=cost;
    if(ptHoldings[sym]){
      const h=ptHoldings[sym];
      const totalQty=h.qty+qty;
      const totalCost=h.qty*h.avgCost+cost;
      ptHoldings[sym]={qty:totalQty, avgCost:totalCost/totalQty, stopLoss:slVal||h.stopLoss};
    } else {
      ptHoldings[sym]={qty, avgCost:p, stopLoss:slVal};
    }
    ptTradeCount++;
    ptHistory.unshift({sym,action:'BUY',qty,price:p,total:cost,pnl:null});
    ptShowMsg(`✅ Bought ${qty} ${sym} @ ${ptFmtSmall(p)}`,'#00e676');
  } else {
    const held=ptHoldings[sym];
    if(!held||held.qty<qty){ptShowMsg('❌ Not enough shares to sell!','#ff4444');return;}
    const proceeds=qty*p;
    const pnl=proceeds-qty*held.avgCost;
    ptCash+=proceeds;
    ptHoldings[sym].qty-=qty;
    if(ptHoldings[sym].qty===0) delete ptHoldings[sym];
    ptTradeCount++;
    ptHistory.unshift({sym,action:'SELL',qty,price:p,total:proceeds,pnl});
    ptShowMsg(`${pnl>=0?'✅':'📉'} Sold ${qty} ${sym} @ ${ptFmtSmall(p)} | P&L: ${pnl>=0?'+':''}${ptFmtSmall(pnl)}`, pnl>=0?'#00e676':'#ff4444');
  }
  ptRenderHoldings();
  ptRenderSummary();
  ptRenderHistory();
  ptRenderTable();
}

function ptShowMsg(msg,color){
  const el=document.getElementById('pt-msg');
  if(!el)return;
  el.style.color=color;
  el.textContent=msg;
  setTimeout(()=>{if(el)el.textContent='';},4000);
}

function ptRenderSummary(){
  let unrealised=0;
  Object.keys(ptHoldings).forEach(sym=>{
    const idx=PT_STOCKS.findIndex(s=>s.sym===sym);
    const h=ptHoldings[sym];
    unrealised+=(ptPrices[idx]-h.avgCost)*h.qty;
  });
  const total=ptCash+Object.keys(ptHoldings).reduce((acc,sym)=>{
    const idx=PT_STOCKS.findIndex(s=>s.sym===sym);
    return acc+ptPrices[idx]*ptHoldings[sym].qty;
  },0);
  const ret=((total-1000000)/1000000)*100;

  const te=document.getElementById('pt-total'), ce=document.getElementById('pt-cash');
  const pe=document.getElementById('pt-pnl'), re=document.getElementById('pt-ret');
  const tc=document.getElementById('pt-trades');
  if(te) te.textContent=ptFmt(total);
  if(ce) ce.textContent=ptFmt(ptCash);
  if(pe){
    pe.textContent=(unrealised>=0?'+':'')+ptFmtSmall(unrealised);
    pe.style.color=unrealised>=0?'var(--green)':'var(--red)';
  }
  if(re){
    re.textContent=(ret>=0?'+':'')+ret.toFixed(2)+'%';
    re.style.color=ret>=0?'var(--green)':'var(--red)';
  }
  if(tc) tc.textContent=ptTradeCount;
}

function ptRenderHoldings(){
  const el=document.getElementById('pt-holdings');
  if(!el)return;
  const keys=Object.keys(ptHoldings);
  if(!keys.length){el.innerHTML='<span style="color:var(--muted);">No positions yet.</span>';return;}
  let html='<div style="display:flex;flex-direction:column;gap:10px;">';
  keys.forEach(sym=>{
    const idx=PT_STOCKS.findIndex(s=>s.sym===sym);
    const h=ptHoldings[sym], p=ptPrices[idx];
    const pnl=(p-h.avgCost)*h.qty, up=pnl>=0;
    html+=`<div style="background:var(--card2);border-radius:8px;padding:10px 12px;border-left:3px solid ${up?'var(--green)':'var(--red)'};">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span style="font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--text);">${sym}</span>
        <span style="font-family:'JetBrains Mono',monospace;font-size:11px;color:${up?'var(--green)':'var(--red)'};">${up?'+':''}${ptFmtSmall(pnl)}</span>
      </div>
      <div style="font-size:11px;color:var(--muted);margin-top:3px;font-family:'JetBrains Mono',monospace;">${h.qty} shares · avg ${ptFmtSmall(h.avgCost)} · CMP ${ptFmtSmall(p)}${h.stopLoss?` · SL ${ptFmtSmall(h.stopLoss)}`:''}</div>
    </div>`;
  });
  html+='</div>';
  el.innerHTML=html;
}

function ptRenderHistory(){
  const tb=document.getElementById('pt-history'), em=document.getElementById('pt-history-empty');
  if(!tb)return;
  if(!ptHistory.length){if(em)em.style.display='block';tb.innerHTML='';return;}
  if(em)em.style.display='none';
  tb.innerHTML=ptHistory.slice(0,20).map((t,i)=>{
    const pnlTxt = t.pnl!==null ? `<span style="color:${t.pnl>=0?'var(--green)':'var(--red)'};font-weight:700;">${t.pnl>=0?'+':''}${ptFmtSmall(t.pnl)}</span>` : '<span style="color:var(--muted);">—</span>';
    const actColor = t.action.startsWith('BUY')?'var(--green)':'var(--red)';
    return `<tr style="border-bottom:1px solid var(--border);">
      <td style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);">${ptHistory.length-i}</td>
      <td style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:12px;font-weight:700;color:var(--text);">${t.sym}</td>
      <td style="padding:10px 16px;font-family:'JetBrains Mono',monospace;font-size:11px;color:${actColor};">${t.action}</td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text2);">${t.qty}</td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text2);">${ptFmtSmall(t.price)}</td>
      <td style="padding:10px 16px;text-align:right;font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--text2);">${ptFmtSmall(t.total)}</td>
      <td style="padding:10px 16px;text-align:right;">${pnlTxt}</td>
    </tr>`;
  }).join('');
}

// Init sparkline seed data
PT_STOCKS.forEach((_,i)=>{ for(let j=0;j<6;j++) ptMini[i].push(ptPrices[i]); });
ptRenderTable();
ptRenderSummary();

// Tick every 2.5 seconds — started by ptFetchLivePrices once prices are ready

// Kick off live price fetch immediately
ptFetchLivePrices();

// Responsive grid
function ptCheckGrid(){
  const g=document.getElementById('pt-main-grid');
  if(!g)return;
  g.style.gridTemplateColumns = window.innerWidth<800?'1fr':'1fr 340px';
}
ptCheckGrid();
window.addEventListener('resize',ptCheckGrid);


// ============================================================
// ============================================================
// AI TUTOR — calls /api/chat (Gemini backend, free)
// ============================================================
let aiHistory = [];
let aiLoading  = false;
function aiRenderMsg(role,text){
  const win=document.getElementById('ai-chat-window');
  if(!win)return;
  const isUser=role==='user';
  const div=document.createElement('div');
  div.style.cssText='display:flex;gap:12px;align-items:flex-start;'+(isUser?'flex-direction:row-reverse;':'');
  const avatar=document.createElement('div');
  avatar.style.cssText=`width:34px;height:34px;border-radius:10px;background:${isUser?'var(--border2)':'linear-gradient(135deg,var(--gold),var(--orange))'};display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;`;
  avatar.textContent=isUser?'👤':'🤖';
  const bubble=document.createElement('div');
  bubble.style.cssText=`background:${isUser?'rgba(245,200,66,0.1)':'var(--card2)'};border:1px solid ${isUser?'rgba(245,200,66,0.25)':'var(--border)'};border-radius:${isUser?'14px 4px 14px 14px':'4px 14px 14px 14px'};padding:14px 18px;max-width:78%;`;
  const fmt=text
    .replace(/\*\*(.*?)\*\*/g,'<strong style="color:var(--text);">$1</strong>')
    .replace(/`(.*?)`/g,'<code style="background:var(--card);padding:2px 6px;border-radius:4px;font-family:JetBrains Mono,monospace;font-size:12px;color:var(--gold);">$1</code>')
    .replace(/\n/g,'<br>');
  bubble.innerHTML=`<div style="font-size:14px;color:${isUser?'var(--gold)':'var(--text)'};line-height:1.65;">${fmt}</div>
    <div style="font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace;margin-top:6px;">${isUser?'You':'Stock Market Academy AI'} · ${new Date().toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'})}</div>`;
  div.appendChild(avatar);
  div.appendChild(bubble);
  win.appendChild(div);
  win.scrollTop=win.scrollHeight;
}

function aiRenderTyping(){
  const win=document.getElementById('ai-chat-window');
  if(!win)return;
  const div=document.createElement('div');
  div.id='ai-typing';
  div.style.cssText='display:flex;gap:12px;align-items:flex-start;';
  div.innerHTML=`<div style="width:34px;height:34px;border-radius:10px;background:linear-gradient(135deg,var(--gold),var(--orange));display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;">🤖</div>
    <div style="background:var(--card2);border:1px solid var(--border);border-radius:4px 14px 14px 14px;padding:14px 18px;">
      <div style="display:flex;gap:5px;align-items:center;height:20px;">
        <div style="width:8px;height:8px;border-radius:50%;background:var(--gold);animation:pulse 1s ease infinite;"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:var(--gold);animation:pulse 1s ease 0.25s infinite;"></div>
        <div style="width:8px;height:8px;border-radius:50%;background:var(--gold);animation:pulse 1s ease 0.5s infinite;"></div>
      </div>
    </div>`;
  win.appendChild(div);
  win.scrollTop=win.scrollHeight;
}

async function aiSend(){
  const inp=document.getElementById('ai-input');
  const msg=(inp.value||'').trim();
  if(!msg||aiLoading)return;
  inp.value='';
  aiAsk(msg);
}

async function aiAsk(msg){
  if(!msg||aiLoading)return;
  
  aiLoading=true;
  const btn=document.getElementById('ai-send-btn');
  if(btn){btn.style.opacity='0.5';btn.style.cursor='not-allowed';}
  aiRenderMsg('user',msg);
  aiHistory.push({role:'user',content:msg});
  aiRenderTyping();

  try{
    const res=await fetch('/api/chat',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({ messages: aiHistory.slice(-14) })
    });

    const typing=document.getElementById('ai-typing');
    if(typing)typing.remove();

    if(!res.ok){
      let errMsg=`Server error ${res.status}`;
      try{const e=await res.json();errMsg=e?.error||errMsg;}catch(_){}
      if(res.status===429) aiRenderMsg('assistant','⏳ **Rate limit reached.** Gemini allows 15 requests/minute — wait a moment and try again.');
      else aiRenderMsg('assistant',`❌ ${errMsg}`);
    } else {
      const d=await res.json();
      const reply=d?.reply;
      if(reply){
        aiHistory.push({role:'assistant',content:reply});
        aiRenderMsg('assistant',reply);
      } else {
        aiRenderMsg('assistant','Empty response from AI. Please try rephrasing.');
      }
    }
  }catch(e){
    const typing=document.getElementById('ai-typing');
    if(typing)typing.remove();
    aiRenderMsg('assistant',`❌ **Connection failed:** ${e.message}`);
  }
  aiLoading=false;
  if(btn){btn.style.opacity='1';btn.style.cursor='pointer';}
}


// ============================================================
// CANDLESTICK CHART ENGINE
// ============================================================
let csStockIdx = -1;
let csTF = '1m';
let csOHLCCache = {}; // stockIdx -> {tf -> [candles]}
let csAnimFrame = null;
let csLiveInterval = null;

function csOpen(idx){
  csStockIdx = idx;
  const s = PT_STOCKS[idx];
  document.getElementById('cs-modal-sym').textContent  = s.sym;
  document.getElementById('cs-modal-name').textContent = s.name + ' · ' + s.sector;
  document.getElementById('cs-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
  csRebuild(idx, csTF);
  if(csLiveInterval) clearInterval(csLiveInterval);
  csLiveInterval = setInterval(()=>{ if(csStockIdx>=0) csAppendLiveTick(); }, 2500);
}

function csClose(){
  document.getElementById('cs-modal').style.display = 'none';
  document.body.style.overflow = '';
  csStockIdx = -1;
  if(csLiveInterval){ clearInterval(csLiveInterval); csLiveInterval=null; }
}

// Close on backdrop click
document.getElementById('cs-modal').addEventListener('click', function(e){
  if(e.target===this) csClose();
});
document.addEventListener('keydown',e=>{ if(e.key==='Escape') csClose(); });

function csSetTF(btn, tf){
  csTF = tf;
  document.querySelectorAll('.cs-tf').forEach(b=>{
    b.style.borderColor='var(--border)';b.style.background='transparent';b.style.color='var(--muted)';
  });
  btn.style.borderColor='var(--gold)';btn.style.background='rgba(245,200,66,0.12)';btn.style.color='var(--gold)';
  if(csStockIdx>=0) csRebuild(csStockIdx, tf);
}

// Generate realistic OHLC history seeded from current price
function csGenerateOHLC(idx, tf, count){
  const basePrice = ptPrices[idx];
  const vol = PT_VOL[idx] * 0.01;
  // Scale volatility per timeframe
  const tfScale = {
    '1m':0.15, '5m':0.30, '15m':0.45, '1h':0.65, '1d':1.0
  }[tf] || 0.3;
  const v = vol * tfScale;

  const candles = [];
  // Work backwards from current price
  let price = basePrice;
  for(let i=count-1;i>=0;i--){
    const u1=Math.random(),u2=Math.random();
    const noise = Math.sqrt(-2*Math.log(u1+1e-9))*Math.cos(2*Math.PI*u2)*v;
    const open  = Math.round(price * 100)/100;
    const drift = (Math.random()-0.492)*v*0.5;
    const close = Math.round(open*(1+noise+drift)*100)/100;
    const hi    = Math.round(Math.max(open,close)*(1+Math.abs(noise)*0.6+Math.random()*v*0.4)*100)/100;
    const lo    = Math.round(Math.min(open,close)*(1-Math.abs(noise)*0.6-Math.random()*v*0.4)*100)/100;
    const vol_  = Math.round(50000 + Math.random()*200000 + Math.abs(noise)*2000000);
    candles.unshift({o:open,h:hi,l:lo,c:close,v:vol_,idx:i});
    price = open * (1 - drift*0.3);
  }
  return candles;
}

function csRebuild(idx, tf){
  if(!csOHLCCache[idx]) csOHLCCache[idx]={};
  if(!csOHLCCache[idx][tf]){
    const counts={'1m':60,'5m':60,'15m':48,'1h':48,'1d':60};
    csOHLCCache[idx][tf] = csGenerateOHLC(idx, tf, counts[tf]||50);
  }
  const candles = csOHLCCache[idx][tf];
  csDrawChart(idx, candles);
}

// Append a live tick as a new candle (or update last)
function csAppendLiveTick(){
  if(csStockIdx<0) return;
  const idx = csStockIdx;
  const tf = csTF;
  if(!csOHLCCache[idx]||!csOHLCCache[idx][tf]) return;
  const candles = csOHLCCache[idx][tf];
  const last = candles[candles.length-1];
  const p = ptPrices[idx];
  // Update last candle's close, hi, lo with latest tick
  last.c = p;
  last.h = Math.max(last.h, p);
  last.l = Math.min(last.l, p);
  last.v += Math.round(Math.random()*10000);
  csDrawChart(idx, candles);
}

function csSMA(closes, period){
  return closes.map((_,i)=>{
    if(i<period-1) return null;
    return closes.slice(i-period+1,i+1).reduce((a,b)=>a+b,0)/period;
  });
}

function csDrawChart(idx, candles){
  const svg  = document.getElementById('cs-chart-svg');
  const vsvg = document.getElementById('cs-vol-svg');
  if(!svg||!vsvg) return;

  const W=760, H=280, PAD_L=55, PAD_R=10, PAD_T=15, PAD_B=20;
  const chartW=W-PAD_L-PAD_R, chartH=H-PAD_T-PAD_B;

  const N = candles.length;
  const candleW = Math.max(2, Math.floor(chartW/N) - 1);
  const gap = Math.floor(chartW/N);

  // Price range
  const allH = candles.map(c=>c.h), allL = candles.map(c=>c.l);
  const priceMax = Math.max(...allH), priceMin = Math.min(...allL);
  const priceRange = priceMax - priceMin || 1;
  const py = p => PAD_T + chartH - ((p-priceMin)/priceRange)*chartH;

  // MAs
  const closes = candles.map(c=>c.c);
  const ma9  = csSMA(closes, 9);
  const ma20 = csSMA(closes, 20);
  const ma50 = csSMA(closes, 50);

  function maPath(mas, color){
    let d='';
    mas.forEach((v,i)=>{
      if(v===null) return;
      const x = PAD_L + i*gap + gap/2;
      const y = py(v);
      d += d===''?`M${x},${y}`:`L${x},${y}`;
    });
    return d?`<path d="${d}" fill="none" stroke="${color}" stroke-width="1.2" opacity="0.8"/>`:'';
  }

  // Build candle SVG
  let candleSVG = `<rect width="${W}" height="${H}" fill="#0e0e14" rx="8"/>`;
  // Grid lines
  const gridSteps = 5;
  for(let g=0;g<=gridSteps;g++){
    const yg = PAD_T + (g/gridSteps)*chartH;
    const pv = priceMax - (g/gridSteps)*priceRange;
    candleSVG += `<line x1="${PAD_L}" y1="${yg}" x2="${W-PAD_R}" y2="${yg}" stroke="#1e1e2e" stroke-width="1"/>`;
    candleSVG += `<text x="${PAD_L-4}" y="${yg+4}" fill="#4a4a70" font-family="JetBrains Mono" font-size="9" text-anchor="end">${pv.toFixed(0)}</text>`;
  }

  // Candles
  candles.forEach((c,i)=>{
    const x = PAD_L + i*gap;
    const cx = x + gap/2;
    const isUp = c.c >= c.o;
    const col = isUp ? '#00e676' : '#ff4444';
    const bodyTop    = py(Math.max(c.o, c.c));
    const bodyBot    = py(Math.min(c.o, c.c));
    const bodyHeight = Math.max(1, bodyBot - bodyTop);
    const bx = cx - candleW/2;
    // Wick
    candleSVG += `<line x1="${cx}" y1="${py(c.h)}" x2="${cx}" y2="${bodyTop}" stroke="${col}" stroke-width="1.2"/>`;
    candleSVG += `<line x1="${cx}" y1="${bodyBot}" x2="${cx}" y2="${py(c.l)}" stroke="${col}" stroke-width="1.2"/>`;
    // Body
    candleSVG += `<rect x="${bx}" y="${bodyTop}" width="${candleW}" height="${bodyHeight}" fill="${isUp?'rgba(0,230,118,0.35)':'rgba(255,68,68,0.35)'}" stroke="${col}" stroke-width="1" rx="0.5" class="cs-candle" data-o="${c.o}" data-h="${c.h}" data-l="${c.l}" data-c="${c.c}" data-i="${i}"/>`;
  });

  // MA lines
  candleSVG += maPath(ma9,  '#4da6ff');
  candleSVG += maPath(ma20, '#f5c842');
  candleSVG += maPath(ma50, '#b388ff');

  svg.innerHTML = candleSVG;

  // Update price header
  const last = candles[candles.length-1];
  const prev = candles.length>1 ? candles[candles.length-2].c : last.o;
  const chg  = last.c - prev;
  const chgP = ((chg/prev)*100).toFixed(2);
  document.getElementById('cs-modal-price').textContent = '₹' + last.c.toLocaleString('en-IN',{maximumFractionDigits:2});
  const chgEl = document.getElementById('cs-modal-chg');
  chgEl.textContent = `${chg>=0?'▲':'▼'} ${Math.abs(chg).toFixed(2)} (${Math.abs(chgP)}%)`;
  chgEl.style.color  = chg>=0 ? 'var(--green)' : 'var(--red)';

  // Volume bars
  const maxVol = Math.max(...candles.map(c=>c.v));
  const volH = 52;
  let volSVG = `<rect width="${W}" height="60" fill="#0e0e14"/>`;
  volSVG += `<text x="${PAD_L-4}" y="14" fill="#4a4a70" font-family="JetBrains Mono" font-size="8" text-anchor="end">VOL</text>`;
  candles.forEach((c,i)=>{
    const x  = PAD_L + i*gap + gap/2 - candleW/2;
    const bh = Math.max(2, (c.v/maxVol)*volH);
    const isUp = c.c>=c.o;
    volSVG += `<rect x="${x}" y="${60-bh}" width="${candleW}" height="${bh}" fill="${isUp?'rgba(0,230,118,0.3)':'rgba(255,68,68,0.3)'}"/>`;
  });
  vsvg.innerHTML = volSVG;

  // Hover tooltips
  svg.querySelectorAll('.cs-candle').forEach(el=>{
    el.style.cursor='crosshair';
    el.addEventListener('mouseenter',function(){
      document.getElementById('cs-hover-info').textContent =
        `O:${this.dataset.o}  H:${this.dataset.h}  L:${this.dataset.l}  C:${this.dataset.c}`;
    });
    el.addEventListener('mouseleave',()=>{
      document.getElementById('cs-hover-info').textContent='';
    });
  });
}

// Wire up chart button to each stock row — patch ptSparkline to add chart button
const _origPtRenderTable = ptRenderTable;
ptRenderTable = function(){
  _origPtRenderTable();
  // Add chart button to each row
  document.querySelectorAll('#pt-tbody tr').forEach((row,i)=>{
    const sym = PT_STOCKS[i]?.sym;
    if(!sym) return;
    const td = document.createElement('td');
    td.style.cssText='padding:6px 8px;text-align:center;';
    td.innerHTML=`<button onclick="event.stopPropagation();csOpen(${i})" style="background:rgba(77,166,255,0.12);border:1px solid rgba(77,166,255,0.3);color:var(--blue);font-size:10px;padding:4px 8px;border-radius:5px;cursor:pointer;font-family:'JetBrains Mono',monospace;" title="View candlestick chart">📈</button>`;
    row.appendChild(td);
  });
};
</script>
</body>
</html>
