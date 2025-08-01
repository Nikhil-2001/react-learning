import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom'
import { Suspense } from 'react';
import EventItem from '../components/EventItem'
import EventsList from '../components/EventsList';

export default function EventDetail() {
  const { event, events } = useRouteLoaderData('event-detail')
  return (<>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={event}>
        {(loadEvent) => <EventItem event={loadEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadEvents) => <EventsList events={loadEvents} />}
      </Await>
    </Suspense>
  </>)
}

async function loadEvent(id) {
  const response = await fetch('http://localhost:8080/events/' + id);

  if (!response.ok) {
    throw json(
      { message: 'Could not fetch details for selected event.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

async function loadEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError: true, message: 'Could not fetch events.' };
    // throw new Response(JSON.stringify({ message: 'Could not fetch events.' }), {
    //   status: 500,
    // });
    throw json(
      { message: 'Could not fetch events.' },
      {
        status: 500,
      }
    );
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export async function loader({ request, params }) {
  const id = params.id;
  return defer({
    event: await loadEvent(id),
    events: loadEvents()
  })
}

export async function action({ params, request }) {
  const id = params.id;

  const response = await fetch('http://localhost:8080/events/' + id, {
    method: request.method
  });

  if (!response.ok) {
    throw json(
      { message: 'Could not delete the selected event.' },
      {
        status: 500,
      }
    );
  } else {
    return redirect('/events');
  }
}