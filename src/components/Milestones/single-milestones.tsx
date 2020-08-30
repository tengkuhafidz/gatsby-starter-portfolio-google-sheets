import React from 'react'
import { Project } from '../../models'

interface Props {
  project: Project
}

const SingleProject: React.FC<Props> = ({ project: { title, description, status, url } }) => {
  const handleNavigate = () => {
    if (typeof window !== undefined) {
      window.open(url, '_blank')
    }
  }

  return (
    <div
      className="col-auto bg-white p-4 shadow rounded-lg hover:shadow-lg cursor-pointer"
      onClick={() => handleNavigate()}
    >
      <span className={`font-light bg-black text-gray-100 px-1 mx-1`}>{status}</span>
      <h4 className="font-bold text-lg">{title}</h4>
      <p>{description}</p>
    </div>
  )
}

export default SingleProject
