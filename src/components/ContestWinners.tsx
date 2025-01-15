import Link from "next/link";

const content = {
    message: 'Participate in our contests and win prizes',
    message2: 'Check out the Contest Winners!'
}
export default function ContestWinners() {
    return (
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-4  mt-8 md:p-8 shadow-2xl">
            <div className="relative">

                <div className="flex flex-col gap-3 md:gap-4 w-full">

                    <Link

                        href='/'
                        className="group bg-white/5 hover:bg-white/15 rounded-xl transition-all duration-300 
                       flex items-center gap-3 md:gap-4 p-3 md:p-4 backdrop-blur-sm border border-white/10 
                       hover:border-white/20 h-[64px] md:h-[84px] w-full"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {/* <div className="bg-white/10 p-2 rounded-lg group-hover:bg-white/20 transition-colors">
                                <Image
                                    src={link.logo}
                                    alt={link.name}
                                    width={link.width}
                                    height={link.height}
                                    className="drop-shadow-lg w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-contain"
                                />
                            </div> */}
                        <p className="text-white/90 font-medium text-sm md:text-lg group-hover:text-white transition-colors w-full text-center">
                            {content.message} <br /> <strong>{content.message2} </strong>
                        </p>
                    </Link>

                </div>
            </div>
        </div>
    )
}