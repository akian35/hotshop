const CONFIG = { brand: "HotShop", telegram: "https://t.me/Megasllerr", currency: "$" };

const PRODUCTS = [
  {id:1,name:"CP",price:35.99,watching:777,desc:"CLICK HERE TO SEE A LIST OF ALL CP",long:"Access to the full CP catalogue, with an organized list of all available content."},
  {id:2,name:"Teens And Pets",price:40.99,watching:914,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:3,name:"Young teens 9-17",price:49.99,watching:751,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:4,name:"Rape",price:55.99,watching:888,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:5,name:"SISTER AND BRO",price:45.99,watching:725,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:6,name:"MOM AND SON",price:50.99,watching:862,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:7,name:"BLACK CP",price:60.50,watching:699,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:8,name:"TEENS JAPANESE 7-17",price:75.99,watching:836,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:9,name:"FULL CO GAY",price:49.49,watching:673,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:10,name:"INCEST FULL",price:24.99,watching:810,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:11,name:"SNAPGOD",price:50.59,watching:647,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:12,name:"DARKZADIE",price:75.99,watching:784,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:13,name:"IVANKA AND BRO",price:45.99,watching:921,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:14,name:"IZZY AND BROTHER",price:50.49,watching:758,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:15,name:"BLACKMAIL",price:34.99,watching:895,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:16,name:"HIGH SCHOOL YOUNG",price:70.99,watching:732,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:17,name:"ANXIOUS PANDA",price:39.99,watching:869,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:18,name:"OMEGLE",price:42.50,watching:706,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:19,name:"MONKEY APP",price:44.99,watching:843,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:20,name:"SAVANNAH",price:47.99,watching:680,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:21,name:"GAY PORN",price:49.99,watching:817,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:22,name:"FATHER AND SON",price:45.99,watching:654,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:23,name:"TEENS LATINA",price:55.99,watching:791,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:24,name:"LIZZY",price:64.99,watching:928,desc:"A digital collection with organized content and regular updates.",long:"Digital collection with content organized in folders and regular updates."},
  {id:25,name:"GROUP VIP",price:79.99,watching:765,desc:"GROUP VIP FULL VIDEO.",long:"Access to the VIP group with the full video."}
];

