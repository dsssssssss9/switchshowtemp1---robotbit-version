input.onButtonPressed(Button.A, function () {
    if (input.temperature() == 20 || (input.temperature() == 21 || input.temperature() == 22)) {
        basic.showNumber(23)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    } else if (input.temperature() == 24 || input.temperature() == 25) {
        basic.showNumber(24)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else if (input.temperature() == 26 || (input.temperature() == 27 || (input.temperature() == 28 || input.temperature() == 29))) {
        basic.showNumber(28)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (input.temperature() == 30 || (input.temperature() == 31 || input.temperature() == 32)) {
        basic.showNumber(32)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    } else if (input.temperature() > 32) {
        for (let index = 0; index < 10; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("HOT!")
        pins.analogWritePin(AnalogPin.P3, 1023)
    }
})
let strip: neopixel.Strip = null
let TEMP = 0
let SWITCHER = 0
strip = neopixel.create(DigitalPin.P1, 16, NeoPixelMode.RGB)
strip.show()
basic.forever(function () {
    switch (SWITCHER) {
    case 20:
    case 21:
    case 22:  {  
        TEMP = 23
        break;
    }
    case 24:
    case 25: {
        TEMP = 24
        break;
    }
    case 26:
    case 27:
    case 28:
    case 29: {
        TEMP = 28
        break;
    }
    case 30:
    case 31:
    case 32: {
        TEMP = 39
        pins.analogWritePin(AnalogPin.P3, 1023)
        break;
    }
    default: {
        TEMP = 23
    }
    }
})