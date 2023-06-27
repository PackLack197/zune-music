controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    thisSong = music.createSong(assets.song`into-the-forever`)
    scene.setBackgroundImage(assets.image`into-the-forever-background`)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.stopAllSounds()
    if (thisSong) {
        music.play(thisSong, music.PlaybackMode.LoopingInBackground)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    thisSong = music.createSong(assets.song`once-more`)
    scene.setBackgroundImage(assets.image`once-more-background`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    thisSong = music.createSong(assets.song`i-am-groot`)
    scene.setBackgroundImage(assets.image`i-am-groot-background`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    thisSong = music.createSong(assets.song`perfect-society`)
    scene.setBackgroundImage(assets.image`perfect-society-background`)
})
let thisSong: music.Playable = null
scene.setBackgroundImage(assets.image`zunebackground`)
