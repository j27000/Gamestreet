import { useEffect, useState } from "react"
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
export const DashboardPage = () => {
  const nid = JSON.parse(sessionStorage.getItem("nid"));
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [show, setShow] = useState([]);
  useEffect(() => {
    async function orders() {
      const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${nid}`,
        {
          method: 'GET',
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
        }
      )
      const data = await response.json();

      console.log(data);
      setShow(data);


    }
    orders();

  }, [nid, token])



  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">My Dashboard</p>
      </section>
      <section>
        {show.length && show.map((order) => (<DashboardCard key={order.id} order={order} />))}

      </section>
      <section>
        {!show.length && <DashboardEmpty />}
      </section>
    </main>
  )
}
