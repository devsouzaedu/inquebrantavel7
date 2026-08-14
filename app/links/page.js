import Link from "next/link";

export const metadata = {
  title: "Links | inquebrantavel7",
  description: "Acesse o curso gratuito Acorde para Vida, o Sistema Index e nossas redes oficiais.",
  icons: {
    icon: "/images/capa_sistema_index.png",
  },
};

export default function LinksPage() {
  const links = [
    {
      title: "Curso Gratuito: Acorde para Vida",
      subtitle: "Playlist completa de aulas no YouTube",
      url: "https://www.youtube.com/watch?v=gI_aMl8Nw3k&list=PLeRbHfA1Asfo&pp=0gcJCfoCOCosWNinsAgC",
      isHighlight: true,
      badge: "GRATUITO",
    },
    {
      title: "Sistema Index",
      subtitle: "O hub de desenvolvimento pessoal para desfoder sua vida",
      url: "/sistemaindex",
      isHighlight: false,
    },
    {
      title: "Instagram Oficial",
      subtitle: "Conteúdo diário sobre mentalidade e evolução",
      url: "https://www.instagram.com/inquebrantavel7/",
      isHighlight: false,
    }
  ];

  return (
    <div className="theme-minimal-gold" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Dynamic CSS for premium hovers and animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        .social-link {
          color: #888888;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .social-link:hover {
          color: #d4af37 !important;
          transform: translateY(-3px) scale(1.05);
          filter: drop-shadow(0 0 8px rgba(212, 175, 55, 0.3));
        }
        .link-card-btn {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .link-card-btn:hover {
          border-color: #d4af37 !important;
          background: rgba(212, 175, 55, 0.1) !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.2) !important;
        }
        .btn-gold-link {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .btn-gold-link:hover {
          color: #030303 !important;
          background: #d4af37 !important;
          border-color: #ffffff !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.3) !important;
        }
      `}} />

      {/* Background patterns */}
      <div className="bg-grid" style={{ opacity: 0.03 }}></div>

      {/* Main Container */}
      <main style={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "3rem 0" }}>
        <div className="minimal-container" style={{ padding: "0 1.25rem", width: "100%", maxWidth: "540px" }}>
          
          {/* Header Profile Section */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "2.5rem" }}>
            <div style={{ position: "relative", marginBottom: "1.25rem" }}>
              {/* Outer decorative ring */}
              <div style={{
                position: "absolute",
                inset: "-6px",
                borderRadius: "50%",
                border: "1px dashed rgba(212, 175, 55, 0.4)",
                animation: "rotate-slow 25s linear infinite"
              }}></div>
              
              <img 
                src="/images/profile_pfp.jpg" 
                alt="Foto de Perfil" 
                style={{ 
                  width: "110px", 
                  height: "110px", 
                  borderRadius: "50%", 
                  objectFit: "cover", 
                  border: "2px solid #d4af37",
                  boxShadow: "0 0 20px rgba(212, 175, 55, 0.2)",
                  position: "relative",
                  zIndex: 2
                }} 
              />
            </div>
            
            <h1 className="gold-text-gradient" style={{ fontSize: "1.85rem", fontWeight: "900", letterSpacing: "-0.01em", margin: "0.25rem 0 0.5rem 0", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              INQUEBRANTÁVEL7
            </h1>
            <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888888", fontWeight: "600", marginBottom: "0.5rem" }}>
              Membro do Topo
            </p>
            <p style={{ color: "#a0a0a0", fontSize: "0.9rem", lineHeight: "1.5", maxWidth: "340px", margin: "0 auto" }}>
              Expandindo a percepção das pessoas para o que a mente humana é capaz de criar.
            </p>
          </div>

          {/* Links Section */}
          <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "3.5rem" }}>
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : undefined}
                rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className={link.isHighlight ? "btn-gold-link" : "link-card-btn"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: link.isHighlight ? "1.5rem 2rem" : "1.25rem 1.75rem",
                  margin: 0,
                  width: "100%",
                  textDecoration: "none",
                  textAlign: "center",
                  borderRadius: "6px",
                  border: link.isHighlight ? "1px solid #d4af37" : "1px solid rgba(212, 175, 55, 0.15)",
                  background: link.isHighlight ? "rgba(212, 175, 55, 0.05)" : "rgba(10, 10, 10, 0.6)",
                  boxShadow: link.isHighlight ? "0 4px 15px rgba(212, 175, 55, 0.1)" : "0 4px 10px rgba(0, 0, 0, 0.3)",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                {link.badge && (
                  <span style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    fontSize: "0.65rem",
                    fontWeight: "800",
                    letterSpacing: "0.1em",
                    padding: "2px 8px",
                    borderRadius: "4px",
                    background: "#d4af37",
                    color: "#030303"
                  }}>
                    {link.badge}
                  </span>
                )}
                <span style={{ 
                  fontSize: "1.1rem", 
                  fontWeight: "700", 
                  letterSpacing: "0.08em", 
                  textTransform: "uppercase", 
                  color: "#ffffff",
                  marginBottom: "0.25rem"
                }}>
                  {link.title}
                </span>
                <span style={{ 
                  fontSize: "0.8rem", 
                  color: link.isHighlight ? "rgba(255, 255, 255, 0.7)" : "#888888",
                  letterSpacing: "0.02em"
                }}>
                  {link.subtitle}
                </span>
              </a>
            ))}
          </div>

          {/* Separator / Down Arrow */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem" }}>
            <div style={{ 
              width: "44px", 
              height: "44px", 
              borderRadius: "50%", 
              border: "1px solid rgba(212, 175, 55, 0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(10, 10, 10, 0.4)",
              boxShadow: "0 0 10px rgba(212, 175, 55, 0.05)"
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#d4af37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </div>
          </div>

          {/* "Quem sou eu?" Biography Section */}
          <div className="minimal-card" style={{ padding: "2.5rem 2rem", background: "rgba(10, 10, 10, 0.5)", border: "1px solid rgba(212, 175, 55, 0.1)", borderRadius: "8px", width: "100%", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1.25rem" }}>
              <span className="badge" style={{ 
                margin: 0, 
                backgroundColor: "rgba(212, 175, 55, 0.08)", 
                color: "#d4af37", 
                border: "1px solid rgba(212, 175, 55, 0.25)"
              }}>
                cycle-breaker
              </span>
            </div>
            
            <h2 className="gold-text-gradient" style={{ fontSize: "1.85rem", fontWeight: "900", letterSpacing: "-0.01em", marginBottom: "1.5rem", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Quem sou eu?
            </h2>

            <p style={{ color: "#e0e0e0", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.25rem", textAlign: "justify" }}>
              Senhoras e senhores, eu sou o Miguel, mundialmente conhecido como <span style={{ color: "#d4af37", fontWeight: "600" }}>@crxzy244</span>. Você pode ou não me conhecer do TikTok, Instagram ou YouTube. Se não, muito prazer.
            </p>

            <p style={{ color: "#c0c0c0", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1.25rem", textAlign: "justify" }}>
              Com milhares de alunos e seguidores ao redor do planeta, meu objetivo é simples e claro: Quero expandir a percepção das pessoas para o que a mente humana é capaz de <span style={{ color: "#d4af37" }}>criar</span>.
            </p>

            <p style={{ color: "#c0c0c0", fontSize: "0.95rem", lineHeight: "1.6", margin: 0, textAlign: "justify" }}>
              Alimentando as chamas do <span style={{ color: "#d4af37" }}>despertar</span> da humanidade, faremos com que todos ao nosso redor se tornem suas versões mais expansivas, poderosas e autênticas de personalidade.
            </p>
          </div>

          {/* Social Icons at the Bottom */}
          <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "3.5rem", marginBottom: "1rem" }}>
            {/* Instagram */}
            <a 
              href="https://www.instagram.com/inquebrantavel7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* TikTok */}
            <a 
              href="https://www.tiktok.com/@crxzy244" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
              </svg>
            </a>

            {/* YouTube */}
            <a 
              href="https://www.youtube.com/watch?v=gI_aMl8Nw3k&list=PLeRbHfA1Asfo&pp=0gcJCfoCOCosWNinsAgC" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>

            {/* Bookmark */}
            <a 
              href="/sistemaindex" 
              className="social-link"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </a>
          </div>

        </div>
      </main>

      {/* Minimal Footer */}
      <footer style={{ borderTop: "1px solid rgba(212, 175, 55, 0.05)", padding: "1.5rem 0", background: "#030303", fontSize: "0.75rem", color: "#444444", letterSpacing: "0.05em", textAlign: "center" }}>
        <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
          <div>&copy; {new Date().getFullYear()} inquebrantavel7. Todos os direitos reservados.</div>
          <div>Desenvolvimento Pessoal & Alta Performance.</div>
        </div>
      </footer>
    </div>
  );
}

