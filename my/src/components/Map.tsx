// const Map = () => {
//   const data = ["Google", "Microsoft", "Appple", "Facebook"];
//   return (
//     <div>
//       {data.map((element, index) => (
//         <div key={index}>
//           <h1>{element}</h1>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Map;

//second exmaple\

// Map component renders smartphone details with images and titles
const Map = () => {
  const smartPhone = [
    {
      id: 1,
      model: "Iphone15 pro max",
      img: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 2,
      model: "Iphone16 pro max",
      img: "https://m.media-amazon.com/images/I/61FMZ9rSZUL._AC_UY327_FMwebp_QL65_.jpg",
    },
    {
      id: 3,
      model: "Iphone17 pro max",
      img: "https://m.media-amazon.com/images/I/61zVFiTawKL._AC_UY327_FMwebp_QL65_.jpg",
    },
  ];

  return (
    <>
      {smartPhone.map((data) => (
        <div key={data.id}>
          <img style={{ width: '200px', height: '200px' }} src={data.img} alt="" />
          <h1>{data.model}</h1>
        </div>
      ))}
    </>

  );
};

export default Map;
