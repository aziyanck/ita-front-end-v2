
import house from '../assets/house.png'
import FlippingCard from './sub_comp/FlippingCard';
import { smartHome, smartOffice,smartLiving } from './sub_comp/card_data';

function Features() {
    return (
        <div className='w-screen box-border h-auto lg:h-[80vh] flex flex-col justify-center items-center'>
            <div>
                <h1 className='text-3xl poppins-extrabold text-st pb-14'>----</h1>

            </div>
            <div className='flex gap-10 flex-wrap justify-center items-center'>
                <FlippingCard title={smartHome.title} desc={smartHome.desc} />
                <FlippingCard title={smartOffice.title} desc={smartOffice.desc} />
                <FlippingCard title={smartLiving.title} desc={smartLiving.desc} />
            </div>



        </div>
    )
}

export default Features;