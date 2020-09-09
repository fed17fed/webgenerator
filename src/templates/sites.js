import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"

export default function Sites({ data }) {
  const post = data.allWordpressPost.nodes[0]
  console.log(post)
  return (
    <Layout>
      <div>
        <h1>{post.title}</h1>
        <div>{post.slug}</div>
        <img src={post.featured_media.link}></img>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Link to="/">
            <p>Назад на главную</p>
          </Link>
    </Layout>
  )
}

export const query = graphql`
query($slug: String!) {
  allWordpressPost(filter: {slug: {eq: $slug}}) {
    nodes {
      title
      slug
      content
      excerpt
      featured_media {
        link
      }
    }
  }
}
`