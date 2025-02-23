import React from "react"
const Header = () => {
    return (
        <div class="flex justify-items-start bg-midnight text-white items-center  p-5 text-md w-full">
            <div class="h-10 w-[123px]">
                <img
                    src="https://2022-pha5e-website-prod.s3.eu-west-3.amazonaws.com/assets/logo.svg"
                    alt="PHA5E Logo"
                    className="w-full h-full" // Ensures the width is fixed while maintaining aspect ratio
                />
            </div>

            <div class="flex grow w-[50%] gap-10  justify-end items-center text-nowrap">
                <div class="">Our vision</div>
                <div>Our Team</div>
                <div>Our Projects</div>
                <div>Contact us</div>
                <div>FR/EN</div>
            </div>
        </div>
    )
}

export default Header
