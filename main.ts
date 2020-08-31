bluetooth.startIOPinService()
basic.forever(function () {
    basic.showNumber(Sensor.lightLevel(AnalogPin.P0))
    basic.pause(500)
    basic.showNumber(Sensor.tempC(AnalogPin.P1))
    basic.pause(500)
    basic.showNumber(Sensor.soundLevel(AnalogPin.P2))
    basic.pause(500)
})
