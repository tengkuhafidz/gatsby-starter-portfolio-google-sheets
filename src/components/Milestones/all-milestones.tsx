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
  const renderItems = () => {
    return allMilestonesSheetsData.nodes.map((project) => <SingleProject project={project} key={project.id} />)
  }
  return <div className="grid grid-cols-4 gap-4">{renderItems()}</div>
}

export default Projects
