import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { Button, Card, Image } from '@rneui/themed';
import DocumentPicker from 'react-native-document-picker';

import { DeleteImage, DocxImage, EmptyFileImage, ExcelFileImage, ImageFileImage, PdfImage, UpdateImage, UploadImage } from '../assets/images';
import { convertBytes, validateSize } from '../utils/FileSize';
import RNFetchBlob from 'rn-fetch-blob';

const ImageUpload = ({ index, handleUploadFile, evidence, tipe, type, roleID }: any) => {
    const [singleFile, setSingleFile] = useState(null) as any;
    const [filename, setFilename] = useState('');
    const [filesize, setFilesize] = useState('');
    const [filetype, setFiletype] = useState('');
    const [existedUrlFile, setExistedUrlFile] = useState('');
    const [isError, setIsError] = useState('');

    const uploadImage = async () => {
        // Check if any file is selected or not
        if (singleFile != null) {
            // If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            // Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                // alert('Uploakd Successful');
            }
        } else {
            // If no file selected the show alert
            // alert('Please Select File first');
        }
    };

    const selectFile = async () => {
        try {
            let res = [] as any;

            if (tipe === 'evidence') {
                res = await DocumentPicker.pick({
                    type: [
                        DocumentPicker.types.images,
                        DocumentPicker.types.doc,
                        DocumentPicker.types.docx,
                        DocumentPicker.types.pdf,
                        DocumentPicker.types.xls,
                        DocumentPicker.types.xlsx,
                        DocumentPicker.types.audio,
                        DocumentPicker.types.video
                    ],
                });
            } else if (tipe === 'venue image') {
                res = await DocumentPicker.pick({
                    type: [DocumentPicker.types.images]
                });
            }

            const isValidSize = validateSize(res, tipe);
            if (isValidSize) {
                setSingleFile(res);
                setFilename(res[0].name as string);
                setFilesize(convertBytes(res[0].size as number));
                setFiletype(res[0].type as string);
                setIsError('');
                const obj = { no: tipe === 'venue image' ? 0 : index, file: res };
                handleUploadFile(obj);
            } else {
                setIsError('File too large, max size is 10MB');
            }
        } catch (err) {
            setSingleFile(null);

            if (DocumentPicker.isCancel(err)) {
                setSingleFile(null);
                setFilename('');
                setFilesize('');
                setFiletype('');
                setExistedUrlFile('');
            } else {
                setIsError('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    const handleDownload = () => {
        // ketika diklik pakai data existedUrlFile
        const url = evidence[0].fileUrl;
        // Define the path where you want to save the file
        const { config, fs } = RNFetchBlob;
        const downloads = fs.dirs.DownloadDir;
        const path = `${downloads}/image_${Date.now()}.jpg`; // perlu diperbaiki sesuai tipe filenya

        // Start downloading the image
        config({
            fileCache: true,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: path,
                description: "Downloading image",
            },
        })
            .fetch("GET", url)
            .then((res) => {
                console.log("The file is saved to:", res.path());
                // Alert.alert(`Image downloaded successfully to: ${res.path()}`);
            })
            .catch((error) => {
                console.error("Error downloading image:", error);
                // Alert.alert(`Failed to download image due to: ${error}`);
            });
    }

    const handleDelete = (id: number) => {
        setSingleFile(null);
        setFilename('');
        setFilesize('');
        setFiletype('');
        setExistedUrlFile('');
        handleUploadFile(null);
    }

    useEffect(() => {
        if (evidence && evidence.length > 0) {
            setFilename(evidence[0]?.fileName);
            setFiletype(evidence[0]?.fileType);
            setExistedUrlFile(evidence[0].fileUrl);
        }
    }, [])

    const getMyImage = (type: string) => {
        switch (type) {
            case 'excel':
                return ExcelFileImage;
            case 'docx':
                return DocxImage;
            case 'pdf':
                return PdfImage;
            case 'image/png':
            case 'image/jpg':
                return ImageFileImage;
            default:
                return EmptyFileImage
        }
    }

    return (
        <View style={styles.mainBody}>
            {!evidence &&
                <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={selectFile}>
                    <Card containerStyle={tipe === 'evidence' ? styles.cardContainer : styles.cardContainerVenue} >
                        <View>
                            <View style={styles.imageContainer}>
                                <View style={styles.imageView}>
                                    <Image source={UploadImage} style={styles.imagePreview} />
                                </View>
                            </View>
                            <Text style={styles.textClick}>
                                Click to upload
                            </Text>
                        </View>
                        {tipe === 'venue image' &&
                            <Text
                                style={styles.infoType}>
                                SVG, PNG, JPG or GIF (max. 800x400px)
                            </Text>
                        }
                        {tipe === 'evidence' &&
                            <Text style={styles.infoType}>
                                jpg, jpeg, png, heic, doc, docx, xls, xlsx, pdf, mp4, wmv, mkv, mov, 3gp
                                {'\n'}
                                (max. 10MB)
                            </Text>
                        }

                        {singleFile != null ? (
                            <>
                                <Text style={styles.textStyle}>
                                    {filename}
                                    {'\n'}
                                    {filesize}
                                    {'\n'}
                                </Text>
                            </>
                        ) : null}
                        {isError && (
                            <Text style={styles.textStyle}>
                                {isError}
                            </Text>
                        )}
                    </Card>
                </TouchableOpacity>
            }

            <View style={(evidence && evidence.length > 0) ? styles.evidenceContainer : { marginBottom: 10 }}>
                {(evidence && evidence.length > 0) &&
                    <>
                        <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 10, width: '100%' }}>
                            <Image source={getMyImage(evidence[0].fileType)} style={styles.image} />
                            <Text style={styles.filename}>{filename}</Text>
                        </View>
                        {['1', '6'].includes(roleID) &&
                            <Button type='outline' buttonStyle={styles.buttonPrev} titleStyle={{ color: '#0D5B95' }} onPress={selectFile} disabled={type === 'Venue'}>
                                <Image source={UpdateImage} style={styles.imageIconTitle} />  Update Attachments
                            </Button>}
                    </>
                }
            </View>
            {singleFile &&
                <TouchableOpacity style={styles.buttonDelete} onPress={() => handleDelete(index)} disabled={type === 'Venue'}>
                    <Image source={DeleteImage} style={styles.imageIconDelete} />
                </TouchableOpacity>}
        </View >
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    buttonDelete: { marginTop: 15, marginBottom: 8, alignItems: 'center' },
    buttonPrev: { width: '100%', borderRadius: 10, borderColor: '#0D5B95', borderWidth: 1, backgroundColor: '#fff' },
    buttonStyle: {
        backgroundColor: '#307ecc',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#307ecc',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 15,
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 16,
    },
    cardContainer: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginHorizontal: 0, marginBottom: -10 },
    cardContainerVenue: { borderRadius: 10, marginHorizontal: 0, marginBottom: -10 },
    evidenceContainer: { backgroundColor: '#fff', marginTop: 20, padding: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10, width: '100%' },
    filename: { fontWeight: 'bold', marginBottom: 20, marginTop: 20, color: '#000' },
    imageContainer: { display: 'flex', justifyContent: 'center', flexDirection: 'row' },
    imageIconDelete: {
        height: 25,
        width: 20,
        marginTop: 0
    },
    image: {
        width: 35,
        height: 40,
        margin: 10
    },
    imageIconTitle: {
        height: 20,
        width: 20,
        marginTop: 0
    },
    imagePreview: { height: 25, width: 25 },
    imageView: { padding: 10, borderWidth: 1, borderColor: '#EAECF0', borderRadius: 10, marginBottom: 10 },
    infoType: {
        fontSize: 15,
        marginTop: 7,
        textAlign: 'center',
        color: '#475467'
    },
    textClick: { fontSize: 15, fontWeight: 'bold', color: '#0D5B95', marginRight: 5, textAlign: 'center' },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
    }
});

export default ImageUpload;