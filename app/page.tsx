"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Apple,
  ArrowRight,
  Clock,
  MapPin,
  Phone,
  ShoppingBasket,
  Sparkles,
  Truck,
  Wheat,
  Leaf,
  Star,
  MessageCircle,
  Menu,
  X,
} from "lucide-react";

const phoneDisplay = "0543 856 61 32";
const phoneHref = "+905438566132";

const whatsappMainUrl =
  "https://wa.me/905438566132?text=Merhaba%20Y%C4%B1ld%C4%B1r%C4%B1m%20Market%20%26%20Manav%2C%20sipari%C5%9F%20vermek%20istiyorum.%20%C3%9Cr%C3%BCn%20ve%20fiyat%20bilgisi%20alabilir%20miyim%3F";

const whatsappProductUrl =
  "https://wa.me/905438566132?text=Merhaba%20Y%C4%B1ld%C4%B1r%C4%B1m%20Market%20%26%20Manav%2C%20%C3%BCr%C3%BCnleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const whatsappFastOrderUrl =
  "https://wa.me/905438566132?text=Merhaba%20Y%C4%B1ld%C4%B1r%C4%B1m%20Market%20%26%20Manav%2C%20bug%C3%BCn%20i%C3%A7in%20h%C4%B1zl%C4%B1%20sipari%C5%9F%20olu%C5%9Fturmak%20istiyorum.";

const whatsappContactUrl =
  "https://wa.me/905438566132?text=Merhaba%20Y%C4%B1ld%C4%B1r%C4%B1m%20Market%20%26%20Manav%2C%20ileti%C5%9Fim%20bilgileriniz%20%C3%BCzerinden%20ula%C5%9F%C4%B1yorum.%20Sipari%C5%9F%20ve%20%C3%BCr%C3%BCn%20bilgisi%20alabilir%20miyim%3F";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=14%20Kas%C4%B1m%20Mahallesi%20%C5%9Eamil%20Caddesi%20No%2038%20I%C4%9Fd%C4%B1r";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const products = [
  {
    title: "Taze Sebze",
    text: "Günlük gelen domates, salatalık, biber, patates ve yeşillikler.",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=1200&auto=format&fit=crop",
    icon: Leaf,
  },
  {
    title: "Seçilmiş Meyve",
    text: "Mevsimine göre tatlı, diri ve özenle seçilmiş meyve çeşitleri.",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1200&auto=format&fit=crop",
    icon: Apple,
  },
  {
    title: "Market Ürünleri",
    text: "Temel gıda, kahvaltılık, içecek ve günlük ihtiyaç ürünleri.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1200&auto=format&fit=crop",
    icon: ShoppingBasket,
  },
  {
    title: "Bakliyat & Gıda",
    text: "Pirinç, bulgur, makarna, un, yağ ve mutfak ihtiyaçları.",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=1200&auto=format&fit=crop",
    icon: Wheat,
  },
];

