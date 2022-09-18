import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>
        ~.module.css: <br />
        CRA turns this css code into javascript object, <br />
        and Component import this object that has .className
      </h1>
      <Button text={"hello"} />
    </div>
  );
}

export default App;
