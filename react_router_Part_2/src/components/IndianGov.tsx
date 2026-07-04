// IndianGov.tsx
// - Top-level component representing the Indian government UI.
// - Receives props from parent: `money` (number) and `name` (string).
// - Demonstrates TypeScript inline prop typing for functional components.
import StateGov from "./StateGov"

const IndianGov = ({ money, name }: { money: number; name: string }) => {
  // The component returns JSX. We forward the props to the child `StateGov`.
  return (
    <div>
      <h1>Indian Government Component</h1>
      {/* Forward money and name props to StateGov */}
      <StateGov money={money} name={name} />
    </div>
  )
}

export default IndianGov