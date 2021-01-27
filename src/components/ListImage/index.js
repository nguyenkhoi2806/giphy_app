import Image from "../Image";
import { isTablet, isMobileOnly } from "react-device-detect";

const ItemImage = ({ item }) => (
  <div className="col-xl-3 col-md-4 col-6 p-1 ">
    <div className="card card-custom">
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
const ListImage = (props) => {
  const imageLists = props.imageLists;
  if (!imageLists) return null;

  let newImageList = [];
  imageLists.forEach((item, index) => {
    if (index % 4 === 0 ) {
      newImageList.push([
        imageLists[index],
        imageLists[index + 1],
        imageLists[index + 2],
        imageLists[index + 3],
      ]);
    } else if (index % 3 === 0 && isTablet && imageLists[index + 2]) {
        console.log('ok')
      newImageList.push([
        imageLists[index],
        imageLists[index + 1],
        imageLists[index + 2],
      ]);
    } else if(index % 2 === 0 && isMobileOnly) {
        newImageList.push([
          imageLists[index],
          imageLists[index + 1],
        ]);
    }
  });

  console.log(newImageList)
  return newImageList.map((item, index) => {
    if (isTablet)
      return (
        <div className="row card-deck" key={index}>
          <ItemImage key={index} item={item[0]} />
          <ItemImage key={index} item={item[1]} />
          <ItemImage key={index} item={item[2]} />
        </div>
      );
    if(isMobileOnly)
        return (
        <div className="row card-deck" key={index}>
            <ItemImage key={index} item={item[0]} />
            <ItemImage key={index} item={item[1]} />
        </div>
        );

    return (
        <div className="row card-deck" key={index}>
          <ItemImage key={index} item={item[0]} />
          <ItemImage key={index} item={item[1]} />
          <ItemImage key={index} item={item[2]} />
          <ItemImage key={index} item={item[3]} />
        </div>
    );
  });
};

export default ListImage;
