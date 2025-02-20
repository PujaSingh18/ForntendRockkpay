import * as React from "react"
import Svg, { Path, Rect } from "react-native-svg"

function QRCode(props) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect width={40} height={40} rx={6} fill="#6633CC" />
      <Path
        d="M19.915 28.338l3.792-10h1.75l3.792 10h-1.75l-.896-2.541H22.56l-.896 2.541h-1.75zm-6.583-2.5l-1.167-1.166 4.209-4.209a9.634 9.634 0 01-1.323-1.666 14.449 14.449 0 01-1.094-2.125h1.75c.278.541.556 1.014.833 1.416.278.403.611.806 1 1.209.459-.459.934-1.1 1.427-1.927.494-.827.865-1.615 1.115-2.365h-9.25v-1.667h5.833v-1.666h1.667v1.666h5.833v1.667H21.75c-.292 1-.73 2.028-1.313 3.083-.583 1.056-1.16 1.862-1.729 2.417l2 2.042-.625 1.708-2.542-2.604-4.208 4.188zm9.75-1.5h3l-1.5-4.25-1.5 4.25z"
        fill="white"
      />
    </Svg>
  )
}

export default QRCode
