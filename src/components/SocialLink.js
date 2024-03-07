import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLink = () => {
    const links = [
        {
            id: 1,
            child: (
                <>Linkedin<FaLinkedin size={30} /></>
            ),
            href: "https://linkedin.com",
            style: "rounded-br-md"
        },
        {
            id: 2,
            child: (
                <>Gmail<HiOutlineMail size={30} /></>
            ),
            href: "mailto:foo@gmail.com",
            style: "rounded-br-md"
        },
        {
            id: 3,
            child: (
                <>Github<FaGithub size={30} /></>
            ),
            href: "https://github.com",
            style: "rounded-br-md"
        },
        {
            id: 4,
            child: (
                <>Resume<BsFillPersonLinesFill size={30} /></>
            ),
            href: "/resume.pdf",
            style: "rounded-br-md"
        },
    ]
    return (
        <div className='hidden lg:flex  flex-col top-[35%] fixed'>
            <ul>
                {links.map(({ id, child, href }) => (
                    <li key={id} className='flex justify-between items-center w-40 h-12 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded duration-300 bg-gray-500'>
                        <a
                            href={href}
                            className='flex justify-between items-center w-full text-white '
                            target='_blank'
                            rel='noreferrer'>
                            {child}
                        </a>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default SocialLink