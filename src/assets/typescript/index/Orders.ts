import RenderEngine from './virtualEngines/RenderEngine'

export default class Orders{
  Render: RenderEngine

  constructor(Render: RenderEngine){
    this.Render = Render
  }

  call(order: string){ 
    switch(order){
      case 'brightness':

        break
      case 'platform':
        break
      default:
    }
  }
}