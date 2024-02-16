import styles from './App.module.scss';
import { Header } from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className={styles.mainBackgroundImage} />
        <img className={styles.mainBackgroundMask} src="/assets/waves.svg" />
      </main>
    </>
  );
}

export default App;
