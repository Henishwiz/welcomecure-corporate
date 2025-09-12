import { f as createComponent, s as spreadAttributes, u as unescapeHTML, r as renderTemplate, e as createAstro, h as addAttribute, l as renderHead, k as renderComponent, n as renderSlot, o as Fragment$1 } from './astro/server_jaHnMHI2.mjs';
import 'kleur/colors';
/* empty css                         */
import { jsxs, jsx } from 'react/jsx-runtime';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Transition, Dialog } from '@headlessui/react';
import 'clsx';
import { useState, Fragment } from 'react';
import { createClient } from 'tinacms/dist/client';

function createSvgComponent({ meta, attributes, children }) {
  const Component = createComponent((_, props) => {
    const normalizedProps = normalizeProps(attributes, props);
    return renderTemplate`<svg${spreadAttributes(normalizedProps)}>${unescapeHTML(children)}</svg>`;
  });
  Object.defineProperty(Component, "toJSON", {
    value: () => meta,
    enumerable: false
  });
  return Object.assign(Component, meta);
}
const ATTRS_TO_DROP = ["xmlns", "xmlns:xlink", "version"];
const DEFAULT_ATTRS = {};
function dropAttributes(attributes) {
  for (const attr of ATTRS_TO_DROP) {
    delete attributes[attr];
  }
  return attributes;
}
function normalizeProps(attributes, props) {
  return dropAttributes({ ...DEFAULT_ATTRS, ...attributes, ...props });
}

const Arrow = createSvgComponent({"meta":{"src":"/_astro/Arrow.3s-Ehlq1.svg","width":10,"height":7,"format":"svg"},"attributes":{"width":"10","height":"7","viewBox":"0 0 10 7","fill":"none"},"children":"\n<path d=\"M1.12244 1.5L5.12244 5.5L9.12244 1.5\" stroke=\"#4E545F\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Arrow_White = createSvgComponent({"meta":{"src":"/_astro/Arrow_White.2prKQkdo.svg","width":18,"height":10,"format":"svg"},"attributes":{"width":"18","height":"10","viewBox":"0 0 18 10","fill":"none"},"children":"\n<path d=\"M13 1L17 5L13 9\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M1 5L17 5\" stroke=\"white\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Arrow_Black = createSvgComponent({"meta":{"src":"/_astro/Arrow_Black.COwolmZO.svg","width":18,"height":10,"format":"svg"},"attributes":{"width":"18","height":"10","viewBox":"0 0 18 10","fill":"none"},"children":"\n<path d=\"M13 1L17 5L13 9\" stroke=\"#1A1A1A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n<path d=\"M1 5L17 5\" stroke=\"#1A1A1A\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n"});

