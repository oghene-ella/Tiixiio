import Img from "../../components/assets/contact_left.svg"

const Contact = () => {
  return (
    <section className="w-full h-fit flex items-center bg-orange-50">
        <section className="w-10/12 mx-auto h-fit flex flex-col gap-12 py-10">
          <span className="flex flex-col gap-3">
            <h1 className="text-3xl ">Latest Events</h1>
            <p className="text-sm text-gray-500">Do not let ticketing headaches overshadow the excitement of planning your next event. Choose Tiixiio and experience the difference today!</p>
          </span>
            
          <main className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <section className="flex flex-col gap-5">
              <img src={Img} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">6 Strategies to Find Your Conference Keynote and Other Speakers</h1>
              <p className="text-gray-800 text-base text-balance">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic quasi delectus, accusamus iure impedit eos autem nostrum recusandae veniam placeat provident. Pariatur unde ratione quibusdam? Soluta voluptate alias aut.</p>
              <p className="text-gray-400">12 Jan - Created by Ellahhh</p>
            </section>

            <section className="flex flex-col gap-5">
              <img src={Img} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">6 Strategies to Find Your Conference Keynote and Other Speakers</h1>
              <p className="text-gray-800 text-base text-balance">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic quasi delectus, accusamus iure impedit eos autem nostrum recusandae veniam placeat provident. Pariatur unde ratione quibusdam? Soluta voluptate alias aut.</p>
              <p className="text-gray-400">12 Jan - Created by Ellahhh</p>
            </section>

            <section className="flex flex-col gap-5">
              <img src={Img} className="rounded-2xl" />
              <h1 className="text-3xl text-balance">6 Strategies to Find Your Conference Keynote and Other Speakers</h1>
              <p className="text-gray-800 text-base text-balance">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, hic quasi delectus, accusamus iure impedit eos autem nostrum recusandae veniam placeat provident. Pariatur unde ratione quibusdam? Soluta voluptate alias aut.</p>
              <p className="text-gray-400">12 Jan - Created by Ellahhh</p>
            </section>
          </main>
        </section>
    </section>
  )
}

export default Contact