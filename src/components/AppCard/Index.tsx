import { Link } from "react-router-dom";
import { AppImage } from "../AppImage/Index";
import { SvgIcon } from "../SvgIcon/Index";
import "./scss/index.scss";

export const AppCard = ({ item }) => {
  return (
    <Link to={`/character/${item?.id}`} className="d-block">
      <div className="appCard">
        <div className="appCard-header">
          <div className="appCard-image">
            <AppImage src={item?.image} alt="rick-image" />
          </div>

          <span
            className={`appCard-badge px-3 py-1 fs-sm text-white ${item?.status}`}
          >
            {item?.status}
          </span>
        </div>

        <div className="appCard-body px-3 py-4 text-center">
          <h3 className="appCard-title fs-md text-primary mb-2">
            {item?.name}
          </h3>

          <div className="appCard-location d-inline-flex align-items-center justify-content-center">
            <SvgIcon name="location" className="text-primary" />
          </div>

          <p className="mb-0 fs-sm pt-2">{item?.location?.name}</p>
        </div>
      </div>
    </Link>
  );
};
