'use client'
import Link from "next/link";
import Image from "next/image";

const content = {
    message: 'LGTB Analytics',
    message2: "M3M3 vault analytics and more!"
}
export default function AnalyticsLink() {

    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4  mt-8 md:p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center">
                <Image
                    src='/Welcome.png'
                    alt="LGTB Frog Logo"
                    width={80}
                    height={80}
                //className="rounded-full"
                />
                <Link
                    href='https://lgtbanalytics.com/'
                    className="flex items-center gap-4 bg-black/20 hover:bg-black/30 rounded-xl p-4 w-full
                  transition-all duration-300 border border-white/10 hover:border-white/20"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p className="text-white/90 font-medium text-sm md:text-lg group-hover:text-white transition-colors w-full text-center">
                        {content.message} <br /> <strong>{content.message2} </strong>
                    </p>
                </Link>
            </div>
        </div>
    )
}