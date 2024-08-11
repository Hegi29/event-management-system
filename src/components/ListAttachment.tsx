import { useEffect, useId, useState } from "react";
import { StyleSheet, View } from "react-native";

import { Divider, Image, Text } from "@rneui/themed";
import { useSelector } from "react-redux";

import { CheckedImage, CloseImage, DocxImage, EmptyFileImage, ExcelFileImage, ImageFileImage, PdfImage, WarningFileImage } from "../assets/images";
import { selectAllEvidenceList, selectApprovedEnvironmentEvidenceList, selectApprovedHealthEvidenceList, selectApprovedSafetyEvidenceList, selectApprovedSecurityEvidenceList, selectEnvironmentEvidenceList, selectHealthEvidenceList, selectSafetyEvidenceList, selectSecurityEvidenceList, selectUnderReviewEnvironmentEvidenceList, selectUnderReviewHealthEvidenceList, selectUnderReviewSafetyEvidenceList, selectUnderReviewSecurityEvidenceList, selectUnsubmittedEnvironmentEvidenceList, selectUnsubmittedHealthEvidenceList, selectUnsubmittedSafetyEvidenceList, selectUnsubmittedSecurityEvidenceList } from "../redux/reducers/evidenceSlice";

import SelectStatus from "./SelectStatus";
import SelectSection from "./SelectSection";

const ListAttachment = ({ allEvidenceList }: any) => {
    //harus dipindah ke depan karena rerender terus
    const healthData = useSelector(selectHealthEvidenceList);
    const safetyData = useSelector(selectSafetyEvidenceList);
    const securityData = useSelector(selectSecurityEvidenceList);
    const environmentData = useSelector(selectEnvironmentEvidenceList);

    const healthApprovedData = useSelector(selectApprovedHealthEvidenceList);
    const safetyApprovedData = useSelector(selectApprovedSafetyEvidenceList);
    const securityApprovedData = useSelector(selectApprovedSecurityEvidenceList);
    const environmentApprovedData = useSelector(selectApprovedEnvironmentEvidenceList);

    const healthUnsubmittedData = useSelector(selectUnsubmittedHealthEvidenceList);
    const safetyUnsubmittedData = useSelector(selectUnsubmittedSafetyEvidenceList);
    const securityUnsubmittedData = useSelector(selectUnsubmittedSecurityEvidenceList);
    const environmentUnsubmittedData = useSelector(selectUnsubmittedEnvironmentEvidenceList);

    const healthUnderReviewData = useSelector(selectUnderReviewHealthEvidenceList);
    const safetyUnderReviewData = useSelector(selectUnderReviewSafetyEvidenceList);
    const securityUnderReviewData = useSelector(selectUnderReviewSecurityEvidenceList);
    const environmentUnderReviewData = useSelector(selectUnderReviewEnvironmentEvidenceList);

    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSection, setSelectedSection] = useState('');
    const [listEvidence, setListEvidence] = useState([]) as any;

    const getMyImage = (type: string) => {
        switch (type) {
            case 'excel':
                return ExcelFileImage;
            case 'docx':
                return DocxImage;
            case 'pdf':
                return PdfImage;
            case 'jpg':
                return ImageFileImage;
            case 'png':
            default:
                return EmptyFileImage
        }
    }

    const getMyIconStatus = (status: string) => {
        switch (status) {
            case 'Approved':
                return CheckedImage;
            case 'Unsubmitted':
                return CloseImage;
            case 'Under Review':
                return WarningFileImage;
            default:
                return CloseImage;
        }
    }

    useEffect(() => {
        if (selectedStatus === 'All Status') {
            if (selectedSection === '') {
                setListEvidence(allEvidenceList);
                return;
            }

            if (selectedSection === 'Health') {
                setListEvidence(healthData);
                return;
            }

            if (selectedSection === 'Safety') {
                setListEvidence(safetyData);
                return;
            }

            if (selectedSection === 'Security') {
                setListEvidence(securityData);
                return;
            }

            if (selectedSection === 'Environment') {
                setListEvidence(environmentData);
                return;
            }
        }

        if (selectedStatus === 'Approved') {
            if (selectedSection === '') {
                setListEvidence(allEvidenceList.filter((x: any) => x.status === 'Approved'));
                return;
            }

            if (selectedSection === 'Health') {
                setListEvidence(healthApprovedData);
                return;
            }

            if (selectedSection === 'Safety') {
                setListEvidence(safetyApprovedData);
                return;
            }

            if (selectedSection === 'Security') {
                setListEvidence(securityApprovedData);
                return;
            }

            if (selectedSection === 'Environment') {
                setListEvidence(environmentApprovedData);
                return;
            }
        }

        if (selectedStatus === 'Unsubmitted') {
            if (selectedSection === '') {
                setListEvidence(allEvidenceList.filter((x: any) => x.status === 'Unsubmitted'));
                return;
            }

            if (selectedSection === 'Health') {
                setListEvidence(healthUnsubmittedData);
                return;
            }

            if (selectedSection === 'Safety') {
                setListEvidence(safetyUnsubmittedData);
                return;
            }

            if (selectedSection === 'Security') {
                setListEvidence(securityUnsubmittedData);
                return;
            }

            if (selectedSection === 'Environment') {
                setListEvidence(environmentUnsubmittedData);
                return;
            }
        }

        if (selectedStatus === 'Under Review') {
            if (selectedSection === '') {
                setListEvidence(allEvidenceList.filter((x: any) => x.status === 'Under Review'));
                return;
            }

            if (selectedSection === 'Health') {
                setListEvidence(healthUnderReviewData);
                return;
            }

            if (selectedSection === 'Safety') {
                setListEvidence(safetyUnderReviewData);
                return;
            }

            if (selectedSection === 'Security') {
                setListEvidence(securityUnderReviewData);
                return;
            }

            if (selectedSection === 'Environment') {
                setListEvidence(environmentUnderReviewData);
                return;
            }
        }
    }, [selectedStatus, selectedSection]);

    const checkLengthName = (item: any) => {
        if (item?.length > 31) {
            return item?.slice(0, 31) + ' ...';
        }

        return item;
    }

    useEffect(() => {
        setSelectedStatus('All Status');
    }, []);

    return (
        <>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', marginVertical: 20, fontSize: 20 }}>Attachment</Text>
                <Divider />
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Status</Text>
                <SelectStatus setSelectedStatus={setSelectedStatus} />
                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Section</Text>
                <SelectSection setSelectedSection={setSelectedSection} />
            </View>

            <View>
                {listEvidence?.map((item: any, index: number) => {
                    return (
                        <View key={index}>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Image source={getMyImage(item.fileType)} style={styles.image} />
                                    <Text style={{ marginTop: 22, fontWeight: 'bold' }}>{item.questionName} - {checkLengthName(item.evidenceName)}</Text>
                                </View>
                                <Image source={getMyIconStatus(item.status)} style={styles.imageStatus} />
                            </View>
                            <Divider style={{ marginHorizontal: 10 }} />
                        </View>
                    )
                })}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 35,
        height: 40,
        margin: 10
    },
    imageStatus: {
        width: 20,
        height: 20,
        marginTop: 22,
        marginRight: 10
    }
});

export default ListAttachment;