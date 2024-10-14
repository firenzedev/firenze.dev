import dayjs from "dayjs";

export function Calendar(props: { date: Date }) {
  return (
    <div className="flex flex-col shadow-md w-20 md:w-28 relative">
      <div className="absolute -top-2 left-4 w-2 h-4 bg-slate-400"></div>
      <div className="absolute -top-2 right-4 w-2 h-4 bg-slate-400"></div>
      <span className="bg-blue-600 text-center text-white p-1 md:p-2">
        {dayjs(props.date).format("MMM")}
      </span>
      <span className="text-2xl md:text-4xl text-orange-800 font-bold bg-white text-center px-3 pt-3 pb-2">
        {dayjs(props.date).format("DD")}
      </span>

      <span className="text-sm md:text-md bg-white text-blue-600 text-center md:p-1  border-t-2 border-gray-100 border-dashed">
        {dayjs(props.date).format("YYYY")}
      </span>
    </div>
  );
}
