

export const TodoForm = () => {
  return (
    <form action="" className="flex gap-1 p-8 bg-red-100 max-w-fit mb-4">
        <div className="flex flex-col gap-2 flex-grow ">
          <label htmlFor="todo" className="text-red-800">Nueva tarea</label>
          <input id='todo' type="text" className="min-w-80 border border-red-200 rounded-lg min-h-10 p-2 outline-none"></input>
        </div>
        <button type="submit" className="min-w-24 bg-slate-600 rounded-lg text-red-300 font-bold">Agregar</button>
    </form>
  )
}
