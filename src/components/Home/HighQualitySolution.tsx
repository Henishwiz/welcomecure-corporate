import { Images } from '../../constants'

export interface Solution {
    image: string;
    title: string;
    subtitle: string;
}

export interface SolutionsConfig {
    title: string;
    solutions: Solution[];
}


const HighQualitySolution = ({ data }: { data: SolutionsConfig }) => {
    if (!data) return null;
    return (
        <section className='bg-[#FAE00633] py-[50px] lg:py-[91px] mt-[70px] lg:mt-[100px]'>
            <section className='container mx-auto px-4'>
                <h2 className='text-2xl lg:text-[40px] font-bold text-center text-black mb-5 lg:mb-[50px] Amiko-Bold'>{data.title}</h2>

                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:gap-5">
                    {data?.solutions.map((solution: Solution, index: number) => (
                        <section key={index} className="overflow-hidden sm:max-w-[361px] md:max-w-none sm:mx-auto lg:mx-0 rounded-[10px] bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer transition-all duration-300">
                            <div className="curve-border">
                                <img src={solution.image} alt="Public Health" className="w-full curve-inner object-cover h-[315px] lg:h-[255px] xl:h-[395px]" />
                            </div>
                            <div className="flex flex-col p-2.5 lg:p-5">
                                <div className="flex items-center group-hover:justify-between gap-x-2.5 mb-[15px]">
                                    <h3 className="text-lg lg:text-xl font-semibold text-black leading-none">{solution.title}</h3>
                                    <img src={Images.ARROW_BLACK.src} alt="Arrow" className="w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                                <p className="text-base lg:text-lg font-normal text-[#4E545F]">{solution.subtitle}</p>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default HighQualitySolution