import Link from 'next/link'


export default function Footer() {
    return (
        <nav className="navbar navbar-light bg-primary fixed-bottom p-0 py-2 footer-nav d-xl-none">
            <div className="container-fluid p-0">
                <div className="btn-group float-right justify-content-center w-100" role="group" aria-label="footer-button-group">
                    <button className="btn-primary mx-5 px-3" type="button">
                        <Link href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" fill="currentColor" className="bi bi-house-door-fill" viewBox="0 0 16 16">
                            <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                        </svg>
                        </Link>
                    </button>
                    <button className="btn-primary mx-5" type="button">
                        <Link href="/user/1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="2em" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
                        </Link>
                    </button>
                </div>
            </div>
        </nav>
    );
}
