import classes from "./Header.module.css";
import MainImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Delicacy</h1>
        <HeaderCartButton />
      </header>
      <div>
        <img
          className={classes["main-image"]}
          src={MainImage}
          alt="Food Images"
        />
      </div>
    </>
  );
};

export default Header;
