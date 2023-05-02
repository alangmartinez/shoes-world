import shoes from "../data/shoes.json";
import Card from "../components/Card";

export default function Shoes() {
  return (
    <section id="shoes" className="container h-full">
      <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-x-10 gap-y-10 py-20 ">
        {shoes.map((shoe) => {
          return(

            <Card key={shoe.name} {...shoe} />
          )
        })}
      </div>
    </section>
  );
}
