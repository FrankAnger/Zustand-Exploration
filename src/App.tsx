import React from 'react';
import './App.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {Input} from "./components/input";
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Input />
      </div>
    </QueryClientProvider>
  );
}

export default App;
