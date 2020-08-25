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
`;

const StyledName = styled.h3`
   color: ${colors.slate};
   font-size: 40px;
   line-height: 1.1;
`;

export default function Education({ data }) {
    const { frontmatter, html } = data[0].node

    const one = () => (
        <StyledTitle>
            {frontmatter.title}
        </StyledTitle>
    )

    const two = () => (
        <StyledName>
            {frontmatter.school}
        </StyledName>
    )
    
    const three = () => (
        <StyledDescription>
            {frontmatter.description}
        </StyledDescription>
    )
    
    const four = () => (
        <StyledDescription>
            {frontmatter.certs}
        </StyledDescription>
    )

    const items = [one, two, three, four]

    return (
        <StyledContainer id="education">
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