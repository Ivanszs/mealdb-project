import './App.css'
import MainLayout from './layouts/MainLayout.jsx'
import SearchForm from './components/SearchForm.jsx'
import { useState } from 'react';

function App() {

  const [search, setSearch] = useState('');

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Perform search logic here
    // For example, you can make an API call to fetch search results
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log('Search results:', data);

        // Handle the search results here
      })
      .catch(error => {
        console.error('Error fetching search results:', error);
      });
  }

  return (
    <MainLayout>
      <div className="flex justify-center mt-8 mb-8">
        <SearchForm handleSearch={handleSearch} setSearch={setSearch} search={search}/>
      </div>
      {/* <Card image = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' description = 'Lorem possum'/>
      <Card image = 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' description = 'Lorem opossum'/> */}
    </MainLayout>
  )
}

export default App
