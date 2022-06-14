import React, { useState, useEffect } from 'react';
import { api } from '../../services/api';
import { Skeleton } from 'antd';
import loadable from '@loadable/component'

const LayoutMovie     = loadable(() => import('../../components/Layout'));
const ListDataMovies  = loadable(() => import('../../components/ListMovies'));
const PaginationMovie = loadable(() => import('../../components/Pagination'));


const UpComingMovies = () => {
    const [loading, setLoading] = useState(true);
    const [comingMovies, setComingMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalResult, setTotalResult] = useState(0);
    const [clickPage, setClickPage] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const data = await api.getDataUpcomingMovies(page);
            if(data.hasOwnProperty('results')){
                setComingMovies(data['results']);
            }
            if(page === 1 && clickPage === false) {
                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data['total_pages'])
                }
                if(data.hasOwnProperty('total_results')){
                    setTotalResult(data['total_results']);
                }
            }
            setLoading(false);
        }
        getData();
    }, [page, clickPage]);

    const changePage = p => {
        if( p >= 1 && p <= totalPage){
            setClickPage(true);
            setPage(p); // cap nhat lai state page - useEffect chay lai
        }
    }

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
            <PaginationMovie
                current={page}
                total={totalResult}
                change={changePage}
            />
        </LayoutMovie>
    )
}
export default React.memo(UpComingMovies);