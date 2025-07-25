import { useRouteError } from "react-router-dom"
import PageContent from "../components/PageContent"

export default function Error() {
    const error = useRouteError()
    let title = 'An error ocurred'
    let message = 'Something went wrong'
    console.log(error)
    if(error.status === 500)
        message = error.data.message
    if(error.status === 404) {
        title = 'Not found'
        message = 'Could not find resource or page'
    }

    return <PageContent title={title}><p>{message}</p></PageContent>
}