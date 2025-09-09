type organizations = {
    title: string;
    logos: {
        src: string;
    }[];
}

const Organizations = ({ organizations }: { organizations: organizations }) => {
    return (
        <section className='pt-[88px] xl:container xl:mx-auto px-2.5'>
            <h2 className='text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold'>{organizations.title}</h2>


            <section className='grid grid-cols-12 gap-20'>
                {organizations.logos?.map((org, index) => (
                    <div key={index} className='col-span-3'>
                        <img src={org.src} alt="" className='w-[310px] object-cover' />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Organizations