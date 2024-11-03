// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import HomePage from './pages/HomePage';
import Events, {loader as EventsListLoader} from './pages/Events';
import EventDetail, {loader as eventLoader, action as deleteAction} from './pages/EventDetails';
import NewEvent from './pages/NewEvent';
import EditEvent from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventRoot';
import Error from './pages/Error';
import {action as manipulateEventAction} from './components/EventForm'
import NewsletterPage, {action as newsLetterAction} from './pages/Newsletter';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout></RootLayout>,
    errorElement:<Error></Error> ,
    children: [
      {index: true, element: <HomePage />},
      {path: 'events', element: <EventsRootLayout />,
        children: [
          {index: true, element: <Events />,
            loader: EventsListLoader
          },
          {
            path: ':id',
            loader: eventLoader,
            id:'event-detail',
            children: [
              {index: true, element: <EventDetail />, action: deleteAction},
              {path: 'edit', element: <EditEvent />, action: manipulateEventAction}
            ]
          },
          {path: 'new', element: <NewEvent />, action: manipulateEventAction}
        ]
      }, 
      {
        path: 'newsletter', element: <NewsletterPage></NewsletterPage>, action: newsLetterAction
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
