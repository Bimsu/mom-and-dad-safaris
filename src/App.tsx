import './style.css'
import NavBar from './components/NavBar'
import { Carousel } from './components/rs-slider'

function App() {

  return (
    <>
      <NavBar/>
      <div>
        <Carousel
          slides={[
            'https://demo-source.imgix.net/canyon.jpg',
            'https://demo-source.imgix.net/bucket_hat.jpg', 
            'https://demo-source.imgix.net/mountains.jpg',
            'https://demo-source.imgix.net/house.jpg',
            'https://demo-source.imgix.net/snowboard.jpg'
          ]}
        />
      </div>

    </>
  );
}

export default App
