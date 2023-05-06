import myImage from "./assets/abc.png";
import myImage2 from "./assets/Screensho.png";
import myImage3 from "./assets/last.png";
import green from "./assets/green.png";
import icon6 from "./assets/people.png";
import icon7 from "./assets/invite.jpg";
import dot from "./assets/dot.png";

export default function Leftbar() {
  return (
    <div
      style={{
        paddingLeft: "2%",
        paddingRight: "2%",
        paddingTop: "1.5%",
        width: "18%",
        display: "flex",
        flexDirection: "column",
        fontFamily: `'Poppins', sans-serif`,
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: "20px",
          paddingBottom: "2%",
        }}
      >
        <div>Today's Schedule</div>
        <img style={{ height: "25px" }} src={myImage} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            paddingBottom: "2%",
          }}
        >
          <div style={{ color: "red", fontSize: "12px" }}>
            30 minute call with client
          </div>
          <div style={{ fontWeight: 500 }}>Project discovery call</div>
        </div>
        <div>
          <img style={{ height: "30px", borderRadius: "15px" }} src={icon7} />
        </div>
      </div>
      <div>
        <img style={{ width: "275px", marginTop: "5%" }} src={green} />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10%",
          paddingTop: "10%",
          borderTop: "1px solid #DCDCDC",
        }}
      >
        <div>
          <div style={{ fontWeight: 500 }}>Design Project</div>
          <div style={{ opacity: "0.7", fontSize: "12px" }}>In Progress</div>
        </div>
        <div>
          <img style={{ width: "20px" }} src={dot} />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        <div>
          <div style={{ fontSize: "13px", fontWeight: 500, opacity: 0.7 }}>
            Completed
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600 }}>114</div>
        </div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 500, opacity: 0.7 }}>
            In Progress
          </div>
          <div style={{ fontSize: "30px", fontWeight: 600 }}>114</div>
        </div>
        <div>
          <div style={{ fontSize: "13px", fontWeight: 500, opacity: 0.7 }}>
            Team Members
          </div>
          <img style={{ paddingTop: "8px" }} src={icon6} />
        </div>
      </div>
      <div
        style={{
          marginTop: "20%",
          borderTop: "1px solid #DCDCDC",
        }}
      >
        <div
          style={{
            fontWeight: 600,
            fontSize: "23px",
            marginBottom: "3%",
            marginTop: "3%",
            fontFamily: `'Poppins', sans-serif`,
          }}
        >
          New Task
        </div>
        <div
          style={{
            fontSize: "15px",
            opacity: 0.6,
            marginBottom: "3%",
          }}
        >
          Task Title
        </div>
        <input
          type="text"
          style={{
            width: "97%",
            height: "17%",
            border: "none",
            padding: 0,
            outline: "none",
            padding: "1px 1px 1px 10px",
            fontSize: "16px",
            color: "black",
            fontWeight: 600,
            borderRadius: "10px",
            background: "#F5F5F5",
            marginBottom: "2%",
          }}
          placeholder="Type Here..."
        />
        <img style={{ width: "99%", marginLeft: "5px" }} src={myImage2} />
        <div
          style={{
            marginTop: "5%",
            fontFamily: `'poppins', sans-serif`,
            fontWeight: 400,
            paddingLeft: "5px",
          }}
        >
          Add Collabration
        </div>
        <img
          style={{ width: "100%", borderRadius: "5px", marginTop: "5%" }}
          src={myImage3}
        />
      </div>
    </div>
  );
}
