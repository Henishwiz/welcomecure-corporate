import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_jaHnMHI2.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DHfut7sL.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seoFile": "about.md" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section className="bg-[#FAE006] h-[600px]"></section> ` })}`;
}, "C:/Henish Work space/welcomecure-corporate/src/pages/about.astro", void 0);

const $$file = "C:/Henish Work space/welcomecure-corporate/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$About,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
