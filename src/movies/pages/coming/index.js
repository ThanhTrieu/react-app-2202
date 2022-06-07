import React, { useState, useEffect } from 'react';
import LayoutMovie from '../../components/Layout';
import { api } from '../../services/api';
import { Skeleton } from 'antd';
import ListDataMovies from '../../components/ListMovies';


const UpComingMovies = () => {
    const [loading, setLoading] = useState(true);
    const [comingMovies, setComingMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);

    useEffect(() => {
        const getData = async () => {
            const data = await api.getDataUpcomingMovies(page);
            if(data.hasOwnProperty('results')){
                setComingMovies(data['results']);
            }
            setLoading(false);
        }
        getData();
    }, []);

    if(loading){
        return (
            <LayoutMovie>
                <Skeleton active />
            </LayoutMovie>
        )
    }

    return (
        <LayoutMovie>
            <h2> List of upcoming movies</h2>
            <ListDataMovies
                movies={comingMovies}
            />
        </LayoutMovie>
    )
}
export default React.memo(UpComingMovies);