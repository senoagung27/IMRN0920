class Jam {
    constructor({ template }){
        this.template = template
        this.timer
    }
    
    render() {
        this.date = new Date()
        this.hours = this.date.getHours()
        if (this.hours < 10) this.hours = '0' + this.hours
  
        this.mins = this.date.getMinutes()
        if (this.mins < 10) this.mins = '0' + this.mins
  
        this.secs = this.date.getSeconds()
        if (this.secs < 10) this.secs = '0' + this.secs
  
        this.output = this.template
        .replace('h', this.hours)
        .replace('m', this.mins)
        .replace('s', this.secs);
  
      console.log(this.output)
    }
    
    start() {
        this.render()
        this.timer = setInterval(this.render.bind(this), 1000)
      }

    stop() {
      clearInterval(this.timer)
    }
}

var jam = new Jam({template: 'h:m:s'});
jam.start();  
console.log();