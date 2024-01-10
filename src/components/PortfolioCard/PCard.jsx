import './PCard.css'
import React from 'react'

const PCard = ({n}) => {
    return (
        <div className="C_content">
            <div className="img-cont">
                <img src={n} alt="" />
            </div>
            <div className="body">
                <h3>
                    عنوان
                </h3>
                <span>
                    HTML \ Css / JS
                </span>
            </div>
            <div className="Foot">
                <a href="">
                    نمایش
                </a>
                <a href="">
                    سورس کد
                </a>
            </div>
        </div>
    )
}

export default PCard