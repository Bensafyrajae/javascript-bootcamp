class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}


const video1 = new Video("JavaScript Basics", "Alice", 300);
const video2 = new Video("Advanced React", "Bob", 600);

video1.watch();
video2.watch();

