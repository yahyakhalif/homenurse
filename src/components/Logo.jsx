import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  height: 40px;
`;

const LogoIcon = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 32px;
    height: 32px;
    overflow: visible;
    color: var(--color-primary);
  }
`;

const LogoText = styled.span`
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--color-primary);
  line-height: 1;
  display: flex;
  align-items: center;
`;

const Logo = () => {
  return (
    <LogoContainer to="hero" smooth={true} duration={500}>
      <LogoIcon>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z"
            fill="currentColor"
          />
          <path
            d="M13 7h-2v3H8v2h3v3h2v-3h3v-2h-3V7z"
            fill="white"
          />
        </svg>
      </LogoIcon>
      <LogoText>HomeNurse</LogoText>
    </LogoContainer>
  );
};

export default Logo; 