import React from 'react'

const Breadcrumbs = (props) => {
    
    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="name pink">{props.title}</div>
                <nav className="path"><a href="#">Home</a> / <a href="#">Men</a> / <a href="#"><span className="pink">New Arrivals</span></a></nav>
            </div>
        </section>
    )
}

export default Breadcrumbs
