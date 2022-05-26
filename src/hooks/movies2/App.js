import React, { useState, useEffect } from 'react';
import LayoutMovie from './components/Layout';
import ListMovies from './components/List';
import PaginationMovie from './components/Pagination';
import { api } from './services/api';
import { Skeleton } from 'antd';

const AppMovies = () => {

    const [loading, setLoading] = useState(true);
    const [dataMovies, setDataMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    const [clickPage, setClickPage] = useState(false);

    //call data - giong nhu componentDidMount trong class
    useEffect(() => {
        // call api
        const getDataFromApi = async () => {
            const data = await api.getDataPopularityMovies(page);
            // cap nhat state dataMovies
            if(data.hasOwnProperty('results')){
                setDataMovies(data.results)
            }
            // chi cap nhat totalPage va total Results
            // o lan goi api dau tien - load page
            // khi click phan trang ko cap nhat lai (du lieu ko thay doi)
            if(clickPage === false) {
                // cap nhat state total page
                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data.total_pages);
                }
                // cap nhat sate total results
                if(data.hasOwnProperty('total_results')){
                    setTotalItems(data.total_results);
                }
            }
            // dung lay data
            setLoading(false);
        }
        getDataFromApi(); // running function call api
    },[page, loading]); // [] : dieu kien de chay useEffect (truyen nhieu dieu kien)
    // dependencies

    // test xem lay dc data tu api ve va cap nhat vao state chua
    // console.log('data movies', dataMovies);

    const changePage = p => {
        // can chay lai useEffect (ko the goi ham getDataFromApi trong useEffect ra dc)
        // lam the nao de tu dong chay lai useEffect ??????
        // trong useEffect can truyen dieu vao - khi dieu kien bi thay doi thi useEffect se tu dong chay lai
        // dieu kien thay doi phu vao state thay doi
        // nhiem vu cap nhat lai state page
        if( p >= 1 && p <= totalPage){
            // kiem soat viec nguoi dung bam chon trang
            setLoading(true);
            setPage(p);
            if(clickPage === false){
                setClickPage(true);
            }
        }
    }

    return (
        <LayoutMovie>
            { loading ? (
                <Skeleton active />) : (
                    <>
                        <ListMovies movies={dataMovies} />
                        <PaginationMovie
                            current={page}
                            total={totalItems}
                            change={changePage}
                        />
                    </>
                
            )}
        </LayoutMovie>
    )
}
export default AppMovies;