import {Box, Button, Card, CardContent, Checkbox, Stack, Typography} from "@mui/material";

export function Kanban() {
    return (
        <Box sx={{paddingBottom: 4}}>
            <Stack spacing={2} margin={5} direction="row">
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
                <KanbanList>
                    <KanbanItem/>
                    <KanbanItem/>
                    <KanbanItem/>
                    <Button>Add item</Button>
                </KanbanList>
            </Stack>
        </Box>
    );
}

function KanbanItem() {
    return (
        <Card>
            <CardContent>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Checkbox/>
                    <Typography variant="h6">Some item</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

function KanbanList({children}: { children: React.ReactNode }) {
    return (
        <Card variant="outlined" sx={{bgcolor: 'grey.200', width: 400}}>
            <CardContent>
                <Stack spacing={2}>{children}</Stack>
            </CardContent>
        </Card>
    );
}

export default Kanban;