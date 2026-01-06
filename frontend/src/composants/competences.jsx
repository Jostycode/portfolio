import React from "react";

const competences = [
    {
        category: "Développement Web & Mobile",
        skills: [
            "React, Node.js, Express",
            "HTML5, CSS3, JavaScript (ES6+)",
            "React Native",
            "API REST",
        ],
    },
    {
        category: "Ingénierie Numérique",
        skills: [
            "Modélisation UML, Merise",
            "Conception et réalisation d'applications",
            "Gestion de projet Agile/Scrum",
            "Tests unitaires et d'intégration",
        ],
    },
    // {
    //     category: "Administration Réseaux & Systèmes",
    //     skills: [
    //         "Configuration et gestion de réseaux (Cisco, Mikrotik)",
    //         "Sécurité informatique",
    //         "Virtualisation (VMware, Docker)",
    //         "Linux, Windows Server",
    //     ],
    // },
    {
        category: "Design Graphique",
        skills: [
            "Adobe Photoshop, Illustrator, Figma",
            "UI/UX Design",
            "Création de maquettes et prototypes",
        ],
    },
    {
        category: "Outils & Technologies",
        skills: [
            "Git, GitHub, GitLab",
            // "Jira, Trello",
            "VS Code, WebStorm",
            "CI/CD, Docker",
        ],
    },
];

const experiences = [
    {
        title: "stage ",
        company: 'Clinique Médicale "LES EAUX"',
        period: "2024 -2025",
        description:
            "C’est un centre médical moderne dédié à votre santé et à votre bien-être.idispose d’une équipe de professionnels qualiés et des équipointe pour offrir des soins de qualipements de té à tous nos patient",
    },
    {
        title: "Stage",
        company: "Conseil Congolais des Chargeurs (CCC)",
        period: "2025",
        description:
            "Mise en place et administration de réseaux d'entreprise, sécurité et virtualisation.",
    },
    {
        title: "stage ",
        company: 'Clinique Médicale "LES EAUX"',
        period: "2025 - À présent",
        description:
            "C’est un centre médical moderne dédié à votre santé et à votre bien-être.idispose d’une équipe de professionnels qualiés et des équipointe pour offrir des soins de qualipements de té à tous nos patient",
    },
    {
        title: "Projet Etudiant",
        company: "Indépendant",
        period: "2021 - 2023",
        description:
            "Ce sont des projets académiques réalisés dans le cadre de ma formation en ingénierie numérique, incluant de multiples de technologies numériques en combinaisons.",
    },
];

export default function Competences() {
    return (
        <div style={{ paddingTop: '15vh', fontFamily: "Segoe UI, Arial, sans-serif", background: "#f8f9fa", minHeight: "100vh", padding: "40px" }}>
            <div style={{ maxWidth: 900, margin: "0 auto", background: "#fff", borderRadius: 16, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", padding: 40 }}>
                <header style={{ textAlign: "center", marginBottom: 32 }}>
                    <h1 style={{ fontSize: 36, fontWeight: 700, margin: 0, color: "#2d3748" }}>Josty BADZOUE</h1>
                    <h2 style={{ fontSize: 22, fontWeight: 400, color: "#4a5568", margin: "8px 0 0" }}>
                        Ingénieur Numérique | Développeur Web & Mobile | Designer Graphique
                    </h2>
                </header>

                <section>
                    <h3 style={{ color: "#3182ce", fontSize: 24, marginBottom: 16 }}>Compétences</h3>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                        {competences.map((comp, idx) => (
                            <div key={idx}>
                                <h4 style={{ color: "#2b6cb0", fontSize: 18, marginBottom: 8 }}>{comp.category}</h4>
                                <ul style={{ paddingLeft: 20, margin: 0 }}>
                                    {comp.skills.map((skill, i) => (
                                        <li key={i} style={{ marginBottom: 6, color: "#4a5568" }}>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                <section style={{ marginTop: 40 }}>
                    <h3 style={{ color: "#3182ce", fontSize: 24, marginBottom: 16 }}>Expériences Professionnelles</h3>
                    {experiences.map((exp, idx) => (
                        <div key={idx} style={{ marginBottom: 24 }}>
                            <div style={{ fontWeight: 600, fontSize: 18, color: "#2d3748" }}>{exp.title} <span style={{ color: "#718096", fontWeight: 400 }}>@ {exp.company}</span></div>
                            <div style={{ color: "#718096", fontSize: 15 }}>{exp.period}</div>
                            <div style={{ color: "#4a5568", marginTop: 6 }}>{exp.description}</div>
                        </div>
                    ))}
                </section>

                <section style={{ marginTop: 40 }}>
                    <h3 style={{ color: "#3182ce", fontSize: 24, marginBottom: 16 }}>Diplôme</h3>
                    <div style={{ color: "#2d3748", fontWeight: 500, fontSize: 18 }}>
                        Ingénieur en Numérique - Université Inter-Etat Congo Cameroun, 2024
                    </div>
                </section>
            </div>
        </div>
    );
}