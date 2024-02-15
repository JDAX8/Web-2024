import "./LiveCategory.css";
import { category_cards } from "../../data/categorys_data";

export const LiveCategory = () => {
  return (
    <div className="live-category">
      {category_cards.map((category) => (
        <div key={category.id} className="category-main-container">
          <div className="category_image">
            <img src={category.src} alt="" />
          </div>
          <div className="info_category">
            <div className="category_name">
              <h2 className="category_Name">{category.title}</h2>
            </div>
            <div className="category_viewers">
            <div className="category_viewers_count">{category.views} espectadores</div>
            <div className="category_etiqueta"><p>{category.etiquetas}</p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};