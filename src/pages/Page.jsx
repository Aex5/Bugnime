import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Footer from "../component/Footer";

function Page() {
  const [anime, setAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const urlParams = useParams();
  const onPage = parseInt(urlParams.id);

  const getAnime = async () => {
    try {
      let req = await axios.get(
        `https://kinganimeapi.herokuapp.com/api/page/${urlParams.id}`
      );
      let res = req.data;
      setAnime(res);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    getAnime();
  }, [onPage]);

  return (
    <div className="w-full pt-32 text-[#EBECF1]">
      {loading ? (
        <div className="flex flex-col h-full items-center justify-center">
          <ReactLoading type="balls" color="#066163" />
          <p>Tunggu bentar nyet!</p>
        </div>
      ) : (
        <>
          <div className="max-w-[1000px] w-full mx-auto px-4">
            <div className="text-lg font-semibold border-b-[1px] border-slate-300 mb-10 md:text-2xl">
              <h1 className="pb-2">Completed Anime</h1>
            </div>
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
          <div className="flex gap-10 items-center justify-center mt-20 ">
            <Link to={`/api/page/${onPage - 1}`}>
              <MdArrowBackIosNew className="text-xl" />
            </Link>
            <p className="text-2xl">{onPage}</p>
            <Link to={`/api/page/${onPage + 1}`}>
              <MdArrowForwardIos className="text-xl" />
            </Link>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Page;
