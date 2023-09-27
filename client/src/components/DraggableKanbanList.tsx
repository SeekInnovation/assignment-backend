import {Draggable, Droppable} from "react-beautiful-dnd";
import {KanbanList} from "./KanbanList";
import {Button, Dialog, DialogActions, Stack, TextField} from "@mui/material";
import {DraggableKanbanItem} from "./DraggableKanbanItem";
import {useState} from "react";
import {useAddKanbanItem} from "../model/useAddKanbanItem";

export function DraggableKanbanList({
                                        index,
                                        title, items, id
                                    }: {
    title: string,
    id: string,
    items: { id: string, name: string, done: boolean }[],
    index: any
}) {

    const addMutation = useAddKanbanItem()

    const [open, setOpen] = useState(false);
    const [newItemName, setNewItemName] = useState('');
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
                <Button onClick={() => setOpen(true)}>Add item</Button>
                <Dialog open={open} onClose={() => setOpen(false)}>
                    <TextField label={'Item name'} value={newItemName}
                               onChange={(e) => setNewItemName(e.target.value)}/>
                    <DialogActions>
                        <Button onClick={() => setOpen(false)}>Cancel</Button>
                        <Button onClick={() => {
                            addMutation.mutateAsync({
                                toListId: id,
                                name: newItemName
                            })
                            setOpen(false)
                            setNewItemName('')
                        }}>Add</Button>
                    </DialogActions>
                </Dialog>
            </KanbanList>
        )}
    </Draggable>;
}