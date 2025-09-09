import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog, Transition } from "@headlessui/react";
import { Images } from "../../constants";
import { Fragment, useState } from "react";

const Header = ({ data }: { data: any }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white py-[17px] fixed top-0 z-30 right-0 left-0 shadow-md">
            <section className="xl:container xl:mx-auto px-2.5 flex justify-between items-center">
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
                    {data.menuItems.map((item: any, idx: any) => (
                        <li key={idx} className="relative group cursor-pointer">
                            <a href={item.url} className="flex items-center gap-1">
                                {item.label}
                                {item.subItems?.length > 0 && (
                                    <img
                                        src={Images.ARROW.src}
                                        alt="Arrow"
                                        className="w-2 h-2 transition-transform duration-300 group-hover:rotate-180"
                                    />
                                )}
                            </a>

                            {item.subItems?.length > 0 && (
                                <ul className="absolute z-10 left-0 top-full mt-2 w-48 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300 overflow-hidden">
                                    {item.subItems.map((sub: any, subIdx: any) => (
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
                        <button className="outline outline-[#FAE006] rounded-md p-2.5 leading-none">
                            {data.loginText}
                        </button>
                    </li>
                    <li>
                        <button className="bg-[#FAE006] rounded-md p-2.5 leading-none">
                            {data.registerText}
                        </button>
                    </li>
                </ul>
            </section>

            {/* Mobile Sidebar Menu */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="fixed inset-0 z-50 overflow-hidden lg:hidden" onClose={() => setIsOpen(false)}>
                    {/* Background overlay */}
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="ease-in duration-300"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <Dialog.Panel className="h-full bg-white overflow-y-auto text-left transform transition-all">
                            {/* Close button */}
                            <div className="flex justify-between items-center mb-6">
                                <img
                                    src={Images.LOGO.src}
                                    alt="Logo"
                                    className="w-[107px] h-[35px]"
                                />
                                <XMarkIcon
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={() => setIsOpen(false)}
                                />
                            </div>

                            {/* Mobile menu links */}
                            <ul className="flex flex-col gap-y-4 font-medium text-black">
                                <li>Products</li>
                                <li>Services</li>
                                <li>Resources</li>
                                <li>About</li>
                                <li>Contact Us</li>
                            </ul>

                            {/* Buttons */}
                            <div className="mt-auto flex flex-col gap-2">
                                <button className="outline outline-[#FAE006] rounded-md p-2.5 leading-none">
                                    Log In
                                </button>
                                <button className="bg-[#FAE006] rounded-md p-2.5 leading-none">
                                    Register
                                </button>
                            </div>
                        </Dialog.Panel>
                    </Transition.Child>
                </Dialog>
            </Transition>
        </header>
    );
};

export default Header;
