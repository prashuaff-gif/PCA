const KEY="pca_world_class_v1";

const DEFAULTS={
  lang:"en",
  schoolName:{en:"Purbanch Central Academy",ne:"पूर्वाञ्चल सेन्ट्रल एकेडेमी"},
  schoolTagline:{en:"Educate • Empower • Excel",ne:"शिक्षित बनाऔं • सशक्त बनाऔं • उत्कृष्ट बनाऔं"},
  schoolAddress:{en:"Mirchaiya-6, Siraha, Nepal",ne:"मिर्चैया-६, सिरहा, नेपाल"},
  phone:"+977-9801977115, 9841469538",
  email:"info@purbanchcentralacademy.edu.np",
  mapUrl:"https://www.google.com/maps/search/?api=1&query=Mirchaiya-6%2C+Siraha%2C+Nepal",
  established:"2069 BS",
  logo:"assets/logo-pca.png",
  banner:"assets/top-banner.jpeg",
  heroTitle:{en:"Inspiring Young Minds for a Brighter Future",ne:"उज्ज्वल भविष्यका लागि युवा प्रतिभालाई प्रेरित गर्दै"},
  heroText:{en:"A progressive learning community committed to academic excellence, character, creativity and lifelong learning.",ne:"शैक्षिक उत्कृष्टता, चरित्र निर्माण, सिर्जनशीलता र जीवनपर्यन्त सिकाइप्रति प्रतिबद्ध प्रगतिशील शैक्षिक समुदाय।"},
  aboutTitle:{en:"A school where every learner matters.",ne:"हरेक विद्यार्थी महत्वपूर्ण हुने विद्यालय।"},
  aboutText:{en:"Purbanch Central Academy is committed to creating a safe, disciplined and inspiring environment where students develop knowledge, confidence, practical skills and strong values.",ne:"पूर्वाञ्चल सेन्ट्रल एकेडेमी विद्यार्थीमा ज्ञान, आत्मविश्वास, व्यावहारिक सीप र सुदृढ मूल्य विकास गर्ने सुरक्षित, अनुशासित र प्रेरणादायी वातावरण निर्माण गर्न प्रतिबद्ध छ।"},
  visionTitle:{en:"Nurturing capable and confident learners.",ne:"सक्षम र आत्मविश्वासी विद्यार्थीको विकास।"},
  visionText:{en:"To nurture capable, ethical and confident learners who contribute positively to society.",ne:"समाजमा सकारात्मक योगदान गर्न सक्ने सक्षम, नैतिक र आत्मविश्वासी विद्यार्थी तयार गर्नु।"},
  missionTitle:{en:"Quality education with care and purpose.",ne:"माया, उद्देश्य र गुणस्तरीय शिक्षासहितको विकास।"},
  missionText:{en:"To provide quality education through caring teachers, modern learning practices and a culture of continuous improvement.",ne:"समर्पित शिक्षक, आधुनिक शिक्षण पद्धति र निरन्तर सुधारको संस्कृतिमार्फत गुणस्तरीय शिक्षा प्रदान गर्नु।"},
  principalName:{en:"Principal",ne:"प्रधानाध्यापक"}, principalPhoto:"",
  principalMessage:{en:"It is our privilege to nurture every learner through quality education, strong values and a supportive school community. We encourage our students to remain curious, disciplined, compassionate and confident as they prepare for the future.",ne:"गुणस्तरीय शिक्षा, सुदृढ मूल्य र सहयोगी विद्यालय समुदायमार्फत प्रत्येक विद्यार्थीको प्रतिभा विकास गर्न पाउनु हाम्रो गौरव हो। भविष्यका लागि तयार हुँदै गर्दा विद्यार्थीहरू जिज्ञासु, अनुशासित, संवेदनशील र आत्मविश्वासी बन्न प्रेरित गरिन्छ।"},
  directorName:{en:"Director",ne:"निर्देशक"}, directorPhoto:"",
  directorMessage:{en:"Our commitment is to create an institution where students, teachers and parents work together. With innovation, integrity and continuous improvement, we aim to help every child discover potential and achieve meaningful success.",ne:"विद्यार्थी, शिक्षक र अभिभावकबीच सहकार्य हुने शैक्षिक संस्था निर्माण गर्नु हाम्रो प्रतिबद्धता हो। नवीनता, इमानदारी र निरन्तर सुधारमार्फत प्रत्येक बालबालिकाले आफ्नो क्षमता पहिचान गरी सार्थक सफलता हासिल गर्न सक्ने वातावरण निर्माण गर्ने हाम्रो लक्ष्य हो।"},
  academics:[
    {icon:"📚",title:{en:"Foundational Learning",ne:"आधारभूत सिकाइ"},text:{en:"Build strong literacy, numeracy, scientific thinking and learning habits.",ne:"भाषिक तथा गणितीय दक्षता, वैज्ञानिक सोच र प्रभावकारी सिकाइ बानीको विकास।"}},
    {icon:"🔬",title:{en:"STEM & Innovation",ne:"STEM तथा नवप्रवर्तन"},text:{en:"Encourage experimentation, problem solving, technology and creative thinking.",ne:"प्रयोग, समस्या समाधान, प्रविधि र सिर्जनात्मक सोचलाई प्रोत्साहन।"}},
    {icon:"🌍",title:{en:"Life & Leadership",ne:"जीवनोपयोगी सीप तथा नेतृत्व"},text:{en:"Develop communication, collaboration, citizenship, sports and leadership skills.",ne:"सञ्चार, सहकार्य, नागरिक भावना, खेलकुद र नेतृत्व सीपको विकास।"}}
  ],
  facilities:[
    {icon:"🏫",title:{en:"Modern Classrooms",ne:"आधुनिक कक्षाकोठा"},text:{en:"Comfortable spaces designed for focused and collaborative learning.",ne:"केन्द्रित तथा सहकार्यात्मक सिकाइका लागि आरामदायी कक्षाकोठा।"}},
    {icon:"💻",title:{en:"Technology Enabled",ne:"प्रविधिमैत्री शिक्षा"},text:{en:"Digital resources that support engaging teaching and learning.",ne:"प्रभावकारी शिक्षण तथा सिकाइका लागि डिजिटल स्रोतसाधन।"}},
    {icon:"⚽",title:{en:"Sports & Activities",ne:"खेलकुद तथा अतिरिक्त क्रियाकलाप"},text:{en:"Opportunities for fitness, teamwork, creativity and co-curricular growth.",ne:"स्वास्थ्य, समूहकार्य, सिर्जनशीलता र अतिरिक्त विकासका अवसर।"}}
  ],
  gallery:[],
  news:[
    {date:{en:"Latest",ne:"नवीनतम"},title:{en:"Admissions & School Updates",ne:"भर्ना तथा विद्यालय सूचना"},text:{en:"Contact the school for the latest admission information, schedules and notices.",ne:"भर्ना, समयतालिका तथा नवीनतम सूचनाका लागि विद्यालयमा सम्पर्क गर्नुहोस्।"}},
    {date:{en:"Events",ne:"कार्यक्रम"},title:{en:"Student Activities",ne:"विद्यार्थी गतिविधि"},text:{en:"Explore academic, cultural, sports and leadership activities across the school year.",ne:"शैक्षिक, सांस्कृतिक, खेलकुद तथा नेतृत्व विकासका गतिविधिहरूमा सहभागी हुनुहोस्।"}},
    {date:{en:"Notice",ne:"सूचना"},title:{en:"Parent & Community Engagement",ne:"अभिभावक तथा समुदाय सहभागिता"},text:{en:"We value strong communication and partnership with parents and the local community.",ne:"अभिभावक तथा स्थानीय समुदायसँगको सुदृढ सहकार्यलाई हामी महत्व दिन्छौं।"}}
  ]
};

