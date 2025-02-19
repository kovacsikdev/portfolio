import React, { useState } from "react";
import { colorsPortfolio } from "@/helpers/helpers";

type WarehouseLayoutProps = {
  setWarehouseBlockSelected: React.Dispatch<React.SetStateAction<string>>
}

const WarehouseLayout = (props: WarehouseLayoutProps) => {
  const { setWarehouseBlockSelected } = props;
  const [warehouseSelected, setWarehouseSelected] = useState<string>("");

  const toggleWarehouseBlock = (blockId: string) => {
    let block = blockId;
    if (warehouseSelected === blockId) {
      block = "";
    }
    setWarehouseBlockSelected(block)
    setWarehouseSelected(block);
  };

  return (
    <div style={{ width: "calc(100% - 16px)", border: `1px solid ${colorsPortfolio.gray_1}`, margin: "8px" }}>
      <svg viewBox="0 0 300 200" width="100%" height="100%">
        <g
          style={{ cursor: "pointer" }}
          id="block_a"
          fill={warehouseSelected === "A" ? colorsPortfolio.c_8 : colorsPortfolio.c_1}
          stroke={colorsPortfolio.gray_1}
          strokeWidth="1"
        >
          <polygon
            points="20,20 100,20 100,60 60,60 60,100 20,100"
            onClick={() => toggleWarehouseBlock("A")}
          />
          <text
            style={{ pointerEvents: "none" }}
            x="40"
            y="50"
            fontSize={24}
            fill={warehouseSelected === "A" ? "#000" : "#fff"}
            stroke="none"
          >
            A
          </text>
          <line x1="100" y1="30" x2="100" y2="40" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="60" y1="70" x2="60" y2="80" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="30" y1="100" x2="40" y2="100" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
        </g>
        <g
          style={{ cursor: "pointer" }}
          id="block_b"
          fill={warehouseSelected === "B" ? colorsPortfolio.c_8 : colorsPortfolio.c_1}
          stroke={colorsPortfolio.gray_1}
          strokeWidth="1"
        >
          <rect
            x="140"
            y="20"
            width="140"
            height="60"
            onClick={() => toggleWarehouseBlock("B")}
          />
          <text
            style={{ pointerEvents: "none" }}
            x="200"
            y="60"
            fontSize={24}
            fill={warehouseSelected === "B" ? "#000" : "#fff"}
            stroke="none"
          >
            B
          </text>
          <line x1="140" y1="30" x2="140" y2="40" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="160" y1="80" x2="170" y2="80" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="260" y1="80" x2="270" y2="80" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
        </g>
        <g
          style={{ cursor: "pointer" }}
          id="block_c"
          fill={warehouseSelected === "C" ? colorsPortfolio.c_8 : colorsPortfolio.c_1}
          stroke={colorsPortfolio.gray_1}
          strokeWidth="1"
        >
          <rect
            x="20"
            y="120"
            width="80"
            height="60"
            onClick={() => toggleWarehouseBlock("C")}
          />
          <text
            style={{ pointerEvents: "none" }}
            x="50"
            y="160"
            fontSize={24}
            fill={warehouseSelected === "C" ? "#000" : "#fff"}
            stroke="none"
          >
            C
          </text>
          <line x1="100" y1="160" x2="100" y2="170" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="30" y1="120" x2="40" y2="120" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
        </g>
        <g
          style={{ cursor: "pointer" }}
          id="block_d"
          fill={warehouseSelected === "D" ? colorsPortfolio.c_8 : colorsPortfolio.c_1}
          stroke={colorsPortfolio.gray_1}
          strokeWidth="1"
        >
          <rect
            x="180"
            y="100"
            width="100"
            height="30"
            onClick={() => toggleWarehouseBlock("D")}
          />
          <text
            style={{ pointerEvents: "none" }}
            x="220"
            y="125"
            fontSize={24}
            fill={warehouseSelected === "D" ? "#000" : "#fff"}
            stroke="none"
          >
            D
          </text>
          <line x1="180" y1="110" x2="180" y2="120" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="260" y1="100" x2="270" y2="100" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="260" y1="130" x2="270" y2="130" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
        </g>
        <g
          style={{ cursor: "pointer" }}
          id="block_e"
          fill={warehouseSelected === "E" ? colorsPortfolio.c_8 : colorsPortfolio.c_1}
          stroke={colorsPortfolio.gray_1}
          strokeWidth="1"
        >
          <rect
            x="140"
            y="150"
            width="140"
            height="30"
            onClick={() => toggleWarehouseBlock("E")}
          />
          <text
            style={{ pointerEvents: "none" }}
            x="200"
            y="175"
            fontSize={24}
            fill={warehouseSelected === "E" ? "#000" : "#fff"}
            stroke="none"
          >
            E
          </text>
          <line x1="140" y1="160" x2="140" y2="170" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="260" y1="150" x2="270" y2="150" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
          <line x1="160" y1="150" x2="170" y2="150" strokeWidth="3" stroke={colorsPortfolio.gray_1} />
        </g>
      </svg>
    </div>
  );
};

export default WarehouseLayout;
