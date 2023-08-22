

export function NewTask() {
  return (
    <div className=" flex w-full mb-4 ">
      <input className="  border-0  h-8 -text--gray-100  pl-2 mr-1 -bg--gray-500 rounded w-full focus:outline-none focus:-border--blue focus:ring"
        type="text"
        maxLength={40}
        placeholder="Adicione uma tarefa"
      />
    </div>
  )
}