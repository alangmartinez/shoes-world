/* eslint-disable react/no-unescaped-entities */
import profile from "../../assets/images/profile.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="h-full w-full container flex justify-end content-center"
    >
      <article className="w-1/2">
        <h2 className="font-heading text-5xl font-bold">Hi! My name is Alan Martinez</h2>
        <div>
        <p>
          I'm a web developer with a passion for learning and creating new
        </p>
        <img
          className="rounded-full w-[440px] h-[440px]"
          src={profile}
          alt="Alan Martinez"
        />
        </div>
      </article>
    </section>
  );
}
