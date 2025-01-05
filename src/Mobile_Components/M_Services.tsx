import { servicesList } from '../Asset_scripts/ServicesListData';

export default function M_Services() {
    const priceListBold = {
        className: "font-bold text-sm",
    };


    return (
        <>
            <div  id="m-service-section" className="h-full w-screen bg-button-dark flex flex-col justify-center items-center py-10 md-phone:py-20 ">
                <h3 className="text-white">our services</h3>
                <div className="mt-2 w-4/5 md-phone:w-3/5 h-full bg-near-white rounded-lg text-sm p-5">
                    <div className='flex flex-col items-center'>
                        <p className='w-4/5 text-zinc-700 text-sm md-phone:text-base text-center'> *Contact or visit us in-store for a free quote! </p>
                    </div>
                    {servicesList.map((service: { sectionName: string; sectionContent: { serviceName: string }[] }) => (
                        <div className='pl-2 pb-4' key={service.sectionName}>
                            <p className='font-bold mt-4 mb-1'>{service.sectionName}</p>
                            {service.sectionContent.map((content: { serviceName: string }) => (
                                <p className='py-0.5' key={content.serviceName}>{content.serviceName}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}