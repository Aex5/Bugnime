import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function Download() {
  const [download, setDownload] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();

  const getDetail = async () => {
    try {
      let req = await axios.get(
        `https://kinganimeapi.herokuapp.com/api/anime/${urlParams.slug}}`
      );
      let res = req.data;
      setDownload(res.list_download[0][1]);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <div className="w-full max-w-[1000px] bg-[#1B1C25] mx-auto text-[#EBECF1] pt-28">
      {loading ? (
        <div className="flex flex-col h-full items-center justify-center">
          <ReactLoading type="balls" color="#066163" />
          <p>Tunggu bentar nyet!</p>
        </div>
      ) : (
        <div>
          {download.map((d) => {
            return (
              <ul>
                <li>{d.resolusi}</li>
                <div className="flex gap-4">
                  {d.link_download.map((l) => {
                    return (
                      <button className="px-3 py-1 bg-indigo-200 ">
                        <a href={l.link}>{l.platform}</a>
                      </button>
                    );
                  })}
                </div>
              </ul>
            );
          })}
        </div>
      )}
    </div>
  );
}
