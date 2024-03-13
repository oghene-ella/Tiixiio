import SearchTag from "@/components/ui/search";
import List from "./List";

const Explore = () => {
  return (
    <section className="bg-gray-50 flex flex-col gap-5 items-center justify-center py-10">
        <main className="w-10/12 flex flex-col gap-16 ">
            <section className="flex justify-between items-center w-full">
                <h1 className="text-3xl font-semibold underline decoration-wavy decoration-green-400">Explore States</h1>
                <span className="w-3/4">
                    <SearchTag onSearch={(query) => console.log("Search query:", query)} />
                </span>
            </section>
            <List/>
        </main>
    </section>
  )
}

export default Explore