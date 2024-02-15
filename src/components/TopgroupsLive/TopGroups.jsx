import "./TopGroups.css";
import { topgroups_cards } from "../../data/topgroups_data";

export const TopGroups = () => {
  return (
    <div className="live-topgroups">
      {topgroups_cards.map((topgroups) => (
        <div key={topgroups.id} className="main-topgroups">
          <div className="topgroups_image">
            <img src={topgroups.src} alt="" />
            <h2 className="grouptype">{topgroups.title}</h2>
          </div>
          </div>
      ))}
    </div>
  );
};