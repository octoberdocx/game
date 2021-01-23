input.onGesture(Gesture.ThreeG, function () {
    game.pause()
})
input.onButtonPressed(Button.A, function () {
    character.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.ScreenUp, function () {
    game.resume()
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(character.get(LedSpriteProperty.X), character.get(LedSpriteProperty.Y))
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
        if (plane.isTouching(bullet)) {
            plane.delete()
        }
    }
})
input.onButtonPressed(Button.B, function () {
    character.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let character: game.LedSprite = null
let plane: game.LedSprite = null
game.setScore(0)
plane = game.createSprite(0, 0)
character = game.createSprite(2, 4)
if (character.isTouching(plane)) {
    game.gameOver()
}
basic.forever(function () {
    basic.pause(250)
    for (let index = 0; index < 4; index++) {
        basic.pause(100)
        plane.change(LedSpriteProperty.X, 1)
        if (plane.get(LedSpriteProperty.X) == 4) {
            plane.set(LedSpriteProperty.Y, 1)
            plane.change(LedSpriteProperty.X, 1)
        }
    }
})
