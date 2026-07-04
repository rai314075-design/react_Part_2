// People.tsx
// - Leaf component that consumes props and renders values.
// - Demonstrates embedding JavaScript expressions inside JSX using `{}`.

const People = ({ money, name }: { money: number; name: string }) => {
  return (
    <div>
      {/* Embed `money` and `name` values inside JSX */}
      <h1>Welcome to People Component = {money} </h1>
      <h1>name = {name}</h1>
    </div>
  )
}

export default People