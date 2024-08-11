import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { GetVenueStatusList, GetVenueList } from "../services/VenueService";
import { selectAccount } from "../redux/reducers/accountSlice";

const useEffectVenue = () => {
    const accountData = useSelector(selectAccount);

    const [data, setData] = useState([]) as any;
    const [dashboardData, setDashboardData] = useState([]) as any;
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('');
    const [totalItemRequest, setTotalItemRequest] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [isError, setIsError] = useState(false);
    const [errorData, setErrorData] = useState({}) as any;
    const [isModalVisible, setIsModalVisible] = useState(false);

    const email = accountData.account.email;

    const params = {
        isDraft: false,
        status: selectedStatus === 'All Status' ? '' : (selectedStatus === 'Registered Venue' ? 'Review Complete' : selectedStatus),
        pageNumber: 1,
        pageSize,
        keyword: selectedSearch,
        email: ''
    };

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const fetchVenueDashboard = async () => {
        const response = await GetVenueStatusList(email);
        if (response?.status === axios.HttpStatusCode.Ok) {
            setDashboardData(response.data);
        } else {
            setIsError(true);
            setIsModalVisible(true);
            setErrorData(response);
        }
    }

    const fetchVenueList = async () => {
        const response = await GetVenueList(params);
        if (response?.status === axios.HttpStatusCode.Ok) {
            setTotalItemRequest(response.totalItem);
            setData(response.data);
            setIsError(false);
            setErrorData({});
            setIsLoaded(true);
        } else {
            setIsError(true);
            setIsModalVisible(true);
            setErrorData(response);
        }
    }

    const handleShowMore = () => {
        setPageSize(pageSize + 5);
    }

    useEffect(() => {
        fetchVenueDashboard();
        fetchVenueList();
    }, []);

    useEffect(() => {
        fetchVenueDashboard();
        fetchVenueList();
    }, [selectedStatus, selectedSearch, pageSize]);

    return [isError, isModalVisible, handleOk, errorData, dashboardData, data, isLoaded, setSelectedSearch, setSelectedStatus, totalItemRequest, handleShowMore];
};

export default useEffectVenue;
