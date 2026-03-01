import { InfiniteRibbon } from "./ui/infinite_ribbon";


export function SlidingRibbon() {
  return (
    <div className="relative flex h-[350px] w-full items-center justify-center overflow-hidden ">
      <InfiniteRibbon rotation={5} className="absolute">
        Tenants text. AI understands. Issues classified. Vendors dispatched.
        Maintenance — automated from message to resolution.
      </InfiniteRibbon>

      <InfiniteRibbon reverse={true} rotation={-5}>
        Stop managing repairs. Start managing assets.
        Smart maintenance operations powered by AI.
      </InfiniteRibbon>
    </div>
  )
}
