export const Testimonials = () => {
    return (
        <section className="my-20">
            <h1 className="text-2xl text-center font-semibold text-black mb-5 underline underline-offset-8">What Gamers Are Saying About GameStreet</h1>
            <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">A Gamer's Paradise</h3>
                        <p className="my-4 font-light">"GameStreet offers an incredible selection of games. I always find what I'm looking for!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Alex Johnson</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Professional Gamer</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Unmatched Game Collection</h3>
                        <p className="my-4 font-light">"The variety of games available on GameStreet is unparalleled. It's my go-to site for new releases."</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1525085475165-c6808cdb005e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=50" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Chris Evans</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Game Developer</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Amazing Customer Service</h3>
                        <p className="my-4 font-light">"GameStreet's customer service is top-notch. They helped me with a game issue within minutes!"</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Samantha Smith</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Gaming Enthusiast</div>
                        </div>
                    </figcaption>
                </figure>
                <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Highly Recommend</h3>
                        <p className="my-4 font-light">"GameStreet is the best place to buy games. The prices are great and the selection is amazing."</p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                        <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&q=60" alt="user" />
                        <div className="space-y-0.5 font-medium dark:text-white text-left">
                            <div>Michael Brown</div>
                            <div className="text-sm font-light text-gray-500 dark:text-gray-400">Game Reviewer</div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </section>
    )
}
