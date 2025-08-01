import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import EventItem from './EventItem.jsx';
import { useQuery } from '@tanstack/react-query'
import fetchEvents from '../../util/http.js';

export default function NewEventsSection() {
  console.log('Here first in component new load as we are redirecting to evenets')

  const {data, isPending, isError, error} = useQuery({
    queryKey: ['events', {max: 3}],
    queryFn: ({signal}) => fetchEvents({signal, max: 3}),
    staleTime: 5000,
    gcTime: 1000
  })

  let content;

  if (isPending) {
    content = <LoadingIndicator />;
  }

  if (isError) {
    content = (
      <ErrorBlock title="An error occurred" message={error.info?.message || 'Failed to fetch events'} />
    );
  }

  if (data) {
    content = (
      <ul className="events-list">
        {data.map((event) => (
          <li key={event.id}>
            <EventItem event={event} />
          </li>
        ))}
      </ul>
    );
  }

  console.log('Rendered Again because of invalidating data')

  return (
    <section className="content-section" id="new-events-section">
      <header>
        <h2>Recently added events</h2>
      </header>
      {content}
    </section>
  );
}
