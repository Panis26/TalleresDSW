export class Serie{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    info: string;
    link: string;
    img: string;

    constructor(id:number,name:string,channel:string,seasons:number,
                info:string,link:string,img:string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.info = info;
        this.link = link;
        this.img = img;
    }
}