const fallback="https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1200";
const regions=[
 {name:"Sumatra",label:"WESTERN STORIES",desc:"Rumah besar, tradisi Minangkabau, dan cita rasa penuh rempah.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Rumah%20Gadang.jpg?width=1200",fact:"Sumatra memiliki keragaman budaya yang sangat luas, dari Aceh hingga Lampung.",culture:[
  ["Rumah Adat","Rumah Gadang","Rumah tradisional Minangkabau dengan bentuk atap bergonjong.","https://commons.wikimedia.org/wiki/Special:FilePath/Rumah%20Gadang.jpg?width=1000"],
  ["Kuliner","Makanan Padang","Hidangan Minangkabau yang dikenal kaya rempah.","https://commons.wikimedia.org/wiki/Special:FilePath/Makanan%20Padang.jpg?width=1000"],
  ["Kesenian","Tari Perang Nias","Salah satu gambaran seni tari dari kepulauan Nias.","https://commons.wikimedia.org/wiki/Special:FilePath/Tari%20Perang%20Nias.jpg?width=1000"],
  ["Budaya","Dancers of Sumatra","Keragaman tari dan busana dari wilayah Sumatra.","https://commons.wikimedia.org/wiki/Special:FilePath/Dancers%20of%20Sumatra.jpg?width=1000"]
 ]},
 {name:"Jawa",label:"HERITAGE & RHYTHM",desc:"Arsitektur tradisional, pertunjukan, batik, dan kuliner yang penuh cerita.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Entrance%20gate%20to%20a%20Joglo.JPG?width=1200",fact:"Jawa memiliki banyak tradisi yang terus hidup melalui seni, upacara, arsitektur, dan kehidupan sehari-hari.",culture:[
  ["Rumah Adat","Joglo","Salah satu bentuk rumah tradisional yang dikenal dari Jawa.","https://commons.wikimedia.org/wiki/Special:FilePath/Entrance%20gate%20to%20a%20Joglo.JPG?width=1000"],
  ["Kuliner","Nasi Gudeg","Kuliner khas Yogyakarta berbahan nangka muda.","https://commons.wikimedia.org/wiki/Special:FilePath/Nasi%20Gudeg.jpg?width=1000"],
  ["Kesenian","Javanese Dance","Tari tradisional dengan gerak dan kostum yang khas.","https://commons.wikimedia.org/wiki/Special:FilePath/Javanese%20Traditional%20Dancer.jpg?width=1000"],
  ["Pertunjukan","Wayang & Gamelan","Seni pertunjukan menjadi bagian penting dari tradisi Jawa.","https://commons.wikimedia.org/wiki/Special:FilePath/Central%20Java%20banner.jpg?width=1000"]
 ]},
 {name:"Bali & Nusa Tenggara",label:"ISLAND EXPRESSIONS",desc:"Pulau-pulau dengan seni pertunjukan, arsitektur, dan tradisi yang kuat.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Ramayana%20Kecak%20Dance%20Performance%20after%20sunset.jpg?width=1200",fact:"Bali dan Nusa Tenggara memiliki banyak tradisi kepulauan dengan ekspresi seni yang beragam.",culture:[
  ["Kesenian","Tari Kecak","Pertunjukan tari Bali yang terkenal dengan vokal kelompok.","https://commons.wikimedia.org/wiki/Special:FilePath/Ramayana%20Kecak%20Dance%20Performance%20after%20sunset.jpg?width=1000"],
  ["Budaya","Pendet","Tari Bali yang menjadi salah satu simbol seni pertunjukan Indonesia.","https://commons.wikimedia.org/wiki/Special:FilePath/Tari%20Pendet.jpg?width=1000"],
  ["Arsitektur","Bali Traditional","Bangunan tradisional dan ruang budaya yang khas di Bali.","https://commons.wikimedia.org/wiki/Special:FilePath/Rumah%20Tradisional%20Bali.jpg?width=1000"],
  ["Kuliner","Bali Cuisine","Ragam sajian dari tradisi kuliner Bali.","https://commons.wikimedia.org/wiki/Special:FilePath/Bali%20cuisine.jpg?width=1000"]
 ]},
 {name:"Kalimantan",label:"FOREST & RIVER STORIES",desc:"Budaya yang tumbuh di antara sungai-sungai besar dan hutan tropis.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Lamin%20adat%20Adjang%20Lidem%20Malinau.jpg?width=1200",fact:"Kalimantan dikenal dengan keragaman komunitas dan tradisi yang terhubung dengan sungai serta hutan.",culture:[
  ["Rumah Adat","Lamin","Bangunan tradisional besar yang dikenal di beberapa komunitas Dayak.","https://commons.wikimedia.org/wiki/Special:FilePath/Lamin%20adat%20Adjang%20Lidem%20Malinau.jpg?width=1000"],
  ["Budaya","Dayak Dancers","Kostum dan tarian menjadi bagian dari ekspresi budaya.","https://commons.wikimedia.org/wiki/Special:FilePath/Young%20Dayak%20dancers%20Samarinda%20Indonesia.jpg?width=1000"],
  ["Arsitektur","Rumah Banjar","Bentuk rumah tradisional yang dikenal dari Kalimantan Selatan.","https://commons.wikimedia.org/wiki/Special:FilePath/Rumah%20Adat%20Banjar%20Tipe%20Rumah%20Bubungan%20Tinggi%20Desa%20Habirau%20Kecamatan%20Daha%20Selatan%20Kabupaten%20Hulu%20Sungai%20Selatan.jpg?width=1000"],
  ["Alam & Budaya","Borneo","Hubungan manusia, alam, dan tradisi membentuk banyak cerita lokal.","https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1000"]
 ]},
 {name:"Sulawesi",label:"MOUNTAINS & MARITIME",desc:"Perjumpaan budaya pesisir, pegunungan, dan tradisi masyarakat yang beragam.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Tana%20Toraja%20banner.jpg?width=1200",fact:"Sulawesi memiliki banyak tradisi lokal yang berbeda antardaerah dan komunitas.",culture:[
  ["Rumah Adat","Tongkonan","Rumah tradisional yang sangat dikenal dari Toraja.","https://commons.wikimedia.org/wiki/Special:FilePath/Tana%20Toraja%2C%20Kete%20Kesu%2C%20tongkonan%20%286823189476%29.jpg?width=1000"],
  ["Budaya","Tana Toraja","Ukiran dan arsitektur Toraja memiliki identitas visual yang kuat.","https://commons.wikimedia.org/wiki/Special:FilePath/Tana%20Toraja%20banner.jpg?width=1000"],
  ["Kesenian","Sulawesi Dance","Tari menjadi bagian dari ekspresi budaya di berbagai wilayah Sulawesi.","https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1000"],
  ["Kuliner","Coto Makassar","Salah satu hidangan yang terkenal dari Sulawesi Selatan.","https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1000"]
 ]},
 {name:"Maluku",label:"SPICE ISLAND STORIES",desc:"Kepulauan dengan sejarah rempah dan kehidupan yang dekat dengan laut.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1200",fact:"Maluku memiliki sejarah panjang sebagai salah satu kawasan penting dalam perdagangan rempah.",culture:[
  ["Kepulauan","Maluku","Laut dan pulau-pulau menjadi bagian penting dari kehidupan kawasan ini.",fallback],
  ["Budaya","Tifa","Alat musik pukul yang dikenal di sejumlah wilayah Indonesia timur.",fallback],
  ["Kuliner","Sagu","Sagu menjadi salah satu bahan pangan penting di banyak komunitas timur Indonesia.",fallback],
  ["Kesenian","Tradisi Kepulauan","Seni lokal berkembang dalam konteks komunitas dan kehidupan maritim.",fallback]
 ]},
 {name:"Papua",label:"EASTERN HORIZONS",desc:"Alam yang luar biasa dan keragaman budaya yang sangat luas antardaerah.",image:"https://commons.wikimedia.org/wiki/Special:FilePath/Indonesian%20Culture.jpg?width=1200",fact:"Papua memiliki keragaman budaya yang besar, dengan tradisi yang berbeda antarwilayah dan komunitas.",culture:[
  ["Kesenian","Papuan Dance","Tarian Papua merupakan bagian dari gambaran keragaman budaya Indonesia.",fallback],
  ["Rumah Adat","Honai","Rumah tradisional yang dikenal dari wilayah Papua pegunungan.","https://commons.wikimedia.org/wiki/Special:FilePath/Honai%20House%20Papua.jpg?width=1000"],
  ["Musik","Tifa","Alat musik pukul yang digunakan dalam berbagai konteks budaya.",fallback],
  ["Budaya","Eastern Indonesia","Setiap wilayah memiliki cerita dan identitas visual yang khas.",fallback]
 ]}
];

