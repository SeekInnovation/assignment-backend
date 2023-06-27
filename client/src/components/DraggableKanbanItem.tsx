import {Draggable} from "react-beautiful-dnd";
import {KanbanItem} from "./KanbanItem";

export function DraggableKanbanItem({
                                        index,
                                        item: {id, name}
                                    }: { item: { id: string; name: string; done: boolean }, index: number }) {
    return <Draggable draggableId={id}
                      index={index}
    >
        {(provided) => (
            <KanbanItem {...provided.draggableProps} {...provided.dragHandleProps}
                        title={name}
                        ref={provided.innerRef}/>
        )}
    </Draggable>;
}