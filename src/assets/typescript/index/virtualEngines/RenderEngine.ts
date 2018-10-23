import RamEngine from "./RamEngine";
import Utils from "../Utils";

export default class RenderEngine{
  Ctx: CanvasRenderingContext2D
  Util: Utils
  Ram: RamEngine

  constructor(ctx: CanvasRenderingContext2D, ram: RamEngine){
    this.Ctx = ctx
    this.Ram = ram
    this.Util = new Utils()
  }

  drawDot(x: number, y: number, color: string = 'rgb(0, 0, 0)'){
    let convertedColor: string = this.Util.convertUint16565ToStr888(this.Util.convertStr888ToUint16565(color))

    this.Ctx.fillStyle = convertedColor
    this.Ctx.fillRect(x, y, 1, 1)
    this.Ram.setVGRAM(x, y, 1, 1, this.Util.convertStr888ToUint16565(color))
  }

  fillScreen(color: string = 'rgb(0, 0, 0)'){
    let convertedColor: string = this.Util.convertUint16565ToStr888(this.Util.convertStr888ToUint16565(color))

    this.Ctx.fillStyle = convertedColor
    this.Ctx.fillRect(0, 0, 160, 128)
    this.Ram.setVGRAM(0, 0, 160, 128, this.Util.convertStr888ToUint16565(color))
  }

  drawVGRAM(){
    let cnt: number = 0

    for(var i = 0; i < 128; i++){
      for(var j = 0; j < 160; j++){
        this.drawDot(j, i, this.Util.convertUint16565ToStr888(this.Ram.read16(cnt)))
        cnt += 1
      }
    }
  }
}