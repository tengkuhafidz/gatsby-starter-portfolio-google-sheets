import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Milestones from '../components/Milestones/all-milestones'

const MilestonesPage = () => (
  <Layout>
    <SEO title="milestones" />
    <Milestones />
  </Layout>
)

export default MilestonesPage
