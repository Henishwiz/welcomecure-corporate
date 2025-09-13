import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Images } from "../../constants";
import { Fragment, useState } from "react";

export interface SubMenuItem {
    label: string;
    url: string;
}

export interface MenuItem {
    label: string;
    url: string;
    subItems?: SubMenuItem[];
}

export interface ContactInfoItem {
    label: string;
    url: string;
    desktopIcon: string;
    mobileIcon: string;
    flag?: string;
}

export interface HeaderData {
    logo: string;
    menuItems: MenuItem[];
    loginText: string;
    registerText: string;
    contactInfo: ContactInfoItem[];
}


const Header = ({ data }: { data: HeaderData }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleSubMenu = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-30 ">
            <section className="bg-[#1A1A1A] py-[6px] items-center justify-center w-full hidden lg:flex">
                <ul className="flex items-center gap-x-5 text-xs text-white font-normal leading-none">
                    {data?.contactInfo && data?.contactInfo?.map((item: ContactInfoItem, idx: number) => (
                        <li key={idx}>
                            <a href={item.url} className={`flex items-center gap-x-2.5 ${item.url.startsWith("mailto:") ? "underline" : ""}`}>
                                <span className="flex items-center gap-x-[5px]">
                                    {item.flag && <img src={item.flag} alt="Phone" className="w-[18px] h-[18px]" />}
                                    <img src={item.desktopIcon} alt="Phone" className="w-4 h-4" />
                                </span>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
            <section className="bg-white shadow-md">
                <section className="container mx-auto px-4 py-[17px] flex justify-between items-center">
                    {/* Mobile logo */}
                    <img
                        src={data?.logo}
                        alt="Logo"
                        className="w-[107px] h-[35px] lg:hidden"
                    />

                    {/* Mobile menu button */}
                    <Bars3Icon
                        className="w-6 h-6 lg:hidden cursor-pointer"
                        onClick={() => setIsOpen(true)}
                    />

                    {/* Desktop menu */}
                    <ul className="hidden lg:flex gap-x-[30px] items-center font-normal text-base text-black">

                        <li>
                            <a href="/">
                                <img
                                    src={Images.LOGO.src}
                                    alt="Logo"
                                    className="w-[107px] h-[35px]"
                                />
                            </a>
                        </li>
                        {data.menuItems && data.menuItems.map((item, idx) => (
                            <li key={idx} className="relative group cursor-pointer">
                                <a href={item.url} className="flex items-center gap-1">
                                    {item.label}
                                    {item.subItems && item.subItems?.length > 0 && (
                                        <img
                                            src={Images.ARROW.src}
                                            alt="Arrow"
                                            className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                                        />
                                    )}
                                </a>

                                {item.subItems && item.subItems?.length > 0 && (
                                    <ul className="absolute z-10 left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 overflow-hidden">
                                        {item.subItems.map((sub, subIdx) => (
                                            <li
                                                key={subIdx}
                                                className="px-4 py-2 hover:bg-gray-50 cursor-pointer"
                                            >
                                                <a href={sub.url}>{sub.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>

                    {/* Desktop buttons */}
                    <ul className="hidden lg:flex gap-x-2.5 items-center font-normal text-base text-black">
                        <li>
                            <button className="cursor-pointer outline outline-[#FAE006] hover:shadow-sm rounded-md p-2.5 leading-none transition-all duration-300">
                                {data.loginText}
                            </button>
                        </li>
                        <li>
                            <button className="cursor-pointer bg-[#FAE006] hover:bg-[#FFF600] hover:shadow-sm rounded-md p-2.5 leading-none transition-all duration-300">
                                {data.registerText}
                            </button>
                        </li>
                    </ul>
                </section>

                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog as="div" className="fixed inset-0 backdrop-blur duration-300 z-50 overflow-hidden lg:hidden" onClose={() => setIsOpen(false)}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="ease-in duration-300"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <Dialog.Panel className="h-full bg-white overflow-y-auto text-left transform transition-all px-4 pt-[33px] w-[90vw] ml-auto">
                                <div className="flex justify-between items-center mb-[30px]">
                                    <img
                                        src={data?.logo}
                                        alt="Logo"
                                        className="w-[92px] h-[31px]"
                                    />
                                    <XMarkIcon
                                        className="w-6 h-6 cursor-pointer"
                                        onClick={() => setIsOpen(false)}
                                    />
                                </div>

                                <ul className="flex flex-col space-y-[10px] font-medium text-[#4E545F]">
                                    {data.menuItems.map((item, idx) => (
                                        <li key={idx} className="flex flex-col">
                                            <div
                                                className="flex gap-x-2.5 items-center cursor-pointer py-2"
                                                onClick={() => item.subItems && item.subItems.length > 0 && toggleSubMenu(idx)}
                                            >
                                                <a href={item.url || "#"}>{item.label}</a>
                                                {item.subItems && item.subItems.length > 0 && (
                                                    <img
                                                        src={Images.ARROW.src}
                                                        alt="Arrow"
                                                        className={`w-3 h-3 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                                                    />
                                                )}
                                            </div>

                                            {/* Submenu */}
                                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? "max-h-40 opacity-100 mt-1" : "max-h-0 opacity-0"
                                                }`}>
                                                {item.subItems && openIndex === idx && (
                                                    <ul className="flex flex-col space-y-2 mt-1">
                                                        {item.subItems.map((sub, subIdx) => (
                                                            <li key={subIdx}>
                                                                <a href={sub.url} className="text-sm text-gray-700">
                                                                    {sub.label}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="flex flex-col gap-2 mt-5 text-base text-[#4E545F] font-normal leading-none">
                                    {data?.contactInfo && data?.contactInfo?.map((item, idx) => (
                                        <li key={idx}>
                                            <a href={item.url} className={`flex items-center gap-x-2.5 p-2.5 bg-[#FAFAFA] rounded-[10px] ${item.url.startsWith("mailto:") ? "underline" : ""}`}>
                                                <span className="flex items-center gap-x-[5px]">
                                                    {item.flag && <img src={item.flag} alt="Phone" className="w-[18px] h-[18px]" />}
                                                    <img src={item.mobileIcon} alt="Phone" className="w-4 h-4" />
                                                </span>
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-2.5 flex gap-2.5 w-full">
                                    <button className="outline outline-[#FAE006] hover:shadow-sm rounded-md p-2.5 leading-none w-full transition-all duration-300">
                                        {data.loginText}
                                    </button>
                                    <button className="bg-[#FAE006] hover:bg-[#FFF600] hover:shadow-sm rounded-md p-2.5 leading-none w-full transition-all duration-300">
                                        {data.registerText}
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </Dialog>
                </Transition>
            </section>
        </header>
    );
};

export default Header;
