import Utils from "../Utils";
import { write } from "fs";

export default class RamEngine{ 
  Memory: number[]
  Util: Utils

  static R_SRAM_L: number = 128000

  //VGRAM
  static R_VGRAM: number = 0
  static R_VGRAM_L: number = 40960 // VGRAM: 0 - 40959 | 40960 Byte

  // VCGRAM
  static R_VCGRAM: number = 40960
  static R_VCGRAM_L: number = 1200 // VCGRAM: 40960 - 42159 | 1200 Byte

  // CORE
  static R_CORERAM: number = 42160
  static R_CORERAM_L: number = 40 // CORERAM: 42160 - 42200 | 40 Byte

  static R_CORE_PLATFORM: number = RamEngine.R_CORERAM // save Platform Name by String | 10 Bytes | 42160 ~ 42169
  static R_CORE_BRIGHTNESS: number = RamEngine.R_CORE_PLATFORM + 10 // 1 Byte | 42170

  static R_CORE_SDINI: number =  RamEngine.R_CORE_BRIGHTNESS + 1 // 1 Byte | 42171
  static R_CORE_RAMINI: number = RamEngine.R_CORE_SDINI + 1 // 1 Byte | 42172
  static R_CORE_LCDINI: number = RamEngine.R_CORE_RAMINI + 1 // 1 Byte | 42173
  static R_CORE_RTCINI: number = RamEngine.R_CORE_LCDINI + 1 // 1 Byte | 42174
  static R_CORE_DFPINI: number = RamEngine.R_CORE_RTCINI + 1 // 1 Byte | 42175

  constructor(){ 
    this.Memory = new Array(128000)
    this.Memory.fill(0)
    this.Util = new Utils()
  }

  setVGRAM(x: number, y: number, w: number, h: number, value: number){
    let first: number = (y * 160) + x + RamEngine.R_VGRAM

    for(var i = 0; i < h; i++){
      for(var j = 0; j < w; j++){
        this.write16(first + j + (i * (160 - 1)), value)
      }
    }
  }

  write16(address: number, value: number){
    let convered: number[] = this.Util.convertUint16(value)

    this.Memory[address * 2] = convered[0]
    this.Memory[(address * 2) + 1] = convered[1]
  }

  writeByte(address: number, value: number){ 
    this.Memory[address] = value
  }
}