"use client";
import { useState } from "react";
import { styles } from "./styles";

const faqItems = [
  {
    q: "Como funciona o processo de adoção?",
    a: "O processo começa com uma conversa para entendermos sua rotina, seu espaço e o perfil de animal mais adequado para sua família. A partir daí, apresentamos os animais disponíveis e avaliamos juntos a melhor combinação.",
  },
  {
    q: "A adoção tem custo?",
    a: "A adoção em si não é uma venda. Em alguns casos, pode ser solicitada uma contribuição solidária para ajudar com custos de cuidado, castração, vacinação ou tratamento. Isso é conversado com transparência durante o processo.",
  },
  {
    q: "Posso adotar morando em apartamento?",
    a: "Sim, desde que o ambiente seja seguro, telado quando necessário, e adequado ao porte e comportamento do animal. Conversamos sobre isso durante o processo de adoção.",
  },
  {
    q: "Os animais são castrados e vacinados?",
    a: "Sempre que possível, os animais são encaminhados com acompanhamento veterinário. As informações de cada pet — saúde, histórico e necessidades — são compartilhadas de forma transparente durante o processo.",
  },
  {
    q: "Como posso ajudar sem adotar?",
    a: "Você pode doar ração ou itens de cuidado, apadrinhar um animal, contribuir com custos veterinários, ser voluntário, oferecer lar temporário ou simplesmente divulgar os animais nas suas redes sociais.",
  },
  {
    q: "Como faço para ser lar temporário?",
    a: "Entre em contato pelo WhatsApp para conversarmos sobre sua disponibilidade, espaço e experiência com animais. O lar temporário é uma ajuda enorme para os pets que aguardam adoção.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section style={styles.section} id="faq" aria-labelledby="faq-title">
      <div style={styles.container}>
        <div style={styles.header}>
          <h2 style={styles.title} id="faq-title">
            Perguntas frequentes
          </h2>
        </div>

        <div style={styles.listContainer}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            return (
              <div key={index} style={styles.item}>
                <button
                  style={styles.question(isOpen, isHovered)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  aria-expanded={isOpen}
                  onClick={() => toggleFaq(index)}
                >
                  {item.q}
                  <span style={styles.icon(isOpen)} aria-hidden="true">
                    +
                  </span>
                </button>
                <div style={styles.answerContainer(isOpen)}>
                  <div style={styles.answerInner}>
                    <div style={styles.answerText}>
                      <p>{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
