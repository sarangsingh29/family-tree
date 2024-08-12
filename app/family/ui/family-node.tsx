import {Node} from "@xyflow/react";

export default function FamilyNode(id: string, x: number, y: number): Node  {
    return {
        id: id,
        position: { x: x, y: y },
        data: { label: <a href={id}>{id}</a> },
    }
}
