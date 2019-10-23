const fatalErrorActions: string[] = [];

export function provideFatalErrorAction(action: { type: string }) {
    fatalErrorActions.push(action.type);
    console.log(`PROVIDED: ${action.type}`);
    console.log(fatalErrorActions);
}

export function isFatalErrorAction(action: { type: string }) {
    return fatalErrorActions.some(t => t === action.type);
}
