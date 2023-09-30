import { BsLinkedin, BsGithub } from "react-icons/bs";

export const About = () => {
    return(
        <div className=" py-10 border-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <p className="mt-4"></p>
            <p className="mt-4">I am excited to embark on my journey to become a software engineer, driven by my curiosity and eagerness to create innovative solutions that make a positive impact.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
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