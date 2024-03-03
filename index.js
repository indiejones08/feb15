
const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')
canvas.width= 1024;
canvas.height=574;



const s1= `<p>Sarah Ann Khan. 2 years? thats like 731 days. thats like 17532 hours. thats like 1052000 minutes. 1052000 of constant yapping. jk lol.
to be honest with you man, im not saying that corny stuff like 'oh i love you so much babe im so happy to be with you' blahblahblah all that corny stuff. it makes me sick to my stomach.
but lemme give you some lore. </p>
`
const s2= `
<p>i remember when we went to chick fil together for the first time and i started talking about how huge my cock was. what the fuck is wrong with me?
and then i said how i was looking for an fwb. what the fuck is wrong with me? yeah sometimes i think about that and it keeps me up at night. but then i remember
that we're dating anyways so it doesnt really matter. it would be embarassing if we were broken up. </p>
`
const s3= `
<p> anywho, enjoy this bootleg mario run i made for you. i hope you like it. <3
</p>
`
const pop1p1 = `<p>you remember that one time freshman year when we went to the library and we were in this study room but then this guy
kicked us out. and i jokingly offered him money for the room and he said no and then yapped about how he books the rooms every week in advance. and then i was 
like "oh damn, every week? how?" and he said "its called having friends 🤓". present day me would not have let that slide. i would rock his shit.
anywho, heres some more lore.</p>
 `
const pop1p2= `<p> as a kid, i'd look at the stares from my humble village in bangladesh, wondering what the vast universe had in hand for 
humanity. i would count the hundreds of stars with my cousins that lit up the sky and stare in amazement, making me dream of the beauty that makes our world. each star would send
a tingly sensation of shockwave down my spine, leaving me in awe of how far our universe has come. when i look into your eyes, i see a thousand more stars, each making me dream of the beautiful world you make up. every one of 
your stars sends a shockwave down my spine, leaving me in awe of how far you and i have come. they say stars tell us about our universe's
past, helping us better understand how our universe works. the stars in your eyes tells me of the future, tells me of the woman whom i will love forever. </p>
<img src='./img/stars.gif' alt="stars" style='width: 100%;max-height:500px'>`
const pop2p1=`<p>enough about the stars man, lets talk about stuff thats relevant. would you rather get $500,000 or dinner with Jay-Z?
its a pretty easy question. </p>
<img src='./img/dinnerwjayz.png' alt="jayz" style='width: 100%;max-height:400px'>
`
const pop2p2=`<p>Speaking of dinner, would you prefer italian or mexican?</p>
<ul>
<li>
  <input type="radio" id="f-option" name="selector">
  <label for="f-option">italian</label>
  
  <div class="check"></div>
</li>

<li>
  <input type="radio" id="s-option" name="selector">
  <label for="s-option">mexican</label>
  
  <div class="check"><div class="inside"></div></div>
</li>
</ul>
`
const pop3p1=`<p>silly dance break</p>
<img src='./img/sillydance.gif' alt="sillydance" style='max-height:600px; justify-content: center;left: 10px;'>
`
const pop4p1=`<p>you know you introduced me to a lot of white people foods. like olive garden, pasta, froyo, crepes, and some other stuff.
olive garden was fire i cant lie. i still think its funny how the waitress came up to me and asked who was winning, damn well knowing she had no idea
what i was watching. what was i watching? i cant really remember. but that unlimited bread was fire. 
</p>
<p>
it was a cute date ngl. i had fun. 
</p
`
const pop4p2=`<p>now i want you to pick between option 1 or option 2</p>
<ul>
<li>
  <input type="radio" id="f-option" name="selector">
  <label for="f-option">1</label>
  
  <div class="check"></div>
</li>

<li>
  <input type="radio" id="s-option" name="selector">
  <label for="s-option">2</label>
  
  <div class="check"><div class="inside"></div></div>
</li>
</ul>
`
const f1=`<p>well that was the end of it. you finished the run. congrats ig. i fr didnt think you could do it but you did (im joking). i let tenzing
 test run this and he did not do well, so i hope it wasnt too hard. but maybe it was too easy for you. idk im gonna have to ask you whenever we talk about this.
good luck on that bio test, i know youll do great.</p>
`
const f2=`<p>oh, and also happy 2 year. 2 years! thats longer than parrivash has been alive. isn't that crazy? that little goblin
was just a spermcell floating around in someone's balls ( i think, idrk how science works ) when we were getting busy in B-106. </p>
<p>
anywho, i am happy we reached two years. to celebrate, we will have a ton of (anal?) sex! jkjk. but no i am happy. i hope we can share many more years,
 months, days, hours, and minutes together. you're an incredible person who also happens to be physically attrative at the same time. 
 happy anniversary, meri jaan. 👩🏻‍❤️‍💋‍👨🏽
</p>

`




