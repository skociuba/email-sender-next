import Layout from './components/Layout';
import TextSlider from './components/Slider/Slider';
import Nav from './nav';

export default function Home() {
  return (
    <Layout>
      <Nav />
      <TextSlider />
    </Layout>
  );
}
