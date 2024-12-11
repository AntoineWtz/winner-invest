import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#4e4637] text-white py-10 px-4">
            <div className="max-w-5xl mx-auto text-center space-y-4">
                <p>&copy; {new Date().getFullYear()} Winner Invest. Tous droits réservés.</p>
                {/* <a href="#" className="text-[#C4A668] hover:underline">
                    Politique de Confidentialité
                </a>{" "}
                |{" "}
                <a href="#" className="text-[#C4A668] hover:underline">
                    Mentions légales
                </a> */}
            </div>
        </footer>
    );
};

export default Footer;
