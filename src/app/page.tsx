import Image from "next/image";
import { Roboto } from "next/font/google";
import { TableDemo } from "@/components/tableComp";

const roboto = Roboto({
    weight: "400",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <><div className="hero bg-base-200 min-h-screen text-secondary">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    {/* <Image src={'/genai.png'} height={262} width={1291} alt="Gen AI by GDG VIIT"/> */}
                    <h1 className={`text-9xl font-bold ${roboto.className}`}>
                        GDG On Campus VIIT!
                    </h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <div>
                        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 15 }}></span>
                                </span>
                                days
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 10 }}></span>
                                </span>
                                hours
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 24 }}></span>
                                </span>
                                min
                            </div>
                            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                                <span className="countdown font-mono text-5xl">
                                    <span style={{ "--value": 21 }}></span>
                                </span>
                                sec
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div><TableDemo /></>
    );
}
