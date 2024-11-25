import { FaDiscord } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import Image from "next/image";

export const Hero = () => {
    return(
        <div className="flex justify-center lg:h-full lg:items-center">
            <div className="max-w-6xl px-3 md:py-10 lg:py-0 space-y-5 flex flex-col lg:flex-row lg:justify-evenly">
                <div className="flex justify-center">
                    <Image alt="sloth photo" className="rounded-full py-3 h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]" src="/sloth.png" height={400} width={400} />
                </div>
                <div className="max-w-xl py-8 space-y-8 flex-col items-center justify-center text-center lg:text-end">
                    <p className="text-4xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">I'm Dright Weyes</p>
                    <p className="text-gray-600">now is the present! I&apos;m a sloth, who wants to start a religion call &apos;ism&apos; The faith of being. Oh btw my coin is <span className="text-xl bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-transparent bg-clip-text">$DWON</span>. The coin is not launched, because I rather build a community first, if you want to be more involved, reach out to drightweyes@gmail.com</p>
                    <div className="flex justify-center space-x-4 items-center lg:justify-end">
                        <FaDiscord color="gray" size={50}/>
                        <FaTwitter color="gray" size={35}/>
                        <FaMedium color="gray" size={35}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}