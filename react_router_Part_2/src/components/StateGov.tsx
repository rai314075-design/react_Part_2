// StateGov.tsx
// - Represents a state-level component in the hierarchy.
// - Accepts `money` and `name` props and demonstrates passing them down.
// - Shows a simple JSX fragment `<>...</>` used to return multiple elements.
import District from "./District"

const StateGov = ({ money, name }: { money: number; name: string }) => {
  return (
    <>
      <h1>State Government Component</h1>
      {/* Pass props further down to District */}
      <District money={money} name={name} />
    </>
  )
}

export default StateGov