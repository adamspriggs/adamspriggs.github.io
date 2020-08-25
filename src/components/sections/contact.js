import React from 'react'
import theme from '../../styles/theme'
import styled from 'styled-components'
import Section from '../../styles/Section'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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

const StyledTitle = styled.h2`
   color: ${colors.lightestSlate};
   font-size: 50px;
   margin: 0;
   line-height: 1.1;
`;

const StyledDescription = styled.h3`
   color: ${colors.slate};
   margin-top: 25px;
   width: 80%;
   max-width: 1000px;
   margin-bottom: 50px;
`;

const StyledEmailLink = styled.a`
  ${mix.bigButton};
  margin-left: 30%;
`;

export default function Contact ({ data }) {
    const {frontmatter, html} = data[0].node

    const one = () => (
        <StyledTitle>
            {frontmatter.title}
        </StyledTitle>
    )
    
    const two = () => (
        <StyledDescription>
            {frontmatter.description}
        </StyledDescription>
    )

    const three = () => (
        <div>
            <StyledEmailLink href={'mailto:adam.spriggs7@gmail.com'}>{frontmatter.hi}</StyledEmailLink>
        </div>
    )

    const items = [one, two, three]

    return (
        <StyledContainer id="contact">
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