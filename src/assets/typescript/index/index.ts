import $ = require('jquery')

import RenderEngine from './virtualEngines/RenderEngine'

import '../../css/index/styles.css'

$(document).ready(() => {
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('display')
  let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d')
  let Render: RenderEngine = new RenderEngine(ctx)

  Render.fillScreen();
  Render.drawDot(100, 100, 'rgb(255, 255, 255)')
});