import React from "react"
import { Link, graphql } from "gatsby" 
import Layout from "../components/layout"
import SEO from "../components/seo"
import SliderMain from "../components/slider_main"

export default function Home({ data }) {
  return (
    <Layout>
      <SEO title="home" />
      <SliderMain />
      <div className="container">
      <h1>Создание сайтов под ключ. Заказать сайт в Киеве и Днепре -</h1>
      <h4>Posts</h4>
      {data.allWordpressPost.nodes.map((node) => (
        <div key={node.slug}>
          
          <Link to={node.slug}>
            <p>{node.title}</p>
          </Link>
          
          <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      ))}
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPost(filter: {categories: {elemMatch: {wordpress_id: {eq: 96}}}}) {
      nodes {
        title
        slug
        content
        excerpt
      }
    }
  }
`
