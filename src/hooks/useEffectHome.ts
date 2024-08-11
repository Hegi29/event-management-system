import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { selectAccount } from "../redux/reducers/accountSlice";
import { GetEventDetailByDateList, GetEventDetailList } from "../services/EventDetail";
import getActivityList from "../services/ActivityService";
import { GetTopVenueList, GetVenueList } from "../services/VenueService";

import { ROLE } from "../constants";

const useEffectHome = () => {
    const accountData = useSelector(selectAccount);
    const roleId = accountData.account.roleid;
    const email = accountData.account.email;

    const [dataEventRequest, setDataEventRequest] = useState([]) as any;
    const [dataEventWaitingReview, setDataEventWaitingReview] = useState([]) as any;
    const [dataTopVenue, setDataTopVenue] = useState([]) as any;
    const [dataVenueUnderReview, setDataVenueUnderReview] = useState([]) as any;
    const [dataActivity, setDataActivity] = useState([]) as any;
    const [dataEventByDate, setDataEventByDate] = useState([]) as any;
    const [selectedDate, setSelectedDate] = useState({ startDate: new Date(), endDate: new Date() }) as any;
    const [totalItemWaitingReview, setTotalItemWaitingReview] = useState(0);
    const [totalItemUnderReview, setTotalItemUnderReview] = useState(0);
    const [totalItemRequest, setTotalItemRequest] = useState(0);
    const [totalItemTopVenue, setTotalItemTopVenue] = useState(0);
    const [totalItemListActivity, setTotalItemListActivity] = useState(0);
    const [pageSizeEventRequest, setPageSizeEventRequest] = useState(5);
    const [pageSizeVenueWaiting, setPageSizeVenueWaiting] = useState(5);
    const [pageSizeVenueReview, setPageSizeVenueReview] = useState(5);
    const [pageSizeTopVenue, setPageSizeTopVenue] = useState(5);
    const [pageSizeActivity, setPageSizeActivity] = useState(5);

    const fetchEventRequestingList = async () => {
        const paramsEventRequest = {
            isDraft: false,
            status: 'Requesting revision',
            pageNumber: 1,
            pageSize: pageSizeEventRequest,
            keyword: '',
            email
        };

        try {
            const response = await GetEventDetailList(paramsEventRequest);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataEventRequest(response.data.data);
                setTotalItemRequest(response.data.totalItem);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchTopVenueList = async () => {
        const paramsTopVenue = {
            isDraft: false,
            status: 'Requesting revision',
            pageNumber: 1,
            pageSize: pageSizeTopVenue,
            keyword: '',
            email
        };

        try {
            const response = await GetTopVenueList(paramsTopVenue);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataTopVenue(response.data);
                setTotalItemTopVenue(response.totalItem);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchVenueWaitingForReviewList = async () => {
        const paramsWaiting = {
            isDraft: false,
            status: 'Waiting for review',
            pageNumber: 1,
            pageSize: pageSizeVenueWaiting,
            keyword: '',
            email
        };

        try {
            const response = await GetVenueList(paramsWaiting);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataEventWaitingReview(response.data);
                setTotalItemWaitingReview(response.totalItem);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchVenueUnderReviewList = async () => {
        const paramsUnderReview = {
            isDraft: false,
            status: 'Under review',
            pageNumber: 1,
            pageSize: pageSizeVenueReview,
            keyword: '',
            email
        };

        try {
            const response = await GetVenueList(paramsUnderReview);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataVenueUnderReview(response.data);
                setTotalItemUnderReview(response.totalItem);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchEventByDateList = async () => {
        try {
            const param = { startDate: selectedDate.startDate, endDate: selectedDate.endDate };
            const response = await GetEventDetailByDateList(param);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataEventByDate(response.data.data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const fetchActivityList = async () => {
        const paramsActivity = {
            pageNumber: 1,
            pageSize: pageSizeActivity,
            email
        };

        try {
            const response = await getActivityList(paramsActivity);
            if (response?.status === axios.HttpStatusCode.Ok) {
                setDataActivity(response?.data?.data);
                setTotalItemListActivity(response?.data?.totalItem);
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleShowMoreVenueWaiting = () => {
        setPageSizeVenueWaiting(pageSizeVenueWaiting + 5);
    }

    const handleShowMoreVenueReview = () => {
        setPageSizeVenueReview(pageSizeVenueReview + 5);
    }

    const handleShowMoreEventRequest = () => {
        setPageSizeEventRequest(pageSizeEventRequest + 5);
    }

    const handleShowMoreTopVenue = () => {
        setPageSizeTopVenue(pageSizeTopVenue + 5);
    }

    const handleShowMoreActivityList = () => {
        setPageSizeActivity(pageSizeActivity + 5);
    }

    useEffect(() => {
        // Verificator
        if (roleId !== ROLE.USER && roleId !== ROLE.SUPER_ADMIN) {
            fetchVenueWaitingForReviewList();
            fetchVenueUnderReviewList();
        }

        if (roleId === ROLE.USER) {
            fetchEventRequestingList();
            fetchTopVenueList();
        }

        if (roleId === ROLE.SUPER_ADMIN) {
            fetchEventRequestingList();
            fetchTopVenueList();
            fetchVenueWaitingForReviewList();
            fetchVenueUnderReviewList();
        }

        fetchEventByDateList();
        fetchActivityList();
    }, []);

    useEffect(() => {
        fetchEventByDateList();
    }, [selectedDate]);

    useEffect(() => {
        fetchVenueWaitingForReviewList();
    }, [pageSizeVenueWaiting]);

    useEffect(() => {
        fetchVenueUnderReviewList();
    }, [pageSizeVenueReview]);

    useEffect(() => {
        fetchEventRequestingList();
    }, [pageSizeEventRequest]);

    return [
        dataEventRequest,
        dataEventWaitingReview,
        dataTopVenue,
        dataEventByDate,
        dataActivity,
        dataVenueUnderReview,
        selectedDate,
        setSelectedDate,
        totalItemRequest,
        totalItemUnderReview,
        totalItemWaitingReview,
        totalItemTopVenue,
        totalItemListActivity,
        handleShowMoreVenueWaiting,
        handleShowMoreVenueReview,
        handleShowMoreEventRequest,
        handleShowMoreTopVenue,
        handleShowMoreActivityList
    ];
};

export default useEffectHome;
