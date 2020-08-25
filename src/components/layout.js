import React from "react"
import styled from 'styled-components'
import { css } from "@emotion/core"
import { useStaticQuery, graphql, Link } from "gatsby"
import theme from '../styles/theme'
import { rhythm } from "../utils/typography"
import mix from '../styles/mix'

const StyledResumeButton = styled.a`
  ${mix.smallButton};
  margin-left: 10px;
  margin-top: 43px;
  font-size: 13px;
  float: right;
`;

const { colors, fontSizes } = theme

export default function Layout({ children }) {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `
    )
     return (
        <div
        css={css`
            margin: 0 auto;
            max-width: 100%;
            background-color: ${colors.navy};
            padding: ${rhythm(8 )};
            padding-top: ${rhythm(0)};
       `}
        >
            <Link to={`#`}>
                <h3
                css={css`
                    ${mix.smallButton};
                    float: left;
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                    border-color: ${colors.navy};
                    color: ${colors.lightestSlate};
                `}
                >
                {data.site.siteMetadata.title}
                </h3>
            </Link>
            <StyledResumeButton 
            href="/resume.pdf"
            target="_blank"
            rel="nofollow noopener noreferrer">
                Resume
            </StyledResumeButton>
            <Link to={`#contact`}>
                <h3
                css={css`
                    ${mix.smallButton};
                    float: right;
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                    border-color: ${colors.navy};
                    color: ${colors.lightestSlate};
                `}
                >
                Contact
                </h3>
            </Link>
            <Link to={`#education`}>
                <h3
                css={css`
                    ${mix.smallButton};
                    float: right;
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                    border-color: ${colors.navy};
                    color: ${colors.lightestSlate};
                `}
                >
                Education
                </h3>
            </Link>
            <Link to={`#experience`}>
                <h3
                css={css`
                    ${mix.smallButton};
                    float: right;
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                    border-color: ${colors.navy};
                    color: ${colors.lightestSlate};
                `}
                >
                Work Experience
                </h3>
            </Link>
            <Link to={`#about`}>
                <h3
                css={css`
                    ${mix.smallButton};
                    float: right;
                    margin-bottom: ${rhythm(2)};
                    display: inline-block;
                    font-style: normal;
                    border-color: ${colors.navy};
                    color: ${colors.lightestSlate};
                `}
                >
                About
                </h3>
            </Link>
            {children}
        </div>
    )
}