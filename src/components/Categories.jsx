import { use } from "react"
import { NavLink } from "react-router";

const categoriesPromice = fetch("/categories.json")
.then((res) => res.json())


const Categories = () => {
   const categories = use(categoriesPromice);
    
  return (
    <div>
        
<h2 className='font-bold'>All Categories <span className="text-sm text-gray-400">({categories.length})</span></h2>        
        <div className="grid grid-cols-1 mt-5 gap-3">
            {
                categories.map((category) => <NavLink
                 key={category.id}
                 className={"btn bg-base-100 border-0 hover:bg-base-200 font-bold text-accent"}
                to={`/category/${category.id}`} >{category.name}</NavLink>)
            }
        </div>
        </div>
  )
}

export default Categories