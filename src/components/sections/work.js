import React from 'react'
import theme from '../../styles/theme'
import styled from 'styled-components'
import Section from '../../styles/Section'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import mix from '../../styles/mix'

const {colors, fontSizes, loaderDelay } = theme

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

const StyledName = styled.h3`
   color: ${colors.slate};
   font-size: 40px;
   line-height: 1.1;
`;

const StyledDescription = styled.h3`
   color: ${colors.slate};
   margin-top: 25px;
   width: 80%;
   max-width: 1000px;
`;

export default function Work ({ data }) {
    const { frontmatter, html } = data[0].node

    const one = () => (
        <StyledTitle style={{ transitionDelay: '100ms' }}>
            {frontmatter.title}
        </StyledTitle>
    )
    const two1 = () => (
        <StyledName>
            {frontmatter.work1}
        </StyledName>
    )
    const two2 = () => (
        <StyledDescription>
            {frontmatter.work1D}
        </StyledDescription>
    )
    const three1 = () => (
        <StyledName>
            {frontmatter.work2}
        </StyledName>
    )
    const three2 = () => (
        <StyledDescription>
            {frontmatter.work2D}
        </StyledDescription>
    )

    const items = [one, two1, two2, three1, three2]

    return (
        <StyledContainer id="experience">
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