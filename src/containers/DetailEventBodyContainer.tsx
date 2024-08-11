import { DetailEventTab } from "../components"

//diremove saja file ini
const DetailEventBodyContainer = ({ dataDetail, isDraft, setSelectedSection, dataQuestions, allEvidenceList, createComment }: any) => {
    return (
        <DetailEventTab dataDetail={dataDetail} isDraft={isDraft} setSelectedSection={setSelectedSection} dataQuestions={dataQuestions} allEvidenceList={allEvidenceList} createComment={createComment}/>
    )
}

export default DetailEventBodyContainer