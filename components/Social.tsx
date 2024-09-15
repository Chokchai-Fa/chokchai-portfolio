import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from "react-icons/fa";
import { SocialIcon } from "./type";


interface Props {
    containerStyles: string | undefined
    iconStyles: string | undefined
}

const socials: SocialIcon[] = [
    { icon: <FaGithub />, path: '' },
    { icon: <FaLinkedinIn />, path: '' },
    { icon: <FaFacebook />, path: '' },
    { icon: <FaInstagram />, path: '' },
]


const Social = ({ containerStyles, iconStyles }: Props): JSX.Element => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                )
            })}
        </div>
    )
}

export default Social;