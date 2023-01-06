import { useState } from "react";
import { useUpdateEffect } from "react-use";
import { DropDown } from "../DropDown/Index";
import { SvgIcon } from "../SvgIcon/Index";

import "./scss/index.scss";

interface FilterInterface {
  onChange?: (val) => void;
}

export const Filter = ({ onChange }: FilterInterface) => {
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState();
  const [gender, setGender] = useState();
  const [species, setSpecies] = useState();
  const [statusOptions, setStatusOptions] = useState([
    "Alive",
    "Dead",
    "unknown",
  ]);

  const [speciesOptions, setSpeciesOptions] = useState([
    "Human",
    "Alien",
    "Humanoid",
    "Poopybutthole",
    "Mythological",
    "Unknown",
    "Animal",
    "Disease",
    "Robot",
    "Cronenberg",
    "Planet",
  ]);

  const [genderOptions, setGenderOptions] = useState([
    "female",
    "male",
    "genderless",
    "unknown",
  ]);

  const ChangeStateAction = (e) => {
    setStatus(e?.target?.value);
  };

  const ChangeGenderAction = (e) => {
    setGender(e?.target?.value);
  };

  const ChangeSpeciesAction = (e) => {
    setSpecies(e?.target?.value);
  };

  const handleToggleAction = () => {
    setToggle((state: boolean) => !state);
  };

  useUpdateEffect(() => {
    onChange?.({
      ...(status != undefined && { status }),
      ...(species != undefined && { species }),
      ...(gender != undefined && { gender }),
    });
  }, [status, species, gender]);

  return (
    <>
      <button
        className="filter-controls d-block d-md-none"
        onClick={handleToggleAction}
      >
        <SvgIcon name="filter" />
      </button>
      <div className={`filter ${toggle ? "active" : ""}`}>
        <div className="filter-bg" onClick={handleToggleAction}></div>
        <div className="filter-content">
          <h3 className="fs-lg fw-medium px-3 py-3">filter by</h3>
          <DropDown>
            <div>
              {statusOptions.map((status, index) => (
                <p className="mb-0 py-2 px-3 d-block w-100" key={index}>
                  <label htmlFor={status} className="fs-xs d-block">
                    <input
                      type="radio"
                      name="status"
                      id={status}
                      value={status}
                      className="form-check-input me-sm"
                      onChange={ChangeStateAction}
                    />
                    <span> {status}</span>
                  </label>
                </p>
              ))}
            </div>
          </DropDown>

          <DropDown title="Species">
            <div>
              {speciesOptions.map((specie, index) => (
                <p className="mb-0 py-2 px-3 d-block w-100" key={index}>
                  <label htmlFor={`sp-${specie}`} className="fs-xs d-block">
                    <input
                      type="radio"
                      name="species"
                      id={`sp-${specie}`}
                      value={specie}
                      className="form-check-input me-sm"
                      onChange={ChangeSpeciesAction}
                    />
                    <span>{specie}</span>
                  </label>
                </p>
              ))}
            </div>
          </DropDown>

          <DropDown title="Gender">
            <div>
              {genderOptions.map((gender, index) => (
                <p className="mb-0 py-2 px-3 d-block w-100" key={index}>
                  <label htmlFor={`g-${gender}`} className="fs-xs d-block">
                    <input
                      type="radio"
                      name="gender"
                      id={`g-${gender}`}
                      value={gender}
                      className="form-check-input me-sm"
                      onChange={ChangeGenderAction}
                    />
                    <span>{gender}</span>
                  </label>
                </p>
              ))}
            </div>
          </DropDown>
        </div>
      </div>
    </>
  );
};
