import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
  background: ${props => props.scrolled ? 'white' : 'transparent'};
  transition: background 0.3s ease;
  z-index: 999;

  @media (max-width: 768px) {
    justify-content: center;
    position: relative;
  }
`;

const LogoWrapper = styled.div`
  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  cursor: pointer;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-primary);
  }
`;

const CTAButton = styled(Link)`
  background: var(--color-primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background: var(--color-secondary);
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 5%;
    right: auto;
  }

  svg {
    width: 24px;
    height: 24px;
    color: var(--color-text);
  }
`;

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Nav scrolled={scrolled}>
        <MenuButton onClick={() => setIsMenuOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MenuButton>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <NavLinks>
          <NavLink to="about" smooth={true} duration={500}>About</NavLink>
          <NavLink to="services" smooth={true} duration={500}>Services</NavLink>
          <NavLink to="features" smooth={true} duration={500}>Features</NavLink>
          <NavLink to="testimonials" smooth={true} duration={500}>Testimonials</NavLink>
          <NavLink to="faq" smooth={true} duration={500}>FAQ</NavLink>
          <CTAButton to="contact" smooth={true} duration={500}>Contact Us</CTAButton>
        </NavLinks>
      </Nav>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
