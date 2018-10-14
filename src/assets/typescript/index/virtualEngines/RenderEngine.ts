export default class RenderEngine{
  Ctx: CanvasRenderingContext2D

  constructor(ctx: CanvasRenderingContext2D){
    this.Ctx = ctx;
  }

  drawDot(x: number, y: number, color: string = 'rgb(0, 0, 0)'){
    this.Ctx.fillStyle = color
    this.Ctx.fillRect(x, y, 1, 1)
  }

  fillScreen(color: string = 'rgb(0, 0, 0)'){
    this.Ctx.fillStyle = color
    this.Ctx.fillRect(0, 0, 160, 128)
  }
}