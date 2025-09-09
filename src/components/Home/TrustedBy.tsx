const trustedByReviwes = [
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one yearThe ROI on our wellness program exceeded expect.”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    },
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded, The ROI on program ROI on program .”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    },
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded, The ROI on program ROI on programThe ROI on our wellness program exceeded, The ROI on program ROI on program exceeded, The ROI on program ROI on program we saved over $500K in healthcare .”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    },
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one yearThe ROI on our wellness program exceeded expect.”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    },
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded, The ROI on program ROI on programThe ROI on our wellness program exceeded, The ROI on program ROI on program exceeded, The ROI on program ROI on program we saved over $500K in healthcare we saved expectations, we saved over $500K.”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    },
    {
        review: "“The ROI on our wellness program exceeded expectations, we saved over $500K in healthcare costs in just one year, The ROI on our wellness program exceeded, The ROI on program ROI on program .”",
        name: "Emily Rodriguez",
        position: "People Operations Lead, GrowthLabs"
    }
]

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
        <section className='xl:container xl:mx-auto px-2.5'>
            <h2 className='text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold'>{data.title}</h2>
            <section className='flex justify-between items-center mb-[50px]'>
                {data.stats.map((item, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        <h3 className='text-[50px] font-bold text-black mb-2.5 leading-none'>{item.title}</h3>
                        <p className='text-lg font-normal text-[#4E545F] leading-5 max-w-[255px] text-center'>{item.subtitle}</p>
                    </div>
                ))}
            </section>

            <section className='columns-1 md:columns-2 lg:columns-3 gap-5'>
                {data.reviews?.map((item, index) => (
                    <div key={index} className='break-inside-avoid mb-5 bg-[#F4F4F4] p-5 rounded-[10px]'>
                        <h3 className='text-lg font-normal text-black'>{item.review}</h3>
                        <p className='text-lg font-medium text-black mt-5 mb-[5px] leading-none'>{item.name}</p>
                        <p className='text-sm font-normal text-[#4E545F]'>{item.position}</p>
                    </div>
                ))}
            </section>

        </section>
    )
}

export default TrustedBy