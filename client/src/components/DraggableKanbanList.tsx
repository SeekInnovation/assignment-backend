import {Draggable, Droppable} from "react-beautiful-dnd";
import {KanbanList} from "./KanbanList";
import {Button, Stack} from "@mui/material";
import {DraggableKanbanItem} from "./DraggableKanbanItem";

export function DraggableKanbanList({
                                        index,
                                        title, items, id
                                    }: { title: string, id: string, items: { id: string, name: string, done: boolean }[], index: any }) {
    return <Draggable draggableId={id} index={index}>
        {(provided) => (
            <KanbanList
                title={title}
                {...provided.draggableProps} {...provided.dragHandleProps}
                ref={provided.innerRef}>
                <Droppable droppableId={id}
                           direction={'vertical'} type={'item'}>
                    {(provided) => (
                        <Stack spacing={2} ref={provided.innerRef}
                               {...provided.droppableProps}>
                            {
                                items.map((item, index) => (
                                    <DraggableKanbanItem key={item.id} item={item} index={index}/>
                                ))
                            }
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>
                <Button>Add item</Button>
            </KanbanList>
        )}
    </Draggable>;
}