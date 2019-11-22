
export default class Personnage{

    /**
     * 
     * @param {*} id
     * @param {*} name 
     * @param {*} race 
     * @param {*} quality 
     * @param {*} victory 
     * @param {*} loose 
     * @param {*} degats 
     * @param {*} pv 
     * @param {*} img 
     * @param {*} block 
     */
    constructor (id,name, race, quality, victory, loose, degats, pv, img, block){

        this.id = id;
        this.name = name;
        this.race = race;
        this.quality = quality;
        this.victory = victory;
        this.loose = loose;
        this.degats = degats;
        this.pv = pv;
        this.img = img;
        this.block = block;
    }


}