import { faEdit, faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Image } from 'react-bootstrap'

function CardList({ text, id, setDragged}) {
	const handleDragStart = function({target}) {
		setDragged({
			data: {text, id},
			list: target.closest('[data-id]').dataset.id,
		})
	}
	return (
		<div draggable="true" onDragStart={handleDragStart}
			className="bg-white p-2 d-flex flex-column gap-3 rounded" role="button"
		>
			<div className="d-flex justify-content-between align-items-start">
				<div className="fs-6">{text}</div>
				<FontAwesomeIcon icon={faEdit} size="lg" className='ms-2'/>
			</div>
			<div className="d-flex justify-content-between align-items-center">
				<FontAwesomeIcon icon={faMessage} size="lg" />
				<Image src="images/avatar2.png" alt="avatar" width={32} className="rounded-circle" draggable="false"/>
			</div>
		</div>
	)
}

export default CardList