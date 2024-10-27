import { useRef, useState, useCallback, useEffect } from 'react';

import Places from './components/Places.jsx';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import AvailablePlaces from './components/AvailablePlaces.jsx';
import Error from './components/Error.jsx';

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [errorUpdating, setErrorUpdating] = useState(null);

  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchPlaces() {
      try {
        setIsFetching(true)
        const response = await fetch('http://localhost:3000/user-places')
        const resData = await response.json()
        if (!response.ok) {
          throw new Error('Failed to fecth places')
        }
        setUserPlaces(resData.places)
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch user places, please try again later' })
        setIsFetching(false)
      }
      setIsFetching(false)
    }

    fetchPlaces()
  }, []);

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  async function handleSelectPlace(selectedPlace) {
    setError(false)
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    async function updateUserPlaces(places) {
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places: places }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const resData = await response.json()
      if (!response.ok) {
        throw new Error('Couldn\'t update user places')
      }
      return resData.message
    }

    try {
      await updateUserPlaces([selectedPlace, ...userPlaces])
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdating({
        message: error.message || 'Failed to update palces.'
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    async function updateUserPlaces(places) {
      const response = await fetch('http://localhost:3000/user-places', {
        method: 'PUT',
        body: JSON.stringify({ places: places }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const resData = await response.json()
      if (!response.ok) {
        throw new Error('Couldn\'t update user places')
      }
      return resData.message
    }

    try {
      await updateUserPlaces(userPlaces.filter((place) => place.id !== selectedPlace.current.id))
    } catch (error) {
      setUserPlaces(userPlaces)
      setErrorUpdating({
        message: error.message || 'Failed to delete palce'
      })
    }
    setModalIsOpen(false);
  }, [userPlaces]);

  function handleError() {
    setErrorUpdating(null)
  }

  return (
    <>
      <Modal open={errorUpdating} onClose={handleError}>
        {errorUpdating && (<Error title="An error occured!" message={errorUpdating.message} onConfirm={handleError}>
        </Error>)}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        {error && <Error title="An error ocurred!" message={error.message}></Error>}
        {!error && <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
          isLoading={isFetching}
          loadingText="Fetching your places..."
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
