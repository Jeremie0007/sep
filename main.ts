namespace SpriteKind {
    export const Buddy = SpriteKind.create()
    export const Rubbish = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, img`myTile1`, function (sprite, location) {
    game.setDialogTextColor(13)
    game.setDialogFrame(img`
        ..66666666666666666666..
        .6699999999999999999966.
        669991111111111111199966
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        669991111111111111199966
        .6699999999999999999966.
        ..66666666666666666666..
        `)
    game.showLongText("Planet saved! Congrats!", DialogLayout.Full)
    game.over(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rubbish, function (sprite, otherSprite) {
    otherSprite.destroy(effects.starField, 200)
    info.changeScoreBy(5)
})
info.onCountdownEnd(function () {
    game.over(false)
})
function createEnemies () {
    Turtle = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ....................ff...fffff....................
        ...................f11f.f69696ff..................
        ..................f7f1ff69696996f.................
        ..................f77779969699696f................
        ...................fffff7969669696f...............
        ......................f7f7ffffff7f................
        .....................f7f77f...f7f7f...............
        .....................f7f777f...f.ff...............
        .....................ff.f777f.....................
        ......................f..ffff.....................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    Dolphin = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ...............ff.................................
        ...............f9f................................
        ..............ff99ffff............................
        .............f96669999f...........................
        ............f9666666119f..........................
        ...........f966666661f9ff.........................
        ...........f6666669611699f........................
        ..........f96666f99ffffff.........................
        ..........f6666ff9ff6f............................
        ..........f666f.ff..f.............................
        ...........f6f....................................
        ...........f6ff...................................
        ............f66f..................................
        ............f6f...................................
        .............f....................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    Crab = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ................ff...ff.ff..ff....................
        ...............f4f..f11f11f.f4f...................
        ..............f44f.f21fff1f.f44f..................
        ..............f444f2444444ff444f..................
        ..............f4422444222422244f..................
        ...............f224f2f44f2f42ff...................
        ................fff4f4ff2f4ff.....................
        ...............f4f4f4ff2f2f4f.....................
        ...............f4f4f4ff2f2f4f.....................
        ................f.f.f..f.f.f......................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Enemy)
    Ghost = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Turtle.sayText("Help me!")
    Dolphin.sayText("")
    Crab.sayText("Argh!")
    Turtle.setPosition(80, 200)
    Dolphin.setPosition(20, 350)
    Crab.setPosition(300, 160)
}
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, img`myTile14`, function (sprite, location) {
    game.setDialogTextColor(15)
    game.setDialogFrame(img`
        ..66666666666666666666..
        .6699999999999999999966.
        669991111111111111199966
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        669991111111111111199966
        .6699999999999999999966.
        ..66666666666666666666..
        `)
    game.showLongText("Doing great! Ready for the next level?", DialogLayout.Full)
    Kiddo.destroy()
    Kitty.follow(Kiddo)
    Kitty.destroy()
    Pumpkin.destroy()
    Bat.destroy()
    Frank.destroy()
    Ghost.destroy()
    Candy.destroy()
    tiles.setTilemap(tilemap`level2`)
    createPlayer()
    createEnemies()
    for (let index = 0; index < 35; index++) {
        Candy3 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Candy3, img`myTile3`)
        tiles.placeOnRandomTile(Candy, img`myTile3`)
    }
})
function createPlayer () {
    Kiddo = sprites.create(img`
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ....................f...f.........................
        .............f.fffffefff..........................
        ..............feeeeeeeef..........................
        .............feeeeeeeeeef.........................
        .............feeedeeeeeef.........................
        .............feedddddddeef........................
        .............feedddddddff.........................
        .............fdedfdddfdf..........................
        .............fdddfdddfdf..........................
        ..............fddddddddf..........................
        ...............fddddddf...........................
        ..............fbffffff............................
        .............fbbbbbbbbf...........................
        .............fdfbbbbbbff..........................
        .............fff666666fdf.........................
        ...............f66ff66fff.........................
        ...............f6f.f66f...........................
        ...............ff...ff............................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        ..................................................
        `, SpriteKind.Player)
    for (let index = 0; index < 1; index++) {
        Kiddo.sayText("Let's save the planet!", 2000, true)
    }
    controller.moveSprite(Kiddo)
    tiles.placeOnRandomTile(Kiddo, assets.tile`transparency16`)
    scene.cameraFollowSprite(Kiddo)
}
scene.onOverlapTile(SpriteKind.Player, img`myTile5`, function (sprite, location) {
    game.setDialogTextColor(13)
    game.setDialogFrame(img`
        ..66666666666666666666..
        .6699999999999999999966.
        669991111111111111199966
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        699911111111111111119996
        669991111111111111199966
        .6699999999999999999966.
        ..66666666666666666666..
        `)
    game.showLongText("Keep on going! One more level left!", DialogLayout.Full)
    Kiddo.destroy()
    Kitty.follow(Kiddo)
    Kitty.destroy()
    Pumpkin.destroy()
    Bat.destroy()
    Frank.destroy()
    Ghost.destroy()
    Candy3.destroy()
    tiles.setTilemap(tilemap`level1`)
    createPlayer()
    createEnemies()
    for (let index = 0; index < 35; index++) {
        Candy2 = sprites.create(img`
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .....................fffff.......................................
            ....................f11221f......................................
            ...................f2122112f.....................................
            ..................f211fff221f....................................
            ..................f22f...f11f....................................
            ..................f12f...f12f....................................
            ..................f11f...f22f....................................
            ...................ff....f21f....................................
            .........................f11f....................................
            .........................f12f....................................
            .........................f22f....................................
            .........................f21f....................................
            .........................f11f....................................
            .........................f12f....................................
            .........................f22f....................................
            .........................f21f....................................
            .........................f11f....................................
            .........................f12f....................................
            .........................f22f....................................
            .........................f21f....................................
            ..........................ff.....................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            .................................................................
            `, SpriteKind.Food)
        tiles.placeOnRandomTile(Candy2, img`myTile16`)
        tiles.placeOnRandomTile(Candy, img`myTile16`)
        tiles.placeOnRandomTile(Candy3, img`myTile16`)
    }
})
function reset () {
    createPlayer()
    createEnemies()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
let Candy2: Sprite = null
let Candy3: Sprite = null
let Candy: Sprite = null
let Frank: Sprite = null
let Bat: Sprite = null
let Pumpkin: Sprite = null
let Kitty: Sprite = null
let Kiddo: Sprite = null
let Ghost: Sprite = null
let Crab: Sprite = null
let Dolphin: Sprite = null
let Turtle: Sprite = null
let Trash = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ...........................ffff...................
    ...........................f77f...................
    ...........................fddf...................
    ..........................fd11df..................
    .........................f11111df.................
    .........................f11111df.................
    .........................f11111df.................
    ..........................fddddf..................
    .........................f11111df.................
    .........................fddddddf.................
    .........................f11111df.................
    .........................fddddddf.................
    .........................f11111df.................
    .........................fddddddf.................
    .........................f11111df.................
    ..........................fddddf..................
    ...........................ffff...................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Rubbish)
