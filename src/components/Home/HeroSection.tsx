import { Images } from '../../constants'

interface hero {
    title: string;
    subtitle: string;
    backgroundImage: string;
    primaryCta: string;
    primaryCtaUrl: string;
    secondaryCta: string;
    secondaryCtaUrl: string;
}

const HeroSection = ({hero}: {hero: hero}) => {
    return (
        <section className='relative'>
            <img src={hero.backgroundImage} alt="Hero" className='w-full h-screen object-cover' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FAE006] to-[#000000] opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl lg:text-[58px] font-bold Amiko-Bold'>{hero.title}</h1>
                <p className='text-white text-xs lg:text-lg font-medium max-w-md lg:max-w-4xl text-center mt-[15px] mb-[25px]'>{hero.subtitle}</p>
                <div className='flex gap-x-2.5 items-center font-normal text-base'>
                    {hero.primaryCta && (
                        <a href={hero.primaryCtaUrl} className='bg-[#FAE006] rounded-md p-2.5 text-black leading-none '>{hero.primaryCta}</a>
                    )}
                    {hero.secondaryCta && (
                        <a href={hero.secondaryCtaUrl} className='outline outline-[#FAE006] rounded-md p-2.5 text-white leading-none'>{hero.secondaryCta}</a>
                    )}
                </div>
            </div>
        </section>
    )
}

export default HeroSection