const Logo = createSvgComponent({"meta":{"src":"/_astro/Logo.wlQeO7RU.svg","width":108,"height":36,"format":"svg"},"attributes":{"width":"108","height":"36","viewBox":"0 0 108 36","fill":"none"},"children":"\r\n<path d=\"M17.775 35.55C27.5918 35.55 35.5499 27.5919 35.5499 17.775C35.5499 7.95814 27.5918 0 17.775 0C7.95812 0 0 7.95814 0 17.775C0 27.5919 7.95812 35.55 17.775 35.55Z\" fill=\"#FCDD00\" />\r\n<path d=\"M107.122 7.85374C107.122 8.14986 107.103 8.41733 107.065 8.65614H101.033C101.08 9.28659 101.314 9.79287 101.735 10.175C102.155 10.5571 102.671 10.7481 103.282 10.7481C104.161 10.7481 104.782 10.3803 105.145 9.64481H106.907C106.668 10.3708 106.234 10.9678 105.603 11.4359C104.982 11.8944 104.209 12.1236 103.282 12.1236C102.528 12.1236 101.849 11.9565 101.247 11.6221C100.655 11.2783 100.187 10.8006 99.8433 10.1893C99.509 9.56839 99.3418 8.85196 99.3418 8.04001C99.3418 7.22806 99.5042 6.51641 99.829 5.90506C100.163 5.28415 100.627 4.80653 101.219 4.4722C101.821 4.13787 102.508 3.9707 103.282 3.9707C104.027 3.9707 104.691 4.13309 105.274 4.45787C105.856 4.78265 106.31 5.24117 106.635 5.83341C106.96 6.41611 107.122 7.08955 107.122 7.85374ZM105.417 7.33791C105.408 6.73611 105.193 6.25372 104.772 5.89073C104.352 5.52774 103.831 5.34624 103.21 5.34624C102.647 5.34624 102.165 5.52774 101.763 5.89073C101.362 6.24417 101.123 6.72656 101.047 7.33791H105.417Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M94.5553 3.9707C95.1762 3.9707 95.7302 4.09966 96.2174 4.35757C96.7141 4.61549 97.101 4.99758 97.378 5.50386C97.6646 6.01013 97.8079 6.62148 97.8079 7.33791V11.9947H96.1887V7.5815C96.1887 6.87462 96.012 6.33491 95.6586 5.96237C95.3051 5.58028 94.8228 5.38923 94.2114 5.38923C93.6001 5.38923 93.1129 5.58028 92.7499 5.96237C92.3965 6.33491 92.2197 6.87462 92.2197 7.5815V11.9947H90.6006V7.5815C90.6006 6.87462 90.4239 6.33491 90.0705 5.96237C89.717 5.58028 89.2346 5.38923 88.6233 5.38923C88.0119 5.38923 87.5248 5.58028 87.1618 5.96237C86.8083 6.33491 86.6316 6.87462 86.6316 7.5815V11.9947H84.9982V4.09966H86.6316V5.00236C86.8991 4.67758 87.2382 4.42444 87.6489 4.24295C88.0597 4.06145 88.4991 3.9707 88.9672 3.9707C89.5976 3.9707 90.1612 4.10444 90.6579 4.3719C91.1547 4.63937 91.5367 5.02624 91.8042 5.53251C92.043 5.0549 92.4156 4.67758 92.9218 4.40056C93.4281 4.11399 93.9726 3.9707 94.5553 3.9707Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M79.2857 12.1236C78.5406 12.1236 77.8672 11.9565 77.2654 11.6221C76.6636 11.2783 76.1908 10.8006 75.8469 10.1893C75.503 9.56839 75.3311 8.85196 75.3311 8.04001C75.3311 7.23761 75.5078 6.52596 75.8612 5.90506C76.2146 5.28415 76.697 4.80653 77.3084 4.4722C77.9197 4.13787 78.6027 3.9707 79.3574 3.9707C80.112 3.9707 80.795 4.13787 81.4063 4.4722C82.0177 4.80653 82.5001 5.28415 82.8535 5.90506C83.207 6.52596 83.3837 7.23761 83.3837 8.04001C83.3837 8.84241 83.2022 9.55406 82.8392 10.175C82.4762 10.7959 81.9795 11.2783 81.349 11.6221C80.7281 11.9565 80.0404 12.1236 79.2857 12.1236ZM79.2857 10.7051C79.706 10.7051 80.0977 10.6048 80.4607 10.4042C80.8332 10.2036 81.1341 9.90272 81.3634 9.50152C81.5926 9.10032 81.7072 8.61315 81.7072 8.04001C81.7072 7.46687 81.5974 6.98447 81.3777 6.59283C81.158 6.19163 80.8666 5.89073 80.5037 5.69013C80.1407 5.48953 79.749 5.38923 79.3287 5.38923C78.9084 5.38923 78.5168 5.48953 78.1538 5.69013C77.8003 5.89073 77.5185 6.19163 77.3084 6.59283C77.0982 6.98447 76.9932 7.46687 76.9932 8.04001C76.9932 8.89017 77.2081 9.54928 77.6379 10.0173C78.0774 10.4759 78.6266 10.7051 79.2857 10.7051Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M66.7251 8.04001C66.7251 7.22806 66.8875 6.51641 67.2123 5.90506C67.5466 5.28415 68.0051 4.80653 68.5878 4.4722C69.1705 4.13787 69.8392 3.9707 70.5938 3.9707C71.549 3.9707 72.3371 4.19996 72.958 4.65847C73.5885 5.10743 74.0135 5.75222 74.2332 6.59283H72.4708C72.3275 6.20118 72.0983 5.8955 71.7831 5.6758C71.4678 5.4561 71.0714 5.34624 70.5938 5.34624C69.9251 5.34624 69.3902 5.58505 68.989 6.06267C68.5974 6.53074 68.4015 7.18985 68.4015 8.04001C68.4015 8.89017 68.5974 9.55406 68.989 10.0317C69.3902 10.5093 69.9251 10.7481 70.5938 10.7481C71.5395 10.7481 72.1652 10.3326 72.4708 9.50152H74.2332C74.004 10.3039 73.5741 10.9439 72.9437 11.4215C72.3132 11.8896 71.5299 12.1236 70.5938 12.1236C69.8392 12.1236 69.1705 11.9565 68.5878 11.6221C68.0051 11.2783 67.5466 10.8006 67.2123 10.1893C66.8875 9.56839 66.7251 8.85196 66.7251 8.04001Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M65.1249 1.39062V11.9937H63.4915V1.39062H65.1249Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M61.884 7.85374C61.884 8.14986 61.8649 8.41733 61.8267 8.65614H55.7944C55.8422 9.28659 56.0762 9.79287 56.4965 10.175C56.9168 10.5571 57.4326 10.7481 58.044 10.7481C58.9228 10.7481 59.5437 10.3803 59.9067 9.64481H61.6691C61.4303 10.3708 60.9957 10.9678 60.3652 11.4359C59.7443 11.8944 58.9706 12.1236 58.044 12.1236C57.2893 12.1236 56.6111 11.9565 56.0093 11.6221C55.4171 11.2783 54.949 10.8006 54.6051 10.1893C54.2708 9.56839 54.1036 8.85196 54.1036 8.04001C54.1036 7.22806 54.266 6.51641 54.5908 5.90506C54.9251 5.28415 55.3884 4.80653 55.9807 4.4722C56.5825 4.13787 57.2702 3.9707 58.044 3.9707C58.7891 3.9707 59.4529 4.13309 60.0356 4.45787C60.6183 4.78265 61.0721 5.24117 61.3968 5.83341C61.7216 6.41611 61.884 7.08955 61.884 7.85374ZM60.1789 7.33791C60.1694 6.73611 59.9544 6.25372 59.5341 5.89073C59.1138 5.52774 58.5932 5.34624 57.9723 5.34624C57.4087 5.34624 56.9264 5.52774 56.5252 5.89073C56.124 6.24417 55.8851 6.72656 55.8087 7.33791H60.1789Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M53.3011 2.03535L50.3494 11.9937H48.501L46.4091 4.45688L44.1881 11.9937L42.3541 12.008L39.5314 2.03535H41.2651L43.3284 10.1453L45.5637 2.03535H47.3977L49.4754 10.1023L51.553 2.03535H53.3011Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M90.554 28.1097C90.554 28.5539 90.5253 28.9551 90.468 29.3133H81.4196C81.4912 30.259 81.8423 31.0184 82.4727 31.5915C83.1032 32.1647 83.8769 32.4513 84.7939 32.4513C86.1122 32.4513 87.0435 31.8996 87.588 30.7963H90.2316C89.8734 31.8853 89.2214 32.7808 88.2758 33.4829C87.3444 34.1707 86.1838 34.5146 84.7939 34.5146C83.662 34.5146 82.6447 34.2638 81.742 33.7623C80.8536 33.2465 80.1515 32.5301 79.6357 31.613C79.1342 30.6817 78.8834 29.607 78.8834 28.3891C78.8834 27.1712 79.127 26.1037 79.6142 25.1867C80.1157 24.2553 80.8106 23.5389 81.699 23.0374C82.6017 22.5359 83.6333 22.2852 84.7939 22.2852C85.9116 22.2852 86.9074 22.5287 87.7814 23.0159C88.6555 23.5031 89.3361 24.1909 89.8232 25.0792C90.3104 25.9533 90.554 26.9634 90.554 28.1097ZM87.9964 27.336C87.982 26.4333 87.6596 25.7097 87.0292 25.1652C86.3987 24.6207 85.6178 24.3485 84.6865 24.3485C83.8411 24.3485 83.1175 24.6207 82.5157 25.1652C81.9139 25.6953 81.5557 26.4189 81.4411 27.336H87.9964Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M73.9015 24.198C74.2597 23.5962 74.7325 23.1305 75.32 22.801C75.9218 22.4571 76.631 22.2852 77.4478 22.2852V24.8213H76.8245C75.8645 24.8213 75.1337 25.0649 74.6322 25.5521C74.1451 26.0392 73.9015 26.8846 73.9015 28.0882V34.3211H71.4513V22.4786H73.9015V24.198Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M68.2192 22.4785V34.3211H65.769V32.924C65.3822 33.4112 64.8735 33.7981 64.243 34.0846C63.6269 34.3569 62.9678 34.493 62.2657 34.493C61.3343 34.493 60.4961 34.2996 59.751 33.9127C59.0203 33.5258 58.44 32.9527 58.0101 32.1933C57.5946 31.4339 57.3868 30.5168 57.3868 29.4422V22.4785H59.8155V29.0768C59.8155 30.1371 60.0806 30.9538 60.6108 31.527C61.1409 32.0858 61.8645 32.3652 62.7815 32.3652C63.6985 32.3652 64.4221 32.0858 64.9523 31.527C65.4968 30.9538 65.769 30.1371 65.769 29.0768V22.4785H68.2192Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M40.0543 26.8194C40.0543 25.3579 40.391 24.0468 41.0645 22.8862C41.7522 21.7256 42.6764 20.8229 43.837 20.1781C45.012 19.519 46.2944 19.1895 47.6843 19.1895C49.2747 19.1895 50.6861 19.5835 51.9183 20.3716C53.1649 21.1453 54.0676 22.2486 54.6264 23.6815H51.6819C51.295 22.8934 50.7577 22.3059 50.07 21.919C49.3822 21.5322 48.587 21.3387 47.6843 21.3387C46.6956 21.3387 45.8144 21.5608 45.0406 22.005C44.2669 22.4492 43.6579 23.0868 43.2138 23.9179C42.7839 24.7489 42.569 25.7161 42.569 26.8194C42.569 27.9227 42.7839 28.8899 43.2138 29.7209C43.6579 30.552 44.2669 31.1968 45.0406 31.6553C45.8144 32.0995 46.6956 32.3216 47.6843 32.3216C48.587 32.3216 49.3822 32.1281 50.07 31.7413C50.7577 31.3544 51.295 30.7669 51.6819 29.9788H54.6264C54.0676 31.4117 53.1649 32.515 51.9183 33.2887C50.6861 34.0625 49.2747 34.4494 47.6843 34.4494C46.2801 34.4494 44.9977 34.127 43.837 33.4822C42.6764 32.8231 41.7522 31.9132 41.0645 30.7526C40.391 29.592 40.0543 28.2809 40.0543 26.8194Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M99.411 17.8359V20.7388H98.9349V18.7507L98.0494 20.7388H97.7194L96.8298 18.7507V20.7388H96.3536V17.8359H96.8674L97.8865 20.1123L98.9015 17.8359H99.411Z\" fill=\"#1A1A1A\" />\r\n<path d=\"M95.8714 17.8359V18.2244H95.0987V20.7388H94.6226V18.2244H93.8457V17.8359H95.8714Z\" fill=\"#1A1A1A\" />\r\n"});

