"use client";

import { colorsPortfolio } from "@/helpers/helpers";

const Colors = () => {
  return (
    <div>
      <div className="page-title text-4xl">
        <h2>Colors used in portfolio</h2>
      </div>
      <div className="flex gap-4 flex-wrap">
        {Object.keys(colorsPortfolio).map((key) => (
          <div key={key} className="m-4">
            <div className="text-2xl">{key}</div>
            <div className="w-12 h-12" style={{ backgroundColor: colorsPortfolio[key as keyof typeof colorsPortfolio] }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Colors;
