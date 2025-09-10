import { Images } from '../../constants'

interface whyWelcomecure {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    features: {
        icon: string;
        text: string;
    }[];
}

const WhyWelcomecure = ({ data }: { data: whyWelcomecure }) => {
    return (
        <section className='container mx-auto py-[70px] lg:py-[91px] px-2.5'>
            <h2 className='text-2xl lg:text-[40px] font-bold text-center text-black mb-5 lg:mb-[13px] Amiko-Bold'>{data.title}</h2>
            <p className='text-base lg:text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[15px] lg:mb-[29px]'>{data.subtitle}</p>

            <section className='grid lg:grid-cols-12 gap-[15px] lg:gap-[42px]'>
                <div className='lg:col-span-6'>
                    <img src={data.image}
                        alt={data.title}
                        className='w-full h-[242px] md:h-[407px] object-cover rounded-[10px]' />
                </div>
                <div className='lg:col-span-6'>
                    <h3 className='text-lg lg:text-xl font-semibold text-black mb-[15px] leading-none mb-2.5'>Transform Your Workplace with Proven Results</h3>
                    <p className='text-base lg:text-lg font-normal text-[#4E545F] mb-5'>Our comprehensive wellness programs are designed to create lasting change in your organization. From preventive health screenings to mental health support, we provide the tools and expertise to build a healthier, more productive workforce.</p>
                    <ul className='flex flex-col gap-y-[15px] lg:gap-y-5 mb-5 lg:mb-10 text-base font-normal text-black'>
                        {data.features.map((feature, idx) => (
                            <li key={idx} className='flex items-center gap-x-2.5'>
                                <img src={feature.icon} alt="Arrow" className='w-6 h-6' />
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <button className='bg-[#FAE006] cursor-pointer hover:bg-[#FFF600] hover:shadow-sm rounded-md px-5 py-[11px] leading-none transition-all duration-300'>{data.ctaText}</button>
                </div>
            </section>
        </section>
    )
}

export default WhyWelcomecure