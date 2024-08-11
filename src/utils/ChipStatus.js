import { StyleSheet } from "react-native";

const iconOptions = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#F04438'
};

const iconOptionsComplete = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#079455'
};

const iconOptionsReview = {
    name: 'circle',
    type: 'font-awesome',
    size: 10,
    color: '#026AA2'
};

const getIconOptions = (tipe) => {
    switch (tipe) {
        case 'Waiting for review':
            return iconOptionsReview;
        case 'Under Review by Health':
        case 'Under Review by Health & Environment':
        case 'Under Review by Health & Security':
            return iconOptions;
        case 'Requesting Revision':
        case 'Requesting revision by Health':
        case 'Requesting revision by Health, SSA, Security & Environment':
            return iconOptions;
        case 'Review Complete':
            return iconOptionsComplete;
        default:
            return iconOptions;
    }
}

const getIconTitleColor = (tipe) => {
    switch (tipe) {
        case 'Waiting for review':
            return '#026AA2';
        case 'Under Review by Health':
        case 'Under Review by Health & Environment':
        case 'Under Review by Health & Security':
            return '#F04438';
        case 'Requesting Revision':
        case 'Requesting revision by Health':
        case 'Requesting revision by Health, SSA, Security & Environment':
            return '#F04438';
        case 'Review Complete':
            return '#079455';
        default:
            return '#F04438';
    }
}

const getButtonTitleStyle = (tipe) => {
    switch (tipe) {
        case 'Waiting for review':
            return styles.chipButtonReview;
        case 'Under Review':
            return styles.chipButton;
        case 'Requesting Revision':
            return styles.chipButton;
        case 'Review Complete':
            return styles.chipButtonComplete;
        default:
            return styles.chipButton;
    }
}

const getBGColorStatus = (tipe) => {
    switch (tipe) {
        case 'Waiting for review':
            return styles.BGColorReview;
        case 'Under Review':
            return styles.BGColor;
        case 'Requesting Revision':
            return styles.BGColor;
        case 'Review Complete':
            return styles.BGColorComplete;
        default:
            return styles.BGColor;
    }
}

const styles = StyleSheet.create({
    chipButton: {
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        padding: 0,
        paddingRight: 20
    },
    chipButtonComplete: {
        backgroundColor: '#ABEFC6',
        borderStyle: 'solid',
        borderColor: '#079455',
        padding: 0,
        paddingRight: 20
    },
    chipButtonReview: {
        backgroundColor: '#E0F2FE',
        borderStyle: 'solid',
        borderColor: '#026AA2',
        padding: 0,
        paddingRight: 20
    },
    BGColor: {
        backgroundColor: '#FEE4E2',
        borderStyle: 'solid',
        borderColor: '#F04438',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    BGColorComplete: {
        backgroundColor: '#ABEFC6',
        borderStyle: 'solid',
        borderColor: '#079455',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    },
    BGColorReview: {
        backgroundColor: '#E0F2FE',
        borderStyle: 'solid',
        borderColor: '#026AA2',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 30
    }
});

export {
    getBGColorStatus,
    getIconOptions,
    getIconTitleColor,
    getButtonTitleStyle
}