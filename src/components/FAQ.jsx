import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const FAQSection = styled.section`
  padding: 100px 5%;
  background: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 12px;
  overflow: hidden;
  background: var(--color-background);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Question = styled.button`
  width: 100%;
  text-align: left;
  padding: 1.5rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--color-text);
  font-weight: 500;
  transition: all 0.3s ease;

  svg {
    width: 24px;
    height: 24px;
    transition: transform 0.3s ease;
    transform: rotate(${props => props.isOpen ? '180deg' : '0deg'});
    color: var(--color-primary);
  }

  &:hover {
    color: var(--color-primary);
  }
`;

const Answer = styled(motion.div)`
  padding: 0 1.5rem 1.5rem;
  color: var(--color-text);
  line-height: 1.6;
  opacity: 0.9;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I schedule a nurse visit?",
      answer: "You can schedule a nurse visit by contacting us through our website, phone, or email. Our team will assess your needs and match you with the most suitable nurse within 24 hours."
    },
    {
      question: "Are your nurses licensed?",
      answer: "Yes, all our nurses are fully licensed and have undergone thorough background checks. We only work with experienced professionals who meet our strict quality standards."
    },
    {
      question: "What types of care services do you offer?",
      answer: "We offer a wide range of services including post-operative care, elderly care, chronic disease management, medication administration, wound care, and general health monitoring."
    },
    {
      question: "How much do your services cost?",
      answer: "Our service costs vary depending on the type and duration of care needed. We provide transparent pricing and will discuss all costs during your initial consultation. We also work with various insurance providers."
    },
    {
      question: "Do you provide 24/7 care services?",
      answer: "Yes, we offer round-the-clock care services. Our nurses can work in shifts to ensure continuous care when needed, and we have emergency support available 24/7."
    },
    {
      question: "What areas do you serve?",
      answer: "We currently serve Nairobi and surrounding areas. Contact us to check if we provide service in your specific location."
    }
  ];

  return (
    <FAQSection id="faq">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </SectionTitle>
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <Question
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                isOpen={openIndex === index}
              >
                {faq.question}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Question>
              <AnimatePresence>
                {openIndex === index && (
                  <Answer
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </FAQItem>
          ))}
        </FAQContainer>
      </Container>
    </FAQSection>
  );
};

export default FAQ; 