

export default function Card(shoe) {
    const {name, price, thumbnail} = shoe;
  return (
    <div className="min-h-70  rounded-md overflow-hidden bg-primary shadow-lg">
        <img src={thumbnail} alt={name}  className="object-cover object-center w-full h-full hover:scale-[1.20] cursor-pointer transition-all ease-in-out duration-500"/>
        <div className="flex flex-row justify-between mt-10">
                <p className="font-body text-black">{name}</p>
            <p>{price}</p>
        </div>
    </div>
  )
}