let data={},tab="dashboard";

const fieldGroups={
  general:["schoolName","schoolTagline","schoolAddress","phone","email","established","logo","banner"],
  contact:["schoolAddress","phone","email","mapUrl"],
  home:["heroTitle","heroText"],
  about:["aboutTitle","aboutText","visionTitle","visionText","missionTitle","missionText"],
  leadership:["principalName","principalPhoto","principalMessage","directorName","directorPhoto","directorMessage"]
};

const labels={
  logo:"School Logo",banner:"Top Banner",schoolName:"School Name / विद्यालयको नाम",
  schoolTagline:"Tagline / आदर्श वाक्य",schoolAddress:"Address / ठेगाना",phone:"Phone",
  email:"Email",mapUrl:"Google Maps / Location URL",established:"Established / स्थापना वर्ष",heroTitle:"Hero Headline / मुख्य शीर्षक",
  heroText:"Hero Description / मुख्य विवरण",aboutTitle:"About Title / परिचय शीर्षक",
  aboutText:"About Text / परिचय",visionTitle:"Vision Title / दृष्टि शीर्षक",visionText:"Vision / दृष्टि",
  missionTitle:"Mission Title / लक्ष्य शीर्षक",missionText:"Mission / लक्ष्य",
  principalName:"Principal Name / प्रधानाध्यापक",principalPhoto:"Principal Photo",
  principalMessage:"Principal Message / प्रधानाध्यापकको सन्देश",directorName:"Director Name / निर्देशक",
  directorPhoto:"Director Photo",directorMessage:"Director Message / निर्देशकको सन्देश"
};

function cloneDefaults(){
  return JSON.parse(JSON.stringify(DEFAULTS));
}

