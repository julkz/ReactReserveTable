import MenuImgOne from '../PlateBeef.jpg';
import MenuImgTwo from '../PlateChicken.jpg';
import MenuImgThree from '../PlateSushi.jpg';

export default function Main() {
    return (
        <main>
            <article>
                <img src={MenuImgOne} alt=""/>
                <section>
                    <h4>Dish Title</h4>
                    <p>Dish description of wht should consist in this recipe</p>
                    <h4>15.76$</h4>
                </section>
            </article>
            <article>
                <img src={MenuImgTwo} alt=""/>
                <section>
                    <h4>Dish Title</h4>
                    <p>Dish description of wht should consist in this recipe</p>
                    <h4>15.76$</h4>
                </section>
            </article>
            <article>
                <img src={MenuImgThree} alt=""/>
                <section>
                    <h4>Dish Title</h4>
                    <p>Dish description of wht should consist in this recipe</p>
                    <h4>15.76$</h4>
                </section>
            </article>
        </main>
    );
  };