// Village.tsx
// - Village component in the UI tree.
// - Shows how props are passed down until they reach terminal components.
import People from "./People"

const Village = ({ money, name }: { money: number; name: string }) => {
  return (
    <div>
        <h1>Village Component</h1>
        {/* Pass props to People component (leaf) */}
        <People money={money} name={name} />
    </div>
  )
}

export default Village