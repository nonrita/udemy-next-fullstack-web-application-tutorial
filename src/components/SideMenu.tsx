import NavList from "./NavList/NavList"

const SideMenu = () => {
  return (
    <div className="w-56 pt-8 bg-gray-800 text-white">
      <div>
        <h1 className="px-4 text-lg font-bold">なたぬきのタスク</h1>
        <NavList />
      </div>
    </div>
  )
}

export default SideMenu