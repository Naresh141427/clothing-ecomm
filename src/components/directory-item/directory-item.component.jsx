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
<<<<<<< HEAD
    <DirectoryItemContainer onClick={onHandleNavigtion}>
=======
    <DirectoryItemContainer>
>>>>>>> 1b99bda55dffdb3464e91fa01ca7a1c1692033e2
      <BackgroundIMage imgeurl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
