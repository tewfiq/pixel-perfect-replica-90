import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, MapPin, Clock } from "lucide-react";
import hero from "@/assets/hero.jpg";
import flatWhite from "@/assets/flat-white.jpg";
import hojicha from "@/assets/hojicha.jpg";
import cookie from "@/assets/cookie.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Café Lumen — Café de spécialité à Paris" },
      {
        name: "description",
        content:
          "Café Lumen, une adresse parisienne autour du café de spécialité, des boissons de saison et d'une pause chaleureuse.",
      },
      { property: "og:title", content: "Café Lumen — Café de spécialité à Paris" },
      {
        property: "og:description",
        content: "Le goût des choses bien faites, la chaleur d'un café de quartier.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const INTENT = "Image d'intention — non contractuelle";

const signatures = [
  { name: "Flat white", desc: "Un espresso, du lait finement texturé, juste l'essentiel.", img: flatWhite, alt: "Flat white dans une tasse en céramique" },
  { name: "Hojicha latte", desc: "Les notes douces et torréfiées du thé japonais.", img: hojicha, alt: "Hojicha latte dans un verre" },
  { name: "Cookie", desc: "Une douceur généreuse pour accompagner votre pause.", img: cookie, alt: "Cookie aux pépites de chocolat sur une assiette" },
];

const moments = [
  { label: "Le matin", text: "Le premier café, celui qui donne le ton." },
  { label: "La pause déjeuner", text: "Une parenthèse simple au milieu de la journée." },
  { label: "Le goûter", text: "Une boisson réconfortante et quelque chose de bon." },
];

const principles = [
  { title: "Le geste juste", text: "Le soin apporté à chaque préparation." },
  { title: "Des recettes soignées", text: "Des recettes préparées avec attention." },
  { title: "La simplicité de l'accueil", text: "Un café où l'on se sent à sa place." },
];

const categories = [
  { title: "Boissons", text: "Cafés, thés et laits préparés à la commande." },
  { title: "Pâtisseries", text: "Une douceur pour accompagner la pause." },
  { title: "Saisonnier", text: "Des créations ponctuelles, au fil des saisons." },
];

function Figure({ src, alt, w, h, className = "", eager = false }: { src: string; alt: string; w: number; h: number; className?: string; eager?: boolean }) {
  return (
    <figure className={className}>
      <img src={src} alt={alt} width={w} height={h} loading={eager ? "eager" : "lazy"} fetchPriority={eager ? "high" : "auto"} className="h-full w-full rounded-[4px] object-cover" />
      <figcaption className="mt-2 text-xs text-muted-foreground">{INTENT}</figcaption>
    </figure>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "#carte", label: "La carte" },
    { href: "#lieu", label: "Le lieu" },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-lumen flex h-16 items-center justify-between lg:h-[76px]">
        <a href="#top" className="flex items-baseline gap-1.5 text-lg font-semibold tracking-tight">
          <span aria-hidden className="lumen-arc" />
          Café Lumen
        </a>
        <nav aria-label="Navigation principale" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.9375rem] font-medium hover:underline underline-offset-4">{l.label}</a>
          ))}
          <a href="#lieu" className="btn-lumen btn-ink">Nous trouver</a>
        </nav>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Navigation mobile" className="container-lumen flex flex-col gap-1 border-t border-border pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{l.label}</a>
          ))}
          <a href="#lieu" onClick={() => setOpen(false)} className="btn-lumen btn-ink mt-2">Nous trouver</a>
        </nav>
      )}
    </header>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* Hero */}
        <section className="container-lumen grid gap-10 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">Café de quartier · Paris</p>
            <h1 className="display mt-5 max-w-[14ch]">
              Le goût des choses bien faites, <em className="text-accent">la chaleur</em> d'un café de quartier.
            </h1>
            <p className="mt-6 max-w-[46ch] text-muted-foreground">
              Café de spécialité, boissons de saison et une carte courte à savourer sur place ou à emporter.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#lieu" className="btn-lumen btn-ink">Nous trouver</a>
              <a href="#carte" className="btn-lumen btn-outline-ink">Découvrir la carte</a>
            </div>
          </div>
          <Figure src={hero} alt="Lait versé dans un café au comptoir, lumière du matin" w={1280} h={1024} eager className="aspect-[4/5] lg:col-span-6 lg:aspect-[5/4]" />
        </section>

        {/* Signatures */}
        <section aria-labelledby="sig-title" className="section-y border-t border-border">
          <div className="container-lumen">
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow">Les signatures</p>
                <h2 id="sig-title" className="h2-editorial mt-4">Trois bonnes raisons de passer.</h2>
              </div>
              <p className="max-w-[40ch] text-muted-foreground lg:col-span-4 lg:col-start-9 lg:self-end">
                Des essentiels bien préparés et des envies à découvrir.
              </p>
            </div>
            <ul className="mt-12 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {signatures.map((p, i) => (
                <li key={p.name} className={i === 1 ? "lg:mt-16" : ""}>
                  <Figure src={p.img} alt={p.alt} w={768} h={960} className="aspect-[4/5]" />
                  <h3 className="mt-5 text-xl font-semibold">{p.name}</h3>
                  <p className="mt-1 text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Moments */}
        <section aria-labelledby="mom-title" className="section-y bg-surface">
          <div className="container-lumen">
            <p className="eyebrow">Les moments</p>
            <h2 id="mom-title" className="h2-editorial mt-4 max-w-[18ch]">À chaque moment, son Lumen.</h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3 md:gap-0">
              {moments.map((m, i) => (
                <li key={m.label} className={`border-t border-foreground pt-6 md:px-6 ${i === 0 ? "md:pl-0" : ""} ${i === 1 ? "md:pt-16" : ""}`}>
                  <p className="text-sm font-semibold text-accent">{m.label}</p>
                  <p className="mt-3 font-serif text-[1.75rem] leading-tight">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Approach */}
        <section aria-labelledby="app-title" className="section-y">
          <div className="container-lumen grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow">Notre approche</p>
              <h2 id="app-title" className="h2-editorial mt-4">Le soin des choses simples.</h2>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {principles.map((p, i) => (
                <li key={p.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-border py-7 first:pt-0">
                  <span className="font-serif text-2xl text-accent" aria-hidden>0{i + 1}</span>
                  <div>
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-muted-foreground">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Menu */}
        <section id="carte" aria-labelledby="carte-title" className="section-y border-t border-border bg-surface">
          <div className="container-lumen">
            <div className="max-w-[680px]">
              <p className="eyebrow">La carte</p>
              <h2 id="carte-title" className="h2-editorial mt-4">Peu de choses. Bien choisies.</h2>
              <p className="mt-5 text-muted-foreground">
                Une sélection courte de boissons et de gourmandises, pensée pour accompagner chaque moment.
              </p>
            </div>
            <div className="mt-14 grid md:grid-cols-3">
              {categories.map((c, i) => (
                <div key={c.title} className={`border-t border-border py-8 md:border-t-0 md:py-2 ${i > 0 ? "md:border-l md:pl-8" : ""} md:pr-8`}>
                  <h3 className="font-serif text-3xl">{c.title}</h3>
                  <p className="mt-3 text-muted-foreground">{c.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-sm text-muted-foreground">La carte complète et les prix sont à découvrir sur place.</p>
          </div>
        </section>

        {/* Location */}
        <section id="lieu" aria-labelledby="lieu-title" className="section-y bg-dark-surface text-dark-foreground">
          <div className="container-lumen grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-6">
              <p className="eyebrow !text-dark-muted">Le lieu</p>
              <h2 id="lieu-title" className="h2-editorial mt-4">On se retrouve chez Lumen ?</h2>
              <p className="mt-5 max-w-[42ch] text-dark-muted">À savourer sur place ou à emporter. Passez quand vous voulez.</p>
            </div>
            <dl className="grid gap-8 lg:col-span-5 lg:col-start-8">
              <div className="flex gap-4 border-t border-dark-muted/30 pt-6">
                <MapPin strokeWidth={1.5} className="mt-1 h-5 w-5 shrink-0" aria-hidden />
                <div>
                  <dt className="font-semibold">Adresse</dt>
                  <dd className="mt-1 text-dark-muted">Paris — adresse communiquée très bientôt.</dd>
                </div>
              </div>
              <div className="flex gap-4 border-t border-dark-muted/30 pt-6">
                <Clock strokeWidth={1.5} className="mt-1 h-5 w-5 shrink-0" aria-hidden />
                <div>
                  <dt className="font-semibold">Horaires</dt>
                  <dd className="mt-1 text-dark-muted">Les horaires d'ouverture seront annoncés prochainement.</dd>
                </div>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="container-lumen flex flex-col gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p className="flex items-baseline gap-1.5 font-semibold text-foreground"><span aria-hidden className="lumen-arc" />Café Lumen</p>
          <p>Café de quartier · Paris</p>
          <p>© {new Date().getFullYear()} Café Lumen</p>
        </div>
      </footer>
    </div>
  );
}
