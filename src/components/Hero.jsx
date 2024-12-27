import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 80px 5% 0;
  background: linear-gradient(135deg, var(--color-background), white);
  position: relative;
  overflow: hidden;
`;

const HeroContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const HeroContent = styled.div`
  z-index: 1;
  padding: 2rem 0;
  margin-top: 2rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion.button)`
  background: var(--color-primary);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-secondary);
  }
`;

const HeroImageWrapper = styled(motion.div)`
  position: relative;
  height: 500px;
  
  @media (max-width: 768px) {
    height: 300px;
    grid-row: 1;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Compassionate Care, Right Where You Need It
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Home Nurse connects you with licensed nurses for personalized home healthcare services.
          </Subtitle>
          <Link to="contact" smooth={true} duration={500}>
            <CTAButton
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </CTAButton>
          </Link>
        </HeroContent>
        <HeroImageWrapper
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <HeroImage 
            src="/assets/images/hero-nurse.jpg" 
            alt="Nurse providing compassionate care to elderly patient"
          />
        </HeroImageWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

export default Hero; 