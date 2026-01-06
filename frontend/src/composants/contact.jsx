import React, { useState } from "react";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // Ici, vous pouvez ajouter l'envoi vers un backend ou service email
    };

    return (
        <div style={{
            fontFamily: "Segoe UI, Arial, sans-serif",
            background: "linear-gradient(120deg, #e3f0ff 0%, #f7f9fb 100%)",
            minHeight: "100vh",
            padding: "40px 0"
        }}>
            <div style={{
                maxWidth: "520px",
                margin: "0 auto",
                background: "#fff",
                borderRadius: "18px",
                boxShadow: "0 6px 32px rgba(0,120,212,0.10)",
                padding: "38px 32px"
            }}>
                <header style={{ textAlign: "center", marginBottom: "28px" }}>
                    <img
                        src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
                        alt="Profile"
                        style={{
                            width: "80px",
                            height: "80px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            marginBottom: "12px",
                            border: "3px solid #0078d4"
                        }}
                    />
                    <h1 style={{ margin: "0", fontSize: "2rem", color: "#0078d4" }}>
                        Contactez-moi
                    </h1>
                    <p style={{ color: "#555", fontSize: "1.05rem", marginTop: "8px" }}>
                        Pour toute collaboration, projet ou question, n'hésitez pas à me écrire !
                    </p>
                </header>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
                    <div>
                        <label style={{ color: "#0078d4", fontWeight: 500 }}>Nom</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "7px",
                                border: "1px solid #cfd8dc",
                                marginTop: "6px",
                                fontSize: "1rem"
                            }}
                            placeholder="Votre nom"
                        />
                    </div>
                    <div>
                        <label style={{ color: "#0078d4", fontWeight: 500 }}>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "7px",
                                border: "1px solid #cfd8dc",
                                marginTop: "6px",
                                fontSize: "1rem"
                            }}
                            placeholder="Votre email"
                        />
                    </div>
                    <div>
                        <label style={{ color: "#0078d4", fontWeight: 500 }}>Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            style={{
                                width: "100%",
                                padding: "10px",
                                borderRadius: "7px",
                                border: "1px solid #cfd8dc",
                                marginTop: "6px",
                                fontSize: "1rem",
                                resize: "vertical"
                            }}
                            placeholder="Votre message"
                        />
                    </div>
                    <button
                        type="submit"
                        style={{
                            background: "#0078d4",
                            color: "#fff",
                            border: "none",
                            borderRadius: "7px",
                            padding: "12px",
                            fontWeight: 600,
                            fontSize: "1.05rem",
                            cursor: "pointer",
                            boxShadow: "0 2px 8px rgba(0,120,212,0.08)"
                        }}
                    >
                        Envoyer
                    </button>
                    {submitted && (
                        <div style={{
                            background: "#e3f7e3",
                            color: "#207c2f",
                            borderRadius: "6px",
                            padding: "10px",
                            textAlign: "center",
                            marginTop: "8px"
                        }}>
                            Merci pour votre message ! Je vous répondrai rapidement.
                        </div>
                    )}
                </form>

                <div style={{
                    marginTop: "32px",
                    borderTop: "1px solid #e3eaf2",
                    paddingTop: "18px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    fontSize: "1rem"
                }}>
                    <span>
                        <strong>Email :</strong> <a href="mailto:jostybadzoue@gmail.com" style={{ color: "#0078d4" }}>jostybadzoue@gmail.com</a>
                    </span>
                    <span>
                        <strong>Téléphone :</strong> <a href="tel:+242061720894" style={{ color: "#0078d4" }}>+242 06 172 0894</a>
                    </span>
                    <span>
                        <strong>LinkedIn :</strong> <a href="https://linkedin.com/in/jostybadzoue" target="_blank" rel="noopener noreferrer" style={{ color: "#0078d4" }}>linkedin.com/in/jostybadzoue</a>
                    </span>
                    <span>
                        <strong>GitHub :</strong> <a href="https://github.com/jostybadzoue" target="_blank" rel="noopener noreferrer" style={{ color: "#0078d4" }}>github.com/jostybadzoue</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Contact;