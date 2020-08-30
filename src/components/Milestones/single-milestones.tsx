import React from 'react'

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
      <h4 className="font-bold text-lg">{title}</h4>
      <p>{description}</p>
      <span className={`font-light bg-gray-500 text-gray-100 px-1 mx-1`}>{status}</span>
    </div>
  )
}

export default SingleProject
