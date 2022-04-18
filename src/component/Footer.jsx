import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#1B1C25]">
      <div className="w-full max-w-[1000px] mx-auto px-4">
        <div className="border-t-[1px] border-slate-300 mt-32 mb-10">
          {/* navigate */}
          <div className="mt-28 flex flex-col justify-center items-center">
            <p className="text-sm">© 2022-2023 Under MIT licensed</p>
            <p>
              Made with <span className="text-pink-700">❤</span> by Aditya
              Argadinata
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
