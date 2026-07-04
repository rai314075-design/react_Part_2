// Block.tsx
// - Represents a block within a district.
// - Continues the prop drilling example by receiving and forwarding `money` and `name`.
// - Uses React fragments to avoid extra DOM wrappers.
import Village from "./Village"

const Block = ({ money, name }: { money: number; name: string }) => {
  return (
    <>
        <h1>Block Component</h1>
        {/* Forward props to Village component */}
        <Village money={money} name={name} />
    </>
  )
}

export default Block