const KEY="pca_world_class_v1";

const DEFAULTS={
  lang:"en",
  schoolName:{en:"Purbanch Central Academy",ne:"पूर्वाञ्चल सेन्ट्रल एकेडेमी"},
  schoolTagline:{en:"Educate • Empower • Excel",ne:"शिक्षित बनाऔं • सशक्त बनाऔं • उत्कृष्ट बनाऔं"},
  schoolAddress:{en:"Mirchaiya-6, Siraha, Nepal",ne:"मिर्चैया-६, सिरहा, नेपाल"},
  phone:"+977-9801977115, 9841469538",email:"info@purbanchcentralacademy.edu.np",
  established:"2069 BS", mapUrl:"https://www.google.com/maps/search/?api=1&query=Mirchaiya-6%2C+Siraha%2C+Nepal", logo:"assets/logo-pca.png", banner:"assets/top-banner.jpeg",
  heroTitle:{en:"Inspiring Young Minds for a Brighter Future",ne:"उज्ज्वल भविष्यका लागि युवा प्रतिभालाई प्रेरित गर्दै"},
  heroText:{en:"A progressive learning community committed to academic excellence, character, creativity and lifelong learning.",ne:"शैक्षिक उत्कृष्टता, चरित्र निर्माण, सिर्जनशीलता र जीवनपर्यन्त सिकाइप्रति प्रतिबद्ध प्रगतिशील शैक्षिक समुदाय।"},
  aboutTitle:{en:"A school where every learner matters.",ne:"हरेक विद्यार्थी महत्वपूर्ण हुने विद्यालय।"},
  aboutText:{en:"Purbanch Central Academy is committed to creating a safe, disciplined and inspiring environment where students develop knowledge, confidence, practical skills and strong values.",ne:"पूर्वाञ्चल सेन्ट्रल एकेडेमी विद्यार्थीमा ज्ञान, आत्मविश्वास, व्यावहारिक सीप र सुदृढ मूल्य विकास गर्ने सुरक्षित, अनुशासित र प्रेरणादायी वातावरण निर्माण गर्न प्रतिबद्ध छ।"},
  visionTitle:{en:"Nurturing capable and confident learners.",ne:"सक्षम र आत्मविश्वासी विद्यार्थीको विकास।"},
  visionText:{en:"To nurture capable, ethical and confident learners who contribute positively to society.",ne:"समाजमा सकारात्मक योगदान गर्न सक्ने सक्षम, नैतिक र आत्मविश्वासी विद्यार्थी तयार गर्नु।"},
  missionTitle:{en:"Quality education with care and purpose.",ne:"माया, उद्देश्य र गुणस्तरीय शिक्षासहितको विकास।"},
  missionText:{en:"To provide quality education through caring teachers, modern learning practices and a culture of continuous improvement.",ne:"समर्पित शिक्षक, आधुनिक शिक्षण पद्धति र निरन्तर सुधारको संस्कृतिमार्फत गुणस्तरीय शिक्षा प्रदान गर्नु।"},
  principalName:{en:"Principal",ne:"प्रधानाध्यापक"},principalPhoto:"",
  principalMessage:{en:"It is our privilege to nurture every learner through quality education, strong values and a supportive school community. We encourage our students to remain curious, disciplined, compassionate and confident as they prepare for the future.",ne:"गुणस्तरीय शिक्षा, सुदृढ मूल्य र सहयोगी विद्यालय समुदायमार्फत प्रत्येक विद्यार्थीको प्रतिभा विकास गर्न पाउनु हाम्रो गौरव हो। भविष्यका लागि तयार हुँदै गर्दा विद्यार्थीहरू जिज्ञासु, अनुशासित, संवेदनशील र आत्मविश्वासी बन्न प्रेरित गरिन्छ।"},
  directorName:{en:"Director",ne:"निर्देशक"},directorPhoto:"",
  directorMessage:{en:"Our commitment is to create an institution where students, teachers and parents work together. With innovation, integrity and continuous improvement, we aim to help every child discover potential and achieve meaningful success.",ne:"विद्यार्थी, शिक्षक र अभिभावकबीच सहकार्य हुने शैक्षिक संस्था निर्माण गर्नु हाम्रो प्रतिबद्धता हो। नवीनता, इमानदारी र निरन्तर सुधारमार्फत प्रत्येक बालबालिकाले आफ्नो क्षमता पहिचान गरी सार्थक सफलता हासिल गर्न सक्ने वातावरण निर्माण गर्ने हाम्रो लक्ष्य हो।"},
  academics:[
    {icon:"📚",title:{en:"Foundational Learning",ne:"आधारभूत सिकाइ"},text:{en:"Build strong literacy, numeracy, scientific thinking and learning habits.",ne:"भाषिक तथा गणितीय दक्षता, वैज्ञानिक सोच र प्रभावकारी सिकाइ बानीको विकास।"}},
    {icon:"🔬",title:{en:"STEM & Innovation",ne:"STEM तथा नवप्रवर्तन"},text:{en:"Encourage experimentation, problem solving, technology and creative thinking.",ne:"प्रयोग, समस्या समाधान, प्रविधि र सिर्जनात्मक सोचलाई प्रोत्साहन।"}},
    {icon:"🌍",title:{en:"Life & Leadership",ne:"जीवनोपयोगी सीप तथा नेतृत्व"},text:{en:"Develop communication, collaboration, citizenship, sports and leadership skills.",ne:"सञ्चार, सहकार्य, नागरिक भावना, खेलकुद र नेतृत्व सीपको विकास।"}}
  ],
  gallery:[],
  facilities:[
    {icon:"🏫",title:{en:"Modern Classrooms",ne:"आधुनिक कक्षाकोठा"},text:{en:"Comfortable spaces designed for focused and collaborative learning.",ne:"केन्द्रित तथा सहकार्यात्मक सिकाइका लागि आरामदायी कक्षाकोठा।"}},
    {icon:"💻",title:{en:"Technology Enabled",ne:"प्रविधिमैत्री शिक्षा"},text:{en:"Digital resources that support engaging teaching and learning.",ne:"प्रभावकारी शिक्षण तथा सिकाइका लागि डिजिटल स्रोतसाधन।"}},
    {icon:"⚽",title:{en:"Sports & Activities",ne:"खेलकुद तथा अतिरिक्त क्रियाकलाप"},text:{en:"Opportunities for fitness, teamwork, creativity and co-curricular growth.",ne:"स्वास्थ्य, समूहकार्य, सिर्जनशीलता र अतिरिक्त विकासका अवसर।"}}
  ],
  news:[
    {date:{en:"Latest",ne:"नवीनतम"},title:{en:"Admissions & School Updates",ne:"भर्ना तथा विद्यालय सूचना"},text:{en:"Contact the school for the latest admission information, schedules and notices.",ne:"भर्ना, समयतालिका तथा नवीनतम सूचनाका लागि विद्यालयमा सम्पर्क गर्नुहोस्।"}},
    {date:{en:"Events",ne:"कार्यक्रम"},title:{en:"Student Activities",ne:"विद्यार्थी गतिविधि"},text:{en:"Explore academic, cultural, sports and leadership activities across the school year.",ne:"शैक्षिक, सांस्कृतिक, खेलकुद तथा नेतृत्व विकासका गतिविधिहरूमा सहभागी हुनुहोस्।"}},
    {date:{en:"Notice",ne:"सूचना"},title:{en:"Parent & Community Engagement",ne:"अभिभावक तथा समुदाय सहभागिता"},text:{en:"We value strong communication and partnership with parents and the local community.",ne:"अभिभावक तथा स्थानीय समुदायसँगको सुदृढ सहकार्यलाई हामी महत्व दिन्छौं।"}}
  ]
};

