import Link from "next/link"
import { MdAddTask } from "react-icons/md"

const MainPage = () => {
  return (
    <div>
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