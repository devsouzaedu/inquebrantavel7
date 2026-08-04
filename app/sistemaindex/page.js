import Link from "next/link";

export const metadata = {
  title: "Sistema Index | inquebrantavel7",
  description: "O sistema definitivo feito para desfoder sua vida e otimizar sua operação digital.",
};

export default function SistemaIndex() {
  const checkoutUrl = "https://pay.hub.la/UnSQBjhzxkazbpNIYM1M";

  return (
    <div className="theme-minimal-gold">
      {/* Background patterns */}
      <div className="bg-grid" style={{ opacity: 0.05 }}></div>

      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo" id="minimal-logo">
            <div className="logo-icon">I</div>
            inquebrantavel<span>7</span>
          </Link>
          <div className="nav-actions">
            <Link href="/" className="nav-link" style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em" }}>
              ← Voltar ao início
            </Link>
          </div>
        </div>
      </header>

      <main style={{ flexGrow: 1, display: "flex", alignItems: "center" }}>
        <div className="minimal-container">
          {/* Mystery design element */}
          <div className="mystery-circle" id="mystery-element">
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#d4af37", boxShadow: "0 0 10px #d4af37" }}></div>
          </div>

          {/* Core Hook */}
          <p style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#666666", marginBottom: "1.5rem" }}>
            MÉTODO EXCLUSIVO
          </p>
          
          <h1 style={{ fontSize: "2rem", fontWeight: "300", letterSpacing: "0.05em", lineHeight: "1.3", marginBottom: "2rem", color: "#f5f5f7" }}>
            A maioria das pessoas falha porque constrói páginas que quebram.
          </h1>

          <h2 className="gold-text-gradient" style={{ fontSize: "2.5rem", fontWeight: "900", letterSpacing: "-0.02em", marginBottom: "2.5rem", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            O Sistema Index foi feito para desfoder sua vida.
          </h2>

          <p style={{ color: "#a0a0a0", fontSize: "1.1rem", maxWidth: "600px", lineHeight: "1.8", marginBottom: "3rem" }}>
            Sem enrolação. Sem templates pesados. Apenas a estrutura exata, limpa e inquebrantável que converte tráfego frio em faturamento real todos os dias.
          </p>

          {/* Minimal features list */}
          <div className="minimal-card" id="minimal-features-card">
            <div className="minimal-card-title">A OPERAÇÃO BLINDADA</div>
            <ul className="minimal-list">
              <li className="minimal-list-item">
                <strong>Velocidade no limite físico:</strong> Páginas carregando abaixo de 1 segundo.
              </li>
              <li className="minimal-list-item">
                <strong>Copy neuro-persuasiva:</strong> Blocos de escrita sequenciados para remover objeções e gerar ação imediata.
              </li>
              <li className="minimal-list-item">
                <strong>Rastreamento imune:</strong> Integração de pixels e conversões direta da API, blindada contra adblockers.
              </li>
              <li className="minimal-list-item">
                <strong>Acesso vitalício:</strong> Todos os métodos, templates e futuras atualizações inclusos sem mensalidades.
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div style={{ marginTop: "1rem", width: "100%" }}>
            <a 
              href={checkoutUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-gold" 
              style={{ width: "100%", maxWidth: "450px" }}
              id="minimal-cta-button"
            >
              Quero desfoder minha operação
            </a>
            
            <div className="objection-killer" id="objection-guarantee">
              Garantia incondicional de 7 dias • Acesso imediato • R$ 297 à vista
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer style={{ borderTop: "1px solid rgba(212, 175, 55, 0.05)", padding: "2rem 0", background: "#030303", fontSize: "0.8rem", color: "#444444", letterSpacing: "0.05em" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>&copy; {new Date().getFullYear()} inquebrantavel7. Todos os direitos reservados.</div>
          <div>Sistema Index.</div>
        </div>
      </footer>
    </div>
  );
}
