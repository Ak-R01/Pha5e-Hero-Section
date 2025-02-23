import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect, useState } from "react"
import "./Hero.css"
import React from "react"

const thumbnails = [
    {
        id: 1,
        src: "src/assets/img1.png",
        alt: "Thumbnail 1",
        top: "50px",
        left: "",
        right: "20%",
        text: "MUCEM",
    },
    {
        id: 2,
        src: "src/assets/img2.png",
        alt: "Thumbnail 2",
        top: "120px",
        text: "img 1",
        left: "15%",
    },
    {
        id: 3,
        src: "src/assets/img4.jpg",
        alt: "Thumbnail 3",
        top: "350px",
        left: "",
        text: "img 1",
        right: "15%",
    },
    {
        id: 4,
        src: "src/assets/img3.png",
        alt: "Thumbnail 4",
        top: "450px",
        text: "img 1",
        left: "20%",
    },
]
const Hero = () => {
    const wrapperRefs = useRef([])
    const imageRefs = useRef([])
    const [fillColor, setfillColor] = useState("white")
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const [imageZ, setimageZ] = useState(0)

    const handleMouseEnter = (index) => setHoveredIndex(index)

    const handleMouseMove = (index, e) => {
        const wrapper = wrapperRefs.current[index]
        const image = imageRefs.current[index]

        if (!wrapper || !image) return

        const { left, top, width, height } = wrapper.getBoundingClientRect()
        const x = e.clientX - left - width / 2
        const y = e.clientY - top - height / 2
        setfillColor("#212121")
        gsap.to(image, {
            x,
            y,
            duration: 0.5,
            ease: "power2.out",
        })
    }

    const handleMouseLeave = (index) => {
        const image = imageRefs.current[index]
        if (!image) return
        gsap.to(image, {
            x: 0,
            y: 0,
            ease: "power2.out",
            duration: 0.5,
            onComplete: () => setHoveredIndex(null),
        })
        setfillColor("white")
    }

    return (
        <div class="bg-midnight relative flex justify-center">
            <div className="heroThumbnails bg-midnight flex flex-col gap-4">
                {thumbnails.map((thumb, index) => (
                    <div
                        key={thumb.id}
                        ref={(el) => (wrapperRefs.current[index] = el)}
                        className="thumbnailWrapper w-100 h-60 relative  "
                        style={{
                            position: "absolute",
                            top: thumb.top,
                            left: thumb.left,
                            right: thumb.right,
                            bottom: thumb.bottom,
                        }}
                        onMouseMove={(e) => handleMouseMove(index, e)}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        {hoveredIndex === index ? (
                            <div
                                className={`relative ${
                                    hoveredIndex === index ? "z-98" : "z-0"
                                }`}
                                ref={(el) => (imageRefs.current[index] = el)}
                            >
                                <img
                                    src={thumb.src}
                                    alt=""
                                    className={`absolute left-0 top-0 pointer-events-none transition-transform duration-200 ease-out ${
                                        hoveredIndex !== null &&
                                        hoveredIndex !== index
                                            ? "opacity-0"
                                            : "opacity-100"
                                    } `}
                                />
                                <span
                                    className={`absolute left-90 top-40 bg-black text-white text-sm px-2 py-1 rounded transition-opacity duration-300 z-99 ${
                                        hoveredIndex === index
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    {thumb.text}
                                </span>
                            </div>
                        ) : hoveredIndex !== null ? (
                            <div className="w-full h-full relative border-2 border-[#444444] ">
                                <div className="absolute w-full h-full border-1 border-[#444444]"></div>
                                <div className="absolute w-full h-full top-[50%]">
                                    <div className="absolute top-0 left-0 w-full h-[2px] bg-[#444444] rotate-30"></div>
                                    <div className="absolute top-0 right-0 w-full h-[2px] bg-[#444444] -rotate-30"></div>
                                </div>
                            </div>
                        ) : (
                            <img
                                src={thumb.src}
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        )}
                    </div>
                ))}
            </div>
            <svg
                className="outlined-text thumbnails-hero__title absolute pointer-events-none z-0 top-20  font-sans text-9xl w-full pointer-events-none"
                height="510"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                spacing="133"
                data-v-a2054a92=""
            >
                <text class="w-full" transform="">
                    <tspan
                        x="50%"
                        y="110"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
                            fill: fillColor,
                            opacity: 1,
                            visibility: "inherit",
                            strokeDashoffset: 0,
                            stroke: "#444444",
                            strokeWidth: "1px",
                            fontWeight: "950",
                            fontSize: "150px",
                        }}
                    >
                        IMAGINING
                    </tspan>
                    <tspan
                        x="50%"
                        y="210"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
                            fill: fillColor,
                            opacity: 1,
                            visibility: "inherit",
                            strokeDashoffset: 0,
                            stroke: "#444444",
                            strokeWidth: "1px",
                            fontWeight: "950",
                        }}
                    >
                        UNIQUE
                    </tspan>
                    <tspan
                        x="50%"
                        y="320"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
                            fill: fillColor,
                            opacity: 1,
                            visibility: "inherit",
                            strokeDashoffset: 0,
                            stroke: "#444444",
                            strokeWidth: "1px",
                            fontWeight: "950",
                        }}
                    >
                        CONCEPTS
                    </tspan>
                    <tspan
                        x="50%"
                        y="415"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
                            fill: fillColor,
                            opacity: 1,
                            visibility: "inherit",
                            strokeDashoffset: 0,
                            stroke: "#444444",
                            strokeWidth: "1px",
                            fontWeight: "950",
                        }}
                    >
                        AND DIGITAL
                    </tspan>
                    <tspan
                        x="50%"
                        y="510"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
                            fill: fillColor,
                            opacity: 1,
                            visibility: "inherit",
                            strokeDashoffset: 0,
                            stroke: "#444444",
                            strokeWidth: "1px",
                            fontWeight: "950",
                        }}
                    >
                        EXPERIENCES
                    </tspan>
                </text>
            </svg>
        </div>
    )
}

export default Hero
