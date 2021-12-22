// let outer = document.getElementById("outer__warper-id")
// let inner = document.getElementById("inner__warper-id")

// outer.style.height="500px";
// outer.style.border="1px solid grey";
// outer.style.width="500px";
// outer.style.top="25%";
// outer.style.left="35%";
// outer.style.position="absolute";



// inner.style.height = "40px";
// inner.style.width = "40px";
// inner.style.borderRadius = "50%";
// inner.style.backgroundColor = "#49c";
// inner.style.position = "absolute";
// inner.style.left = "45%";
// inner.style.top = "0px"

// let position = parseInt(inner.style.top)

// setInterval(()=>{
//     let positionTop = position + "px";
//     inner.style.top = positionTop;
//     if(position<460){
//         position++;
//     }   
// }, 0.5)


let pointContainer = document.getElementById("point__container-id");
pointContainer.style.height = "300px";
pointContainer.style.width = "400px";
pointContainer.style.border = "1px solid black";
pointContainer.style.position = "relative"


var points = [
    { x: 10, y: 20 }, { x: 40, y: 40 }, { x: 60, y: 20 }, { x: 90, y: 10 },
    { x: 110, y: 30 }, { x: 130, y: 100 }, { x: 160, y: 40 }, { x: 180, y: 70 },
    { x: 200, y: 75 }, { x: 230, y: 55 }
  ];

console.log(points[0].y)

function plotPoint(xPos, yPos){
    let point = document.createElement("div");
    point.style.width = "15px";
    point.style.height = "15px";
    point.style.borderRadius = "10px";
    point.style.background = "#49c";
    point.style.position = "absolute";
    point.style.left = xPos + "px";
    point.style.top = yPos + "px";
    return point;

}

for(let i = 0; i < points.length; i++) {
    let plotedPoint = plotPoint(points[i].x, points[i].y);
    console.log(plotPoint(points[i].x, points[i].y))
    pointContainer.appendChild(plotedPoint);
  }











