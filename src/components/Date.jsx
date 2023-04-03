function Date(props) {
  return (
    <li className="inline-block bg-white rounded-lg shadow-md">
      <div
        className={`${
          //삼항연산자 적용.
          props.day === "SUN"
            ? "bg-red-400"
            : props.day === "SAT"
            ? "bg-orange-400"
            : "bg-blue-400"
        } rounded-t-lg px-2 py-1 text-xl text-white`}
      >
        {props.date}
      </div>
      <ul className="p-2 text-lg min-h-[80px]">
        {props.todos.map((v, i) => {
          return <li className="truncate">{v}</li>;
        })}
        {/* truncate(틀을 넘어가면 점으로 표시되도록함.) */}
      </ul>
    </li>
  );
}

export default Date;
