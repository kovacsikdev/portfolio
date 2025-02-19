import { convertNumToCommas } from "@/helpers/helpers";

type WarehouseTotalCountProps = {
  title: string,
  total: number,
  dollarSign?: boolean
}

const WarehouseTotalCount = (props: WarehouseTotalCountProps) => {
  const {title, total, dollarSign} = props;

  return (
    <div className="p-4 m-2 max-w-[300] min-w-[100] flex flex-col text-left">
      <h2 className="font-semibold mb-2">{title}</h2>
      <div className="md:text-6xl">{dollarSign && "$"}{total > 0 ? convertNumToCommas(total) : "-"}</div>
      {/* <div>{dollarSign && "$"}{total > 0 ? convertNumToCommas(total) : "-"}</div> */}
    </div>
  )
}

export default WarehouseTotalCount