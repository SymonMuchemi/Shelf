import bookShelfLogo from './shelf-logo.png'


function Welcome(){

    document.body.style.backgroundImage = 'none'

    return(
        <div className='imageContainer'>
            <img src={bookShelfLogo} alt="logo" className="imageContainer"/>
        </div>
    )
}

export default Welcome;
