input.onButtonPressed(Button.A, function () {
    if (input.temperature() == 20 || (input.temperature() == 21 || input.temperature() == 22)) {
        basic.showNumber(23)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        robotbit.MotorStopAll()
    } else if (input.temperature() == 24 || input.temperature() == 25) {
        basic.showNumber(24)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        robotbit.MotorStopAll()
    } else if (input.temperature() == 26 || (input.temperature() == 27 || (input.temperature() == 28 || input.temperature() == 29))) {
        basic.showNumber(28)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        robotbit.MotorStopAll()
    } else if (input.temperature() == 30 || (input.temperature() == 31 || input.temperature() == 32)) {
        basic.showNumber(32)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        robotbit.MotorStopAll()
    } else if (input.temperature() > 32) {
        for (let index = 0; index < 10; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("HOT!")
        robotbit.MotorRun(robotbit.Motors.M1A, 111)
    }
})
input.onButtonPressed(Button.B, function () {
    robotbit.MotorRun(robotbit.Motors.M1A, 148)
})
input.onButtonPressed(Button.AB, function () {
    robotbit.MotorStopAll()
})
let strip: neopixel.Strip = null
let TEMP = 0
let SWITCHER = 0
strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
strip.clear()
strip.show()
robotbit.MotorStopAll()
basic.showIcon(IconNames.Yes)
/**
 * This example derived from Paul's code uses RobotBit extension to control the motor 
 * 
 * but any motor controller should work if the appropriate extension is installed & the blocks altered accordingly
 * 
 * Currently the motor ONLY turns if the temperature detected is above 30°c - change the SWITCH statements to suit your application
 * 
 * I have also left the previous BUTTON A test 
 * 
 * Also Press B to turn motor ON manually
 * 
 * Press A+B to turn motor off manually 
 * 
 * but bear in mind the FOREVER loop may over-ride this
 */
basic.forever(function () {
    SWITCHER = input.temperature()
    basic.showNumber(SWITCHER)
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
        
        break;
    
    }
    }
if (TEMP == 23) {
        basic.showNumber(23)
        strip.showColor(neopixel.colors(NeoPixelColors.Purple))
        robotbit.MotorStopAll()
    } else if (TEMP == 24) {
        basic.showNumber(24)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        robotbit.MotorStopAll()
    } else if (TEMP == 28) {
        basic.showNumber(28)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        robotbit.MotorStopAll()
    } else if (TEMP == 32) {
        basic.showNumber(32)
        strip.showColor(neopixel.colors(NeoPixelColors.Orange))
        robotbit.MotorStopAll()
    } else if (input.temperature() >= 39) {
        for (let index = 0; index < 10; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(100)
            strip.showColor(neopixel.colors(NeoPixelColors.Black))
            basic.pause(100)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showString("HOT!")
        robotbit.MotorRun(robotbit.Motors.M1A, 111)
    }
})
