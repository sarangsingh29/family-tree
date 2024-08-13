import {Node} from "@xyflow/react";

export default function FamilyNode(id: string, label: string): Node  {
    return {
        id: id,
        position: { x: Math.random() * 500, y: Math.random() * 600 },
        data: { label: <a href={id}>{label}</a> },
    }
}
