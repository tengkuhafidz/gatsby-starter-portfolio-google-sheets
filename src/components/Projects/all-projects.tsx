import React from 'react'
import SingleProject from './single-project'
import { useStaticQuery, graphql } from 'gatsby'

const Projects: React.FC = () => {
  const { allProjectsSheetsData } = useStaticQuery(graphql`
    query ProjectsQuery {
      allProjectsSheetsData {
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
    return allProjectsSheetsData.nodes.map((project) => <SingleProject project={project} key={project.id} />)
  }
  return <div className="grid grid-cols-4 gap-4">{renderItems()}</div>
}

export default Projects
