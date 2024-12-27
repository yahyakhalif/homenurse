import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Logo from './Logo';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #2C2320, #3D2B2B);
  color: white;
  padding: 80px 5% 40px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(
      90deg,
      var(--color-secondary),
      var(--color-primary),
      var(--color-accent)
    );
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }

  @media (max-width: 568px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Column = styled.div`
  p {
    margin-top: 1.5rem;
    opacity: 0.9;
    line-height: 1.6;
  }
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: var(--color-accent);
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;

  li {
    margin-bottom: 1rem;
  }

  a {
    opacity: 0.9;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      opacity: 1;
      color: var(--color-accent);
    }
  }
`;

const ContactInfo = styled.div`
  margin-top: 1rem;

  p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
    opacity: 0.9;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 1;
    }
  }

  svg {
    width: 20px;
    height: 20px;
    color: var(--color-accent);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  opacity: 0.9;
  font-size: 0.9rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Column>
          <Logo />
          <p>
            Providing professional and compassionate healthcare services in the
            comfort of your home. Licensed nurses, transparent pricing, and
            personalized care plans.
          </p>
        </Column>

        <Column>
          <Title>Quick Links</Title>
          <FooterLinks>
            <li><Link to="about" smooth={true} duration={500}>About Us</Link></li>
            <li><Link to="services" smooth={true} duration={500}>Our Services</Link></li>
            <li><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li><Link to="features" smooth={true} duration={500}>HomeNurse Features</Link></li>
            <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </FooterLinks>
        </Column>

        <Column>
          <Title>Services</Title>
          <FooterLinks>
            <li>Home Care</li>
            <li>Elder Care</li>
            <li>Post-Surgery Care</li>
            <li>Chronic Disease Management</li>
          </FooterLinks>
        </Column>

        <Column>
          <Title>Contact Us</Title>
          <ContactInfo>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Nairobi, Kenya
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              info@homenurse.co.ke
            </p>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +254 700 000000
            </p>
          </ContactInfo>
        </Column>
      </Container>
      <Copyright>
        © {new Date().getFullYear()} Home Nurse. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

export default Footer; 