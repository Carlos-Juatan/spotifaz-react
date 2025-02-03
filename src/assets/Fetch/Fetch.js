import React, { useState, useEffect } from 'react';
import axios from 'axios';

const dataUrl = 'http://localhost:3001/data';

const useFetchData  = () => {
    const [data, setDada] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get(dataUrl);
            setDada(response.data);
        } catch (error) {
            console.error('Erro ao buscar data:', error);
        }
    };

        fetchData();
    }, []);

    return data;
};

export default useFetchData;