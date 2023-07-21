import React from 'react'

function Docscard(props) {
  return (
    <>
    <div className="card mx-3" style={{width:"15rem"}} >
    <img style={{width:"10rem"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///9Fh/RKivRLi/REhvRNjPTy8vJDhvRHiPROjfRIifRGiPRMi/RPjfSmxfpJifRChfQ8gvR2ovZ+qPavx/n8+fKGq/SMsPTw8fI/dMxBd9OTtfPr7vJBetqZvPmLruwza8W7zvNDf+b/+/LP3/xdlfTr8v6tv+c1dNmuwvA3eeVrnPTC0vO0y/k0fvPc6P1ymd1MfM54n+IlZMJ2xJw+AAAEHElEQVR4nO3cjVLaQBSG4WSXlJBEIQFFoFD5kbYKwdr7v7cySp2qwCbTs+ds1u+9gZ1nzmI2SBIECCGEEEJvW89nw7615tK8YNXvKG2vdLKS9a37ob7oWEzPLkWJq46yyXsRShJ3KrIMfBbKEdcd68AXoRjx2vYWfRXOZIi7xD7wIBSa4oRhhK9CESKD7x+hAHEXXjCkXoX8xE3KLGQnbtmF3MQBv5D5oiEwQ+YpighZiTJCTqKQkJEoJeQjignZiNuU49R2TMh10RiICbmmKCnkIYoKWYiyQg6isJCBKC20TxQXWifKC20THRBaJrogtEt0Qmj1AOeE0OoUB2HEUNcktEh0RWiPyCNMzEJrRHeEtohMwkkFoSUik3BYRWiHyPSXpj8QI/II1UM1oQ0ijzDqVAPaIDIJk+uKQ6QnMgmzykMkJzIJo6SoOkRqIpcwSivvU2Iim3D/UawqpL2Z4hNGcVGVSDpFRmGUjB9nl4NKm5WQyCmMsvHtr8enbxV6oiOyCnU0Go1uq/T7ezOF+7PNqFq3jRVGkf/CalNssjBacAvb3MJKRFJhxt7Ue6EyExsuzPR0ND5f04WZMgDHP5ouzDL/hdp/4XmiB0LDFL0QniWSCi0+dni+bOG7UOvFeHoiX4TZKaA3wtNEb4RanxL+9EZ4YooeCdVxokdCrY5uVJ+E+uhn0TPhEaJvwo9E74QL74V68a5774TviZTCnnKjxdR3ofJ+hkp7L3wzRU+Fyn+h8l/Y9V6oYu+Ff6fosfAwRZ+FL8T7gcfCZ6LfQhXHsedCHcc5rzAOaYuNK7Z4hekD8YswH1LTkt2SVZhvrmjb5OY1eYXzL7TNzcIehBBCCGGzhF1T+WZJerFYbnLjmrzCRFP/zCRxTNhNYtrMQG6hQBBCCKF8pMLExZiFYZu20DVhWFzTVpiJvEILpzbXhPQnbwghhBDCTyi8IgVeOSdM4pS22Lwk97mU+h7fPSF/ENYR5sRbkCbK/z1BKBOExMJ2j7a2a8J2MaStMBN5hRbu8V0T0p+8IYQQQgg/o/CGMveEcYv4TNMyL0kqJP6KgiYIIYRQPgghrCns5bUKGyfsFZM6zToERFKh8fGIst49/vKu/f+PZDAL6528l3c9CCGEEEIIP6y2vflaoy/Nu1qENc80BEBuoUAQQgihfBBCCKF8EEIIoXwQ1hGWLRejfLcJhDJBCCGE8kEIIYTyQVhLSPw6AZoghBBC+SCEEEL5IKzRtiR+1ICmcksm3Dgq3JAJd44Kd2TCIJXGHC2lAwbDXFpzpHxIKHRym1Ju0iDou0cs+5TAYJ26tk/zdE0qDFalW8S8XNEC98TQJWIekgP3G7VwZox5WRBv0UOrIqz3I1JLhYWFAR5azyf9Qrb+ZG5nfgghhBBqcn8Ax68qN0sh2aoAAAAASUVORK5CYII=" className='my-2 ml-2' />
  <div className="card-body">
    <h5 className="card-title">{props.filename}</h5>
    
    <a href={props.fileurl} className="btn btn-primary">Download</a>
  </div>
</div>
    </>
  )
}

export default Docscard