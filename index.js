class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  
  get diameter(){
    return this.radius * 2
  }

  get circumference(){
    return Math.PI * this.diameter
  }

  get area(){
    return Math.PI * (this.radius * this.radius)
  }

  set diameter(diameter){
    return this.radius = diameter / 2
  }

  set circumference(circumference){
    return this.diameter = (circumference / Math.PI)
  }

  set area(area){
    return this.radius = Math.sqrt(area / Math.PI)
  }
}