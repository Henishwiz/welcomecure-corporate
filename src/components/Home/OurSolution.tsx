import { Images } from "../../constants"


const OurSolutions = ({ ourSolutions }: { ourSolutions: any }) => {
    return (
        <section className="py-[70px] lg:py-[100px]">
            <h2 className="text-2xl lg:text-[40px] font-bold text-center text-black mb-5 lg:mb-[50px] Amiko-Bold">
                {ourSolutions.title}
            </h2>

            <div className="grid lg:grid-cols-12 gap-[15px] lg:gap-5 container mx-auto items-stretch px-2.5">
                {/* left section */}
                <div className="order-2 lg:order-1 lg:col-span-5 grid grid-cols-2 grid-rows-2 gap-[15px] lg:gap-5 h-full">
                    {ourSolutions.leftSolutions?.map((item: any, i: number) => (
                        <div
                        key={i}
                        className={`relative rounded-[10px] overflow-hidden aspect-[1/1] lg:aspect-auto flex flex-col justify-end items-start group ${
                          item.highlight
                            ? "bg-[#FAE006] py-6 lg:py-[33px] pr-2.5 lg:pr-5"
                            : "h-full bg-cover bg-center"
                        }`}
                        style={
                          !item.highlight ? { backgroundImage: `url(${item.backgroundImage})` } : {}
                        }
                      >
                        {/* Hover gradient overlay */}
                        {!item.highlight && (
                          <div className="absolute inset-0 bg-gradient-to-b from-[#66666600]/70 to-[#1A1A1A]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        )}
                      
                        <h3
                          className={`relative z-10 text-base lg:text-lg font-semibold px-[5px] lg:px-[13px] ${
                            item.highlight ? "text-black pb-2" : "text-white py-6 lg:py-[33px]"
                          }`}
                        >
                          {item.title}
                        </h3>
                      
                        {item.highlight && <p className="border-b border-black h-[1px] w-full" />}
                      </div>
                      
                    ))}
                </div>

                {/* right section */}
                <div className="order-1 lg:order-2 lg:col-span-7 relative overflow-hidden rounded-[10px] h-full">
                    <img
                        src={ourSolutions.rightImage}
                        alt="Big Solution"
                        className="h-[336px] md:h-full w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#FAE006] to-[#000000] opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-2.5 lg:p-5">
                        <div className="flex flex-wrap gap-2.5">
                            {ourSolutions.solutionsList.map((solution: any, index: number) => (
                                <h3
                                    key={index}
                                    className="group flex items-center gap-x-2.5 text-white text-base lg:text-lg font-medium bg-[#0000004D] hover:bg-[#FAE006]/40 p-[5px] lg:p-2.5 rounded-[6px] lg:rounded-[12px] hover:outline hover:outline-[#FAE006] cursor-pointer"
                                >
                                    {solution.label}
                                    <img
                                        src={Images.ARROW_WHITE.src}
                                        alt="Arrow"
                                        className="w-4 h-2 hidden group-hover:block duration-300"
                                    />
                                </h3>
                            ))}
                        </div>

                        <hr className="w-full border-t border-white my-2.5 lg:my-[15px]" />
                        <div className="flex gap-x-2.5 items-center font-medium text-lg">
                            <button className="bg-[#FAE006] cursor-pointer hover:bg-[#FFF600] hover:shadow-sm rounded-md py-1.5 px-5 text-black flex items-center gap-x-2.5 transition-all duration-300">
                                {ourSolutions.ctaText}
                                <img
                                    src={Images.ARROW_BLACK.src}
                                    alt="Arrow"
                                    className="w-4 h-2"
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurSolutions