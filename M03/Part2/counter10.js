const Counter = {
    data() {
        return {
            count: parseInt(this.start),
        }
    },
    template: `<div>{{ time() }} &nbsp;&nbsp; 
        The counter is: {{ count }}, double is: {{ countX2 }}</div>`,
    created() {
        setInterval(() => {
            this.count += 1;
        }, 1000);
    },
    methods: {
        time() {
            // Return time as HH:MM:SS
            const date = new Date();
            let hour = date.getHours();
            let min = date.getMinutes();
            let sec = date.getSeconds();
            if (hour < 10) hour = "0" + hour;
            if (min < 10) min = "0" + min;
            if (sec < 10) sec = "0" + sec;
            return `${hour}:${min}:${sec}`;
        }
    },
    computed: {
        countX2() {
            return 2 * this.count;
        }
    },
    props:[
        "start"
    ]
};

export default Counter;
