// interface Laptop {
//   rom: string;
//   ram: string;
//   chip: string;
// }
// interface ProductProps {
//   name: string;
//   price: number;
//   shopName?: string;
//   data?: Laptop;
// }

// const Product = ({ name, price, shopName, data }: ProductProps) => {
//   return (
//     <div>
//       <button>click me</button>
//       <h1>{shopName}</h1>
//       <h2>{name}</h2>
//       <p>Price:{price}</p>
//       {data && (///this is the way we use optional in react by && operater
//         <div className="spacs">
//           <p>rom= {data.rom}</p>
//           <p>ram = {data.ram}</p>
//           <p>chip = {data.chip}</p>
//         </div>
//       )}
//     </div>
//   );
// };
// export default Product;

// How we connect CSS in react
// /There are three ways to do this in react

// frist is inline css
// second is internal css
// thrid is external css

// exmaple of inline css

// interface Laptop {
//   rom: string;
//   ram: string;
//   chip: string;
// }
// interface ProductProps {
//   name: string;
//   price: number;
//   shopName?: string;
//   data?: Laptop;
// }

// const Product = ({ name, price, shopName }: ProductProps) => {
//   return (
//     <>
//       <div
//         style={{
// backgroundColor: "blue",
// display: "flex",
// justifyContent: "space-evenly",
// alignItems: "center",
// margin: "5rem",
// padding: "5rem",
// borderRadius :'4vh',
//         }}
//       >
//         <button>click me</button>
//         <h1>{shopName}</h1>
//         <h2>{name}</h2>
//         <p>Price:{price}</p>
//       </div>
//     </>
//   );
// };
// export default Product;

// Example of internal Css

// interface Laptop {
//   rom: string;
//   ram: string;
//   chip: string;
// }
// interface ProductProps {
//   name: string;
//   price: number;
//   shopName?: string;
//   data?: Laptop;
// }

// const Products = ({ name, price, shopName }: ProductProps) => {
//   const style = {
//     backgroundColor: "yellow",
//     color: "black",
//     display: "flex",
//     justifyContent: "space-evenly",
//     alignItems: "center",
//     margin: "5rem",
//     padding: "5rem",
//     borderRadius: "4vh",
//   };
//   const h1 ={
//     backgroundColor:'red',
//     height:'5rem',
//     color:'black',
//     padding:'10px',
//     margin:'10px',
    
//   }
//   return (
//     <>
//       <div style={style}>
//         <button style={h1}>click me</button>
//         <h1>{shopName}</h1>
//         <h2>{name}</h2>
//         <p>Price:{price}</p>
//       </div>
//     </>
//   );
// };
// export default Products;


// What is external styling in react

// for exmaple 

// import "./product.css";

// interface Laptop {
//   rom: string;
//   ram: string;
//   chip: string;
// }
// interface ProductProps {
//   name: string;
//   price: number;
//   shopName?: string;
//   data?: Laptop;
// }

// const Products = ({ name, price, shopName }: ProductProps) => {

  
  
//   return (
//     <>
//       <div >
//         <button className="container">click me</button>
//         <h1 className="con">{shopName}</h1>
//         <h2>{name}</h2>
//         <p>Price:{price}</p>
//       </div>
//     </>
//   );
// };
// export default Products;

