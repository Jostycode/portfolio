import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./menu.css";

const sections = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "contact", label: "Contact" },
];

const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
};

const Menu = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar
            expand="lg"
            sticky="top"
            className="navbar-dark bg-dark shadow-sm"
            onToggle={(expanded) => setExpanded(expanded)}
            expanded={expanded}
        >
            <Container>
                <Navbar.Brand href="#home" className="fw-bold">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        {sections.map((section) => (
                            <Nav.Link
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(section.id);
                                    setExpanded(false);
                                }}
                                className="nav-item-custom"
                            >
                                {section.label}
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;