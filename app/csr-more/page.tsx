"use client";
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CSRArticle from '@/components/CSRArticle';

const PaginationArrow = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
    <path d="M7.08984 18.5L11.7428 12L7.09084 5.5H8.30984L12.9638 12L8.30984 18.5H7.08984ZM12.8858 18.5L17.5398 12L12.8848 5.5H14.1048L18.7588 12L14.1048 18.5H12.8858Z" fill="black"/>
  </svg>
);

export default function Index() {
  const articles = [
    {
      company: "PRACAS INFOSYS",
      date: "December 1, 2020",
      title: "CSR-Fight against COVID-19",
      content: "In its drive to fight against COVID-19 TransNepal has extended its hand to Nagarik Care Centre for construction of 110 bed facility at Biratnagar and for this company's MD and GM handing over NRs. 5 lacs cheque to Mr. Pawan Sharda and Mr. Makesh Jajju.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/07b558ff217d12e0dceca8ba4aa6ec96644552c0?width=800",
      layout: 'default' as const
    },
    {
      company: "PRACAS INFOSYS",
      date: "September 1, 2020",
      title: "Green Initiatives to keep Environment clean by TransNepal",
      content: "Part of Green Initiatives and to keep the environment clean TransNepal has planted 100 Ashoka Trees in ICP today. Custom Chief of Biratnagar and President of Biratnagar Agent Sangha lead the initiative.",
      additionalImages: [
        "https://api.builder.io/api/v1/image/assets/TEMP/a3d4d65b065983996b2fa691dadeb365f0b578c1?width=584",
        "https://api.builder.io/api/v1/image/assets/TEMP/db4d80963f351a0ae5a1439922b546192c042756?width=584",
        "https://api.builder.io/api/v1/image/assets/TEMP/320bbf318ea25507938f00c2823f46f9896281a6?width=584",
        "https://api.builder.io/api/v1/image/assets/TEMP/a26fb8b6df1cbc93b028c562a4a07276890e7565?width=584"
      ],
      layout: 'gallery' as const
    },
    {
      company: "PRACAS INFOSYS",
      date: "August 25, 2020",
      title: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19.",
      content: "TransNepal contributes to Pradesh No.1 Corona Jana Suraksha Kosh and collaborates on other initiatives to bolster Nepal's fight against COVID-19.\n\nTransNepal has insured all its employees against COVID-19 by taking specific policies.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/57431db4bfc14dfd3b2aa6cfdf960fc1e2412198?width=934",
      layout: 'side-image' as const
    },
    {
      company: "PRACAS INFOSYS",
      date: "August 18, 2020",
      title: "Allcargo Logistics contributes to CM's Relief Fund, collaborates on multiple other initiatives to bolster India's fight against COVID-19",
      bulletPoints: [
        "Donates INR 1 crore to the Chief Minister's Relief Fund in Maharashtra",
        "Contributes to the PM Cares Fund",
        "Supports food distribution to migrant workers and daily wage earners in Maharashtra and Delhi",
        "Collaborates with Sion Hospital in Mumbai to provide assistance to doctors and paramedics"
      ],
      content: "Mumbai, 2ndApril: Allcargo Logistics, one of India's biggest integrated logistics services provider and the global leader in LCL consolidation, joined the fight against the COVID-19 pandemic by contributing to the Chief Minister's Relief Fund in Maharashtra and supporting various initiatives to help migrant labourers, daily-wage earners as well as doctors and paramedics who are on duty.\n\nAllcargo, which recently acquired a strategic stake in Gati, motivated its employees to generously donate from their salaries and a contribution of INR 1 crore was made to the CM's Relief Fund in Maharashtra. A donation was also made to the PM Cares Fund through support from the senior leadership and management.\n\n\"As an integral part of society and as responsible citizens committed to our duty towards the nation, the time to act is right now. It is unprecedented challenges like these that bring society's vulnerabilities to the fore and call on us to show care, compassion and generosity\", said Mr. Shashi Kiran Shetty, Chairman, Allcargo Logistics.\n\nIn an effort to help some of the most vulnerable sections of society like migrant labourers and daily-wage earners who have lost their means of sustenance owing to the lockdown, Allcargo has collaborated with Khushiyaan Foundation for running community kitchens and distribution of food in Bhiwandi, Thane and Navi Mumbai. Being industrial hubs, these are catchment areas for underprivileged workers who would require help during these trying times.\n\nThe organisation has also supported a similar initiative in Delhi, India's capital city that is experiencing a surge in COVID-19 cases. A monetary contribution has been made to the Hare Krishna temple of the ISCKON Foundation for food distribution to migrant labourers from various locations outside Delhi.\n\nConsidering how important it is to stand by all those working on the frontlines and support them in every way possible, Avashya Foundation, the CSR arm of Allcargo Logistics, is collaborating with the Dean's Office and Head of Social Work Department, Sion Hospital to provide assistance to doctors and paramedics discharging their duties at Sion Hospital and Seven Hills Hospital. Avashya Foundation will gather financial support to procure medical material and equipment for the treatment of COVID-19 patients.\n\n\"We will continue our efforts and I would urge all the corporates and individuals to come together and contribute to the cause of COVID-19 relief. I wish health and safety for everyone and hope we emerge stronger from this crisis\", concluded Mr. Shetty.\n\nThe organisation has also implemented innovative operational measures in strict adherence to requisite health and safety regulations to keep all its facilities functional, so that trade, commerce and customers' businesses continue uninterrupted even in these trying times.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/2e4bc0ab2d5cf5e79f388ae27115c631f21cf31f?width=690",
      layout: 'bullet-points' as const
    },
    {
      company: "PRACAS INFOSYS",
      date: "August 17, 2020",
      title: "Allcargo recognises CSR partners' efforts in positively impacting lives at Manthan 2020",
      content: "Discussing strategies and challenges in achieving sustainable CSR outcomes, leveraging opportunities to expand CSR outreach and recognizing the committed efforts of partner organizations in positively impacting lives were the key points on the agenda of Manthan 2020. It was inaugurated by Mrs. Arathi Shetty, Non-Executive Director and Member of the CSR Committee. Manthan has been conceptualized as a platform for NGO Partners of Allcargo\n\nto collaborate effectively and synergize resources in creating sustainable CSR solutions for community empowerment and betterment.Dr Nilratan Shende, GM-CSR,",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/01d883d222d581fae8ced883694c93b0bcd0b38e?width=826",
      layout: 'side-image' as const
    }
  ];

  const blogContent = {
    company: "PRACAS INFOSYS",
    date: "March 8, 2020",
    author: "Blog From- Dmitriy Ioffe, Global Chief Commercial Officer, ECU Worldwide",
    sections: [
      {
        title: "1. Listening",
        content: "Listening is the most important communication skill for a sales person. Professional listening skills involve assessing the tone and scouting for any emotions behind the message. Careful listening will help you be ready with the right questions and responses while discussing pain points, solutions and approaches with your clients. Listening also enables you as a leader to discern facts accurately, without being judgmental."
      },
      {
        title: "2. Being Clear and Concise",
        content: "Clear communication helps clients and colleagues perceive and understand your point of view thereby negating any room for rumours and misunderstandings. Clarity in verbal and written communication helps your counterparts to hear you out, understand your opinion and be motivated to think and act differently. Furthermore, keeping the conversation concise with a focus only on the most relevant details eliminates any chance of ambiguity, helping everyone understand exactly what your goal is and what needs to be done to achieve it."
      },
      {
        title: "3. Adapting to Different Communication Styles",
        content: "Connecting with the people is of crucial importance in any commercial role. No matter how much charisma you have or how much of a good listener you are, you can impact only when you connect deeply with the people you are communicating with. The best communication secret is getting to know the people and adapting to their style of communication. This can be as simple as choosing to communicate with people in the language they are comfortable with or selecting a popular communication channel such as social media and telecommunication."
      },
      {
        title: "4. Being Open to Feedback",
        content: "Communication is never one-sided. To keep the communication channels open, apart from listening you should also be open to receiving feedback and responding to questions from your customers and your team."
      },
      {
        title: "5. Paying Attention to Body Language",
        content: "It is important to pay attention to non-verbal cues when communicating. Body language is the key to successful communication. Your clients will be more open to you and your message if your body language is warm and accepting. When you project confidence about your preparedness during a crisis or a positive outlook for the times ahead, it significantly increases the likelihood of your audience feeling the same. Taking conscious efforts to work on your body language will also help you analyse how people feel during the conversation, discern their level of reception and tweak your communication accordingly.\n\nGreat leaders are masters at motivating, inspiring and engaging people. One of the most powerful ways to achieve this is to understand human needs and behavioural drivers and appeal to these in your communication.\n\nFrame your message in a manner that will help clients and employees to achieve a sense of connection, happiness, security and success. This will help you to build long-term success and goodwill, internally and externally."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-4 md:px-31 py-20">
        {/* CSR Articles */}
        {/* --- Custom layout for first article --- */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1">
              <div className="flex gap-5 mb-4">
                <span className="text-trans-nepal-blue-light text-sm font-semibold">
                  {articles[0].company}
                </span>
                <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
                  {articles[0].date}
                </span>
              </div>
              <h3 className="text-blue-800 font-poppins text-lg md:text-xl font-medium leading-normal mb-2">
                {articles[0].title}
              </h3>
              <p className="text-gray-700 font-poppins text-base leading-8 text-justify">
                {articles[0].content}
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-[340px]">
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-[220px] object-cover rounded-2xl mb-0"
              />
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-black bg-opacity-20 my-16"></div>

        {/* Other CSR Articles */}
        {articles.slice(1).map((article, index) => (
          <div key={index}>
            <CSRArticle {...article} />
            {index < articles.slice(1).length - 1 && (
              <div className="w-full h-px bg-black bg-opacity-20 my-16"></div>
            )}
          </div>
        ))}

        {/* Separator */}
        <div className="w-full h-px bg-black bg-opacity-20 my-16"></div>

        {/* Additional Article with detailed content */}
        <article className="mb-16">
          <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-5">
            Allcargo Logistics briefed on the Manthan 2020 objectives, key impact initiatives across focus areas and elaborated on the expected learning outcomes.
          </p>
          <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-5">
            11 NGO partners comprising Mrs. Veera Rao, Alert India, Shraddha Sringarpure of Digant Swaraj Foundation, Mrs Wadia of Save of Children India, Mr Waman Kamble, Saad Foundation, Mr Sunit Dhanke, Next Amplitude, Ms Kamal Damania, Light of Life Trust, , Mr Mahendra Ingle, Gold Culture, Mr Chandrakant Patil, Allcargo Logisitcs Ltd, Mr Nitin Kamble, Allcargo Logistics Ltd, Mr Savisthar Alwa, Allcargo Logistics Ltd were present on the occasion. Representatives from different schools, Sion Hospital and Nair Hospital were also present.
          </p>
        </article>

        {/* Separator */}
        <div className="w-full h-px bg-black bg-opacity-20 my-16"></div>

        {/* Final Blog Section */}
        <div className="mt-16">
          <img 
            src="https://api.builder.io/api/v1/image/assets/TEMP/f89e4f3f01e52444fb7dc7f9833ffecb137ec5ae?width=2414"
            alt="Communication Skills"
            className="w-full h-80 object-cover rounded-2xl mb-10"
          />
          
          <div className="flex gap-5 mb-4">
            <span className="text-trans-nepal-blue-light text-sm font-semibold">
              {blogContent.company}
            </span>
            <span className="text-trans-nepal-blue-lighter text-sm font-semibold">
              {blogContent.date}
            </span>
          </div>
          
          <div className="text-gray-700 text-opacity-70 text-base font-semibold leading-normal mb-5">
            {blogContent.author}
          </div>
          
          <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-8">
            Strong communication skills are a must for any successful sales person. Three in four employees see effective communication as the number one leadership attribute. The ability to communicate properly enables a great leader to inspire colleagues, engage customers and help achieve growth and success. Communication skills are also essential to effectively build rapport with clients, assign tasks, set expectations with regards to deliverables, and even convince prospects.
          </p>
          
          <p className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify mb-8">
            In current times, when businesses across the world are faced with handling the health and economic implications of a crisis like the Coronavirus outbreak, communicating effectively with employees becomes all the more important. Keeping these five communication aspects in mind will surely help reduce panic, maintain productivity and get employees to cooperate with safety and prevention measures being undertaken to minimise impact.
          </p>

          {/* Communication Sections */}
          {blogContent.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-gray-700 text-opacity-70 text-base font-semibold leading-normal mb-3">
                {section.title}
              </h3>
              <div className="text-gray-700 text-opacity-84 text-base font-medium leading-8 text-justify space-y-5">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}

          {/* Pagination */}
          <div className="flex justify-end mt-10">
            <button className="flex items-center gap-2 text-black hover:text-gray-600">
              <PaginationArrow />
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
