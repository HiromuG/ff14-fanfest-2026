'use strict';
/* Minimal unofficial FF14 Fan Fest 2026 timetable + four embedded maps. */
const PROGRAM = [
 {day:1,start:'11:00',end:'13:00',title:'基調講演',important:true,note:'吉田直樹プロデューサー兼ディレクターによる新情報発表'},
 {day:1,start:'15:00',end:'16:30',title:'クリスタルコンフリクト 日本準決勝',note:'リージョンチャンピオンシップ 2026 Japan'},
 {day:1,start:'16:30',end:'17:00',title:'吉田Pの一問一答タイムアタック！'},
 {day:1,start:'17:00',end:'18:30',title:'クリスタルコンフリクト 日本決勝',note:'リージョンチャンピオンシップ 2026 Japan'},
 {day:1,start:'19:30',end:'20:30',title:'ピアノコンサート',important:true,note:'Keiko ／ ゲスト：Amanda Achen'},
 {day:2,start:'10:30',end:'12:00',title:'開発パネル',note:'サウンドチームが語る BGM 制作の舞台裏'},
 {day:2,start:'12:30',end:'13:30',title:'LIVE Q&A',note:'吉田Pがプレイヤーからの質問に回答'},
 {day:2,start:'13:50',end:'15:00',title:'ミラプリコレクション',note:'ファッションショー'},
 {day:2,start:'15:30',end:'17:30',title:'直樹の部屋',note:'吉田Pとゲストによるトーク'},
 {day:2,start:'19:00',end:'20:30',title:'スペシャルライブ ― THE PRIMALS',important:true,note:'THE PRIMALS ／ ゲスト：AKINO・伊藤友馬'}
];
const MAPS={
 entire:{src:'assets/map-entire.jpg',title:'2F中央モール・屋外展示場',subtitle:'会場全体の位置関係',alt:'公式会場マップ：2F中央モールと屋外展示場。'},
 hall13:{src:'assets/map-hall1-3.jpg',title:'幕張メッセ 1–3ホール',subtitle:'アクティビティ・展示・グッズ・フード',alt:'公式会場マップ：幕張メッセ1–3ホール、ブース番号1から15。'},
 hall46:{src:'assets/map-hall4-6.jpg',title:'幕張メッセ 4–6ホール',subtitle:'メインステージ・観覧エリア',alt:'公式会場マップ：幕張メッセ4–6ホール、メインステージと観覧エリア。'},
 hall7:{src:'assets/map-hall7.jpg',title:'幕張メッセ 7ホール',subtitle:'アトラクション・休憩エリア',alt:'公式会場マップ：幕張メッセ7ホール、ブース番号20から25。'}
};

/* Numbered content confirmed from the official map/floor listing.
   Some unnamed gray markers are excluded; #18/#19 describe only the visible map icons. */