let background_music= new Audio('./img/Gossip-Girl-Theme-Song.mp3')
background_music.volume=.7
let death_sound= new Audio('./img/hellnaw.mp3')
let popup_sound= new Audio('./img/popupsound.wav')
let finish_sound=new Audio('./img/outrosong.mp3')
let deadman= new Audio('./img/deadman.mp3')
const gravity = .76

class Platform{
    constructor({x,y, image}){
        this.position = {
            x,
            y,
            image: '',
        }
        this.image= image
        this.width=image.width
        this.height=image.height
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y)
    }
}

class FallenTile{
    constructor({x,y, image}){
        this.position = {
            x,
            y,
            image: '',
        }
        this.image= image
        this.width=250
        this.height=117
        this.fallen=false
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y, this.width, this.height)
    }
    update(){
        if(this.fallen&& this.position.y<800){
            this.position.y+=3.5+gravity
        }
    }
}

class GenericObject{
    constructor({x,y, image}){
        this.position = {
            x,
            y,
            image: ''
        }
        this.image= image
        this.width=image.width
        this.height=image.height
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y)
    }
}

class CheckPoint{
    constructor({x,y}){
        this.position = {
            x,
            y,
            image: ''
        }
        this.image= pole
        this.width=80
        this.height=400
        this.distance=x
    }

    draw(){
        c.drawImage(this.image, this.position.x,this.position.y, this.width, this.height)
    }
}


class Prop{
    constructor({x,y, image, content, maxPage}){
        this.position = {
            x,
            y,
        }
        this.image= image
        this.width=150
        this.height=70
        this.content= content
        this.maxPage=maxPage
    }

    draw(){
        // c.clearRect(0,0,canvas.width, canvas.height)
        c.drawImage(this.image, this.position.x,this.position.y, this.width, this.height)
    }
}

class Bullet {
    constructor({ x, y, image, speed }) {
        this.position = {
            x,
            y,
            image: ''
        }
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.speed={
            
            slow:{
                pace: .07,
                frames: 1.08
            },
            fast:{
                pace:4.5,
                frames:1.08
            }
        }
        
        this.curSpeed = speed=='fast' ? this.speed.fast : this.speed.slow
        this.image = image;
        this.width = 68;
        this.height = 68;
        this.frames = 1;
    }
    draw() {
        c.drawImage(
            this.image,
            30.29*this.frames,
            0,
            30.29,
            32,
             this.position.x,
             this.position.y,
             this.width,
             this.height
             )
    }

}

class Goomba {
    constructor({ x, y, image, speed }) {
        this.position = {
            x,
            y,
            image: ''
        }
        this.velocity = {
            x: 0,
            y: 0,
        }

        this.speed={
            
            slow:{
                pace: .07,
                frames: 1.08
            },
            fast:{
                pace:3.7,
                frames:1.08
            }
        }
        
        this.curSpeed = speed=='fast' ? this.speed.fast : this.speed.slow
        this.currentSprite = 'walk';
        this.image = image;
        this.width = 100;
        this.height = 73.2;
        this.frames = 0;
    }
    draw() {
        c.drawImage(
            this.image,
            193.66*this.frames,
            0,
            193.66,
            161,
             this.position.x,
             this.position.y,
             this.width,
             this.height
             )
    }
    update() {
        this.frames+=this.curSpeed.frames;
        if (this.frames > 2 && this.currentSprite === 'walk') {
            this.frames = 0;
        } else if (this.frames !== 2 && this.currentSprite === 'dead') {
            this.frames = 2;
        }

        this.draw();

    }
}


function createImage(src){
    const image = new Image()
    image.src=src
    return image
}
function showPopUp(prop){
    background_music.pause();
    if(prop.content[0]==pop3p1)
    deadman.play()
    let index=0
    const closeModalButtons = document.querySelectorAll('[data-close-button]')
    const overlay = document.getElementById('overlay')
    const next= document.getElementById('next')
    next.style.display='block'

    const textArea= document.getElementById("text-content")
    textArea.innerHTML=prop.content[index]


    overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active')
    modals.forEach(modal => {
        closeModal(modal)
    })
    
})
console.log(prop.content)
next.addEventListener('click', ()=>{
    index++;
    if(index<prop.maxPage) {
        console.log(prop)
        textArea.innerHTML=prop.content[index]
        console.log(prop.content[index])

    }
    else if(index>=prop.maxPage-1)next.style.display='none'
})

    closeModalButtons.forEach(button => {
    goombaPause=false
    button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal)
    })
    })

    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')

    function closeModal(modal) {
        deadman.pause();
        finish_sound.pause()
    background_music.play()
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
    }
}

