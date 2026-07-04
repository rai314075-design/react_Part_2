// District.tsx
// - Intermediate component representing a district.
// - Receives props and forwards them to the `Block` child.
// - Illustrates standard prop destructuring in TypeScript function params.
import Block from "./Block"

const District = ({ money, name }: { money: number; name: string }) => {
  return (
    <div>
        <h1>District Component</h1>
        {/* Forward props to Block component */}
        <Block money={money} name={name} />
    </div>
  )
}

export default District