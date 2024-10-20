import Image from "next/image";
import { Roboto } from "next/font/google";
import CountDown from "@/components/countDown";
import gdg from "@/public/gdg.webp";

const roboto = Roboto({
    weight: "500",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div
            className={`hero bg-base-200 min-h-screen text-secondary ${roboto.className}`}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl"
                /> */}
                <Image src={gdg} width={500} height={500} alt="GDG" />
                <div>
                    {/* <Image src={'/genai.png'} height={262} width={1291} alt="Gen AI by GDG VIIT"/> */}
                    <h1 className={`text-7xl font-bold`}>
                        GenAI ✨ Study Jams
                    </h1>
                    <p className="py-6 text-4xl">by GDG VIIT</p>
                    <h3 className="font-mono py-2">Time Left ⌛</h3>
                    <CountDown />
                </div>
            </div>
        </div>
    );
}