function load(){
  try{
    const saved=JSON.parse(localStorage.getItem(KEY)||"null");
    const out=saved ? Object.assign(cloneDefaults(),saved) : cloneDefaults();
    if(!Array.isArray(out.gallery)) out.gallery=[];
    if(out.gallery.length===0){
      for(const legacyKey of ["pca_gallery_v1","pca_media_gallery_v1","pca_gallery"]){
        try{const legacy=JSON.parse(localStorage.getItem(legacyKey)||"null"); if(Array.isArray(legacy)&&legacy.length){out.gallery=legacy;break;}}catch(e){}
      }
    }
    return out;
  }catch(e){
    return cloneDefaults();
  }
}

function save(){
  try{
    localStorage.setItem(KEY,JSON.stringify(data));
    return true;
  }catch(e){
    alert("Browser storage is full. Try smaller uploaded images.");
    return false;
  }
}

function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]));
}

function bilingualField(k,full){
  const v=(data[k]&&typeof data[k]==="object")?data[k]:{en:"",ne:""};
  const textArea=["heroText","aboutText","visionText","missionText","principalMessage","directorMessage"].includes(k);
  if(["logo","banner","principalPhoto","directorPhoto"].includes(k)){
    return '<div class="field full"><label>'+labels[k]+' — image URL or upload</label>'+
      '<input data-key="'+k+'" value="'+esc(data[k]||"")+'" placeholder="Paste image URL or upload below">'+
      '<input type="file" accept="image/*" data-upload="'+k+'"></div>';
  }
  let en= textArea ? '<textarea data-key="'+k+'" data-lang="en">'+esc(v.en)+'</textarea>' :
    '<input data-key="'+k+'" data-lang="en" value="'+esc(v.en)+'">';
  let ne= textArea ? '<textarea data-key="'+k+'" data-lang="ne">'+esc(v.ne)+'</textarea>' :
    '<input data-key="'+k+'" data-lang="ne" value="'+esc(v.ne)+'">';
  return '<div class="field '+(full?"full":"")+'"><label>'+labels[k]+' — English</label>'+en+
    '<label class="ne-label">नेपाली</label>'+ne+'</div>';
}

function simpleFields(keys){
  if(tab==="contact"){
    const a=data.schoolAddress&&typeof data.schoolAddress==="object"?data.schoolAddress:{en:"",ne:""};
    return '<div class="panel contact-editor"><div class="panel-title-row"><div><h2>Contact & Location</h2><p>Update the contact details shown on the public website. Changes are saved to this browser and can be applied immediately.</p></div><span class="save-badge">LIVE CMS</span></div>'+
      '<div class="fields">'+
      '<div class="field"><label>Address — English</label><input id="contactAddressEn" value="'+esc(a.en)+'"></div>'+
      '<div class="field"><label>ठेगाना — नेपाली</label><input id="contactAddressNe" value="'+esc(a.ne)+'"></div>'+
      '<div class="field"><label>Phone Numbers</label><input id="contactPhone" value="'+esc(data.phone||"")+'" placeholder="e.g. +977-9801977115, +977-9841469538"></div>'+
      '<div class="field"><label>Email Address</label><input id="contactEmail" type="email" value="'+esc(data.email||"")+'" placeholder="school@example.com"></div>'+
      '<div class="field full"><label>Google Maps / Location URL</label><input id="contactMap" value="'+esc(data.mapUrl||"")+'" placeholder="https://www.google.com/maps/..." /></div>'+
      '</div><div class="contact-actions"><button class="add" id="saveContactBtn">Save Contact Details</button><button class="secondary-btn" id="resetContactBtn" type="button">Reset Contact</button></div>'+
      '<div id="contactSaveMsg" class="save-message"></div></div>'+
      '<div class="panel"><h2>What will update?</h2><div class="contact-checklist"><div>✓ Header phone number</div><div>✓ Contact address</div><div>✓ Contact phone number</div><div>✓ Contact email</div><div>✓ Open Location button</div><div>✓ Footer address</div></div></div>';
  }
  return '<div class="panel"><h2>Edit content</h2><p>English and Nepali content can be edited separately.</p><div class="fields">'+
    keys.map(k=>bilingualField(k,["heroText","aboutText","visionText","missionText","principalMessage","directorMessage"].includes(k))).join("")+
    '</div></div>';
}

function saveContactDetails(){
  const en=document.getElementById("contactAddressEn").value.trim();
  const ne=document.getElementById("contactAddressNe").value.trim();
  const phone=document.getElementById("contactPhone").value.trim();
  const email=document.getElementById("contactEmail").value.trim();
  const mapUrl=document.getElementById("contactMap").value.trim();
  data.schoolAddress={en,ne}; data.phone=phone; data.email=email; data.mapUrl=mapUrl;
  if(save()){
    localStorage.setItem(KEY+"_updated",String(Date.now()));
    const msg=document.getElementById("contactSaveMsg");
    if(msg){msg.textContent="Contact details saved successfully. Open View Website to verify.";msg.classList.add("show");}
  }
}

