import Image from "next/image";

export default function Home() {
  return (
    <main style={{ backgroundImage: "url('ea.jpg')" }} className="bg-cover bg-no-repeat bg-center flex min-h-screen flex-col items-center justify-between p-24">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-lg"></div>

      <div className="flex mt-auto self-end items-center text-6xl font-serif z-10">
        <Image alt="ET to the Moon!" width={73} height={63} src='/ealogo.png' />
        Effective Accleration
      </div>

    </main>
  );
}
