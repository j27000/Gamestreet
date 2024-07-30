import { useState, useEffect } from "react"
import { ProductCard } from "../../../components/Elements/ProductCard"

export const FeaturedProducts = () => {

  const [task, settask] = useState([]);
  useEffect(() => {
    async function found() {
      const data = await fetch(`${process.env.REACT_APP_HOST}/featured_products`);
      const response = await data.json();
      console.log(response);
      settask(response);

    }
    found();


  }, [])
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold text-black-100 mb-5 underline underline-offset-8">Featured Games</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {task.map((product) => (

          <ProductCard key={product.id} product ={product} />
        ))}
      </div>
    </section>
  )
}
