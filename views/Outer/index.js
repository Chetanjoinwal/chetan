import React from 'react'
import Gooery from '../../components/GooeryAnimation'
import DecryptText from '../../components/DecryptText'
import PropTypes from 'prop-types'
import Image from 'next/image';


const Outer = ({ data: {
    title1,
    title2,
    decrypTexts,
    desciption,
    button,
    profile
} }) => {
    return (
        <div className='ai-outer'>
            <div className='container'>
                <div className='ai-outer-container d-flex flex-wrap justify-content-between align-items-center'>
                    <div className='ai-outer-text'>
                        <div className='ai-outer-heading'>
                            {title1}
                        </div>
                        <div className='ai-outer-heading'>
                            {title2}
                        </div>
                        <div className='ai-outer-heading2'>
                            <DecryptText
                                values={decrypTexts}
                            />
                        </div>
                        <div className='ai-outer-description'>
                            {desciption}
                        </div>
                        <div className='ai-outer-contact'>
                            <button onClick={button?.onClick} className='ai-button'>
                                {button?.label}
                            </button>
                        </div>
 
                        
                    </div>
                        <div className='ai-outer-image myImage'> 
                               <Image width={350} height={500} src={profile.src} alt={profile.alt} />
                                </div>
                    <div className='ai-outer-gooery'>
                        <Gooery />
                    </div>
                </div>
            </div>
        </div>
    )
}

Outer.propTypes = {}

export default Outer