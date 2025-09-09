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
        <section className="bg-[#FAE006] py-[88px]">
            <h2 className='text-[40px] font-bold text-center text-black mb-5 leading-none Amiko-Bold'>{title}</h2>
            <p className='text-lg font-medium text-[#4E545F] text-center max-w-[566px] mx-auto mb-[50px] leading-none'>{subtitle}</p>

            <section className="flex gap-5 xl:container xl:mx-auto">
                {items.map((caseStudy: any, index: any) => (
                    <section key={index} className="rounded-[10px] overflow-hidden bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer col-span-4 transition-all duration-300">
                        <div className="curve-border">
                            <div className="curve-inner">
                                <img src={caseStudy.image} alt={caseStudy.title} />
                            </div>
                        </div>
                        <div className="flex flex-col p-5">
                            <div className="flex items-center group-hover:justify-between gap-x-2.5">
                                <h3 className="text-lg font-medium text-black leading-none">{caseStudy.title}</h3>
                                <img src={Images.ARROW_BLACK.src} alt="Arrow" className="w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                            </div>
                            <p className="text-xl font-semibold text-black leading-[26px] mt-[25px] mb-[15px]">{caseStudy.description}</p>
                            <div className="flex items-center gap-x-2.5">
                                <p className="text-base font-normal text-[#4E545F] leading-none">{caseStudy.publishDate}</p>
                                <p className="text-base font-normal text-[#4E545F] leading-none">{caseStudy.publishBy}</p>
                            </div>
                        </div>
                    </section>
                ))}
            </section>
        </section>
    )
}

export default CaseStudies