import { NavLink } from "react-router-dom";

export function SidebarNav() {
    return (
        <nav className="flex flex-row md:flex-col w-full md:w-48 p-4 border-b md:border-r space-x-4 md:space-x-0 md:space-y-4">
            <NavLink to="/" end
                className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : "text-blue-500"
                }
            >Все задачи</NavLink>
            <NavLink to="/completed"
                className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : "text-blue-500"
                }
            >Выполненные</NavLink>
            <NavLink to="/uncompleted"
                className={({ isActive }) =>
                    isActive ? "text-blue-700 font-bold" : "text-blue-500"
                }
            >Невыполненные</NavLink>
        </nav>
    );
}

