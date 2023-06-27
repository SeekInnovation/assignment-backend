import React from 'react';
import Kanban from "./Kanban";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <Kanban/>
        </QueryClientProvider>
    );
}

export default App;
