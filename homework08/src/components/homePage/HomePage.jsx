import Advantages from "../Advantages"
import FeaturedProducts from "../FeaturedProducts"

const HomePage = () => {

    return (
        <>
            <section className="main-banner">
                <div className="container">

                    <div className="picture-block">
                        <img src='/src/assets/img/mb-left-pic.png' alt="picture-block" />
                    </div>

                    <div className="text-block">
                        <div className="tb_inner"><span className="bold">THE BRAND</span><br/>OF LUXERIOUS <span className="pink">FASHION</span></div>
                    </div>

                </div>
            </section>

            <section className="pictures-block">
                <div className="container">
                    <div className="row">

                        <div className="pb-pic small-block" style={{backgroundImage: 'url(/src/assets/img/pb-pic-1.png)'}}>
                            <div className="text">30% OFF<br/><span className="pink pb-pink">FOR WOMEN</span></div>
                        </div>

                        <div className="pb-pic small-block" style={{backgroundImage: 'url(/src/assets/img/pb-pic-2.png)'}}>
                            <div className="text">HOT DEAL<br/><span className="pink pb-pink">FOR MEN</span></div>
                        </div>

                        <div className="pb-pic small-block" style={{backgroundImage: 'url(/src/assets/img/pb-pic-3.png)'}}>
                            <div className="text">NEW ARRIVALS<br/><span className="pink pb-pink">FOR KIDS</span></div>
                        </div>

                    </div>
                    
                    <div className="row">
                        <div className="pb-pic wide-block" style={{backgroundImage: 'url(/src/assets/img/pb-pic-wide.png)'}}>
                            <div className="text">LUXIROUS & TRENDY<br/><span className="pink pb-pink">ACCESORIES</span></div>
                        </div>
                    </div>

                </div>

            </section>
                
            <FeaturedProducts />

            <Advantages />
            
        </>
    )
}

export default HomePage
