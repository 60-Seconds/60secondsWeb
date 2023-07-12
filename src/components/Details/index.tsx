import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { HomeType } from "../../types/Home";
import API from "../../util/api";

export default function Details() {
  const [getItem, setGetItem] = useState<HomeType[]>([
    {
      idx: 0,
      type: "",
      name: "",
      datetime: "",
      location: "",
      dead: "",
      injury: "",
      missing: "",
      info: "",
    },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await API.get(`/v2/disaster/get/0`);
        const { data } = response.data;
        console.log("data", data);
        setGetItem(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return <div>{}</div>;
}