const CONTENTS={
 hall13:[
  {n:1,name:'チョコボレースVR',type:'activity',loc:'エリア A'},
  {n:2,name:'リアルトレジャーハント',type:'goods',loc:'エリア A'},
  {n:3,name:'FINAL FANTASY VII リメイクシリーズ',type:'exhibit',loc:'エリア B'},
  {n:4,name:'Roland BRIDGE CAST FFXIV Edition 体験＆展示',type:'exhibit',loc:'エリア A'},
  {n:5,name:'YOKERO — エターナルクイーン討滅戦',type:'activity',loc:'エリア B'},
  {n:6,name:'ナイスヘッド・ガーデン／古のアラグの操作盤',type:'activity',loc:'エリア B',note:'2つのアクティビティ'},
  {n:7,name:'MTG × FINAL FANTASY カード体験＆展示',type:'activity',loc:'エリア B'},
  {n:8,name:'ダンシング・グリーンと踊ろう！',type:'activity',loc:'エリア C'},
  {n:9,name:'ディシディア デュエルム ファイナルファンタジー',type:'exhibit',loc:'エリア C'},
  {n:10,name:'instax™ チェキ撮影・プリント体験',type:'activity',loc:'エリア C'},
  {n:11,name:'ジョブイメージオードパルファム',type:'goods',loc:'エリア D'},
  {n:12,name:'クラフトマンズワークショップ',type:'goods',loc:'エリア D'},
  {n:13,name:'ファイナルファンタジー レゾナンス',type:'exhibit',loc:'エリア D'},
  {n:14,name:'ナインズ・キャッチャー',type:'goods',loc:'エリア D'},
  {n:15,name:'出張エオルゼアカフェ（ポップコーン・ドリンク）',type:'food',loc:'フード'}
 ],
 hall46:[
  {n:17,name:'クイックフォトセッション',type:'activity'},
  {n:18,name:'フォトスポット付近（モーグリ）',type:'exhibit',note:'マップの図柄による参考表記'},
  {n:19,name:'フォトスポット付近（弓のオブジェ）',type:'exhibit',note:'マップの図柄による参考表記'}
 ],
 hall7:[
  {n:20,name:'F.A.T.E. スペースインベーダー ギガマックス',type:'activity',loc:'エリア E'},
  {n:21,name:'エオルゼア検定',type:'activity',loc:'エリア E'},
  {n:22,name:'だいたい合ってるNPC名鑑 体験コーナー',type:'activity',loc:'エリア E'},
  {n:23,name:'FF トレーディングカード 体験コーナー',type:'activity',loc:'エリア E'},
  {n:24,name:'ドマ式麻雀 修練場',type:'activity',loc:'エリア E'},
  {n:25,name:'エッダの鞄',type:'activity',loc:'エリア E'}
 ],
 entire:[
  {n:26,name:'GALLERIA コラボモデル展示',type:'exhibit',loc:'2F中央モール'},
  {n:27,name:'GigaCrysta 推奨モニター展示',type:'exhibit',loc:'2F中央モール'},
  {n:31,name:'メッセージボード',type:'activity',loc:'2F中央モール'},
  {n:32,name:'シュガーライオットのアトリエボード',type:'activity',loc:'2F中央モール'},
  {n:33,name:'みんなでつくる！来場者マップ',type:'activity',loc:'2F中央モール'},
  {n:34,name:'ヤマト運輸 宅配サービス',type:'goods',loc:'2F中央モール'},
  {n:35,name:'オフィシャルグッズ販売',type:'goods',loc:'屋外展示場'},
  {n:36,name:'至天の座アルカディアくじ',type:'goods',loc:'屋外展示場'}
 ]
};
const TYPE_LABEL={activity:'体験',exhibit:'展示',goods:'グッズ',food:'フード',other:'案内'};
// Previously saved v5 checked markers stay selected; personal time inputs have been retired.
const STORAGE_KEY='ff26-contents-checks-v5';
let notes={};
try { const saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}');if(saved&&typeof saved==='object'&&!Array.isArray(saved)) notes=saved; } catch(_) {}
function saveNotes(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(notes))}catch(_){}}
function checked(n){return !!notes[n]?.checked;}

// Source: 2026 Fan Fest official venue / activity reservation information, and
// an Oct 26 compilation of booth opening hours. Default hours are venue-wide
// guidelines, NOT a booth-specific promise. Exceptions are specified below.
const STANDARD={day1:'09:00–21:00',day2:'09:00–20:30',kind:'目安'};
const HOURS={
  3:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  4:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  9:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  13:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  15:{kind:'飲食',desc:'販売時間は現地の案内を確認'},
  17:{kind:'予約制',day1:'THE PRIMALS 14:00／16:15',day2:'Keiko 12:00／14:00／16:00 ・ 祖堅＆Koji Fox 13:00／15:00',desc:'事前当選者のみ。一般列なし'},
  18:{kind:'展示',desc:'個別時間の掲載なし（会場内フォトスポット）'},
  19:{kind:'展示',desc:'個別時間の掲載なし（会場内フォトスポット）'},
  22:{kind:'開催時間',day1:'10:00–21:00',day2:'10:00–20:30',desc:'10:00開始。終了は一般時間の目安'},
  23:{kind:'開催時間',day1:'11:00–20:15',day2:'11:00–20:15',desc:'両日共通の案内時間'},
  26:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  27:{kind:'展示',desc:'個別時間の掲載なし（会場内展示）'},
  31:{kind:'展示',desc:'個別時間の掲載なし（会場内掲示）'},
  32:{kind:'展示',desc:'個別時間の掲載なし（会場内掲示）'},
  33:{kind:'展示',desc:'個別時間の掲載なし（会場内掲示）'},
  34:{kind:'サービス',desc:'宅配サービスの受付時間は現地で確認'}
};
function timeBlock(e){
 const v=HOURS[e.n]||STANDARD;
 if(v.day1&&v.day2){
  return `<span class="content-hours"><span class="hour-label">${v.kind==='目安'?'営業時間（目安）':v.kind}</span><span class="hour-days"><span><b>10/31</b> ${v.day1}</span><span><b>11/01</b> ${v.day2}</span></span>${v.desc?`<span class="hour-extra">${v.desc}</span>`:''}</span>`;
 }
 return `<span class="content-hours"><span class="hour-label">${v.kind}</span><span class="hour-extra">${v.desc}</span></span>`;
}
function renderContents(){
 const list=CONTENTS[activeMap];
 $('#contentsCount').textContent=`${list.length} 件`;
 $('#contentsList').innerHTML=list.map(e=>{
 const marked=checked(e.n);
 return `<button type="button" class="content-entry ${e.type} ${marked?'is-selected':''}" data-content="${e.n}" aria-pressed="${marked}" aria-label="${e.n} ${e.name} ${marked?'チェック済み':'チェックする'}">
   <span class="content-number">${String(e.n).padStart(2,'0')}</span>
   <span class="content-main"><span class="content-name">${e.name}</span>${e.note?`<span class="content-note">${e.note}</span>`:''}${e.loc?`<span class="content-location">${e.loc}</span>`:''}${timeBlock(e)}</span>
   <span class="content-category">${marked?'✓ チェック':TYPE_LABEL[e.type]}</span>
 </button>`}).join('');
 $('#contentsList').querySelectorAll('[data-content]').forEach(button=>button.addEventListener('click',()=>{
  const key=Number(button.dataset.content);
  notes[key]={checked:!checked(key)};saveNotes();renderContents();
 }));
}

