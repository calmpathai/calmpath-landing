"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState<"en" | "ru">("ru");

  const t = {
    en: {
      tagline: "Your navigator to financial freedom.",
      daysText: "Days to Financial Freedom",
      cta: "Join Early Access",
      m1: "We don't show debt.",
      m2: "We show the path.",
      system: "Compass → Route → Freedom",
      compass: "Compass",
      compassText: "A daily direction for your next financial decision.",
      route: "Route",
      routeText: "A calm view of where you are and where you are going.",
      freedom: "Freedom",
      freedomText: "A destination that becomes visible, measurable and real.",
      dark1: "Your direction remains visible.",
      dark2: "Even in the dark.",
      final: "Your journey starts here.",
      email: "Enter your email",
      submit: "Start",
    },
    ru: {
      tagline: "Ваш навигатор к финансовой свободе.",
      daysText: "дня до финансовой свободы",
      cta: "Ранний доступ",
      m1: "Мы не показываем долги.",
      m2: "Мы показываем маршрут.",
      system: "Компас → Маршрут → Свобода",
      compass: "Компас",
      compassText: "Ежедневный ориентир для следующего финансового решения.",
      route: "Маршрут",
      routeText: "Спокойное понимание того, где вы сейчас и куда движетесь.",
      freedom: "Свобода",
      freedomText: "Цель, которая становится видимой, измеримой и реальной.",
      dark1: "Ориентир остаётся видимым.",
      dark2: "Даже в темноте.",
      final: "Ваше движение начинается здесь.",
      email: "Введите email",
      submit: "Начать",
    },
  }[lang];

  return (
    <main className="min-h-screen bg-[#071615] text-white">
      <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#071615]/75 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="CalmPath AI"
              width={36}
              height={36}
              priority
              className="h-8 w-8 object-contain"
            />
            <span className="text-sm font-normal tracking-wide text-white/75">
              CalmPath AI
            </span>
          </a>

          <div className="flex items-center gap-3 text-sm">
            <button
              onClick={() => setLang("en")}
              className={lang === "en" ? "text-teal-300" : "text-white/40"}
            >
              EN
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLang("ru")}
              className={lang === "ru" ? "text-teal-300" : "text-white/40"}
            >
              RU
            </button>
          </div>
        </div>
      </header>

      <section className="relative flex min-h-[86vh] items-center justify-center overflow-hidden px-5 pt-28 text-center">
        <Glow />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Image
            src="/logo.png"
            alt="CalmPath AI"
            width={130}
            height={130}
            priority
            className="mx-auto h-24 w-24 object-contain sm:h-28 sm:w-28"
          />

          <h1 className="mt-8 text-4xl font-normal tracking-[-0.04em] sm:text-5xl md:text-6xl">
            CalmPath AI
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base font-light text-teal-100/65 sm:text-lg">
            {t.tagline}
          </p>

          <div className="mt-12 sm:mt-14">
            <div className="text-[82px] font-light leading-none tracking-[-0.025em] sm:text-[120px] md:text-[150px]">
              784
            </div>
            <div className="mt-2 text-base font-light text-teal-100/55 sm:text-lg">
              {t.daysText}
            </div>
          </div>

          <a
            href="#early-access"
            className="mt-11 inline-flex rounded-full bg-teal-300 px-7 py-3.5 text-sm font-medium text-[#06201e] shadow-[0_0_42px_rgba(45,212,191,0.28)] transition hover:scale-[1.02]"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <section className="flex min-h-[62vh] items-center justify-center px-5 text-center">
        <div className="mx-auto max-w-5xl">
          <p className="text-3xl font-normal tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {t.m1}
          </p>
          <p className="mt-4 text-3xl font-normal tracking-[-0.04em] text-teal-300 sm:text-5xl md:text-6xl">
            {t.m2}
          </p>
        </div>
      </section>

      <section className="flex min-h-[76vh] items-center justify-center px-5 text-center">
        <div className="mx-auto max-w-5xl">
          <BrandDot />

          <h2 className="mt-9 text-3xl font-normal tracking-[-0.04em] text-white/90 sm:text-5xl md:text-6xl">
            {t.system}
          </h2>

          <div className="mx-auto mt-12 grid max-w-4xl gap-4 md:grid-cols-3">
            <Card title={t.compass} text={t.compassText} type="compass" />
            <Card title={t.route} text={t.routeText} type="route" />
            <Card title={t.freedom} text={t.freedomText} type="freedom" />
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[72vh] items-center justify-center overflow-hidden px-5 text-center">
        <Glow />
        <div className="relative z-10 mx-auto max-w-5xl">
          <div className="mx-auto mb-12 h-[1px] w-64 bg-gradient-to-r from-transparent via-teal-300 to-transparent shadow-[0_0_36px_rgba(45,212,191,0.75)]" />

          <p className="text-3xl font-normal tracking-[-0.04em] sm:text-5xl md:text-6xl">
            {t.dark1}
          </p>
          <p className="mt-4 text-3xl font-normal tracking-[-0.04em] text-teal-300 sm:text-5xl md:text-6xl">
            {t.dark2}
          </p>
        </div>
      </section>

      <section
        id="early-access"
        className="flex min-h-[78vh] items-center justify-center px-5 text-center"
      >
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-normal tracking-[-0.04em] sm:text-5xl">
            {t.final}
          </h2>

          <form
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            action="https://formspree.io/f/xqeoyqdj"
            method="POST"
          >
            <input
              type="email"
              name="email"
              required
              placeholder={t.email}
              className="min-h-13 flex-1 rounded-full border border-white/10 bg-white/5 px-6 py-4 text-white outline-none placeholder:text-white/35 focus:border-teal-300/60"
            />

            <input
              type="hidden"
              name="source"
              value="getcalmpath.com early access"
            />

            <button
              type="submit"
              className="min-h-13 rounded-full bg-teal-300 px-7 py-4 font-medium text-[#06201e]"
            >
              {t.submit}
            </button>
          </form>

          <footer className="mt-20 border-t border-white/10 pt-9">
            <Image
              src="/logo-horizontal.png"
              alt="CalmPath AI"
              width={300}
              height={90}
              className="mx-auto h-auto w-56 object-contain opacity-90 sm:w-72"
            />

            <p className="mt-3 text-xs text-white/28">
              getcalmpath.com · CalmPath AI
            </p>
          </footer>
        </div>
      </section>
    </main>
  );
}

function Card({
  title,
  text,
  type,
}: {
  title: string;
  text: string;
  type: "compass" | "route" | "freedom";
}) {
  const iconMap = {
    compass: "/icon-compass-dark.png",
    route: "/icon-route-dark.png",
    freedom: "/icon-freedom-dark.png",
  };

  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.025] p-7 text-left backdrop-blur">
      <div className="mb-8 h-16 w-16">
        <Image
          src={iconMap[type]}
          alt={title}
          width={64}
          height={64}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="text-xl font-normal text-white/90">{title}</div>
      <p className="mt-4 text-sm font-light leading-6 text-white/45">{text}</p>
    </div>
  );
}

function BrandDot() {
  return (
    <div className="mx-auto h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_28px_rgba(45,212,191,1)]" />
  );
}

function Glow() {
  return (
    <>
      <div className="absolute left-1/2 top-1/2 h-[580px] w-[580px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-400/10 blur-[120px]" />
      <div className="absolute bottom-20 left-1/2 h-[1px] w-[72vw] -translate-x-1/2 bg-gradient-to-r from-transparent via-teal-300/38 to-transparent shadow-[0_0_40px_rgba(45,212,191,0.55)]" />
    </>
  );
}