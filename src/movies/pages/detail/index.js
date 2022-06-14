import React, { useState, useEffect } from 'react';
import { Row, Col, Image, Skeleton, Button} from 'antd';
import { useParams } from "react-router-dom";
import LayoutMovie from '../../components/Layout';
import { api } from '../../services/api';
import { helper } from '../../helpers/common';
import ModalVideo from 'react-modal-video';

import 'react-modal-video/css/modal-video.min.css';

const DetailMovie = () => {
    let { id } = useParams() || 0; // lay tham so tren url xuong
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState({});
    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        const getDataFromApi = async () => {
            const data = await api.getDataMovieById(id);
            if(!helper.isEmptyObject(data)){
                if(!data.hasOwnProperty('status_code')){
                    setDetail(data);
                }
            }
            setLoading(false);
        }
        getDataFromApi();
    }, [id]);

    if(loading){
        return (
            <LayoutMovie>
                <Skeleton active/>
            </LayoutMovie>
        )
    }

    if(helper.isEmptyObject(detail) && !loading){
        <LayoutMovie>
            <h2> Khong co thong tin bo phim !</h2>
        </LayoutMovie>
    }

    return (
        <LayoutMovie>
            <Row>
                <Col span={8}>
                    <Image
                        style={{width: 400}}
                        src={`https://image.tmdb.org/t/p/w300${detail.poster_path}`}
                    />
                    <h2> {detail.original_title} </h2>
                </Col>
                <Col span={16}>
                    <p>Overview: {detail.overview}</p>
                    <p>vote count: {detail.vote_count}</p>
                    <p>vote average: {detail.vote_average}</p>
                    {/* view trailer youtube */}
                    { detail['videos']['results'].length !== 0 && (
                        <>
                            <ModalVideo
                                channel='youtube'
                                autoplay={false}
                                isOpen={isOpen}
                                videoId={detail['videos']['results'][0]['key']}
                                onClose={() => setOpen(false)}
                            />
                            <Button type="primary" onClick={()=> setOpen(true)}>View Trailer</Button>
                        </>
                    ) }
                    
                </Col>
            </Row>
        </LayoutMovie>
    )
}
export default React.memo(DetailMovie)