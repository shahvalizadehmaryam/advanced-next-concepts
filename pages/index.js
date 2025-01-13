import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h3>Home page</h3>
      {/* <img src="/images/1.jpg" alt="nature image" />
      <img src="/images/2.jpg" alt="nature image" />
      <img src="/images/3.jpg" alt="nature image" />
      <img src="/images/4.jpg" alt="nature image" />
      <img src="/images/5.jpg" alt="nature image" /> */}
      <Image src="/images/1.jpg" alt="nature" height={1000} width={600} />
      <Image src="/images/2.jpg" alt="nature" height={1000} width={600} />
      <Image src="/images/3.jpg" alt="nature" height={1000} width={600} />
      <Image src="/images/4.jpg" alt="nature" height={1000} width={600} />
    </div>
  );
}
