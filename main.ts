let increase = 0
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f 1 1 f f f 1 1 f f . . 
    . . f f f f f 1 f 1 f f f f f . 
    . . f f f f f f f f f f f f f . 
    . . f f f 1 1 f f f 1 1 f f f . 
    . . f f f f 1 f f f 1 f f f f . 
    . . f f f f f f f f f f f f f . 
    . . f f f f f f f f f f f f f . 
    . . f f 1 f f f f f f f 1 f f . 
    . . . f f 1 f f f f f 1 f f . . 
    . . . . f f 1 1 1 1 1 f f . . . 
    . . . . . f f f f f f f . . . . 
    `, SpriteKind.Player)
for (let index = 0; index < 10; index++) {
    pause(200)
    mySprite.x += 5 + increase
    pause(200)
    mySprite.y += 6 + increase
    pause(200)
    mySprite.x += -7 - increase
    pause(200)
    mySprite.y += -8 - increase
    increase += 5
}
