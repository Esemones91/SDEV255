const Counter = {
    data() {
      return {
        count: 0
      };
    },
    template: `
      <div>
        <button @click="count++">Increment counter (count++)</button> 
        &nbsp;&nbsp; count = {{ count }} <br><br>
        <button @click="incr()">Increment counter (incr())</button> 
        &nbsp;&nbsp; count = {{ count }}
      </div>
    `,
    methods: {
      incr() {
        this.count++;
      }
    }
  };
  export default Counter;
  