import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'

const places = localStorage.getItem('places')

export default function AvailablePlaces({ onSelectPlace }) {
  const [availblePlaces, setAvailablePlaces] = useState([])
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState();

  useEffect(() => {

    async function fetchPlaces() {
      try {
        setIsFetching(true)
        const response = await fetch('http://localhost:3000/places')
        const resData = await response.json()

        if (!response.ok) {
          throw new Error('Failed to fecth places')
        }

        navigator.geolocation.getCurrentPosition((position) => {
          const sortPlaces = sortPlacesByDistance(resData.places, position.coords.latitude, position.coords.longitude)
          setAvailablePlaces(sortPlaces)
          setIsFetching(false)
        })

      } catch (error) {
        setError({ message: error.message || 'Couldn\'t fetch places, please try again later' })
        setIsFetching(false)
      }
    }

    fetchPlaces();
  }, [])

  if (error) {
    return <Error title="An error occured!" message={error.message}></Error>
  }

  return (
    <Places
      title="Available Places"
      places={availblePlaces}
      fallbackText="No places available."
      isLoading={isFetching}
      loadingText="Fetching place data..."
      onSelectPlace={onSelectPlace}
    />
  );
}
