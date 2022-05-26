import React, { useState } from 'react';
import LayoutMovie from './components/Layout';
import SearchMovie from './components/Search';
import ListDataMovies from './components/List';
import PaginationMovie from './components/Pagination';
import { api } from './services/api';

const AppMovie = () => {
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [movies, setDataMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const searchData = async (keyword = '', p = 1) => {
        // cap nhat state loading
        setLoading(true); // bat dau tim kiem
        if(keyword !== ''){
            // call api 
            const data = await api.searchDataMovieByKeyword(keyword, p);
            if(data.hasOwnProperty('results')){
                // cap nhat state data movies
                setDataMovies(data.results);
            }
            // cap nhat state keyword (sau nay con phan trang)
            if(keyword !== name){
                // co thay doi tu khoa tim kiem
                setName(keyword);
                // cap nhat total page
                if(data.hasOwnProperty('total_pages')){
                    setTotalPage(data.total_pages);
                }
                // cap nhat total result
                if(data.hasOwnProperty('total_results')){
                    setTotalItems(data.total_results);
                }
            }
        }
        // ngung tim kiem
        setLoading(false);
    }

    const changePage = p => {
        // cap nhat lai sate page
        // goi lai ham searchData theo page moi 
        if( p >= 1 && p <= totalPage){
            // kiem soat page nguoi dung truyen
            setPage(p);
            // seacrh lai data
            searchData(name, p);
        }
    }

    return (
        <LayoutMovie>
            <SearchMovie
                loading={loading}
                search={searchData}
            />
            { movies.length > 0 && (
                <>
                    <ListDataMovies movies={movies}/>
                    <PaginationMovie
                        current={page}
                        total={totalItems}
                        changePage={changePage}
                    />
                </>
            )}
            
        </LayoutMovie>
    )
}
export default AppMovie;