let spriterunleft = new Image()
spriterunleft.src='./img/spriteRunLeft.png'
let spriterunright = new Image()
spriterunright.src='./img/spriteRunRight.png'
let spritestandright = new Image()
spritestandright.src='./img/spriteStandRight.png'
let spritestandleft = new Image()
spritestandleft.src='./img/spriteStandLeft.png'

class Player {
    constructor(){
        this.speed=10
        this.position = {
            x: 100,
            y:100
        }
        this.velocity={
            x:0,
            y:0,
        }
        this.width=66
        this.height=150
        this.image=spritestandright
        this.frames=0
        this.sprites={
            stand:{
                right: spritestandright,
                left: spritestandleft,
                cropWidth:177,
                width: 66,

            },
            run:{
                right: spriterunright,
                left: spriterunleft,
                cropWidth: 341,
                width: 127.875
            }
}
    this.currentSprite= this.sprites.stand.right
    this.currentCropWidth=177
    }

    draw(){
        c.drawImage(
            this.currentSprite,
            this.currentCropWidth*this.frames,
            0,
            this.currentCropWidth,
            400,
             this.position.x,
             this.position.y,
             this.width,
             this.height
             )


       }

    update(){
        this.frames++
        if(this.frames>59&&(this.currentSprite=== this.sprites.stand.right||this.currentSprite===this.sprites.stand.left)) this.frames=0
        else if(this.frames> 29 && (this.currentSprite ===this.sprites.run.right||this.currentSprite===this.sprites.run.left)) this.frames=0
        this.draw()
        this.position.x+=this.velocity.x
        this.position.y+=this.velocity.y
        if(this.position.y + this.height + this.velocity.y<=canvas.height)
        this.velocity.y+= gravity
    
    }
}
let platformimg = new Image()
platformimg.src='./img/platform.png'
let hills = new Image()
hills.src='./img/hills.png'
let background = new Image()
background.src='./img/background.png'
let smalltall = new Image()
smalltall.src='./img/platformSmallTall.png'
let videoplay= new Image()
videoplay.src='./img/button.png'
let goombaimage = new Image()
goombaimage.src='./img/goombas.png'
let bulletbill= new Image()
bulletbill.src='./img/bulletbill.png'
let fallenTile= new Image()
fallenTile.src='./img/fallenTile.jpg'
let pole= new Image()
pole.src='./img/pole2.png'
let startbackground= new Image()
startbackground.src= './img/startbackground.gif'


let player
let finished=false;
let play=false;
let platforms =[]
let props=[]
let goombas=[]
let finishline=[]
let fallenTiles= []
let bullets = []
let showPop= false
let checkpoints=[]
let goombaPause=false
let setCheckPoint=null
let GenericObjects= []
let keys = {
    right: {
        pressed: false
    },
    left:{
        pressed:false
    }
}

let scrollOffset= 0
let distance=0

const startProp=new Prop({x:platformimg.width*3+1000, y: -10, image: videoplay, content: [s1,s2, s3], maxPage:3})
const finishedProp=new Prop({x:platformimg.width*3+1000, y: -10, image: videoplay, content: [f1,f2], maxPage:2})

