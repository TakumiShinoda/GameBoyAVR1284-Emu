export default class Utils{
  convertUint8(value: number): number{
    return value > 255 ? (value % 255) - 1 : value
  }

  convertUint16(value: number): number[]{
    let result: number[] = [0, 0]
    let bi: string = ''
    let upper: string = ''
    let lower: string = ''

    value = value > 65535 ? (value % 65535) - 1 : value
    bi = value.toString(2)

    if(bi.length < 16){
      let biLength: number = 16 - bi.length

      for(var i = 0; i < biLength; i++){
        bi = '0' + bi
      }
    }
    upper = bi.slice(0, 8)
    lower = bi.slice(-8)
    result = [parseInt(upper, 2), parseInt(lower, 2)]

    return result
  }

  fillZeros(str: string, fit: number): string{ 
    while(str.length < fit){
      str = '0' + str
    }

    return str
  }

  convertStr888ToUint16565(str: string): number{
    let result: number = 0
    let colorCodes: string = ''
    let colorCodesArray: string[] = []
    let colorCodesConvertedArray: string[] = []
    let colorCodeConvertedBinaryR: string = ''
    let colorCodeConvertedBinaryG: string = ''
    let colorCodeConvertedBinaryB: string = ''
    let colorCodeConvertedBinary: string = ''
 
    if(str.indexOf('rgb(') >= 0){
      colorCodes = str.replace(/\s+/g, '').replace('rgb(', '').replace(')', '')
      colorCodesArray = colorCodes.split(',')
      for(var i = 0; i < 3; i++){
        colorCodesConvertedArray[i] = this.fillZeros(parseInt(colorCodesArray[i]).toString(2), 8)
      }
      colorCodeConvertedBinaryR = colorCodesConvertedArray[0].substring(0, 5)
      colorCodeConvertedBinaryG = colorCodesConvertedArray[1].substring(0, 6)
      colorCodeConvertedBinaryB = colorCodesConvertedArray[2].substring(0, 5)
      colorCodeConvertedBinary = colorCodeConvertedBinaryR + colorCodeConvertedBinaryG + colorCodeConvertedBinaryB
      result = parseInt(colorCodeConvertedBinary, 2)
    }else{
      result = 0
    }

    return result
  }

  convertUint16565ToStr888(color: number): string{
    let checked: number = 0
    let colorBinary: string = ''
    let colorBinaryR: string = ''
    let colorBinaryG: string = ''
    let colorBinaryB: string = ''
    let colorConvertedBinaryR: string = ''
    let colorConvertedBinaryG: string = ''
    let colorConvertedBinaryB: string = ''

    checked = color > 65535 ? (color % 65535) - 1 : color
    colorBinary = this.fillZeros(checked.toString(2), 16)
    colorBinaryR = colorBinary.substring(0, 5)
    colorBinaryG = colorBinary.substring(5, 11)
    colorBinaryB = colorBinary.substring(11, 16)
    colorConvertedBinaryR = (parseInt(colorBinaryR, 2) * (256 / 32)).toString()
    colorConvertedBinaryG = (parseInt(colorBinaryG, 2) * (256 / 64)).toString()
    colorConvertedBinaryB = (parseInt(colorBinaryB, 2) * (256 / 32)).toString()

    return 'rgb(' + colorConvertedBinaryR + ',' + colorConvertedBinaryG + ',' + colorConvertedBinaryB + ')'
  }
}