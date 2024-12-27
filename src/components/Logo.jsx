import React from 'react';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled.svg`
  width: 32px;
  height: 32px;
`;

const LogoText = styled.span`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <LogoIcon viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Heart shape with cross */}
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill="var(--color-primary)"
        />
        {/* Cross symbol */}
        <path
          d="M13 8h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"
          fill="white"
        />
      </LogoIcon>
      <LogoText>HomeNurse</LogoText>
    </LogoWrapper>
  );
};

export default Logo; 