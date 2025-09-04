import { Images } from '../../constants'

const WhyWelcomecure = () => {
    return (
        <section className='xl:container xl:mx-auto py-[91px]'>
            <h2 className='text-[40px] font-bold text-center text-black mb-[13px] Amiko-Bold'>Why Welcomecure?</h2>
            <p className='text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[29px]'>Investing in employee wellness isn't just the right thing to do it's a smart business decision that delivers measurable results.</p>

            <section className='grid grid-cols-12 gap-[42px]'>
                <div className='col-span-6'>
                    <img src={Images.WHY_WELCOME_CURE.src} alt="Why Welcomecure" className='w-full h-[407px] object-cover rounded-[10px]' />
                </div>
                <div className='col-span-6'>
                    <h3 className='text-xl font-semibold text-black mb-[15px] leading-none mb-[11px]'>Transform Your Workplace with Proven Results</h3>
                    <p className='text-lg font-normal text-[#4E545F] mb-5'>Our comprehensive wellness programs are designed to create lasting change in your organization. From preventive health screenings to mental health support, we provide the tools and expertise to build a healthier, more productive workforce.</p>
                    <ul className='flex flex-col gap-y-5 mb-10'>
                        <li className='flex items-center gap-x-2.5'><img src={Images.VECTOR_1.src} alt="Arrow" className='w-6 h-6' /> Reduce absenteeism by up to 40%</li>
                        <li className='flex items-center gap-x-2.5'><img src={Images.VECTOR_2.src} alt="Arrow" className='w-6 h-6' /> Improve productivity and employee engagement</li>
                        <li className='flex items-center gap-x-2.5'><img src={Images.VECTOR_3.src} alt="Arrow" className='w-6 h-6' /> Strengthen company culture and retention</li>
                        <li className='flex items-center gap-x-2.5'><img src={Images.VECTOR_4.src} alt="Arrow" className='w-6 h-6' /> Save on healthcare costs and insurance premiums</li>
                    </ul>
                    <button className='bg-[#FAE006] rounded-md px-5 py-[11px] leading-none'>Start Now and see our Impact</button>
                </div>
            </section>

        </section>
    )
}

export default WhyWelcomecure