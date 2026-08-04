import Link from "next/link";

export const metadata = {
  title: "Sistema Index | inquebrantavel7",
  description: "O hub definitivo de desenvolvimento pessoal feito para desfoder sua vida.",
};

export default function SistemaIndex() {
  const checkoutUrl = "https://pay.hub.la/UnSQBjhzxkazbpNIYM1M";

  return (
    <div className="theme-minimal-gold">
      {/* Background patterns */}
      <div className="bg-grid" style={{ opacity: 0.03 }}></div>

      {/* Header (No backlink, extremely clean logo only) */}
      <header className="header" style={{ padding: "0.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "3.5rem" }}>
          <Link href="/" className="logo" id="minimal-logo" style={{ fontSize: "1.3rem" }}>
            <div className="logo-icon" style={{ width: "1.75rem", height: "1.75rem", fontSize: "0.85rem" }}>I</div>
            inquebrantavel<span>7</span>
          </Link>
        </div>
      </header>

      <main style={{ flexGrow: 1, display: "flex", alignItems: "center", padding: "1rem 0" }}>
        <div className="minimal-container" style={{ padding: "1.5rem 1.25rem" }}>
          {/* Mystery design element */}
          <div className="mystery-circle" id="mystery-element" style={{ width: "44px", height: "44px", marginBottom: "1.5rem" }}>
            <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#d4af37", boxShadow: "0 0 10px #d4af37" }}></div>
          </div>

          {/* Core Hook */}
          <p style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#666666", marginBottom: "1rem", fontWeight: "600" }}>
            HUB DE DESENVOLVIMENTO PESSOAL
          </p>
          
          <h1 style={{ fontSize: "1.85rem", fontWeight: "300", letterSpacing: "0.02em", lineHeight: "1.25", marginBottom: "1.5rem", color: "#f5f5f7" }}>
            A maioria das pessoas falha porque constrói uma vida sem estrutura.
          </h1>

          <h2 className="gold-text-gradient" style={{ fontSize: "2.35rem", fontWeight: "900", letterSpacing: "-0.02em", marginBottom: "2rem", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            O Sistema Index foi feito para desfoder sua vida.
          </h2>

          <p style={{ color: "#a0a0a0", fontSize: "1rem", maxWidth: "600px", lineHeight: "1.6", marginBottom: "2rem" }}>
            Sem enrolação teórica. Métodos práticos de mentalidade, rotinas, saúde, finanças e habilidades consolidados em um só lugar para você retomar o controle absoluto de tudo.
          </p>

          {/* Minimal features list */}
          <div className="minimal-card" id="minimal-features-card" style={{ padding: "1.75rem", margin: "1.5rem 0" }}>
            <div className="minimal-card-title">VOCÊ GANHA ACESSO AO SISTEMA ÍNDEX:</div>
            <ul className="minimal-list">
              <li className="minimal-list-item">
                <strong>Módulo de crenças:</strong> Reprograme sua mente para o progresso.
              </li>
              <li className="minimal-list-item">
                <strong>Módulo de hábitos vencedores:</strong> Construa rotinas inabaláveis sem depender de motivação.
              </li>
              <li className="minimal-list-item">
                <strong>Módulo de leituras:</strong> Absorva e aplique o conhecimento prático dos livros que moldam o topo.
              </li>
              <li className="minimal-list-item">
                <strong>Como viajar pra fora sem gastar muito:</strong> Estratégias e segredos práticos de milhas e rotas.
              </li>
              <li className="minimal-list-item">
                <strong>Como sair do CLT:</strong> O plano lógico de transição de carreira seguro e focado em escala.
              </li>
              <li className="minimal-list-item">
                <strong>Casamento e vida pessoal:</strong> Como conciliar relacionamentos de alto valor com sua busca de crescimento.
              </li>
              <li className="minimal-list-item">
                <strong>Neurociência e hacks de bio-otimização:</strong> Sono, dieta e treinos para atingir alta performance física e mental.
              </li>
              <li className="minimal-list-item">
                <strong>Módulos de inglês e mandarim:</strong> Fluência prática nos idiomas fundamentais para o mercado global.
              </li>
              <li className="minimal-list-item">
                <strong>Como criar um infoproduto:</strong> Transforme o que você sabe em uma fonte de renda escalável na internet.
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
              Quero desfoder minha vida
            </a>
            
            <div className="objection-killer" id="objection-guarantee" style={{ marginTop: "1.2rem", fontSize: "0.75rem", color: "#555" }}>
              ASSINATURA ANUAL • APENAS R$ 107,00 / ANO • GARANTIA DE 7 DIAS
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer style={{ borderTop: "1px solid rgba(212, 175, 55, 0.05)", padding: "1.5rem 0", background: "#030303", fontSize: "0.75rem", color: "#444444", letterSpacing: "0.05em" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <div>&copy; {new Date().getFullYear()} inquebrantavel7. Todos os direitos reservados.</div>
          <div>Sistema Index • Hub de Desenvolvimento Pessoal.</div>
        </div>
      </footer>
    </div>
  );
}
