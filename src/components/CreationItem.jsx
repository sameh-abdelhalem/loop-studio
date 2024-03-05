const CreationItem = (props) => {
  return (
    <div className="group item">
      <img
        src={props.desktopImage}
        alt=""
        className="hidden w-full duration-200 md:block group-hover:scale-110"
      />
      <img src={props.mobileImage} alt="" className=" w-full md:hidden " />
      {/* Item Gradient */}
      <div className="item-gradient"></div>
      {/* Item Text */}
      <h5>{props.title}</h5>
    </div>
  );
};

export default CreationItem;
