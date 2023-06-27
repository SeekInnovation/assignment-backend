import {forwardRef} from "react";
import {Card, CardContent, CardProps, Checkbox, Stack, Typography} from "@mui/material";

export const KanbanItem = forwardRef(function ({
                                                   title,
                                                   ...cardProps
                                               }: { title: string } & CardProps, ref: any) {
    return (
        <Card ref={ref} {...cardProps}>
            <CardContent>
                <Stack spacing={2} direction="row" alignItems="center">
                    <Checkbox/>
                    <Typography variant="h6">{title}</Typography>
                </Stack>
            </CardContent>
        </Card>
    );
})