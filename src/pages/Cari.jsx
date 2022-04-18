import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import ReactLoading from "react-loading";
import Footer from "../component/Footer";

export default function Cari() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const query = useParams();

  const getAnime = async () => {
    try {
      let req = await axios.get(
        `https://kinganimeapi.herokuapp.com/api/cari/${query.slug}`
      );
      let res = req.data;
      setAnime(res);
      setLoading(false);
      console.log(query.slug);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAnime();
  }, []);

  return (
    <>
      <div className="w-full pt-32 text-[#EBECF1]">
        {loading ? (
          <div className="flex flex-col h-full items-center justify-center">
            <ReactLoading type="balls" color="#066163" />
            <p>Tunggu bentar nyet!</p>
          </div>
        ) : (
          <>
            <div className="max-w-[1000px] w-full mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-1 ">
                {anime.map((a) => {
                  return (
                    <div>
                      <Link to={`/api/anime/${a.link.endpoint}`}>
                        <div className="w-40 h-56 relative mx-auto overflow-hidden group rounded-xl border-[1px] border-slate-500 md:w-44 md:h-64">
                        <div>
                          <img
                            className="mb-8 w-40 h-56 object-cover md:w-44 md:h-64"
                            src={a.link.thumbnail}
                            alt=""
                          />
                        </div>
                          <div className="p-1 font-semibold text-sm text-center text-white bottom-[-4.4rem] h-24 bg-black opacity-80 absolute group-hover:bottom-0 duration-200">
                            <p>{a.title}</p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
