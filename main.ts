input.onPinPressed(TouchPin.P0, function () {
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    character.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite = game.createSprite(sprite.get(LedSpriteProperty.X), sprite.get(LedSpriteProperty.Y))
})
input.onButtonPressed(Button.B, function () {
    character.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let character: game.LedSprite = null
character = game.createSprite(2, 4)