function bindContact(){
  const saveBtn=document.getElementById("saveContactBtn");
  if(saveBtn) saveBtn.onclick=()=>{saveContactDetails();saveBtn.textContent="Saved ✓";setTimeout(()=>saveBtn.textContent="Save Contact Details",1400)};
  const reset=document.getElementById("resetContactBtn");
  if(reset) reset.onclick=()=>{
    const d=cloneDefaults(); data.schoolAddress=d.schoolAddress;data.phone=d.phone;data.email=d.email;data.mapUrl=d.mapUrl;
    save(); render();
  };
}


function arrayPanel(key,title){
  return '<div class="panel"><h2>'+title+'</h2><div id="'+key+'List">'+
    data[key].map((x,i)=>arrayItem(key,x,i)).join("")+
    '</div><button class="add" data-add="'+key+'">+ Add Item</button></div>';
}

function arrayItem(key,x,i){
  const fields=key==="news"?["date","title","text"]:["icon","title","text"];
  let html='<div class="array-item"><div class="array-head"><b>'+(key==="news"?"News":"Item")+' '+(i+1)+'</b>'+
    '<button class="remove" data-remove="'+key+'" data-index="'+i+'">Remove</button></div><div class="fields">';
  fields.forEach(k=>{
    if(k==="icon"){
      html+='<div class="field"><label>Icon</label><input data-arr="'+key+'" data-index="'+i+'" data-field="'+k+'" value="'+esc(x[k]||"")+'"></div>';
    }else{
      const v=(x[k]&&typeof x[k]==="object")?x[k]:{en:"",ne:""};
      if(k==="text"){
        html+='<div class="field full"><label>'+k+' — English</label><textarea data-arr="'+key+'" data-index="'+i+'" data-field="'+k+'" data-lang="en">'+esc(v.en)+'</textarea>'+
          '<label class="ne-label">नेपाली</label><textarea data-arr="'+key+'" data-index="'+i+'" data-field="'+k+'" data-lang="ne">'+esc(v.ne)+'</textarea></div>';
      }else{
        html+='<div class="field"><label>'+k+' — English</label><input data-arr="'+key+'" data-index="'+i+'" data-field="'+k+'" data-lang="en" value="'+esc(v.en)+'">'+
          '<label class="ne-label">नेपाली</label><input data-arr="'+key+'" data-index="'+i+'" data-field="'+k+'" data-lang="ne" value="'+esc(v.ne)+'"></div>';
      }
    }
  });
  return html+'</div></div>';
}


function galleryPanel(){
  const items=Array.isArray(data.gallery)?data.gallery:[];
  let html='<div class="panel gallery-admin"><div class="panel-title-row"><div><h2>🖼️ Media Gallery Manager</h2><p>This is the live Gallery CMS. Add, edit, reorder, and delete photos/videos here. Click <b>Save Gallery Changes</b> after editing.</p></div><span class="save-badge">CONNECTED TO WEBSITE</span></div>'+ 
    '<div class="gallery-upload-box"><div class="fields">'+
    '<div class="field"><label>Media File (photo/video)</label><input id="galleryFile" type="file" accept="image/*,video/*"></div>'+ 
    '<div class="field"><label>Or Media URL</label><input id="galleryUrl" placeholder="https://example.com/photo.jpg or video.mp4"></div>'+ 
    '<div class="field"><label>Media Type</label><select id="galleryType"><option value="image">Photo / Image</option><option value="video">Video</option></select></div>'+ 
    '<div class="field"><label>Title — English</label><input id="galleryTitleEn" placeholder="Annual Sports Day"></div>'+ 
    '<div class="field"><label>शीर्षक — नेपाली</label><input id="galleryTitleNe" placeholder="वार्षिक खेलकुद दिवस"></div>'+ 
    '<div class="field full"><label>Caption — English</label><textarea id="galleryCaptionEn" placeholder="Write a short description..."></textarea><label class="ne-label">क्याप्सन — नेपाली</label><textarea id="galleryCaptionNe" placeholder="छोटो विवरण लेख्नुहोस्..."></textarea></div>'+ 
    '</div><div class="contact-actions"><button class="add" id="addGalleryBtn" type="button">+ Add to Gallery</button><button class="secondary-btn" id="clearGalleryForm" type="button">Clear</button><button class="add" id="saveGalleryBtn" type="button">💾 Save Gallery Changes</button></div><p class="gallery-help">Uploaded images are limited to 2 MB and videos to 4 MB for browser storage. Use a media URL for larger files.</p><div id="gallerySaveMsg" class="save-message"></div></div>';
  if(!items.length) html+='<div class="empty">No gallery media yet. Add your first photo or video above.</div>';
  else html+='<div class="gallery-admin-list">'+items.map((x,i)=>{
    const media=x.type==="video"?'<video controls preload="metadata" src="'+esc(x.src)+'"></video>':'<img src="'+esc(x.src)+'" alt="">';
    return '<article class="gallery-admin-item"><div class="gallery-admin-preview">'+media+'</div><div class="gallery-admin-meta">'+
      '<div class="field"><label>Title — English</label><input data-gallery-field="title" data-gallery-lang="en" data-gallery-index="'+i+'" value="'+esc((x.title&&x.title.en)||'')+'"></div>'+ 
      '<div class="field"><label>शीर्षक — नेपाली</label><input data-gallery-field="title" data-gallery-lang="ne" data-gallery-index="'+i+'" value="'+esc((x.title&&x.title.ne)||'')+'"></div>'+ 
      '<div class="field full"><label>Caption — English</label><textarea data-gallery-field="caption" data-gallery-lang="en" data-gallery-index="'+i+'">'+esc((x.caption&&x.caption.en)||'')+'</textarea><label class="ne-label">क्याप्सन — नेपाली</label><textarea data-gallery-field="caption" data-gallery-lang="ne" data-gallery-index="'+i+'">'+esc((x.caption&&x.caption.ne)||'')+'</textarea></div>'+ 
      '<div class="gallery-admin-actions"><span class="gallery-file-type">'+(x.type==='video'?'VIDEO':'PHOTO')+'</span><button class="remove" type="button" data-gallery-remove="'+i+'">Delete Media</button></div></div></article>';
  }).join('')+'</div>';
  return html+'</div>';
}

