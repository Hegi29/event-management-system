import CreateEventTab from "../components/CreateEventTab";

//diremove saja file ini
const CreateEventBodyContainer = ({ isDraft, dataVenue, setSelectedSearch, setSelectedVenueID, setSelectedSection, dataQuestions, allEvidenceList }: any) => {
    return (
        <CreateEventTab isDraft={isDraft} dataVenue={dataVenue} setSelectedSearch={setSelectedSearch} setSelectedVenueID={setSelectedVenueID} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} allEvidenceList={allEvidenceList}/>
    )
}

export default CreateEventBodyContainer