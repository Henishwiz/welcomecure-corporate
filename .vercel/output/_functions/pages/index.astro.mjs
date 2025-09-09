import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_jaHnMHI2.mjs';
import 'kleur/colors';
import { I as Images, c as client, $ as $$Layout } from '../chunks/Layout_3ggbdbCY.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
export { renderers } from '../renderers.mjs';

const HeroSection = ({ hero }) => {
  return /* @__PURE__ */ jsxs("section", { className: "relative", children: [
    /* @__PURE__ */ jsx("img", { src: hero.backgroundImage, alt: "Hero", className: "w-full h-screen object-cover" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FAE006] to-[#000000] opacity-50" }),
    /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-white text-4xl lg:text-[58px] font-bold Amiko-Bold", children: hero.title }),
      /* @__PURE__ */ jsx("p", { className: "text-white text-xs lg:text-lg font-medium max-w-md lg:max-w-4xl text-center mt-[15px] mb-[25px]", children: hero.subtitle }),
      /* @__PURE__ */ jsxs("div", { className: "flex gap-x-2.5 items-center font-normal text-base", children: [
        hero.primaryCta && /* @__PURE__ */ jsx("a", { href: hero.primaryCtaUrl, className: "bg-[#FAE006] rounded-md p-2.5 text-black leading-none ", children: hero.primaryCta }),
        hero.secondaryCta && /* @__PURE__ */ jsx("a", { href: hero.secondaryCtaUrl, className: "outline outline-[#FAE006] rounded-md p-2.5 text-white leading-none", children: hero.secondaryCta })
      ] })
    ] })
  ] });
};

const OurSolutions = ({ ourSolutions }) => {
  return /* @__PURE__ */ jsxs("section", { className: "py-[100px]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold", children: ourSolutions.title }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-12 gap-5 xl:container xl:mx-auto items-stretch px-2.5", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-5 grid grid-cols-2 grid-rows-2 gap-5 h-full", children: ourSolutions.leftSolutions?.map((item, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: `rounded-[10px] overflow-hidden flex flex-col justify-end items-start ${item.highlight ? "bg-[#FAE006] py-[33px] pr-5" : "h-full bg-cover bg-center"}`,
          style: !item.highlight ? { backgroundImage: `url(${item.backgroundImage})` } : {},
          children: [
            /* @__PURE__ */ jsx(
              "h3",
              {
                className: `text-lg font-semibold px-[13px] ${item.highlight ? "text-black pb-2" : "text-white py-[33px]"}`,
                children: item.title
              }
            ),
            item.highlight && /* @__PURE__ */ jsx("p", { className: "border-b border-black h-[1px] w-full" })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-7 relative overflow-hidden rounded-[10px] h-full", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: ourSolutions.rightImage,
            alt: "Big Solution",
            className: "h-full w-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#FAE006] to-[#000000] opacity-50" }),
        /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-5", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2.5", children: ourSolutions.solutionsList.map((solution, index) => /* @__PURE__ */ jsxs(
            "h3",
            {
              className: "group flex items-center gap-x-2.5 text-white text-lg font-medium bg-[#0000004D] hover:bg-[#FAE006]/40 p-2.5 rounded-[12px] hover:outline hover:outline-[#FAE006] cursor-pointer",
              children: [
                solution.label,
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: Images.ARROW_WHITE.src,
                    alt: "Arrow",
                    className: "w-4 h-2 hidden group-hover:block duration-300"
                  }
                )
              ]
            },
            index
          )) }),
          /* @__PURE__ */ jsx("hr", { className: "w-full border-t border-white my-[15px]" }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-x-2.5 items-center font-medium text-lg", children: /* @__PURE__ */ jsxs("button", { className: "bg-[#FAE006] rounded-md py-2 px-5 text-black flex items-center gap-x-2.5", children: [
            ourSolutions.ctaText,
            /* @__PURE__ */ jsx(
              "img",
              {
                src: Images.ARROW_BLACK.src,
                alt: "Arrow",
                className: "w-4 h-2"
              }
            )
          ] }) })
        ] })
      ] })
    ] })
  ] });
};

