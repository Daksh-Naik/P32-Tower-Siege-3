//Tower Siege 3 - Wrecking up the box stacks
//WhiteHatJR Project 32 13-12-2020 

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

    var score = 0;

function setup(){
    createCanvas(1350, 600);
    engine = Engine.create();
    world = engine.world;

    BaseGround = new Ground(width/2, 590, 1350, 30);
    ShelfGround = new Ground(320, 350, 250, 20);
    ShelfGround2 = new Ground(1090, 350, 300, 20);

//----------------------------------------------------------------------------------------@
    PBox1 = new PBox(320, 330, 30, 30);
    PBox2 = new PBox(350, 330, 30, 30);
    PBox3 = new PBox(380, 330, 30, 30);
    PBox4 = new PBox(410, 330, 30, 30);
    PBox5 = new PBox(290, 330, 30, 30);
    PBox6 = new PBox(260, 330, 30, 30);
    PBox7 = new PBox(230, 330, 30, 30);
    YBox1 = new YBox(305, 300, 30, 30);
    YBox2 = new YBox(335, 300, 30, 30);
    YBox3 = new YBox(365, 300, 30, 30);
    YBox4 = new YBox(395, 300, 30, 30);
    YBox5 = new YBox(275, 300, 30, 30);
    YBox6 = new YBox(245, 300, 30, 30);
    PBox8 = new PBox(320, 270, 30, 30);
    PBox9 = new PBox(350, 270, 30, 30);
    PBox10 = new PBox(380, 270, 30, 30);
    PBox11 = new PBox(290, 270, 30, 30);
    PBox12 = new PBox(260, 270, 30, 30);
    YBox7 = new YBox(305, 240, 30, 30);
    YBox8 = new YBox(335, 240, 30, 30);
    YBox9 = new YBox(365, 240, 30, 30);
    YBox10 = new YBox(275, 240, 30, 30);
    PBox13 = new PBox(320, 210, 30, 30);
    PBox14 = new PBox(350, 210, 30, 30);
    PBox15 = new PBox(290, 210, 30, 30);
    YBox11 = new YBox(305, 180, 30, 30);
    YBox12 = new YBox(335, 180, 30, 30);
    PBox16 = new PBox(320, 150, 30, 30);
//-----------------------------------------------------------------------------------------@

    RBox1 = new RBox(1090, 330, 30, 30);
    RBox2 = new RBox(1120, 330, 30, 30);
    RBox3 = new RBox(1150, 330, 30, 30);
    RBox4 = new RBox(1180, 330, 30, 30);
    RBox5 = new RBox(1210, 330, 30, 30);
    RBox6 = new RBox(1060, 330, 30, 30);
    RBox7 = new RBox(1030, 330, 30, 30);
    RBox8 = new RBox(1000, 330, 30, 30);
    RBox9 = new RBox(970, 330, 30, 30);
    LBBox1 = new LBBox(1075, 300, 30, 30);
    LBBox2 = new LBBox(1105, 300, 30, 30);
    LBBox3 = new LBBox(1135, 300, 30, 30);
    LBBox4 = new LBBox(1165, 300, 30, 30);
    LBBox5 = new LBBox(1195, 300, 30, 30);
    LBBox6 = new LBBox(1045, 300, 30, 30);
    LBBox7 = new LBBox(1015, 300, 30, 30);
    LBBox8 = new LBBox(985, 300, 30, 30);
    RBox10 = new RBox(1090, 270, 30, 30);
    RBox11 = new RBox(1120, 270, 30, 30);
    RBox12 = new RBox(1150, 270, 30, 30);
    RBox13 = new RBox(1180, 270, 30, 30); 
    RBox14 = new RBox(1060, 270, 30, 30);
    RBox15 = new RBox(1030, 270, 30, 30);
    RBox16 = new RBox(1000, 270, 30, 30);
    LBBox9 = new LBBox(1075, 240, 30, 30);
    LBBox10 = new LBBox(1045, 240, 30, 30);
    LBBox11 = new LBBox(1015, 240, 30, 30);
    LBBox12 = new LBBox(1105, 240, 30, 30);
    LBBox13 = new LBBox(1135, 240, 30, 30);
    LBBox14 = new LBBox(1165, 240, 30, 30);
    RBox17 = new RBox(1090, 210, 30, 30);
    RBox18 = new RBox(1120, 210, 30, 30);
    RBox19 = new RBox(1150, 210, 30, 30);
    RBox20 = new RBox(1060, 210, 30, 30);
    RBox21 = new RBox(1030, 210, 30, 30);
    LBBox15 = new LBBox(1075, 180, 30, 30);
    LBBox16 = new LBBox(1105, 180, 30, 30);
    LBBox17 = new LBBox(1135, 180, 30, 30);
    LBBox18 = new LBBox(1045, 180, 30, 30);
    RBox22 = new RBox(1090, 150, 30, 30);
    RBox23 = new RBox(1120, 150, 30, 30);
    RBox24 = new RBox(1060, 150, 30, 30);
    LBBox19 = new LBBox(1075, 120, 30, 30);
    LBBox20 = new LBBox(1105, 120, 30, 30);  
    RBox25 = new RBox(1090, 90, 30, 30);

//-----------------------------------------------------------------------------------------@

    OrigPolygon = new Polygon(width/2, height/2, 30);
    PolySlingShot = new SlingShotT2(OrigPolygon.body, {x:675, y:350});

}

