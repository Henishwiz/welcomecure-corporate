import React from 'react'
import { Images } from '../../constants'

const paymentMethods = [
    Images.IMAGE_1.src,
    Images.IMAGE_2.src,
    Images.IMAGE_3.src,
    Images.IMAGE_4.src,
    Images.IMAGE_5.src,
]

const socialLinks = [
    Images.SOCIAL_LINK_1.src,
    Images.SOCIAL_LINK_2.src,
    Images.SOCIAL_LINK_3.src,
    Images.SOCIAL_LINK_4.src,
]

const footerLinks = [
    {
        title: "About us",
        links: [
            "Why WelcomeCure",
            "Vision & Mission",
            "Management Teams",
            "Careers",
            "Media",
        ]
    },
    {
        title: "Clinical Conditions",
        links: [
            "Find Daises",
            "Testimonials",
            "Success stories",
            "Videos",
        ]
    },
    {
        title: "Support",
        links: [
            "Contact us",
            "E-clinic Locations",
            "FAQ",
            "Feedback",
            "Sitemap",
        ]
    },
    {
        title: "Homeopathy",
        links: [
            "Why Homeopathy",
            "Benefits of Homeopathy",
            "FAQ about Homeopathy",
            "News Letter",
        ]
    },
    {
        title: "Corporate Wellness",
        links: [
            "Corporate Wellness",
            "Corporate CSR",
            "Make a Donation",
            "Franchisee Request",
        ]
    },
    {
        title: "Our Doctors",
        links: [
            "Our Doctors",
            "List Of Expert Doctors",
            "Become an Affiliate",
        ]
    },
]

const Footer = () => {
    return (
        <section className='bg-[#FAE006]'>
            <footer className='bg-[#1A1A1A] relative clip-curve-bottom pt-[106px]'>

                <section>

                    <h3 className='text-white text-[58px] font-bold text-center max-w-[696px] mx-auto Amiko-Bold'>Wellness Insights & Tips for Thriving Teams</h3>

                    <p className='text-white text-lg font-normal text-center my-10 max-w-[696px] mx-auto'>Get expert-backed advice on stress relief, healthy habits, and workplace wellbeing, straight to your inbox.</p>

                    <section className='flex items-center justify-center gap-x-5'>
                        <input type="text" placeholder="Enter your email" className='w-[292px] rounded-md py-2.5 px-[15px] text-black leading-none outline-none bg-white' />
                        <button className='bg-[#FAE006] rounded-md py-2.5 px-[15px] text-black leading-none'>Get Notified</button>
                    </section>


                    <section className='grid grid-cols-12 pt-[70px] pb-[79px] xl:container xl:mx-auto'>
                        <ul className='col-span-5'>
                            <li className='text-white text-base font-normal'>gmail@gmail.com</li>
                            <li className='text-white text-base font-normal my-[34px]'>(000) 0000-00000</li>
                            <li className='flex items-center gap-x-2.5'>
                                {socialLinks.map((socialLink, index) => (
                                    <img key={index} src={socialLink} alt="Social Link" className='object-cover' />
                                ))}
                            </li>
                        </ul>

                        <section className='grid grid-cols-3 col-span-7 gap-[43px]'>
                            {footerLinks.map((footerLink, index) => (
                                <div key={index} className='col-span-1 text-start'>
                                    <h2 className='text-white text-base font-light mb-[25px]'>{footerLink.title}</h2>
                                    <ul className='flex flex-col gap-y-[15px]'>
                                        {footerLink.links.map((link, index) => (
                                            <li key={index} className='text-white text-base font-normal'>{link}</li>
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
                                {paymentMethods.map((paymentMethod, index) => (
                                    <img key={index} src={paymentMethod} alt="Payment Method" className='object-cover' />
                                ))}
                            </div>
                        </section>
                    </section>



                    <section className='text-white text-base leading-[28px] font-normal border-y border-[#4E545F] py-2.5'>
                        <section className='xl:container xl:mx-auto flex items-center justify-between'>
                            <h2 className=''>Copyright © 2025 Welcome Cure Pvt. Ltd. | All Rights Reserved</h2>
                            <div>
                                <a href="/terms-of-use">Terms of Use</a>
                                <a href="/legal-declaimers" className='border-x border-[#4E545F] px-2.5 mx-2.5'>Legal Declaimers</a>
                                <a href="/privacy-policy">Privacy Policy</a>
                            </div>
                        </section>
                    </section>
                </section>

            </footer>
        </section>
    )
}

export default Footer