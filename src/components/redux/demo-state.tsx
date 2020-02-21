export type StateType = {
    items: Array<ItemType>
}
export type ItemType = {
    title: string,
    like: boolean,
}
export const state = {
    items: [
        {title: 'ddsfdsf', like: false, id: 1}
    ]
}