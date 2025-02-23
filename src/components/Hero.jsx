import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef, useEffect, useState } from "react"
import "./Hero.css"
import React from "react"

const thumbnails = [
    {
        id: 1,
        src: "/assets/img1.png",
        alt: "Thumbnail 1",
        top: "50px",
        left: "",
        right: "20%",
        head: "MUCEM",
        text: "Experimental Website",
    },
    {
        id: 2,
        src: "assets/img2.png",
        alt: "Thumbnail 2",
        top: "120px",
        left: "15%",
        head: "BIGGER SCIENCE",
        text: "Immersive Experience / WebGL / Gaming",
    },
    {
        id: 3,
        src: "assets/img4.jpg",
        alt: "Thumbnail 3",
        top: "350px",
        left: "",
        right: "15%",
        head: "OLIVE TREE",
        text: "Interactive Installation / Real Time",
    },
    {
        id: 4,
        src: "assets/img3.png",
        alt: "Thumbnail 4",
        top: "450px",
        left: "20%",
        head: "UNGANISHA",
        text: "Experimental Website / WebGL / 3D",
    },
]
const Hero = () => {
    const wrapperRefs = useRef([])
    const imageRefs = useRef([])
    const textRef = useRef()
    const [hoveredIndex, setHoveredIndex] = useState(null)

    const handleMouseEnter = (index) => setHoveredIndex(index)

    const handleMouseMove = (index, e) => {
        const wrapper = wrapperRefs.current[index]
        const image = imageRefs.current[index]

        if (!wrapper || !image) return

        const { left, top, width, height } = wrapper.getBoundingClientRect()
        const x = e.clientX - left - width / 2
        const y = e.clientY - top - height / 2
        // setfillColor("#212121")
        gsap.to(image, {
            x,
            y,
            duration: 0.5,
            ease: "power2.out",
        })
        const text = textRef.current
        gsap.to(text, {
            fill: "#212121",
            duration: 0.2,
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
        const text = textRef.current
        console.log(textRef)
        gsap.to(text, {
            fill: "white",
            duration: 0.2,
        })
        // setfillColor("white")
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
                                    className={`absolute left-90 top-40 text-white px-2 py-1 rounded transition-opacity duration-300 z-99 pointer-events-none${
                                        hoveredIndex === index
                                            ? "opacity-100"
                                            : "opacity-0"
                                    }`}
                                >
                                    <h1 class="text-wrap text-5xl font-extrabold">
                                        {thumb.head}
                                    </h1>
                                    <p class="text-nowrap text-md">
                                        {thumb.text}
                                    </p>
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
                <text
                    ref={textRef}
                    style={{ fill: "white" }}
                    class="w-full"
                    transform=""
                >
                    <tspan
                        x="50%"
                        y="110"
                        textAnchor="middle"
                        alignmentBaseline="top"
                        style={{
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
