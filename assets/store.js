(()=>{
const add=(k,en,ar)=>{translations.en[k]=en;translations.ar[k]=ar};
add('navImpl','Implementation','التنفيذ الكامل');
add('implEyebrow','FULL IMPLEMENTATION','التنفيذ الكامل');
add('implTitle','Not just a module.<br><em>A complete rollout.</em>','مش مجرد موديول،<br><em>ده تنفيذ كامل.</em>');
add('implIntro','Full Odoo implementation is available as a service — from business analysis and configuration to migration, training, go-live and ongoing support.','متاح تنفيذ Odoo بشكل كامل — من تحليل الأعمال والإعداد وترحيل البيانات إلى التدريب والتشغيل والدعم المستمر.');
add('impl1','Gap analysis','تحليل الفجوات');add('impl1d','Compare your process with standard Odoo and decide what stays standard and what needs customization.','نقارن عمليتك بالـ Standard في Odoo ونحدد إيه يفضل Standard وإيه محتاج تخصيص.');
add('impl2','Setup & configuration','التثبيت والإعداد');add('impl2d','Install, configure and adapt the product to your company structure, roles and approvals.','تثبيت وإعداد المنتج حسب هيكل الشركة والصلاحيات والموافقات.');
add('impl3','Data migration','ترحيل البيانات');add('impl3d','Move records from your current system and validate them before go-live.','نقل البيانات من نظامك الحالي ومراجعتها قبل التشغيل.');
add('impl4','Training & support','التدريب والدعم');add('impl4d','Train your users and stay available after go-live until the process runs smoothly.','تدريب المستخدمين والدعم بعد التشغيل لحد ما الدورة تمشي بسلاسة.');
add('implBadge','Full implementation available','متاح بتنفيذ كامل');add('shots','SCREENSHOTS','لقطات الشاشة');add('soon','IN DEVELOPMENT','قيد التطوير');
add('notFound','Product not found.','المنتج غير موجود.');add('allCats','All apps','كل التطبيقات');
const CATS={hr:['HR & Payroll','الموارد البشرية والرواتب'],finance:['Finance','المالية'],operations:['Operations','العمليات'],other:['Other','أخرى']};
const L=()=>document.documentElement.lang==='ar'?1:0;
const E=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const P=(p,f)=>p[f+(L()?'Ar':'En')]||p[f+'En']||'';
const T=k=>translations[L()?'ar':'en'][k];
const cat=c=>(CATS[c]||CATS.other)[L()];
let products=[],active='all';
const art=p=>p.screenshots&&p.screenshots[0]?`<div class="app-art shot-art"><img src="${E(p.screenshots[0])}" alt="" loading="lazy"></div>`:`<div class="app-art ph-art"><span>MA / ${E(cat(p.category).toUpperCase())}</span><b>${E((p.nameEn||'?').split(' ').slice(0,2).map(w=>w[0]).join(''))}</b></div>`;
function card(p){const soon=p.status==='coming';const chips=(p[L()?'featuresAr':'featuresEn']||[]).slice(0,3).map(f=>`<span>${E(f.split('|')[0].trim())}</span>`).join('');
return `<article class="app-card${soon?' coming-card':''}" data-category="${E(p.category)}">${art(p)}<div class="app-card-body"><div class="app-meta"><span class="category-tag">${E(cat(p.category).toUpperCase())}</span>${soon?`<span class="status-coming">${T('soon')}</span>`:`<span class="version-tag">${E(p.version||'')}</span>`}</div><h3>${E(P(p,'name'))}</h3><p>${E(P(p,'desc'))}</p><div class="feature-chips">${chips}</div>${p.implementation?`<div class="impl-badge">✓ ${T('implBadge')}</div>`:''}<a class="card-link" href="product.html?id=${encodeURIComponent(p.id)}"><span>${T('viewDetails')}</span><b>↗</b></a></div></article>`}
function renderHome(){const g=document.getElementById('appGrid');if(!g)return;
const cats=[...new Set(products.map(p=>p.category))];
document.getElementById('filters').innerHTML=`<button class="filter${active==='all'?' active':''}" data-f="all">${T('allCats')}</button>`+cats.map(c=>`<button class="filter${active===c?' active':''}" data-f="${E(c)}">${E(cat(c))}</button>`).join('');
document.querySelectorAll('#filters .filter').forEach(b=>b.onclick=()=>{active=b.dataset.f;renderHome()});
g.innerHTML=products.filter(p=>active==='all'||p.category===active).map(card).join('')}
function renderDetail(){const m=document.getElementById('detail');if(!m)return;
const p=products.find(x=>x.id===new URLSearchParams(location.search).get('id'));
if(!p){m.innerHTML=`<section class="detail-hero"><div class="container"><a class="back-link" href="index.html#apps">${T('backApps')}</a><h1>${T('notFound')}</h1></div></section>`;return}
document.title=P(p,'name')+' | MA Odoo Solutions';
const feats=(p[L()?'featuresAr':'featuresEn']||[]).map((f,i)=>{const[a,...b]=f.split('|');return `<article><span class="feature-number">${String(i+1).padStart(2,'0')}</span><h3>${E(a.trim())}</h3><p>${E(b.join('|').trim())}</p></article>`}).join('');
const shots=(p.screenshots||[]);
m.innerHTML=`<section class="detail-hero"><div class="container"><a class="back-link" href="index.html#apps">${T('backApps')}</a><div class="detail-layout"><div><div class="eyebrow dark"><span class="eyebrow-line"></span><span>${E(cat(p.category).toUpperCase())} · ${E((p.version||'')+' '+(p.edition||'')).toUpperCase()}</span></div><h1>${E(P(p,'name'))}</h1><p class="detail-lead">${E(P(p,'desc'))}</p><div class="detail-actions"><a class="button button-primary" href="index.html#contact">${T('requestDemo')} <span>↗</span></a></div><div class="detail-tags">${p.implementation?`<span>✓ ${T('implBadge')}</span>`:''}${p.version?`<span>${E(p.version)}</span>`:''}${p.edition?`<span>${E(p.edition)}</span>`:''}</div></div><div class="detail-visual ${shots[0]?'has-shot':'ph-art'}">${shots[0]?`<img src="${E(shots[0])}" alt="">`:`<b>${E((p.nameEn||'?').split(' ').slice(0,2).map(w=>w[0]).join(''))}</b>`}</div></div></div></section>
${feats?`<section class="section detail-content" id="features"><div class="container"><div class="feature-grid">${feats}</div></div></section>`:''}
${shots.length?`<section class="section detail-content gallery-section"><div class="container"><div class="eyebrow dark"><span class="eyebrow-line"></span><span>${T('shots')}</span></div><div class="gallery">${shots.map(s=>`<a href="${E(s)}" class="shot"><img src="${E(s)}" alt="" loading="lazy"></a>`).join('')}</div></div></section>`:''}
<section class="detail-cta"><div class="container"><div><h2>${E(P(p,'name'))}</h2><p>${T('implIntro')}</p></div><a class="button button-primary" href="index.html#contact">${T('requestDemo')} ↗</a></div></section>`;
m.querySelectorAll('.shot').forEach(a=>a.onclick=e=>{e.preventDefault();const o=document.createElement('div');o.className='lightbox';o.innerHTML=`<img src="${a.href}" alt="">`;o.onclick=()=>o.remove();document.body.appendChild(o)})}
const render=()=>{renderHome();renderDetail()};
window.addEventListener('langchange',render);
document.addEventListener('DOMContentLoaded',async()=>{try{products=await(await fetch('data/products.json?v='+Date.now())).json()}catch(e){products=[]}render()});
})();
