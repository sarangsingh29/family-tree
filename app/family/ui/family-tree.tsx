'use client'

import {up_clsx} from "@/app/family/cslx/borderToggleClsx";
import Image from "next/image";
import {
    addEdge,
    applyEdgeChanges,
    applyNodeChanges,
    Background,
    BackgroundVariant,
    Controls,
    MiniMap,
    ReactFlow
} from "@xyflow/react";
import React, {useCallback, useState} from "react";
import FamilyNode from "@/app/family/ui/family-node";

export default function FamilyTree(props) {
    const [nodes, setNodes] = useState(props.initialNodes);
    const [edges, setEdges] = useState(props.initialEdges);

    const onNodesChange = useCallback(
        (changes) => {
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

    const addNodeCallback = () => {
        // @ts-ignore: Object is possibly 'null'.
        const name = document.getElementById("name-tf").value
        // @ts-ignore: Object is possibly 'null'.
        const fullname = document.getElementById("fullname-tf").value
        setNodes(prevNodes => {

            return [
                ...prevNodes, FamilyNode(name, fullname)
            ]
        })
    }

    return (
        <div style={{width: '100vw', height: '100vh'}} className={"flex flex-row-reverse"}>
            <div className={up_clsx([
                "flex",
                "flex-col",
                "p-3",
                "m-5"
            ], true)}>
                <input type="text" id={"name-tf"} className={up_clsx([
                        "border-amber-500 border-4",
                        "h-10",
                    ],
                    true
                )}/>
                <span/>
                <input type="text" id={"fullname-tf"} className={up_clsx([
                        "border-amber-500 border-4",
                        "h-10"
                    ],
                    true
                )}/>
                <button
                    onClick={addNodeCallback}
                    className={up_clsx(
                        ["h-10 w-150 border-cyan-500 border-4 flex flex-col justify-center"],
                        true
                    )}
                >
                    < Image
                        className={"align-middle"}
                        src="/family/add.svg"
                        height={50}
                        width={50}
                        alt={"+"}
                    />
                </button>
            </div>
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
    );
}