
function List({ children, name, handleDrop, id }) {

  return (
    <div
      data-id={id}
      onDrop={handleDrop} onDragOver={(e)=>{e.preventDefault()}}
      className="p-3 bg-secondary rounded col"
    >
      <h2 className="fs-6 text-dark fw-bold mb-3 text-white">{name}</h2>
      <div className="d-flex flex-column gap-3">
        {children}
      </div>
    </div>
  )
}

export default List