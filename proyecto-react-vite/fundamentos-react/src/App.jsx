import imgUno from "./assets/images/img-1.jpg";
import MyButton from "./components/MyButton";
import WelcomeText from "./components/WelcomeText";
import ListFruits from "./components/fruits/ListFruit";
import ButtonState from "./components/ButtonState";

const App = () => {
  const title = "Mi titulo desde una constante";
  const classTitle = "text-center";
  //   const pathImg = "src/assets/images/img-1.jpg";
  const user = true;

  const fruits = ["🍐", "🍌", "🍎"];
  const fruitsTwo = ["🍐", "🍌", "🍎"];

  return (
    <>
      <ButtonState />
      <h1 className={classTitle}>{title.toUpperCase()}</h1>
      <img src={imgUno} alt={`imagen-${title}`} />
      <MyButton text="boton1" />
      <MyButton text="boton2" />
      <MyButton text="boton3" />

      <WelcomeText user={user} />

      <ListFruits fruits={fruits} />
      <ListFruits fruits={fruitsTwo} />
    </>
  );
};

export default App;
