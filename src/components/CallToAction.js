import Img from '../restaurantchefB.jpg';

export default function CallToAction() {
    return (
        <div className='callToAction'>
        <section>
            <h2 className='primaryfont'>Little lemon Restaurant</h2>
            <p className='secondaryfont'>Come and enjoy the taste of our unique recipes!</p>
            <button>Reserve</button>
        </section>
        <section>
            <img src={Img} />
        </section>
        </div>
    );
  };