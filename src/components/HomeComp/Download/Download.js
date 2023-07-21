import React from 'react'
import Nav from '../../Navabr/Nav'
import { Link } from 'react-router-dom'
import audio from './audio.png';
import video from './video.png';
import other from './other.png';
import docs from './docs.png';
import images from './images.png';

function Download() {
    return (
        <>
            <Nav />


            <div className="main container align-items-center  mx-auto d-flex-row justify-content-center flex-nowrap">
                <div className="container justify-content-center">



                    <div class="card mx-2 my-3" style={{ width: "18rem" }} >
                        <img  style={{ width: "10rem" , marginLeft:"3rem" , marginTop:"1rem" }}  src={images}class="card-img-top" alt="..." />
                        <div class="card-body mx-5" >
                            <h5 class="card-title mx-auto">Images</h5>
                            <p class="card-text">Download Your files anywhere anytime</p>
                            <p class="card-text mx-auto"></p>
                            <Link to="/download/images" class="btn btn-primary mx-auto">Download</Link>
                        </div>
                    </div>


                    <div class="card mx-2 my-3" style={{ width: "18rem" }}>
                        <img style={{ width: "10rem", marginLeft:"3rem" }} className=" my-3 mx-5" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///9Fh/RKivRLi/REhvRNjPTy8vJDhvRHiPROjfRIifRGiPRMi/RPjfSmxfpJifRChfQ8gvR2ovZ+qPavx/n8+fKGq/SMsPTw8fI/dMxBd9OTtfPr7vJBetqZvPmLruwza8W7zvNDf+b/+/LP3/xdlfTr8v6tv+c1dNmuwvA3eeVrnPTC0vO0y/k0fvPc6P1ymd1MfM54n+IlZMJ2xJw+AAAEHElEQVR4nO3cjVLaQBSG4WSXlJBEIQFFoFD5kbYKwdr7v7cySp2qwCbTs+ds1u+9gZ1nzmI2SBIECCGEEEJvW89nw7615tK8YNXvKG2vdLKS9a37ob7oWEzPLkWJq46yyXsRShJ3KrIMfBbKEdcd68AXoRjx2vYWfRXOZIi7xD7wIBSa4oRhhK9CESKD7x+hAHEXXjCkXoX8xE3KLGQnbtmF3MQBv5D5oiEwQ+YpighZiTJCTqKQkJEoJeQjignZiNuU49R2TMh10RiICbmmKCnkIYoKWYiyQg6isJCBKC20TxQXWifKC20THRBaJrogtEt0Qmj1AOeE0OoUB2HEUNcktEh0RWiPyCNMzEJrRHeEtohMwkkFoSUik3BYRWiHyPSXpj8QI/II1UM1oQ0ijzDqVAPaIDIJk+uKQ6QnMgmzykMkJzIJo6SoOkRqIpcwSivvU2Iim3D/UawqpL2Z4hNGcVGVSDpFRmGUjB9nl4NKm5WQyCmMsvHtr8enbxV6oiOyCnU0Go1uq/T7ezOF+7PNqFq3jRVGkf/CalNssjBacAvb3MJKRFJhxt7Ue6EyExsuzPR0ND5f04WZMgDHP5ouzDL/hdp/4XmiB0LDFL0QniWSCi0+dni+bOG7UOvFeHoiX4TZKaA3wtNEb4RanxL+9EZ4YooeCdVxokdCrY5uVJ+E+uhn0TPhEaJvwo9E74QL74V68a5774TviZTCnnKjxdR3ofJ+hkp7L3wzRU+Fyn+h8l/Y9V6oYu+Ff6fosfAwRZ+FL8T7gcfCZ6LfQhXHsedCHcc5rzAOaYuNK7Z4hekD8YswH1LTkt2SVZhvrmjb5OY1eYXzL7TNzcIehBBCCGGzhF1T+WZJerFYbnLjmrzCRFP/zCRxTNhNYtrMQG6hQBBCCKF8pMLExZiFYZu20DVhWFzTVpiJvEILpzbXhPQnbwghhBDCTyi8IgVeOSdM4pS22Lwk97mU+h7fPSF/ENYR5sRbkCbK/z1BKBOExMJ2j7a2a8J2MaStMBN5hRbu8V0T0p+8IYQQQgg/o/CGMveEcYv4TNMyL0kqJP6KgiYIIYRQPgghrCns5bUKGyfsFZM6zToERFKh8fGIst49/vKu/f+PZDAL6528l3c9CCGEEEIIP6y2vflaoy/Nu1qENc80BEBuoUAQQgihfBBCCKF8EEIIoXwQ1hGWLRejfLcJhDJBCCGE8kEIIYTyQVhLSPw6AZoghBBC+SCEEEL5IKzRtiR+1ICmcksm3Dgq3JAJd44Kd2TCIJXGHC2lAwbDXFpzpHxIKHRym1Ju0iDou0cs+5TAYJ26tk/zdE0qDFalW8S8XNEC98TQJWIekgP3G7VwZox5WRBv0UOrIqz3I1JLhYWFAR5azyf9Qrb+ZG5nfgghhBBqcn8Ax68qN0sh2aoAAAAASUVORK5CYII=" class="card-img-top" alt="..." />
                        <div class="card-body mx-5">
                            <h5 class="card-title mx-auto">Docs</h5>
                            <p class="card-text mx-auto">Download Your files anywhere anytime</p>
                            <Link to="/download/docs" class="btn btn-primary">Download</Link>
                        </div>
                    </div>


                </div>


                <div className="container  justify-content-center ">


                    <div class="card mx-2" style={{ width: "18rem" }}>

                        
                        <img style={{ width: "10rem" , marginLeft:"3rem"}} className=" my-3 mx-5" src="data:image/png;base64,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" class="card-img-top" alt="..." />
                        <div class="card-body mx-5">
                            <h5 class="card-title mx-auto">Audio</h5>
                            <p class="card-text mx-auto">Download Your files anywhere anytime</p>
                            <Link to="/download/audio" class="btn btn-primary">Download</Link>
                        </div>
                    </div>



                    

                    <div class="card mx-2 my-3" style={{ width: "18rem" }}>
                        <img style={{ width: "10rem" , marginLeft:"3rem"}} className=" my-3 mx-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqYvMbaJsktOuuOOWtEOWxajDyMHMR05Pfg&usqp=CAU" class="card-img-top" alt="..." />
                        <div class="card-body mx-5">
                            <h5 class="card-title mx-auto">Video</h5>
                            <p class="card-text mx-auto">Download Your files anywhere anytime</p>
                            <Link to="/download/video" class="btn btn-primary">Download</Link>
                        </div>
                    </div>

                    


                </div>

                
                <div className="container  justify-content-center my-3 ">


                <div class="card mx-2" style={{ width: "18rem" }}>
                        <img style={{ width: "10rem" , marginLeft:"3rem"}} className="my-3 mx-5" src="data:image/jpeg;base64,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" className="card-img-top" class="card-img-top" alt="..." />
                        <div class="card-body mx-5">
                            <h5 class="card-title mx-auto">Other Files</h5>
                            <p class="card-text mx-auto">Download Your files anywhere anytime</p>
                            <Link to="/download/other" class="btn btn-primary">Download</Link>
                        </div>
                    </div>


            </div></div>

        </>
    )
}

export default Download