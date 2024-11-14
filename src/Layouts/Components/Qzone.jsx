import React from 'react';

const Qzone = () => {
    const img1 =
      "https://i.ibb.co.com/68xTY2M/1-x-Ch6m-Ec8r2mv0-ZIb-Yeze-Q.jpg";
    const img2 =
      "https://i.ibb.co.com/6JyjQVJ/images-q-tbn-ANd9-Gc-SB-VVrz-E4-H16-BHzi1mvkv2-Yle-Chd-Ksa-TMCz-A-s.jpg";
      const img3 =
        "https://i.ibb.co.com/F43Sk7G/high-angle-delicious-brazilian-food-composition.jpg";
    const img4 =
      "https://i.ibb.co.com/dPG3k8k/delicious-lobster-gourmet-seafood.jpg";
    return (
      <>
        <h1 className="subHeading">Q-zone</h1>
        <div className="w-full h-auto bg-gray-100">
          {/* img */}
          <div className="border border-gray-800 space-y-6">
            <div className="-rotate-6 w-11/12 mx-auto bg-white">
              <img src={img1} alt="" />
              <h1 className="subHeading text-center mt-2 p-2">Laptop</h1>
            </div>
            <div className="-rotate-6 w-11/12 mx-auto bg-white">
              <img src={img2} alt="" />
              <h1 className="subHeading text-center mt-2 p-2">Mobile</h1>
            </div>
            <div className="-rotate-6 w-11/12 mx-auto bg-white">
              <img src={img3} alt="" />
              <h1 className="subHeading text-center mt-2 p-2">Rice</h1>
            </div>
            <div className="-rotate-6 w-11/12 mx-auto bg-white">
              <img src={img4} alt="" />
              <h1 className="subHeading text-center mt-2 p-2">Burger</h1>
            </div>
          </div>
        </div>
      </>
    );
};

export default Qzone;