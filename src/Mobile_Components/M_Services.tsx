export default function M_Services() {
    const priceListBold = {
        className: "font-bold text-sm",
      };

    return (
        <>
        <div className="py-8 h-full w-screen bg-button-dark flex flex-col justify-center items-center">
            <h3 className="text-white">our services</h3>
            <div className="mt-2 w-3/5 h-full bg-near-white rounded-lg text-sm p-5">
            <p {...priceListBold}>Woman's</p>
            <p>Cut</p>
            <p>Colour</p>
            <p>Perm</p>
            <br />


            <p {...priceListBold}>Men's </p>
            <p>Cut</p>
            <p>Colour</p>
            <p>Perm</p>
            <br />

            <p {...priceListBold}>Children's</p>
            <p>Cut</p>
            <p>Colour</p>
            <p>Perm</p>
            </div>
        </div>

        </>
    )
}