const TrustedBy = ({ data }) => {
  return /* @__PURE__ */ jsxs("section", { className: "xl:container xl:mx-auto px-2.5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold", children: data.title }),
    /* @__PURE__ */ jsx("section", { className: "flex justify-between items-center mb-[50px]", children: data.stats.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-[50px] font-bold text-black mb-2.5 leading-none", children: item.title }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-normal text-[#4E545F] leading-5 max-w-[255px] text-center", children: item.subtitle })
    ] }, index)) }),
    /* @__PURE__ */ jsx("section", { className: "columns-1 md:columns-2 lg:columns-3 gap-5", children: data.reviews?.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "break-inside-avoid mb-5 bg-[#F4F4F4] p-5 rounded-[10px]", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-lg font-normal text-black", children: item.review }),
      /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-black mt-5 mb-[5px] leading-none", children: item.name }),
      /* @__PURE__ */ jsx("p", { className: "text-sm font-normal text-[#4E545F]", children: item.position })
    ] }, index)) })
  ] });
};

const HighQualitySolution = ({ data }) => {
  if (!data) return null;
  return /* @__PURE__ */ jsx("section", { className: "bg-[#FAE00633] py-[91px] mt-[100px]", children: /* @__PURE__ */ jsxs("section", { className: "xl:container xl:mx-auto px-2.5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-[50px] leading-none Amiko-Bold", children: data.title }),
    /* @__PURE__ */ jsx("section", { className: "grid lg:grid-cols-12 gap-5", children: data?.solutions.map((solution, index) => /* @__PURE__ */ jsxs("section", { className: "lg:col-span-4 rounded-[10px] overflow-hidden bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer transition-all duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "curve-border", children: /* @__PURE__ */ jsx("div", { className: "curve-inner", children: /* @__PURE__ */ jsx("img", { src: solution.image, alt: "Public Health", className: "w-[413px]" }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center group-hover:justify-between gap-x-2.5 mb-[15px]", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-black leading-none", children: solution.title }),
          /* @__PURE__ */ jsx("img", { src: Images.ARROW_BLACK.src, alt: "Arrow", className: "w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-normal text-[#4E545F]", children: solution.subtitle })
      ] })
    ] }, index)) })
  ] }) });
};

const WhyWelcomecure = ({ data }) => {
  return /* @__PURE__ */ jsxs("section", { className: "xl:container xl:mx-auto py-[91px]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-[13px] Amiko-Bold", children: data.title }),
    /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[29px]", children: data.subtitle }),
    /* @__PURE__ */ jsxs("section", { className: "grid grid-cols-12 gap-[42px]", children: [
      /* @__PURE__ */ jsx("div", { className: "col-span-6", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: data.image,
          alt: data.title,
          className: "w-full h-[407px] object-cover rounded-[10px]"
        }
      ) }),
      /* @__PURE__ */ jsxs("div", { className: "col-span-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-black mb-[15px] leading-none mb-[11px]", children: "Transform Your Workplace with Proven Results" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-normal text-[#4E545F] mb-5", children: "Our comprehensive wellness programs are designed to create lasting change in your organization. From preventive health screenings to mental health support, we provide the tools and expertise to build a healthier, more productive workforce." }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-y-5 mb-10", children: data.features.map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-x-2.5", children: [
          /* @__PURE__ */ jsx("img", { src: feature.icon, alt: "Arrow", className: "w-6 h-6" }),
          feature.text
        ] }, idx)) }),
        /* @__PURE__ */ jsx("button", { className: "bg-[#FAE006] rounded-md px-5 py-[11px] leading-none", children: data.ctaText })
      ] })
    ] })
  ] });
};

