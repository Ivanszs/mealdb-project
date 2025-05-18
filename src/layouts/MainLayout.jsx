import React from 'react'

export default function MainLayout({children}) {
  //to show whats inside MainLayout (in jsx of App.jsx)
  //we need to pass children as props
  //otherwise nested components wont show
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-green-600 px-6 py-3 shadow">
        <h1 className="text-2xl font-bold text-white text-center">MealSearch</h1>
      </nav>
      <main className="max-w-4xl mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
