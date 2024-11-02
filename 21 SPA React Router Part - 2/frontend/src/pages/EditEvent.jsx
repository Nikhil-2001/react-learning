import EventForm from '../components/EventForm'
import { useRouteLoaderData} from 'react-router-dom'

export default function EditEvent() {
    const data = useRouteLoaderData('event-detail')
    console.log('Here data',data)
    return (<>
    <EventForm event={data.event}/>
    </>)
}