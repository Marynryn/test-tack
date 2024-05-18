import React from 'react';
import sprite from "../../svg/symbol-defs.svg"

const Card = ({ title, content, width, containerHeight, svgName, color }) => {

    return (
        <div className=' relative rounded-s  border-2 ' style={{
            borderColor: `${color}`, height: `${containerHeight}`, padding: "22px", minWidth: "260px", width: "424px"

        }}>
            <div className=" flex mb-6" >
                <svg className='fill-black mr-0 ml-auto' width={width} height={100} style={{ fill: `${color}` }}>
                    <use href={`${sprite}#${svgName}`} >
                    </use>
                </svg>
            </div>
            <div className="text-2xl  lg:text-4xl mb-6 mt-6" style={{ fontWeight: 600, lineHeight: 1.2, color: "#181833" }}>{title}</div>
            <div className=" font-normal" >
                <ul className='pl-4 lg:pl-8 list-disc '>
                    {content.map((item, index) => (
                        <li className=" mb-3  text-base lg:text-2xl pl-1" style={{ lineHeight: 1.5 }} key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="text-xl absolute lg:text-2xl  bottom-6  right-6 underline underline-offset-4  " style={{ lineHeight: 1.5 }}>
                <a href="/">View more</a>
            </div>

        </div >
    );
};



export default Card;
