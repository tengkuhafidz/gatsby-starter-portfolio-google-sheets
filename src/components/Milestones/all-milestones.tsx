import React from 'react'
import SingleProject from './single-milestones'
import { useStaticQuery, graphql } from 'gatsby'

const Projects: React.FC = () => {
  const { allMilestonesSheetsData } = useStaticQuery(graphql`
    query MilestonesQuery {
      allMilestonesSheetsData {
        nodes {
          description
          id
          status
          title
          url
        }
      }
    }
  `)

  const sortedMilestones = allMilestonesSheetsData.nodes.sort((a, b) => {
    const dateA = new Date(a.status)
    const dateB = new Date(b.status)
    return dateB - dateA
  })

  console.log('sortedMilestones', sortedMilestones)

  const renderItems = () => {
    return sortedMilestones.map((project) => <SingleProject project={project} key={project.id} />)
  }
  return <div className="grid md:grid-cols-4 gap-4">{renderItems()}</div>
}

export default Projects
