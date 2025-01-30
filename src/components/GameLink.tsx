'use client'
import Link from "next/link";

const content = {
    message: 'Play the Game!',
    message2: "Let's Get This Bread!"
}
export default function ContestWinners() {

    return (
        <div className="hidden md:block bg-white/10 backdrop-blur-lg rounded-3xl p-4  mt-8 md:p-8 shadow-2xl max-w-6xl mx-auto">
            <div className="relative">

                <div className="flex flex-col gap-3 md:gap-4 w-full">

                    <Link

                        href='/game/index.html'
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
        </div>
    )
}