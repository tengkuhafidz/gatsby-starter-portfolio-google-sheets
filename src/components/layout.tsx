import React from 'react'
import Hero from './hero'
import Nav from './nav'

const Layout: React.FC = ({ children }) => (
  <div className="bg-gray-100 min-h-screen">
    <Hero />
    <div className="max-w-6xl mx-auto text-center">
      <Nav />
      <div>{children}</div>
    </div>
  </div>
)

export default Layout
