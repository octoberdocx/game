def on_button_pressed_a():
    character.change(LedSpriteProperty.X, -1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    character.change(LedSpriteProperty.X, 1)
input.on_button_pressed(Button.B, on_button_pressed_b)

character: game.LedSprite = None
plane = game.create_sprite(0, 0)
character = game.create_sprite(2, 4)