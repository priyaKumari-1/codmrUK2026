import img1 from '../../../assets/imgs/service-4/Salesforce CRM.png';
import FlipImgwithContent from '../../../BlogsComponents/ui/FlipImgwithContent/FlipImgwithContent';
import icon1 from '../../../assets/imgs/service-4/icon-1.svg';
import icon2 from '../../../assets/imgs/service-4/icon-2.svg';
import ServiceMainPagePills from '../ServiceMainPagePills/ServiceMainPagePills';

function SalesforceCrm() {
      const items = [
            {
                icon: icon1,
                title: "Research planning",
                description:
                    "Analyzing your current CRM structure to identify areas for automation and data-driven insights"
            },
            {
                icon: icon2,
                title: "Investment",
                description:
                    "Expert implementation ensures increased productivity and maximum ROI from your Salesforce platform"
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
              Empower Your Business <p> with <span className="fw-bold">Salesforce CRM</span> </p>
            </h3>
            <p className='custom-p'>
              We customize and optimize Salesforce to fit your unique business
              needs enhancing automation, reporting, and customer engagement through
              tailored CRM solutions.
            </p>

            <div> 
                <FlipImgwithContent items={items}/>
            </div>
          </div>

        </div>


         {/* Pills section */}

          <h3>Service</h3>

            {/* <div className='d-flex flex-wrap pb-5'> */}
            <div className='pb-5 d-flex flex-wrap'>
            <ServiceMainPagePills 
             pillLabel="Higher Education"
             title="Higher Education"
             description="Salesforce Education Cloud is a unified platform designed specifically"
             link="/service/higher-education"
            />
             <ServiceMainPagePills 
             pillLabel="Financial Service"
             title="Financial Service"
             description="Salesforce Financial Services Cloud (FSC) is a purpose-built CRM platform"
             link="/service/financial-service"
            />
             <ServiceMainPagePills 
             pillLabel="Industries Cloud"
             title="Industries Cloud"
             description="At Codm Software UK, we help businesses across the UK accelerate"
             link="/service/industries-cloud"
            />
            <ServiceMainPagePills 
             pillLabel="Data Cloud + A.I"
             title="Data Cloud + A.I"
             description="Empower your institution with the next generation of AI and real-time data"
             link="/service/data-cloud-ai"
            />
             <ServiceMainPagePills 
             pillLabel="Marketing Cloud"
             title="Marketing Cloud"
             description="Salesforce Marketing Cloud is a comprehensive digital marketing platform designed to"
             link="/service/marketing-cloud"
            />
            </div>
      </div>
    </>
  );
}

export default SalesforceCrm;