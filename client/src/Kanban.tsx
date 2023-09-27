import {Box, Stack} from "@mui/material";
import {DragDropContext, Droppable, DropResult, ResponderProvided} from 'react-beautiful-dnd'
import {useCallback} from "react";
import {DraggableKanbanList} from "./components/DraggableKanbanList";
import {useMoveKanbanItem} from "./model/useMoveKanbanItem";
import {useKanbanData} from "./model/useKanbanData";
import {useMoveKanbanColumn} from "./model/useMoveKanbanColumn";

export function Kanban() {
    const {data} = useKanbanData();
    const moveKanbanItem = useMoveKanbanItem();
    const moveKanbanColumn = useMoveKanbanColumn()

    const handleOnDragEnd = useCallback(async (result: DropResult, provided: ResponderProvided) => {
        if (!result.destination) return;
        if (result.destination.index === result.source.index && result.source.droppableId === result.destination.droppableId) return;
        if (result.reason === 'CANCEL') return;
        if (result.type === 'item') {
            await moveKanbanItem.mutateAsync({
                index: result.destination.index,
                itemId: result.draggableId,
                toListId: result.destination.droppableId,
            });
        }
        if (result.type === 'column' && result.destination.droppableId === 'kanban') {
            await moveKanbanColumn.mutateAsync({
                index: result.destination.index,
                id: result.draggableId
            });
        }

    }, [])

    return (
        <Box sx={{paddingBottom: 4}}>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId={'kanban'} direction={'horizontal'} type={'column'}>
                    {(provided) => (
                        <Stack spacing={2} margin={5} direction="row"
                               ref={provided.innerRef}
                               {...provided.droppableProps}
                        >
                            {
                                data?.kanban.map((list, index) => (
                                    <DraggableKanbanList key={list.id} id={list.id} title={list.name} items={list.items}
                                                         index={index}/>
                                ))
                            }
                            {provided.placeholder}
                        </Stack>
                    )}
                </Droppable>
            </DragDropContext>
        </Box>
    );
}

export default Kanban;