import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsWhatsapp } from "react-icons/bs"
function Footer() {

    const newDate = new Date();
    const year = newDate.getFullYear();

    return(
        
        <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex flex-col sm:flex-row item-center">
            <section className="text-lg">
                copyright {year} | All rights reserved
            </section>

            <section className="flex items-centre justify-center gap-5 text-2xl text-white"></section>
            <a href="#" className="hover:text-yelow-500 transition-all ease-in-out duration-300">
                <BsFacebook />
            </a>
            <a href="#" className="hover:text-yelow-500 transition-all ease-in-out duration-300">
                <BsInstagram />
            </a>
            <a href="#" className="hover:text-yelow-500 transition-all ease-in-out duration-300">
                <BsLinkedin />
            </a>
            <a href="#" className="hover:text-yelow-500 transition-all ease-in-out duration-300">
                <BsTwitter />
            </a>
            <a href="#" className="hover:text-yelow-500 transition-all ease-in-out duration-300">
                <BsWhatsapp />
            </a>
        </footer>
        
    )
}

export default Footer;