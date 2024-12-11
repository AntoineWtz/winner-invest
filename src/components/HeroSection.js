import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({ openModal }) => {
    return (
        <section className="bg-white mt-40 md:mt-0 text-black min-h-[95vh] flex flex-col md:flex-row items-center justify-center px-8 space-y-8 md:space-y-0">
            {/* Colonne gauche */}
            <motion.div
                className="flex-1 text-center md:text-center space-y-4"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-md md:text-lg font-manrope">
                    Business | Motivation | Tips
                </p>
                <h1 className="text-4xl md:text-6xl lg:text-8xl font-thin leading-tight font-playfair">
                    WINNER INVEST
                </h1>
                <p className="text-md md:text-lg font-manrope">
                    Coaching professionnel
                </p>
            </motion.div>

            {/* Colonne droite */}
            <motion.div
                className="flex-1 space-y-6 text-center md:text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <p className="text-2xl md:text-4xl lg:text-5xl font-bold leading-snug">
                    De zéro à profit : Trouvez vos premiers clients et devenez rentable
                </p>
                <p className="text-lg md:text-lg font-manrope">
                    Votre séance de coaching offerte
                </p>
                <div className="text-center md:text-left">
                    <a
                        onClick={openModal}
                        href="#contact"
                        className="inline-block bg-primary text-white tracking-widest font-bold uppercase py-3 px-10 rounded-xl shadow-lg hover:bg-accent hover:scale-105 transition-transform duration-200"
                    >
                        Réserver Maintenant
                    </a>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSection;
