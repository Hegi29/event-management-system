import * as Yup from 'yup';

const EventDetailValidation = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    functionName: Yup.string().required('Required'),
    activityName: Yup.string().required('Required'),
    activityDesc: Yup.string().required('Required'),
    activityType: Yup.bool().oneOf([true], "Required"),
    eventOrganizer: Yup.bool().oneOf([true], "Required"),
    activityStartDate: Yup.date().required('Required'),
    activityEndDate: Yup.date().required('Required'),
    namaPJ: Yup.string().required('Required'),
    emailPJ: Yup.string().email('Invalid email').required('Required'),
    noTelpPJ: Yup.string().required('Required'),
    namaKoordinator: Yup.string().required('Required'),
    emailKoordinator: Yup.string().email('Invalid email').required('Required'),
    noTelpKoordinator: Yup.string().required('Required'),
    namaPIC: Yup.string().required('Required'),
    emailPIC: Yup.string().email('Invalid email').required('Required'),
    noTelpPIC: Yup.string().required('Required')
});

export default EventDetailValidation;
