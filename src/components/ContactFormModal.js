import React from "react";
import { motion } from "framer-motion";

const ContactFormModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <motion.div
                className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
            >
                <h3 className="text-xl font-bold mb-4 text-center">
                    Demande de Contact
                </h3>
                <form className="space-y-4">
                    {/* Champ Prénom */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Prénom
                        </label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
                            placeholder="Votre prénom"
                        />
                    </div>
                    {/* Champ Email */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
                            placeholder="Votre email"
                        />
                    </div>
                    {/* Champ Téléphone */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">
                            Téléphone
                        </label>
                        <input
                            type="tel"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-primary"
                            placeholder="Votre téléphone"
                        />
                    </div>
                    {/* Bouton Valider */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-bold uppercase py-2 rounded-lg hover:bg-accent transition duration-200"
                    >
                        Valider
                    </button>
                </form>
                {/* Bouton Fermer */}
                <button
                    onClick={onClose}
                    className="mt-4 text-sm text-gray-500 hover:text-gray-700 block mx-auto"
                >
                    Fermer
                </button>
            </motion.div>
        </div>
    );
};

export default ContactFormModal;
