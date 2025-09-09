import { Images } from '../../constants'

const HighQualitySolution = ({ data }: { data: any }) => {
    if (!data) return null;
    return (
        <section className='bg-[#FAE00633] py-[91px] mt-[100px]'>
            <section className='xl:container xl:mx-auto px-2.5'>
                <h2 className='text-[40px] font-bold text-center text-black mb-[50px] leading-none Amiko-Bold'>{data.title}</h2>

                <section className="grid grid-cols-12 gap-5">
                    {data?.solutions.map((solution:any, index:number) => (
                        <section key={index} className="col-span-4 rounded-[10px] overflow-hidden bg-white group hover:bg-[#FDF39B] hover:shadow-md cursor-pointer transition-all duration-300">
                            <div className="curve-border">
                                <div className="curve-inner">
                                    <img src={solution.image} alt="Public Health" className='w-[413px]'/>
                                </div>
                            </div>
                            <div className="flex flex-col p-5">
                                <div className="flex items-center group-hover:justify-between gap-x-2.5 mb-[15px]">
                                    <h3 className="text-lg font-medium text-black leading-none">{solution.title}</h3>
                                    <img src={Images.ARROW_BLACK.src} alt="Arrow" className="w-5 h-2 transform transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                                <p className="text-lg font-normal text-[#4E545F]">{solution.subtitle}</p>
                            </div>
                        </section>
                    ))}
                </section>
            </section>
        </section>
    )
}

export default HighQualitySolution