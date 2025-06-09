export default function AddTask() {
  return (
    <div>
      <input
        className="bg-slate-200 px-4 py-1.5 "
        type="text"
        placeholder="Add task"
      />
      <button className="px-4 py-1.5 bg-amber-400 uppercase cursor-pointer active:shadow-inner active:bg-amber-500 duration-300">
        Add
      </button>
    </div>
  );
}
