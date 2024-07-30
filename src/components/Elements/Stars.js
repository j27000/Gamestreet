export const Stars = ({ id, rating }) => {
    let arr = new Array(5).fill(0);
    for (let index = 0; index < rating; index++) {
        arr[index] = 1;
    }

    return (
        <>

            {
                arr.map((i, index) => (


                    i ? <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> : <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i>



                ))
            }


        </>
    );
}

