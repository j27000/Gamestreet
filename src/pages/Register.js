import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const Register = () => {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const authDetail = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/Register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(authDetail)
    });

    const data = await response.json();

    if (data.accessToken) {
      sessionStorage.setItem("token", JSON.stringify(data.accessToken));
      sessionStorage.setItem("nid", JSON.stringify(data.user.id));
      navigate("/Products");
    } else {
      toast.error("Registration failed. Please check your details.");
    }
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <section className="w-full max-w-md p-8 space-y-3 rounded-xl bg-white dark:bg-gray-800 shadow-md">
        <h1 className="text-2xl font-semibold text-center dark:text-slate-100">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
            <input type="text" id="name" name="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Naman Jhala" required autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
            <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="naman@example.com" required autoComplete="off" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
            <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required minLength="7" />
          </div>
          <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800">Register</button>
        </form>
      </section>
    </main>
  );
}
