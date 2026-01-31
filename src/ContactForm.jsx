import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactForm.css';

const ContactForm = ({ formData, setFormData, handleChange }) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // El modo 'no-cors' permite enviar los datos incluso si el servidor no tiene CORS habilitado,
            // pero no permite leer el body de la respuesta. La respuesta será de tipo 'opaque'.
            const bodyData = new FormData();
            bodyData.append('nombre', formData.nombre);
            bodyData.append('email', formData.email);
            bodyData.append('telefono', formData.telefono);
            bodyData.append('consulta', formData.consulta);
            bodyData.append('acceptPrivacy', formData.acceptPrivacy);

            const response = await fetch('https://n-n8n.ywrumf.easypanel.host/webhook/6f0211c2-7ef9-4f47-a2b3-720a6911eaf8', {
                method: 'POST',
                mode: 'no-cors',
                // Al usar FormData, no debemos poner el Content-Type manualmente
                // para que el navegador añada el boundary correspondiente.
                body: bodyData,
            });

            // Con no-cors, response.ok puede ser falso o la respuesta opaca, 
            // pero si llega aquí sin lanzar excepción en el catch, es que se envió.
            alert("Gracias por tu interés. Nos pondremos en contacto contigo pronto.");
            setFormData({ nombre: '', email: '', telefono: '', consulta: '', acceptPrivacy: false });
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error de conexión. Por favor, verifica tu internet e inténtalo de nuevo.");
        }
    };

    const handleChangeInternal = (e) => {
        handleChange(e);
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="contact-header">
                    <span className="contact-eyebrow">Contact Our Specialists</span>
                    <h3 className="section-title">Solicitar <span className="text-gradient">Información</span></h3>
                    <p className="contact-desc">Déjanos tus datos y un experto en automatización se pondrá en contacto contigo.</p>
                </div>

                <form className="contact-form glass" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="nombre">Nombre Completo</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Ej. Juan Pérez"
                            value={formData.nombre}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="email">Correo Electrónico</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="juan@ejemplo.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefono">Número de Teléfono (Opcional)</label>
                            <input
                                type="tel"
                                id="telefono"
                                name="telefono"
                                placeholder="+34 123 456 789"
                                value={formData.telefono}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="consulta">Consulta</label>
                        <textarea
                            id="consulta"
                            name="consulta"
                            rows="4"
                            placeholder="¿En qué podemos ayudarte?"
                            value={formData.consulta}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="form-group-checkbox">
                        <input
                            type="checkbox"
                            id="acceptPrivacy"
                            name="acceptPrivacy"
                            checked={formData.acceptPrivacy}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="acceptPrivacy">
                            He leído y acepto la <Link to="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="privacy-link">Política de Privacidad</Link> y autorizo el tratamiento de mis datos personales conforme al RGPD.
                        </label>
                    </div>

                    <button type="submit" className="submit-btn">Enviar Formulario</button>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;
