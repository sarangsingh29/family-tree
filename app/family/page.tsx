import React from 'react';
import "../globals.css";


import '@xyflow/react/dist/style.css';
import Edge from "@/app/family/ui/edge";
import FamilyNode from "@/app/family/ui/family-node";
import {fetchMembers, fetchRelationships} from "@/app/family/lib/data";
import FamilyTree from "@/app/family/ui/family-tree";


export default async function Home() {

    const nodes = (await fetchMembers()).map(
        member => FamilyNode(member.name, member.fullname)
    )

    const edges = (await fetchRelationships()).map(
        member => Edge(member.f, member.t)
    )



    return (
        <FamilyTree
            initialNodes={nodes}
            initialEdges={edges}
        />
    )
}
