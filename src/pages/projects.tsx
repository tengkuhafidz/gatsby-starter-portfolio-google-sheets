import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Projects from '../components/Projects/all-projects'

const ProjectsPage = () => (
  <Layout>
    <SEO title="projects" />
    <Projects />
  </Layout>
)

export default ProjectsPage
