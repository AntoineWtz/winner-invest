import React from "react";
import { motion } from "framer-motion";
import BusinessPlanImg from "../assets/business-planning.jpg";

const ProgramSection = ({ openModal }) => {
    return (
        <section id="program" className="bg-primary py-20 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-20">
                {/* Colonne Image */}
                <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src={BusinessPlanImg}
                        alt="Programme Formation"
                        className="w-full h-auto rounded-xl shadow-md"
                    />
                </motion.div>

                {/* Colonne Texte */}
                <motion.div
                    className="flex-1 text-center md:text-justify"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-4xl font-bold text-white mb-6">
                        Nouveau programme de coaching
                    </h2>
                    <p className="text-secondary text-lg mb-4">
                        Vous êtes créateur d'entreprise ? Vous bénéficiez encore du soutien
                        de Pôle Emploi, mais votre trésorerie commence à s'épuiser ?
                    </p>
                    <p className="text-secondary text-lg mb-4">
                        Avec notre programme <strong>"De zéro à profit"</strong>, développez
                        vos capacités pour attirer vos premiers clients et atteindre la
                        rentabilité en un temps record.
                    </p>
                    <p className="text-secondary text-lg">
                        Ne laissez pas votre rêve entrepreneurial s'évanouir. Assurez la
                        pérennité de votre entreprise et évitez de devoir retourner au
                        salariat.
                    </p>
                    <div className="mt-6">
                        <a
                            onClick={openModal}
                            href="#contact"
                            className="inline-block bg-accent text-white tracking-widest font-bold uppercase py-3 px-10 rounded-xl shadow-lg hover:bg-darkAccent hover:scale-105 transition-transform duration-200"
                        >
                            Réserver ma séance offerte
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProgramSection;
