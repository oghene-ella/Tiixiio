import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import North from "/hausa.jpg"
import South from "/igbo.jpg"
import West from "/yoruba.jpg"

const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full h-fit flex items-center bg-green-50" id="regions" data-aos="fade-up">
        <section className="w-10/12 mx-auto h-fit flex flex-col gap-12 py-10">
          <span className="flex flex-col gap-3">
            <h1 className="text-3xl ">Major Regions in Nigeria</h1>
            <p className="text-sm text-gray-500">One of the notable aspects of Nigeria's diversity is its three major regions, each characterized by unique cultural practices, languages, and traditions. </p>
          </span>
            
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <section className="flex flex-col gap-5">
              <img src={North} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">The Northern Region</h1>
              <p className="text-gray-800 text-base text-balance">The Northern Region of Nigeria encompasses several states predominantly inhabited by Hausa-Fulani and Kanuri ethnic groups. It is known for its rich Islamic heritage and traditional emirates. The region boasts vibrant marketplaces, colorful festivals, and architectural marvels such as the ancient city of Kano and the historic Sokoto Caliphate. Agriculture, particularly the cultivation of grains such as millet and sorghum, is a primary economic activity in this region.</p>
              <p className="text-gray-400">This region comprises of 19 states</p>
            </section>

            <section className="flex flex-col gap-5">
              <img src={South} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">The Southern Region</h1>
              <p className="text-gray-800 text-base text-balance">The Southern Region of Nigeria is characterized by its lush vegetation, tropical rainforests, and coastal plains. It is home to various ethnic groups, including the Yoruba, Igbo, and Ijaw people. The region's cultural diversity is reflected in its vibrant music, dance, and cuisine. Cities such as Lagos, the commercial capital, and Port Harcourt are economic hubs known for their bustling markets and entrepreneurial spirit. The Southern Region is also rich in natural resources such as oil and gas, which contribute significantly to Nigeria's economy.</p>
              <p className="text-gray-400">This region comprises of 17 states</p>
            </section>

            <section className="flex flex-col gap-5">
              <img src={West} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">The Western Region</h1>
              <p className="text-gray-800 text-base text-balance">The Western Region of Nigeria is renowned for its blend of traditional and modern influences. It is primarily inhabited by the Yoruba ethnic group, known for its rich cultural heritage and artistic traditions. The region is home to historic sites such as the UNESCO World Heritage-listed Ife Bronze Heads and the Ooni of Ife's palace. Additionally, cities like Ibadan, the largest city in West Africa, and Abeokuta are centers of commerce, education, and industry in the region. Agriculture, trade, and manufacturing are key economic activities in the Western Region.</p>
              <p className="text-gray-400">This region comprises of 6 states</p>
            </section>
          </main>
        </section>
    </section>
  )
}

export default Contact