import { useRouter } from 'next/router'
import  moment  from 'moment'
import { useState } from 'react'

export default function userPage(props) {
    const router = useRouter();
    const id = router.query.id;
    const userPhotos = props.data.filter(
        (item) => String(item.userId) === String(id)
    );
    if(props.data && props.data.length && !userPhotos){
        router.push('/');
    }
    if(userPhotos.length){
        return(
            <>
                <div className="row text-black">
                    <div className="col-2">
                        <img src={userPhotos[0].authorLogo} alt="" className="img-fluid rounded-circle border-primary author-pg-img" />
                    </div>
                    <div className="col-3 text-center d-flex flex-column align-items-center align-self-center">
                        <p className="m-0">{userPhotos.length}</p>
                        <p className="text-black-50">Posts</p>
                    </div>
                    <div className="col-3 text-center d-flex flex-column align-items-center align-self-center">
                        <p className="m-0">{moment(userPhotos[0].createdAt).fromNow()}</p>
                        <p className="text-black-50">Active</p>
                    </div>
                </div>
                <div className="text-black pt-4">
                    <h3>{userPhotos[0].author}</h3>
                </div>
                <div className="p5 py-1">
                    <hr className="text-black" />
                </div>
                <div className="row row-cols-2">
                    {userPhotos.map(photo => <img className="p-1" src={photo.photo} />)}
                </div>
            </>
        )
    }
    else{
        return <p>Loading</p>;
    }
}