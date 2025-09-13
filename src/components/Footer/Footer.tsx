// types/footer.ts

export interface SocialLink {
    icon: string;
    url: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
}

export interface FooterSubLink {
    label: string;
    url: string;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterSubLink[];
}

export interface PaymentMethod {
    icon: string;
}

export interface LegalLink {
    label: string;
    url: string;
}

export interface FooterConfig {
    heading: string;
    subheading: string;
    socialLinks: SocialLink[];
    emailPlaceholder: string;
    newsletterButtonText: string;
    contactInfo: ContactInfo;
    footerLinks: FooterLinkGroup[];
    paymentMethods: PaymentMethod[];
    copyright: string;
    legalLinks: LegalLink[];
}


const Footer = ({ data }: { data: FooterConfig }) => {
    return (
        <section className='bg-[#FAE006]'>
            <footer className='bg-[#1A1A1A] relative clip-curve-bottom pt-[73px] lg:pt-[106px]'>

                <section>

                    <h3 className='text-white text-[32px] lg:text-[58px] font-bold text-center max-w-xs md:max-w-[676px] mx-auto Amiko-Bold px-4-'>{data.heading}</h3>

                    <p className='text-white text-base lg:text-lg font-normal text-center my-5 lg:my-10 max-w-[696px] mx-auto px-4'>{data.subheading}</p>

                    <section className='flex items-center justify-center gap-x-2.5 lg:gap-x-5 px-4'>
                        <input type="text" placeholder="Enter your email" className='w-full sm:w-[292px] rounded-md py-2 px-[15px] text-black outline-none bg-white' />
                        <button className='bg-[#FAE006] cursor-pointer hover:bg-[#FFF600] hover:shadow-sm rounded-md py-2 px-[15px] text-black text-base font-normal shrink-0 transition-all duration-300'>Get Notified</button>
                    </section>

                    <section className='grid lg:grid-cols-12 py-10 lg:py-[70px] pb-[79px]- container mx-auto px-4'>
                        <ul className='lg:col-span-5 w-max mb-[30px] lg:mb-0'>
                            <a href={`mailto:${data.contactInfo.email}`} className="w-max"><li className='text-white text-xs sm:text-base font-normal'>{data.contactInfo.email}</li></a>
                            <a href={`tel:${data.contactInfo.phone}`} className="w-max"><li className='text-white text-xs sm:text-base font-normal my-[15px] lg:my-[34px]'>{data.contactInfo.phone}</li></a>
                            <li className='flex items-center gap-x-[30px]'>
                                {data.socialLinks.map((social: SocialLink, index: number) => (
                                    <a key={index} href={social.url}>
                                        <img key={index} src={social.icon} alt="Social Link" className='object-cover hover:stroke-[#FAE006] hover:fill-[#FAE006]' />
                                    </a>
                                ))}
                            </li>
                        </ul>

                        <section className='grid grid-cols-2 md:grid-cols-3 lg:col-span-7 gap-y-[30px] gap-x-[10px] lg:gap-[43px]'>
                            {data.footerLinks.map((section: FooterLinkGroup, index: number) => (
                                <div key={index} className='col-span-1 text-start'>
                                    <h2 className='text-white opacity-80 text-xs sm:text-base font-light mb-[15px] lg:mb-[25px]'>{section.title}</h2>
                                    <ul className='flex flex-col gap-y-2.5 lg:gap-y-[15px]'>
                                        {section.links.map((link: FooterSubLink, index: number) => (
                                            <li key={index} className="text-white text-xs sm:text-base font-normal">
                                                {link.url ? (
                                                    <a href={link.url}>{link.label}</a>
                                                ) : (
                                                    link.label
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </section>
                    </section>

                    <section className='lg:border-t border-[#4E545F] py-2.5'>
                        <section className='xl:container xl:mx-auto flex flex-col lg:flex-row items-center justify-between gap-y-5 lg:gap-y-0'>
                            <p className='order-2 lg:order-1 text-white text-xs sm:text-base font-normal text-center lg:text-left w-full px-2.5'>100% Secure Payments<br />All major credit & debit cards accepted</p>
                            <div className='order-1 lg:order-2 flex items-center justify-between sm:justify-center lg:justify-end sm:gap-x-2.5 w-full px-4'>
                                {data.paymentMethods.map((paymentMethod: PaymentMethod, index: number) => (
                                    <img key={index} src={paymentMethod.icon} alt="Payment Method" className='object-cover' />
                                ))}
                            </div>
                        </section>
                    </section>



                    <section className='text-white text-xs sm:text-base leading-[28px] font-normal border-y border-[#4E545F] py-2.5'>
                        <section className='xl:container xl:mx-auto flex flex-col lg:flex-row items-center justify-between'>
                            <p className='text-xs sm:text-base font-normal text-white max-w-xs lg:max-w-none text-center px-2.5'>{data.copyright}</p>
                            <hr className='w-full border-t border-[#4E545F] my-2.5 lg:hidden' />
                            <p className='flex items-center gap-x-2.5 px-2.5'>
                                {data.legalLinks.map((link: LegalLink, index: number) => (
                                    <a key={index} href={link.url} className={`text-white text-xs sm:text-base font-normal ${index !== data.legalLinks.length - 1 ? 'border-r border-[#4E545F] pr-2.5' : ''}`}>{link.label}</a>
                                ))}
                            </p>
                        </section>
                    </section>
                </section>

            </footer>
        </section>
    )
}

export default Footer