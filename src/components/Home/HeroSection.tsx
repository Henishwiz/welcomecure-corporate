import { Images } from '../../constants'

const HeroSection = () => {
    return (
        <section className='relative'>
            <img src={Images.MAIN_BANNER.src} alt="Hero" className='w-full h-screen object-cover' />
            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#FAE006] to-[#000000] opacity-50'></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center'>
                <h1 className='text-white text-4xl lg:text-[58px] font-bold Amiko-Bold'>Empowering Corporate Wellness</h1>
                <p className='text-white text-xs lg:text-lg font-medium max-w-md lg:max-w-4xl text-center mt-[15px] mb-[25px]'>Welcome Cure delivers tailored wellness solutions that reduce absenteeism, boost productivity, and promote long-term health, all backed by proven homeopathy expertise.</p>
                <div className='flex gap-x-2.5 items-center font-normal text-base'>
                    <button className='bg-[#FAE006] rounded-md p-2.5 text-black leading-none'>Talk to an Expert</button>
                    <button className='outline outline-[#FAE006] rounded-md p-2.5 text-white leading-none'>View our Solutions</button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection