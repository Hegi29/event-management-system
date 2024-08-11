function convertImageToBase64(url) {
    let base64String = '';

    RNFS.readFile(uploadedImageVenue[0].uri, 'base64').then((res) => {
        //Here in enter code here res you  will get base64 string 
        base64String = res;
    });
}

export {
    convertImageToBase64
}
