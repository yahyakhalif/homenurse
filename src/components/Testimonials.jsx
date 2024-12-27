import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const TestimonialsSection = styled.section`
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

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: var(--color-background);
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const Quote = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`;

const AuthorInfo = styled.div`
  h4 {
    font-size: 1.1rem;
    color: var(--color-text);
    margin-bottom: 0.2rem;
  }

  p {
    font-size: 0.9rem;
    color: var(--color-text);
    opacity: 0.7;
  }
`;

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Home Nurse has been a blessing for our family. The care they provide for my mother is exceptional, and we couldn't be more grateful.",
      name: "Sarah Mugambi",
      location: "Nairobi, Kenya",
      initial: "S"
    },
    {
      quote: "The nurses are not just skilled professionals but also incredibly compassionate. They made my recovery so much more comfortable.",
      name: "Michael Omondi",
      location: "Nairobi, Kenya",
      initial: "M"
    },
    {
      quote: "Having a qualified nurse come to our home has made managing my father's health needs so much easier. Highly recommended!",
      name: "Emily Cherono",
      location: "Nairobi, Kenya",
      initial: "E"
    },
    {
      quote: "The personalized care and attention my grandmother receives is outstanding. The nurses treat her like family and are always professional.",
      name: "Hassan Ahmed",
      location: "Nairobi, Kenya",
      initial: "H"
    },
    {
      quote: "After my surgery, their post-operative care was exceptional. The convenience of having professional care at home made recovery much easier.",
      name: "Grace Wanjiku",
      location: "Nairobi, Kenya",
      initial: "G"
    },
    {
      quote: "The level of professionalism and dedication shown by the nurses is remarkable. They've made such a positive impact on my uncle's recovery.",
      name: "Peter Kipchoge",
      location: "Nairobi, Kenya",
      initial: "P"
    }
  ];

  return (
    <TestimonialsSection id="testimonials">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What Our Clients Say
        </SectionTitle>
        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Quote>"{testimonial.quote}"</Quote>
              <Author>
                <AuthorImage>{testimonial.initial}</AuthorImage>
                <AuthorInfo>
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.location}</p>
                </AuthorInfo>
              </Author>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsSection>
  );
};

export default Testimonials; 