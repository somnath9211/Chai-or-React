import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/somnath9211")
      .then((res) => res.json())
      .then((data) => console.log(data));
    setData(data);
  });
  return (
    <div className=" text-center m-4 text-white p-4 bg-gray-600 text-3xl ">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  );
}

export default Github;
