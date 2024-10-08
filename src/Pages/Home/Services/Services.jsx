import ServiceCard from './ServiceCard';
import UseServices from '../../../hooks/useServices';

const Services = () => {
   const services=UseServices([]);
    return (
        <div className='mt-8'>
            <div className='text-center space-y-5'>
                <h3 className='text-xl text-red-500 font-bold'>Service</h3>
                <h1 className='text-5xl font-bold'>Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br></br> words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service =><ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
}

export default Services;
