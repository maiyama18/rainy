import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} style={{ marginBottom: '1rem' }}>
          <h4 style={{ fontWeight: 'normal', color: '#E68C3D', marginBottom: 0 }}>{node.frontmatter.date}</h4>
          <Link to={node.fields.slug} style={{ color: 'inherit',  }}>
            <h3 style={{ fontWeight: 'lighter' }}>{node.frontmatter.title}</h3>
          </Link>
        </div>
      ))}
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`