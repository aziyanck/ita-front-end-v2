import house from '../assets/smart-home.png'
import Carousel from './Carousel';

function Features() {
    return (
        // 1. The main container is a flex column that fills the screen.
        // We use 'py-8' for vertical padding and 'px-4' for horizontal.
        <div className='w-screen overflow-x-clip h-auto box-border flex flex-col items-center justify-center py-8 px-4 gap-4'>

            <h1 className='text-3xl poppins-extrabold text-st'>
                Smart Home
            </h1>

            {/* 2. The image container will grow to fill the available space. */}
            {/* 'flex-grow' is the key here. 'w-full' and 'max-w-6xl' constrain its width. */}
            <div className='relative overflow-hidden rounded-2xl flex-grow w-[95vw] lg:max-h-[75vh] '>
                <img
                    src={house}
                    alt="A modern smart home"
                    // 3. The image itself should cover the entire area of its container.
                    className='w-full h-full object-cover'
                />
            </div>

            {/* 4. The carousel now sits naturally below the image. */}
            {/* It's no longer absolutely positioned. It takes a defined width. */}
            <div className='w-[95vw] md:w-[95vw] overflow-hidden box-border'>
                <Carousel />
            </div>

        </div>
    )
}

export default Features;