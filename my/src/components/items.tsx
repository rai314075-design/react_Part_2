//This is example of ternary operator

// const items = () => {
//   const age = 2;
//   return (
//     <div>
//       {age >= 18 ? (
//         <>
//           <h1>You can drive</h1>
//         </>
//       ) : (
//         <>
//           <h1>You are not eligible to drive</h1>
//         </>
//       )}
//     </div>
//   );
// };

// export default items;

//This is example of && operator

const items = () => {
 // const age = 2;
  const aadhar = false;
  const gmail = true;
  return (
    <>
      <div></div>
      {aadhar && <h1>You can open Bank account</h1>}
      {gmail && <h1>You can make Youtube channel </h1>}
      {/* <h1>You can open Bank account</h1>
    <h1>You can make Youtube channel </h1> */}
    </>
  );
};

export default items;
