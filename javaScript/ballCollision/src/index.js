class Canves{
    constructor(){
        this.box = document.createElement('canvas');
        this.ctx = this.box.getContext('2d');
        document.body.appendChild(this.box);
        this.box.width = 1000;
        this.box.height = 600;
        this.box.style.background = 'grey';
        this.ball();

        requestAnimationFrame(() => this.update());
    }

    ball(){
        const BALLS = 30;
        this.balls = [];
        for(let i = 0; i < BALLS; i++){
            this.balls.push(new Ball(randomGenerator(0, this.box.width),
             randomGenerator(0, this.box.height)));
        };
    };


    update(){
        this.ctx.clearRect(0, 0, this.box.width, this.box.height);

        for (let i = 0; i < this.balls.length; i++){
            const currentBall = this.balls[i]
            const remainingBall = this.balls.slice(i+1)

            for (let bal of remainingBall){
                bal.ballCollide(currentBall)
                
            }
        }
        
        for(let ball of this.balls){
            ball.update();
            ball.edgeCollide(this.box.width, this.box.height)
            this.ctx.fillStyle = `rgb(200, 240, 100)`
            this.ctx.beginPath();
            this.ctx.arc(ball.position.x, ball.position.y, ball.radius, 0, 2*Math.PI)
            this.ctx.fill()
            this.ctx.stroke()
     
        }
        requestAnimationFrame(() => this.update());
    }
}

class Ball{
    constructor(x, y){
        this.position = new Dimension(x, y)
        this.speed = Dimension.ra(-1, 1, -1, 1);
        this.radius = randomGenerator(5, 20)
        this.accer = new Dimension(0, 0)
    }

    update() {
        this.position = Dimension.add(this.position, this.speed);
        this.speed = Dimension.add(this.speed, this.accer);
        this.accer = Dimension.multiply(this.accer, 0)
      }

    edgeCollide(width, height){
        if (this.position.x <= 0 + this.radius || this.position.x >= width-this.radius){
            this.speed.x = - this.speed.x;
        }else if(this.position.y <= 0 + this.radius || this.position.y >= height-this.radius){
            this.speed.y = - this.speed.y;
        }
    }
    ballCollide(ball){
        // console.log(this.position.x)
        // console.log(ball.position.x)
        // console.log(this.position.y)
        // console.log(ball.position.y)
        const d = Dimension.subtraction(this.position, ball.position)
        const distance = d.magnitude()

        if (distance < this.radius + ball.radius){
        //normal vector of two points n = (x2-x1, y2-y1) n/distance

            const normal = Dimension.divide(d, d.magnitude()) 
            const tang = normal.tangent()

            const corr = Dimension.multiply(normal, this.radius + ball.radius);
            const cPosition = Dimension.add(ball.position, corr);
            this.position = cPosition;


            // console.log(normal)
        // let's implement the formula considering the ball radius as the mass of the ball
        // velocity or speed of the the first ball depends on the speed of the other ball and radius
        
        // first velocity of the first ball

            const a = this.speed;
            const b = ball.speed;

            const a_n = a.dotProduct(normal);
            const b_n = b.dotProduct(normal);
            const a_t = a.dotProduct(normal);
            const b_t = b.dotProduct(normal);

            const a_n_final = (a_n * (this.radius - ball.radius) +
                2 * ball.radius*b_n) / (this.radius + ball.radius);
            const b_n_final = (b_n * (ball.radius - this.radius) + 
                2 * this.radius * a_n) / (this.radius + ball.radius);

            const a_n_after = Dimension.multiply(normal, a_n_final);
            const b_n_after = Dimension.multiply(normal, b_n_final);
            const a_t_after = Dimension.multiply(tang, a_t);
            const b_t_after = Dimension.multiply(tang, b_t);

            const a_after = Dimension.add(a_n_after, a_t_after);
            const b_after = Dimension.add(b_n_after, b_t_after);

            this.speed = a_after;
            ball.speed = b_after;

            // const firstBall = this.speed.dotProduct(normal) * (this.radius - ball.radius) +
            //                     2 * ball.radius * ball.speed.dotProduct(normal) / (this.radius + ball.radius)

            // // console.log(ball.speed.dotProduct(normal))
            // const secondBall = ball.speed.dotProduct(normal) * (ball.radius - this.radius) +
            //                 2* this.radius * this.speed.dotProduct(normal) / (this.radius + ball.radius)
        
                
            // const firstBallColl = Dimension.multiply(normal, firstBall)
            // const secondBallColl = Dimension.multiply(normal, secondBall)

            // const tangCollFirst =  Dimension.multiply(tang, this.speed.dotProduct(tang))
            // const tangCollSecond =  Dimension.multiply(tang, ball.speed.dotProduct(tang))

            // const finalOutputFirst = Dimension.add(firstBallColl, tangCollFirst)
            // const finalOutputFSecond = Dimension.add(secondBallColl, tangCollSecond)

            
            // this.speed = finalOutputFirst
            // ball.speed = finalOutputFSecond
        
                        }

    }
    

}

class Dimension{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static add(coord1, coord2){
        return new Dimension(coord1.x + coord2.x, coord1.y + coord2.y)
    }

    static multiply(coord1, constent){
        return new Dimension(coord1.x * constent, coord1.y*constent)
    }

    static divide(coord1, constent){
        return new Dimension(coord1.x/constent, coord1.y/constent)
    }

    // magnitude gives by underroot x-square + y-square

    magnitude(){
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }

    // tangent of (x, y) vector is (-y, x)
    // elastic collision never loose it's kinatic energy
    tangent(){
        return new Dimension(-this.y, this.x)
    }

    dotProduct(coord){
        // console.log(coord.y)
        // console.log(this.x)
        return coord.x*this.x + coord.y*this.y

    }

    static subtraction(coord1, coord2){
        return new Dimension(coord1.x - coord2.x, coord1.y - coord2.y)
    }

    static ra(minX, maxX, minY, maxY) {
        return new Dimension(
          randomGenerator(minX, maxX),
          randomGenerator(minY, maxY)
        );}
}


function randomGenerator(min, max){
    let diff = max - min;
    let rand = Math.random()
    rand = Math.floor( rand * diff);
    rand = rand + min;

    return rand;
    }

new Canves();