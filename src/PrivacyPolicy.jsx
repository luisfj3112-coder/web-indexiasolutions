import { useNavigate } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        // Cerramos la pestaña actual para volver a la pestaña del formulario
        window.close();
    };

    return (
        <div className="privacy-container">
            <div className="container">
                <div className="privacy-card glass">
                    <header className="privacy-header">
                        <span className="section-eyebrow">Aviso Legal y Privacidad</span>
                        <h2 className="section-title">Política de <span className="text-gradient">Privacidad</span></h2>
                    </header>

                    <div className="privacy-content">
                        <section>
                            <h3>1. Responsable del Tratamiento</h3>
                            <ul>
                                <li><strong>Titular:</strong> IndexIA Solutions</li>
                                <li><strong>Servicios:</strong> Consultoría y Automatización con IA Agentic.</li>
                                <li><strong>Localización:</strong> Barcelona, España.</li>
                                <li><strong>Contacto Directo:</strong> <a href="mailto:relat@indexiasolutions.com">relat@indexiasolutions.com</a></li>
                                <li><strong>Finalidad:</strong> Gestión de clientes y optimización de procesos mediante IA.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>2. Finalidad del Tratamiento</h3>
                            <p>
                                Tratamos la información que nos facilita con las siguientes finalidades:
                            </p>
                            <ul>
                                <li>Gestionar las solicitudes de información y demostraciones de nuestros servicios de IA.</li>
                                <li>Proporcionar soporte técnico y comercial relacionado con nuestros agentes inteligentes y automatizaciones.</li>
                                <li>Enviar comunicaciones comerciales sobre novedades y actualizaciones, siempre que haya otorgado su consentimiento.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>3. Legitimación</h3>
                            <p>
                                La base legal para el tratamiento de su información es el consentimiento del interesado al completar el formulario de contacto o suscribirse a nuestros servicios.
                            </p>
                        </section>

                        <section>
                            <h3>4. Tratamiento de Datos por Sistemas de IA</h3>
                            <p>
                                En <strong>IndexIA Solutions</strong> utilizamos modelos de inteligencia artificial avanzados para mejorar la eficiencia de nuestros servicios. Le garantizamos que:
                            </p>
                            <ul>
                                <li>Sus datos personales no se utilizan para entrenar modelos públicos de terceros sin su consentimiento explícito y anonimización previa.</li>
                                <li>Mantenemos estrictas medidas de seguridad técnica para proteger la integridad de la información procesada por nuestros agentes.</li>
                            </ul>
                        </section>

                        <section>
                            <h3>5. Derechos del Usuario</h3>
                            <p>
                                Usted tiene derecho a obtener confirmación sobre si en IndexIA Solutions estamos tratando sus datos personales. Por tanto, tiene derecho a:
                            </p>
                            <ul>
                                <li>Acceder a sus datos personales.</li>
                                <li>Rectificar los datos inexactos.</li>
                                <li>Solicitar su supresión cuando los datos ya no sean necesarios.</li>
                                <li>Oponerse al tratamiento para fines publicitarios.</li>
                            </ul>
                            <p>
                                Para ejercer estos derechos, puede dirigirse a <a href="mailto:relat@indexiasolutions.com">relat@indexiasolutions.com</a> adjuntando una copia de su documento de identidad.
                            </p>
                        </section>
                    </div>

                    <div className="privacy-footer">
                        <button onClick={handleBack} className="btn-contact-blue">Volver al formulario</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
