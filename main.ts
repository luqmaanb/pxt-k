RL0X.config(RL0X.RADIO.RL03, 0)

forever(function () {
    RL0X.sendString("Hello, World!");
})