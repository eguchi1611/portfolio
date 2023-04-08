import SocialCard from "./social-card/social-card";

export default function Profile() {
  return (
    <>
      <div className="text-3xl font-bold tracking-widest text-teal-500">
        Keita ITO
      </div>
      <div className="mt-2 text-neutral-700">
        趣味でプログラミングしています
        <br />
        お気軽にお声掛けください
      </div>
      <div className="mt-2">
        <SocialCard />
      </div>
    </>
  );
}
