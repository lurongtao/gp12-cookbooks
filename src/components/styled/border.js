import styled from 'styled-components'

const border = ({width='1px', style='solid', color='#ccc', radius=0, comp}) => {
  return styled(comp) `
    position: relative;
    border-radius: ${radius};
    &::after {
      /* 用以解决边框layer遮盖内容 */
      pointer-events: none;
      position: absolute;
      z-index: 999;
      top: 0;
      left: 0;
      /* fix当元素宽度出现小数时，边框可能显示不全的问题 */
      content: "";
      border-color: ${color};
      border-style: ${style};
      border-width: ${width};
      @media screen and (max--moz-device-pixel-ratio: 1.49), (-webkit-max-device-pixel-ratio: 1.49),(max-device-pixel-ratio: 1.49), (max-resolution: 143dpi), (max-resolution: 1.49dppx) {
        width: 100%;
        height: 100%;
        border-radius: ${radius}px;
      }
      @media screen and (min--moz-device-pixel-ratio: 1.5) and (max--moz-device-pixel-ratio: 2.49),(-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49),(min-device-pixel-ratio: 1.5) and (max-device-pixel-ratio: 2.49),(min-resolution: 144dpi) and (max-resolution: 239dpi),(min-resolution: 1.5dppx) and (max-resolution: 2.49dppx) {
        width:200%;
        height: 200%;
        transform: scale(.5);
        border-radius: ${radius * 2}px;
      }
      @media screen and (min--moz-device-pixel-ratio: 2.5),(-webkit-min-device-pixel-ratio: 2.5),(min-device-pixel-ratio: 2.5),(min-resolution: 240dpi),(min-resolution: 2.5dppx) {
        width: 300%;
        height: 300%;
        transform: scale(.3333333);
        border-radius: ${radius * 3}px;
      }
      transform-origin: 0 0;
    }
  `
}

export default border