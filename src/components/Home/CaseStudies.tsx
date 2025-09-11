import { Images } from "../../constants";

interface CaseStudyItem {
    title: string;
    description: string;
    publishDate: string;
    publishBy: string;
    image: string;
}

interface CaseStudiesProps {
    title: string;
    subtitle: string;
    items: CaseStudyItem[];
}

const CaseStudies = ({ title, subtitle, items }: CaseStudiesProps) => {
    return (
        <section className="bg-[#FAE006] py-[50px] lg:py-[88px] px-2.5">
            <h2 className='text-2xl lg:text-[40px] font-bold text-center text-black mb-5 Amiko-Bold'>{title}</h2>
            <p className='text-base lg:text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[50px] lg:mb-[50px] leading-none'>{subtitle}</p>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-5 container mx-auto">
                {items.map((caseStudy: any, index: any) => (
                    <section key={index} className="rounded-[10px] sm:max-w-[361px] md:max-w-none sm:mx-auto lg:mx-0 overflow-hidden bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer transition-all duration-300">
                        <div className="curve-border">
                            <img src={caseStudy.image} alt={caseStudy.title} className="w-full curve-inner object-cover h-[315px] lg:h-[255px] xl:h-[395px]" />
                        </div>
                        <div className="flex flex-col p-2.5 lg:p-5">
                            <div className="flex items-center group-hover:justify-between gap-x-2.5">
                                <h3 className="text-base lg:text-lg font-medium text-black leading-none">{caseStudy.title}</h3>
                                <img src={Images.ARROW_BLACK.src} alt="Arrow" className="w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                            </div>
                            <p className="text-lg lg:text-xl font-semibold text-black leading-[26px] mt-[15px] lg:mt-[25px] mb-[15px]">{caseStudy.description}</p>
                            <div className="flex items-center gap-x-2.5">
                                <p className="text-sm lg:text-base font-normal text-[#4E545F] leading-none">{caseStudy.publishDate}</p>
                                <p className="text-sm lg:text-base font-normal text-[#4E545F] leading-none">{caseStudy.publishBy}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default CaseStudies