let Trash2 = sprites.create(img`
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    ..................................................
    `, SpriteKind.Rubbish)
tiles.setTilemap(tilemap`Level 2`)
game.setDialogFrame(img`
    8888.....88....888....88.88....888....888...8888
    867788..8768..86768..8678768..86768..8678.887768
    8767768.8777886767688777877788676768877788677678
    877677686767787767787767676778776778776786776778
    .8778766677678776778767767767877677876778678778.
    .8677866867668676768667686766867676866766687768.
    ..86668688676886868867688867688686886768686668..
    .888666888888888888888888888888888888888866688..
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87768866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    87777688666666666666666666666666666666668886688.
    867677686666666666666666666666666666666688677778
    .87766786666666666666666666666666666666686776768
    ..877668666666666666666666666666666666668766778.
    ..88888866666666666666666666666666666666866778..
    .867768866666666666666666666666666666666888888..
    86777768666666666666666666666666666666668867768.
    876666886666666666666666666666666666666686777768
    867777686666666666666666666666666666666688666678
    .86776886666666666666666666666666666666686777768
    ..888888666666666666666666666666666666668867768.
    ..87766866666666666666666666666666666666888888..
    .877667866666666666666666666666666666666866778..
    86767768666666666666666666666666666666668766778.
    877776886666666666666666666666666666666686776768
    .88668886666666666666666666666666666666688677778
    ..886668888888888888888888888888888888888666888.
    ..86668686768868688676888676886868867688686668..
    .8677866676686767686676867668676768667686687768.
    .8778768776787767787677677678776778767766678778.
    877677687677877677877676767787767787767686776778
    8767768877788676768877787778867676887778.8677678
    867788.8768..86768..8678768..86768..8678..887768
    8888...888....888....88.88....888....88.....8888
    `)
game.setDialogTextColor(6)
game.showLongText("", DialogLayout.Bottom)
info.setScore(0)
info.setLife(3)
info.startCountdown(420)
createPlayer()
createEnemies()
