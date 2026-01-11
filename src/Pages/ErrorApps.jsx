import errorImage from "../assets/App-Error.png";
import { Link } from "react-router";
const ErrorPage = () => {
  return (
    <>
      <div
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "40px",
        }}
      >
        <img
          src={errorImage}
          alt="404 Error"
          style={{
            maxWidth: "260px",
            width: "100%",
            height: "auto",
            marginBottom: "24px",
          }}
        />

        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            color: "#000",
            marginBottom: "10px",
          }}
        >
          OPPS!! APP NOT FOUND
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#6b7280",
            maxWidth: "420px",
            lineHeight: "1.6",
          }}
        >
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <Link to="/">
          <button
            className="
                  flex items-center justify-center gap-2 mt-3
                  bg-gradient-to-r from-[#632EE3] to-[#9F62F2]
                  text-white px-8 py-2 rounded-sm w-full
                "
          >
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
