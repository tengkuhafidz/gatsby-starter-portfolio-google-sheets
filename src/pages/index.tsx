import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Projects from '../components/Projects/all-projects'

const Home = () => (
  <Layout>
    <SEO title="home" />
    <Projects />
  </Layout>
)

export default Home
