import "./eventt.css";
import { CiStar } from "react-icons/ci";
import getTo from '../Assets/getToGet.jpg'
import annyver from '../Assets/anniversary.jpg'
import { Fade } from 'react-awesome-reveal';

function EventPage() {
  return (
    <>
      <div className="homeSc">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h1>Event</h1>
            <ul>
              {[...Array(4)].map((_, index) => (
                <li key={index}>
                  <span className="material-symbols-outlined"><CiStar /></span>
                </li>
              ))}
            </ul>
            <p>occasion</p>
            {/* <div className="d-flex justify-content-center align-item-center mt-5">
              <Link to='/contect-us' className="programServiceButton">
                Book Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <Fade direction="left">
                <div className="event-image">
                  <img src="https://sevencorbett.com/wp-content/uploads/2021/10/resort-for-birthday-celebration-image-4.jpg" alt="" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2>Birthday</h2>
                <div className="birthdaydetail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint ratione excepturi. Asperiores temporibus quisquam assumenda ad, voluptas dicta, rerum ex provident eos mollitia dolores, impedit aliquam! Distinctio dicta reprehenderit iusto! Doloremque, quidem magni rem quaerat minima optio temporibus repudiandae unde molestiae corporis neque a architecto, minus aperiam enim similique! Doloremque perferendis quibusdam, porro ea et  
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2>Pre-wedding Shoot</h2>
                <div className="birthdaydetail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint ratione excepturi. Asperiores temporibus quisquam assumenda ad, voluptas dicta, rerum ex provident eos mollitia dolores, impedit aliquam! Distinctio dicta reprehenderit iusto! Doloremque, quidem magni rem quaerat minima optio 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <Fade direction="right">
                <div className="event-image">
                <img src={annyver}alt="" />
                </div>
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <Fade direction="left">
                <div className="event-image">
                  <img src="https://cdn.cdnparenting.com/articles/2022/03/12133939/1904891599.webp" alt="" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2>Anniversary Celebration</h2>
                <div className="birthdaydetail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint ratione excepturi. Asperiores temporibus quisquam assumenda ad, voluptas dicta, rerum ex provident eos mollitia dolores, impedit aliquam! Distinctio dicta reprehenderit iusto! Doloremque, quidem magni rem quaerat minima optio temporibus repudiandae unde molestiae corporis neque a architecto, minus aperiam enim similique! Doloremque perferendis quibusdam, porro ea et 
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2>Get-Together</h2>
                <div className="birthdaydetail">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sint ratione excepturi. Asperiores temporibus quisquam assumenda ad, voluptas dicta, rerum ex provident eos mollitia dolores, impedit aliquam! Distinctio dicta reprehenderit iusto! Doloremque, quidem magni rem quaerat minima optio temporibus repudiandae unde molestiae corporis neque a architecto, minus 
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <Fade direction="right">
                <div className="event-image">
                  <img src={getTo} alt="" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventPage;