const Images = {
  ARROW: Arrow,
  ARROW_WHITE: Arrow_White,
  ARROW_BLACK: Arrow_Black,
  LOGO: Logo
};

const Header = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const toggleSubMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-30 ", children: [
    /* @__PURE__ */ jsx("section", { className: "bg-[#1A1A1A] py-[6px] items-center justify-center w-full hidden lg:flex", children: /* @__PURE__ */ jsx("ul", { className: "flex items-center gap-x-5 text-xs text-white font-normal leading-none", children: data?.contactInfo && data?.contactInfo?.map((item, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: item.url, className: `flex items-center gap-x-2.5 ${item.url.startsWith("mailto:") ? "underline" : ""}`, children: [
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-[5px]", children: [
        item.flag && /* @__PURE__ */ jsx("img", { src: item.flag, alt: "Phone", className: "w-[18px] h-[18px]" }),
        /* @__PURE__ */ jsx("img", { src: item.desktopIcon, alt: "Phone", className: "w-4 h-4" })
      ] }),
      item.label
    ] }) }, idx)) }) }),
    /* @__PURE__ */ jsxs("section", { className: "bg-white shadow-md", children: [
      /* @__PURE__ */ jsxs("section", { className: "container mx-auto px-2.5 py-[17px] flex justify-between items-center", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: data?.logo,
            alt: "Logo",
            className: "w-[107px] h-[35px] lg:hidden"
          }
        ),
        /* @__PURE__ */ jsx(
          Bars3Icon,
          {
            className: "w-6 h-6 lg:hidden cursor-pointer",
            onClick: () => setIsOpen(true)
          }
        ),
        /* @__PURE__ */ jsxs("ul", { className: "hidden lg:flex gap-x-[30px] items-center font-normal text-base text-black", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: Images.LOGO.src,
              alt: "Logo",
              className: "w-[107px] h-[35px]"
            }
          ) }) }),
          data.menuItems && data.menuItems.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "relative group cursor-pointer", children: [
            /* @__PURE__ */ jsxs("a", { href: item.url, className: "flex items-center gap-1", children: [
              item.label,
              item.subItems && item.subItems?.length > 0 && /* @__PURE__ */ jsx(
                "img",
                {
                  src: Images.ARROW.src,
                  alt: "Arrow",
                  className: "w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                }
              )
            ] }),
            item.subItems && item.subItems?.length > 0 && /* @__PURE__ */ jsx("ul", { className: "absolute z-10 left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 overflow-hidden", children: item.subItems.map((sub, subIdx) => /* @__PURE__ */ jsx(
              "li",
              {
                className: "px-4 py-2 hover:bg-gray-50 cursor-pointer",
                children: /* @__PURE__ */ jsx("a", { href: sub.url, children: sub.label })
              },
              subIdx
            )) })
          ] }, idx))
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "hidden lg:flex gap-x-2.5 items-center font-normal text-base text-black", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "cursor-pointer outline outline-[#FAE006] hover:shadow-sm rounded-md p-2.5 leading-none transition-all duration-300", children: data.loginText }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("button", { className: "cursor-pointer bg-[#FAE006] hover:bg-[#FFF600] hover:shadow-sm rounded-md p-2.5 leading-none transition-all duration-300", children: data.registerText }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Transition, { appear: true, show: isOpen, as: Fragment, children: /* @__PURE__ */ jsx(Dialog, { as: "div", className: "fixed inset-0 backdrop-blur duration-300 z-50 overflow-hidden lg:hidden", onClose: () => setIsOpen(false), children: /* @__PURE__ */ jsx(
        Transition.Child,
        {
          as: Fragment,
          enter: "ease-out duration-300",
          enterFrom: "translate-x-full",
          enterTo: "translate-x-0",
          leave: "ease-in duration-300",
          leaveFrom: "translate-x-0",
          leaveTo: "translate-x-full",
          children: /* @__PURE__ */ jsxs(Dialog.Panel, { className: "h-full bg-white overflow-y-auto text-left transform transition-all px-4 pt-[33px] w-[90vw] ml-auto", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-[30px]", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: data?.logo,
                  alt: "Logo",
                  className: "w-[92px] h-[31px]"
                }
              ),
              /* @__PURE__ */ jsx(
                XMarkIcon,
                {
                  className: "w-6 h-6 cursor-pointer",
                  onClick: () => setIsOpen(false)
                }
              )
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col space-y-[10px] font-medium text-[#4E545F]", children: data.menuItems.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex gap-x-2.5 items-center cursor-pointer py-2",
                  onClick: () => item.subItems && item.subItems.length > 0 && toggleSubMenu(idx),
                  children: [
                    /* @__PURE__ */ jsx("a", { href: item.url || "#", children: item.label }),
                    item.subItems && item.subItems.length > 0 && /* @__PURE__ */ jsx(
                      "img",
                      {
                        src: Images.ARROW.src,
                        alt: "Arrow",
                        className: `w-3 h-3 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsx("div", { className: `overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"}`, children: item.subItems && openIndex === idx && /* @__PURE__ */ jsx("ul", { className: "flex flex-col space-y-2 mt-1", children: item.subItems.map((sub, subIdx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: sub.url, className: "text-sm text-gray-700", children: sub.label }) }, subIdx)) }) })
            ] }, idx)) }),
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-2 mt-5 text-base text-[#4E545F] font-normal leading-none", children: data?.contactInfo && data?.contactInfo?.map((item, idx) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: item.url, className: `flex items-center gap-x-2.5 p-2.5 bg-[#FAFAFA] rounded-[10px] ${item.url.startsWith("mailto:") ? "underline" : ""}`, children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-x-[5px]", children: [
                item.flag && /* @__PURE__ */ jsx("img", { src: item.flag, alt: "Phone", className: "w-[18px] h-[18px]" }),
                /* @__PURE__ */ jsx("img", { src: item.mobileIcon, alt: "Phone", className: "w-4 h-4" })
              ] }),
              item.label
            ] }) }, idx)) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2.5 flex gap-2.5 w-full", children: [
              /* @__PURE__ */ jsx("button", { className: "outline outline-[#FAE006] hover:shadow-sm rounded-md p-2.5 leading-none w-full transition-all duration-300", children: data.loginText }),
              /* @__PURE__ */ jsx("button", { className: "bg-[#FAE006] hover:bg-[#FFF600] hover:shadow-sm rounded-md p-2.5 leading-none w-full transition-all duration-300", children: data.registerText })
            ] })
          ] })
        }
      ) }) })
    ] })
  ] });
};

