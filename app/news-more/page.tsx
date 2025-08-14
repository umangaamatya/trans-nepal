import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";

const newsData = [
  {
    author: "PRACAS INFOSYS",
    date: "December 15, 2023",
    title: "Contract Signing of ICD Chobhar",
    content: "Transnepal T.R.S Logipark Pvt. Ltd. a 50:50 joint venture company between TransNepal Freight Services Pvt. Ltd. and TRS Lift and Shift Pvt. Ltd has been awarded the contract for operation and management of ICD Chobhar. ICD commenced its operation from 15th-Dec-2023..",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/21ba78ec7770fbdb3567a3b48f6af7343f5827ec?width=770"
  },
  {
    author: "PRACAS INFOSYS", 
    date: "December 15, 2023",
    title: "Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years",
    content: "KATHMANDU: Nepal Intermodal Transport Development Board (NITDB) has entered into an agreement with Trans Nepal JV, Biratnagar, allowing the latter to operate Tatopani Dry Port for the next five years. The Tatopani dry port was built with the financial and technical support of the Chinese government in Larcha of Sindhupalchowk district.The Chinese side had formally handed over the dry port to NITDB on June 28, 2019.The NITDB informed Trans Nepal JV,",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/94bb03183a9942e1412c89dde864e9c4bb54ef37?width=824"
  },
  {
    author: "PRACAS INFOSYS",
    date: "September 28, 2022", 
    title: "Signing of contract for Kakarbhitta ICD",
    content: "TransNepal has signed the contract for leasing of operation and management of Karkarbhitta ICD for 5 years with NITDB at Kathmandu on 27th January 2021 and company's Managing Director MR.Mukesh Kumar Rathi signed and exchanged the contract paper with NITDB Executive Director MR.Aashish Gajurel on the occasion. The operation is scheduled to commence from 13th February 2021.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/17a7b8a0a40a1e953380fc872c180980d6660d90?width=780"
  },
  {
    author: "PRACAS INFOSYS",
    date: "September 28, 2022",
    title: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion",
    content: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/a1d1d3023e8d27cfb026012c5e847479e330dc8b?width=858"
  },
  {
    author: "PRACAS INFOSYS",
    date: "August 25, 2020",
    title: "Transportation of Transformers for NEA's Hetauda-Dhalkebar-Inarua 400KV substation expansion",
    content: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19. TransNepal has insured all its employees against COVID-19 by taking specific policies.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/37412804a62467f9beedbac5507997f4243b4863?width=858"
  },
  {
    author: "PRACAS INFOSYS",
    date: "December 15, 2023",
    title: "Trans Silk joint venture company of Trans Nepal to operate Tatopani ICD for five years",
    content: "Mumbai, 2nd April: Allcargo Logistics, one of India's biggest integrated logistics services provider and the global leader in LCL consolidation, joined the fight against the COVID-19 pandemic by contributing to the Chief Minister's Relief Fund in Maharashtra and supporting various initiatives to help migrant labourers, daily-wage earners as well as doctors and paramedics who are on duty.\n\n Allcargo, which recently acquired a strategic stake in Gati, motivated its employees to generously donate from their salaries and a contribution of INR 1 crore was made to the CM's Relief Fund in Maharashtra. A donation was also made to the PM Cares Fund through support from the senior leadership and management. “As an integral part of society and as responsible citizens committed to our duty towards the nation, the time to act is right now. It is unprecedented challenges like these that bring society’s vulnerabilities to the fore and call on us to show care, compassion and generosity”, said Mr. Shashi Kiran Shetty, Chairman, Allcargo Logistics. In an effort to help some of the most vulnerable sections of society like migrant labourers and daily-wage earners who have lost their means of sustenance owing to the lockdown, Allcargo has collaborated with Khushiyaan Foundation for running community kitchens and distribution of food in Bhiwandi, Thane and Navi Mumbai. Being industrial hubs, these are catchment areas for underprivileged workers who would require help during these trying times. The organisation has also supported a similar initiative in Delhi, India’s capital city that is experiencing a surge in COVID-19 cases. A monetary contribution has been made to the Hare Krishna temple of the ISCKON Foundation for food distribution to migrant labourers from various locations outside Delhi. Considering how important it is to stand by all those working on the frontlines and support them in every way possible, Avashya Foundation, the CSR arm of Allcargo Logistics, is collaborating with the Dean’s Office and Head of Social Work Department, Sion Hospital to provide assistance to doctors and paramedics discharging their duties at Sion Hospital and Seven Hills Hospital. Avashya Foundation will gather financial support to procure medical material and equipment for the treatment of COVID-19 patients. “We will continue our efforts and I would urge all the corporates and individuals to come together and contribute to the cause of COVID-19 relief. I wish health and safety for everyone and hope we emerge stronger from this crisis”, concluded Mr. Shetty. The organisation has also implemented innovative operational measures in strict adherence to requisite health and safety regulations to keep all its facilities functional, so that trade, commerce and customers’ businesses continue uninterrupted even in these trying times.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/06c9d90f5b385fd109782ce773bcba2dde0f4a48?width=884"
  },
  {
    author: "PRACAS INFOSYS",
    date: "August 25, 2020", 
    title: "Signing Of Contract For Biratnagar ICP",
    content: "TransNepal has signed the contract for leasing of operation and management of Biratnagar ICP for 5 years with NITDB at Kathmandu on 12th August 2020. TransNepal Director Mr. Pankaj Rathi and NITDB Director Mr. Hemedra Mohan Shahi signed and exchanged contract paper on the occasion.The operation is set to commence from 17th August 2020",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/d158d02e8d6e1edf82e4038781d488e50b4c8b97?width=732"
  },
  {
    author: "PRACAS INFOSYS",
    date: "August 25, 2020",
    title: "Awarded by Bhairahawa Customs for efficiently managing terminal",
    content: "TransNepal was Awarded by Bhairahawa Customs for efficiently managing terminal at the occasion of 66th International Custom Day at 26 Jan,2018.",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/545833a097beb8e7f8fbb8f9a42d1b116b7db696?width=698"
  },
  {
    author: "PRACAS INFOSYS",
    date: "March 8, 2020",
    title: "Awarded by Biratnagar Customs for efficiently managing terminal", 
    content: "TransNepal was Awarded by Biratnagar Customs for efficiently managing terminal",
    imageUrl: "https://api.builder.io/api/v1/image/assets/TEMP/cba5b17329c6d72e76125857eb3d7eb9c81880ee?width=404"
  }
];

export default function NewsEvents() {
  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      

      <main className="pt-16 max-w-5xl mx-auto px-5 lg:px-35 py-10 lg:py-16">
        <div className="space-y-10">
          {newsData.map((article, index) => (
            <div key={index}>
              <NewsCard {...article} />
              {index < newsData.length - 1 && (
                <div className="w-full h-px my-10" style={{ background: 'rgba(0, 0, 0, 0.20)' }}></div>
              )}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