function draw(){
    rectMode(CENTER);
    background(color(0, 89, 255));

    Engine.update(engine);
    
    BaseGround.display();
    ShelfGround.display();
    ShelfGround2.display();

    OrigPolygon.display();
    PolySlingShot.display();
//-----------------------------------------------------------------
    PBox1.display();
    PBox1.Pscore();
    PBox2.display();
    PBox2.Pscore();
    PBox3.display();
    PBox3.Pscore();
    PBox4.display();
    PBox4.Pscore();
    PBox5.display();
    PBox5.Pscore();
    PBox6.display();
    PBox6.Pscore();
    PBox7.display();
    PBox7.Pscore();
    YBox1.display();
    YBox1.Yscore();
    YBox2.display();
    YBox2.Yscore();
    YBox3.display();
    YBox3.Yscore();
    YBox4.display();
    YBox4.Yscore();
    YBox5.display();
    YBox5.Yscore();
    YBox6.display();
    YBox6.Yscore();
    PBox8.display();
    PBox8.Pscore();
    PBox9.display();
    PBox9.Pscore();
    PBox10.display();
    PBox10.Pscore();
    PBox11.display();
    PBox11.Pscore();
    PBox12.display();
    PBox12.Pscore();
    YBox7.display();
    YBox7.Yscore();
    YBox8.display();
    YBox8.Yscore();
    YBox9.display();
    YBox9.Yscore();
    YBox10.display();
    YBox10.Yscore();
    PBox13.display();
    PBox13.Pscore();
    PBox14.display();
    PBox14.Pscore();
    PBox15.display();
    PBox15.Pscore();
    YBox11.display();
    YBox11.Yscore();
    YBox12.display();
    YBox12.Yscore();
    PBox16.display();
    PBox16.Pscore();
//------------------------------------------------------------------

    RBox1.display();
    RBox1.Rscore();
    RBox2.display();
    RBox2.Rscore();
    RBox3.display();
    RBox3.Rscore();
    RBox4.display();
    RBox4.Rscore();
    RBox5.display();
    RBox5.Rscore();
    RBox6.display();
    RBox6.Rscore();
    RBox7.display();
    RBox7.Rscore();
    RBox8.display();
    RBox8.Rscore();
    RBox9.display();
    RBox9.Rscore();
    LBBox1.display();
    LBBox1.LBscore();
    LBBox2.display();
    LBBox2.LBscore();
    LBBox3.display();
    LBBox3.LBscore();
    LBBox4.display();
    LBBox4.LBscore();
    LBBox5.display();
    LBBox5.LBscore();
    LBBox6.display();
    LBBox6.LBscore();
    LBBox7.display();
    LBBox7.LBscore();
    LBBox8.display();
    LBBox8.LBscore();
    RBox10.display();
    RBox10.Rscore();
    RBox11.display();
    RBox11.Rscore();
    RBox12.display();
    RBox12.Rscore();
    RBox13.display();
    RBox13.Rscore();
    RBox14.display();
    RBox14.Rscore();
    RBox15.display();
    RBox15.Rscore();
    RBox16.display();
    RBox16.Rscore();
    LBBox9.display();
    LBBox9.LBscore();
    LBBox10.display();
    LBBox10.LBscore();
    LBBox11.display();
    LBBox11.LBscore();
    LBBox12.display();
    LBBox12.LBscore();
    LBBox13.display();
    LBBox13.LBscore();
    LBBox14.display();
    LBBox14.LBscore();
    RBox17.display();
    RBox17.Rscore();
    RBox18.display();
    RBox18.Rscore();
    RBox19.display();
    RBox19.Rscore();
    RBox20.display();
    RBox20.Rscore();
    RBox21.display();
    RBox21.Rscore();
    LBBox15.display();
    LBBox15.LBscore();
    LBBox16.display();
    LBBox16.LBscore();
    LBBox17.display();
    LBBox17.LBscore();
    LBBox18.display();
    LBBox18.LBscore();
    RBox22.display();
    RBox22.Rscore();
    RBox23.display();
    RBox23.Rscore();
    RBox24.display();
    RBox24.Rscore();
    LBBox19.display();
    LBBox19.LBscore();
    LBBox20.display();
    LBBox20.LBscore();
    RBox25.display();
    RBox25.Rscore();

//--------------------------------------------------------------------------------@
    
    fill(color(255));
    textSize(25);
    text("Score : " + score, 50, 50);
    textSize(12);
    text("Here, you earn score by knocking down the boxes", 50, 85);
    textSize(12);
    text("Each coloured box has its own score-reward!", 50, 100);

    textSize(14);
    fill(color(255, 255, 255));
    text("Press, hold and release your mouse to release the ball !", 540, 50);
    fill(color(255, 125, 0));
    text("Try hitting the stacked boxes !", 600, 70);
    fill(color(255, 255, 0));
    text("Press SPACE to reset the ball, F5 to reset completely", 550, 100);
    
}

function mouseDragged() {
   Matter.Body.setPosition(OrigPolygon.body, {x:mouseX, y:mouseY});

}

function mouseReleased() {
    PolySlingShot.fly();

}

function keyPressed () {
if (keyCode === 32) {
    PolySlingShot.comeBack(OrigPolygon.body);
}
}

    
async function getbgImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dt = responseJSON.datetime;
    var hr = dt.slice(11,13); //2020-12-11T18:14:52.521865+05:30
    console.log(response);
    
}