const features = [
  {
    icon: Sparkles,
    title: "Ürünler özenle seçilir",
    text: "Günlük alışverişte ihtiyaç duyulan ürünler tazelik ve kaliteye göre hazırlanır.",
  },
  {
    icon: Truck,
    title: "Sipariş süreci kolaydır",
    text: "WhatsApp’tan yazmanız yeterli. İhtiyacınız hızlıca anlaşılır ve yönlendirme yapılır.",
  },
  {
    icon: Clock,
    title: "Zaman kaybettirmez",
    text: "Market ve manav ihtiyaçlarınızı tek yerden pratik şekilde tamamlayabilirsiniz.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f4e9] text-[#202412]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#eadfbe] bg-[#fffaf0]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 lg:px-8">
          <a
            href="#"
            onClick={closeMenu}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2f6b2f] text-white shadow-lg shadow-green-900/20">
              <ShoppingBasket size={22} />
            </span>

            <span className="min-w-0 leading-tight">
              <strong className="block truncate text-base font-black tracking-tight text-[#202412] sm:text-lg">
                Yıldırım Market & Manav
              </strong>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#6f633f]">
                Günlük alışveriş noktası
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-black text-[#343820] md:flex">
            <a href="#urunler" className="nav-link">
              Ürünler
            </a>
            <a href="#avantajlar" className="nav-link">
              Avantajlar
            </a>
            <a href="#iletisim" className="nav-link">
              İletişim
            </a>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#cbb77c] bg-white px-4 py-3 text-sm font-black text-[#202412] shadow-sm transition hover:-translate-y-0.5 hover:border-[#2f6b2f] hover:bg-[#eef7e8] hover:text-[#2f6b2f]"
            >
              Konum
            </a>

            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d94b22] px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-[#b93b16]"
            >
              <Phone size={17} />
              <span>Ara</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[#d8c384] bg-white text-[#202412] shadow-sm transition hover:bg-[#eef7e8] md:hidden"
            aria-label="Mobil menüyü aç"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22 }}
            className="border-t border-[#eadfbe] bg-[#fffaf0] px-4 pb-5 pt-2 shadow-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-3">
              <a
                href="#urunler"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#202412] shadow-sm"
              >
                Ürünler
              </a>

              <a
                href="#avantajlar"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#202412] shadow-sm"
              >
                Avantajlar
              </a>

              <a
                href="#iletisim"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#202412] shadow-sm"
              >
                İletişim
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-[#2f6b2f] bg-[#f4ffe9] px-4 py-4 text-sm font-black text-[#2f6b2f]"
                >
                  <MapPin size={18} />
                  Konum
                </a>

                <a
                  href={`tel:${phoneHref}`}
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#d94b22] px-4 py-4 text-sm font-black text-white shadow-lg shadow-orange-900/20"
                >
                  <Phone size={18} />
                  Ara
                </a>
              </div>

              <a
                href={whatsappMainUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25d366] px-4 py-4 text-sm font-black text-white shadow-lg shadow-green-900/20"
              >
                <MessageCircle size={18} />
                WhatsApp Sipariş
              </a>
            </nav>
          </motion.div>
        )}
      </header>

      <section className="relative px-5 pb-16 pt-32 lg:px-8 lg:pb-24 lg:pt-40">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="relative z-10"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#d8c384] bg-white px-4 py-2 text-sm font-black text-[#2f6b2f] shadow-sm">
              <Sparkles size={16} />
              Taze ürün, hızlı iletişim, kolay sipariş
            </span>

            <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.02] tracking-[-0.05em] text-[#202412] sm:text-6xl lg:text-7xl">
              Günlük alışverişinizi zahmetsiz hale getirin.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#4f5439] sm:text-xl">
              Sebze, meyve, temel gıda ve günlük ihtiyaçlarınız için hızlıca
              ulaşın. Sipariş vermek, ürün sormak veya konuma gitmek için
              aşağıdaki butonları kullanabilirsiniz.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappMainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 text-base font-black text-white shadow-2xl shadow-green-900/25 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
              >
                <MessageCircle size={20} />
                <span>WhatsApp’tan Sipariş Ver</span>
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </a>

              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#d94b22] bg-white px-7 py-4 text-base font-black text-[#d94b22] shadow-xl shadow-yellow-900/10 transition hover:-translate-y-1 hover:bg-[#d94b22] hover:text-white"
              >
                <Phone size={20} />
                <span>Hemen Ara</span>
              </a>
            </div>

            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {["Taze ürün seçimi", "Kolay sipariş", "Yakın konum"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-[#e3d2a4] bg-white px-5 py-4 shadow-sm"
                  >
                    <div className="mb-2 flex text-[#f2a51f]">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-sm font-black text-[#30351f]">{item}</p>
                  </div>
                )
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border-[10px] border-white bg-white shadow-2xl shadow-green-950/20">
              <Image
                src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1400&auto=format&fit=crop"
                alt="Taze sebze ve meyve reyonu"
                width={1200}
                height={1400}
                priority
                className="h-[520px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/40 bg-white p-5 shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f6b2f]">
                  Bugünün ihtiyacı
                </p>
                <h2 className="mt-2 text-2xl font-black tracking-tight text-[#202412]">
                  Ürünleri sormak için tek mesaj yeterli.
                </h2>
                <p className="mt-2 text-sm font-bold leading-6 text-[#555a3e]">
                  WhatsApp üzerinden yazın, ihtiyacınıza göre dönüş yapılsın.
                </p>
              </div>
            </div>

            <div className="absolute -left-4 top-10 hidden rounded-3xl bg-[#d94b22] px-5 py-4 text-white shadow-xl lg:block">
              <p className="text-sm font-bold text-white/90">Telefon</p>
              <p className="text-xl font-black text-white">{phoneDisplay}</p>
            </div>

            <div className="absolute -right-3 bottom-24 hidden rounded-3xl bg-[#2f6b2f] px-5 py-4 text-white shadow-xl lg:block">
              <p className="text-sm font-bold text-white/90">Adres</p>
              <p className="text-lg font-black text-white">
                14 Kasım Mah. / Iğdır
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="urunler" className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="section-label">Ürünler</span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#202412] sm:text-5xl">
              Günlük ihtiyaçlarınızı kolayca tamamlayın.
            </h2>

            <p className="mt-5 text-lg font-semibold leading-8 text-[#555a3e]">
              Manav ürünlerinden temel market ihtiyaçlarına kadar aradığınız
              ürünler için hızlıca bilgi alabilirsiniz.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => {
              const Icon = product.icon;

              return (
                <motion.article
                  key={product.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="group overflow-hidden rounded-[2rem] border border-[#eadfbe] bg-white shadow-lg shadow-yellow-900/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-950/10"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={900}
                      height={700}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2f6b2f] shadow-lg">
                      <Icon size={23} />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-black tracking-tight text-[#202412]">
                      {product.title}
                    </h3>

                    <p className="mt-3 min-h-[72px] text-sm font-bold leading-6 text-[#5c6047]">
                      {product.text}
                    </p>

                    <a
                      href={whatsappProductUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#fff1e9] px-4 py-3 text-sm font-black text-[#c64017] transition hover:bg-[#d94b22] hover:text-white"
                    >
                      Ürün sor
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="avantajlar" className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-[#e6d8b2] bg-[#fffaf0] p-6 shadow-2xl shadow-yellow-900/10 md:p-10 lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#202412]">
            <Image
              src="https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1300&auto=format&fit=crop"
              alt="Market reyonu"
              width={1200}
              height={1000}
              className="h-full min-h-[420px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f6b2f]">
                Kolay alışveriş
              </p>
              <p className="mt-2 text-xl font-black text-[#202412]">
                İhtiyacınızı hızlıca sorun, zaman kaybetmeyin.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <span className="section-label w-fit">Neden tercih edilir?</span>

            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#202412] sm:text-5xl">
              Hızlı ulaşım, sade iletişim, pratik alışveriş.
            </h2>

            <p className="mt-5 text-lg font-semibold leading-8 text-[#555a3e]">
  İhtiyacınız olan ürünü sormak, sipariş vermek veya yol tarifi almak için
  tek dokunuşla bize ulaşabilirsiniz.
</p>

            <div className="mt-8 space-y-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-3xl border border-[#eadfbe] bg-white p-5 shadow-sm"
                  >
                    <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#eef7e8] text-[#2f6b2f]">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-black text-[#202412]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm font-bold leading-6 text-[#5c6047]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappFastOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-6 py-4 font-black text-white shadow-xl shadow-green-900/20 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
              >
                <MessageCircle size={20} />
                <span>Sipariş Yaz</span>
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-[#2f6b2f] bg-[#f4ffe9] px-6 py-4 font-black text-[#2f6b2f] shadow-lg shadow-green-900/10 transition hover:-translate-y-1 hover:bg-[#2f6b2f] hover:text-white"
              >
                <MapPin size={20} />
                <span>Konuma Git</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#2f6b2f] shadow-2xl shadow-green-950/20">
          <div className="grid lg:grid-cols-[1fr_0.8fr]">
            <div className="p-8 text-white sm:p-12 lg:p-16">
              <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#2f6b2f] shadow-sm">
                Hızlı iletişim
              </span>

              <h2 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl">
                Alışveriş için beklemeyin, hemen ulaşın.
              </h2>

             <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-white/90">
  Günlük alışverişiniz için arayın, WhatsApp’tan siparişinizi yazın ya da
  konumdan kolayca bize ulaşın.
</p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <a
                  href={`tel:${phoneHref}`}
                  className="inline-flex min-h-[74px] items-center justify-center gap-3 rounded-[22px] bg-[#d94b22] px-5 py-4 font-black text-white shadow-xl shadow-orange-950/20 transition hover:-translate-y-1 hover:bg-[#b93b16]"
                >
                  <Phone size={22} />
                  <span>Hemen Ara</span>
                </a>

                <a
                  href={whatsappFastOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[74px] items-center justify-center gap-3 rounded-[22px] bg-[#25d366] px-5 py-4 font-black text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
                >
                  <MessageCircle size={22} />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[74px] items-center justify-center gap-3 rounded-[22px] border-2 border-white/40 bg-[#244f24] px-5 py-4 font-black text-white shadow-xl shadow-green-950/20 transition hover:-translate-y-1 hover:bg-[#1e431e]"
                >
                  <MapPin size={22} />
                  <span>Konum</span>
                </a>
              </div>
            </div>

            <div className="relative min-h-[360px] bg-[#202412]">
              <Image
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1300&auto=format&fit=crop"
                alt="Market alışveriş ürünleri"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="px-5 pb-28 pt-8 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
          <div className="contact-card">
            <Phone className="text-[#d94b22]" size={28} />

            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-[#7a6a45]">
              Telefon
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#202412]">
              {phoneDisplay}
            </h3>

            <a href={`tel:${phoneHref}`} className="contact-link">
              Hemen ara
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="contact-card">
            <MapPin className="text-[#2f6b2f]" size={28} />

            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-[#7a6a45]">
              Adres
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#202412]">
              14 Kasım Mah. Şamil Cad. No:38 Iğdır
            </h3>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Konuma git
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="contact-card">
            <MessageCircle className="text-[#2f6b2f]" size={28} />

            <p className="mt-4 text-sm font-black uppercase tracking-[0.2em] text-[#7a6a45]">
              WhatsApp
            </p>

            <h3 className="mt-2 text-2xl font-black text-[#202412]">
              Ürün ve sipariş için mesaj gönderin.
            </h3>

            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Mesaj gönder
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4d6b0] bg-[#fffaf0] px-5 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm font-bold text-[#555a3e] md:flex-row md:items-center md:justify-between">
          <p>© Yıldırım Market & Manav. Tüm hakları saklıdır.</p>
          <p>14 Kasım Mahallesi Şamil Caddesi No:38 / Iğdır</p>
        </div>
      </footer>

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href={whatsappMainUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#25d366] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:brightness-95"
          aria-label="WhatsApp sipariş"
        >
          <MessageCircle size={24} />
        </a>

        <a
          href={`tel:${phoneHref}`}
          className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#d94b22] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:brightness-95"
          aria-label="Telefon ile ara"
        >
          <Phone size={24} />
        </a>
      </div>
    </main>
  );
}