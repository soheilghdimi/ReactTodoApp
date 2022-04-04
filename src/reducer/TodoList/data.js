const data = [
    {
        id: 1,
        name: "buy List",
        description: "item's need for home",
        items:
            [
                {
                    id: 1,
                    title: "butter",
                    status: false
                },
                {
                    id: 2,
                    title: "bread",
                    status: false
                }
            ]
    },
    {
        id: 2,
        name: "Exercise",
        description: "Gym",
        items:
            [
                {
                    id: 1,
                    title: "Protein",
                    status: false
                },
                {
                    id: 2,
                    title: "potato",
                    status: false
                }
            ]
    }
]
export const makeUniqueId = () => {
    return parseInt(Math.random() * 1000)
}
export default data;