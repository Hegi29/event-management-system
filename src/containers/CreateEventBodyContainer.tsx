import CreateEventTab from "../components/CreateEventTab";

const CreateEventBodyContainer = ({ isDraft, dataVenue }: any) => {
    return (
        <CreateEventTab isDraft={isDraft} dataVenue={dataVenue}/>
    )
}

export default CreateEventBodyContainer