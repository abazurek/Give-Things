import React from "react";

import decoration from './../../../assets/Decoration.svg'
import signature from './../../../assets/Signature.svg'

export default function AboutUs() {

    return (
        <section id='about-us' className='aboutUsSection'>
            <div className=' aboutUs-textBox'>
                <div className='text'>
                    <h2>O nas</h2>
                    <img src={decoration} alt='decoration icon'/>
                    <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery.
                        Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
                    <div className='signatureBox'>
                        <img src={signature} alt='signature icon'/>
                    </div>
                </div>

            </div>
            <div className='imgBox'/>
        </section>
    )
}