const Footer = ({ data }) => {
  return /* @__PURE__ */ jsx("section", { className: "bg-[#FAE006]", children: /* @__PURE__ */ jsx("footer", { className: "bg-[#1A1A1A] relative clip-curve-bottom pt-[73px] lg:pt-[106px]", children: /* @__PURE__ */ jsxs("section", { children: [
    /* @__PURE__ */ jsx("h3", { className: "text-white text-[32px] lg:text-[58px] font-bold text-center max-w-xs md:max-w-[676px] mx-auto Amiko-Bold", children: data.heading }),
    /* @__PURE__ */ jsx("p", { className: "text-white text-base lg:text-lg font-normal text-center my-5 lg:my-10 max-w-[696px] mx-auto", children: data.subheading }),
    /* @__PURE__ */ jsxs("section", { className: "flex items-center justify-center gap-x-2.5 lg:gap-x-5 px-2.5", children: [
      /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Enter your email", className: "w-full sm:w-[292px] rounded-md py-2 px-[15px] text-black outline-none bg-white" }),
      /* @__PURE__ */ jsx("button", { className: "bg-[#FAE006] cursor-pointer hover:bg-[#FFF600] hover:shadow-sm rounded-md py-2 px-[15px] text-black text-base font-normal shrink-0 transition-all duration-300", children: "Get Notified" })
    ] }),
    /* @__PURE__ */ jsxs("section", { className: "grid lg:grid-cols-12 py-10 lg:py-[70px] pb-[79px]- container mx-auto px-2.5", children: [
      /* @__PURE__ */ jsxs("ul", { className: "lg:col-span-5 w-max mb-[30px] lg:mb-0", children: [
        /* @__PURE__ */ jsx("a", { href: `mailto:${data.contactInfo.email}`, className: "w-max", children: /* @__PURE__ */ jsx("li", { className: "text-white text-base font-normal", children: data.contactInfo.email }) }),
        /* @__PURE__ */ jsx("a", { href: `tel:${data.contactInfo.phone}`, className: "w-max", children: /* @__PURE__ */ jsx("li", { className: "text-white text-base font-normal my-[15px] lg:my-[34px]", children: data.contactInfo.phone }) }),
        /* @__PURE__ */ jsx("li", { className: "flex items-center gap-x-[30px]", children: data.socialLinks.map((social, index) => /* @__PURE__ */ jsx("a", { href: social.url, children: /* @__PURE__ */ jsx("img", { src: social.icon, alt: "Social Link", className: "object-cover hover:stroke-[#FAE006] hover:fill-[#FAE006]" }, index) }, index)) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "grid grid-cols-2 md:grid-cols-3 lg:col-span-7 gap-y-[30px] gap-x-[10px] lg:gap-[43px]", children: data.footerLinks.map((section, index) => /* @__PURE__ */ jsxs("div", { className: "col-span-1 text-start", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-white opacity-80 text-base font-light mb-[15px] lg:mb-[25px]", children: section.title }),
        /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-y-2.5 lg:gap-y-[15px]", children: section.links.map((link, index2) => /* @__PURE__ */ jsx("li", { className: "text-white text-base font-normal", children: link.url ? /* @__PURE__ */ jsx("a", { href: link.url, children: link.label }) : link.label }, index2)) })
      ] }, index)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "lg:border-t border-[#4E545F] py-2.5", children: /* @__PURE__ */ jsxs("section", { className: "xl:container xl:mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0", children: [
      /* @__PURE__ */ jsxs("p", { className: "order-2 lg:order-1 text-white text-base font-normal text-center lg:text-left w-full px-2.5", children: [
        "100% Secure Payments",
        /* @__PURE__ */ jsx("br", {}),
        "All major credit & debit cards accepted"
      ] }),
      /* @__PURE__ */ jsx("div", { className: "order-1 lg:order-2 flex items-center justify-between sm:justify-center lg:justify-end sm:gap-x-2.5 w-full px-2.5", children: data.paymentMethods.map((paymentMethod, index) => /* @__PURE__ */ jsx("img", { src: paymentMethod.icon, alt: "Payment Method", className: "object-cover" }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "text-white text-base leading-[28px] font-normal border-y border-[#4E545F] py-2.5", children: /* @__PURE__ */ jsxs("section", { className: "xl:container xl:mx-auto flex flex-col lg:flex-row items-center justify-between", children: [
      /* @__PURE__ */ jsx("p", { className: "text-base font-normal text-white max-w-xs lg:max-w-none text-center px-2.5", children: data.copyright }),
      /* @__PURE__ */ jsx("hr", { className: "w-full border-t border-[#4E545F] my-2.5 lg:hidden" }),
      /* @__PURE__ */ jsx("p", { className: "flex items-center gap-x-2.5 px-2.5", children: data.legalLinks.map((link, index) => /* @__PURE__ */ jsx("a", { href: link.url, className: `text-white text-base font-normal ${index !== data.legalLinks.length - 1 ? "border-r border-[#4E545F] pr-2.5" : ""}`, children: link.label }, index)) })
    ] }) })
  ] }) }) });
};

function gql(strings, ...args) {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (args[i] || "");
  });
  return str;
}
const HeaderPartsFragmentDoc = gql`
    fragment HeaderParts on Header {
  __typename
  logo
  menuItems {
    __typename
    label
    url
    subItems {
      __typename
      label
      url
    }
  }
  loginText
  registerText
  contactInfo {
    __typename
    label
    url
    desktopIcon
    mobileIcon
    flag
  }
}
    `;
const HeroPartsFragmentDoc = gql`
    fragment HeroParts on Hero {
  __typename
  title
  subtitle
  backgroundImage
  backgroundImageForMobile
  primaryCta
  primaryCtaUrl
  secondaryCta
  secondaryCtaUrl
}
    `;
const OrganizationsPartsFragmentDoc = gql`
    fragment OrganizationsParts on Organizations {
  __typename
  title
  logos {
    __typename
    src
  }
}
    `;
const OurSolutionsPartsFragmentDoc = gql`
    fragment OurSolutionsParts on OurSolutions {
  __typename
  title
  leftSolutions {
    __typename
    title
    backgroundImage
    highlight
  }
  rightImage
  solutionsList {
    __typename
    label
  }
  ctaText
}
    `;
const TrustedByPartsFragmentDoc = gql`
    fragment TrustedByParts on TrustedBy {
  __typename
  title
  stats {
    __typename
    title
    subtitle
  }
  reviews {
    __typename
    review
    name
    position
  }
}
    `;
const HighQualitySolutionsPartsFragmentDoc = gql`
    fragment HighQualitySolutionsParts on HighQualitySolutions {
  __typename
  title
  solutions {
    __typename
    image
    title
    subtitle
  }
}
    `;
const WhyWelcomecurePartsFragmentDoc = gql`
    fragment WhyWelcomecureParts on WhyWelcomecure {
  __typename
  title
  subtitle
  image
  ctaText
  features {
    __typename
    icon
    text
  }
}
    `;
const CaseStudiesPartsFragmentDoc = gql`
    fragment CaseStudiesParts on CaseStudies {
  __typename
  title
  subtitle
  items {
    __typename
    image
    title
    description
    publishDate
    publishBy
  }
}
    `;
const FooterPartsFragmentDoc = gql`
    fragment FooterParts on Footer {
  __typename
  heading
  subheading
  socialLinks {
    __typename
    icon
    url
  }
  emailPlaceholder
  newsletterButtonText
  contactInfo {
    __typename
    email
    phone
  }
  footerLinks {
    __typename
    title
    links {
      __typename
      label
      url
    }
  }
  paymentMethods {
    __typename
    icon
  }
  copyright
  legalLinks {
    __typename
    label
    url
  }
}
    `;
const SeoPartsFragmentDoc = gql`
    fragment SeoParts on Seo {
  __typename
  title
  description
  openGraph {
    __typename
    ogTitle
    ogDescription
    ogImage
  }
  twitter {
    __typename
    twitterTitle
    twitterDescription
    twitterImage
  }
}
    `;
const HeaderDocument = gql`
    query header($relativePath: String!) {
  header(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HeaderParts
  }
}
    ${HeaderPartsFragmentDoc}`;
const HeaderConnectionDocument = gql`
    query headerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HeaderFilter) {
  headerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HeaderParts
      }
    }
  }
}
    ${HeaderPartsFragmentDoc}`;
const HeroDocument = gql`
    query hero($relativePath: String!) {
  hero(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HeroParts
  }
}
    ${HeroPartsFragmentDoc}`;
const HeroConnectionDocument = gql`
    query heroConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HeroFilter) {
  heroConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HeroParts
      }
    }
  }
}
    ${HeroPartsFragmentDoc}`;
const OrganizationsDocument = gql`
    query organizations($relativePath: String!) {
  organizations(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...OrganizationsParts
  }
}
    ${OrganizationsPartsFragmentDoc}`;
const OrganizationsConnectionDocument = gql`
    query organizationsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: OrganizationsFilter) {
  organizationsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...OrganizationsParts
      }
    }
  }
}
    ${OrganizationsPartsFragmentDoc}`;
const OurSolutionsDocument = gql`
    query ourSolutions($relativePath: String!) {
  ourSolutions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...OurSolutionsParts
  }
}
    ${OurSolutionsPartsFragmentDoc}`;
const OurSolutionsConnectionDocument = gql`
    query ourSolutionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: OurSolutionsFilter) {
  ourSolutionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...OurSolutionsParts
      }
    }
  }
}
    ${OurSolutionsPartsFragmentDoc}`;
const TrustedByDocument = gql`
    query trustedBy($relativePath: String!) {
  trustedBy(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...TrustedByParts
  }
}
    ${TrustedByPartsFragmentDoc}`;
const TrustedByConnectionDocument = gql`
    query trustedByConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: TrustedByFilter) {
  trustedByConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...TrustedByParts
      }
    }
  }
}
    ${TrustedByPartsFragmentDoc}`;
const HighQualitySolutionsDocument = gql`
    query highQualitySolutions($relativePath: String!) {
  highQualitySolutions(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...HighQualitySolutionsParts
  }
}
    ${HighQualitySolutionsPartsFragmentDoc}`;
const HighQualitySolutionsConnectionDocument = gql`
    query highQualitySolutionsConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: HighQualitySolutionsFilter) {
  highQualitySolutionsConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...HighQualitySolutionsParts
      }
    }
  }
}
    ${HighQualitySolutionsPartsFragmentDoc}`;
const WhyWelcomecureDocument = gql`
    query whyWelcomecure($relativePath: String!) {
  whyWelcomecure(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...WhyWelcomecureParts
  }
}
    ${WhyWelcomecurePartsFragmentDoc}`;
const WhyWelcomecureConnectionDocument = gql`
    query whyWelcomecureConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: WhyWelcomecureFilter) {
  whyWelcomecureConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...WhyWelcomecureParts
      }
    }
  }
}
    ${WhyWelcomecurePartsFragmentDoc}`;
const CaseStudiesDocument = gql`
    query caseStudies($relativePath: String!) {
  caseStudies(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...CaseStudiesParts
  }
}
    ${CaseStudiesPartsFragmentDoc}`;
const CaseStudiesConnectionDocument = gql`
    query caseStudiesConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: CaseStudiesFilter) {
  caseStudiesConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...CaseStudiesParts
      }
    }
  }
}
    ${CaseStudiesPartsFragmentDoc}`;
const FooterDocument = gql`
    query footer($relativePath: String!) {
  footer(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...FooterParts
  }
}
    ${FooterPartsFragmentDoc}`;
const FooterConnectionDocument = gql`
    query footerConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: FooterFilter) {
  footerConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...FooterParts
      }
    }
  }
}
    ${FooterPartsFragmentDoc}`;
const SeoDocument = gql`
    query seo($relativePath: String!) {
  seo(relativePath: $relativePath) {
    ... on Document {
      _sys {
        filename
        basename
        hasReferences
        breadcrumbs
        path
        relativePath
        extension
      }
      id
    }
    ...SeoParts
  }
}
    ${SeoPartsFragmentDoc}`;
const SeoConnectionDocument = gql`
    query seoConnection($before: String, $after: String, $first: Float, $last: Float, $sort: String, $filter: SeoFilter) {
  seoConnection(
    before: $before
    after: $after
    first: $first
    last: $last
    sort: $sort
    filter: $filter
  ) {
    pageInfo {
      hasPreviousPage
      hasNextPage
      startCursor
      endCursor
    }
    totalCount
    edges {
      cursor
      node {
        ... on Document {
          _sys {
            filename
            basename
            hasReferences
            breadcrumbs
            path
            relativePath
            extension
          }
          id
        }
        ...SeoParts
      }
    }
  }
}
    ${SeoPartsFragmentDoc}`;
function getSdk(requester) {
  return {
    header(variables, options) {
      return requester(HeaderDocument, variables, options);
    },
    headerConnection(variables, options) {
      return requester(HeaderConnectionDocument, variables, options);
    },
    hero(variables, options) {
      return requester(HeroDocument, variables, options);
    },
    heroConnection(variables, options) {
      return requester(HeroConnectionDocument, variables, options);
    },
    organizations(variables, options) {
      return requester(OrganizationsDocument, variables, options);
    },
    organizationsConnection(variables, options) {
      return requester(OrganizationsConnectionDocument, variables, options);
    },
    ourSolutions(variables, options) {
      return requester(OurSolutionsDocument, variables, options);
    },
    ourSolutionsConnection(variables, options) {
      return requester(OurSolutionsConnectionDocument, variables, options);
    },
    trustedBy(variables, options) {
      return requester(TrustedByDocument, variables, options);
    },
    trustedByConnection(variables, options) {
      return requester(TrustedByConnectionDocument, variables, options);
    },
    highQualitySolutions(variables, options) {
      return requester(HighQualitySolutionsDocument, variables, options);
    },
    highQualitySolutionsConnection(variables, options) {
      return requester(HighQualitySolutionsConnectionDocument, variables, options);
    },
    whyWelcomecure(variables, options) {
      return requester(WhyWelcomecureDocument, variables, options);
    },
    whyWelcomecureConnection(variables, options) {
      return requester(WhyWelcomecureConnectionDocument, variables, options);
    },
    caseStudies(variables, options) {
      return requester(CaseStudiesDocument, variables, options);
    },
    caseStudiesConnection(variables, options) {
      return requester(CaseStudiesConnectionDocument, variables, options);
    },
    footer(variables, options) {
      return requester(FooterDocument, variables, options);
    },
    footerConnection(variables, options) {
      return requester(FooterConnectionDocument, variables, options);
    },
    seo(variables, options) {
      return requester(SeoDocument, variables, options);
    },
    seoConnection(variables, options) {
      return requester(SeoConnectionDocument, variables, options);
    }
  };
}
const generateRequester = (client) => {
  const requester = async (doc, vars, options) => {
    let url = client.apiUrl;
    if (options?.branch) {
      const index = client.apiUrl.lastIndexOf("/");
      url = client.apiUrl.substring(0, index + 1) + options.branch;
    }
    const data = await client.request({
      query: doc,
      variables: vars,
      url
    }, options);
    return { data: data?.data, errors: data?.errors, query: doc, variables: vars || {} };
  };
  return requester;
};
const queries = (client) => {
  const requester = generateRequester(client);
  return getSdk(requester);
};

const client = createClient({ cacheDir: "C:/Henish Work space/welcomecure-corporate/tina/__generated__/.cache/1757682029650", url: "https://content.tinajs.io/1.6/content/cb6ed5a0-840a-4bb0-b6e4-e7ef7658bcf2/github/main", token: "fbcbb5a48c41ff08dd6199f4633e24a88de2ef8e", queries });

const $$Astro = createAstro("https://welcomecure-corporate.com");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seoFile = "home.md" } = Astro2.props;
  const headerRes = await client.queries.header({
    relativePath: "header.md"
  });
  const footerRes = await client.queries.footer({
    relativePath: "footer.md"
  });
  const seoRes = await client.queries.seo({
    relativePath: seoFile
  });
  const headerData = headerRes.data.header;
  const footerData = footerRes.data.footer;
  const seo = seoRes.data.seo;
  const title = seo?.title;
  const description = seo?.description;
  const og = seo?.openGraph;
  const twitter = seo?.twitter;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.ico"><link rel="sitemap" href="/sitemap-index.xml"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><meta name="description"${addAttribute(description, "content")}>${og && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "data-astro-cid-sckkx6r4": true }, { "default": async ($$result2) => renderTemplate`<meta property="og:title"${addAttribute(og.ogTitle, "content")}><meta property="og:description"${addAttribute(og.ogDescription, "content")}>${og.ogImage && renderTemplate`<meta property="og:image"${addAttribute(og.ogImage, "content")}>`}` })}`}${twitter && renderTemplate`${renderComponent($$result, "Fragment", Fragment$1, { "data-astro-cid-sckkx6r4": true }, { "default": async ($$result2) => renderTemplate`<meta name="twitter:title"${addAttribute(twitter.twitterTitle, "content")}><meta name="twitter:description"${addAttribute(twitter.twitterDescription, "content")}>${twitter.twitterImage && renderTemplate`<meta name="twitter:image"${addAttribute(twitter.twitterImage, "content")}>`}` })}`}${renderHead()}</head> <body data-astro-cid-sckkx6r4> ${renderComponent($$result, "Header", Header, { "client:load": true, "data": headerData, "client:component-hydration": "load", "client:component-path": "C:/Henish Work space/welcomecure-corporate/src/components/Header/Header", "client:component-export": "default", "data-astro-cid-sckkx6r4": true })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "data": footerData, "data-astro-cid-sckkx6r4": true })} </body></html>`;
}, "C:/Henish Work space/welcomecure-corporate/src/layouts/Layout.astro", void 0);

export { $$Layout as $, Images as I, client as c };
