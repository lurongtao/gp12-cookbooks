import styled from 'styled-components'

function wrap(is_wrap = true) {
  if (is_wrap) {
    return `
      word-wrap: break-word;
      word-break: break-all;
    `
  } else {
    return `
      white-space: nowrap;
    `
  }
}

function ellipsis({width='100%', line_clamp=1, comp}) {
  return styled(comp) `
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${width};
    ${
      line_clamp > 1 ? `
        display: -webkit-box !important;
        -webkit-line-clamp: ${line_clamp};
        flex-direction: column;
        ${wrap()}
      ` : 
      `
        ${wrap(false)}
      `
    }
  `
}

export default ellipsis