function safe(url){return url}
function imageTag(url,alt){return `<img src="${safe(url)}" alt="${alt}" onerror="this.onerror=null;this.src='${fallback}'">`}
const regionGrid=document.getElementById("regionGrid");
regionGrid.innerHTML=regions.map((r,i)=>`<article class="region" onclick="selectRegion(${i})">${imageTag(r.image,r.name)}<div class="region-content"><small>${r.label}</small><h3>${r.name}</h3><p>${r.desc}</p></div></article>`).join("");

const picker=document.getElementById("picker");
picker.innerHTML=regions.map((r,i)=>`<button class="${i===0?"active":""}" onclick="selectRegion(${i})">${r.name}</button>`).join("");

function selectRegion(i){
 const r=regions[i];
 document.getElementById("regionName").textContent=r.name;
 document.getElementById("regionDesc").textContent=r.desc;
 document.getElementById("funFact").textContent=r.fact;
 document.getElementById("cultureGrid").innerHTML=r.culture.map(c=>`<article class="culture">${imageTag(c[3],c[1])}<div class="culture-info"><span>${c[0].toUpperCase()}</span><h3>${c[1]}</h3><p>${c[2]}</p></div></article>`).join("");
 [...picker.children].forEach((b,n)=>b.classList.toggle("active",n===i));
 document.getElementById("gallery").scrollIntoView({behavior:"smooth",block:"start"});
}
selectRegion(0);

