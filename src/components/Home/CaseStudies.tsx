import { Images } from "../../constants";

const caseStudies = [
    {
        image: Images.CASE_STUDIES_1.src,
        title: "Client Success Story",
        description: "Elevating Employee Happiness Through Wellness Strategies",
        publishDate: "Aug-05-2025",
        publishBy: "By Welcomecure"
    },
    {
        image: Images.CASE_STUDIES_2.src,
        title: "Client Success Story",
        description: "Elevating Employee Happiness Through Wellness Strategies",
        publishDate: "Aug-05-2025",
        publishBy: "By Welcomecure"
    },
    {
        image: Images.CASE_STUDIES_3.src,
        title: "Guide",
        description: "Elevating Employee Happiness Through Wellness Strategies",
        publishDate: "Aug-05-2025",
        publishBy: "By Welcomecure"
    },
]


const CaseStudies = () => {
    return (
        <section className="bg-[#FAE006] py-[88px]">
            <h2 className='text-[40px] font-bold text-center text-black mb-5 leading-none Amiko-Bold'>Case Studies & Client  Success Stories</h2>
            <p className='text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[50px] leading-none'>Transforming Workplaces Through Proven Wellness Solutions</p>

            <section className="flex gap-5 xl:container xl:mx-auto">
                {caseStudies.map((caseStudy, index) => (
                    <section key={index} className='rounded-[10px] overflow-hidden bg-white hover:bg-[#FDF39B] cursor-pointer col-span-4'>
                        <div className="relative clip-curve-top ">
                            <img src={caseStudy.image} alt="Public Health" className='w-full h-[395px] object-cover' />
                        </div>
                        <div className='flex flex-col p-5'>
                            <h3 className='text-lg font-medium text-black leading-none'>{caseStudy.title}</h3>
                            <p className='text-xl font-semibold text-black leading-none mt-[25px] mb-[15px]'>{caseStudy.description}</p>
                            <div className='flex items-center gap-x-2.5'>
                                <p className='text-base font-normal text-[#4E545F] leading-none'>{caseStudy.publishDate}</p>
                                <p className='text-base font-normal text-[#4E545F] leading-none'>{caseStudy.publishBy}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default CaseStudies