
interface trustedBy {
    title: string;
    stats: {
        title: string;
        subtitle: string;
    }[];
    reviews: {
        review: string;
        name: string;
        position: string;
    }[];
}

const TrustedBy = ({ data }: { data: trustedBy }) => {
    return (
        <section className='container mx-auto px-2.5'>
            <h2 className='text-2xl lg:text-[40px] font-bold text-center text-black mb-5 lg:mb-[50px] Amiko-Bold'>{data.title}</h2>
            <section className='grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 lg:gap-y-0 lg:gap-5 items-center mb-5 lg:mb-[50px]'>
                {data.stats.map((item, index) => (
                    <div key={index} className='col-span-1 flex flex-col items-center'>
                        <h3 className='text-[32px] lg:text-[50px] font-bold text-black mb-2.5 leading-none'>{item.title}</h3>
                        <p className='text-base lg:text-lg font-normal text-[#4E545F] leading-5 max-w-[255px] text-center'>{item.subtitle}</p>
                    </div>
                ))}
            </section>

            <section className='columns-1 md:columns-2 lg:columns-3 gap-5'>
                {data.reviews?.map((item, index) => (
                    <div key={index} className='break-inside-avoid mb-5 bg-[#F4F4F4] p-2.5 lg:p-5 rounded-[10px]'>
                        <h3 className='text-base lg:text-lg font-normal text-black'>{item.review}</h3>
                        <p className='text-base lg:text-lg font-medium text-black mt-5 mb-[5px] leading-none'>{item.name}</p>
                        <p className='text-sm font-normal text-[#4E545F]'>{item.position}</p>
                    </div>
                ))}
            </section>

        </section>
    )
}

export default TrustedBy