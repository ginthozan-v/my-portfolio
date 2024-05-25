import Banner from '@/components/Banner';
import Header from '@/components/Header';

export default function Home() {
  return (
    <main className="max-w-screen-xl lg:mx-auto flex flex-col min-h-screen mx-5">
      <Header />
      <Banner />
    </main>
  );
}
