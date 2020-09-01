import React from 'react'
import Hero from './hero'
import Nav from './nav'

const Layout: React.FC = ({ children }) => (
  <div className="bg-gray-100 min-h-screen pb-16">
    <Hero />
    <div className="max-w-6xl px-4 mx-auto text-center">
      <Nav />
      <div>{children}</div>
    </div>
  </div>
)

export default Layout
