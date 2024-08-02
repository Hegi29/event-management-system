import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import { Card, Image } from '@rneui/themed';
import DocumentPicker from 'react-native-document-picker';

import { UploadImage } from '../assets/images';

const ImageUpload = () => {
    const [singleFile, setSingleFile] = useState(null) as any;

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
        // Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.pick({
                // Provide which type of file you want user to pick
                type: [DocumentPicker.types.images],
                // There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            // Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            // Setting the state to show single file attributes
            setSingleFile(res);
        } catch (err) {
            setSingleFile(null);
            // Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                // If user canceled the document selection
                // alert('Canceled');
            } else {
                // For Unknown Error
                // alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };

    return (
        <View style={styles.mainBody}>
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={selectFile}>
                <Card containerStyle={{ borderRadius: 10, marginHorizontal: 0 }}>
                    <View>
                        <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={{ padding: 10, borderWidth: 1, borderColor: '#EAECF0', borderRadius: 10, marginBottom: 10 }}>
                                <Image source={UploadImage} style={{ height: 25, width: 25 }} />
                            </View>
                        </View>
                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#0D5B95', marginRight: 5, textAlign: 'center' }}>
                            Click to upload
                        </Text>
                    </View>
                    <Text
                        style={{
                            fontSize: 15,
                            marginTop: 7,
                            textAlign: 'center',
                            color: '#475467'
                        }}>
                        SVG, PNG, JPG or GIF (max. 800x400px)
                    </Text>

                    {/*Showing the data of selected Single file*/}
                    {singleFile != null ? (
                        <Text style={styles.textStyle}>
                            File Name: {singleFile.name ? singleFile.name : ''}
                            {'\n'}
                            Type: {singleFile.type ? singleFile.type : ''}
                            {'\n'}
                            File Size: {singleFile.size ? singleFile.size : ''}
                            {'\n'}
                            URI: {singleFile.uri ? singleFile.uri : ''}
                            {'\n'}
                        </Text>
                    ) : null}
                </Card>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
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