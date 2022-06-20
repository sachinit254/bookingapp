import React from "react";
import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          {data &&
            images.map((img, index) => (
              <div className="pListItem" key={index}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[index]?.type}</h1>
                  <h2>
                    {data[index]?.count} {data[index]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
