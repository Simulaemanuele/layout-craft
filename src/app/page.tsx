import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1 style={{ textAlign: "center" }}>Design System</h1>
      <Layout
        mode="sidebar"
        maxWidth="lg"
        title="Dashboard"
        subtitle="Benvenuto nella tua area personale"
        sidebarContent={
          <nav>
            <ul>
              <li>Home</li>
              <li>Impostazioni</li>
            </ul>
          </nav>
        }
      >
        <p>Questa è l'area principale del contenuto.</p>
      </Layout>
      <Layout
        mode="header"
        maxWidth="md"
        title="Pagina con Header"
        subtitle="Un sottotitolo utile"
        headerContent={<h1>Il mio Header Personalizzato</h1>}
      >
        <p>Contenuto principale.</p>
      </Layout>
      <Layout mode="fullscreen" title="Schermo Intero">
        <p>Questa modalità rimuove sidebar e header.</p>
      </Layout>
    </div>
  );
}
