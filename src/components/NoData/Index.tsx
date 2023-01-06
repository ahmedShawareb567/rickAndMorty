import { SvgIcon } from "../SvgIcon/Index";
import "./scss/index.scss";

export const NoData = ({ title = "No Data", icon = "folder" }) => {
  return (
    <div className="noData d-inline-flex align-items-center justify-content-center text-danger">
      <div className="text-center noData-content">
        <SvgIcon name={icon} />
        <p className="mb-0 fs-sm fw-medium">{title}</p>
      </div>
    </div>
  );
};
