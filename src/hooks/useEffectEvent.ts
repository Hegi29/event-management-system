import { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { GetEventDetailStatusList, GetEventDetailList } from "../services/EventDetail";
import { selectAccount } from "../redux/reducers/accountSlice";

const useEffectEvent = (isDraft: boolean) => {
    const accountData = useSelector(selectAccount);
    const email = accountData.account.email;

    const [data, setData] = useState({}) as any;
    const [dataDashboard, setDataDashboard] = useState({}) as any;
    const [isLoaded, setIsLoaded] = useState(false);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [selectedSearch, setSelectedSearch] = useState('');
    const [isError, setIsError] = useState(false);
    const [errorData, setErrorData] = useState({}) as any;
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [totalItemRequest, setTotalItemRequest] = useState(0);
    const [pageSize, setPageSize] = useState(5);

    const handleOk = () => {
        setIsModalVisible(false);
    }

    const params = {
        isDraft,
        status: selectedStatus === 'All Status' ? '' : selectedStatus,
        pageNumber: 1,
        pageSize,
        keyword: selectedSearch,
        email
    };

    const fetchEventDashboard = async () => {
        const response = await GetEventDetailStatusList(email);
        if (response?.status === axios.HttpStatusCode.Ok) {
            setDataDashboard(response.data);
        } else {
            setIsError(true);
            setIsModalVisible(true);
            setErrorData(response);
        }
    }

    const fetchEventList = async () => {
        const response = await GetEventDetailList(params);
        if (response?.status === axios.HttpStatusCode.Ok) {
            setData(response.data);
            setTotalItemRequest(response.data.totalItem);
            setIsLoaded(true);
        } else {
            setIsLoaded(false);
            setIsError(true);
            setIsModalVisible(true);
            setErrorData(response);
        }
    }

    const handleShowMore = () => {
        setPageSize(pageSize + 5);
    }

    useEffect(() => {
        !isDraft && fetchEventDashboard();
        fetchEventList();
    }, []);

    useEffect(() => {
        !isDraft && fetchEventDashboard();
        fetchEventList();
    }, [selectedStatus, selectedSearch, pageSize]);

    return [isError, isModalVisible, handleOk, errorData, dataDashboard, data, isLoaded, setSelectedSearch, setSelectedStatus, totalItemRequest, handleShowMore];
};

export default useEffectEvent;
