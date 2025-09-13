interface hero {
    title: string;
    subtitle: string;
    backgroundImage: string;
    backgroundImageForMobile: string;
    primaryCta: string;
    primaryCtaUrl: string;
    secondaryCta: string;
    secondaryCtaUrl: string;
}

const HeroSection = ({hero}: {hero: hero}) => {
    return (
        <section className='relative'>
            <img src={hero.backgroundImage} alt="Hero" className='w-full h-screen object-cover hidden lg:block' />
            <img src={hero.backgroundImageForMobile} alt="Hero" className='w-full h-screen object-cover lg:hidden' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FAE006] to-[#000000] opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col text-center justify-center items-center'>
                <h1 className='text-white text-[32px] lg:text-[58px] font-bold Amiko-Bold max-w-xs lg:max-w-full'>{hero.title}</h1>
                <p className='text-white text-base lg:text-lg font-medium max-w-md lg:max-w-4xl text-center mt-[15px] mb-[25px]'>{hero.subtitle}</p>
                <div className='flex flex-col lg:flex-row gap-5 items-center font-normal text-base px-2.5 w-full sm:w-auto'>
                    {hero.primaryCta && (
                        <a href={hero.primaryCtaUrl} className='w-full sm:w-max bg-[#FAE006] hover:bg-[#FFF600] hover:shadow-sm rounded-md py-2 sm:px-[105px] lg:px-[21px] text-black transition-all duration-300'>{hero.primaryCta}</a>
                    )}
                    {hero.secondaryCta && (
                        <a href={hero.secondaryCtaUrl} className='w-full sm:w-max outline outline-[#FAE006] hover:bg-white hover:text-black hover:shadow-sm rounded-md py-2 sm:px-[98px] lg:px-[14px] text-white transition-all duration-300'>{hero.secondaryCta}</a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HeroSection