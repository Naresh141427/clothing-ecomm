import {
  BackgroundIMage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles.jsx";

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;

  return (
    <DirectoryItemContainer>
      <BackgroundIMage imgeUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default CategoryItem;
