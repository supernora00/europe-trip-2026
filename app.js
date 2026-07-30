
const plans={
0827:{
title:"🪂 Skywings Paragliding + Lauterbrunnen",
cards:[
["Priority","⭐⭐⭐⭐⭐ Highlight Experience"],
["Morning","Interlaken Skywings Tandem Flight"],
["Afternoon","Lauterbrunnen · Staubbach Falls · Mürren Option"],
["Weather","🟡 Check wind and visibility"]
]
},
0828:{
title:"🏊 Brienzersee Lake Day + Lucerne",
cards:[
["Route","Grindelwald → Iseltwald / Brienz"],
["Experience","Lake swimming · Mountain lake views"],
["Evening","Lucerne Old Town"]
]
},
0826:{
title:"🏔 First Mountain",
cards:[
["Transport","Grindelwald → First Cable Car"],
["Hiking","Bachalpsee Trail"],
["Photography","Reflection lake · Cliff Walk"]
]
}
};

function render(day){
let item=plans[day];
document.getElementById("content").innerHTML=
`<div class="card"><h2>${item.title}</h2></div>`+
item.cards.map(c=>`<div class="card"><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join("");
}

document.querySelectorAll(".day").forEach(btn=>{
btn.onclick=()=>{
document.querySelectorAll(".day").forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
render(btn.dataset.day);
}
});

render("0827");
