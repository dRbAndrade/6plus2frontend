import Carousel from 'react-bootstrap/Carousel'
import '../styles/carrossel.scss'

const Carrossel = () => {

  return (
    <div>
      <Carousel variant="dark">

        <Carousel.Item>
          <div id="container">

            <div id="item1"><img
              className="w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

            <div id="item2"><img
              className="w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

            <div id="item3"><img
              className="w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div id="container">

            <div id="item1"><img
              className="d-inline-flex w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

            <div id="item2"><img
              className="d-inline-flex w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

            <div id="item3"><img
              className="d-inline-flex w-100"
              src="https://tinyurl.com/5yd4n3mr"
              alt="First slide"
            />
            </div>

          </div>
        </Carousel.Item>

      </Carousel>
    </div>
  )

}

export default Carrossel;

