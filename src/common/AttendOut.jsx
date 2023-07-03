import React from "react";

export const AttendOut = (props) => {
  const today = "07/03(Mon)";

  return (
    <div>
      {today === props.id && props.staff === props.AttendPeople && <p>△</p>}
      {today === props.id && props.staff === props.OutPeople && <p>-</p>}
    </div>
  );
};
