import { useEffect, useState } from 'react';
import Dashboard from '../components/Dashboard';
import Hero from '../components/Hero';
import { courses } from '../data/coursesData.js';

function DashboardPage() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      try {
        setCourseData(courses);
        setIsLoading(false);
      } catch (err) {
        setError('Er is een fout opgetreden bij het laden van de cursussen.');
        setIsLoading(false);
      }
    };
    setTimeout(fetchData, 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <section className='loading'>Cursussen worden geladen...</section>
      ) : error ? (
        <section className='error'>{error}</section>
      ) : (
        <>
          <Hero courseData={courseData} />
          <Dashboard courseData={courseData} />
        </>
      )}
    </>
  );
}

export default DashboardPage;
