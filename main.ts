basic.forever(function () {
    if (tinkercademy.PIR(DigitalPin.P0)) {
        tinkercademy.LED(DigitalPin.P1, OnOff.On)
    } else {
        tinkercademy.LED(DigitalPin.P1, OnOff.Off)
    }
})
