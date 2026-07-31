const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const start=new Date('2026-08-24T00:00:00'),end=new Date('2026-09-10T23:59:59');
function currentDay(){const n=new Date();if(n<start)return 1;if(n>end)return 18;return Math.min(18,Math.max(1,Math.floor((n-start)/86400000)+1))}
const dayPaths=['','switzerland/day1.html','switzerland/day2.html','switzerland/day3.html','switzerland/day4.html','switzerland/day5.html','switzerland/day6.html','italy/day7.html','italy/day8.html','italy/day9.html','italy/day10.html','italy/day11.html','italy/day12.html','italy/day13.html','italy/day14.html','italy/day15.html','italy/day16.html','italy/day17.html','italy/day18.html'];
const dashboard={
1:['Geneva · Arrival','8月24日','MU217 Shanghai → Geneva','抵达瑞士','Stay KooooK Geneva City','Geneva','日内瓦湖与 Jet d’Eau','Z8 24–120 / GR IV'],
2:['Geneva → Spiez → Grindelwald','8月25日','Spiez Castle','图恩湖畔停留','Eiger Lodge','Grindelwald','Spiez 湖景与列车窗景','Z8 24–120'],
3:['Grindelwald First','8月26日','First Adventure Package','Mountain Cart + Bachalpsee','Eiger Lodge','Grindelwald','Bachalpsee 倒影','Z8 24–120'],
4:['Skywings · Männlichen','8月27日','Skywings Paragliding','Lauterbrunnen + Kleine Scheidegg','Eiger Lodge','Grindelwald','Staubbach Falls 与山谷','Z8 24–120 / GR IV'],
5:['Iseltwald · Luzern','8月28日','Brienzersee 湖区','前往卢塞恩','Luzern hotel','Lucerne','湖岸与卡佩尔桥','GR IV'],
6:['Stoos Ridge Walk · Milano','8月29日','Klingenstock → Fronalpstock','14:59 Schwyz → Milano','iQ Hotel Milano','Milan','Fronalpstock 全景','Z8 24–120'],
7:['Milano · Dolomites','8月30日','Milano → Bolzano','徒步团集合','Dolomites stay','Dolomites','山谷初见','Action 6 / Z8'],
8:['Dolomites','8月31日','徒步行程','跟团安排','Dolomites stay','Dolomites','岩壁与徒步纪实','Z8 24–120'],
9:['Dolomites','9月1日','徒步行程','跟团安排','Dolomites stay','Dolomites','高山光影','Z8 24–120'],
10:['Tre Cime','9月2日','Tre Cime 徒步','摄影重点日','Dolomites stay','Dolomites','岩峰黄金时刻','Z8 24–120'],
11:['Dolomites','9月3日','徒步行程','跟团安排','Dolomites stay','Dolomites','山径与环境照','Action 6 / Z8'],
12:['Dolomites','9月4日','徒步行程','跟团安排','Dolomites stay','Dolomites','山屋与山景','Z8 / GR IV'],
13:['Dolomites → Venice','9月5日','Cortina Express','抵达威尼斯','Hotel Ai Due Fanali','Venice','威尼斯蓝调时刻','GR IV'],
14:['Venice → Florence','9月6日','Trenitalia → Firenze','上午班次','Hotel Davanzati','Florence','威尼斯清晨','GR IV'],
15:['Florence','9月7日','城市探索','博物馆安排','Hotel Davanzati','Florence','街巷与建筑','Z8 24–120'],
16:['Florence → Rome','9月8日','高铁 → Roma','斗兽场','Hotel Valeri','Rome','古罗马遗迹','Z8 24–120'],
17:['Vatican City','9月9日','梵蒂冈博物馆','预约日','Hotel Valeri','Rome','圣彼得广场','Z8 24–120'],
18:['Rome → Home','9月10日','FCO 18:45 航班','返程日','—','Home','罗马最后晨光','GR IV']
};
function applyDashboard(){const d=currentDay(),v=dashboard[d];$$('[data-today-day]').forEach(e=>e.textContent=d);$$('[data-continue]').forEach(e=>e.href=dayPaths[d]);const fill=$('[data-journey-fill]');if(fill)fill.style.width=(d/18*100)+'%';const map={'[data-current-city]':v[0],'[data-current-date]':v[1],'[data-next-ticket]':v[2],'[data-next-ticket-time]':v[3],'[data-tonight-hotel]':v[4],'[data-tonight-city]':v[5],'[data-photo-highlight]':v[6],'[data-photo-gear]':v[7]};Object.entries(map).forEach(([s,t])=>{const e=$(s);if(e)e.textContent=t});const photo=$('[data-photo-link]');if(photo)photo.href=dayPaths[d]+'#photo';const pill=$(`.day-pill[data-day="${d}"]`);if(pill)pill.classList.add('current')}
applyDashboard();
const bar=$('[data-scroll-progress]');function updateScroll(){if(!bar)return;const h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(h>0?scrollY/h*100:0)+'%'}addEventListener('scroll',updateScroll,{passive:true});updateScroll();
document.addEventListener('keydown',e=>{const p=$('[data-prev]'),n=$('[data-next]');if(e.key==='ArrowLeft'&&p)location.href=p.href;if(e.key==='ArrowRight'&&n)location.href=n.href});let sx=0,sy=0;document.addEventListener('touchstart',e=>{sx=e.changedTouches[0].screenX;sy=e.changedTouches[0].screenY},{passive:true});document.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-sx,dy=e.changedTouches[0].screenY-sy;if(Math.abs(dx)>90&&Math.abs(dx)>Math.abs(dy)*1.5){const l=dx>0?$('[data-prev]'):$('[data-next]');if(l)location.href=l.href}},{passive:true});
const fab=$('.quick-fab'),qa=$('.quick-access');if(fab&&qa){fab.addEventListener('click',()=>{qa.classList.toggle('open');fab.setAttribute('aria-expanded',qa.classList.contains('open'))});document.addEventListener('click',e=>{if(!qa.contains(e.target))qa.classList.remove('open')})}
$$('[data-mode]').forEach(b=>b.addEventListener('click',()=>{$$('[data-mode]').forEach(x=>x.classList.remove('active'));$$('[data-panel]').forEach(x=>x.classList.remove('active'));b.classList.add('active');const p=$(`[data-panel="${b.dataset.mode}"]`);if(p)p.classList.add('active')}));
$$('[data-check]').forEach(c=>{const key='nora-check-'+location.pathname+'-'+c.dataset.check;c.checked=localStorage.getItem(key)==='1';c.addEventListener('change',()=>localStorage.setItem(key,c.checked?'1':'0'))});
const tripCurrent=document.querySelector(`.trip-row[data-day="${currentDay()}"]`);if(tripCurrent)tripCurrent.classList.add('current');

function applyDayNavActive(){
 const body=document.body;
 if(!body||body.dataset.page!=='day') return;
 const day=Number(body.dataset.day);
 document.querySelectorAll('.travel-strip a').forEach(a=>{
   a.classList.remove('current');
   const m=a.textContent.match(/Day (\d+)/);
   if(m && Number(m[1])===day) a.classList.add('current');
 });
}
