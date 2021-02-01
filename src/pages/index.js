import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css"

export default function Home({countries}) {
  console.log(countries)
  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length}</div>
      <SearchInput />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://rescountries.eu/rest/v2/all");
  const countries = await res.json();

  return {
    props: {
      countries,
    }
  }
}