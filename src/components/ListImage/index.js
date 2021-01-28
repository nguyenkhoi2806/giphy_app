import Image from "../Image";
import { isTablet, isMobileOnly, isBrowser } from "react-device-detect";

const ItemImage = ({ item }) => {
  if (!item) return null;
  return (
    <div className="col-xl-3 col-md-4 col-6">
      <div className="card card-custom m-0">
        <div className="card-body">
          <Image
            src={item.images.downsized.url}
            className="card-img-top"
            alt={item.id}
            preview={item.images.original.url}
          />
        </div>
        <div className="user">
          {item.user && (
            <>
              <img
                src={item.user.avatar_url}
                width="10px"
                alt={item.user.display_name}
              />
              <span className="user-name">{item.user.display_name}</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
const ListImage = (props) => {
  const imageLists = props.imageLists;
  if (!imageLists) return null;

  let newImageList = [];
  /*  Add items to show in one row follow by device detect */
  imageLists.forEach((item, index) => {
    if (index % 4 === 0 && isBrowser) {
      newImageList.push([
        imageLists[index],
        imageLists[index + 1] && imageLists[index + 1],
        imageLists[index + 2] && imageLists[index + 2],
        imageLists[index + 3] && imageLists[index + 3],
      ]);
    } else if (index % 3 === 0 && isTablet) {
      newImageList.push([
        imageLists[index],
        imageLists[index + 1] && imageLists[index + 1],
        imageLists[index + 2] && imageLists[index + 2],
      ]);
    } else if (index % 2 === 0 && isMobileOnly) {
      newImageList.push([
        imageLists[index],
        imageLists[index + 1] && imageLists[index + 1]]);
    }
  });

  return newImageList.map((items, index) => (
    <div className="row card-deck mb-3" key={index}>
      {items.map((item, keyItem) => (
        <ItemImage key={keyItem} item={item} />
      ))}
    </div>
  ));
};

export default ListImage;
