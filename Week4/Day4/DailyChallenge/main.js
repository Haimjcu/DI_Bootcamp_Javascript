class Video {
    constructor(title="",uploader="",time=0) {
        this.title=title;
        this.uploader=uploader;
        this.time=time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`)
    }
}

const firstVideo = new Video("X-men","Jon",5);
firstVideo.watch();

const secondVideo = new Video("Lord of the Rings","Betty",15);
secondVideo.watch();