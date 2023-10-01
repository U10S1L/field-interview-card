import "./App.scss"
import { useForm } from "react-hook-form";
import generateBbCode from "./generateBbCode.js";
import convertBbCodeToData from "./importBbCode.js";
import { useEffect, useRef, useState } from "react";
const bootstrap = require('bootstrap')

function App() {
  const { register, watch, handleSubmit, setValue, reset } = useForm();
  const [data, setData] = useState(JSON.parse(localStorage.getItem("fieldInterviewCard")) || {});
  const [importedBbCode, setImportedBbCode] = useState();
  const [visibleSide, setVisibleSide] = useState('FRONT');
  watch(data => setData(data));

  useEffect(() => {
    // save data to local storage whenever it changes
    localStorage.setItem("fieldInterviewCard", JSON.stringify(data));
  }, [data]);


  useEffect(() => {
    // initial load: loads local storage data and populates the form
    const localStorageFic = localStorage.getItem("fieldInterviewCard");
    if (localStorageFic) {
      const cachedFic = JSON.parse(localStorageFic);
      for (const [key, value] of Object.entries(cachedFic)) {
        setValue(key, value)
      }
    }
  }, [setValue]);

  const importBbCode = () => {
    reset();
    const data = convertBbCodeToData(importedBbCode);
    setData(data);
    for (const [key, value] of Object.entries(data)) {
      setValue(key, value)
    }
  }


  const onSubmit = data => {
    navigator.clipboard.writeText(generateBbCode(data))
  };

  return (
    <div className="container">
      <div className="row">
        <div className="buttons col-11 mt-1 d-flex">
          <button type="button" className="btn btn-danger" onClick={() => reset()}>Clear</button>
          <button className="btn btn-success mx-auto">Copy BBCode</button>
          <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#importModal">Import</button>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-11">
          <form className="g-0" onSubmit={handleSubmit(onSubmit)}>
            {visibleSide === "FRONT" && <div>
              <div className="row border-top border-black gx-0">
                <div className="col-4 border-start border-black border-black px-2">
                  <label htmlFor="name">NAME (FIRST, MIDDLE, LAST)</label>
                  <input type="text" id="name" className="form-control form-control-sm" {...register("name")}></input>
                </div>
                <div className="col-3 border-star px-2">
                  <label htmlFor="phone">PHONE</label>
                  <input type="text" id="phone" className="form-control form-control-sm" {...register("phone")}></input>
                </div>
                <div className="col border-start border-black px-2">
                  <div className="row">
                    <div className="col">
                      <label htmlFor="sex">SEX (M/F/O)</label>
                      <input id="sex" className="form-control form-control-sm" {...register("sex")}></input>
                    </div>
                  </div>
                </div>
                <div className="col border-start border-black px-2">
                  <label htmlFor="hair">HAIR</label>
                  <input type="text" id="hair" className="form-control form-control-sm" {...register("hair")}></input>
                </div>
                <div className="col border-start border-black border-end px-2">
                  <label htmlFor="eyes">EYES</label>
                  <input type="text" id="eyes" className="form-control form-control-sm" {...register("eyes")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-5 border-start border-black px-2">
                  <label htmlFor="residence">RESIDENCE</label>
                  <input type="text" id="residence" className="form-control form-control-sm" {...register("residence")}></input>
                </div>
                <div className="col border-start border-black px-2">
                  <label htmlFor="residence">BIRTHDATE</label>
                  <input type="text" id="birthdate" className="form-control form-control-sm" {...register("birthdate")}></input>
                </div>
                <div className="col border-start border-black px-2">
                  <label htmlFor="residence">DESCENT</label>
                  <input type="text" id="descent" className="form-control form-control-sm" {...register("descent")}></input>
                </div>
                <div className="col border-start border-black border-end px-2">
                  <label htmlFor="residence">HEIGHT</label>
                  <input type="text" id="height" className="form-control form-control-sm" {...register("height")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-6 border-start border-black px-2">
                  <label htmlFor="residence">CLOTHING</label>
                  <input type="text" id="clothing" className="form-control form-control-sm" {...register("clothing")}></input>
                </div>
                <div className="col-6 border-start border-black border-end px-2">
                  <label htmlFor="residence">PERSONAL ODDITIES</label>
                  <input type="text" id="oddities" className="form-control form-control-sm" {...register("oddities")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-6 border-start border-black px-2">
                  <label htmlFor="residence">MONIKER / ALIAS</label>
                  <input type="text" id="moniker" className="form-control form-control-sm" {...register("moniker")}></input>
                </div>
                <div className="col-6 border-start border-black border-end px-2">
                  <label htmlFor="residence">GANG / CLUB</label>
                  <input type="text" id="gang" className="form-control form-control-sm" {...register("gang")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-1 border-start border-black px-2">
                  <div><b>SUBJ</b></div>
                  <div><b>INFO</b></div>
                </div>
                <div className="col border-end border-black px-2">
                  <div className="row gx-0">
                    {["loiterer", "homeless", "gangActivity", "onParole", "driver"].map(subjInfoKey =>
                      <div className="col form-check form-check-inline" key={subjInfoKey}>
                        <input className="form-check-input" type="checkbox" value="" id={subjInfoKey}  {...register(subjInfoKey)}></input>
                        <label className="form-check-label" htmlFor={subjInfoKey}>{subjInfoKey.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</label>
                      </div>
                    )}
                  </div>
                  <div className="row gx-0">
                    {["prowler", "witness", "hasRecord", "onProbation", "passenger"].map(subjInfoKey =>
                      <div className="col form-check form-check-inline" key={subjInfoKey}>
                        <input className="form-check-input" type="checkbox" value="" id={subjInfoKey}  {...register(subjInfoKey)}></input>
                        <label className="form-check-label" htmlFor={subjInfoKey}>{subjInfoKey.replace(/([a-z])([A-Z])/g, '$1 $2').toUpperCase()}</label>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col border-start border-black px-2">
                  <label htmlFor="veh_make">VEH. MAKE</label>
                  <input type="text" id="veh_make" className="form-control form-control-sm" {...register("veh_make")}></input>
                </div>

                <div className="col border-start border-black px-2">
                  <label htmlFor="veh_model">VEH. MODEL</label>
                  <input type="text" id="veh_model" className="form-control form-control-sm" {...register("veh_model")}></input>
                </div>
                <div className="col border-start border-black px-2">
                  <label htmlFor="veh_type">TYPE</label>
                  <input type="text" id="veh_type" className="form-control form-control-sm" {...register("veh_type")}></input>
                </div>
                <div className="col border-start border-black px-2">
                  <label htmlFor="veh_color">COLOR</label>
                  <input type="text" id="veh_color" className="form-control form-control-sm" {...register("veh_color")}></input>
                </div>
                <div className="col border-start border-black border-end px-2">
                  <label htmlFor="veh_licNo">VEH. LIC. NO.</label>
                  <input type="text" id="veh_licNo" className="form-control form-control-sm" {...register("veh_licNo")}></input>
                </div>
              </div>

              <div className="row border-top border-black gx-0">
                <div className="col-1 border-start border-black px-2">
                  <div><b>VEH</b></div>
                  <div><b>INFO</b></div>
                </div>
                <div className="col border-end border-black px-2">
                  <div className="row gx-0">
                    {[{ id: "veh_bucketSeat", label: "BUCKET SEAT" }, { id: "veh_customWheels", label: "CUSTOM WHEELS" }, { id: "veh_levelAlter", label: "LEVEL ALTER" }, { id: "veh_customPaint", label: "CUSTOM PAINT" }]
                      .map(vehInfo =>
                        <div className="col form-check form-check-inline" key={vehInfo.id}>
                          <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                          <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                        </div>
                      )}
                  </div>
                  <div className="row gx-0">
                    {[{ id: "veh_damagedInside", label: "DAMAGED INSIDE" }, { id: "veh_paintedMural", label: "PAINTED MURAL" }, { id: "veh_rustPrimer", label: "RUST PRIMTER" }, { id: "veh_vinylTop", label: "VINYL TOP" }]
                      .map(vehInfo =>
                        <div className="col form-check form-check-inline" key={vehInfo.id}>
                          <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                          <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                        </div>
                      )}
                  </div>
                </div>
              </div>
              <div className="row border-top border-black border-bottom border-black gx-0">
                <div className="col-1 border-start border-black px-2">
                  <div><b>BODY</b></div>
                </div>
                <div className="col px-2">
                  <div className="row gx-0">
                    {[{ id: "veh_body_damage", label: "DAMAGE" }, { id: "veh_body_sticker", label: "STICKER" }, { id: "veh_body_left", label: "LEFT" }, { id: "veh_body_front", label: "FRONT" }]
                      .map(vehInfo =>
                        <div className="col form-check form-check-inline" key={vehInfo.id}>
                          <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                          <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                        </div>
                      )}
                  </div>
                  <div className="row gx-0">
                    {[{ id: "veh_body_modified", label: "MODIFIED" }, { id: "" }, { id: "veh_body_right", label: "RIGHT" }, { id: "veh_body_rear", label: "REAR" }]
                      .map(vehInfo => vehInfo.id ?
                        <div className="col form-check form-check-inline" key={vehInfo.id}>
                          <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                          <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                        </div>
                        : <div className="col form-check form-check-inline"></div>
                      )}
                  </div>
                </div>
                <div className="col border-end border-black px-2">
                  <div className="row gx-0">
                    <div className="col-2 px-2">
                      <div><b>WIN-</b></div>
                      <div><b>DOWS</b></div>
                    </div>
                    <div className="col px-2">
                      <div className="row gx-0">
                        {[{ id: "veh_windows_damage", label: "DAMAGE" }, { id: "veh_windows_left", label: "LEFT" }, { id: "veh_windows_front", label: "FRONT" }]
                          .map(vehInfo =>
                            <div className="col form-check form-check-inline" key={vehInfo.id}>
                              <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                              <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                            </div>
                          )}
                      </div>
                      <div className="row gx-0">
                        {[{ id: "veh_windows_tint", label: "TINT" }, { id: "veh_windows_right", label: "RIGHT" }, { id: "veh_windows_rear", label: "REAR" }]
                          .map(vehInfo =>
                            <div className="col form-check form-check-inline" key={vehInfo.id}>
                              <input className="form-check-input" type="checkbox" value="" id={vehInfo.id}  {...register(vehInfo.id)}></input>
                              <label className="form-check-label" htmlFor={vehInfo.id}>{vehInfo.label}</label>
                            </div>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>}

            {visibleSide === "BACK" && <div >
              <div className="row border-top border-start border-end border-black gx-0 px-2">
                <b>PERSONS WITH SUBJECT</b>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-4 px-2 border-start border-black">
                  <label htmlFor="withSubject1_name">NAME (FIRST, MIDDLE, LAST)</label>
                  <input type="text" id="withSubject1_name" className="form-control form-control-sm" {...register("withSubject1_name")}></input>
                </div>
                <div className="col-2 px-2 border-start border-black">
                  <label htmlFor="withSubject1_dob">D.O.B</label>
                  <input type="text" id="withSubject1_dob" className="form-control form-control-sm" {...register("withSubject1_dob")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black">
                  <label htmlFor="withSubject1_sex">SEX (M/F/O)</label>
                  <input type="text" id="withSubject1_sex" className="form-control form-control-sm" {...register("withSubject1_sex")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black border-end">
                  <label htmlFor="withSubject1_gang">GANG / MONIKER</label>
                  <input type="text" id="withSubject1_gang" className="form-control form-control-sm" {...register("withSubject1_gang")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-4 px-2 border-start border-black">
                  <label htmlFor="withSubject2_name">NAME (FIRST, MIDDLE, LAST)</label>
                  <input type="text" id="withSubject2_name" className="form-control form-control-sm" {...register("withSubject2_name")}></input>
                </div>
                <div className="col-2 px-2 border-start border-black">
                  <label htmlFor="withSubject2_dob">D.O.B</label>
                  <input type="text" id="withSubject2_dob" className="form-control form-control-sm" {...register("withSubject2_dob")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black">
                  <label htmlFor="withSubject2_sex">SEX (M/F/O)</label>
                  <input type="text" id="withSubject2_sex" className="form-control form-control-sm" {...register("withSubject2_sex")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black border-end">
                  <label htmlFor="withSubject2_gang">GANG / MONIKER</label>
                  <input type="text" id="withSubject2_gang" className="form-control form-control-sm" {...register("withSubject2_gang")}></input>
                </div>
              </div>
              <div className="row px-2 border-top border-black border-start border-black border-end gx-0">
                <label htmlFor="additionalInfo">ADDITIONAL INFO / NARRATIVE / INFORMATION</label>
                <textarea id="additionalInfo" className="form-control form-control-sm" rows="3" {...register("additionalInfo")}></textarea>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-3 px-2 border-start border-black">
                  <label htmlFor="date">DATE</label>
                  <input type="text" id="date" className="form-control form-control-sm" {...register("date")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black">
                  <label htmlFor="time">TIME</label>
                  <input type="text" id="time" className="form-control form-control-sm" {...register("time")}></input>
                </div>
                <div className="col-6 px-2 border-start border-black border-end">
                  <label htmlFor="location">LOCATION</label>
                  <input type="text" id="location" className="form-control form-control-sm" {...register("location")}></input>
                </div>
              </div>
              <div className="row border-top border-black gx-0">
                <div className="col-4 px-2 border-start border-black">
                  <label htmlFor="officerA_name">OFFICER</label>
                  <input type="text" id="officerA_name" className="form-control form-control-sm" {...register("officerA_name")}></input>
                </div>
                <div className="col-2 px-2">
                  <label htmlFor="officerA_serial">SERIAL NO.</label>
                  <input type="text" id="officerA_serial" className="form-control form-control-sm" {...register("officerA_serial")}></input>
                </div>
                <div className="col-4 px-2 border-start border-black">
                  <label htmlFor="officerA_name">OFFICER</label>
                  <input type="text" id="officerB_name" className="form-control form-control-sm" {...register("officerB_name")}></input>
                </div>
                <div className="col-2 px-2 border-end border-black">
                  <label htmlFor="officerA_serial">SERIAL NO.</label>
                  <input type="text" id="officerB_serial" className="form-control form-control-sm" {...register("officerB_serial")}></input>
                </div>
              </div>
              <div className="row border-top border-bottom border-black border-end gx-0">
                <div className="col px-2 border-start border-black">
                  <label htmlFor="callsign">CALLSIGN</label>
                  <input type="text" id="callsign" className="form-control form-control-sm" {...register("callsign")}></input>
                </div>
                <div className="col-3 px-2 border-start border-black">
                  <label htmlFor="incidentNo">INCIDENT NO.</label>
                  <input type="text" id="incidentNo" className="form-control form-control-sm" {...register("incidentNo")}></input>
                </div>
                <div className="col px-2 border-start border-black">
                  <label htmlFor="division">DIVISION</label>
                  <input type="text" id="division" className="form-control form-control-sm" {...register("division")}></input>
                </div>
                <div className="col px-2 border-start border-black">
                  <label htmlFor="detail">DETAIL</label>
                  <input type="text" id="detail" className="form-control form-control-sm" {...register("detail")}></input>
                </div>
                <div className="col px-2 border-start border-black">
                  <label htmlFor="supvInit">SUPV. INIT.</label>
                  <input type="text" id="supvInit" className="form-control form-control-sm" {...register("supvInit")}></input>
                </div>
              </div>
            </div>}
          </form >
        </div>
        <div className="col-1">
          <button className="btn btn-dark flip-button" onClick={() => setVisibleSide(prev => prev === "FRONT" ? "BACK" : "FRONT")}>
            <div>{visibleSide}</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-repeat ml-auto" viewBox="0 0 16 16">
              <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
              <path fillRule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" />
            </svg>
          </button>
        </div>
      </div>


      <div className="modal fade" data-bs-backdrop="static" id="importModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title">Import BBCode</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <textarea className="form-control" placeholder="Paste" onChange={(e) => setImportedBbCode(e.target.value)} rows={20}></textarea>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={() => importBbCode()}>Import</button>
            </div>
          </div>
        </div>
      </div>

    </div >
  );
}

export default App;
