const Accueil = () => (
    <div style={{ paddingTop: '15vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', color: '#fff' }}>
            Josty BADZOUE
        </h1>
        <h2 style={{ fontWeight: '400', marginBottom: '2rem', color: '#fff', textAlign: 'center' }}>
            Ingénieur en Génie Numérique | Développeur Web & Mobile
        </h2>
        <p style={{ maxWidth: '600px', textAlign: 'center', fontSize: '1.2rem', color: '#fff', marginBottom: '2rem' }}>
            Passionné par la conception et la réalisation d'applications innovantes, j'accompagne les entreprises dans leur transformation digitale.
            Maîtrise des outils d'ingénierie (UML, gestion de projet), administration réseau, design graphique, et développement fullstack.
            Expérience solide dans le domaine, alliant expertise technique et créativité pour répondre aux besoins complexes.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }} className="sm:">
            <span style={{ background: '#1976d2', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem' }}>Web</span>
            <span style={{ background: '#43a047', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem' }}>Mobile</span>
            <span style={{ background: '#fbc02d', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem' }}>Réseaux</span>
            <span style={{ background: '#e53935', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem' }}>Design</span>
            <span style={{ background: '#8e24aa', color: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '1rem' }}>UML</span>
        </div>
        <div style={{ color: '#fff', fontSize: '1rem', textAlign: 'center' }}>
            <strong>Expérience :</strong> Plusieurs années dans le développement d'applications, la gestion de projets numériques et l'administration de réseaux.
        </div>
    </div>
)

export default Accueil;