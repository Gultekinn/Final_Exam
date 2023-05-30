
import React, { useContext } from 'react'
import Card from '../../component/Card'
import '../Home/Home.scss'
import PersonIcon from '@mui/icons-material/Person';
import { MainContext } from '../../Context/Context';
const Home = () => {
    const {wishlistItem} =useContext(MainContext)
    console.log(wishlistItem)
    return (
        <div>
            <div className="section__one">
                <div className="section__one__text">
                    <h1>Improved
                        Production level
                        with Robotics</h1>
                    <p>EVERYONE WANTS THE INNOVATION THROUGH ROBOTICS

                    </p>
                    <button id='btn'>VIEW DETAILS</button>
                </div>

                <div className="section__one__img">
                    <img src="https://preview.colorlib.com/theme/robotics/img/banner-img.png" alt="" />
                </div>
            </div>


            {/* section2 */}

            <div className="section__two">
                <div className="section__two__text">
                    <h1>Featured Robotics Products to Show
                    </h1>
                    <p>Who are in extremely love with eco friendly system.

                    </p>

                </div>


            </div>
            <Card />



            <div className="section__four">
                <div className="section__four__text">
                    <h1>Some Features that Made us Unique
                    </h1>
                    <p>Who are in extremely love with eco friendly system.

                    </p>
                </div>

                <div className="container">

                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>


                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>

                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>



                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>


                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>


                    <div className="card">

                        <div className='icn'>
                            <div> <PersonIcon /></div>

                            <div><h3>  Experts Technicians</h3></div>

                        </div>
                        <p id='p'>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>







                </div>





            </div>

{/* section5 */}
<div className="section__five">
    <div className="section__five__text">
<h1>Latest News from our Blog</h1>
<p>Who are in extremely love with eco friendly system.

</p>
    </div>



</div>

<div className="commons">



    <div className="section__five__card">
       <div className="section__five__img">
        <img src="https://preview.colorlib.com/theme/robotics/img/b1.jpg" alt="" />
     
       </div> 
       <button>Trovel</button> <button>Life Style</button>
       <h4>Portable latest Fashion for young women</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
   <p>31st January, 2018</p>
    </div>


    <div className="section__five__card">
       <div className="section__five__img">
        <img src="https://preview.colorlib.com/theme/robotics/img/b2.jpg" alt="" />
     
       </div> 
       <button>Trovel</button> <button>Life Style</button>
       <h4>Portable latest Fashion for young women</h4>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
   <p>31st January, 2018</p>
    </div>


</div>
        </div>
    )
}

export default Home
