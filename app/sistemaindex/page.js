"use client";

import { useState } from "react";
import Link from "next/link";

export default function SistemaIndex() {
  // State for active FAQ question
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const checkoutUrl = "https://pay.hub.la/UnSQBjhzxkazbpNIYM1M";

  const faqData = [
    {
      question: "Para quem é o Sistema Index?",
      answer: "O Sistema Index é ideal para infoprodutores, afiliados, agências de lançamentos, coprodutores e prestadores de serviços que precisam de páginas de vendas com alta taxa de conversão e velocidade de carregamento extrema.",
    },
    {
      question: "Preciso saber programar para usar o Sistema Index?",
      answer: "Não! O Sistema Index foi estruturado para ser simples de implementar, contendo templates prontos e instruções passo a passo para que você consiga colocar sua página no ar sem precisar digitar linhas de código complexas.",
    },
    {
      question: "Como funciona o acesso ao produto?",
      answer: "Assim que o seu pagamento for aprovado pela Hubla, você receberá um e-mail com as suas credenciais de login para a nossa área de membros exclusiva, onde todo o conteúdo e templates estão disponíveis.",
    },
    {
      question: "O pagamento na Hubla é seguro?",
      answer: "Totalmente. A Hubla é uma das maiores e mais seguras plataformas de pagamentos para criadores da América Latina. Seus dados financeiros são completamente criptografados e protegidos.",
    },
    {
      question: "Qual é a garantia do produto?",
      answer: "Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você achar que o Sistema Index não é para você, basta solicitar o reembolso dentro desse prazo e devolveremos 100% do seu dinheiro, sem burocracia.",
    },
    {
      question: "Terei suporte em caso de dúvidas?",
      answer: "Sim! Dentro da área de membros, temos um canal de suporte direto para ajudar você a configurar suas páginas de forma ágil e descomplicada.",
    }
  ];

  return (
    <>
      {/* Background patterns */}
      <div className="bg-gradient-mesh"></div>
      <div className="bg-grid"></div>

      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <Link href="/" className="logo" id="sales-nav-logo">
            <div className="logo-icon">I</div>
            inquebrantavel<span>7</span>
          </Link>
          <nav className="nav-links">
            <Link href="/" className="nav-link" id="sales-nav-home">
              Início
            </Link>
            <Link href="/sistemaindex" className="nav-link active" id="sales-nav-sistema">
              Sistema Index
            </Link>
            <a href="#beneficios" className="nav-link" id="sales-nav-benefits">
              Benefícios
            </a>
            <a href="#pricing" className="nav-link" id="sales-nav-pricing-link">
              Preço
            </a>
            <a href="#faq" className="nav-link" id="sales-nav-faq-link">
              Dúvidas
            </a>
          </nav>
          <div className="nav-actions">
            <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow" id="sales-nav-cta">
              Comprar Agora
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* Sales Hero Section */}
        <section className="section-padding" style={{ position: "relative", overflow: "hidden", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <span className="badge badge-cyan" id="sales-hero-badge">MÉTODO COMPLETO E ESTRUTURADO</span>
            <h1 style={{ marginBottom: "1.5rem", lineHeight: "1.1" }}>
              Domine a Engrenagem de Vendas com o <span className="text-gradient">Sistema Index</span>
            </h1>
            <p style={{ marginBottom: "2.5rem", fontSize: "1.25rem", color: "var(--text-secondary)" }}>
              O método definitivo para estruturar, desenhar e programar páginas de vendas inquebrantáveis 
              que carregam em menos de 1 segundo e convertem tráfego frio em clientes todos os dias.
            </p>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow" style={{ padding: "1.25rem 2.5rem", fontSize: "1.2rem", width: "100%", maxWidth: "450px" }} id="sales-hero-cta">
                QUERO ACESSO IMEDIATO
              </a>
              <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.85rem", color: "var(--text-muted)", flexWrap: "wrap", justifyContent: "center", marginTop: "0.5rem" }}>
                <span>🔒 Compra 100% Segura</span>
                <span>🛡️ Garantia de 7 Dias</span>
                <span>⚡ Acesso Vitalício</span>
              </div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section style={{ padding: "5rem 0", background: "rgba(239, 68, 68, 0.02)", borderTop: "1px solid rgba(239, 68, 68, 0.1)", borderBottom: "1px solid rgba(239, 68, 68, 0.1)" }}>
          <div className="container" style={{ maxWidth: "800px" }}>
            <h2 style={{ textAlign: "center", background: "linear-gradient(135deg, #ffffff 30%, #fca5a5 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Por que a maioria das páginas não vende?
            </h2>
            <p style={{ textAlign: "center", marginBottom: "3rem" }}>
              Se você está rodando anúncios para uma página com estes problemas, você está literalmente rasgando dinheiro:
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div className="card" style={{ padding: "1.5rem 2rem", borderLeft: "4px solid #ef4444" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#f87171" }}>❌ Lentidão Frustrante</h3>
                <p style={{ fontSize: "0.95rem" }}>Se sua página demora mais de 3 segundos para carregar, mais de 50% dos seus visitantes desistem antes mesmo de ver sua oferta. A lentidão destrói seu ROI.</p>
              </div>
              <div className="card" style={{ padding: "1.5rem 2rem", borderLeft: "4px solid #ef4444" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#f87171" }}>❌ Design Amador e Sem Autoridade</h3>
                <p style={{ fontSize: "0.95rem" }}>Páginas mal alinhadas, com cores confusas ou elementos ultrapassados afastam o cliente. A falta de confiança visual bloqueia a venda imediata.</p>
              </div>
              <div className="card" style={{ padding: "1.5rem 2rem", borderLeft: "4px solid #ef4444" }}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", color: "#f87171" }}>❌ Copywriting Sem Estrutura</h3>
                <p style={{ fontSize: "0.95rem" }}>Textos sem uma sequência lógica baseada em comportamento humano. Não basta ter um produto bom, a copy precisa gerar urgência e remover todas as objeções.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="beneficios" className="section-padding">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "4rem" }}>
              <span className="badge">Os Três Pilares</span>
              <h2>Como o Sistema Index Resolve Isso</h2>
              <p style={{ maxWidth: "600px", margin: "0 auto" }}>
                Nossa metodologia foca na junção perfeita entre design premium, tecnologia moderna e psicologia de vendas.
              </p>
            </div>

            <div className="grid-3">
              <div className="card" id="sales-pillar-speed">
                <div className="card-icon" style={{ color: "var(--color-secondary)" }}>⚡</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Velocidade Limite</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Otimização de imagens, código limpo e carregamento assíncrono. Sua página vai carregar de forma instantânea em computadores e celulares, aumentando as chances de compra.
                </p>
              </div>

              <div className="card" id="sales-pillar-copy">
                <div className="card-icon" style={{ color: "var(--color-primary)" }}>🧠</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Estrutura Neuro-Persuasiva</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Um fluxo de blocos otimizado para prender a atenção do lead do início ao fim: Gancho, Problema, Solução, Oferta, Quebra de Objeções e Fechamento.
                </p>
              </div>

              <div className="card" id="sales-pillar-tracking">
                <div className="card-icon" style={{ color: "var(--color-accent)" }}>🎯</div>
                <h3 style={{ fontSize: "1.35rem", marginBottom: "1rem" }}>Rastreamento Blindado</h3>
                <p style={{ fontSize: "0.95rem" }}>
                  Implementação limpa de scripts e APIs de conversão. Tenha dados exatos para otimizar suas campanhas sem perdas por conta de adblockers ou atualizações de privacidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables/What's inside Section */}
        <section style={{ padding: "6rem 0", background: "rgba(255, 255, 255, 0.01)", borderTop: "1px solid var(--border-color)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="badge badge-cyan">O QUE VOCÊ VAI RECEBER</span>
                <h2 style={{ marginBottom: "1.5rem" }}>Conteúdo Completo do Sistema</h2>
                <p style={{ marginBottom: "2rem" }}>
                  Você terá acesso a uma biblioteca completa de conhecimentos práticos e modelos estruturados prontos para deploy.
                </p>
                <ul className="feature-list">
                  <li className="feature-list-item">
                    <span className="feature-list-icon">✓</span>
                    <div>
                      <strong>Templates de Alta Conversão:</strong> Modelos estruturados de páginas de vendas testados e validados.
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <span className="feature-list-icon">✓</span>
                    <div>
                      <strong>Módulo de Copywriting:</strong> Como escrever Headlines irresistíveis e argumentos de quebra de objeções rápidos.
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <span className="feature-list-icon">✓</span>
                    <div>
                      <strong>Otimização de Performance:</strong> Passo a passo prático para atingir nota máxima no Google PageSpeed.
                    </div>
                  </li>
                  <li className="feature-list-item">
                    <span className="feature-list-icon">✓</span>
                    <div>
                      <strong>Aulas Práticas de Configuração:</strong> Desde o registro do domínio até a hospedagem e integração com checkout.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card" style={{ background: "rgba(13, 17, 33, 0.7)" }}>
                <h3 style={{ fontSize: "1.5rem", marginBottom: "1.5rem", color: "var(--color-secondary)" }}>Resultados Esperados</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  <div style={{ borderBottom: "1px solid rgba(255, 255, 255, 0.05)", paddingBottom: "1rem" }}>
                    <div style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--text-muted)" }}>Antes</div>
                    <div style={{ fontSize: "1.1rem", textDecoration: "line-through", color: "var(--text-secondary)" }}>Hospedagem lenta, conversões de 1-2%, ROI no limite do prejuízo.</div>
                  </div>
                  <div>
                    <div style={{ fontSize: "0.85rem", textTransform: "uppercase", color: "var(--color-accent)", fontWeight: "bold" }}>Depois com Sistema Index</div>
                    <div style={{ fontSize: "1.25rem", color: "white", fontWeight: "bold" }}>Páginas que abrem em menos de 1s, taxa de conversão acima de 4%, lucro nas campanhas escalável.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="section-padding">
          <div className="container" style={{ maxWidth: "600px" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge">CONDIÇÃO EXCLUSIVA</span>
              <h2>Garanta sua Vaga Hoje</h2>
              <p>Comece a construir páginas inquebrantáveis agora mesmo.</p>
            </div>

            <div className="card pricing-card" style={{ textAlign: "center", position: "relative" }} id="sales-pricing-card">
              <span className="pricing-ribbon">Oferta Limitada</span>
              <h3 style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>Acesso Vitalício</h3>
              <p style={{ fontSize: "0.95rem", color: "var(--text-secondary)" }}>Tenha o Sistema Index para sempre, com todas as atualizações inclusas.</p>
              
              <div className="price-original" style={{ marginTop: "2rem" }}>De R$ 997,00</div>
              <div className="price" style={{ justifyContent: "center" }}>
                R$ 297<span>,00</span>
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-accent)", fontWeight: "700", marginBottom: "2rem" }}>
                ou em até 12x de R$ 29,64 no cartão
              </p>

              <ul className="feature-list" style={{ textAlign: "left", marginBottom: "2.5rem" }}>
                <li className="feature-list-item">
                  <span className="feature-list-icon">✓</span>
                  <span>Acesso imediato e vitalício à plataforma</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-list-icon">✓</span>
                  <span>Todos os templates de páginas inclusos</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-list-icon">✓</span>
                  <span>Scripts de rastreamento avançados</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-list-icon">✓</span>
                  <span>Suporte direto na área de membros</span>
                </li>
                <li className="feature-list-item">
                  <span className="feature-list-icon">✓</span>
                  <span>Atualizações gratuitas de novos módulos</span>
                </li>
              </ul>

              <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-glow" style={{ width: "100%", padding: "1.25rem", fontSize: "1.2rem" }} id="pricing-cta-button">
                GARANTIR MINHA VAGA
              </a>
              
              <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "1rem" }}>
                Garantia de 7 dias ou seu dinheiro de volta.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive FAQ Section */}
        <section id="faq" className="section-padding" style={{ borderTop: "1px solid var(--border-color)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge badge-cyan">DÚVIDAS FREQUENTES</span>
              <h2>Perguntas Comuns</h2>
              <p>Tire suas dúvidas antes de garantir o seu acesso ao Sistema Index.</p>
            </div>

            <div className="faq-list">
              {faqData.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${activeFaq === index ? "active" : ""}`}
                  id={`faq-item-${index}`}
                >
                  <button 
                    className="faq-question" 
                    onClick={() => toggleFaq(index)}
                    aria-expanded={activeFaq === index ? "true" : "false"}
                    id={`faq-btn-${index}`}
                  >
                    {faq.question}
                    <div className="faq-icon"></div>
                  </button>
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo" id="sales-footer-logo">
                <div className="logo-icon">I</div>
                inquebrantavel<span>7</span>
              </Link>
              <p>
                O melhor ecossistema de vendas online e desenvolvimento de landing pages.
              </p>
            </div>
            <div>
              <h4 className="footer-heading">Navegação</h4>
              <ul className="footer-links">
                <li><Link href="/" className="footer-link">Início</Link></li>
                <li><Link href="/sistemaindex" className="footer-link">Sistema Index</Link></li>
                <li><a href="#beneficios" className="footer-link">Benefícios</a></li>
                <li><a href="#pricing" className="footer-link">Preços</a></li>
                <li><a href="#faq" className="footer-link">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-heading">Contato & Suporte</h4>
              <ul className="footer-links">
                <li><span className="footer-link" style={{ cursor: "default" }}>suporte@inquebrantavel7.com</span></li>
                <li>
                  <a href={checkoutUrl} target="_blank" rel="noopener noreferrer" className="footer-link">
                    Página de Checkout
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
