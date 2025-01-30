import Image from "next/image";
import { useVehicleData } from "@/helpers/customHooks";
import { Icon } from "./Icon";
import CloseIcon from "../../assets/CloseIcon.svg";
import "./InfoBox.css";

type InfoBoxProps = {
  type: string;
  hideInfoBox: () => void;
  clientCount: number;
};

export const InfoBox = (props: InfoBoxProps) => {
  const { type, hideInfoBox, clientCount } = props;
  
  return (
    <>
      {type === "locations" && (
        <div className="info-box-wrapper">
          <div className="info-box-content">
            <div className="close-icon">
              <Image src={CloseIcon} alt="Close Icon" onClick={hideInfoBox} />
            </div>
            <div>
              Display the location and health of vehicles in real time. Each
              vehicle is a bot individually streaming their data to the server
            </div>
            <svg
              width="400"
              height="300"
              viewBox="0,0,400,300"
              style={{ width: "100%", minHeight: "200px" }}
            >
              <g stroke="#ccc" strokeOpacity="1" strokeWidth="2">
                <line
                  className="path"
                  x1="10"
                  y1="265"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="265"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="240"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="240"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="215"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="215"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="190"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="190"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="165"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="165"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="140"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="140"></circle>
                <line
                  className="path"
                  x1="10"
                  y1="115"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="115"></circle>
                <line className="path" x1="10" y1="90" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="90"></circle>
                <line className="path" x1="10" y1="65" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="65"></circle>
                <line className="path" x1="10" y1="40" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="10" cy="40"></circle>

                <line
                  className="path"
                  x1="60"
                  y1="265"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="265"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="240"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="240"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="215"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="215"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="190"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="190"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="165"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="165"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="140"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="140"></circle>
                <line
                  className="path"
                  x1="60"
                  y1="115"
                  x2="180"
                  y2="150"
                ></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="115"></circle>
                <line className="path" x1="60" y1="90" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="90"></circle>
                <line className="path" x1="60" y1="65" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="65"></circle>
                <line className="path" x1="60" y1="40" x2="180" y2="150"></line>
                <circle r="8" fill="#1f77b4" cx="60" cy="40"></circle>
              </g>
              <g stroke="#ccc" strokeWidth="1.5">
                <line
                  className="path"
                  stroke="#ccc"
                  strokeOpacity="1"
                  strokeWidth="2"
                  x1="180"
                  y1="150"
                  x2="350"
                  y2="150"
                ></line>
                <circle r="40" fill="#009933" cx="180" cy="150"></circle>
              </g>
              <g stroke="#ccc" strokeWidth="1.5">
                <circle r="40" fill="#b30059" cx="350" cy="150"></circle>
                <text x="350" y="160" textAnchor="middle" fill="#fff">
                  {clientCount}
                </text>
              </g>
            </svg>
            <div className="info-box-legend">
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0,0,20,20"
                  style={{ marginRight: "6px" }}
                >
                  <g stroke="#ccc" strokeOpacity="1" strokeWidth="2">
                    <circle r="8" fill="#1f77b4" cx="10" cy="10"></circle>
                  </g>
                </svg>
                20 bots
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0,0,20,20"
                  style={{ marginRight: "6px" }}
                >
                  <g stroke="#ccc" strokeOpacity="1" strokeWidth="2">
                    <circle r="8" fill="#009933" cx="10" cy="10"></circle>
                  </g>
                </svg>
                Server
              </div>
              <div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0,0,20,20"
                  style={{ marginRight: "6px" }}
                >
                  <g stroke="#ccc" strokeOpacity="1" strokeWidth="2">
                    <circle r="8" fill="#b30059" cx="10" cy="10"></circle>
                  </g>
                </svg>
                Clients connected (including you)
              </div>
            </div>
            <div>
              Bots with the <Icon type="bus" fill="#ccc" /> icon will always
              toggle an issue. This is to demonstrate real time updates of
              vehicle health
            </div>
          </div>
          <div className="info-box-overlay" onClick={hideInfoBox}></div>
        </div>
      )}
      {type === "video" && (
        <div className="info-box-wrapper">
          <div className="info-box-content">
            <div className="close-icon">
              <Image src={CloseIcon} alt="Close Icon" onClick={hideInfoBox} />
            </div>
            <div>
              Video feed displayed is mock video to demonstrate video streaming.
              Actual live camera video feed behaves similarly on the technical
              side
            </div>
            <div>Videos provided by:</div>
            <div style={{ textAlign: "left" }}>
              <ul>
                <li>
                  <a href="https://pixabay.com/users/ykman-9016214/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=120266">
                    YK Choi
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=120266">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/ylva-aip-6255856/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=53606">
                    Ylva Säfvelin
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=53606">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/superanton-303885/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=10364">
                    Anton Porsche
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=10364">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/rodneyeastman5-25366926/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=137951">
                    Rodney Eastman
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=137951">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/alexkopeykin-6178059/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=101343">
                    Олександр Копєйкін
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=101343">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/tiburi-2851152/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31015">
                    Tibor Janosi Mozes
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31015">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/glorydays2012pro-3791746/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=8132">
                    Alexander Helbig
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=8132">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/mishasurfu-3593622/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=6095">
                    Misha Surfu
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=6095">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/goodjun-2320650/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=28092">
                    Jun
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=28092">
                    Pixabay
                  </a>
                </li>
                <li>
                  <a href="https://pixabay.com/users/elenlackner-6149479/?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31362">
                    Elen Lackner
                  </a>{" "}
                  from{" "}
                  <a href="https://pixabay.com//?utm_source=link-attribution&utm_medium=referral&utm_campaign=video&utm_content=31362">
                    Pixabay
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="info-box-overlay" onClick={hideInfoBox}></div>
        </div>
      )}
      {type !== "locations" && type !== "video" && null}
    </>
  );
};
