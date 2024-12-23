import Image from "next/image";
import { Roboto } from "next/font/google";
import { TableDemo } from "@/components/tableComp";
import CountDown from "@/components/countDown";
import Alerts from "@/components/alert";
import Link from "next/link";
// import gdg from "@/public/gdg.png";
// import viitfull from "@/public/viitfull.png";
// import gdgviitfull from "@/public/gdgviitfull.png";

const roboto = Roboto({
    weight: "500",
    subsets: ["latin"],
});

export default function Home() {
    return (
        <div className={`${roboto.className}`}>
            {/* <div className={`text-secondary ${roboto.className}`}>
                {alerts.map((alert: AlertMessage) => (
                    <Alert
                        text={alert.text}
                        Icon={alert.icon}
                        type={alert.type}
                        key={alert.text}
                    />
                ))}
            </div> */}
            <Alerts />
            <div className={`hero bg-base-200 min-h-screen text-secondary`}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <div className="flex flex-col justify-center align-center">
                        <Image src={gdg} className="m-auto" width={350} height={350} alt="GDG" />
                        <Image
                        src={viitfull}
                        width={500}
                        height={50}
                        alt="viit"
                        />
                    </div> */}
                    <Image src={'/gdgviit.png'} width={500} height={500} alt="GDG"/>

                    <div>
                        <h1
                            className={`text-center md:text-left text-5xl md:text-7xl font-bold`}
                        >
                            GenAI ✨ Study Jams
                        </h1>
                        {/* <Image src={gdgviitfull} width={500} height={500} alt="GDG" /> */}
                        <p className="py-6 text-center text-base-content md:text-left font-mono text-3xl lg:text-4xl">
                            by <Link href="https://gdg.community.dev/gdg-on-campus-vishwakarma-institute-of-information-technology-pune-india/">GDG VIIT</Link>  
                        </p>
                        <h3 className="font-mono py-2">Time Left ⌛</h3>
                        <CountDown />
                    </div>
                </div>
            </div>
            <div className={`hero bg-base-200 min-h-screen text-secondary`}>
                <div className="hero-content flex-col">
                    <h1 className="text-center text-3xl pb-10">
                        Who is on top of the Leaderboard?
                    </h1>
                    <ul className="steps">
                        <li className="step step-error" data-content="🙅‍♂️">
                            Not Reedemed
                        </li>
                        <li className="step step-warning" data-content="⌛">
                            Not Started
                        </li>
                        <li className="step step-info" data-content="🧑‍💻">
                            In Progress
                        </li>
                        <li className="step step-success" data-content="🥳">
                            Completed
                        </li>
                    </ul>
                    <TableDemo />
                </div>
            </div>
        </div>
    );
}
