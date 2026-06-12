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
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    tag: "Хит продаж",
  },
  {
    name: "Хозблок 3×6 м",
    price: "от 92 000 ₽",
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&h=300&fit=crop",
    tag: "",
  },
  {
    name: "Беседка 3×3 м",
    price: "от 45 000 ₽",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    tag: "Популярное",
  },
  {
    name: "Беседка 4×4 м с барбекю",
    price: "от 78 000 ₽",
    img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    tag: "",
  },
  {
    name: "Терраса открытая",
    price: "от 55 000 ₽",
    img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    tag: "",
  },
  {
    name: "Терраса закрытая",
    price: "от 85 000 ₽",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop",
    tag: "",
  },
  {
    name: "Стол из слэба дуба",
    price: "от 38 000 ₽",
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop",
    tag: "Авторская работа",
  },
  {
    name: "Скамья из слэба вяза",
    price: "от 18 000 ₽",
    img: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop",
    tag: "",
  },
]

const galleryImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop",
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
    <div className="min-h-screen" style={{ backgroundColor: "var(--page-bg)", color: "#2C1F0F" }}>
      {/* ══════════════════ HEADER ══════════════════ */}
      <header style={{ backgroundColor: "#2C1F0F" }} className="sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "var(--wood-mid)" }}
            >
              <Icon name="TreePine" size={22} className="text-white" />
            </div>
            <div>
              <div className="font-bold text-white text-sm leading-tight" style={{ fontFamily: "Montserrat, sans-serif" }}>
                ДревоМастер
              </div>
              <div className="text-xs" style={{ color: "var(--wood-light)" }}>
                производство с 2015 г.
              </div>
            </div>
          </div>

          {/* Phone */}
          <a
            href="tel:+79001234567"
            className="hidden md:flex items-center gap-2 text-white font-semibold text-base hover:opacity-80 transition-opacity"
          >
            <Icon name="Phone" size={16} style={{ color: "var(--wood-light)" }} />
            +7 (900) 123-45-67
          </a>

          {/* Social links */}
          <div className="flex items-center gap-2">
            <a
              href="#"
              title="Avito"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#00AAFF", color: "#fff" }}
            >
              <Icon name="ShoppingBag" size={14} />
              <span className="hidden sm:inline">Avito</span>
            </a>
            <a
              href="#"
              title="WhatsApp"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#25D366" }}
            >
              <Icon name="MessageCircle" size={16} className="text-white" />
            </a>
            <a
              href="#"
              title="Telegram"
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-opacity hover:opacity-80"
              style={{ backgroundColor: "#229ED9" }}
            >
              <Icon name="Send" size={16} className="text-white" />
            </a>
            <a href="tel:+79001234567" className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center" style={{ backgroundColor: "var(--wood-mid)" }}>
              <Icon name="Phone" size={16} className="text-white" />
            </a>
          </div>
        </div>
      </header>

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="relative min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1448630360428-65456885c650?w=1600&h=900&fit=crop)",
          }}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(44,31,15,0.82) 40%, rgba(61,107,53,0.45) 100%)" }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium mb-6"
              style={{ backgroundColor: "rgba(212,169,106,0.2)", color: "var(--wood-light)", border: "1px solid rgba(212,169,106,0.4)" }}
            >
              <Icon name="MapPin" size={14} />
              Работаем по всей России · доставка включена
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Хозблоки, беседки<br />
              и мебель из слэбов —<br />
              <span style={{ color: "var(--wood-light)" }}>собственное производство</span>
            </h1>

            <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl">
              Изготавливаем из хвои и слэбов дуба/вяза. Гарантия 3 года. Монтаж под ключ за 3–7 дней.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#calc">
                <Button
                  size="lg"
                  className="text-white font-bold px-8 py-6 text-base rounded-lg shadow-lg w-full sm:w-auto"
                  style={{ backgroundColor: "var(--wood-mid)", border: "none" }}
                >
                  <Icon name="Calculator" size={18} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </a>
              <a href="#catalog">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base rounded-lg w-full sm:w-auto font-semibold"
                  style={{ borderColor: "rgba(255,255,255,0.5)", color: "#fff", backgroundColor: "rgba(255,255,255,0.08)" }}
                >
                  Смотреть каталог
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-10">
              {[
                { num: "9 лет", label: "на рынке" },
                { num: "1 200+", label: "построенных объектов" },
                { num: "3 года", label: "гарантия" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-bold" style={{ color: "var(--wood-light)", fontFamily: "Montserrat, sans-serif" }}>{s.num}</div>
                  <div className="text-sm text-white/60">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ О КОМПАНИИ ══════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--pine)" }}>
                О компании
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5" style={{ color: "#2C1F0F" }}>
                Делаем из дерева —<br />честно и надёжно
              </h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Работаем с 2015 года. Собственный цех в Подмосковье, свой парк станков, штатные мастера без субподряда. Используем камерную сушку хвои и ручной подбор слэбов дуба и вяза из Центральной России.
              </p>
              <p className="text-gray-600 leading-relaxed">
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
                <div
                  key={f.title}
                  className="rounded-xl p-5"
                  style={{ backgroundColor: "var(--cream)", border: "1px solid rgba(160,113,58,0.2)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: "var(--wood-mid)" }}
                  >
                    <Icon name={f.icon} fallback="CheckCircle" size={20} className="text-white" />
                  </div>
                  <div className="font-semibold text-sm mb-1" style={{ color: "#2C1F0F" }}>{f.title}</div>
                  <div className="text-xs text-gray-500">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ КАТАЛОГ ══════════════════ */}
      <section id="catalog" className="py-16 px-4" style={{ backgroundColor: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pine)" }}>
              Наша продукция
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#2C1F0F" }}>Каталог</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {catalogItems.map((item) => (
              <div
                key={item.name}
                className="rounded-xl overflow-hidden group"
                style={{ backgroundColor: "#fff", border: "1px solid rgba(160,113,58,0.2)", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
              >
                <div className="relative overflow-hidden" style={{ height: 160 }}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {item.tag && (
                    <div
                      className="absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold"
                      style={{ backgroundColor: "var(--wood-mid)", color: "#fff" }}
                    >
                      {item.tag}
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="font-semibold text-sm mb-1" style={{ color: "#2C1F0F" }}>{item.name}</div>
                  <div className="font-bold mb-3" style={{ color: "var(--wood-dark)" }}>{item.price}</div>
                  <a href="#calc">
                    <Button
                      size="sm"
                      className="w-full text-white text-xs font-semibold"
                      style={{ backgroundColor: "var(--pine)", border: "none" }}
                    >
                      Заказать
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ КАЛЬКУЛЯТОР / ФОРМА ══════════════════ */}
      <section id="calc" className="py-16 px-4" style={{ backgroundColor: "#2C1F0F" }}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--wood-light)" }}>
              Обратная связь
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Рассчитать стоимость</h2>
            <p className="text-white/60">Выберите категорию — мы перезвоним в течение 30 минут</p>
          </div>

          {formSent ? (
            <div
              className="rounded-2xl p-10 text-center"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: "var(--pine)" }}
              >
                <Icon name="CheckCircle" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Заявка принята!</h3>
              <p className="text-white/60">Наш менеджер свяжется с вами в ближайшее время.</p>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="rounded-2xl p-8 space-y-5"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              {/* Service Select */}
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Что вас интересует?</label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  required
                  className="w-full rounded-lg px-4 py-3 text-sm font-medium outline-none"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: selectedService ? "#fff" : "rgba(255,255,255,0.45)",
                  }}
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
                  <label className="block text-sm font-medium text-white/80 mb-2">Ваше имя</label>
                  <input
                    type="text"
                    placeholder="Иван"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none"
                    style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white/80 mb-2">Комментарий (необязательно)</label>
                <textarea
                  rows={3}
                  placeholder="Размер, материал, сроки..."
                  value={formData.comment}
                  onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                  className="w-full rounded-lg px-4 py-3 text-sm text-white placeholder-white/30 outline-none resize-none"
                  style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-white font-bold py-4 text-base rounded-lg"
                style={{ backgroundColor: "var(--wood-mid)", border: "none" }}
              >
                Отправить заявку
              </Button>

              <p className="text-center text-xs text-white/30">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных</p>
            </form>
          )}
        </div>
      </section>

      {/* ══════════════════ ГАЛЕРЕЯ ══════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pine)" }}>
              Портфолио
            </div>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#2C1F0F" }}>Наши работы</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {galleryImages.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden group" style={{ height: 200 }}>
                <img
                  src={src}
                  alt={`Работа ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="#">
              <Button
                variant="outline"
                size="lg"
                className="font-semibold px-8"
                style={{ borderColor: "var(--wood-mid)", color: "var(--wood-dark)" }}
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Все работы на Avito
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ══════════════════ ПРАЙС-ЛИСТ ══════════════════ */}
      <section className="py-16 px-4" style={{ backgroundColor: "#fff" }}>
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pine)" }}>
              Цены
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "#2C1F0F" }}>Прайс-лист</h2>
            <p className="text-gray-500 text-sm">Цены окончательные. Доставка и монтаж — включены в стоимость по Московской области.</p>
          </div>

          <div className="space-y-3">
            {priceData.map((cat, i) => (
              <div
                key={cat.name}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid rgba(160,113,58,0.25)" }}
              >
                <button
                  onClick={() => setOpenPrice(openPrice === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: openPrice === i ? "var(--wood-dark)" : "var(--cream)" }}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-base" style={{ color: openPrice === i ? "#fff" : "#2C1F0F" }}>
                      {cat.name}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: openPrice === i ? "var(--wood-light)" : "var(--wood-mid)" }}
                    >
                      {cat.price}
                    </span>
                  </div>
                  <Icon
                    name={openPrice === i ? "ChevronUp" : "ChevronDown"}
                    size={18}
                    style={{ color: openPrice === i ? "#fff" : "var(--stone)" }}
                  />
                </button>

                {openPrice === i && (
                  <div className="divide-y" style={{ borderColor: "rgba(160,113,58,0.1)" }}>
                    {cat.items.map((item) => (
                      <div key={item.name} className="flex items-center justify-between px-6 py-3" style={{ backgroundColor: "#FDFAF6" }}>
                        <span className="text-sm text-gray-700">{item.name}</span>
                        <span className="font-bold text-sm ml-4 shrink-0" style={{ color: "var(--wood-dark)" }}>
                          {item.price}
                        </span>
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
      <section className="py-16 px-4" style={{ backgroundColor: "var(--page-bg)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="text-sm font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--pine)" }}>
                Отзывы
              </div>
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "#2C1F0F" }}>Что говорят клиенты</h2>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-75 transition-opacity shrink-0"
              style={{ color: "#00AAFF" }}
            >
              <Icon name="ShoppingBag" size={16} />
              Все отзывы на Avito
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {reviews.map((r) => (
              <div
                key={r.name}
                className="rounded-xl p-5"
                style={{ backgroundColor: "#fff", border: "1px solid rgba(160,113,58,0.2)", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Icon key={i} name="Star" size={14} style={{ color: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">«{r.text}»</p>
                <div className="flex items-center gap-2 mt-auto">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                    style={{ backgroundColor: "var(--wood-mid)" }}
                  >
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold" style={{ color: "#2C1F0F" }}>{r.name}</div>
                    <div className="text-xs text-gray-400">{r.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer style={{ backgroundColor: "#1A1108" }} className="pt-12 pb-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "var(--wood-mid)" }}
                >
                  <Icon name="TreePine" size={22} className="text-white" />
                </div>
                <div className="font-bold text-white text-base" style={{ fontFamily: "Montserrat, sans-serif" }}>
                  ДревоМастер
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
                Производство деревянных хозблоков, беседок, террас и мебели из слэбов дуба и вяза. Работаем с 2015 года.
              </p>
              <div className="flex gap-2">
                <a href="#" style={{ backgroundColor: "#00AAFF" }} className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="ShoppingBag" size={16} className="text-white" />
                </a>
                <a href="#" style={{ backgroundColor: "#25D366" }} className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="MessageCircle" size={16} className="text-white" />
                </a>
                <a href="#" style={{ backgroundColor: "#229ED9" }} className="w-9 h-9 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity">
                  <Icon name="Send" size={16} className="text-white" />
                </a>
              </div>
            </div>

            {/* Catalog links */}
            <div>
              <div className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Каталог</div>
              <ul className="space-y-2">
                {["Хозблоки", "Беседки", "Террасы", "Мебель из слэбов"].map((item) => (
                  <li key={item}>
                    <a href="#catalog" className="text-sm hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <div className="font-semibold text-white mb-4 text-sm uppercase tracking-wide">Контакты</div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Icon name="Phone" size={15} style={{ color: "var(--wood-light)", marginTop: 2 }} />
                  <div>
                    <a href="tel:+79001234567" className="text-sm text-white hover:opacity-80">+7 (900) 123-45-67</a>
                    <div className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>Пн–Сб, 9:00–19:00</div>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="Mail" size={15} style={{ color: "var(--wood-light)", marginTop: 2 }} />
                  <a href="mailto:info@drevomaster.ru" className="text-sm text-white hover:opacity-80">info@drevomaster.ru</a>
                </li>
                <li className="flex items-start gap-2">
                  <Icon name="MapPin" size={15} style={{ color: "var(--wood-light)", marginTop: 2 }} />
                  <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>Московская обл., Чехов, ул. Производственная, 12</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.3)" }}
          >
            <span>© 2024 ДревоМастер. Все права защищены.</span>
            <span>ИП Иванов И.И. · ИНН 501234567890 · ОГРНИП 315501234567890</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index