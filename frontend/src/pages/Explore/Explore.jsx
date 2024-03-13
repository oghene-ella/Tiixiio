import SearchTag from "@/components/ui/search";
import List from "./List";

const Explore = () => {
  return (
    <section className="bg-gray-50 flex flex-col gap-5 items-center justify-center py-10">
        <main className="w-10/12 flex flex-col gap-16 ">
            <section className="flex flex-col md:flex-row justify-between items-center w-full gap-8">
                <h1 className="text-3xl font-semibold underline decoration-wavy decoration-green-400">Explore States</h1>
                <span className="w-full md:w-2/3">
                    <SearchTag onSearch={(query) => console.log("Search query:", query)} />
                </span>
            </section>
            <List/>
        </main>
    </section>
  )
}

export default Explore