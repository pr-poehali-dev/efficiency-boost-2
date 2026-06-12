import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface PriceItem {
  name: string
  price: string
  items: { name: string; price: string }[]
}

interface Review {
  name: string
  text: string
  date: string
  rating: number
}

const catalogItems = [
  {
    name: "Хозблок 3×4 м",
    price: "от 68 000 ₽",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop",
  },
  {
    name: "Хозблок 3×6 м",
    price: "от 92 000 ₽",
    img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=450&fit=crop",
  },
  {
    name: "Беседка 3×3 м",
    price: "от 45 000 ₽",
    img: "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&h=450&fit=crop",
  },
  {
    name: "Беседка 4×4 м с барбекю",
    price: "от 78 000 ₽",
    img: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=450&fit=crop",
  },
  {
    name: "Терраса открытая",
    price: "от 55 000 ₽",
    img: "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&h=450&fit=crop",
  },
  {
    name: "Терраса закрытая",
    price: "от 85 000 ₽",
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=450&fit=crop",
  },
  {
    name: "Стол из слэба дуба",
    price: "от 38 000 ₽",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=450&fit=crop",
  },
  {
    name: "Скамья из слэба вяза",
    price: "от 18 000 ₽",
    img: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=450&fit=crop",
  },
  {
    name: "Навес из бруса",
    price: "от 62 000 ₽",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=450&fit=crop",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1588880331179-bc9b93a8cb5e?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=600&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
]

const priceData: PriceItem[] = [
  {
    name: "Хозблоки",
    price: "от 68 000 ₽",
    items: [
      { name: "Хозблок 3×4 м, хвоя, без отделки", price: "68 000 ₽" },
      { name: "Хозблок 3×4 м, с покраской", price: "76 000 ₽" },
      { name: "Хозблок 3×6 м, хвоя, без отделки", price: "92 000 ₽" },
      { name: "Хозблок 3×6 м, с покраской", price: "104 000 ₽" },
      { name: "Хозблок 4×6 м, усиленный каркас", price: "128 000 ₽" },
    ],
  },
  {
    name: "Беседки",
    price: "от 45 000 ₽",
    items: [
      { name: "Беседка 3×3 м, открытая", price: "45 000 ₽" },
      { name: "Беседка 4×4 м, открытая", price: "62 000 ₽" },
      { name: "Беседка 4×4 м с барбекю-зоной", price: "78 000 ₽" },
      { name: "Беседка 5×5 м, закрытая", price: "115 000 ₽" },
    ],
  },
  {
    name: "Террасы",
    price: "от 55 000 ₽",
    items: [
      { name: "Терраса открытая, настил 20 м²", price: "55 000 ₽" },
      { name: "Терраса с перилами, 20 м²", price: "68 000 ₽" },
      { name: "Терраса закрытая (навес), 20 м²", price: "85 000 ₽" },
      { name: "Терраса с остеклением, 20 м²", price: "135 000 ₽" },
    ],
  },
  {
    name: "Мебель из слэбов",
    price: "от 18 000 ₽",
    items: [
      { name: "Скамья из слэба вяза", price: "18 000 ₽" },
      { name: "Стол из слэба дуба (160 см)", price: "38 000 ₽" },
      { name: "Обеденный стол из слэба дуба (200 см)", price: "58 000 ₽" },
      { name: "Консольный стол из слэба вяза", price: "28 000 ₽" },
      { name: "Барный стол из слэба дуба", price: "45 000 ₽" },
    ],
  },
]

const reviews: Review[] = [
  {
    name: "Андрей Михайлов",
    text: "Заказывал хозблок 3×6. Сделали быстро, качество сруба отличное, хвоя сухая. Бригада аккуратная, мусор убрали. Буду брать беседку следующей весной.",
    date: "Март 2024",
    rating: 5,
  },
  {
    name: "Светлана К.",
    text: "Стол из слэба дуба — просто произведение искусства. Живая текстура, кромки сохранены, покрытие масло-воском. Все гости в восторге. Цена честная.",
    date: "Январь 2024",
    rating: 5,
  },
  {
    name: "Дмитрий Воронов",
    text: "Беседка 4×4 с барбекю-зоной. Проект согласовали за 2 дня, смонтировали за 3. Отдельное спасибо за терпение с доработками по месту.",
    date: "Август 2023",
    rating: 5,
  },
  {
    name: "Ирина Белова",
    text: "Терраса 25 м² с перилами и лестницей. Дерево ровное, без сучков, покрашено в 2 слоя. Соседи уже спросили контакты.",
    date: "Июнь 2023",
    rating: 4,
  },
]

/* ─── Цвета ─── */
const C = {
  bg: "#F5F5F5",
  dark: "#111111",
  woodMid: "#A0713A",
  woodLight: "#D4A96A",
  woodDark: "#6B4423",
  pine: "#3D6B35",
  cream: "#FFFFFF",
  cta: "#C8501A",
  ctaHover: "#A83E11",
  shadow: "0 4px 16px rgba(0,0,0,0.18)",
  shadowHover: "0 10px 32px rgba(0,0,0,0.28)",
}

/* ─── Общие стили кнопки CTA ─── */
const ctaStyle: React.CSSProperties = {
  backgroundColor: C.cta,
  border: "none",
  borderRadius: 14,
  fontWeight: 700,
  letterSpacing: "0.01em",
}

const Index = () => {
  const [openPrice, setOpenPrice] = useState<number | null>(null)
  const [selectedService, setSelectedService] = useState("")
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "" })
  const [formSent, setFormSent] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: C.bg, color: C.dark }}>

      {/* ══════════════════ HEADER ══════════════════ */}
      <header style={{ backgroundColor: C.dark }} className="sticky top-0 z-50" >
        <div
          className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between gap-4"
          style={{ boxShadow: "0 2px 20px rgba(0,0,0,0.35)" }}
        >
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: C.woodMid, borderRadius: 12 }}>
              <Icon name="TreePine" size={22} className="text-white" />
            </div>
            <div>
              <div className="font-extrabold text-white text-base leading-tight" style={{ fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.01em" }}>
                ДревоМастер
              </div>
              <div className="text-xs" style={{ color: C.woodLight }}>производство с 2015 г.</div>
            </div>
          </div>

          <a href="tel:+79001234567" className="hidden md:flex items-center gap-2 text-white font-semibold text-base hover:opacity-75 transition-opacity">
            <Icon name="Phone" size={16} style={{ color: C.woodLight }} />
            +7 (900) 123-45-67
          </a>

          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-white hover:opacity-80 transition-opacity" style={{ backgroundColor: "#00AAFF", borderRadius: 10 }}>
              <Icon name="ShoppingBag" size={14} /><span className="hidden sm:inline">Avito</span>
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#25D366", borderRadius: 10 }}>
              <Icon name="MessageCircle" size={16} className="text-white" />
            </a>
            <a href="#" className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity" style={{ backgroundColor: "#229ED9", borderRadius: 10 }}>
              <Icon name="Send" size={16} className="text-white" />
            </a>
            <a href="tel:+79001234567" className="md:hidden w-9 h-9 flex items-center justify-center" style={{ backgroundColor: C.woodMid, borderRadius: 10 }}>
              <Icon name="Phone" size={16} className="text-white" />
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&h=900&fit=crop)" }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(130deg, rgba(44,31,15,0.85) 35%, rgba(61,107,53,0.45) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 w-full">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold mb-7"
              style={{ backgroundColor: "rgba(212,169,106,0.18)", color: C.woodLight, border: "1px solid rgba(212,169,106,0.35)", borderRadius: 30 }}
            >
              <Icon name="MapPin" size={13} />
              Работаем по всей России · доставка включена
            </div>

            <h1
              className="font-black text-white mb-6 leading-[1.08]"
              style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(2.4rem, 6vw, 4.2rem)", letterSpacing: "-0.03em" }}
            >
              Хозблоки, беседки<br />
              и мебель из слэбов —<br />
              <span style={{ color: C.woodLight }}>собственное производство</span>
            </h1>

            <p className="text-lg mb-9 leading-relaxed" style={{ color: "rgba(255,255,255,0.82)", maxWidth: 500 }}>
              Изготавливаем из хвои и слэбов дуба&nbsp;/&nbsp;вяза. Гарантия 3 года. Монтаж под ключ за 3–7 дней.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#calc">
                <Button size="lg" className="text-white font-bold px-8 py-6 text-base w-full sm:w-auto" style={{ ...ctaStyle, boxShadow: "0 4px 20px rgba(200,80,26,0.45)" }}>
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </a>
              <a href="#catalog">
                <Button size="lg" variant="outline" className="px-8 py-6 text-base w-full sm:w-auto font-semibold" style={{ borderColor: "rgba(255,255,255,0.4)", color: "#fff", backgroundColor: "rgba(255,255,255,0.07)", borderRadius: 14 }}>
                  Смотреть каталог
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { num: "9 лет", label: "на рынке" },
                { num: "1 200+", label: "построенных объектов" },
                { num: "3 года", label: "гарантия" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black" style={{ color: C.woodLight, fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.03em" }}>{s.num}</div>
                  <div className="text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ О КОМПАНИИ ══════════════════ */}
      <section className="py-20 px-5" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              {/* label hidden */}
              <h2
                className="font-black mb-5 leading-[1.1]"
                style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.9rem)", letterSpacing: "-0.03em", color: C.dark }}
              >
                Делаем из дерева —<br />
                <span style={{ color: C.cta }}>честно и надёжно</span>
              </h2>
              <p className="mb-4 leading-relaxed" style={{ color: "#222" }}>
                Работаем с 2015 года. Собственный цех в Подмосковье, свой парк станков, штатные мастера без субподряда. Используем камерную сушку хвои и ручной подбор слэбов дуба и вяза из Центральной России.
              </p>
              <p className="leading-relaxed" style={{ color: "#222" }}>
                Каждый заказ — от эскиза до монтажа. Без посредников. Цена, которую вы видите в каталоге — окончательная.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "TreePine", title: "Хвоя камерной сушки", desc: "Сухое дерево без трещин и смоловыделения" },
                { icon: "Layers", title: "Слэбы дуба и вяза", desc: "Натуральная текстура, живая кромка, масло-воск" },
                { icon: "Hammer", title: "Свой цех", desc: "Полный цикл производства — без субподряда" },
                { icon: "ShieldCheck", title: "Гарантия 3 года", desc: "На конструкцию и покрытие" },
              ].map((f) => (
                <div key={f.title} className="p-5" style={{ backgroundColor: C.cream, border: "1px solid rgba(160,113,58,0.18)", borderRadius: 20, boxShadow: C.shadow }}>
                  <div className="w-10 h-10 flex items-center justify-center mb-3" style={{ backgroundColor: C.woodMid, borderRadius: 12 }}>
                    <Icon name={f.icon} fallback="CheckCircle" size={20} className="text-white" />
                  </div>
                  <div className="font-bold text-sm mb-1" style={{ color: C.dark }}>{f.title}</div>
                  <div className="text-xs font-medium" style={{ color: "#444" }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ КАТАЛОГ ══════════════════ */}
      <section id="catalog" className="py-20 px-5" style={{ backgroundColor: "#EFEFEF" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            {/* label hidden */}
            <h2 className="font-black" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", color: C.dark }}>Каталог</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {catalogItems.map((item) => (
              <div
                key={item.name}
                className="group"
                style={{ backgroundColor: "#fff", borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 10px rgba(0,0,0,0.10)", transition: "box-shadow 0.25s, transform 0.25s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.18)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)" }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.10)"; (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)" }}
              >
                {/* Photo — главный акцент */}
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>

                {/* Info */}
                <div className="px-5 py-4">
                  <div className="font-bold text-base mb-1" style={{ color: C.dark }}>{item.name}</div>
                  <div className="font-black text-lg mb-4" style={{ color: C.cta }}>{item.price}</div>
                  <a
                    href="#calc"
                    className="inline-flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-60"
                    style={{ color: C.woodDark, fontSize: 14, borderBottom: `1.5px solid ${C.woodDark}`, paddingBottom: 2 }}
                  >
                    Подробнее
                    <Icon name="ArrowRight" size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ФОРМА ══════════════════ */}
      <section id="calc" className="py-20 px-5" style={{ backgroundColor: C.dark }}>
        <div style={{ maxWidth: "46rem" }} className="mx-auto">
          <div className="text-center mb-10">
            <div className="text-xs font-bold uppercase tracking-[0.18em] mb-3" style={{ color: C.woodLight }}>Обратная связь</div>
            <h2 className="font-black text-white mb-3" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.03em" }}>
              Рассчитать стоимость
            </h2>
            <p style={{ color: "rgba(255,255,255,0.55)" }}>Выберите категорию — перезвоним в течение 30 минут</p>
          </div>

          {formSent ? (
            <div className="p-10 text-center" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24 }}>
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: C.pine, borderRadius: "50%" }}>
                <Icon name="CheckCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Заявка принята!</h3>
              <p style={{ color: "rgba(255,255,255,0.5)" }}>Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-5 p-8"
              style={{ backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24 }}
            >
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>Что вас интересует?</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm font-medium outline-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12, color: selectedService ? "#fff" : "rgba(255,255,255,0.4)" }}
                >
                  <option value="" disabled>Выберите категорию</option>
                  <option value="hozblok">Хозблок</option>
                  <option value="besedka">Беседка</option>
                  <option value="terrasa">Терраса</option>
                  <option value="mebel">Мебель из слэбов</option>
                  <option value="complex">Комплексный заказ</option>
                </select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>Ваше имя</label>
                  <input type="text" placeholder="Иван" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12 }} />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>Телефон</label>
                  <input type="tel" placeholder="+7 (___) ___-__-__" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12 }} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: "rgba(255,255,255,0.75)" }}>Комментарий</label>
                <textarea rows={3} placeholder="Размер, материал, сроки..." value={formData.comment} onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 12 }} />
              </div>

              <Button type="submit" size="lg" className="w-full text-white font-bold py-4 text-base" style={{ ...ctaStyle, boxShadow: "0 4px 20px rgba(200,80,26,0.4)" }}>
                Отправить заявку
              </Button>
              <p className="text-center text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════ ГАЛЕРЕЯ ══════════════════ */}
      <section style={{ backgroundColor: "#EFEFEF" }}>
        <div className="max-w-7xl mx-auto px-5 pt-20 pb-10">
          {/* label hidden */}
          <h2 className="font-black mb-0" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", color: C.dark }}>
            Наши работы
          </h2>
        </div>

        {/* Лента на всю ширину — 2 ряда по 4, без отступов */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridTemplateRows: "repeat(2, 1fr)" }}>
          {galleryImages.map((src, i) => (
            <div key={i} className="overflow-hidden group" style={{ aspectRatio: "1 / 1" }}>
              <img
                src={src}
                alt={`Работа ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
              />
            </div>
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-5 pb-20 pt-9 text-center">
          <a href="#">
            <Button variant="outline" size="lg" className="font-bold px-8" style={{ borderColor: C.woodMid, color: C.woodDark, borderRadius: 14 }}>
              <Icon name="ExternalLink" size={16} className="mr-2" />
              Все работы на Avito
            </Button>
          </a>
        </div>
      </section>

      {/* ══════════════════ ПРАЙС-ЛИСТ ══════════════════ */}
      <section className="py-20 px-5" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            {/* label hidden */}
            <h2 className="font-black mb-2" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", color: C.dark }}>
              Прайс-лист
            </h2>
            <p className="text-sm font-medium" style={{ color: "#444" }}>Цены окончательные. Доставка и монтаж включены по Московской области.</p>
          </div>

          <div className="space-y-3">
            {priceData.map((cat, i) => (
              <div key={cat.name} style={{ border: "1.5px solid #D0D0D0", borderRadius: 18, overflow: "hidden", boxShadow: openPrice === i ? C.shadow : "none", transition: "box-shadow 0.2s" }}>
                <button
                  onClick={() => setOpenPrice(openPrice === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:opacity-95 transition-opacity"
                  style={{ backgroundColor: openPrice === i ? C.woodDark : C.cream }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-black text-base" style={{ fontFamily: "Montserrat, sans-serif", color: openPrice === i ? "#fff" : C.dark }}>
                      {cat.name}
                    </span>
                    <span className="text-sm font-semibold px-2.5 py-0.5" style={{ backgroundColor: openPrice === i ? "rgba(255,255,255,0.15)" : "rgba(200,80,26,0.1)", color: openPrice === i ? C.woodLight : C.cta, borderRadius: 8 }}>
                      {cat.price}
                    </span>
                  </div>
                  <Icon name={openPrice === i ? "ChevronUp" : "ChevronDown"} size={18} style={{ color: openPrice === i ? "#fff" : C.woodMid }} />
                </button>

                {openPrice === i && (
                  <div className="divide-y" style={{ borderColor: "rgba(160,113,58,0.1)" }}>
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between px-6 py-3" style={{ backgroundColor: "#fff" }}>
                        <span className="text-sm font-medium" style={{ color: "#222" }}>{item.name}</span>
                        <span className="font-black text-sm ml-4 shrink-0" style={{ color: C.cta }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ ОТЗЫВЫ ══════════════════ */}
      <section className="py-20 px-5" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              {/* label hidden */}
              <h2 className="font-black" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "clamp(1.9rem, 4vw, 2.8rem)", letterSpacing: "-0.03em", color: C.dark }}>
                Что говорят клиенты
              </h2>
            </div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold hover:opacity-70 transition-opacity shrink-0" style={{ color: "#00AAFF" }}>
              <Icon name="ShoppingBag" size={16} />Все отзывы на Avito
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="p-5 flex flex-col"
                style={{ backgroundColor: "#fff", borderRadius: 20, border: "1.5px solid #E0E0E0", boxShadow: C.shadow }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-sm leading-relaxed flex-1 font-medium" style={{ color: "#222" }}>«{r.text}»</p>
                <div className="flex items-center gap-2 mt-5">
                  <div className="w-8 h-8 flex items-center justify-center text-xs font-black text-white shrink-0" style={{ backgroundColor: C.woodMid, borderRadius: "50%" }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#111" }}>{r.name}</div>
                    <div className="text-xs font-medium" style={{ color: "#777" }}>{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{ backgroundColor: "#1A1108" }} className="pt-14 pb-6 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center" style={{ backgroundColor: C.woodMid, borderRadius: 12 }}>
                  <Icon name="TreePine" size={22} className="text-white" />
                </div>
                <div className="font-extrabold text-white text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>ДревоМастер</div>
              </div>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
                Производство деревянных хозблоков, беседок, террас и мебели из слэбов. Работаем с 2015 года.
              </p>
              <div className="flex gap-2">
                {[
                  { bg: "#00AAFF", icon: "ShoppingBag" },
                  { bg: "#25D366", icon: "MessageCircle" },
                  { bg: "#229ED9", icon: "Send" },
                ].map(s => (
                  <a key={s.icon} href="#" className="w-9 h-9 flex items-center justify-center hover:opacity-75 transition-opacity" style={{ backgroundColor: s.bg, borderRadius: 10 }}>
                    <Icon name={s.icon} fallback="Circle" size={16} className="text-white" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <div className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Каталог</div>
              <ul className="space-y-2">
                {["Хозблоки", "Беседки", "Террасы", "Мебель из слэбов"].map((item) => (
                  <li key={item}>
                    <a href="#catalog" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.45)" }}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="font-bold text-white mb-4 text-xs uppercase tracking-widest">Контакты</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={15} style={{ color: C.woodLight, marginTop: 2 }} />
                  <div>
                    <a href="tel:+79001234567" className="text-sm text-white hover:opacity-75">+7 (900) 123-45-67</a>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>Пн–Сб, 9:00–19:00</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={15} style={{ color: C.woodLight, marginTop: 2 }} />
                  <a href="mailto:info@drevomaster.ru" className="text-sm text-white hover:opacity-75">info@drevomaster.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={15} style={{ color: C.woodLight, marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>Московская обл., Чехов, ул. Производственная, 12</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.25)" }}>
            <span>© 2024 ДревоМастер. Все права защищены.</span>
            <span>ИП Иванов И.И. · ИНН 501234567890 · ОГРНИП 315501234567890</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index