document.getElementById("themeBtn").onclick=()=>{
 document.body.classList.toggle("dark");
 document.getElementById("themeBtn").textContent=document.body.classList.contains("dark")?"☀":"☾";
};

const questions=[
 {q:"Rumah Gadang dikenal sebagai rumah tradisional dari budaya Minangkabau di...",a:["Sumatra","Jawa","Sulawesi","Papua"],c:0},
 {q:"Tongkonan merupakan rumah tradisional yang terkenal dari...",a:["Aceh","Toraja","Bali","Betawi"],c:1},
 {q:"Gudeg merupakan kuliner yang sangat dikenal dari...",a:["Yogyakarta","Makassar","Ambon","Medan"],c:0},
 {q:"Tari Kecak sangat dikenal sebagai pertunjukan dari...",a:["Bali","Kalimantan","Maluku","Papua"],c:0}
];
let qi=0,score=0;
function renderQuiz(){
 const card=document.getElementById("quizCard");
 if(qi>=questions.length){
   card.innerHTML=`<div class="progress">EXPLORATION COMPLETE</div><div class="score">${score}/${questions.length}</div><h3>${score===4?"Nusantara Explorer! ✦":"Keep Exploring! ✦"}</h3><p>Kamu sudah menyelesaikan mini quiz NusaExplore.</p><button class="restart" onclick="restartQuiz()">Main lagi</button>`;
   return;
 }
 const q=questions[qi];
 card.innerHTML=`<div class="progress">QUESTION ${qi+1} / ${questions.length}</div><h3>${q.q}</h3><div class="answers">${q.a.map((x,i)=>`<button class="answer" onclick="answerQuiz(${i})">${String.fromCharCode(65+i)}. ${x}</button>`).join("")}</div>`;
}
window.answerQuiz=i=>{if(i===questions[qi].c)score++;qi++;renderQuiz()}
window.restartQuiz=()=>{qi=0;score=0;renderQuiz()}
renderQuiz();