function init(){
platformimg = new Image()
platformimg.src='./img/platform.png'
 hills = new Image()
hills.src='./img/hills.png'
 background = new Image()
background.src='./img/background.png'

 player = new Player()

checkpoints=[new CheckPoint({x: platformimg.width*10+1300, y: 470-350}),new CheckPoint({x: platformimg.width*17+1360, y: 470-350})]
finishline= [new CheckPoint({x: platformimg.width*32+1150, y: 470-350})]
 platforms =[new Platform({x:-1, y:470, image:platformimg }), new Platform({x:platformimg.width-2, y:470, image: platformimg}),
new Platform({x:platformimg.width*2+200, y: 470, image: platformimg}), new Platform({x:platformimg.width*3+400, y: 470, image: platformimg}),
new Platform({x:platformimg.width*4+390, y: 470, image: platformimg}), new Platform({x:platformimg.width*5+600, y: 300, image: smalltall}),
new Platform({x:platformimg.width*6+660, y: 470, image: platformimg}),new Platform({x:platformimg.width*6+657, y: 470, image: platformimg}),
new Platform({x:platformimg.width*7+900, y: 300, image: smalltall}),new Platform({x:platformimg.width*8+900, y: 190, image: smalltall}),
new Platform({x:platformimg.width*10+460, y: 470, image: platformimg}),new Platform({x:platformimg.width*11+380, y: 470, image: platformimg}),
new Platform({x:platformimg.width*12+1300, y: 470, image: platformimg}),new Platform({x:platformimg.width*11+1300, y: 245, image: smalltall})
,new Platform({x:platformimg.width*14+1400, y: 470, image: platformimg}), new Platform({x:platformimg.width*13+1450, y: 190, image: smalltall}),
new Platform({x:platformimg.width*16+1060, y: 470, image: platformimg}),new Platform({x:platformimg.width*17+1050, y: 470, image: platformimg}),
new Platform({x:platformimg.width*18+1360, y: 470, image: platformimg}),
new Platform({x:platformimg.width*19+1450, y: 470, image: platformimg}), 
new Platform({x:platformimg.width*21+1460, y: 470, image: platformimg}),new Platform({x:platformimg.width*22+1750, y: 470, image: platformimg}),
new Platform({x:platformimg.width*25+1360, y: 470, image: platformimg}),new Platform({x:platformimg.width*30+1250, y: 470, image: platformimg}),
new Platform({x:platformimg.width*31+1250, y: 470, image: platformimg}),
]
props=[new Prop({x:platformimg.width*3+1000, y: 30, image: videoplay, content: [pop1p1,pop1p2], maxPage:2}), new Prop({x:platformimg.width*10+1100, y: 110,image: videoplay, content:[pop2p1, pop2p2], maxPage:2}),
 new Prop({x:platformimg.width*14+1650, y: 180,image: videoplay, content: [pop3p1], maxPage:1}), new Prop({x: platformimg.width*16+1660, y: 180, image: videoplay, content:[pop4p1,pop4p2], maxPage:2})]
goombas=[new Goomba({x: platformimg.width*10+1060, y:470-73.2, image: goombaimage, speed: 'fast' }), new Goomba({x: platformimg.width*10+1360, y:470-73.2, image: goombaimage, speed:'fast' }),
    new Goomba({x: platformimg.width*13+1700, y:180-73.2, image: goombaimage, speed: 'slow' }), new Goomba({x:platformimg.width*19+1560, y: 470-73.2, image: goombaimage, speed: 'fast' }),new Goomba({x:platformimg.width*20+1360, y: 470-73.2, image: goombaimage, speed: 'fast' })
, new Goomba({x:platformimg.width*21+1760, y: 470-73.2, image: goombaimage, speed: 'fast' })]
bullets=[new Bullet({x:2500,y: 500-90, image: bulletbill, speed: 'fast'}), new Bullet({x: platformimg.width*16+1460, y: 370, image: bulletbill, speed: 'fast'}),
new Bullet({x: platformimg.width*16+1680, y: 240, image: bulletbill, speed: 'fast'}),new Bullet({x: platformimg.width*18+1860, y: 260, image: bulletbill, speed: 'fast'}),
new Bullet({x: platformimg.width*19+1980, y: 300, image: bulletbill, speed: 'fast'}), new Bullet({x: platformimg.width*20+1980, y: 310,image: bulletbill, speed: 'fast'}),
new Bullet({x: platformimg.width*21+1980, y: 290, image: bulletbill, speed: 'fast'}),new Bullet({x: platformimg.width*22+1980, y: 380, image: bulletbill, speed: 'fast'}),
new Bullet({x: platformimg.width*23+1980, y: 340, image: bulletbill, speed: 'fast'}),new Bullet({x: platformimg.width*24+1980, y: 320, image: bulletbill, speed: 'fast'}),


]
fallenTiles= [new FallenTile({x:platformimg.width*20+1560, y: 200, image: fallenTile}), new FallenTile({x:platformimg.width*24+1460, y: 220, image: fallenTile}),
    new FallenTile({x:platformimg.width*26+1560, y: 200, image: fallenTile}), new FallenTile({x:platformimg.width*27+1460, y: 150, image: fallenTile}),
    new FallenTile({x:platformimg.width*28+1360, y: 100, image: fallenTile}), new FallenTile({x:platformimg.width*29+1460, y: 220, image: fallenTile}),]
 GenericObjects= [new GenericObject({x:-1,y:-1,image: createImage('./img/background.png')}), new GenericObject({x:0, y:0, image: hills})]
 keys = {
    right: {
        pressed: false
    },
    left:{
        pressed:false
    }
}

 scrollOffset= 0

 if(setCheckPoint!==null){
    platforms.forEach(platform =>{
        platform.position.x-=setCheckPoint
    })
    props.forEach(p=>{
        p.position.x-=setCheckPoint
    })
    finishline.forEach(f=>{
    f.position.x-=setCheckPoint;
})
    fallenTiles.forEach(ft=>{
        ft.position.x-=setCheckPoint
    })
    checkpoints.forEach(c=>{
        c.position.x-=setCheckPoint
    })
    goombas.forEach(g=>{
        g.position.x-=setCheckPoint
    }) 
    bullets.forEach(b=>{
        b.position.x-=setCheckPoint
    })
 }
}
function animate(){
    // showPopUp(startProp)
    requestAnimationFrame(animate)
    c.fillStyle='white'
    c.fillRect(0,0, canvas.width, canvas.height)
    GenericObjects.forEach(go =>{
        go.draw()
    })

    finishline.forEach(f=>{
    f.draw()
})

    checkpoints.forEach(c=>{
        c.draw()
    })
    platforms.forEach(platform =>{
        platform.draw()
    })
    props.forEach(p=>{
        p.draw()
    })
    fallenTiles.forEach(ft=>{
        ft.draw()
    })

    goombas.forEach(g=>{
        g.draw()
        // console.log('d')
    })
    bullets.forEach(b=>{
        b.draw()
    })

    player.update()
    fallenTiles.forEach(ft=>{
        ft.update()
    })

    
    

    if(keys.right.pressed&&player.position.x<400){
        player.velocity.x=player.speed
    }
    else if((keys.left.pressed&& player.position.x>150)||(keys.left.pressed&&scrollOffset===0&&player.position.x>0)){
        player.velocity.x=-player.speed

    }
    else {
        player.velocity.x=0
        if(keys.right.pressed){
            platforms.forEach(platform =>{
                platform.position.x-=player.speed
                distance-=player.speed
            })
            props.forEach(p=>{
                p.position.x-=player.speed
            })
            fallenTiles.forEach(ft=>{
                ft.position.x-=player.speed
            })
            checkpoints.forEach(c=>{
                c.position.x-=player.speed
            })
            finishline.forEach(f=>{
            f.position.x-=player.speed
        })
            goombas.forEach(g=>{
                g.position.x-=player.speed
            }) 
            bullets.forEach(b=>{
                b.position.x-=player.speed
            })
            GenericObjects.forEach(go=>{
                go.position.x-=player.speed*.46
            })
        }
        else if(keys.left.pressed&&scrollOffset>0){
            platforms.forEach(platform =>{
                platform.position.x+=player.speed
                distance+=player.speed

            })
            finishline.forEach(f=>{
            f.position.x+=player.speed
        })
            fallenTiles.forEach(ft=>{
                ft.position.x+=player.speed
            })
            props.forEach(p=>{
                p.position.x+=player.speed
            })
            checkpoints.forEach(c=>{
                c.position.x+=player.speed
            })
            goombas.forEach(g=>{
                g.position.x+=player.speed
            }) 
            bullets.forEach(b=>{
                b.position.x+=player.speed
            }) 
            GenericObjects.forEach(go=>{
                go.position.x+=player.speed*.46
            })           
        }
    }
// collision detection
platforms.forEach(platform =>{
    if(player.position.y+player.height<=platform.position.y &&player.position.y+player.height+player.velocity.y>=platform.position.y
        &&player.position.x+player.width>=platform.position.x &&player.position.x <=platform.position.x+platform.width)
        {
        player.velocity.y=0
    }

})
checkpoints.forEach(c=>{
    if(c.position.x==player.position.x){
        setCheckPoint=c.distance
        console.log('tes', setCheckPoint, distance)
    }
})
//tile detection
fallenTiles.forEach(tile=>{
    if(
        player.position.x < tile.position.x + tile.width &&
        player.position.x + player.width > tile.position.x &&
        player.position.y + player.height > tile.position.y &&
        player.position.y + player.height < tile.position.y + tile.height
      ){
        player.velocity.y=0
        tile.fallen=true
      }
})


bullets.forEach(b=>{
    if(b.position.x-player.position.x<650&&!goombaPause){
        b.position.x-=b.curSpeed.pace
    }
    //bullet collision detection
    if(
        b.position.x < player.position.x + player.width &&
        b.position.x + b.width > player.position.x &&
        b.position.y < player.position.y + player.height &&
        b.position.y + b.height > player.position.y)
        
        {
            death_sound.play()
            init()
        }
    
})
finishline.forEach(f=>{
    if(f.position.x==player.position.x){
    finish_sound.play()
    showPopUp(finishedProp)
    }
})
//goomba collisions and movement
goombas.forEach(g=>{
    if(g.position.x-player.position.x<650&&!goombaPause){
        g.position.x-=g.curSpeed.pace
    }
    //goomba side collision
    if( 
        g.position.x < player.position.x + player.width &&
        g.position.x + g.width > player.position.x &&
        g.position.y < player.position.y + player.height &&
        g.position.y + g.height > player.position.y&&g.currentSprite=='walk')
        {
            death_sound.play()
            init()
        }
    //goomba top collision
    if(
        g.position.y + g.height >= player.position.y &&
        g.position.x < player.position.x + player.width &&
        g.position.x + g.width > player.position.x
    )
    {
        g.currentSprite='dead'
        g.curSpeed.pace=0
    }
    g.update()
    

})


//prop collision detection
props.forEach(prop => {
    const playerBottom = player.position.y + player.height;
    const propTop = prop.position.y;
    const playerRight = player.position.x + player.width;
    const propRight = prop.position.x + prop.width;
    const playerTop = player.position.y;
    const propBottom = prop.position.y + prop.height;
    const playerLeft = player.position.x;
    const propLeft = prop.position.x;

    if (
        playerBottom >= propTop &&
        playerTop <= propBottom &&
        playerRight >= propLeft &&
        playerLeft <= propRight
    ) {
        popup_sound.play()
        showPopUp(prop)
    }
});




//win condition
if(scrollOffset>2000) console.log('you win')

//lose condition
if(player.position.y > canvas.height){
    death_sound.play()
init()
}
}

