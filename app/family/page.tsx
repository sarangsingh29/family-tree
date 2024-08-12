'use client'

import React, {useCallback, useState} from 'react';
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    ReactFlow
} from '@xyflow/react';


import '@xyflow/react/dist/style.css';
import Edge from "@/app/family/ui/edge";
import FamilyNode from "@/app/family/ui/family-node";

const initialNodes = [
    FamilyNode('alpha', 500, 50),
    FamilyNode('beta', 100, 150),
    FamilyNode('gamma', 400, 300),
]

const initialEdges = [
    Edge('alpha', 'beta'),
    Edge('alpha', 'gamma', true)
]

export default function Home() {

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    const onNodesChange = useCallback(
        (changes) => {
            console.log("Maverick: nodes-change")
            setNodes((nds) => applyNodeChanges(changes, nds))
        },
        [setNodes],
    );
    const onEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        [setEdges],
    );
    const onConnect = useCallback(
        (connection) => {
            console.log("onConnectCalled")
            setEdges((eds) => addEdge({...connection, animated: true}, eds))
        },
        [setEdges],
    );

    return (
        <main className={"flex min-h-screen flex-col items-center justify-between p-24"}>
            <div style={{width: '100vw', height: '100vh'}}>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                >
                    <Controls/>
                    <MiniMap/>
                    <Background variant={BackgroundVariant.Dots} gap={12} size={2}/>
                </ReactFlow>
            </div>
        </main>
    );
}
