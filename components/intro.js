import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Introduction = () => {
    return(
        <div className=" py-32 ">
            <h1 className="text-4xl font-bold">Hi, I am Oscar</h1>
            <p className="text-base mt-4">I am currently a final-year Computer Science student at The Chinese University of Hong Kong, passionate about exploring the world of technology and its endless possibilities.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium pt-5">
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://linkedin.com"
                    target="_blank"
                    >
                    <BsLinkedin />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                    href="https://github.com/NTHOscar"
                    target="_blank"
                    >
                    <BsGithub />
                </a>
            </div>
        </div>
    );
}