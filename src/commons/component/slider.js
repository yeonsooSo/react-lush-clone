import "../../assets/slider.css";
import React, { useState } from "react";
import DataSlider from "../data/data_slider";

function Slider(){
    const [slideIdx, setSlideIdx] = useState(1);

    const moveDot = idx => {
        setSlideIdx(idx);
    }


    return (
        <div className="slider">
            { DataSlider.map((obj, idx) => {
                return (
                    <div key={obj.id} className={slideIdx === idx + 1 ? 'active-animation' : 'slide' }>
                        <img src={process.env.PUBLIC_URL + `/Imgs/img${idx + 1}.jpg`} />
                    </div>
                )
            })}
        <div className="dots">
            {Array.from({ length: 4}).map((item, idx)=>(
                <div onClick = {() => {
                    moveDot(idx + 1);
                }}
                    className={slideIdx === idx + 1 ? "dot active" : "dot"}>
                </div>
            ))}
        </div>
        </div>
    );
}

export default Slider;