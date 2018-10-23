import $ = require('jquery')

import RenderEngine from './virtualEngines/RenderEngine'
import RamEngine from './virtualEngines/RamEngine'
import Utils from './Utils'
import Orders from './Orders'

import '../../css/index/styles.css'

$(document).ready(() => {
  let canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById('display')
  let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d')

  let Ram: RamEngine = new RamEngine() 
  let Render: RenderEngine = new RenderEngine(ctx, Ram) 
  let Util: Utils = new Utils()

  Render.fillScreen('rgb(255, 0, 0)');
  Render.drawDot(100, 100, 'rgb(255, 255, 255)')
  console.log(Ram.Memory)
  // Util.convertStr888ToUint16565('rgb(255, 122, 60)')
  // console.log(Util.convertUint16565ToStr888(64455))

  $.get('../../bundles/conf.txt', (data) => {
    console.log(data);
  }); 
});