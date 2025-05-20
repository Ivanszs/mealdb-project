import './App.css'
import MainLayout from './layouts/MainLayout.jsx'
import SearchForm from './components/SearchForm.jsx'
import Card from './components/Card.jsx'
import { useState, useEffect } from 'react';

function App() {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  // Fetch 6 random meals on mount
  useEffect(() => {
    let ignore = false;

    /**
     * Fetches six random meals from TheMealDB API in parallel.
     * This function performs six concurrent fetch requests to the random meal endpoint,
     * collects the results, filters out any failed or invalid responses, and updates the
     * state with the array of valid meal objects. If an error occurs during the fetch process,
     * it logs the error to the console.
     */
    const fetchRandomMeals = async () => {
      try {
        const responses = await Promise.all(
          Array.from({ length: 6 }, () =>
            fetch('https://www.themealdb.com/api/json/v1/1/random.php')
              .then(res => res.ok ? res.json() : Promise.reject('Fetch failed'))
              .catch(() => null)
          )
        );
        const randomMeals = responses
          .filter(Boolean)
          .map(r => r.meals?.[0])
          .filter(Boolean);

        if (!ignore) setMeals(randomMeals);
      } catch (error) {
        console.error('Error fetching random meals:', error);
      }
    };

    fetchRandomMeals();
    return () => { ignore = true; };
  }, []);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // Perform search logic here
    // For example, you can make an API call to fetch search results

    try {
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setMeals(data.meals || []);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
      
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     setMeals(data.meals || []);
    //     console.log('Search results:', data);
    //     console.log(data.meals[0].idMeal);
    //     // Handle the search results here
    //   })
    //   .catch(error => {
    //     console.error('Error fetching search results:', error);
    //   });
  };

  return (
    <MainLayout>
      <div className='p-4'>
        <div className="flex justify-center mt-8 mb-8">
          <SearchForm handleSearch={handleSearch} setSearch={setSearch} search={search} />
        </div>
        {meals.length === 0 && <p className='text-center py-8 text-gray-500'>No meals found</p>}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {meals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      </div>

      {/* <Card image='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' description='Lorem possum'/> */}
      {/* <Card image='https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' description='Lorem opossum'/> */}
    </MainLayout>
  );
}

export default App