const CaseStudies = ({ title, subtitle, items }) => {
  return /* @__PURE__ */ jsxs("section", { className: "bg-[#FAE006] py-[88px]", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-5 leading-none Amiko-Bold", children: title }),
    /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[50px] leading-none", children: subtitle }),
    /* @__PURE__ */ jsx("section", { className: "flex gap-5 xl:container xl:mx-auto", children: items.map((caseStudy, index) => /* @__PURE__ */ jsxs("section", { className: "rounded-[10px] overflow-hidden bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer col-span-4 transition-all duration-300", children: [
      /* @__PURE__ */ jsx("div", { className: "curve-border", children: /* @__PURE__ */ jsx("div", { className: "curve-inner", children: /* @__PURE__ */ jsx("img", { src: caseStudy.image, alt: caseStudy.title }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col p-5", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center group-hover:justify-between gap-x-2.5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium text-black leading-none", children: caseStudy.title }),
          /* @__PURE__ */ jsx("img", { src: Images.ARROW_BLACK.src, alt: "Arrow", className: "w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold text-black leading-[26px] mt-[25px] mb-[15px]", children: caseStudy.description }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-2.5", children: [
          /* @__PURE__ */ jsx("p", { className: "text-base font-normal text-[#4E545F] leading-none", children: caseStudy.publishDate }),
          /* @__PURE__ */ jsx("p", { className: "text-base font-normal text-[#4E545F] leading-none", children: caseStudy.publishBy })
        ] })
      ] })
    ] }, index)) })
  ] });
};

const Organizations = ({ organizations }) => {
  return /* @__PURE__ */ jsxs("section", { className: "pt-[88px] xl:container xl:mx-auto px-2.5", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold", children: organizations.title }),
    /* @__PURE__ */ jsx("section", { className: "grid grid-cols-12 gap-20", children: organizations.logos?.map((org, index) => /* @__PURE__ */ jsx("div", { className: "col-span-3", children: /* @__PURE__ */ jsx("img", { src: org.src, alt: "", className: "w-[310px] object-cover" }) }, index)) })
  ] });
};

const $$Astro = createAstro("https://welcomecure-corporate.vercel.app");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const heroRes = await client.queries.hero({
    relativePath: "hero.md"
  });
  const orgRes = await client.queries.organizations({
    relativePath: "organizations.md"
  });
  const res = await client.queries.ourSolutions({
    relativePath: "our-solutions.md"
  });
  const { data } = await client.queries.caseStudies({ relativePath: "case-studies.md" });
  const highQualitySolutionsRes = await client.queries.highQualitySolutions({
    relativePath: "high-quality-solutions.md"
  });
  const whyWelcomecureRes = await client.queries.whyWelcomecure({
    relativePath: "why-welcomecure.md"
  });
  const trustedByRes = await client.queries.trustedBy({
    relativePath: "trusted-by.md"
  });
  const hero = heroRes.data.hero;
  const organizations = orgRes.data.organizations;
  const ourSolutions = res.data.ourSolutions;
  const highQualitySolutions = highQualitySolutionsRes?.data?.highQualitySolutions;
  const whyWelcomecure = whyWelcomecureRes?.data?.whyWelcomecure;
  const trustedBy = trustedByRes?.data?.trustedBy;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seoFile": "home.md" }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", HeroSection, { "hero": hero })} ${renderComponent($$result2, "Organizations", Organizations, { "organizations": organizations })} ${renderComponent($$result2, "OurSolutions", OurSolutions, { "ourSolutions": ourSolutions })} ${renderComponent($$result2, "TrustedBy", TrustedBy, { "data": trustedBy })} ${renderComponent($$result2, "HighQualitySolution", HighQualitySolution, { "data": highQualitySolutions })} ${renderComponent($$result2, "WhyWelcomecure", WhyWelcomecure, { "data": whyWelcomecure })} ${renderComponent($$result2, "CaseStudies", CaseStudies, { ...data.caseStudies })} ` })}`;
}, "C:/Henish Work space/welcomecure-corporate/src/pages/index.astro", void 0);

const $$file = "C:/Henish Work space/welcomecure-corporate/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
