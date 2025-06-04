const MyButton = ({ text }) => {
  const handleClickButton = (title) => {
    console.log("handle click " + title);
  };

  //   console.log(props);
  return <button onClick={() => handleClickButton(text)}>{text}</button>;
};

export default MyButton;
