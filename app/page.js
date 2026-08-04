import Link from "next/link";

export const metadata = {
  title: "Inquebrantável7 | Landing Pages de Alta Conversão",
  description: "Desenvolvemos landing pages ultra-rápidas, otimizadas para SEO e focadas em conversão. Conheça nosso principal ecossistema, o Sistema Index.",
};

export default function Home() {
  return (
    <>
      {/* Background patterns */}
      <div className="bg-gradient-mesh"></div>
      <div className="bg-grid"></div>

      {/* Header / Navbar */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo" id="nav-logo">
            <div className="logo-icon">I</div>
            inquebrantavel<span>7</span>
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-link active" id="nav-link-home">
              Início
            </Link>
            <Link href="/sistemaindex" className="nav-link" id="nav-link-sistema">
              Sistema Index
            </Link>
            <a href="#recursos" className="nav-link" id="nav-link-features">
              Recursos
            </a>
            <a href="#contato" className="nav-link" id="nav-link-contact">
              Contato
            </a>
          </nav>
          <div className="nav-actions">
            <Link href="/sistemaindex" className="btn btn-primary btn-glow" id="nav-cta">
              Conhecer Sistema Index
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
          <div className="container" style={{ textAlign: "center", maxWidth: "900px" }}>
            <span className="badge" id="hero-badge">Páginas de Alta Conversão</span>
            <h1 style={{ marginBottom: "1.5rem" }}>
              Acelere suas Vendas com Páginas <span className="text-gradient">Inquebrantáveis</span>
            </h1>
            <p style={{ marginBottom: "2.5rem", fontSize: "1.25rem" }}>
              Desenvolvemos landing pages ultra-rápidas, psicologicamente otimizadas e com design premium. 
              Menos tempo de carregamento, mais conversão no seu bolso.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/sistemaindex" className="btn btn-primary btn-glow" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }} id="hero-primary-cta">
                Conhecer o Sistema Index
              </Link>
              <a href="#recursos" className="btn btn-secondary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }} id="hero-secondary-cta">
                Ver Recursos
              </a>
            </div>
          </div>
        </section>

        {/* Metrics Banner */}
        <section style={{ padding: "2rem 0", background: "rgba(255, 255, 255, 0.02)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem", textAlign: "center" }}>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--color-secondary)" }} id="metric-speed">&lt; 1.0s</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.25rem" }}>Tempo Médio de Carga</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--color-primary)" }} id="metric-conversion">+34%</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.25rem" }}>Taxa de Conversão Média</div>
              </div>
              <div>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--color-accent)" }} id="metric-uptime">99.9%</div>
                <div style={{ color: "var(--text-secondary)", fontSize: "0.9rem", marginTop: "0.25rem" }}>Disponibilidade Ativa</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="recursos" className="section-padding">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="badge badge-cyan">Por que nos escolher?</span>
              <h2>Padrão de Qualidade Inquebrantável</h2>
              <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                Criamos soluções sob medida focadas na única métrica que importa para o seu negócio: faturamento.
              </p>
            </div>

            <div className="grid-3">
              <div className="card" id="feature-card-speed">
                <div className="card-icon">⚡</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Velocidade Brutal</h3>
                <p style={{ fontSize: "1rem" }}>
                  Cada milissegundo custa dinheiro. Nossas páginas carregam instantaneamente para garantir que nenhum lead vá embora.
                </p>
              </div>

              <div className="card" id="feature-card-design">
                <div className="card-icon">🎨</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Design Premium</h3>
                <p style={{ fontSize: "1rem" }}>
                  Estética limpa, moderna e atraente. Transmita autoridade máxima e gere desejo imediato na sua oferta.
                </p>
              </div>

              <div className="card" id="feature-card-seo">
                <div className="card-icon">🚀</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>SEO Otimizado</h3>
                <p style={{ fontSize: "1rem" }}>
                  Estrutura semântica correta e metadados refinados para ranquear bem organicamente nos motores de busca.
                </p>
              </div>

              <div className="card" id="feature-card-copy">
                <div className="card-icon">🧠</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Foco em Conversão</h3>
                <p style={{ fontSize: "1rem" }}>
                  Arquitetura de informação baseada em gatilhos mentais e fluxo de leitura que guia o usuário até o botão de compra.
                </p>
              </div>

              <div className="card" id="feature-card-mobile">
                <div className="card-icon">📱</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Mobile First</h3>
                <p style={{ fontSize: "1rem" }}>
                  Mais de 80% do seu tráfego vem do celular. Nossas landing pages são totalmente adaptáveis e fluidas em telas menores.
                </p>
              </div>

              <div className="card" id="feature-card-analytics">
                <div className="card-icon">📈</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Rastreamento Preciso</h3>
                <p style={{ fontSize: "1rem" }}>
                  Integração fácil com Pixel do Facebook, Google Tag Manager e APIs de conversão. Sem perda de dados de tráfego.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Callout Section */}
        <section style={{ padding: "6rem 0", background: "linear-gradient(180deg, transparent, rgba(99, 102, 241, 0.05))", borderTop: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="card" style={{ padding: "4rem 3rem", display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }} id="sistema-index-callout">
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <span className="badge">Produto Destaque</span>
                <h2 style={{ fontSize: "2.5rem" }}>Conheça o <span className="text-gradient">Sistema Index</span></h2>
                <p style={{ margin: "1.5rem 0", fontSize: "1.15rem" }}>
                  O ecossistema completo desenhado para transformar a sua conversão. Descubra os métodos, 
                  estruturas e automações exclusivas para posicionar sua página de vendas no topo do mercado.
                </p>
                <div style={{ display: "flex", gap: "1rem", marginTop: "1rem", flexWrap: "wrap" }}>
                  <Link href="/sistemaindex" className="btn btn-primary btn-glow" id="callout-cta">
                    Acessar a Página de Vendas
                  </Link>
                  <a href="https://pay.hub.la/UnSQBjhzxkazbpNIYM1M" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" id="callout-direct-buy">
                    Comprar Agora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact/Lead capture placeholder */}
        <section id="contato" className="section-padding" style={{ borderTop: "1px solid var(--border-color)" }}>
          <div className="container" style={{ maxWidth: "600px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge badge-cyan">Newsletter</span>
              <h2>Fique por Dentro</h2>
              <p>Receba dicas de design, performance e conversão diretamente no seu e-mail.</p>
            </div>
            
            <form onSubmit="(e) => e.preventDefault()" className="card" style={{ padding: "2.5rem" }} id="newsletter-form">
              <div className="form-group">
                <label className="form-label" htmlFor="email-input">E-mail Corporativo</label>
                <input 
                  type="email" 
                  id="email-input" 
                  className="form-input" 
                  placeholder="seu@email.com" 
                  required 
                />
              </div>
              <button type="submit" className="btn btn-primary btn-glow" style={{ width: "100%", marginTop: "1rem" }} id="newsletter-submit">
                Inscrever-se na Lista
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo" id="footer-logo">
                <div className="logo-icon">I</div>
                inquebrantavel<span>7</span>
              </Link>
              <p>
                Landing pages ultra-rápidas e de alta performance de vendas. O seu sucesso online garantido.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Navegação</h4>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Início</Link></li>
                <li><Link href="/sistemaindex" className="footer-link">Sistema Index</Link></li>
                <li><a href="#recursos" className="footer-link">Recursos</a></li>
                <li><a href="#contato" className="footer-link">Contato</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Produtos</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/sistemaindex" className="footer-link">
                    Sistema Index
                  </Link>
                </li>
                <li>
                  <a href="https://pay.hub.la/UnSQBjhzxkazbpNIYM1M" target="_blank" rel="noopener noreferrer" className="footer-link">
                    Comprar Sistema Index
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} inquebrantavel7. Todos os direitos reservados.</p>
            <p>Feito com amor e Next.js.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
