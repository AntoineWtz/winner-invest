import React from "react";
import { motion } from "framer-motion";

const AboutSection = ({ openModal }) => {
    return (
        <section id="about" className="bg-gray-100 py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Titre centré */}
                <motion.h2
                    className="text-2xl md:text-4xl font-bold text-[#C4A668] mb-10 text-center"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    À propos de Winner Invest
                </motion.h2>

                {/* Contenu en colonnes */}
                <motion.div
                    className="flex flex-col md:flex-row items-start gap-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Colonne 1 */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-700 text-lg mb-4">
                            Vous rêvez de transformer votre passion en profit ? Chez Winner
                            Invest, nous aidons les entrepreneurs à atteindre la rentabilité
                            grâce à un coaching sur mesure.
                        </p>
                    </div>

                    {/* Colonne 2 */}
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-gray-700 text-lg">
                            Chaque entreprise est unique, et notre mission est de vous fournir
                            les outils et la motivation nécessaires pour réussir, peu importe
                            votre domaine d'activité.
                        </p>
                    </div>
                </motion.div>
                <div className="text-center md:text-center mt-8">
                    <a
                        onClick={openModal}
                        href="#contact"
                        className="inline-block bg-primary text-white tracking-widest font-bold uppercase py-3 px-10 rounded-xl shadow-lg hover:bg-accent hover:scale-105 transition-transform duration-200"
                    >
                        Nous Contacter
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
