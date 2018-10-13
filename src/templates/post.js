import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data }) => {
  const post = data.markdownRemark 
  return (
    <Layout>
      <h3 style={{ fontWeight: 'normal', color: '#E68C3D', marginBottom: '0.5rem' }}>{post.frontmatter.date}</h3>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`