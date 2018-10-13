import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <ul style={{ marginLeft: 0 }}>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id} style={{ listStyle: 'none' }}>
          <h5 style={{ fontWeight: 'normal', color: '#E68C3D', marginBottom: 0 }}>{node.frontmatter.date}</h5>
          <Link to={node.fields.slug} style={{ color: 'inherit',  }}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
)

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`