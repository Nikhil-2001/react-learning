import EventForm from '../components/EventForm'

export default function NewEvent() {
    return (<>
    <EventForm method='post' />
    </>)
}

// export async function action({request, params}) {
//     const data = await request.formData()
//     const eventData = {
//         title: data.get('title'),
//         image: data.get('image'),
//         date: data.get('date'),
//         description: data.get('description')
//     }

//     const response = await fetch('http://localhost:8080/events', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(eventData)
//     })

//     if (response.status === 422) {
//         return response
//     }

//     if(!response.ok){
//         return json({message: 'Could not save event'}, {status: 500});
//     } 

//     return redirect('/events')
// }