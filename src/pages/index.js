import React from "react"
import Splash from "../components/sections/splash"
import About from "../components/sections/about"
import Layout from "../components/layout"
import Work from "../components/sections/work"
import Education from "../components/sections/education"
import Contact from "../components/sections/contact"

export default function Home ({ data }) {
  return (
    <Layout>
      <Splash data={data.splash.edges}/>
      <About data={data.about.edges}/>
      <Work data={data.work.edges}/>
      <Education data={data.education.edges}/>
      <Contact data={data.contact.edges}/>
    </Layout>
  )
}

export const query = graphql`
  {
    splash: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/splash/" }}) {
      edges {
        node {
          frontmatter {
            title
            name
            subtitle
            buttonText
          }
          html
        }
      }
    }
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" }}) {
      edges {
        node {
          frontmatter {
            title
            aboutMe1
            aboutMe2
            aboutMe3
            aboutMe4
          }
          html
        }
      }
    }
    work: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/work/" }}) {
      edges {
        node {
          frontmatter {
            title
            work1
            work1D
            work2
            work2D
          }
        }
      }
    }
    education: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/education/" }}) {
      edges {
        node {
          frontmatter {
            title
            school
            description
            certs
          }
        }
      }
    }
    contact: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contact/" }}) {
      edges {
        node {
          frontmatter {
            title
            description
            hi
          }
        }
      }
    }
  }
`;