function bindGallery(){
  document.querySelectorAll('[data-gallery-field]').forEach(el=>el.oninput=()=>{
    const i=Number(el.dataset.galleryIndex),field=el.dataset.galleryField,lang=el.dataset.galleryLang;
    if(!data.gallery[i][field]||typeof data.gallery[i][field]!=='object')data.gallery[i][field]={en:'',ne:''};
    data.gallery[i][field][lang]=el.value;
  });
  document.querySelectorAll('[data-gallery-remove]').forEach(btn=>btn.onclick=()=>{
    if(!confirm('Delete this media from the Gallery?'))return;
    data.gallery.splice(Number(btn.dataset.galleryRemove),1);
    save(); localStorage.setItem(KEY+'_updated',String(Date.now())); render();
  });
  const clear=document.getElementById('clearGalleryForm');
  if(clear) clear.onclick=()=>['galleryFile','galleryUrl','galleryTitleEn','galleryTitleNe','galleryCaptionEn','galleryCaptionNe'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  const add=document.getElementById('addGalleryBtn');
  if(add) add.onclick=()=>{
    const file=document.getElementById('galleryFile').files[0], url=document.getElementById('galleryUrl').value.trim(), type=document.getElementById('galleryType').value;
    const title={en:document.getElementById('galleryTitleEn').value.trim(),ne:document.getElementById('galleryTitleNe').value.trim()};
    const caption={en:document.getElementById('galleryCaptionEn').value.trim(),ne:document.getElementById('galleryCaptionNe').value.trim()};
    if(!file && !url){alert('Choose a media file or enter a media URL.');return;}
    const finish=src=>{
      const mediaType=file?(file.type.startsWith('video/')?'video':'image'):type;
      data.gallery.push({id:'g_'+Date.now()+'_'+Math.random().toString(36).slice(2,8),type:mediaType,src,title,caption,createdAt:new Date().toISOString()});
      if(save()){localStorage.setItem(KEY+'_updated',String(Date.now()));render();}
    };
    if(file){
      const max=file.type.startsWith('video/')?4*1024*1024:2*1024*1024;
      if(file.size>max){alert(file.type.startsWith('video/')?'Please choose a video under 4 MB, or use a video URL.':'Please choose an image under 2 MB.');return;}
      const reader=new FileReader(); reader.onload=()=>finish(reader.result); reader.readAsDataURL(file);
    }else finish(url);
  };
  const saveGallery=document.getElementById('saveGalleryBtn');
  if(saveGallery) saveGallery.onclick=()=>{
    if(save()){
      localStorage.setItem(KEY+'_updated',String(Date.now()));
      const msg=document.getElementById('gallerySaveMsg');
      if(msg){msg.textContent='Gallery changes saved successfully and connected to the public website.';msg.classList.add('show');setTimeout(()=>msg.classList.remove('show'),3000);}
    }
  };
}

function dashboard(){
  const admissions=JSON.parse(localStorage.getItem("pca_admissions_v1")||"[]");
  return '<div class="panel"><h2>Website Overview</h2><p>Use the left menu to edit the bilingual website.</p>'+
    '<div class="stat-grid"><div class="stat-box"><b>'+data.academics.length+'</b><span>Academic Programs</span></div>'+
    '<div class="stat-box"><b>'+data.facilities.length+'</b><span>Facilities</span></div>'+
    '<div class="stat-box"><b>'+data.news.length+'</b><span>News Items</span></div>'+
    '<div class="stat-box"><b>'+(Array.isArray(data.gallery)?data.gallery.length:0)+'</b><span>Gallery Media</span></div>'+
    '<div class="stat-box"><b>'+admissions.length+'</b><span>Admission Enquiries</span></div>'+
    '<div class="stat-box"><b>EN / नेपाली</b><span>Languages</span></div><div class="stat-box"><b>Local</b><span>Browser CMS</span></div></div></div>'+
    '<div class="panel"><h2>School Assets</h2><p>Your supplied logo and banner are included.</p>'+
    '<div class="asset-preview"><img src="'+esc(data.logo)+'" alt=""><div><b>School Logo</b></div></div><br>'+
    '<div class="asset-preview"><img src="'+esc(data.banner)+'" alt=""><div><b>Top Banner</b></div></div></div>';
}

function admissions(){
  const arr=JSON.parse(localStorage.getItem("pca_admissions_v1")||"[]");
  if(!arr.length)return '<div class="panel"><h2>Admission Enquiries</h2><div class="empty">No admission enquiries yet.</div></div>';
  return '<div class="panel"><h2>Admission Enquiries</h2>'+arr.slice().reverse().map((x,i)=>
    '<article class="admission-row"><header><div><h3>'+esc(x.student)+'</h3><small>'+esc(x.grade)+' • '+esc(x.parent)+'</small></div>'+
    '<button class="remove" data-admission="'+(arr.length-1-i)+'">Delete</button></header><p>📞 '+esc(x.phone)+(x.email?' • ✉ '+esc(x.email):"")+'<br>'+esc(x.message||"")+
    '</p><small>'+new Date(x.date).toLocaleString()+'</small></article>').join("")+'</div>';
}


const AUTH_KEY="pca_admin_auth_v3";
const LEGACY_KEY="pca_admin_auth_v2";

async function hashPassword(value){
  const bytes=new TextEncoder().encode(value);
  const digest=await crypto.subtle.digest("SHA-256",bytes);
  return Array.from(new Uint8Array(digest)).map(b=>b.toString(16).padStart(2,"0")).join("");
}
function auth(){try{return JSON.parse(localStorage.getItem(AUTH_KEY)||"null")}catch(e){return null}}
function hasAdmin(){return !!auth()}

function securityPanel(){
  return '<div class="panel security-panel"><div class="panel-title-row"><div><h2>🔐 Admin Security & Password Reset</h2><p>Change the administrator username/password. Passwords and recovery phrases are never displayed in plain text.</p></div><span class="save-badge">PRIVATE</span></div>'+ 
  '<div class="fields"><div class="field"><label>Current Admin Username</label><input id="secCurrentUser" autocomplete="username"></div>'+ 
  '<div class="field"><label>Current Password</label><input id="secCurrentPass" type="password" autocomplete="current-password" placeholder="Enter current password"></div>'+ 
  '<div class="field"><label>New Admin Username</label><input id="secNewUser" autocomplete="username" placeholder="New username"></div>'+ 
  '<div class="field"><label>New Password</label><input id="secNewPass" type="password" autocomplete="new-password" placeholder="Minimum 8 characters"></div>'+ 
  '<div class="field"><label>Confirm New Password</label><input id="secConfirmPass" type="password" autocomplete="new-password" placeholder="Re-enter new password"></div>'+ 
  '<div class="field"><label>New Recovery Phrase / Code</label><input id="secRecovery" type="password" autocomplete="off" placeholder="Optional: update recovery phrase"></div></div>'+ 
  '<div class="contact-actions"><button class="add" id="saveSecurityBtn">Update Admin Login</button></div>'+ 
  '<div id="securityMsg" class="save-message"></div><p class="security-note">Forgot-password recovery uses your private recovery phrase. There is no public demo password.</p></div>';
}
function bindSecurity(){
 const saveBtn=document.getElementById("saveSecurityBtn");
 if(saveBtn) saveBtn.onclick=async()=>{
   const a=auth(), cu=document.getElementById("secCurrentUser").value.trim(), cp=document.getElementById("secCurrentPass").value, nu=document.getElementById("secNewUser").value.trim(), np=document.getElementById("secNewPass").value, conf=document.getElementById("secConfirmPass").value, recovery=document.getElementById("secRecovery").value, msg=document.getElementById("securityMsg");
   if(!a || cu!==a.username || await hashPassword(cp)!==a.passwordHash){msg.textContent="Current login is incorrect.";msg.classList.add("show");return;}
   if(!nu){msg.textContent="Enter a new username.";msg.classList.add("show");return;}
   if(np && np.length<8){msg.textContent="New password must contain at least 8 characters.";msg.classList.add("show");return;}
   if(np!==conf){msg.textContent="New passwords do not match.";msg.classList.add("show");return;}
   const next={username:nu,passwordHash:np?await hashPassword(np):a.passwordHash,recoveryHash:recovery?await hashPassword(recovery):a.recoveryHash};
   if(!next.recoveryHash){msg.textContent="A recovery phrase/code is required.";msg.classList.add("show");return;}
   localStorage.setItem(AUTH_KEY,JSON.stringify(next));
   msg.textContent="Admin security settings updated successfully.";msg.classList.add("show");
   ["secCurrentPass","secNewPass","secConfirmPass","secRecovery"].forEach(id=>{const el=document.getElementById(id);if(el)el.value=""});
 };
}

function showLoginState(){
 const authExists=hasAdmin();
 document.getElementById("loginBox").classList.toggle("hidden",!authExists);
 document.getElementById("setupBox").classList.toggle("hidden",authExists);
 document.getElementById("forgotBox").classList.add("hidden");
}

async function createFirstAdmin(){
 const u=document.getElementById("setupUser").value.trim(), p=document.getElementById("setupPass").value, c=document.getElementById("setupConfirm").value, r=document.getElementById("setupRecovery").value, msg=document.getElementById("setupMsg");
 if(u.length<3){msg.textContent="Username must contain at least 3 characters.";return;}
 if(p.length<8){msg.textContent="Password must contain at least 8 characters.";return;}
 if(p!==c){msg.textContent="Passwords do not match.";return;}
 if(r.length<8){msg.textContent="Recovery phrase/code must contain at least 8 characters.";return;}
 localStorage.setItem(AUTH_KEY,JSON.stringify({username:u,passwordHash:await hashPassword(p),recoveryHash:await hashPassword(r)}));
 msg.textContent="Administrator created. You can now sign in.";msg.classList.add("show");
 ["setupPass","setupConfirm","setupRecovery"].forEach(id=>document.getElementById(id).value="");
 showLoginState();
}

async function resetWithRecovery(){
 const a=auth(), u=document.getElementById("forgotUser").value.trim(), r=document.getElementById("forgotRecovery").value, np=document.getElementById("forgotNew").value, c=document.getElementById("forgotConfirm").value, msg=document.getElementById("forgotMsg");
 if(!a || u!==a.username || !a.recoveryHash || await hashPassword(r)!==a.recoveryHash){msg.textContent="Username or recovery phrase is incorrect.";return;}
 if(np.length<8){msg.textContent="New password must contain at least 8 characters.";return;}
 if(np!==c){msg.textContent="New passwords do not match.";return;}
 localStorage.setItem(AUTH_KEY,JSON.stringify({username:a.username,passwordHash:await hashPassword(np),recoveryHash:a.recoveryHash}));
 msg.textContent="Password reset successfully. You can now sign in.";msg.classList.add("show");
 ["forgotRecovery","forgotNew","forgotConfirm"].forEach(id=>document.getElementById(id).value="");
 setTimeout(showLoginState,700);
}

function render(){
  document.querySelectorAll("#sideNav button").forEach(b=>b.classList.toggle("active",b.dataset.tab===tab));
  const titles={dashboard:"Dashboard",general:"General Settings",contact:"Contact & Location",home:"Homepage",about:"About / Vision / Mission",
    leadership:"Principal & Director",security:"Admin Security",academics:"Academic Programs",facilities:"Facilities",news:"News & Events",gallery:"Media Gallery",admissions:"Admission Enquiries"};
  document.getElementById("pageTitle").textContent=titles[tab]||"Dashboard";
  const ed=document.getElementById("editor");
  if(tab==="dashboard")ed.innerHTML=dashboard();
  else if(fieldGroups[tab])ed.innerHTML=simpleFields(fieldGroups[tab]);
  else if(tab==="academics")ed.innerHTML=arrayPanel("academics","Academic Programs");
  else if(tab==="facilities")ed.innerHTML=arrayPanel("facilities","Facilities & Campus Life");
  else if(tab==="news")ed.innerHTML=arrayPanel("news","News & Events");
  else if(tab==="gallery")ed.innerHTML=galleryPanel();
  else if(tab==="security")ed.innerHTML=securityPanel();
  else if(tab==="admissions")ed.innerHTML=admissions();
  bind();
  if(tab==="contact") bindContact();
  if(tab==="gallery") bindGallery();
  if(tab==="security") bindSecurity();
}

function bind(){
  document.querySelectorAll("[data-key]").forEach(el=>{
    el.oninput=()=>{
      const k=el.dataset.key;
      if(el.dataset.lang){
        if(!data[k]||typeof data[k]!=="object")data[k]={en:"",ne:""};
        data[k][el.dataset.lang]=el.value;
      }else data[k]=el.value;
    };
  });
  document.querySelectorAll("[data-arr]").forEach(el=>{
    el.oninput=()=>{
      const item=data[el.dataset.arr][Number(el.dataset.index)];
      if(el.dataset.lang){
        if(!item[el.dataset.field]||typeof item[el.dataset.field]!=="object")item[el.dataset.field]={en:"",ne:""};
        item[el.dataset.field][el.dataset.lang]=el.value;
      }else item[el.dataset.field]=el.value;
    };
  });
  document.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>{
    data[b.dataset.remove].splice(Number(b.dataset.index),1); render();
  });
  document.querySelectorAll("[data-add]").forEach(b=>b.onclick=()=>{
    const k=b.dataset.add;
    data[k].push(k==="news"
      ? {date:{en:"New",ne:"नयाँ"},title:{en:"New announcement",ne:"नयाँ सूचना"},text:{en:"Write announcement details here.",ne:"यहाँ सूचनाको विवरण लेख्नुहोस्।"}}
      : {icon:"✨",title:{en:"New item",ne:"नयाँ शीर्षक"},text:{en:"Write a description here.",ne:"यहाँ विवरण लेख्नुहोस्।"}});
    render();
  });
  document.querySelectorAll("[data-upload]").forEach(input=>{
    input.onchange=e=>{
      const f=e.target.files[0]; if(!f)return;
      if(f.size>3*1024*1024){alert("Please choose an image smaller than 3 MB.");e.target.value="";return;}
      const reader=new FileReader();
      reader.onload=()=>{data[e.target.dataset.upload]=reader.result;render();};
      reader.readAsDataURL(f);
    };
  });
  document.querySelectorAll("[data-admission]").forEach(b=>b.onclick=()=>{
    const a=JSON.parse(localStorage.getItem("pca_admissions_v1")||"[]");
    a.splice(Number(b.dataset.admission),1);localStorage.setItem("pca_admissions_v1",JSON.stringify(a));render();
  });
}

