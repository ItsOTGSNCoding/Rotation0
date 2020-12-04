hummingbird.startHummingbird()
basic.clearScreen()
basic.forever(function () {
    hummingbird.setPositionServo(FourPort.One, 180)
    basic.pause(1000)
    hummingbird.setPositionServo(FourPort.One, 73)
    basic.pause(3000)
})
