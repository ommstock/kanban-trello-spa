import { useState } from 'react'
import CardList from './CardList'
import List from './List'

const todoList = [
	{
		id: crypto.randomUUID(),
		text: 'cardtodo',
	},
	{
		id: crypto.randomUUID(),
		text: 'cardtodo',
	},
]

const inProgressList = [
	{
		id: crypto.randomUUID(),
		text: 'card',
	},
]

const doneList = [
	{
		id: crypto.randomUUID(),
		text: 'cardfinish',
	},
	{
		id: crypto.randomUUID(),
		text: 'cardfinish',
	},
]

function Board() {
	const [allLists, setAllLists] = useState({ todoList, inProgressList, doneList })
	const [dragged, setDragged] = useState(null)

	const handleDrop = function (e) {
		e.preventDefault()
		const id = e.currentTarget.dataset.id
		const allListsClone = structuredClone(allLists)
		const deletedClone = allListsClone[dragged.list].filter(item => item.id !== dragged.data.id)
		allListsClone[dragged.list] = deletedClone
		allListsClone[id].push(dragged.data)
		setAllLists(allListsClone)
	}

	return (
		<div className="p-3">
			<h1 className="fs-2 lh-1 fw-bold mb-3">Development</h1>
			<main className="d-flex justify-content-between gap-3">
				<List name="TODO" id='todoList' handleDrop={handleDrop}>
					{
						allLists.todoList.map((item) => {
							return (<CardList setDragged={setDragged} key={item.id} {...item} />)
						})
					}
				</List>
				<List name="In Progress" id='inProgressList' handleDrop={handleDrop}>
					{
						allLists.inProgressList.map(item => {
							return (<CardList setDragged={setDragged} key={item.id} {...item} />)
						})
					}
				</List>
				<List name="Done" id='doneList' handleDrop={handleDrop}>
					{
						allLists.doneList.map(item => {
							return (<CardList setDragged={setDragged} key={item.id} {...item} />)
						})
					}
				</List>
			</main>
		</div>
	)
}

export default Board