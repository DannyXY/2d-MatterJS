var Engine = Matter.Engine,
  Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;

var engine = Engine.create();


var w =window.innerWidth
var h = window.innerHeight


var render = Render.create({
  element: document.body,
  engine: engine,
  options: {
    width: w,
    height: h,
    wireframes: false
  }
});

var topWall = Bodies.rectangle(600, 50, 1400, 20, { isStatic: true });
var leftWall = Bodies.rectangle(50, 600, 20, 1200, { isStatic: true });
var rightWall = Bodies.rectangle(1200, 600, 20, 1200, { isStatic: true });
var bottomWall = Bodies.rectangle(600, 600, 1400, 20, { isStatic: true });

var box = Bodies.rectangle(90, 120, 70, 70, {
    // render:{

    //     sprite : {
    //         texture: 'https://github.com/DannyXY/chia-blockchain-test/blob/main/fighter-img/rsz_12.jpg?raw=true',
    //         visible:true
    //     }
    // }
});
var box2 = Bodies.rectangle(90, 120, 70, 70, {
    // render:{

    //     sprite : {
    //         texture: 'https://github.com/DannyXY/chia-blockchain-test/blob/main/fighter-img/rsz_13.jpg?raw=true',
    //         visible:true
    //     }
    // }
});
var box3= Bodies.rectangle(90, 120, 70, 70, {
    // render:{

    //     sprite : {
    //         texture: 'https://github.com/DannyXY/chia-blockchain-test/blob/main/fighter-img/rsz_31.jpg?raw=true',
    //         visible:true
    //     }
    // }
});
var box4 = Bodies.rectangle(90, 120, 70, 70, {
    // render:{

    //     sprite : {
    //         texture: 'https://github.com/DannyXY/chia-blockchain-test/blob/main/fighter-img/rsz_14.jpg?raw=true',
    //         visible:true
    //     }
    // }
});

const boxArr = [box,box2, box3,box4]
World.add(engine.world, [topWall, leftWall, rightWall, bottomWall, box, box2, box3, box4]);

Matter.Runner.run(engine);

Render.run(render);

const linear = document.getElementById('linear')
const angular = document.getElementById('angular')

setInterval(() => {
    
    const booleanVal = Math.random() < 0.5
    if(booleanVal) {

        for(let i = 0; i<10; i++) {
            Body.setVelocity( boxArr[i], {x: 20, y: -20});
            Body.setAngularVelocity( boxArr[i], Math.PI/6);
        
        }
    } else {
        for(let i = 0; i<10; i++) {
            Body.setVelocity( boxArr[i], {x: -20, y: 20});
            Body.setAngularVelocity( boxArr[i], -Math.PI/6);
        
        }
    }
    let randNum = Math.round(Math.random(0,boxArr.length))
    World.remove(boxArr[randNum])
    // boxArr[randNum].visibility(false)
    boxArr.pop(randNum)
}, 1000)