const $=(s)=>document.querySelector(s);
const $$=(s)=>[...document.querySelectorAll(s)];
let day=1,activeMap='entire',zoom=1,panX=0,panY=0,imgWidth=0,imgHeight=0;
const viewport=$('#mapViewport'),mapImg=$('#mapImage'),mapCard=$('#mapCard');
function jstDate(){return new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Tokyo'}));}
function eventState(item){const now=jstDate(),d=now.getFullYear()===2026&&now.getMonth()===(item.day===1?9:10)&&now.getDate()===(item.day===1?31:1);if(!d)return '';const mins=now.getHours()*60+now.getMinutes();const toM=s=>Number(s.slice(0,2))*60+Number(s.slice(3));return mins>=toM(item.start)&&mins<toM(item.end)?'live':''}
function renderSchedule(){
 $('#daySummary').textContent=day===1?'DAY 1 · 10月31日（土）':'DAY 2 · 11月1日（日）';
 $('#scheduleList').innerHTML=PROGRAM.filter(e=>e.day===day).map(e=>{
 const live=eventState(e);
 return `<article class="stage-event ${e.important?'featured':''} ${live}" aria-label="${e.start}～${e.end} ${e.title}"><div class="event-time"><strong>${e.start}</strong><span>— ${e.end}</span></div><div class="event-body"><div class="event-inner"><div class="event-title">${e.title}</div><div class="event-meta">${e.important?'<span class="event-chip highlight">SPECIAL</span>':''}${live?'<span class="event-chip now">● LIVE NOW</span>':''}<span class="event-chip">メインステージ</span></div>${e.note?`<p class="event-note">${e.note}</p>`:''}</div>${e.important?'<span class="event-mark" aria-hidden="true">✦</span>':''}</div></article>`}).join('');
 $$('[data-day]').forEach(b=>{let active=Number(b.dataset.day)===day;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
}
function selectTab(tab){const map=tab==='map';$('#schedulePage').hidden=map;$('#mapPage').hidden=!map;$$('[data-tab]').forEach(b=>{const active=b.dataset.tab===tab;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active))});if(map)requestAnimationFrame(()=>{fitMap();renderMapTransform()});if(!map&&mapCard.classList.contains('fullscreen'))toggleFullscreen(false);}
function setMap(k){activeMap=k;renderContents();const d=MAPS[k];$('#mapShortName').textContent=d.title;$('#mapSubtitle').textContent=d.subtitle;mapImg.src=d.src;mapImg.alt=d.alt;zoom=1;panX=panY=0;$$('[data-map]').forEach(b=>{const active=b.dataset.map===k;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});fitMap();renderMapTransform();}
function fitMap(){const w=viewport.clientWidth,h=viewport.clientHeight;if(!w||!h)return;const aspect=2048/1152;imgWidth=Math.min(w,h*aspect);imgHeight=imgWidth/aspect;mapImg.style.width=imgWidth+'px';mapImg.style.height=imgHeight+'px';clampPan();}
function clampPan(){const maxX=Math.max(0,(imgWidth*zoom-viewport.clientWidth)/2),maxY=Math.max(0,(imgHeight*zoom-viewport.clientHeight)/2);panX=Math.min(maxX,Math.max(-maxX,panX));panY=Math.min(maxY,Math.max(-maxY,panY));}
function renderMapTransform(){clampPan();mapImg.style.transform=`translate(-50%, -50%) translate(${panX}px,${panY}px) scale(${zoom})`;$('#zoomValue').textContent=Math.round(zoom*100)+'%';}
function setZoom(z,centerX,centerY){z=Math.min(5,Math.max(1,Math.round(z*100)/100));if(centerX!==undefined){const before=zoom;const rect=viewport.getBoundingClientRect();const x=centerX-rect.left-rect.width/2,y=centerY-rect.top-rect.height/2;panX=x-(x-panX)*(z/before);panY=y-(y-panY)*(z/before);}zoom=z;renderMapTransform();}
function toggleFullscreen(force){const full=force===undefined?!mapCard.classList.contains('fullscreen'):force;mapCard.classList.toggle('fullscreen',full);document.body.classList.toggle('scroll-locked',full);$('#toggleFullscreen').textContent=full?'✕':'⛶';$('#toggleFullscreen').setAttribute('aria-label',full?'全画面を閉じる':'全画面表示');requestAnimationFrame(()=>{fitMap();renderMapTransform();});}
const pointers=new Map();let gesture=null;
function beginGesture(){const vals=[...pointers.values()];if(vals.length===1){gesture={type:'drag',startX:vals[0].x,startY:vals[0].y,panX,panY};}else if(vals.length>=2){const a=vals[0],b=vals[1];gesture={type:'pinch',dist:Math.hypot(a.x-b.x,a.y-b.y),zoom,panX,panY,midX:(a.x+b.x)/2,midY:(a.y+b.y)/2};}}
viewport.addEventListener('pointerdown',e=>{if(e.pointerType==='mouse'&&e.button!==0)return;e.preventDefault();viewport.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});beginGesture();viewport.classList.add('dragging');});
viewport.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});const pts=[...pointers.values()];if(!gesture)return;if(pts.length===1&&gesture.type==='drag'){panX=gesture.panX+pts[0].x-gesture.startX;panY=gesture.panY+pts[0].y-gesture.startY;renderMapTransform();}else if(pts.length>=2&&gesture.type==='pinch'){const a=pts[0],b=pts[1],dist=Math.hypot(a.x-b.x,a.y-b.y),midX=(a.x+b.x)/2,midY=(a.y+b.y)/2;const newZ=Math.min(5,Math.max(1,gesture.zoom*dist/Math.max(1,gesture.dist)));const rect=viewport.getBoundingClientRect(),x=gesture.midX-rect.left-rect.width/2,y=gesture.midY-rect.top-rect.height/2;panX=midX-gesture.midX+x-(x-gesture.panX)*(newZ/gesture.zoom);panY=midY-gesture.midY+y-(y-gesture.panY)*(newZ/gesture.zoom);zoom=newZ;renderMapTransform();}});
function endPointer(e){pointers.delete(e.pointerId);beginGesture();if(!pointers.size)viewport.classList.remove('dragging');}
viewport.addEventListener('pointerup',endPointer);viewport.addEventListener('pointercancel',endPointer);viewport.addEventListener('lostpointercapture',endPointer);
viewport.addEventListener('wheel',e=>{e.preventDefault();setZoom(zoom*(e.deltaY<0?1.2:1/1.2),e.clientX,e.clientY)},{passive:false});
let lastTap=0;viewport.addEventListener('pointerup',e=>{if(e.pointerType!=='touch')return;const t=Date.now();if(t-lastTap<330){setZoom(zoom<2?2.5:1,e.clientX,e.clientY);lastTap=0;}else lastTap=t;});
$$('[data-day]').forEach(btn=>btn.addEventListener('click',()=>{day=Number(btn.dataset.day);renderSchedule()}));
$$('[data-tab]').forEach(btn=>btn.addEventListener('click',()=>selectTab(btn.dataset.tab)));
$$('[data-map]').forEach(btn=>btn.addEventListener('click',()=>setMap(btn.dataset.map)));
$('#zoomIn').addEventListener('click',()=>setZoom(zoom+.5));$('#zoomOut').addEventListener('click',()=>setZoom(zoom-.5));$('#resetZoom').addEventListener('click',()=>{zoom=1;panX=panY=0;renderMapTransform()});$('#toggleFullscreen').addEventListener('click',()=>toggleFullscreen());
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&mapCard.classList.contains('fullscreen'))toggleFullscreen(false)});
new ResizeObserver(()=>{if(!$('#mapPage').hidden){fitMap();renderMapTransform()}}).observe(viewport);
renderSchedule();renderContents();selectTab(location.hash==='#map'?'map':'schedule');
window.addEventListener('hashchange',()=>{if(location.hash==='#map')selectTab('map');else if(location.hash==='#schedule')selectTab('schedule')});
if('serviceWorker' in navigator&&location.protocol.startsWith('http'))window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
