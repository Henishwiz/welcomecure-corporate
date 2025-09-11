type organizations = {
    title: string;
    logos: {
        src: string;
    }[];
}

const Organizations = ({ organizations }: { organizations: organizations }) => {
    return (
        <section className='pt-[70px] lg:pt-[88px] flex flex-col items-center container mx-auto px-2.5'>
            <h2 className='text-2xl lg:text-[40px] font-bold text-center text-black mb-5 lg:mb-[50px] Amiko-Bold max-w-xl'>{organizations.title}</h2>


            <section className='grid grid-cols-3 lg:grid-cols-12 gap-6 lg:gap-20 justify-between'>
                {organizations.logos?.map((org, index) => (
                    <div key={index} className='col-span-1 lg:col-span-3 flex items-center justify-center'>
                        <img src={org.src} alt={'Organization'} className='w-[110px] md:w-[150px] lg:w-[290px] object-cover' />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Organizations