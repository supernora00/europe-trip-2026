
const data={
"0826":{
title:"🏔 First Mountain",
items:[
["🚆 Transport","Grindelwald Terminal → First 缆车"],
["🥾 Hiking","First → Bachalpsee 往返约6km，2-3小时"],
["📷 Photography","Bachalpsee倒影、First Cliff Walk"],
["Tips","上午云量较少，适合拍摄"]
]},
"0827":{
title:"🪂 Skywings Paragliding",
items:[
["Priority","⭐⭐⭐⭐⭐ Highlight Experience"],
["Schedule","08:30 集合，因特拉肯双人滑翔伞"],
["Route","下午 Lauterbrunnen · Staubbach Falls · Mürren"],
["Weather","风雨天气取消，少女峰作为备选"]
]},
"0828":{
title:"🏊 Brienzersee + Lucerne",
items:[
["Route","Grindelwald → Iseltwald / Brienz"],
["Experience","湖边游泳、雪山湖景"],
["Evening","前往卢塞恩，老城散步"],
["Checklist","泳衣 ☑ 毛巾 ☑ 相机 ☑"]
]}
};

function render(day){
let d=data[day];
document.querySelector("#app").innerHTML=
`<div class="card"><h2>${d.title}</h2>
${d.items.map((x,i)=>`
<button onclick="toggle(${i})">${x[0]} ▼</button>
<div class="detail" id="d${i}">${x[1]}</div>`).join("")}
</div>`;
}
function toggle(i){document.getElementById("d"+i).classList.toggle("open")}
document.querySelectorAll("button[data-day]").forEach(b=>b.onclick=()=>render(b.dataset.day));
render("0827");
