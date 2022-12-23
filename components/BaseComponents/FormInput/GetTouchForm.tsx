import { useState, useRef } from "react";
import axios from "axios";

const env = process.env.NEXT_PUBLIC_TOKEN;

function GetTouchForm() {
  let token = "5702266536:AAFT_kPTv4ZWIJJN1-H5sGH7UmVDLI5bwKc";
  let chatId = "-1001544371098";
  const inputFromRef = useRef<HTMLInputElement>(null!);
  const inputToRef = useRef<HTMLInputElement>(null!);
  const inputDateRef = useRef<HTMLInputElement>(null!);
  const [loc, setLoc] = useState(false);
  const [loc3, setLoc3] = useState(false);
  const [loc2, setLoc2] = useState(false);
  const [btnLoc1, setBtnLoc1] = useState(false);
  const [btnLoc2, setBtnLoc2] = useState(false);
  const [btnLoc3, setBtnLoc3] = useState(false);
  const [locErrorName, setErrorName] = useState("There should be no head left");
  // -----> Submit Informations
  const onSubmitFom = (evt: any) => {
    evt.preventDefault();
    // let fullText = `\u{2705} Full Name: ${values.name}%0A\u{2705} Email: ${values.email} %0A\u{2705} Phone Number: ${values.number} %0A\u{2705} Comments:${values.comment}`;

    const obj = {
      name: evt.target.elements[0].value,
      email: evt.target.elements[1].value,
      phone: evt.target.elements[2].value,
      comment: evt.target.elements[3].value,
    };
    axios
      .post(`${env}contacts`, obj)
      .then((res) => {})
      .catch((err) => console.log(err));
  };

  const handleBlur = (e: any) => {
    if (e.target.value) {
      setLoc(false);
    } else {
      setLoc(true);
      setBtnLoc1(false);
    }
  };

  const handleBlur2 = (e: any) => {
    if (e.target.value) {
      setLoc2(false);
    } else {
      setLoc2(true);
      setBtnLoc2(false);
    }
  };

  const handleBlur3 = (e: any) => {
    if (e.target.value) {
      setLoc3(false);
    } else {
      setLoc3(true);
      setBtnLoc3(false);
    }
  };
  const handleCheckType = () => {
    if (inputFromRef.current.value === "" && inputToRef.current.value === "") {
      setLoc(true);
      setLoc2(true);
      setLoc3(false);
    }
    if (
      inputFromRef.current.value === "" &&
      inputDateRef.current.value === ""
    ) {
      setLoc(true);
      setLoc2(false);
      setLoc3(true);
    }
    if (inputToRef.current.value === "" && inputDateRef.current.value === "") {
      setLoc(false);
      setLoc2(true);
      setLoc3(true);
    }
    if (
      inputFromRef.current.value === "" &&
      inputToRef.current.value === "" &&
      inputDateRef.current.value === ""
    ) {
      setLoc(true);
      setLoc2(true);
      setLoc3(true);
    }
  };
  return (
    <div className="md:max-w-500 w-full bg-heroFormMoblie md:bg-blurForm backdrop-blur-lg rounded-10 px-16 md:px-30 py-6">
      <h1 className="font-bold text-28 sm:text-3xl leading-9 text-white">
        Contact us
      </h1>
      <hr className="mt-5 mb-6 text-gray-line" />
      <form onSubmit={onSubmitFom} className="flex flex-col" autoComplete="off">
        <label className="mt-2 relative flex flex-col">
          <span className="text-white text-sm font-normal">Full name</span>
          <input
            type="text"
            id="name"
            ref={inputFromRef}
            onChange={(e) => {
              if (e.target.value === "") {
                setLoc(true);
                setBtnLoc1(false);
              } else {
                setLoc(false);
                setBtnLoc1(true);
              }
            }}
            onBlur={handleBlur}
            placeholder="Write your full name"
            className={`h-45 mt-2 text-sm  ${
              loc ? "border-red-500" : ""
            } md:text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-6`}
          />
          {loc ? (
            <label className="absolute bottom-2 text-red-500 text-[11px]">
              {locErrorName}
            </label>
          ) : (
            ""
          )}
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3">
          <label className="relative flex flex-col">
            <span className="text-white text-sm font-normal">
              Email address
            </span>
            <input
              type="email"
              id="email"
              ref={inputToRef}
              onChange={(e) => {
                if (e.target.value === "") {
                  setLoc2(true);
                  setBtnLoc2(false);
                } else {
                  setLoc2(false);
                  setBtnLoc2(true);
                }
              }}
              onBlur={handleBlur2}
              placeholder="Write your email address"
              className={`h-45 mt-2 ${
                loc2 ? "border-red-500" : ""
              } text-sm md:text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-6`}
            />
            {loc2 ? (
              <label className="absolute bottom-2 text-red-500 text-[11px]">
                {locErrorName}
              </label>
            ) : (
              ""
            )}
          </label>
          <label className="relative flex flex-col">
            <span className="text-white text-sm font-normal">Phone number</span>
            <input
              type="number"
              ref={inputDateRef}
              onChange={(e) => {
                if (e.target.value === "") {
                  setLoc3(true);
                  setBtnLoc3(false);
                } else {
                  setLoc3(false);
                  setBtnLoc3(true);
                }
              }}
              onBlur={handleBlur3}
              id="number"
              placeholder="Your phone number"
              className={`h-45 ${
                loc3 ? "border-red-500" : ""
              } mt-2 text-sm md:text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-6`}
            />
            {loc3 ? (
              <label className="absolute bottom-2 text-red-500 text-[11px]">
                {locErrorName}
              </label>
            ) : (
              ""
            )}
          </label>
        </div>
        <label className="relative flex flex-col">
          <span className="text-white text-sm font-normal">
            Brief information
          </span>
          <textarea
            id="comment"
            placeholder="Comment"
            className={`h-100 mt-2 text-sm md:text-base rounded-md p-2 sm:p-3 outline-none border-2 mb-3 sm:mb-6`}
          />
        </label>
        <hr className="w-full text-[#989898] mb-5 mt-2" />
        <button
          onClick={handleCheckType}
          className="bg-orange-main h-[56px] hover:bg-orange-500 transition-all ease-in-out rounded-lg text-base text-white "
          type={`${btnLoc1 && btnLoc2 && btnLoc3 ? "submit" : "button"}`}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default GetTouchForm;
