import { Images } from '../../constants'

const solutions = [
    {
        title: 'Public Health',
        subtitle: 'Reduce stress and build resilience for medical professionals.',
        image: Images.HIGH_QUALITY_SOLUTION1.src
    },
    {
        title: 'Insurance',
        subtitle: 'Lower stress and enhance focus for teams handling high-pressure client needs.',
        image: Images.HIGH_QUALITY_SOLUTION2.src
    },
    {
        title: 'Travel & Hospitality',
        subtitle: 'Boost energy, reduce stress, and empower staff to deliver exceptional guest experiences.',
        image: Images.HIGH_QUALITY_SOLUTION3.src
    },
]

const HighQualitySolution = () => {
    return (
        <section className='bg-[#FAE00633] py-[91px] mt-[100px]'>
            <section className='xl:container xl:mx-auto px-2.5'>
                <h2 className='text-[40px] font-bold text-center text-black mb-[50px] leading-none Amiko-Bold'>High-quality solutions for these Industries</h2>

                <div className='grid grid-cols-12 gap-5'>
                    {solutions.map((solution, index) => (
                        <section key={index} className='rounded-[10px] overflow-hidden bg-white hover:bg-[#FDF39B] cursor-pointer col-span-4'>
                            <img src={solution.image} alt="Public Health" className='w-full h-[395px] object-cover' />
                            <div className='flex flex-col p-5'>
                                <h3 className='text-xl font-semibold text-black mb-[15px] leading-none'>{solution.title}</h3>
                                <p className='text-lg font-normal text-[#4E545F] leading-none'>{solution.subtitle}</p>
                            </div>
                        </section>
                    ))}
                </div>
            </section>
        </section>
    )
}

export default HighQualitySolution