document.addEventListener("DOMContentLoaded",()=>{
  data=load();

  // Migrate away from the old demo/default authentication. If the old package
  // still contains the built-in demo account, remove it and force first-run setup.
  try{
    const legacy=JSON.parse(localStorage.getItem(LEGACY_KEY)||"null");
    if(legacy && !localStorage.getItem(AUTH_KEY)){ localStorage.removeItem(LEGACY_KEY); }
  }catch(e){}

  const loginView=document.getElementById("loginView");
  const appView=document.getElementById("appView");
  showLoginState();

  if(sessionStorage.getItem("pca_admin_session")==="1" && hasAdmin()){
    loginView.classList.add("hidden");
    appView.classList.remove("hidden");
    render();
  }

  document.getElementById("setupForm").addEventListener("submit",async e=>{e.preventDefault();await createFirstAdmin();});
  document.getElementById("forgotBtn").addEventListener("click",()=>{document.getElementById("loginBox").classList.add("hidden");document.getElementById("forgotBox").classList.remove("hidden");});
  document.getElementById("backLoginBtn").addEventListener("click",showLoginState);
  document.getElementById("forgotForm").addEventListener("submit",async e=>{e.preventDefault();await resetWithRecovery();});

  document.getElementById("loginForm").addEventListener("submit",async e=>{
    e.preventDefault();
    const u=document.getElementById("username").value.trim();
    const p=document.getElementById("password").value;
    const msg=document.getElementById("loginMsg");
    const a=auth();
    if(a && u===a.username && await hashPassword(p)===a.passwordHash){
      sessionStorage.setItem("pca_admin_session","1");
      loginView.classList.add("hidden");
      appView.classList.remove("hidden");
      msg.textContent="";
      document.getElementById("password").value="";
      render();
    }else{
      msg.textContent="Invalid username or password.";
    }
  });

  document.querySelectorAll("#sideNav button").forEach(b=>b.addEventListener("click",()=>{
    tab=b.dataset.tab;render();
  }));

  document.getElementById("saveBtn").addEventListener("click",()=>{
    if(save()){
      const b=document.getElementById("saveBtn");b.textContent="Saved ✓";
      setTimeout(()=>b.textContent="Save Changes",1300);
    }
  });

  document.getElementById("logout").addEventListener("click",()=>{
    sessionStorage.removeItem("pca_admin_session");location.reload();
  });
});
