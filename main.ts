basic.showIcon(IconNames.Happy)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
        servos.P0.setAngle(180)
        basic.pause(1000)
        servos.P0.setAngle(0)
        basic.pause(1000)
    }
})