const METHODS = [
  {key:"PayPal",desc:"Pay securely with PayPal",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>'},
  {key:"Binance",desc:"Pay with Binance",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 3 3 3-3 3-3-3z"/><path d="m6 9 3 3-3 3-3-3z"/><path d="m18 9 3 3-3 3-3-3z"/><path d="m12 15 3 3-3 3-3-3z"/></svg>'},
  {key:"Crypto",desc:"BTC / ETH — pay using cryptocurrency",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M9.5 8.5h3.2a2.2 2.2 0 0 1 0 4.4H9.5zm0 4.4h3.6a2.2 2.2 0 0 1 0 4.4H9.5zM9.5 8.5v8.8M11 7v1.5M11 15.8V17"/></svg>'},
  {key:"Gift Card",desc:"Pay with Gift Card",icon:'<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="8" width="18" height="13" rx="2"/><path d="M3 12h18M12 8v13"/><path d="M12 8S10.5 3 8 4.5 9.5 8 12 8s4.5 0 4-3.5S12 8 12 8"/></svg>'}
];

const BUYERS = ["Chloe Turner","Grace Sullivan","Liam Carter","Sofia Almeida","Mateo Rossi","Hannah Weber","Noah Bennett","Aisha Karim","Lucas Ferreira","Emma Novak","Tiago Sousa","Mila Petrova","Ethan Brooks","Clara Mendes","Omar Haddad","Julia Nowak","Rui Marques","Leah Cohen","André Lopes","Nina Duarte"];
const CITIES = ["New York","Dublin","London","Lisbon","Madrid","Paris","Berlin","Toronto","Manchester","Amsterdam","Porto","Rome","Vienna","Chicago","Brussels","Barcelona","Stockholm","Warsaw","Zurich","Milan"];

const I18N = {
  en:{"nav.home":"Home","nav.products":"Products","nav.contact":"Contact","nav.view":"View Collection","hero.badge":"25 premium drops available now","hero.title":"Premium Digital Content","hero.sub":"Discover our exclusive collection of premium digital products.","trust.secure":"Secure","trust.instant":"Instant Access","trust.premium":"Premium Content","col.title":"Our Products","col.sub":"Choose your premium digital product — all 25 in one place.","col.empty":"No products found.","search":"Search products...","feat.secure.t":"Secure","feat.secure.d":"Secure and private checkout experience.","feat.fast.t":"Fast","feat.fast.d":"Quick access after completing your order.","feat.prem.t":"Premium","feat.prem.d":"High-quality digital products.","feat.mob.t":"Mobile Friendly","feat.mob.d":"Access from any device.","cta.title":"Ready to get started?","cta.sub":"Choose your favorite premium product and contact us to complete your order.","footer.tag":"Premium Digital Products","footer.rights":"All rights reserved.","buy":"Buy Now","playing":"Playing","watching":"watching","premium":"Premium","toast.bought":"bought","toast.verified":"Verified purchase · just now","pay.title":"Choose Your Payment Method","pay.sub":"Select how you would like to pay. Payment is completed with our team on Telegram.","pay.selected":"Payment Method Selected","pay.contact":"Contact us on Telegram to complete your order.","pay.product":"Product","pay.price":"Price","pay.method":"Payment Method","pay.continue":"Continue on Telegram","pay.note":"No payment is processed on this site."},
  pt:{"nav.home":"Início","nav.products":"Produtos","nav.contact":"Contacto","nav.view":"Ver Colecção","hero.badge":"25 novidades premium disponíveis","hero.title":"Conteúdo Digital Premium","hero.sub":"Descobre a nossa colecção exclusiva de produtos digitais premium.","trust.secure":"Seguro","trust.instant":"Acesso Imediato","trust.premium":"Conteúdo Premium","col.title":"Os Nossos Produtos","col.sub":"Escolhe o teu produto digital premium — os 25 num só lugar.","col.empty":"Nenhum produto encontrado.","search":"Pesquisar produtos...","feat.secure.t":"Seguro","feat.secure.d":"Checkout seguro e privado.","feat.fast.t":"Rápido","feat.fast.d":"Acesso imediato após concluíres o pedido.","feat.prem.t":"Premium","feat.prem.d":"Produtos digitais de alta qualidade.","feat.mob.t":"Compatível com Móvel","feat.mob.d":"Acede de qualquer dispositivo.","cta.title":"Pronto para começar?","cta.sub":"Escolhe o teu produto preferido e contacta-nos para concluir o pedido.","footer.tag":"Produtos Digitais Premium","footer.rights":"Todos os direitos reservados.","buy":"Comprar","playing":"A ver","watching":"a ver","premium":"Premium","toast.bought":"comprou","toast.verified":"Compra verificada · agora mesmo","pay.title":"Escolhe o Método de Pagamento","pay.sub":"Selecciona como queres pagar. O pagamento é concluído com a nossa equipa no Telegram.","pay.selected":"Método de Pagamento Seleccionado","pay.contact":"Contacta-nos no Telegram para concluir o pedido.","pay.product":"Produto","pay.price":"Preço","pay.method":"Método de Pagamento","pay.continue":"Continuar no Telegram","pay.note":"Nenhum pagamento é processado neste site."},
  ar:{"nav.home":"الرئيسية","nav.products":"المنتجات","nav.contact":"اتصل بنا","nav.view":"عرض المجموعة","hero.badge":"٢٥ منتجاً مميزاً متاح الآن","hero.title":"محتوى رقمي مميز","hero.sub":"اكتشف مجموعتنا الحصرية من المنتجات الرقمية المميزة.","trust.secure":"آمن","trust.instant":"وصول فوري","trust.premium":"محتوى مميز","col.title":"منتجاتنا","col.sub":"اختر منتجك الرقمي المميز — كل الـ٢٥ في مكان واحد.","col.empty":"لا توجد منتجات.","search":"ابحث عن المنتجات...","feat.secure.t":"آمن","feat.secure.d":"تجربة شراء آمنة وخاصة.","feat.fast.t":"سريع","feat.fast.d":"وصول سريع بعد إتمام طلبك.","feat.prem.t":"مميز","feat.prem.d":"منتجات رقمية عالية الجودة.","feat.mob.t":"متوافق مع الجوال","feat.mob.d":"الوصول من أي جهاز.","cta.title":"مستعد للبدء؟","cta.sub":"اختر منتجك المفضل وتواصل معنا لإتمام الطلب.","footer.tag":"منتجات رقمية مميزة","footer.rights":"جميع الحقوق محفوظة.","buy":"اشترِ الآن","playing":"يعرض","watching":"يشاهدون","premium":"مميز","toast.bought":"اشترى","toast.verified":"عملية شراء موثقة · الآن","pay.title":"اختر طريقة الدفع","pay.sub":"اختر كيف تريد الدفع. يتم إتمام الدفع مع فريقنا على تيليجرام.","pay.selected":"تم اختيار طريقة الدفع","pay.contact":"تواصل معنا على تيليجرام لإتمام الطلب.","pay.product":"المنتج","pay.price":"السعر","pay.method":"طريقة الدفع","pay.continue":"المتابعة على تيليجرام","pay.note":"لا تتم أي عملية دفع على هذا الموقع."}
};

const grid = document.getElementById("grid");
const empty = document.getElementById("empty");
const overlay = document.getElementById("overlay");
const ovVideo = document.getElementById("ovVideo");
const ovTitle = document.getElementById("ovTitle");
const ovDesc = document.getElementById("ovDesc");
const ovPrice = document.getElementById("ovPrice");
const ovBuy = document.getElementById("ovBuy");
const pay = document.getElementById("pay");
const payMethods = document.getElementById("payMethods");
const paySummary = document.getElementById("paySummary");
const payProduct = document.getElementById("payProduct");
const payPrice = document.getElementById("payPrice");
const payMethod = document.getElementById("payMethod");
const payContinue = document.getElementById("payContinue");
const search = document.getElementById("search");
const langSel = document.getElementById("lang");
const toast = document.getElementById("toast");
const toastName = document.getElementById("toastName");
const toastProduct = document.getElementById("toastProduct");

// idioma fixo em inglês no arranque
let lang = "en";
let lastFocus = null;
let currentProduct = null;
let selectedMethod = null;
let toastTimer = null;

const t = k => (I18N[lang] || I18N.en)[k] || k;
const money = v => CONFIG.currency + v.toFixed(2);

// mensagem do Telegram em INGLÊS
const orderMessage = (p, m) =>
  "Hi! I want to buy: " + p.name + " (" + money(p.price) + ") — payment method: " + m;

function applyLang(l){
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  langSel.value = l;
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-ph]").forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  buildMethods();
  if (selectedMethod && currentProduct) {
    payMethod.textContent = selectedMethod.key;
    payContinue.href = CONFIG.telegram + "?text=" + encodeURIComponent(orderMessage(currentProduct, selectedMethod.key));
  }
  render();
}

function buildMethods(){
  payMethods.replaceChildren(...METHODS.map(m => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "pay__method";
    b.dataset.key = m.key;
    b.innerHTML =
      '<span class="pay__method-icon">' + m.icon + '</span>' +
      '<span><span class="pay__method-label">' + m.key + '</span>' +
      '<span class="pay__method-desc">' + m.desc + '</span></span>' +
      '<svg class="pay__method-check" viewBox="0 0 24 24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>';
    b.addEventListener("click", () => selectMethod(m));
    return b;
  }));
}

function selectMethod(m){
  selectedMethod = m;
  payMethods.querySelectorAll(".pay__method").forEach(b => b.classList.toggle("is-active", b.dataset.key === m.key));
  paySummary.hidden = false;
  payMethod.textContent = m.key;
  payContinue.href = CONFIG.telegram + "?text=" + encodeURIComponent(orderMessage(currentProduct, m.key));
  paySummary.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function makeCard(p){
  const art = document.createElement("article");
  art.className = "card";
  art.innerHTML =
    '<button class="card__media" type="button" aria-label="' + p.name + '">' +
      '<video src="videos/p' + p.id + '.mp4" autoplay muted loop playsinline preload="auto"></video>' +
      '<span class="badge">' + t("premium") + '</span>' +
      '<span class="chip chip--l"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"/></svg>' + t("playing") + '<span class="dot"><span></span><span></span></span></span>' +
      '<span class="chip chip--r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg><span data-w="' + p.watching + '">' + p.watching + '</span> ' + t("watching") + '</span>' +
    '</button>' +
    '<div class="card__body">' +
      '<button class="card__title" type="button">' + p.name + '</button>' +
      '<p class="card__desc">' + p.desc + '</p>' +
      '<div class="card__foot">' +
        '<span class="price">' + money(p.price) + '</span>' +
        '<button class="btn btn--primary btn--buy" type="button">' + t("buy") + '</button>' +
      '</div>' +
    '</div>';

  art.querySelector(".card__media").addEventListener("click", () => openOverlay(p));
  art.querySelector(".card__title").addEventListener("click", () => openOverlay(p));
  art.querySelector(".btn--buy").addEventListener("click", () => openPay(p));

  const v = art.querySelector("video");
  v.muted = true;
  v.play().catch(() => {});

  return art;
}

function render(){
  const q = (search.value || "").toLowerCase().trim();
  const list = PRODUCTS.filter(p =>
    !q || p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
  );
  grid.replaceChildren(...list.map(makeCard));
  empty.hidden = list.length > 0;
}

function openOverlay(p){
  lastFocus = document.activeElement;
  ovTitle.textContent = p.name;
  ovDesc.textContent = p.long;
  ovPrice.textContent = money(p.price);
  ovBuy.dataset.id = p.id;
  ovVideo.muted = false;
  ovVideo.src = "videos/p" + p.id + ".mp4";
  overlay.hidden = false;
  document.body.style.overflow = "hidden";
  const play = ovVideo.play();
  if (play) play.catch(() => { ovVideo.muted = true; ovVideo.play().catch(() => {}); });
  ovVideo.focus();
}

function closeOverlay(){
  overlay.hidden = true;
  ovVideo.pause();
  ovVideo.removeAttribute("src");
  ovVideo.load();
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

function openPay(p){
  currentProduct = p;
  selectedMethod = null;
  payProduct.textContent = p.name;
  payPrice.textContent = money(p.price);
  payMethod.textContent = "—";
  payContinue.removeAttribute("href");
  paySummary.hidden = true;
  payMethods.querySelectorAll(".pay__method").forEach(b => b.classList.remove("is-active"));
  if (!overlay.hidden) closeOverlay();
  pay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closePay(){
  pay.hidden = true;
  document.body.style.overflow = "";
}

ovBuy.addEventListener("click", () => {
  const id = Number(ovBuy.dataset.id);
  const p = PRODUCTS.find(x => x.id === id);
  if (p) openPay(p);
});

overlay.addEventListener("click", e => { if (e.target.hasAttribute("data-close")) closeOverlay(); });
pay.addEventListener("click", e => { if (e.target.hasAttribute("data-pclose")) closePay(); });
document.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;
  if (!pay.hidden) closePay();
  else if (!overlay.hidden) closeOverlay();
});

search.addEventListener("input", render);
langSel.addEventListener("change", e => applyLang(e.target.value));

document.getElementById("burger").addEventListener("click", e => {
  const nav = document.getElementById("mobileNav");
  const open = nav.hidden;
  nav.hidden = !open;
  e.currentTarget.setAttribute("aria-expanded", String(open));
});

/* toast com ritmo natural: 0,6s a entrar -> 4s visível -> 0,6s a sair -> 1,8s de pausa */
const TOAST_IN = 600;
const TOAST_HOLD = 4000;
const TOAST_OUT = 600;
const TOAST_GAP = 1800;

function showToast(){
  const name = BUYERS[Math.floor(Math.random() * BUYERS.length)];
  const city = CITIES[Math.floor(Math.random() * CITIES.length)];
  const prod = PRODUCTS[Math.floor(Math.random() * PRODUCTS.length)].name;
  toastName.textContent = name;
  toastProduct.textContent = prod + " · " + city;
  toast.hidden = false;
  requestAnimationFrame(() => requestAnimationFrame(() => toast.classList.add("is-in")));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-in");
    toastTimer = setTimeout(() => {
      toast.hidden = true;
      toastTimer = setTimeout(showToast, TOAST_GAP);
    }, TOAST_OUT);
  }, TOAST_HOLD);
}

setInterval(() => {
  document.querySelectorAll("[data-w]").forEach(el => {
    const base = Number(el.dataset.w);
    el.textContent = Math.max(1, base + Math.floor(Math.random() * 7) - 3);
  });
}, 5000);

document.getElementById("year").textContent = new Date().getFullYear();

(async () => {
  try {
    const r = await fetch("config.json", { cache: "no-store" });
    Object.assign(CONFIG, await r.json());
  } catch (e) {}
  document.querySelectorAll(".contact").forEach(a => { a.href = CONFIG.telegram; });
  applyLang(lang);
  setTimeout(showToast, 1500);
})();