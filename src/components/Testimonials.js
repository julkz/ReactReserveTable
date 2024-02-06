import UserIcon from '../usericon.png';
export default function Testimonials() {
    return (
        <div className='testimonials'>
            <h2>Testimonials</h2>
            <div>
                <section>
                    <img src={UserIcon}/>
                    <h4>Person name</h4>
                    <p>Comment from the person above.</p>
            </section>
            <section>
                    <img src={UserIcon}/>
                    <h4>Person name</h4>
                    <p>Comment from the person above.</p>
            </section>
            <section>
                    <img src={UserIcon}/>
                    <h4>Person name</h4>
                    <p>Comment from the person above.</p>
            </section>
            </div>
        </div>
    );
  };