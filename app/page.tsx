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
  Salad,
  Navigation,
  BadgeCheck,
  Cherry,
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const heroImage =
  "https://images.unsplash.com/photo-1573246123716-6b1782bfc499?q=80&w=1800&auto=format&fit=crop";

const marketImage =
  "https://images.unsplash.com/photo-1534723452862-4c874018d66d?q=80&w=1600&auto=format&fit=crop";

const vegetableImage =
  "https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?q=80&w=1500&auto=format&fit=crop";

const fruitImage =
  "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?q=80&w=1500&auto=format&fit=crop";

const groceryImage =
  "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1500&auto=format&fit=crop";

const greensImage =
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1500&auto=format&fit=crop";

const basketImage =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1600&auto=format&fit=crop";

const sections = [
  {
    title: "Taze Sebze",
    text: "Domates, biber, salatalık, patates ve günlük yeşillikler için hızlıca bilgi alabilirsiniz.",
    image: vegetableImage,
    icon: Leaf,
  },
  {
    title: "Seçilmiş Meyve",
    text: "Mevsimine göre taze, diri ve özenle seçilmiş meyve çeşitlerini sorabilirsiniz.",
    image: fruitImage,
    icon: Apple,
  },
  {
    title: "Yeşillik & Salata",
    text: "Sofralık, salatalık ve günlük tüketim için taze yeşillik seçenekleri.",
    image: greensImage,
    icon: Salad,
  },
  {
    title: "Market Ürünleri",
    text: "Temel gıda, kahvaltılık, içecek ve günlük ihtiyaç ürünleri tek noktada.",
    image: groceryImage,
    icon: ShoppingBasket,
  },
];

const flowItems = [
  {
    icon: MessageCircle,
    title: "Ürünü sorun",
    text: "WhatsApp üzerinden hangi ürüne ihtiyacınız olduğunu yazın.",
  },
  {
    icon: ShoppingBasket,
    title: "Siparişi iletin",
    text: "Sebze, meyve veya market ihtiyacınızı hızlıca bildirin.",
  },
  {
    icon: MapPin,
    title: "Konuma gidin",
    text: "İsterseniz doğrudan konum üzerinden işletmeye ulaşın.",
  },
];

