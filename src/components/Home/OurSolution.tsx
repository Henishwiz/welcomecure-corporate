import { Images } from "../../constants"


const OurSolutions = ({ ourSolutions }: { ourSolutions: any }) => {
    return (
        <section className="py-[100px]">
            <h2 className="text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold">
                {ourSolutions.title}
            </h2>

            <div className="grid grid-cols-12 gap-5 xl:container xl:mx-auto items-stretch px-2.5">
                {/* left section */}
                <div className="col-span-5 grid grid-cols-2 grid-rows-2 gap-5 h-full">
                    {ourSolutions.leftSolutions?.map((item: any, i: number) => (
                        <div
                            key={i}
                            className={`rounded-[10px] overflow-hidden flex flex-col justify-end items-start ${item.highlight
                                    ? "bg-[#FAE006] py-[33px] pr-5"
                                    : "h-full bg-cover bg-center"
                                }`}
                            style={
                                !item.highlight
                                    ? { backgroundImage: `url(${item.backgroundImage})` }
                                    : {}
                            }
                        >
                            <h3
                                className={`text-lg font-semibold px-[13px] ${item.highlight ? "text-black pb-2" : "text-white py-[33px]"
                                    }`}
                            >
                                {item.title}
                            </h3>
                            {item.highlight && <p className="border-b border-black h-[1px] w-full" />}
                        </div>
                    ))}
                </div>


                {/* right section */}
                <div className="col-span-7 relative overflow-hidden rounded-[10px] h-full">
                    <img
                        src={ourSolutions.rightImage}
                        alt="Big Solution"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#FAE006] to-[#000000] opacity-50"></div>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-end items-start p-5">
                        <div className="flex flex-wrap gap-2.5">
                            {ourSolutions.solutionsList.map((solution: any, index: number) => (
                                <h3
                                    key={index}
                                    className="group flex items-center gap-x-2.5 text-white text-lg font-medium bg-[#0000004D] hover:bg-[#FAE006]/40 p-2.5 rounded-[12px] hover:outline hover:outline-[#FAE006] cursor-pointer"
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

                        <hr className="w-full border-t border-white my-[15px]" />
                        <div className="flex gap-x-2.5 items-center font-medium text-lg">
                            <button className="bg-[#FAE006] rounded-md py-2 px-5 text-black flex items-center gap-x-2.5">
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