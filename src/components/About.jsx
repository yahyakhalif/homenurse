import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 100px 5% 0;
  background: white;
  margin-top: 80px;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Content = styled.div`
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--color-text);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--color-text);
    opacity: 0.9;
    margin-bottom: 2rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <Content>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bringing Quality Healthcare to Your Doorstep
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            At HomeNurse, we believe that quality healthcare should be accessible to everyone, 
            right in the comfort of their own home. Our mission is to connect patients with 
            trusted, licensed nurses who deliver compassionate care with the highest 
            professional standards.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Our network of qualified healthcare professionals ensures that you or your loved 
            ones receive personalized attention and expert care, making recovery and health 
            management more comfortable and convenient than ever.
          </motion.p>
        </Content>
        <ImageWrapper
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image 
            src="/assets/images/about-nurse.jpg" 
            alt="Nurse providing care to patient"
          />
        </ImageWrapper>
      </Container>
    </AboutSection>
  );
};

export default About; 