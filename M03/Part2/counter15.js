const Counter = {
    data() {
        return {
            count: ["Counter 1", "Counter 2", "Counter 3", 
                "Counter 4", "Counter 5"]
        }
    },
    template: `
        <ul>
            <li v-for = "(count, index) in counts">
            <span>index {{ index }}: {{ count }}</span>
            </li>
        </ul>
        `,
}

export default Counter;
