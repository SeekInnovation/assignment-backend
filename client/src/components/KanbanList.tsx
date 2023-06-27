import {forwardRef} from "react";
import {Card, CardContent, CardHeader, CardProps, Stack} from "@mui/material";

export const KanbanList = forwardRef(function ({
                                                   children,
                                                   title,
                                                   ...cardProps
                                               }: { children: React.ReactNode, title: string } & CardProps, ref: any) {
    return (
        <Card variant="outlined" sx={{bgcolor: 'grey.200', width: 400}} ref={ref} {...cardProps}>
            <CardHeader title={title}/>
            <CardContent>
                <Stack spacing={2}>{children}</Stack>
            </CardContent>
        </Card>
    );
})