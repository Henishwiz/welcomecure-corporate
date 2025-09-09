const Footer = ({ data }: { data: any }) => {
    return (
        <section className='bg-[#FAE006]'>
            <footer className='bg-[#1A1A1A] relative clip-curve-bottom pt-[106px]'>

                <section>

                    <h3 className='text-white text-[58px] font-bold text-center max-w-[696px] mx-auto Amiko-Bold'>{data.heading}</h3>

                    <p className='text-white text-lg font-normal text-center my-10 max-w-[696px] mx-auto'>{data.subheading}</p>

                    <section className='flex items-center justify-center gap-x-5'>
                        <input type="text" placeholder="Enter your email" className='w-[292px] rounded-md py-2.5 px-[15px] text-black leading-none outline-none bg-white' />
                        <button className='bg-[#FAE006] rounded-md py-2.5 px-[15px] text-black leading-none'>Get Notified</button>
                    </section>

                    <section className='grid grid-cols-12 pt-[70px] pb-[79px] xl:container xl:mx-auto'>
                        <ul className='col-span-5 w-max'>
                            <a href={`mailto:${data.contactInfo.email}`} className="w-max"><li className='text-white text-base font-normal'>{data.contactInfo.email}</li></a>
                            <a href={`tel:${data.contactInfo.phone}`} className="w-max"><li className='text-white text-base font-normal my-[34px]'>{data.contactInfo.phone}</li></a>
                            <li className='flex items-center gap-x-2.5'>
                                {data.socialLinks.map((social: any, index: any) => (
                                    <a key={index} href={social.url}>
                                        <img key={index} src={social.icon} alt="Social Link" className='object-cover' />
                                    </a>
                                ))}
                            </li>
                        </ul>

                        <section className='grid grid-cols-3 col-span-7 gap-[43px]'>
                            {data.footerLinks.map((section: any, index: any) => (
                                <div key={index} className='col-span-1 text-start'>
                                    <h2 className='text-white text-base font-light mb-[25px]'>{section.title}</h2>
                                    <ul className='flex flex-col gap-y-[15px]'>
                                        {section.links.map((link: any, index: any) => (
                                            <li key={index} className="text-white text-base font-normal">
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

                    <section className='border-t border-[#4E545F] py-2.5'>
                        <section className='xl:container xl:mx-auto flex items-center justify-between'>
                            <p className='text-white text-base font-normal'>100% Secure Payments<br />All major credit & debit cards accepted</p>
                            <div className='flex items-center gap-x-2.5'>
                                {data.paymentMethods.map((paymentMethod: any, index: any) => (
                                    <img key={index} src={paymentMethod.icon} alt="Payment Method" className='object-cover' />
                                ))}
                            </div>
                        </section>
                    </section>



                    <section className='text-white text-base leading-[28px] font-normal border-y border-[#4E545F] py-2.5'>
                        <section className='xl:container xl:mx-auto flex items-center justify-between'>
                            <h2 className=''>{data.copyright}</h2>
                            <div className='flex items-center gap-x-2.5'>
                                {data.legalLinks.map((link: any, index: any) => (
                                    <a key={index} href={link.url} className={`text-white text-base font-normal ${index !== data.legalLinks.length - 1 ? 'border-r border-[#4E545F] pr-2.5' : ''}`}>{link.label}</a>
                                ))}
                            </div>
                        </section>
                    </section>
                </section>

            </footer>
        </section>
    )
}

export default Footer