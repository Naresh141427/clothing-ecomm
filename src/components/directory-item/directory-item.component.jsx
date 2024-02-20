import { useNavigate } from "react-router-dom";

import {
  BackgroundIMage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  const navigate = useNavigate();

  const onHandleNavigtion = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <DirectoryItemContainer onClick={onHandleNavigtion}>
      <BackgroundIMage imgeurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