const UI={
  established:{en:"Established in 2069 BS",ne:"वि.सं. २०६९ मा स्थापित"},addressShort:{en:"Mirchaiya-6, Siraha, Nepal",ne:"मिर्चैया-६, सिरहा, नेपाल"},
  navHome:{en:"Home",ne:"गृहपृष्ठ"},navGallery:{en:"Gallery",ne:"ग्यालरी"},navAbout:{en:"About",ne:"हाम्रो बारेमा"},navAcademics:{en:"Academics",ne:"शैक्षिक कार्यक्रम"},navLeadership:{en:"Leadership",ne:"नेतृत्व"},navFacilities:{en:"Facilities",ne:"सुविधाहरू"},navNews:{en:"News & Events",ne:"समाचार तथा कार्यक्रम"},navContact:{en:"Contact",ne:"सम्पर्क"},navAdmin:{en:"Admin",ne:"प्रशासक"},
  heroKicker:{en:"LEARN • LEAD • SUCCEED",ne:"सिकौं • नेतृत्व गरौं • सफल बनौं"},discover:{en:"Discover Our School",ne:"विद्यालयबारे जान्नुहोस्"},admissionBtn:{en:"Admission Enquiry",ne:"भर्ना सोधपुछ"},heroBadge:{en:"A trusted learning community",ne:"विश्वसनीय शैक्षिक समुदाय"},
  qi1Title:{en:"Quality Education",ne:"गुणस्तरीय शिक्षा"},qi1Text:{en:"Strong academic foundations",ne:"सुदृढ शैक्षिक आधार"},qi2Title:{en:"Holistic Growth",ne:"समग्र विकास"},qi2Text:{en:"Skills, values and confidence",ne:"सीप, मूल्य र आत्मविश्वास"},qi3Title:{en:"Future Ready",ne:"भविष्यका लागि तयार"},qi3Text:{en:"Innovation and digital learning",ne:"नवप्रवर्तन र डिजिटल सिकाइ"},qi4Title:{en:"Caring Community",ne:"सहयोगी समुदाय"},qi4Text:{en:"School, family and community",ne:"विद्यालय, परिवार र समुदाय"},
  aboutKicker:{en:"ABOUT OUR SCHOOL",ne:"हाम्रो विद्यालय"},aboutPoint1Title:{en:"Student-centered learning",ne:"विद्यार्थी केन्द्रित सिकाइ"},aboutPoint1Text:{en:"Active participation, curiosity and individual attention.",ne:"सक्रिय सहभागिता, जिज्ञासा र व्यक्तिगत ध्यान।"},aboutPoint2Title:{en:"Character & leadership",ne:"चरित्र तथा नेतृत्व"},aboutPoint2Text:{en:"Responsibility, teamwork, integrity and leadership.",ne:"जिम्मेवारी, समूहकार्य, इमानदारी र नेतृत्व।"},aboutPoint3Title:{en:"Modern learning culture",ne:"आधुनिक सिकाइ संस्कृति"},aboutPoint3Text:{en:"Technology, creativity and continuous improvement.",ne:"प्रविधि, सिर्जनशीलता र निरन्तर सुधार।"},
  visionLabel:{en:"OUR VISION",ne:"हाम्रो दृष्टि"},missionLabel:{en:"OUR MISSION",ne:"हाम्रो लक्ष्य"},
  academicKicker:{en:"ACADEMICS",ne:"शैक्षिक कार्यक्रम"},academicHeading:{en:"Learning for the real world",ne:"वास्तविक जीवनका लागि सिकाइ"},academicSub:{en:"Strong foundations, practical skills and opportunities to explore.",ne:"सुदृढ आधार, व्यावहारिक सीप र खोज तथा अन्वेषणका अवसर।"},
  leadershipKicker:{en:"LEADERSHIP MESSAGE",ne:"नेतृत्व सन्देश"},leadershipHeading:{en:"Guidance from our leaders",ne:"हाम्रा नेतृत्वको मार्गदर्शन"},leadershipSub:{en:"Education grows stronger when vision, care and action move together.",ne:"दृष्टि, माया र कार्य एकसाथ अघि बढ्दा शिक्षा अझ सशक्त बन्छ।"},principalRole:{en:"MESSAGE FROM THE PRINCIPAL",ne:"प्रधानाध्यापकको सन्देश"},directorRole:{en:"MESSAGE FROM THE DIRECTOR",ne:"निर्देशकको सन्देश"},
  facilityKicker:{en:"CAMPUS LIFE",ne:"विद्यालय जीवन"},facilityHeading:{en:"Built for learning and growth",ne:"सिकाइ र विकासका लागि तयार"},
  newsKicker:{en:"LATEST UPDATES",ne:"नवीनतम सूचना"},newsHeading:{en:"News & Events",ne:"समाचार तथा कार्यक्रम"},galleryKicker:{en:"MEDIA GALLERY",ne:"मिडिया ग्यालरी"},galleryHeading:{en:"School Gallery",ne:"विद्यालय ग्यालरी"},gallerySub:{en:"Photos, videos and memorable moments from Purbanch Central Academy.",ne:"पूर्वाञ्चल सेन्ट्रल एकेडेमीका तस्बिर, भिडियो तथा सम्झनायोग्य क्षणहरू।"},galleryEmpty:{en:"Gallery media will appear here when the administrator uploads photos or videos.",ne:"प्रशासकले तस्बिर वा भिडियो अपलोड गरेपछि मिडिया यहाँ देखिनेछ।"},
  admissionKicker:{en:"ADMISSIONS",ne:"भर्ना"},admissionHeading:{en:"Give your child a strong start.",ne:"तपाईंको बालबालिकालाई बलियो सुरुवात दिनुहोस्।"},admissionText:{en:"Send an admission enquiry and our school team can contact you with the latest information.",ne:"भर्नासम्बन्धी सोधपुछ पठाउनुहोस् र विद्यालयको टोलीले आवश्यक जानकारीका लागि सम्पर्क गर्नेछ।"},admissionPoint1:{en:"Supportive learning environment",ne:"सहयोगी सिकाइ वातावरण"},admissionPoint2:{en:"Academic and co-curricular development",ne:"शैक्षिक तथा अतिरिक्त विकास"},admissionPoint3:{en:"Caring teachers and leadership",ne:"समर्पित शिक्षक तथा नेतृत्व"},formHeading:{en:"Admission Enquiry",ne:"भर्ना सोधपुछ"},submitEnquiry:{en:"Submit Enquiry",ne:"सोधपुछ पठाउनुहोस्"},
  contactKicker:{en:"CONTACT",ne:"सम्पर्क"},contactHeading:{en:"We'd love to hear from you.",ne:"हामीसँग सम्पर्क गर्नुहोस्।"},contactText:{en:"For admissions, school information or general enquiries, please contact Purbanch Central Academy.",ne:"भर्ना, विद्यालयसम्बन्धी जानकारी वा अन्य सोधपुछका लागि पूर्वाञ्चल सेन्ट्रल एकेडेमीमा सम्पर्क गर्नुहोस्।"},addressLabel:{en:"Address",ne:"ठेगाना"},phoneLabel:{en:"Phone",ne:"फोन"},emailLabel:{en:"Email",ne:"इमेल"},openMap:{en:"Open Location",ne:"स्थान हेर्नुहोस्"},footerTagline:{en:"Educate • Empower • Excel",ne:"शिक्षित बनाऔं • सशक्त बनाऔं • उत्कृष्ट बनाऔं"},rights:{en:"All rights reserved.",ne:"सर्वाधिकार सुरक्षित।"},adminAccess:{en:"Administrator Access",ne:"प्रशासक प्रवेश"}
};

