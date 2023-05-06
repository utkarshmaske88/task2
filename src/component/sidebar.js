import myImage from "./assets/img1.png";
import myImage2 from "./assets/img2.png";
import myImage3 from "./assets/dalle.png";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import icon3 from "./assets/icon3.png";
import icon8 from "./assets/icon5.jpg";
import icon5 from "./assets/icon7.jpg";
import icon6 from "./assets/icon8.jpg";
import icon7 from "./assets/icon9.jpg";
export default function Sdataebar() {
  const myArray = [
    { text: "My Tasks", image: icon7 },
    { text: "Inbox", image: icon6 },
    { text: "Projects", image: icon7 },
    { text: "Standups", image: icon5 },
    { text: "Meetings", image: icon6 },
    { text: "Settings", image: icon7 },
  ];
  const favorites = [
    { text: "Redwhale Design", image: myImage2 },
    { text: "Mobile App Mock", image: myImage2 },
    { text: "UI design revision", image: myImage2 },
  ];

  const array2 = myArray.map((e) => (
    <div
      style={{
        color: "#BABABA",
        display: "flex",
        width: "250px",
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: "500",
        gap: "5%",
        marginTop: "4%",
        alignItems: "center",
      }}
    >
      <img style={{ width: "30px" }} src={e.image} />
      <div>{e.text}</div>
    </div>
  ));

  const favorites2 = favorites.map((e) => (
    <div
      style={{
        color: "#BABABA",
        display: "flex",
        width: "250px",
        fontFamily: `'Poppins', sans-serif`,
        fontWeight: "500",
        gap: "5%",
        marginTop: "4%",
        alignItems: "center",
      }}
    >
      <img src={e.image} />
      <div>{e.text}</div>
    </div>
  ));

  return (
    <div>
      <div
        style={{
          borderRight: "0.4px solid #D1D1D1",
          // width: "15%",
          height: "100%",
          backgroundColor: "#F9F9FB",
          paddingLeft: "10%",
        }}
      >
        <div
          style={{
            fontFamily: `'Poppins', sans-serif`,
            display: "flex",
            alignItems: "center",
            fontWeight: "300",
            paddingBottom: "10%",
            paddingTop: "5%",
          }}
        >
          <img
            style={{ height: "55px", borderRadius: "80px", marginRight: "5%" }}
            src={myImage3}
          />
          <div>
            <div
              style={{ fontSize: "18px", fontWeight: 500, color: "#00054f" }}
            >
              Utkarsh Maske
            </div>
            <div style={{ fontSize: "12px", fontWeight: 500 }}>
              Sr. Visual Designer
            </div>
          </div>
        </div>
        <div style={{ fontWeight: 500, opacity: "0.8", fontSize: "18px" }}>
          Menu
        </div>
        <div style={{}}> {array2}</div>
        <div style={{ paddingTop: "40%" }}>
          <div style={{ fontWeight: 500, opacity: "0.8", fontSize: "18px" }}>
            Favorites
          </div>
          <div>{favorites2}</div>
        </div>
        <div
          style={{
            fontFamily: `'Poppins', sans-serif`,
            display: "flex",
            alignItems: "flex-start",
            paddingTop: "20%",
            flexDirection: "column",
          }}
        >
          <img
            style={{
              height: "50px",
              paddingBottom: "2%",
              borderRadius: "50px",
            }}
            src={icon8}
          />
          <div
            style={{
              fontSize: "14px",
              paddingLeft: "7px",
              fontWeight: 500,
              opacity: 0.6,
            }}
          >
            2021 AR Shakir Licence
          </div>
        </div>
      </div>
    </div>
  );
}
