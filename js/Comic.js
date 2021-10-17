AFRAME.registerComponent("comics",{
  init: function () {
    this.placesContainer = this.el;
  },
  createCards: function () {
    const thumbNailsRef = [
      {id: "avengers",
        title: "Avengers",
        url: "./assets/thumbnails/Avengers.jpg",},
      {id: "marvel",
        title: "Marvel",
        url: "./assets/thumbnails/marvel.jpg", },
      {id: "spiderman",
        title: "Spider Man",
        url: "./assets/thumbnails/spiderman.jpg",},
      {id: "venom",
        title: "Venom",
        url: "./assets/thumbnails/venom.jpeg",},
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      
      this.placesContainer.appendChild(borderEl);
    }
  },
  
});
  