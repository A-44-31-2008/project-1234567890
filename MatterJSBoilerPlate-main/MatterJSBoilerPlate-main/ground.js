class ground {
    constructor(x, y) 
    {
      var options = {
        isStatic: true
      };

      this.body = Bodies.rectangle(x, y, this.w,this.h, options);

      World.add(world, this.body);
    }
}