function loadData(){try{return {...DEFAULTS,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch(e){return DEFAULTS}}
function text(v,lang){return v&&typeof v==="object"&&("en" in v||"ne" in v)?(v[lang]||v.en||v.ne||""):String(v??"")}
function esc(v){return String(v??"").replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
function set(id,v,lang){const el=document.getElementById(id);if(el)el.textContent=text(v,lang)}
function applyImage(el,src,fallback){if(!el)return;el.src=src||fallback;el.onerror=()=>{el.src=fallback}}
function render(){
  const d=loadData(), lang=d.lang||"en";
  document.documentElement.lang=lang==="ne"?"ne":"en";document.body.classList.toggle("ne",lang==="ne");
  document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=text(UI[el.dataset.i18n],lang));
  document.querySelectorAll("[data-lang]").forEach(el=>el.classList.toggle("active",el.dataset.lang===lang));
  set("schoolName",d.schoolName,lang);set("schoolTagline",d.schoolTagline,lang);set("heroTitle",d.heroTitle,lang);set("heroText",d.heroText,lang);
  set("aboutTitle",d.aboutTitle,lang);set("aboutText",d.aboutText,lang);set("visionTitle",d.visionTitle,lang);set("visionText",d.visionText,lang);set("missionTitle",d.missionTitle,lang);set("missionText",d.missionText,lang);
  set("principalName",d.principalName,lang);set("principalMessage",d.principalMessage,lang);set("directorName",d.directorName,lang);set("directorMessage",d.directorMessage,lang);
  set("contactAddress",d.schoolAddress,lang);set("footerAddress",d.schoolAddress,lang);set("footerName",d.schoolName,lang);document.getElementById("topPhone").textContent=d.phone;document.getElementById("contactPhone").textContent=d.phone;document.getElementById("contactEmail").textContent=d.email;const map=document.getElementById("mapLink");if(map)map.href=d.mapUrl||("https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(text(d.schoolAddress,lang)));
  applyImage(document.getElementById("siteLogo"),d.logo,"assets/logo-pca.png");applyImage(document.getElementById("heroLogo"),d.logo,"assets/logo-pca.png");applyImage(document.getElementById("footerLogo"),d.logo,"assets/logo-pca.png");applyImage(document.getElementById("heroBanner"),d.banner,"assets/top-banner.jpeg");
  ["principal","director"].forEach(role=>{const img=document.getElementById(role+"Photo"),box=document.getElementById(role+"PhotoBox"),initial=document.getElementById(role+"Initial");if(d[role+"Photo"]){img.src=d[role+"Photo"];box.classList.add("has-image")}else{box.classList.remove("has-image");initial.textContent=text(d[role+"Name"],lang).charAt(0).toUpperCase()}});
  document.getElementById("heroBadgeYear").textContent=d.established;
  document.getElementById("academicGrid").innerHTML=d.academics.map(x=>`<article class="feature-card"><div class="feature-icon">${esc(x.icon)}</div><h3>${esc(text(x.title,lang))}</h3><p>${esc(text(x.text,lang))}</p></article>`).join("");
  document.getElementById("facilityGrid").innerHTML=d.facilities.map(x=>`<article class="feature-card"><div class="feature-icon">${esc(x.icon)}</div><h3>${esc(text(x.title,lang))}</h3><p>${esc(text(x.text,lang))}</p></article>`).join("");
  document.getElementById("newsGrid").innerHTML=d.news.map(x=>`<article class="news-card"><div class="news-date">${esc(text(x.date,lang))}</div><h3>${esc(text(x.title,lang))}</h3><p>${esc(text(x.text,lang))}</p></article>`).join("");
  const galleryGrid=document.getElementById("galleryGrid"),galleryEmpty=document.getElementById("galleryEmpty");
  const gallery=Array.isArray(d.gallery)?d.gallery:[];
  if(galleryGrid){galleryGrid.innerHTML=gallery.map((x,i)=>{const src=x.src||"";const media=x.type==="video"?`<video controls preload="metadata" src="${esc(src)}"></video>`:`<img loading="lazy" src="${esc(src)}" alt="${esc(text(x.title,lang)||"PCA Gallery")}">`;return `<article class="gallery-card">${media}<div class="gallery-caption"><span class="gallery-type">${x.type==="video"?"▶ VIDEO":"PHOTO"}</span><h3>${esc(text(x.title,lang))}</h3><p>${esc(text(x.caption,lang))}</p></div></article>`}).join("");galleryEmpty.hidden=gallery.length>0;}
  document.getElementById("year").textContent=new Date().getFullYear();
  document.querySelectorAll("[data-ph-en]").forEach(el=>el.placeholder=lang==="ne"?el.dataset.phNe:el.dataset.phEn);
}
document.addEventListener("DOMContentLoaded",()=>{
  render();
  document.getElementById("menuToggle").onclick=()=>document.getElementById("header").classList.toggle("nav-open");
  document.querySelectorAll("#mainNav a").forEach(a=>a.onclick=()=>document.getElementById("header").classList.remove("nav-open"));
  document.querySelectorAll("[data-lang]").forEach(b=>b.onclick=()=>{const d=loadData();d.lang=b.dataset.lang;localStorage.setItem(KEY,JSON.stringify(d));render()});
  window.addEventListener("storage",e=>{if(e.key===KEY || e.key===KEY+"_updated") render();});
  document.getElementById("admissionForm").onsubmit=e=>{
    e.preventDefault();const d=loadData(),lang=d.lang||"en";const data=Object.fromEntries(new FormData(e.target).entries());
    const list=JSON.parse(localStorage.getItem("pca_admissions_v1")||"[]");list.push({...data,date:new Date().toISOString()});localStorage.setItem("pca_admissions_v1",JSON.stringify(list));
    document.getElementById("admissionMsg").textContent=lang==="ne"?"धन्यवाद। तपाईंको भर्ना सोधपुछ सुरक्षित गरिएको छ।":"Thank you. Your admission enquiry has been saved.";e.target.reset();render();
  };
});
