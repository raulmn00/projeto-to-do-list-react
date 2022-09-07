import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
export function Footer() {
    return (
        <>
            <footer className="footerContainer">
                <p className="copyrightFooter">
                    Desenvolvido por: Raul Mariaci Neto &copy;2022
                </p>
                <span className="footerSocials">
                    <FaLinkedin className="footerLinkedin" />
                    <FaGithub className="footerGithub" />
                </span>
            </footer>
        </>
    );
}
