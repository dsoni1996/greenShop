import React, { useEffect, useState } from "react";
import Image from "next/image";

export const imageData = [
    {
        imageSrc: '/img_lights_wide.jpg'
    },
    {
        imageSrc: '/img_mountains_wide.jpg'
    },
    {
        imageSrc: '/img_nature_wide.jpg'
    },
    {
        imageSrc: '/img_snow_wide.jpg'
    }

]
const SlideShow = () => {
    const [ActiveSlide, setActiveSlide] = useState<number>(0)
    const [timerId, setTimerID] = useState(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            onSlideChange(ActiveSlide + 1)
        }, 4000);
       
        setTimerID(timer)

        return () => {
            if (timerId) {
                clearTimeout(timerId);
            }
        };
    }, [ActiveSlide])

    const handleMouseEnter = () => {
        clearTimeout(timerId);
    };

    const handleMouseLeave = () => {
        // Resume the timer when the mouse leaves the slider
        const timer = setTimeout(() => {
            onSlideChange(ActiveSlide + 1)
        }, 500);
        setTimerID(timer);
    };

    const onSlideChange = (currentSlideIndex: number) => {
        console.log(ActiveSlide, 'activeslide')
        const totalSlde = imageData.length - 1
        let nextSlide;
        if (currentSlideIndex > totalSlde) {
            nextSlide = 0
        }
        else if (currentSlideIndex < 0) {
            nextSlide = totalSlde
        }
        else {
            nextSlide = currentSlideIndex
        }
        setActiveSlide(nextSlide)
    }


    return (
        <>
            <div style={{ position: 'relative', overflow: "hidden", height: '400px', cursor: 'pointer'}} onMouseOver={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                <div style={{ display: 'flex' }}>
                    {
                        imageData.length > 0 ? imageData.map((item, index) => {
                            return (
                                <div key={index} style={{ flexShrink: 0, width: '100%' }} >
                                    {/* {item.imageSrc} */}
                                    <img
                                        src={item.imageSrc}
                                        alt="Picture of the author"
                                        style={{
                                            transition: 'transform 3s ease-in-out',
                                            transform: `translate(${-100 * ActiveSlide}%)`,
                                            width: '100%',
                                            objectFit: 'contain',
                                            maxWidth: '100%'

                                        }}

                                    />
                                </div>
                            )
                        }) : null
                    }
                </div>
                <span className="material-symbols-outlined"
                    style={{ position: 'absolute', left: 30, zIndex: 3, transform: 'translate(50%,50%)', top: '0px', bottom: '0px' }}
                    onClick={() => onSlideChange(ActiveSlide - 1)}>
                    &#10094;
                </span>
                <span
                    style={{ position: 'absolute', right: 40, zIndex: 3, transform: 'translate(50%,50%)', top: '0px', bottom: '0px' }}
                    onClick={() => onSlideChange(ActiveSlide + 1)}>
                    &#10095;
                </span>
            </div>

        </>
    )
}

export default SlideShow;