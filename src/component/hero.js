import progress from "./assets/progress.png";
import myImage3 from "./assets/icon.png";
import myImage4 from "./assets/people.png";
import fb from "./assets/fb.png";
import payoneer from "./assets/payoneer.png";
import icon10 from "./assets/icon10.png";
import main2 from "./assets/main2.png";
export default function Hero() {
  const myArray = [
    {
      title: "Uber",
      text: "App design upgrades with new features -In progress 16days",
      image: myImage3,
      image1: myImage4,
    },
    {
      title: "Facebook Ads",
      text: "Facebook Ads Design for creative clouds -Last Worked 5days",
      image: fb,
      image1: myImage4,
    },
    {
      title: "Payoneer",
      text: "Payoneer dashboard design - Due in 3 days",
      image: payoneer,
      image1: myImage4,
    },
  ];
  const myArray2 = [
    {
      title: "My Tasks",
      text: "App design upgrades  -In progress 16days",
      image: icon10,
      image1: myImage4,
    },
  ];
  const data = myArray.map((e) => (
    <div style={{ display: "flex", marginBottom: "0.5%" }}>
      <img style={{ borderRadius: "10px", height: "40px" }} src={e.image} />
      <div style={{ marginLeft: "3%", width: "100%" }}>
        <div style={{ fontWeight: 500 }}>{e.title}</div>
        <div style={{ opacity: "0.5", fontSize: "13px" }}>{e.text}</div>
      </div>
      <img
        style={{ borderRadius: "10px", marginLeft: "35%", height: "28px" }}
        src={e.image1}
      />
    </div>
  ));
  const data2 = myArray2.map((e) => (
    <div style={{ display: "flex" }}>
      <img style={{ borderRadius: "10px", height: "40px" }} src={e.image} />
      <div style={{ marginLeft: "3%", width: "50%" }}>
        <div style={{ fontWeight: 500 }}>{e.title}</div>
        <div style={{ opacity: "0.5", fontSize: "14px" }}>{e.text}</div>
      </div>
      <img
        style={{ borderRadius: "10px", marginLeft: "35%", height: "28px" }}
        src={e.image1}
      />
    </div>
  ));
  return (
    <>
      <div
        style={{
          fontFamily: `'Poppins', sans-serif`,
          paddingTop: "1.5%",
          width: "55%",
          backgroundColor: "#fff",
          paddingLeft: "3%",
          paddingRight: "3%",
          borderRight: "0.5px solid #D1D1D1",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              fontFamily: `'Poppins', sans-serif`,
              fontWeight: "600",
              fontSize: "20px",
            }}
          >
            Hi Utkarsh!
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              width: "30%",
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: "12px", fontWeight: 500, opacity: 0.6 }}>
              15% Task Completed
            </div>
            <img
              style={{ height: "8px", borderRadius: "5px", marginLeft: "5%" }}
              src={progress}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "1%",
          }}
        >
          <img style={{ borderRadius: "20px", height: "300px" }} src={main2} />
          {/* <img
            style={{ borderRadius: "10px", height: "250px" }}
            src={myImage2}
          /> */}
        </div>
        <div
          style={{
            // backgroundColor: "green",
            marginTop: "2%",
            // marginBottom: "1%",
            // paddingLeft: "3%",
            // paddingRight: "3%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: "20px" }}>Monthly Tasks</div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                borderRadius: "20px",
                background: "#e6e8e6",
                padding: "8px 8px 8px 8px",
                marginBottom: "0%",
                fontWeight: 500,
              }}
            >
              Archieve
            </div>
            <div
              style={{
                borderRadius: "020px",
                background: "#ad85de",
                color: "white",
                textAlign: "center",
                padding: "8px 18px 8px 18px",
                marginLeft: "5px",
                fontWeight: 500,
              }}
            >
              + New
            </div>
          </div>
        </div>
        <div
          style={{
            // backgroundColor: "green",
            borderBottom: "0.5px solid #D1D1D1",
            marginTop: "1%",
            marginBottom: "1%",
            // paddingLeft: "3%",
            // paddingRight: "3%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10%",
              width: "35%",
              marginBottom: "0.2%",
            }}
          >
            <div style={{ opacity: "0.5", fontWeight: 500, fontSize: "17px" }}>
              Active Tasks
            </div>
            <div style={{ opacity: "0.5", fontWeight: 500, fontSize: "17px" }}>
              Completed
            </div>
          </div>
          <div style={{ opacity: "0.5", fontWeight: 500, fontSize: "17px" }}>
            Search
          </div>
        </div>
        <div style={{ paddingBottom: "0.1%" }}>
          <div style={{ paddingBottom: "0.2%" }}>Today</div>
          {data}
        </div>
        <div style={{ paddingBottom: "1%" }}>
          <div style={{ paddingBottom: "1%" }}>Tomorrow</div>
          {data2}
        </div>
      </div>
    </>
  );
}
