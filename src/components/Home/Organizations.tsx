import React from 'react'
import { Images } from '../../constants'

const organizations = [
    Images.ORGANIZATIONS_1.src,
    Images.ORGANIZATIONS_6.src,
    Images.ORGANIZATIONS_10.src,
    Images.ORGANIZATIONS_9.src,
    Images.ORGANIZATIONS_8.src,
    Images.ORGANIZATIONS_7.src,
    Images.ORGANIZATIONS_2.src,
    Images.ORGANIZATIONS_3.src,
    Images.ORGANIZATIONS_4.src,
    Images.ORGANIZATIONS_5.src,
    Images.ORGANIZATIONS_11.src,
    Images.ORGANIZATIONS_12.src,
    Images.ORGANIZATIONS_13.src,
    Images.ORGANIZATIONS_14.src,
    Images.ORGANIZATIONS_15.src,
    Images.ORGANIZATIONS_16.src,
    Images.ORGANIZATIONS_17.src,
    Images.ORGANIZATIONS_18.src,
    Images.ORGANIZATIONS_19.src,
    Images.ORGANIZATIONS_20.src,
]

const Organizations = () => {
    return (
        <section className='pt-[88px] xl:container xl:mx-auto px-2.5'>
            <h2 className='text-[40px] font-bold text-center text-black mb-[50px] Amiko-Bold'>Trusted by leading organizations everywhere</h2>


            <section className='grid grid-cols-12 gap-20'>
                {organizations.map((organization, index) => (
                    <div key={index} className='col-span-3'>
                        <img src={organization} alt="" className='w-[310px] object-cover' />
                    </div>
                ))}
            </section>
        </section>
    )
}

export default Organizations