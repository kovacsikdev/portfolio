export const colors = {
  ALERT: "#ff1a1a",
  NORMAL: "#00e64d",
  WARNING: "#ff9933",
};

export const colorsPortfolio = {
  c_1: "#0d1a26",
  c_2: "#250A07",
  c_3: "#633F3B",
  c_4: "#5C3333",
  c_5: "#405157",
  c_6: "#DB525E",
  c_7: "#F17D52",
  c_8: "#5B9DB9",
  c_9: "#2E6167",
  c_10: "#35a834",
  gray_1: "#f2f2f2",
  gray_2: "#242424",
  gray_3: "#31312F",
}

export const determineHealth = (health: string) => {
  if (health === "alert") return colors.ALERT;
  if (health === "warning") return colors.WARNING;
  return colors.NORMAL;
};

export const determineTireHealth = (psi: number) => {
  if (psi <= 20) return colors.ALERT;
  if (psi <= 37) return colors.WARNING;
  return colors.NORMAL;
};

export const determineHealthCSS = (health: any) => {
  if (health <= 5) return "alert";
  if (health <= 7) return "warning";
};

export const realTimeVideoMap = (id: string) => {
  switch (id) {
    case "101":
      return { driving: "6", stopped: "1" };
    case "102":
      return { driving: "2", stopped: "1" };
    case "103":
      return { driving: "4", stopped: "1" };
    case "104":
      return { driving: "2", stopped: "1" };
    case "105":
      return { driving: "5", stopped: "1" };
    case "106":
      return { driving: "5", stopped: "1" };
    case "107":
      return { driving: "5", stopped: "1" };
    case "108":
      return { driving: "6", stopped: "2" };
    case "109":
      return { driving: "2", stopped: "1" };
    case "110":
      return { driving: "4", stopped: "1" };
    case "111":
      return { driving: "2", stopped: "1" };
    case "112":
      return { driving: "4", stopped: "1" };
    case "113":
      return { driving: "2", stopped: "1" };
    case "114":
      return { driving: "2", stopped: "1" };
    case "115":
      return { driving: "1", stopped: "1" };
    case "116":
      return { driving: "6", stopped: "4" };
    case "117":
      return { driving: "5", stopped: "1" };
    case "118":
      return { driving: "5", stopped: "1" };
    case "119":
      return { driving: "6", stopped: "3" };
    case "120":
      return { driving: "3", stopped: "1" };
  }
};

export const convertNumToCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};