import React, { FC } from "react";
import "../styles/badge-holder.scss";

interface BadgeHolderProps {
  icon: string;
  text: string;
}

const BadgeHolder: FC<BadgeHolderProps> = ({ icon, text }) => {
  return (
    <div className="task-product-badge">
      <div className="task-product-icon">
        <img src={icon} alt="icon" />
      </div>
      <div className="task-product-text">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BadgeHolder;
