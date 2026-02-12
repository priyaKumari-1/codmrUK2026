import img1 from '../../../assets/imgs/service-4/Salesforce CRM.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';
import ServiceMainPagePills from '../ServiceMainPagePills/ServiceMainPagePills';
import { salesforceServices } from '../../../data/salesforceServices';
function SalesforceCrm() {
  const items = [
    {
      icon: icon1,
      title: "Research planning",
      description:
        "Analyzing your current CRM structure to identify areas for automation and AI-driven insights."
    },
    {
      icon: icon2,
      title: "Investment",
      description:
        " 12 years CRM industries experience in implementating the Salesforce CRMs helps in maximizing your teams productivity resulting in higher revenue. "
    }]
  return (
    <>
      <div className="row rounded-3 bg-white">
        <div className="col-lg-5 mb-lg-0 mb-5">
          <img
            className="rounded-3 my-5"
            src={img1}
            alt="Salesforce CRM"
            width={"100%"}
          />
        </div>

        <div className="col-lg-7">
          <div className="p-lg-3">
            <h3 className="fw-regular">
              Empower Your Business <p> with AI-powered<span className="fw-bold"> Salesforce CRM</span> </p>
            </h3>
            <p className='custom-p'>
              <b className='text-black'>At CODM,</b> we help businesses to customize and configure Salesforce CRM experience to business
              needs enhancing automation, reporting, and customer engagement through
              tailored AI-enabled CRM solutions.
            </p>

            <div>
              <FlipImgwithContent items={items} />
            </div>
          </div>

        </div>


        {/* Pills section */}

        <h3>Salesforce Industries Cloud CRMs </h3>

        <div className="d-flex flex-wrap">
          {salesforceServices.map((service) => (
            <ServiceMainPagePills
              key={service.link}
              pillLabel={service.pillLabel}
              title={service.title}
              description={service.description}
              link={service.link}
            />
          ))}
        </div>
        {/* <div className=' d-flex flex-wrap'>
            <ServiceMainPagePills 
             pillLabel="Salesforce Education Cloud"
             title="Salesforce Education Cloud"
             description="Salesforce Education Cloud is a unified platform designed specifically"
             
             link="/ItServices/salesforce-education-cloud"
            />
             <ServiceMainPagePills 
             pillLabel="Salesforce Financial Services"
             title="Salesforce Financial Services"
             description="Salesforce Financial Services Cloud (FSC) is a purpose-built CRM platform"
             link="/ItServices/salesforce-financial-services"
            />
             <ServiceMainPagePills                      
             pillLabel="Salesforce Health & Insurance Cloud"
             title="Salesforce Health & Insurance Cloud"
             description="Salesforce Health and Insurance Cloud, prebuilt CRM for the healthcare industries"
             link="/ItServices/salesforce-health&insurance-cloud"
            />
            <ServiceMainPagePills 
             pillLabel="Salesforce Data Cloud"
             title=" Salesforce Data Cloud"
             description="Empower your digital applications with the next generation of AI and real-time data"
             link="/ItServices/salesforce-data-cloud"
            />
             <ServiceMainPagePills 
             pillLabel="Salesforce Marketing Cloud"
             title="Salesforce Marketing Cloud"
             description="Salesforce Marketing Cloud is a comprehensive digital marketing platform designed to"
             link="/ItServices/saleforce-marketing-cloud"
            />
             <ServiceMainPagePills 
             pillLabel="Salesforce Sales Cloud"
             title="Salesforce Sales Cloud"
             description="Salesforce Sales Cloud is a unified platform designed specifically for Sales reps"
             link="/ItServices/salesforce-sales-cloud"
            />
              <ServiceMainPagePills 
             pillLabel="Salesforce Service Cloud"
             title="Salesforce Service Cloud"
             description="Salesforce Service Cloud is a unified platform designed for Digital Support teams"
             link="/ItServices/salesforce-service-cloud"
            />
             <ServiceMainPagePills 
             pillLabel="Salesforce Energy and Utilities Cloud"
             title="Salesforce Energy and Utilities Cloud"
             description="Industry-specific solution for utilities, retail energy, and modern energy services companies"
             link="/ItServices/salesforce-energy-utilities-cloud"
            />
             <ServiceMainPagePills 
             pillLabel="Salesforce Manufacturing Cloud"
             title="Salesforce Manufacturing Cloud"
             description="Industry-specific solution increasing collaboration and transparency between sales, operations, and partners."
             link="/ItServices/salesforce-manufacturingcloud"
            />
            </div> */}
      </div>
    </>
  );
}

export default SalesforceCrm;