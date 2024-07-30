import { Link } from "react-router-dom"

export const DashboardCard = ({ order }) => {

    return (
        <div className="max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700">
            <div className="flex justify-between text-sm m-2 font-bold dark:text-slate-200">
                <span> Order ID:{order.id}</span>
                <span>Total:{order.Amount_paid}$</span>
            </div>

            {order.CartList.map((order) => (
                <div key={order.id} className="flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5 ">
                    <div className="flex">
                        <Link to={`/products/${order.id}`}>
                            <img className="w-32 rounded" src={order.poster} alt="" />
                        </Link>
                        <div className="">
                            <Link to={`/products/${order.id}`}>
                                <p className="text-lg ml-2 dark:text-slate-200">{order.name}</p>
                            </Link>
                            <div className="text-lg m-2 dark:text-slate-200">
                                <span>${order.price}</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}



        </div>
    )
}
