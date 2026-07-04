// const Filter = () => {
//   const person = [
//     { id: 1, name: "Rishi", active: true },
//     { id: 2, name: "Superman", active: false },
//     { id: 3, name: "Spiderman", active: true },
//     { id: 4, name: "Batman", active: true },
//   ];
//   //   const actives = person.filter((data) => !data.active);
//   //   console.log(actives);
//   return (

//     <div>

//       {person
//         .filter((data) => !data.active)
//         .map((item) => (
//           <div key={item.id}>
//             <h1>{item.name}</h1>
//           </div>
//         ))}

//     </div>

//   );
// };

// export default Filter;

interface User {
  id: number;
  name: string;
  active: boolean;
}

const Filter = () => {
  const users: User[] = [
    { id: 1, name: "Rishi", active: true },
    { id: 2, name: "Superman", active: false },
    { id: 3, name: "Spiderman", active: true },
    { id: 4, name: "Batman", active: true },
  ];
  //   const actives = person.filter((data) => !data.active);
  //   console.log(actives);
  return (
    <ul>
      {users
        .filter((data) => data.active)
        .map((item) => (
          <li key={item.id}>
            <h1>{item.name}</h1>
          </li>
        ))}
    </ul>
  );
};

export default Filter;