function beg(prop) {
    background_music.pause();
    let index = 0;

    const overlay = document.getElementById('overlay2');
    const next = document.getElementById('next2');
    const textArea = document.getElementById("text-content2");
    textArea.innerHTML = prop.content[index];

    overlay.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal2.active');
        modals.forEach(modal => {
            close(modal);
        });
    });

    next.addEventListener('click', () => {
        if (index < prop.maxPage - 1) {
            index++;
            textArea.innerHTML = prop.content[index];
        }    
        else if(index>=prop.maxPage-1)next.style.display='none'

    });
    const closeModalButtons = document.getElementsByClassName('close-button2');
    const closeModalButtonsArray = [...closeModalButtons];
    
    closeModalButtonsArray.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal2');
            close(modal);
        });
    });
    

    function close(modal) {
        background_music.play();
        document.getElementById('canvas').style.background = 'none';
        index = 0;
        if (modal == null) return;
        modal.classList.remove('active');
        overlay.classList.remove('active');
        init();
        animate();
    }

    const modal = document.getElementById('modal2');
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}



beg(startProp)


window.addEventListener('keydown', (e)=>{
    if(e.key=='ArrowLeft'){
        // if(player.position.x>canvas.width)
        keys.left.pressed=true
        player.currentSprite=player.sprites.run.left
        player.currentCropWidth= player.sprites.run.cropWidth
        player.width= player.sprites.run.width
        scrollOffset-=player.speed

    }
    if(e.key=='ArrowRight'){
        keys.right.pressed=true
        player.currentSprite=player.sprites.run.right
        player.currentCropWidth= player.sprites.run.cropWidth
        player.width= player.sprites.run.width
        scrollOffset+=player.speed
        background_music.play()
    }
    if(e.key=='ArrowUp'){
        if(player.velocity.y>-4.8&&player.velocity.y<12){
        player.velocity.y-= 13
        }
    }

})

window.addEventListener('keyup', (e)=>{
    if(e.key=='ArrowLeft'){
        keys.left.pressed=false
        player.currentSprite=player.sprites.stand.left
        player.currentCropWidth= player.sprites.stand.cropWidth
        player.width= player.sprites.stand.width
    }
    if(e.key=='ArrowRight'){
        keys.right.pressed=false
        player.currentSprite=player.sprites.stand.right
        player.currentCropWidth= player.sprites.stand.cropWidth
        player.width= player.sprites.stand.width
    }

})