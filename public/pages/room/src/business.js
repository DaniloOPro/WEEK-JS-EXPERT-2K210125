class Business{
    constructor({ room, media, view}){
        this.room = room
        this.media = media
        this.view = view

        this.currentStream = {}
    }
    static initialize(deps){
        const instance = new Business(deps)
        return instance._init()
    }
    async _init(){
        this.currentStream = this.media.getCamera()
        // console.log('init..', this.currentStream)
        this.addVideoStream('test01')
    }

    addVideoStream(userId, stream = this.currentStream){
        const isCurrentId = false
        this.view.renderVideo({
            userId,
            stream,
            isCurrentId
        })
    }
}