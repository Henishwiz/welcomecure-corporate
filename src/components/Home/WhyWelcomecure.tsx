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
        <section className='xl:container xl:mx-auto py-[91px]'>
            <h2 className='text-[40px] font-bold text-center text-black mb-[13px] Amiko-Bold'>{data.title}</h2>
            <p className='text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[29px]'>{data.subtitle}</p>

            <section className='grid grid-cols-12 gap-[42px]'>
                <div className='col-span-6'>
                    <img src={data.image}
                        alt={data.title}
                        className='w-full h-[407px] object-cover rounded-[10px]' />
                </div>
                <div className='col-span-6'>
                    <h3 className='text-xl font-semibold text-black mb-[15px] leading-none mb-[11px]'>Transform Your Workplace with Proven Results</h3>
                    <p className='text-lg font-normal text-[#4E545F] mb-5'>Our comprehensive wellness programs are designed to create lasting change in your organization. From preventive health screenings to mental health support, we provide the tools and expertise to build a healthier, more productive workforce.</p>
                    <ul className='flex flex-col gap-y-5 mb-10'>
                        {data.features.map((feature, idx) => (
                            <li key={idx} className='flex items-center gap-x-2.5'>
                                <img src={feature.icon} alt="Arrow" className='w-6 h-6' />
                                {feature.text}
                            </li>
                        ))}
                    </ul>
                    <button className='bg-[#FAE006] rounded-md px-5 py-[11px] leading-none'>{data.ctaText}</button>
                </div>
            </section>
        </section>
    )
}

export default WhyWelcomecure