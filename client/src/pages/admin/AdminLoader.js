import React from "react";
import { Oval } from "react-loader-spinner";

export default function AdminLoader(prop) {
  return (
    <div className="adminLoader">
      <div className="adminLoader__container">
        <Oval
          height={80}
          width={80}
          color="#e96479"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#e96479"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
        <h1>{prop.text}</h1>
      </div>
    </div>
  );
}
