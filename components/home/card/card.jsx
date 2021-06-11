import  moment  from 'moment'
import { useState } from 'react'
import  Link  from 'next/link'

export default function Card(props){
    const [photo, setPhoto] = useState(props.photo);

    return(
        <div key={photo.userId} className="card text-black bg-light mb-5">
            <div className="card-header pl-2">
                <Link href={'/user/'+photo.userId}>
                    <div className="row">
                        <div className="col-sm-1 col-2 p-0 text-center">
                            <img src={photo.authorLogo} alt="" className="img-fluid rounded-circle author-img" />
                        </div>
                        <div className="col-sm-11 col-10 pl-2 d-flex align-self-center text-primary">
                            <strong>{photo.author}</strong>
                        </div>
                    </div>
                </Link>
            </div>
            <img src={photo.photo} alt="" className="card-img-top" />
            <div className="card-body">
                <div className="row justify-content-between">
                    <div className="col-12">
                        <div className="btn-group shadow-0" role="group" aria-label="buttons" >
                            <button 
                                className={`btn btn-light px-0 pt-0 mr-5 text-start ${photo.liked ? ' clicked' : ''}`} 
                                onClick={() => {
                                    if(!photo.liked){
                                        setPhoto({...photo, liked:true, likes:photo.likes +1});
                                    }
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                            </button>
                            <p className="card-title font-weight-bolder likes text-primary"><strong>{photo.likes} likes</strong></p>
                        </div>
                    </div>
                    {/* <div className="col-1"> bookmarks
                        <button className="btn btn-light pt-0">

                        </button>
                    </div> */}
                </div>

                <p className="card-text">
                    {photo.description}
                </p>
                <p className="card-text tags">
                    {photo.tags}
                </p>
            </div>
        </div>
    );
};   