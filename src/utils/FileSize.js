import { MAX_SIZE_FILE_EVIDENCE, MAX_SIZE_IMG_VENUE } from '../constants';

const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function convertBytes(x) {
    let l = 0, n = parseInt(x, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

function validateSize(res, tipe) {
    const filesize = res[0].size / 1024;
    const maxsize = tipe === 'evidence' ? MAX_SIZE_FILE_EVIDENCE : MAX_SIZE_IMG_VENUE;
    if (filesize < maxsize) {
        return true;
    }

    return false;
}

export {
    convertBytes,
    validateSize
}
