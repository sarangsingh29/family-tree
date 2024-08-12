export default function Edge(parentId: string, childId: string, animate: boolean = false) {
    return { id: `edge-${parentId}-${childId}`, source: parentId, target: childId, animated: animate }
}