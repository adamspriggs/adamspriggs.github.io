import React from 'react'
import styled from 'styled-components'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import theme from '../../styles/theme';
import Section from '../../styles/Section'
import mix from '../../styles/mix'
const { colors, fontSizes, fonts, loaderDelay } = theme

const StyledContainer = styled(Section)`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  div {
    width: 100%;
  }
`;
const StyledOverline = styled.h1`
  color: ${colors.green};
  margin: 0 0 20px 3px;
  font-size: ${fontSizes.md};
  font-family: ${fonts.SFMono};
  font-weight: normal;
  font-size: ${fontSizes.sm};
`;
const StyledTitle = styled.h2`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.lightestSlate};
  margin: 0;
  font-size: 70px;
`;
const StyledSubtitle = styled.h3`
  font-size: 80px;
  line-height: 1.1;
  color: ${colors.slate};
  font-size: 70px;
`;
const StyledEmailLink = styled.a`
  ${mix.bigButton};
  margin-top: 100px;
`;

export default function Splash({ data }) {
    const { frontmatter, html } = data[0].node

    const one = () => (
        <StyledOverline style={{ transitionDelay: '100ms'}}>{frontmatter.title}</StyledOverline>
    )
    const two = () => (
        <StyledTitle style={{transitionDelay: '200ms'}}>{frontmatter.name}</StyledTitle>
    )
    const three = () => (
        <StyledSubtitle style={{transitionDelay: '300ms'}}>{frontmatter.subtitle}</StyledSubtitle>
    )
    const four = () => (
      <div style={{ transitionDelay: '500ms' }}>
        <h1>

        </h1>
        <StyledEmailLink href={`mailto:adam.spriggs7@gmail.com`}>Get In Touch</StyledEmailLink>
      </div>
    )
    const items = [one, two, three, four]
    return (
        <StyledContainer>
            <TransitionGroup component={null}>
                {items.map((item, i) => (
                    <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                        {item}
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </StyledContainer>
    )
}