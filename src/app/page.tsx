import { CompletedTask } from "@/components/CompletedTask";
import { Header } from "@/components/Header";
import { NewTask } from "@/components/NewTask";

export default function Home() {
  return (

    <div className="flex flex-col  items-center justify-center ">
      <header>
        <Header />
      </header>
      <main className=" w-96">
        <NewTask />
      </main>
      <div >
        <CompletedTask />
      </div>
    </div>


  )
}
