import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "../../components/Elements/ProductCard"
import { FilterBar } from "./components/FilterBar"

import { useFilter } from "../../Context/ProductContext";
export const ProductsList = () => {
  const [show, setshow] = useState(false);
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("q");
  console.log(searchTerm);
  const { productList, intialproducts } = useFilter();
  useEffect(() => {
    async function found() {

      const encodedSearchTerm = encodeURIComponent(searchTerm || "");
      const data = await fetch(`${process.env.REACT_APP_HOST}/products?name_like=${encodedSearchTerm}`);
      const response = await data.json();

      intialproducts(response);

    }
    found();
    // eslint-disable-next-line
  }, [searchTerm]) 





  return (
    <main>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold  text-black">All Games {productList.length}</span>
          <span>
            <button id="dropdownMenuIconButton" onClick={() => setshow(!show)} data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">
          {productList.map((pro) => (
            <ProductCard key={pro.id} product={pro} />

          ))
          }

        </div>
      </section>
      {show && <FilterBar setshow={setshow} />}
    </main>
  )
}
