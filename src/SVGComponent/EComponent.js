import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function EComponent(props) {
  return (
    <Svg
      width={65}
      height={80}
      viewBox="0 0 65 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={12.333} width={40} height={40} rx={20} fill="#330066" />
      <Path
        d="M28.736 26.744v-1.835a2.397 2.397 0 00-1.091-2.003 8.396 8.396 0 01-3.706-7.268 8.515 8.515 0 018.252-8.084 8.395 8.395 0 018.539 8.396 8.395 8.395 0 01-3.718 6.956 2.399 2.399 0 00-1.08 2.003v1.835m-7.196 0h7.196m-7.196 0v3.61a5.997 5.997 0 007.196 0v-3.61"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M29.36 16.372l4.015 4.753-.98-3.667h1.897a.458.458 0 00.458-.623l-1.48-3.667a.482.482 0 00-.458-.293H30.8a.457.457 0 00-.459.623l.88 2.127h-1.49a.459.459 0 00-.37.747z"
        fill="#fff"
      />
      <Path
        d="M14.732 62.08V63h-4.517v-.92h4.517zm-4.289-7.611V63h-1.13v-8.531h1.13zm3.692 3.668v.92h-3.92v-.92h3.92zm.539-3.668v.925h-4.46v-.925h4.46zM16.738 54v9h-1.09v-9h1.09zm3.963 9.117c-.44 0-.841-.074-1.2-.222a2.724 2.724 0 01-.92-.64 2.841 2.841 0 01-.587-.972 3.568 3.568 0 01-.205-1.23v-.246c0-.516.077-.975.229-1.377.152-.407.36-.75.621-1.032.262-.28.559-.494.89-.638a2.557 2.557 0 011.032-.217c.453 0 .844.078 1.172.234.332.157.603.375.814.657.211.277.367.605.469.984.102.375.152.785.152 1.23v.487h-4.734v-.885h3.65v-.082a2.707 2.707 0 00-.175-.82 1.475 1.475 0 00-.47-.657c-.214-.172-.507-.257-.878-.257a1.475 1.475 0 00-1.213.615 2.304 2.304 0 00-.346.744c-.082.293-.123.63-.123 1.014v.246c0 .3.041.584.123.85.086.261.21.492.37.69.163.2.36.356.591.47.235.113.5.17.797.17.383 0 .707-.079.973-.235a2.41 2.41 0 00.697-.627l.656.522c-.136.207-.31.404-.521.591-.211.188-.47.34-.78.457a3.017 3.017 0 01-1.084.176zm5.862-.89c.258 0 .496-.053.715-.159.219-.105.398-.25.539-.433.14-.188.22-.4.24-.639h1.032c-.02.375-.147.725-.381 1.049a2.6 2.6 0 01-.909.78 2.636 2.636 0 01-1.236.292c-.476 0-.892-.084-1.248-.252a2.473 2.473 0 01-.879-.691 3.088 3.088 0 01-.521-1.008 4.256 4.256 0 01-.17-1.213v-.246c0-.426.056-.828.17-1.207a3.08 3.08 0 01.521-1.014c.235-.293.527-.523.879-.691.355-.168.771-.252 1.248-.252.496 0 .93.102 1.3.305.372.199.663.472.874.82.215.344.332.734.352 1.172h-1.032a1.56 1.56 0 00-.222-.71 1.388 1.388 0 00-.516-.503 1.44 1.44 0 00-.756-.193c-.332 0-.611.066-.838.199-.223.129-.4.304-.533.527a2.46 2.46 0 00-.281.733 4.027 4.027 0 00-.082.814v.246c0 .277.027.55.082.82.054.27.146.514.275.733.133.219.31.394.533.527.227.13.508.194.844.194zm5.99-5.567v.832h-3.427v-.832h3.427zm-2.267-1.54h1.084v6.31c0 .215.033.377.1.486.066.11.152.182.257.217.106.035.22.052.34.052.09 0 .184-.007.281-.023.102-.02.178-.035.229-.047l.006.885c-.086.027-.2.053-.34.076a2.589 2.589 0 01-.498.041c-.266 0-.51-.052-.733-.158a1.178 1.178 0 01-.533-.527c-.129-.25-.193-.586-.193-1.008v-6.305zm4.215 2.536V63h-1.084v-6.34h1.055l.029.996zm1.98-1.031l-.005 1.008a1.57 1.57 0 00-.258-.035 2.713 2.713 0 00-.27-.012c-.25 0-.47.039-.662.117a1.372 1.372 0 00-.486.328c-.133.14-.238.309-.317.504a2.425 2.425 0 00-.146.633l-.305.176c0-.383.037-.742.112-1.078.078-.336.197-.633.357-.891a1.75 1.75 0 01.61-.61 1.713 1.713 0 011.16-.193.8.8 0 01.21.053zm1.772.035V63h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.158-.446.11-.12.27-.181.48-.181.208 0 .366.06.475.181.114.121.17.27.17.445a.613.613 0 01-.17.434c-.109.117-.267.176-.474.176-.211 0-.371-.059-.48-.176a.638.638 0 01-.159-.434zm5.041 7.248c.258 0 .497-.053.715-.159.22-.105.399-.25.54-.433.14-.188.22-.4.24-.639h1.03c-.019.375-.146.725-.38 1.049a2.6 2.6 0 01-.908.78 2.636 2.636 0 01-1.236.292c-.477 0-.893-.084-1.249-.252a2.473 2.473 0 01-.879-.691 3.09 3.09 0 01-.521-1.008 4.256 4.256 0 01-.17-1.213v-.246c0-.426.057-.828.17-1.207.117-.383.291-.72.522-1.014.234-.293.527-.523.878-.691.356-.168.772-.252 1.248-.252.497 0 .93.102 1.301.305.371.199.662.472.873.82.215.344.332.734.352 1.172h-1.031a1.56 1.56 0 00-.223-.71 1.388 1.388 0 00-.516-.503 1.44 1.44 0 00-.755-.193c-.333 0-.612.066-.838.199-.223.129-.4.304-.534.527a2.46 2.46 0 00-.28.733 4.027 4.027 0 00-.083.814v.246c0 .277.027.55.082.82.055.27.147.514.276.733.132.219.31.394.533.527.226.13.507.194.843.194zm4.514-5.567V63h-1.09v-6.34h1.09zm-1.172-1.681c0-.176.053-.325.159-.446.11-.12.27-.181.48-.181.207 0 .365.06.475.181.113.121.17.27.17.445a.613.613 0 01-.17.434c-.11.117-.268.176-.475.176-.21 0-.37-.059-.48-.176a.638.638 0 01-.158-.434zm5.159 1.681v.832h-3.428v-.832h3.428zm-2.268-1.54h1.084v6.31c0 .215.033.377.1.486.066.11.152.182.258.217.105.035.219.052.34.052.09 0 .183-.007.28-.023.102-.02.178-.035.23-.047l.005.885a2.55 2.55 0 01-.34.076 2.587 2.587 0 01-.498.041c-.265 0-.51-.052-.732-.158a1.178 1.178 0 01-.533-.527c-.13-.25-.194-.586-.194-1.008v-6.305zm4.913 7.224l1.763-5.684h1.16l-2.543 7.319a4.019 4.019 0 01-.234.503 2.41 2.41 0 01-.363.522 1.728 1.728 0 01-.54.398 1.622 1.622 0 01-.743.159c-.086 0-.196-.012-.328-.036a3.183 3.183 0 01-.282-.058l-.006-.88c.032.005.08.009.147.013a1.745 1.745 0 00.773-.088.949.949 0 00.434-.323 1.92 1.92 0 00.31-.615l.452-1.23zm-1.295-5.684l1.646 4.922.281 1.143-.779.398-2.332-6.463h1.184z"
        fill="#000"
      />
    </Svg>
  )
}

export default EComponent
