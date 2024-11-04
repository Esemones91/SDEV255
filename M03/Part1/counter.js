const Counter = {
    data() {
        return {
            count: 0
        }
    }, 
    template: "<div>THe counter is: {{count}}</div>",
    created() {
        setInterval(() => {
            this.count += 1;
        }, 1000)
    }
}
export default Counter;