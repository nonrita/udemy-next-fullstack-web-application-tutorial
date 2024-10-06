import Link from "next/link"
import { MdAddTask } from "react-icons/md"

const MainPage = () => {
  return (
    <div className="text-gray-800 p-8 h-full overflow-y-auto pb-24">
      <header>
        <h1>All Tasks</h1>
        <Link href='/new'>
          <MdAddTask />
          <div>Add Task</div>
        </Link>
      </header>
      <div>
        Task Card
      </div>
    </div>
  )
}

export default MainPage