const marquee = [
  "Taze Sebze",
  "Seçilmiş Meyve",
  "Yeşillik",
  "Temel Gıda",
  "Kahvaltılık",
  "İçecek",
  "Bakliyat",
  "Günlük İhtiyaç",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fbf1dc] text-[#1f2716]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-white/20 bg-[#fff8e8]/90 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-4 lg:px-8">
          <a href="#" onClick={closeMenu} className="flex min-w-0 items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#2f6b2f] text-white shadow-lg shadow-green-900/20">
              <ShoppingBasket size={22} />
            </span>

            <span className="min-w-0 leading-tight">
              <strong className="block truncate text-base font-black tracking-tight text-[#1f2716] sm:text-lg">
                Yıldırım Market & Manav
              </strong>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#7b6b39]">
                Taze ürün • Kolay sipariş
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-black text-[#2c321f] md:flex">
            <a href="#urunler" className="transition hover:text-[#2f6b2f]">
              Ürünler
            </a>
            <a href="#siparis" className="transition hover:text-[#2f6b2f]">
              Sipariş
            </a>
            <a href="#iletisim" className="transition hover:text-[#2f6b2f]">
              İletişim
            </a>
          </nav>

          <div className="hidden shrink-0 items-center gap-2 sm:flex">
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2f6b2f] px-5 py-3 text-sm font-black text-white shadow-xl shadow-green-900/15 transition hover:-translate-y-0.5 hover:bg-[#255625]"
            >
              <Navigation size={17} />
              Konum
            </a>

            <a
              href={`tel:${phoneHref}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d94b22] px-5 py-3 text-sm font-black text-white shadow-xl shadow-orange-900/20 transition hover:-translate-y-0.5 hover:bg-[#b93b16]"
            >
              <Phone size={17} />
              Ara
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#1f2716] shadow-sm transition hover:bg-[#eef7e8] md:hidden"
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
            className="border-t border-[#eadfbe] bg-[#fff8e8] px-4 pb-5 pt-2 shadow-xl md:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-3">
              <a
                href="#urunler"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#1f2716] shadow-sm"
              >
                Ürünler
              </a>

              <a
                href="#siparis"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#1f2716] shadow-sm"
              >
                Sipariş
              </a>

              <a
                href="#iletisim"
                onClick={closeMenu}
                className="rounded-2xl bg-white px-5 py-4 text-base font-black text-[#1f2716] shadow-sm"
              >
                İletişim
              </a>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <a
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#2f6b2f] px-4 py-4 text-sm font-black text-white"
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

      <section className="relative min-h-screen px-5 pb-20 pt-32 lg:px-8 lg:pt-36">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt="Taze sebze ve meyve reyonu"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#fbf1dc] via-[#fbf1dc]/88 to-[#fbf1dc]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fbf1dc] via-transparent to-[#fbf1dc]/30" />
        </div>

        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[#2f6b2f] shadow-sm backdrop-blur">
              <Sparkles size={16} />
              Taze ürün, kolay sipariş, hızlı iletişim
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-[-0.055em] text-[#1f2716] sm:text-6xl lg:text-7xl">
              Market ve manav alışverişiniz için tek noktadan ulaşın.
            </h1>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-[#4f5439] sm:text-xl">
              Sebze, meyve, temel gıda ve günlük ihtiyaçlarınız için Yıldırım
              Market & Manav’a hızlıca ulaşın. Ürün sorun, sipariş verin veya
              konuma tek dokunuşla gidin.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappMainUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 text-base font-black text-white shadow-2xl shadow-green-900/25 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
              >
                <MessageCircle size={20} />
                WhatsApp’tan Sipariş Ver
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </a>

              <a
                href={`tel:${phoneHref}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#d94b22] px-7 py-4 text-base font-black text-white shadow-2xl shadow-orange-900/20 transition hover:-translate-y-1 hover:bg-[#b93b16]"
              >
                <Phone size={20} />
                Hemen Ara
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["Taze sebze", "Seçilmiş meyve", "Market ürünleri", "Yakın konum"].map(
                (item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full bg-white/85 px-4 py-3 text-sm font-black text-[#2d351f] shadow-sm backdrop-blur"
                  >
                    <BadgeCheck size={17} className="text-[#2f6b2f]" />
                    {item}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#2f6b2f] py-4">
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="flex min-w-max items-center gap-9"
          >
            {[...marquee, ...marquee, ...marquee].map((item, index) => (
              <span
                key={`${item}-${index}`}
                className="flex items-center gap-3 text-sm font-black uppercase tracking-[0.22em] text-white"
              >
                <Cherry size={18} />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="urunler" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full bg-[#2f6b2f] px-4 py-2 text-sm font-black text-white">
              Ürün reyonları
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#1f2716] sm:text-5xl">
              Günlük alışverişte ihtiyaç duyulan ürünleri hızlıca sorun.
            </h2>

            <p className="mt-5 max-w-3xl text-lg font-semibold leading-8 text-[#555a3e]">
              Manav ürünlerinden temel market ihtiyaçlarına kadar aradığınız
              ürünler için WhatsApp üzerinden kolayca bilgi alabilirsiniz.
            </p>
          </motion.div>

          <div className="mt-14 space-y-8">
            {sections.map((item, index) => {
              const Icon = item.icon;
              const reverse = index % 2 === 1;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 26 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                  className={`grid min-h-[460px] overflow-hidden rounded-[44px] shadow-2xl shadow-green-950/10 lg:grid-cols-2 ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative min-h-[360px] lg:min-h-[460px]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative flex items-center bg-[#fff7e6] p-8 sm:p-12 lg:p-16">
                    <div className="absolute inset-y-0 left-0 hidden w-24 bg-gradient-to-r from-white/80 to-transparent lg:block" />

                    <div className="relative">
                      <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-full bg-[#2f6b2f] text-white shadow-lg shadow-green-900/20">
                        <Icon size={26} />
                      </div>

                      <h3 className="text-4xl font-black tracking-[-0.04em] text-[#1f2716] sm:text-5xl">
                        {item.title}
                      </h3>

                      <p className="mt-5 max-w-xl text-lg font-semibold leading-8 text-[#555a3e]">
                        {item.text}
                      </p>

                      <a
                        href={whatsappProductUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 text-base font-black text-white shadow-xl shadow-green-900/20 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
                      >
                        Ürün Bilgisi Al
                        <ArrowRight size={18} />
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0">
          <Image
            src={marketImage}
            alt="Market reyonu"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#13210f]/78" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#2f6b2f]">
              Yıldırım Market & Manav
            </span>

            <h2 className="mt-6 max-w-4xl text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
              Manav tazeliği ve market kolaylığı aynı yerde.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/85">
              Günlük alışverişte en önemli şey hızlı ulaşmak ve aradığınız
              ürünü kolayca sorabilmektir. Bu sayfa müşteriyi direkt arama,
              WhatsApp ve konum aksiyonlarına yönlendirir.
            </p>
          </div>

          <div className="space-y-7">
            {[
              {
                icon: Sparkles,
                title: "Ürünler özenle seçilir",
                text: "Sebze ve meyve ürünleri günlük alışveriş ihtiyacına göre hazırlanır.",
              },
              {
                icon: Truck,
                title: "Sipariş süreci kolaydır",
                text: "WhatsApp’tan yazmanız yeterli. İhtiyacınız hızlıca anlaşılır.",
              },
              {
                icon: Clock,
                title: "Zaman kaybettirmez",
                text: "Market ve manav ihtiyaçlarınızı tek yerden pratik şekilde tamamlayabilirsiniz.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-5 border-b border-white/15 pb-7">
                  <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-full bg-white text-[#2f6b2f]">
                    <Icon size={24} />
                  </div>

                  <div>
                    <h3 className="text-xl font-black text-white">{item.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-white/75">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="siparis" className="px-5 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[520px] overflow-hidden rounded-[46px] shadow-2xl shadow-green-950/15">
            <Image
              src={basketImage}
              alt="Market alışveriş sepeti"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-white/80">
                Kolay iletişim
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-white">
                İhtiyacınızı yazın, hızlıca dönüş alın.
              </h2>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#d94b22] px-4 py-2 text-sm font-black text-white">
              Nasıl ulaşılır?
            </span>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#1f2716] sm:text-5xl">
              Ürün sormak ve sipariş vermek için karmaşaya gerek yok.
            </h2>

            <p className="mt-5 text-lg font-semibold leading-8 text-[#555a3e]">
              Ziyaretçi siteye girdiğinde üç net aksiyon görür: arama,
              WhatsApp ve konum. Bu yapı özellikle yerel market ve manav
              işletmeleri için daha hızlı dönüşüm sağlar.
            </p>

            <div className="mt-9 space-y-7">
              {flowItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-5 border-b border-[#d9c788] pb-7">
                    <div className="pt-1 text-3xl font-black text-[#d94b22]">
                      0{index + 1}
                    </div>

                    <div>
                      <div className="mb-3 flex items-center gap-3">
                        <Icon size={24} className="text-[#2f6b2f]" />
                        <h3 className="text-2xl font-black text-[#1f2716]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-base font-semibold leading-7 text-[#555a3e]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappFastOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#25d366] px-7 py-4 font-black text-white shadow-xl shadow-green-900/20 transition hover:-translate-y-1 hover:bg-[#1fbd59]"
              >
                <MessageCircle size={20} />
                Sipariş Yaz
              </a>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2f6b2f] px-7 py-4 font-black text-white shadow-xl shadow-green-900/15 transition hover:-translate-y-1 hover:bg-[#255525]"
              >
                <MapPin size={20} />
                Konuma Git
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="iletisim" className="relative px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute inset-0 bg-[#1f2716]" />
        <div className="absolute inset-0 opacity-30">
          <Image
            src={vegetableImage}
            alt="Sebze arka planı"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-black text-[#2f6b2f]">
              İletişim
            </span>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-6xl">
              Arayın, mesaj gönderin veya konuma gidin.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-semibold leading-8 text-white/80">
              Günlük alışverişiniz için tek dokunuşla Yıldırım Market & Manav’a
              ulaşabilirsiniz.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <a
              href={`tel:${phoneHref}`}
              className="group flex min-h-[220px] flex-col justify-end rounded-[36px] bg-white/95 p-7 shadow-2xl shadow-black/20 transition hover:-translate-y-1"
            >
              <Phone className="text-[#d94b22]" size={34} />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-[#7a6a45]">
                Telefon
              </p>

              <h3 className="mt-3 text-3xl font-black text-[#1f2716]">
                {phoneDisplay}
              </h3>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#d94b22]">
                Hemen ara
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[220px] flex-col justify-end rounded-[36px] bg-[#2f6b2f] p-7 text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1"
            >
              <MapPin size={34} />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-white/70">
                Adres
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                14 Kasım Mah. Şamil Cad. No:38 Iğdır
              </h3>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                Konuma git
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>

            <a
              href={whatsappContactUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-[220px] flex-col justify-end rounded-[36px] bg-[#25d366] p-7 text-white shadow-2xl shadow-black/20 transition hover:-translate-y-1"
            >
              <MessageCircle size={34} />

              <p className="mt-7 text-sm font-black uppercase tracking-[0.2em] text-white/75">
                WhatsApp
              </p>

              <h3 className="mt-3 text-2xl font-black leading-tight text-white">
                Ürün ve sipariş için mesaj gönderin.
              </h3>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
                Mesaj gönder
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#e4d6b0] bg-[#fff8e8] px-5 py-8 lg:px-8">
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