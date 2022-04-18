import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import Footer from "../component/Footer";

export default function DetailAnime() {
  const [detail, setDetail] = useState([]);
  const [genre, setGenre] = useState([]);
  const [producer, setProducer] = useState([]);
  const [download, setDownload] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();

  const getDetail = async () => {
    try {
      let req = await axios.get(
        `https://kinganimeapi.herokuapp.com/api/anime/${urlParams.slug}`
      );
      let res = req.data;
      setDetail(res);
      setGenre(res.genre);
      setProducer(res.producers);
      setDownload(res.list_download[0][1]);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getDetail();
  }, [detail]);

  return (
    <div className="w-full max-w-[1000px] bg-[#1B1C25] mx-auto text-[#EBECF1] pt-28 px-4">
      {loading ? (
        <div className="flex flex-col h-full items-center justify-center">
          <ReactLoading type="balls" color="#066163" />
          <p>Tunggu bentar nyet!</p>
        </div>
      ) : (
        <div className="">
          <div className="relative">
            <div className="thumbnail ">
              <img
                src={detail.thumbnail}
                alt={detail.thumbnail}
                className="w-full h-[30rem] object-cover object-top rounded-t-3xl "
              />
            </div>
          </div>
          <div className="-translate-y-36 md:-translate-y-32 px-5">
            <h1 className="text-xl font-bold w-full md:text-3xl">
              {detail.title}
            </h1>
            <p className="text-xs pt-1 md:text-sm">
              {detail.japanese} | {detail.score} | {detail.status}
            </p>
          </div>
          <div className="-translate-y-10">
            <h1 className="text-lg font-bold py-2">Sinopsis</h1>
            <p className="text-sm">{detail.sinopsis}</p>
          </div>

          <div
            className="flex flex-col gap-2 sm:flex-row"
            style={{ width: "fit-content" }}
          >
            {genre.map((g) => {
              return (
                <ul>
                  <li className="bg-[#206A5D] px-1 py-[0.5px]">{g.name}</li>
                </ul>
              );
            })}
          </div>
          <div className="border-b-[1px] border-slate-300 pb-1 mb-2">
            <p className="pt-5 text-lg font-bold">Information</p>
          </div>
          <p>Type : {detail.type}</p>
          <p>Total eps : {detail.total_eps} Episode</p>
          <time>Release : {detail.release}</time>
          <div className="border-b-[1px] border-slate-300 pb-1 mb-2">
            <p className="pt-5 text-lg font-bold">Download {detail.title}</p>
          </div>
          <div>
            {download.map((d) => {
              return (
                <div className="pt-5">
                  <p className="px-5 py-1 bg-[#206A5D]">{d.resolusi}</p>
                  <div className="flex gap-4 flex-col">
                    {d.link_download.map((l) => {
                      return (
                        <button className="px-3 py-1">
                          <a
                            href={l.link}
                            className="flex text-md hover:text-[#CDBE78] "
                          >
                            {" "}
                            {l.platform}
                          </a>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}
