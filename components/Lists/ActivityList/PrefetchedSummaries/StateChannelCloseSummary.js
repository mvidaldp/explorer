import { formatBytes } from '../../../../utils/units'

const StateChannelCloseSummary = ({ txn, role, address }) => {
  return (
    <span className="flex items-center">
      {txn.stateChannel.summaries.map((s, i) => (
        <span
          key={i}
          className="mr-1 w-full py-1 flex rounded-md justify-start items-center"
        >
          <div className="flex items-start justify-center flex-row space-x-1">
            <span className="text-gray-800 font-sans text-xs whitespace-nowrap">
              {s.numPackets} packets
            </span>
            <span className="text-gray-800 font-sans text-xs font-extralight">
              |
            </span>
            <span className="flex flex-row items-center justify-start w-full space-x-1">
              <img src="/images/dc.svg" alt="" className="w-2.5 h-auto" />
              <span className="text-gray-800 font-sans text-xs font-light">
                {s.numDcs} DC
              </span>
            </span>
            <span className="text-gray-800 font-sans text-xs font-extralight">
              |
            </span>
            <span className="text-gray-800 font-sans text-xs whitespace-nowrap">
              {formatBytes(s.numDcs * 24)}
            </span>
          </div>
        </span>
      ))}
    </span>
  )
}

export default StateChannelCloseSummary
