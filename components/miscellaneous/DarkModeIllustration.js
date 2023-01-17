import * as React from "react"
import Svg, { Path } from "react-native-svg"

/*
    * This site helped out with converting the SVG into a
    * React component.
    * https://react-svgr.com/playground/?native=true
*/

const SvgComponent = (props) => (
  <Svg
    width={208}
    height={173}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M65.533 72.3c.743 7.603 1.511 15.206 2.255 22.81 4.102-2.351 8.204-4.678 12.306-7.028v21.874c0 .407-.24 1.775 0 2.134.193.288 1.704.312 2.064.36 2.327.336 4.654.624 6.98.864 6.142.671 12.691 1.654 18.857.863 5.349-.672 10.531-2.59 15.425-4.797a76.135 76.135 0 0 0 5.062-2.494c.36-.192 1.631-.624 1.823-1.008.168-.312-.216-1.415-.264-1.751-.216-1.391-.408-2.782-.623-4.173l-2.879-19.403 5.446 5.444c.431.432 1.247 1.631 1.823 1.823.432.144 1.511-.288 1.943-.384 3.095-.6 6.165-1.2 9.26-1.775.72-.144 2.351-.144 2.951-.575.336-.24.336-.72.456-1.152.743-2.95 1.511-5.9 2.255-8.85.144-.528.887-2.207.695-2.734-.072-.192-.408-.312-.599-.456-4.654-2.854-9.309-5.684-13.987-8.538-2.542-1.56-5.109-3.118-7.652-4.678-1.08-.647-2.375-1.822-3.599-2.206-.743-.216-1.847-.048-2.615-.072l-4.75-.144c-.24 0-1.103-.192-1.319-.048-.168.12-.096.288-.168.576a21.578 21.578 0 0 0-.216 2.182c-.048.576.048 1.631-.216 2.159-.168.336.048.192-.168.36-.264.192-1.127.12-1.439.168-1.559.191-3.095.36-4.654.551-1.847.216-3.695.624-5.566.432-2.807-.288-5.83-.264-8.588-.864-.72-.143-.984-.551-1.535-1.103-1.08-1.08-2.136-2.158-3.24-3.238-.527-.527-.311-.431-.863-.24-.695.24-1.391.84-2.015 1.224-2.399 1.463-4.798 2.926-7.173 4.365l-14.61 8.898a5.662 5.662 0 0 1-.863.624Z"
      fill="#373539"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M205.297 73.229c-3.023 11.44-9.069 23.912-21.279 27.534-2.975.887-5.854 1.559-8.949 1.223a4.622 4.622 0 0 0-.815.024c-.504 0-.072.192-.624.024-.432-.144-.84-.479-1.295-.623-1.2-.408-2.495-.48-3.743-.792a92.366 92.366 0 0 1-9.068-2.854c-1.391-.504-2.639-1.223-3.934-1.895-1.32-.695-2.711-1.127-4.055-1.775-1.055-.503-2.854-1.15-3.598-2.11-.792-1.008.312-3.166.624-4.222 1.055-3.645 2.327-7.243 3.118-10.96 2.759 3.19 6.597 5.18 10.556 6.451a39.196 39.196 0 0 0 6.597 1.511c2.039.288 4.222.624 6.261.216 1.536-.312 3.455-1.007 4.558-2.182.384-.408.864-1.176.648-1.8-.288-.767-1.079-.407-1.535-.983-.384-.503-.312-1.679-.456-2.278a23.602 23.602 0 0 0-.864-3.166c-.695-2.015-1.583-4.054-1.775-6.188a8.587 8.587 0 0 1 1.176-5.253c.431-.767 1.535-2.854 2.615-2.758 1.175.096-.408 5.085-.456 6.092-.216 4.03.336 8.347 2.399 11.872.791 1.343 1.943 2.926 3.622 3.094 1.799.168 3.239-1.223 4.102-2.662 2.088-3.478 1.032-8.25-.024-11.92-1.295-4.485-4.678-7.555-6.813-11.585 3.191.312 4.894 2.35 6.526 4.917a29.219 29.219 0 0 1 3.886 9.522c.36 1.655.12 3.334.12 5.013 0 .551 0 2.614.911 2.542.984-.096 1.296-2.398 1.44-3.118.336-1.63.672-3.238.959-4.893.504-2.878.72-5.852 1.32-8.706.096-.48.312-1.823 1.031-1.463.552.288.48 2.35.48 2.854.048 1.2.12 2.374.12 3.574.024 1.775-.336 3.597-.168 5.348.12 1.151.72 2.423 1.488.864.767-1.535.911-3.454 1.343-5.11.456-1.726.912-3.5 1.847-5.036.264-.432.552-1.103 1.128-.911.432.144.743 1.151.863 1.487.6 1.583.48 3.358.456 5.037a23.205 23.205 0 0 1-.743 6.044Zm-58.728 2.974a7.184 7.184 0 0 0-1.007-.12c-.192-.024.024-.384-.456-.288a.74.74 0 0 0 .504.456c-.72.24-1.248-.36-1.751-.432-.48-.072-.504 0-.96.504-.504-.624-.408-.24-.816-.24-.144 0-.168.24-.407.192-.216-.024-.24-.36-.36-.384-.696-.216-1.392.84-2.183-.072-.192.96-2.375-.24-3.191-.072-.888.168-.504.48-1.2-.048-.671-.504-.479-.168-1.271.24.024 0-.432.312-.408.312-.552-.072-.504-.624-1.199-.6-.72.024-1.032.6-1.704-.096-.144.528-.167.288-.527.432a.502.502 0 0 1-.504-.144.364.364 0 0 1-.288.264c-.384.024-1.08.096-1.415-.096-.504-.264-.096-.384-.456-.672-.168.84-.504.648-1.224.744-.551.048-.671-.12-1.199-.192-.528-.072-1.2.12-1.703.216-.216.024-.504.192-.696.12-.192-.048-.288-.192-.384-.24-.144-.048-.12-.168-.36-.24-.168-.048-.456.12-.624.144-1.199.192-2.327.192-3.454-.264.552.984-1.296.456-1.631.048-.408.648-.912.192-1.752.24-.815.048-2.015.288-2.351-.72-.17.34-.407.641-.695.888-.528.264-.6-.12-1.08-.288-.672-.216-.528.192-.936.288-.695.144-1.079-.36-1.703-.624-.024.408-.048.648-.384.912-.312-1.128-1.415.096-1.223-1.415-.432.263-1.032.48-1.152 1.055.72-.192.072.264.048.288-.096.048-.407-.384-.479-.456a5.207 5.207 0 0 0-.048.624 7.004 7.004 0 0 1-.768-.528c-.216-.12.096-.36-.264-.36-.192 0-.384.384-.576.432-.288.048-.144-.36-.288-.36-.192.024-.503.288-.647.288-.456-.024-.144-.24-.504-.336-.648-.168-.6.24-1.056.384-1.055.336-.935-1.247-2.015-.192-.264.264-.408.648-.767.624-.72-.048-.48-.912-.312-1.32.144.072-2.64 1.511-2.615 1.464.024-.336.456-.6.072-.912-.312.696-.648.696-1.392.84-.36.072-.432.144-.815 0-.24-.096-.408-.48-.648-.504a5.482 5.482 0 0 1-.48.384c-.408.192-.648-.024-1.055.048-.336.072-.456.36-.792.264-.456-.097-.192-.624-.792-.48-.216.048-.336.456-.671.527-.504.12-1.152-.12-1.68.024-.37.088-.747.144-1.127.168-.312.024-.168-.215-.744.048l-.24-.6-.84.768a3.24 3.24 0 0 1-.096-.695c-.407.407-.935.48-1.51.527-.558.061-1.111.157-1.656.288-.192.024-.672.096-.816.024.024 0-.288-.12-.192-.096-.048-.072-.072-.168-.12-.24-.048-.24-.216-.24-.503-.024-.144-.024-.432-.215-.576-.168-.384.12-.336.432-.72.384-.24-.024-.384-.384-.624-.408-.383-.047-.743.408-1.08.504 1.08-.288-1.39-.072-.623-.048-.504-.024-1.032-.048-1.487.192-.264-.168.048-.528-.216-.671-.24-.144-.264.215-.288.215.144-.048.072.264-.072.312-.456.168-.84-.264-.864-.671-.383.6-.503.36-1.08.383-.575.048-1.055.336-1.63.336-1.128 0-1.896-.408-2.28-1.415 1.2.144 2.423-.624 3.599-.456.384.072.624.36.96.288.407-.072.72-.528 1.247-.575 1.175-.12 2.351 0 3.55-.192a20.226 20.226 0 0 1 4.343-.24c1.103.072 2.015-.336 3.142-.432 1.464-.096 2.927-.12 4.39-.192 1.488-.072 3.12-.312 4.607-.24.438.04.879.056 1.319.048.192 0 .384-.144.576-.12.264.024.383.288.671.288.48-.024.984-.408 1.536-.408.911-.024 1.847-.024 2.759-.072.815-.047 1.679-.24 2.495-.215.575 0 .719.503 1.055.551.6.096 3.623-1.63 3.886-.096 1.584-1.079 3.695-.168 5.446-.36 2.255-.263 4.558-.023 6.813-.12a52.232 52.232 0 0 1 6.981.216c.939.112 1.886.152 2.831.12.432-.024.912-.144 1.343-.024.096.024.888.576.792.6.432-.384.144-.456.888-.456.576-.024 1.127.12 1.727.144 1.056.072 2.087-.072 3.143-.048.863.024 1.727.144 2.591.168.935 0 2.063.024 2.734.792l-.215-.72c1.055.072 2.087.456 3.166.288-.264.264-.552.48-.648.84.576-.073.96-.48 1.56-.48.504 0 .624.24 1.151-.072.072.408.12.815.192 1.199.744-.168.264-.72.312-1.223.6.192 1.104-.024.888.84-.288.575-1.128.887-1.752.695Zm-1.055 7.459c-.264.72-2.495.312-3.023.24-.696-.096-1.463-.264-2.087-.336a1.347 1.347 0 0 0-.264-.264.53.53 0 0 1-.312.24c-.288.072-.288.36-.671.288-.024.432.287.192.527.36-.599.407-.311-.072-.647-.048a.308.308 0 0 0-.336-.144c-.19.045-.369.126-.528.24-.144.168-.264.168-.384.024a.655.655 0 0 0-.36-.192c-.575.096-.743.36-1.415.312-.936-.072-1.943.191-2.879.047-.576-.071-1.535-.983-1.799-.095-.408-.648-1.032-1.104-1.415-1.751 1.775-.096 3.526-.216 5.301-.288 1.56-.048 3.239.12 4.678.048 1.344-.072 2.783-.216 4.175-.336 1.487-.144 1.967.168 1.439 1.655Zm-46.06.096c.647.168 1.247-.216 1.871-.096.216.048.623.408.719.432.168.024.672-.36.888-.408a12.856 12.856 0 0 1 4.39-.096c.72.096.84-.24 1.463-.384.648-.168 1.584-.048 2.28-.096 1.631-.12 3.262-.024 4.869-.144 1.656-.12 3.311-.191 4.966-.263 1.128-.048 3.839-.696 4.774.144.768.695-.216 1.894-.983 2.158-.576.216-.864-.216-1.272-.192-.48.048-.312.624-.743.096-.264.528-1.968.312-2.447.336-1.056.072-1.968.288-2.687-.696l.144.864c-.96-.504-1.991-.336-2.807-.168-.408.096-1.679.695-2.111.432-.312-.192.24-.48-.288-.648-.264-.072-.744.36-1.08.336-.911-.072-.647-.672-1.559.096a1.263 1.263 0 0 1-.36-1.103c-.648.551-.6 1.487-1.775 1.319-.432-.072-.528-.504-.744-.6-.48-.168-.527.144-.959.384a1.825 1.825 0 0 1-.528.264c-.384.048-.432-.144-.504-.12-.264.024-.576.168-.887.072-.264-.072-.36-.552-.84-.456-.456.096-.456.408-.384.887-.456-.047-.72-.287-1.056-.575-.335.791-1.055.144-1.463.815-.528-.623-.84-.455-1.487-1.055.024.24.072.504.096.743-.504-.096-.72-.455-1.152.025-.408-.768-1.68.335-2.327-.408-.288.935-2.183.72-2.999.743-.72.024-1.247-.048-1.943.12a7.628 7.628 0 0 1-2.039.24 5.347 5.347 0 0 0-1.271-.072c-.672.072-1.272.432-1.968.264-1.055-.24-1.703-1.631-.527-2.255.815-.407 2.255-.263 3.142-.335 1.464-.12 3.12-.408 4.606-.264 1.152.096 2.208-.168 3.359-.288.888-.096 2.327-.24 2.903.624.264-.264.24-.792.72-.672ZM83.332 95.726c-.168-.791 6.574-1.223 7.245-1.27a61.438 61.438 0 0 1 4.222-.217c1.152-.024 2.231.192 3.383.024 1.08-.168 2.375-.504 3.311.264.144-1.055 4.198-.528 4.965-.528 3.359.024 6.574.024 9.812-.191 1.848-.12 3.815-.288 5.686-.192.84.048 1.511.263 2.351.072.552-.12 1.127-.384 1.655-.024.6.431.864 1.918.456 2.518-.312.456-.576.408-1.056.312-.743-.12-1.295-.288-2.063.024a2.206 2.206 0 0 0-.455.096c-.864.072-2.04.671-2.783-.024.288.048.743-.48.36-.528-.288-.024-.456.264-.672.36-.744.336-1.152.24-1.583-.48-.912.792-1.008.576-1.416-.408-.312.24-.384.792-.624.984-.024.024.12.36-.072.36-.168-.024-.215-.288-.335-.288-.072-.024-.12-.24-.192-.264-.072-.024-.168.144-.264.12-.24 0-.96.528-.696-.216-.384.48-.552.168-.672-.264-.431.336-.863.672-1.319.984-.192-.576-.552-.408-.984-.216.144-.384.048-.768-.288-.48-.191.168-.311.647-.527.863-.792-.815-1.08-.575-2.183-.48-.432.049-.936.12-1.32-.143-.336-.216-.528-1.031-1.079-.384.12-.144-.072.983-.096 1.151a2.55 2.55 0 0 1-.624-.623c-.336.647-1.176.072-1.871.192-1.104.215-2.231.551-3.215-.264-.072.264-.864.6-.864.6.048-.48.336-.312-.263-.384-.12-.024-.24.192-.336.216a6.17 6.17 0 0 1-1.152 0c-1.511-.049-2.879.287-4.366.407-.504.048-1.103.12-1.56-.072-.48-.192-.48-.407-.959-.288.144-.047-.312.456-.288.432-.072.048-.336-.192-.432-.168-.02.107-.053.212-.096.312-.12-.024-.24-.024-.36-.048-.311.048-.623-.288-.911-.288.048 0-.816.336-.792.36-.623-.312-.431-.216-1.223-.024-.744.168-1.464.144-2.207.24-2.28.312-.984-.792-1.248-2.135Zm-1.919 10.961c-.408-.575.696-.791 1.032-.839.575-.096 1.343.072 1.727 0 .576-.144 1.151-.48 1.8-.552.839-.12 1.654-.12 2.494-.192.293-.054.59-.086.888-.096.408.024.576.24.887.24.552 0 1.248-.336 1.8-.408.72-.072 1.463-.119 2.183-.167 1.535-.072 3.046-.048 4.606-.048.695 0 2.567-.72 2.926.096.48-.624 1.728-.528 2.423-.552 1.224-.024 2.423-.144 3.647-.216 1.055-.048 2.207.168 3.239.024.575-.096.743-.264 1.391-.192.48.072 1.199-.192 1.607-.072-.024 0 .504.336.336.336.192 0 .168.12.384.048.264-.072.144-.408.696-.528.863-.192 1.991.024 2.878-.024a46.71 46.71 0 0 1 2.591-.072c.408 0 .888-.096 1.272-.024.192.048.6.288.743.264.456-.072.696-.384 1.296-.36.672.032 1.345.016 2.015-.048.672-.048.768-.143 1.104.408.335.552.431 1.271-.192 1.655.384-.024.887.504.408.792-.288.191-.864-.216-1.2-.192-.432.048-.768.264-1.223.264-.48.024-.984.143-1.464.143-.504 0-.863-.215-1.343-.119-.408.071-.456.431-.96.119-.24-.143-.288-.695-.624-.695-.455 0-.263.576-.527.863-.072-.839-.72.552-.984-.479-.24.335-1.127.815-1.535.551-.384-.24-.264-.815-.432-1.223-.264.72-.984 1.487-.936.168-.36.432-1.295.36-1.055 1.127-.288 0-.36-.407-.6-.455-.216-.024-.384.143-.408.119.12 0-.336.168-.336.168.312-.072-.887-.168-.695-.168-.288 0-.624.216-.936.216-.288 0-.6-.12-.888-.144-.767-.096-.599.072-1.079.312-.168.096-.216.24-.48.216-.192-.024-.264-.264-.264-.264-.264-.024-.072-.12-.48-.072-.048.072-.096.168-.144.24a.441.441 0 0 1-.575.144c-.6.12-2.567.672-2.375-.336-.312.144-.6.288-.912.432-.12-.815-1.775.264-2.135.336-.48.072-.504-.12-.96-.216-.072-.024-.24.24-.431.216-.48-.096-.576-.144-.648-.672-.36.648-.648.36-1.272.456-.144.024-.24.288-.431.24-.144-.024-.144-.288-.24-.336-.096-.024-.072-.24-.216-.264-.144-.024-.672.384-.816.456-.336.144-.887.384-1.2.312-.407-.096-.215-.384-.791-.36-.912.048-1.271.815-1.823-.384-.264.48-.216.624-.624.768-.288.12-1.056 0-1.463-.024-1.68-.072-3.335.503-5.014.359-.744-.072-1.344-.215-2.087-.096-.768.12-1.536.312-2.327.384-.408.048-1.248.144-1.44-.36-.096-.407.552-.719.192-1.223Zm3.287 18.54c-2.183 1.463-4.007 3.454-5.998 5.157-2.015 1.703-3.622 3.574-5.421 5.469-1.68 1.726-3.215 3.381-5.23 4.701-1.272.839-2.423 1.846-3.743 2.638-.983.576-2.47 1.367-1.99-.432.503-1.847 1.39-3.693 2.182-5.42 1.128-2.447 2.255-4.869 3.479-7.244.456-.887.72-1.799 1.44-2.518.79-.792 1.343-1.799 2.206-2.542 3.623-3.118 9.092-.72 13.075.191Zm6.86 1.056c-.983.527-2.11.647-3.142.983-.888.288-1.727.816-2.687.864.888-.648 1.632-1.559 2.615-2.063 1.104-.552 2.111-.144 3.215.216Zm43.566 4.341c-3.646-1.223-7.053-3.046-10.603-4.509-.624-.264-5.422-1.823-5.326-2.591 3.359-.623 6.837-1.678 10.196-.527 3.07 1.055 5.565 3.574 7.94 5.66.624.552 4.439 3.046 4.103 3.838-.24.551-2.087.407-2.519.288-.552-.144-.888-.48-1.32-.864a7.837 7.837 0 0 0-2.471-1.295Zm-6.741-20.579c.552-.504.888-1.295 1.416-1.751.671-.599 1.775-.312 2.519 0 2.231.936 4.15 2.519 6.357 3.502 2.447 1.079 4.582 2.542 6.813 4.053 2.015 1.368 4.222 2.519 6.285 3.814 2.111 1.343 4.462 2.207 6.597 3.502 2.184 1.319 4.343 2.614 6.43 4.077 3.718 2.566 7.604 5.229 10.363 8.874a39.172 39.172 0 0 1 3.791 6.14c.935 1.919 1.967 4.582.743 6.596-1.175 1.919-3.19 3.43-4.87 4.869-.647.552-1.247 1.199-2.087 1.439-1.007.288-2.207.216-3.238.288-5.566.456-10.772.024-16.241-.959-5.302-.96-10.604-1.487-15.954-2.159-2.998-.384-6.021-.815-8.996-1.439a48.986 48.986 0 0 1-3.79-.935c-1.08-.312-1.991-1.032-3.119-1.296-4.726-1.175-10.148-1.631-14.826-3.621 4.151-1.727 8.541-2.759 12.811-4.198 4.462-1.511 8.828-2.782 13.554-3.19 2.423-.215 4.606-.839 6.933-1.487 2.231-.623 4.534-.815 6.837-1.079 1.008-.12 3.911.072 4.247-1.271.503-1.967-2.351-2.207-3.551-2.039-1.727.24-3.143.672-4.462-.743-1.343-1.439-2.663-2.926-4.03-4.342-2.543-2.638-5.158-5.684-8.757-6.883-4.39-1.439-9.452-.072-13.842.743-4.606.864-9.236 1.703-13.77 2.95-1.871.528-4.294 1.679-6.237 1.488-1.92-.192-4.103-.504-5.95-1.056-.84-.24-1.535-.719-2.279-1.151-.983-.552-2.039-.911-3.07-1.367-2.088-.888-4.127-1.703-6.406-2.039-1.895-.288-3.934-.456-5.781.192-1.8.648-3.407 1.991-4.678 3.406-1.368 1.535-2.495 3.286-3.623 5.013-.528.839-1.2 1.559-1.751 2.374-.48.672-.744 1.439-1.247 2.111-1.104 1.487-1.872 3.382-2.543 5.108-.744 1.919-1.584 4.198-1.392 6.26.072.792.144 1.823.432 2.567.384.935.936.911 1.727 1.247 1.368.6 1.752 2.255 3.527 1.943 1.655-.312 3.094-1.679 4.294-2.758 1.583-1.416 3.095-2.903 4.582-4.414a35.603 35.603 0 0 0 4.294-5.012c.48-.72.864-1.511 1.44-2.159.72-.816 1.559-.911 2.543-1.247 8.66-2.854 17.368-5.613 26.292-7.507 2.135-.456 4.295-1.032 6.406-1.631 2.231-.648 3.382.048 5.229 1.247 3.839 2.542 8.397 4.341 12.667 5.996 1.343.528 3.503.552 4.558 1.583-6.237.959-12.187 2.782-18.208 4.605-2.975.887-5.974 1.679-8.948 2.542-2.975.864-5.854 1.967-8.78 2.951-2.927.959-6.022 1.367-8.973 2.254a79.456 79.456 0 0 1-9.116 2.087c-3.119.551-6.237 1.199-9.38 1.703-1.44.239-2.879.455-4.294.791-1.391.312-2.735 1.055-4.126 1.223-6.238.768-12.355 2.471-18.569 3.43-4.63.72-12.714 1.727-15.713-2.926-3.023-4.677.696-10.145 4.006-13.479a44.236 44.236 0 0 1 6.79-5.541c2.59-1.751 5.085-3.621 7.7-5.372 5.878-3.934 12.26-7.148 18.568-10.314 3.023-1.511 5.95-3.142 8.9-4.821 1.464-.815 2.28.504 3.431 1.415.912.72 2.591 2.471 3.863 1.655.047.288.096.576.143.888.384-.168.744-.336 1.128-.504.24.648.216 1.055.912 1.415.431.216 1.343.456 1.75.096.073.264.169.528.24.768.36-.024.433-1.056.505-1.296.623.888 1.463 1.655 2.543 1.895 0-.048-.168-.791-.168-.791.335-.216.767.695.96.887.599.624.959.528 1.63.024.048.048.264.648.312.624.144-.048.408-.576.456-.6-.048.672 1.272.816 1.751.672-.096-.192-.215-.408-.311-.6 1.63-.216 2.255 1.511 3.814 1.415 1.151-.072.216-.312.888-.815.575-.432.671.503.719.479a1.35 1.35 0 0 0 .264-.383c.216.815 1.895 1.535 1.703.192.648.263 1.128.695 1.848.791.887.12 1.823-.072 2.71-.144 1.896-.168 3.695-.551 5.422-1.415 1.008-.528 2.111-.983 3.071-1.607.792-.528 2.327-2.111 3.382-1.415-.263-.815 1.008-.048 1.056-1.103.216.144.408.312.624.455.12-.263.096-.695.264-.935.216-.336.335-.144.527-.312.216-.216.408-.743.672-.911.264-.168.576.024.864-.12.432-.216 2.327-2.303 2.015-.504.816-.288.192-.527.288-1.079.216-1.079.695-.312 1.199-.216.816.144.792-.504 1.248-1.007.408-.456 1.199-.648.911-1.415.216.096.264.407.312.719ZM79.542 86.852c-.648.72-1.128.408-1.823.312-.072-.264-.216-.288-.384-.096-.21.115-.437.196-.672.24-.576.144-1.175.072-1.751.287.024-.191.216-.527.096-.72-.6.409-.96.672-1.703.697-.6 0-1.632-.456-2.136.095-.023-.215-.023-.431-.047-.623a2.064 2.064 0 0 0-.624.48 1.278 1.278 0 0 0-.264-.816c-.384.816-.816.84-1.584.528.096.048-.767-.48-.743-.336-.264-1.151 4.078-1.055 4.534-1.103 1.151-.12 2.279-.192 3.43-.288 1.08-.096 1.896-.264 2.64.647-.36-1.343 2.806-1.27 1.03.696ZM29.619 66.585c.12 1.967.552 4.077-.216 5.972-.623 1.535-1.847 3.262-3.166 4.245-2.711 2.04-5.014-.455-5.398-3.214-.384-2.854.384-6.355 2.855-8.13 1.463-1.056 2.902-.984 4.606-.624.407.072 1.055.048 1.271.456.024.096-.024 1.295.048 1.295ZM65.7 92.896c-.479.24-.959.384-1.367.696-.144.12-.191.36-.335.455-.288.168-.672.048-.96.192-.48.24-.816.576-1.392.792-.814.343-1.607.735-2.375 1.175a42.83 42.83 0 0 1-4.15 1.847c-.695.288-2.639.84-2.567 1.87-.168.049-.311-.311-.647-.263-.456.048-1.056.551-1.512.695-.863.24-1.56.264-1.56 1.367-.287-.191-.359-.647-.719-.719-.408-.072-.6.384-.935.528-.384.167-.888 0-1.272.191-.175.179-.368.34-.576.48-.207.029-.418.02-.623-.024-.816.168-1.584.48-2.423.648-.816.168-1.368.216-1.032 1.175-.863.168-1.08-.744-2.039-.408a29.836 29.836 0 0 1-3.55.96c-.624.12-1.296.407-1.944.479-.455.048-.887-.12-1.343-.072-.552.072-.984.312-1.535.312a12.04 12.04 0 0 1-1.608-.168c.072.211.168.412.288.6-.36-.072-.528-.504-.84-.576-.311-.072-.6.264-.887.192-.12-.024-.048-.384-.24-.456-.192-.072-.264 0-.456-.024-.072 0-.84-.048-.96.024-.215.12 0 .336-.047.36-.72.528-.744.24-1.056-.312-.48-.815-1.055-.311-1.92-.455-.959-.168-1.726.264-2.662.192-1.032-.072-2.207-.84-3.119-1.272-1.943-.959-3.838-1.87-5.47-3.333-3.19-2.855-5.805-6.356-7.34-10.362C2.87 85.365 2.559 80.88 2.703 76.3c.055-2.749.303-5.49.743-8.203.288-1.87.36-5.18 2.471-6.044.36 4.365-.791 8.826-.048 13.191.216 1.32.744 3.047 1.751 4.03 1.488 1.439 1.824-.648 1.968-1.775.24-2.135.72-4.245 1.031-6.356.336-2.11.552-4.27 1.008-6.356.168-.767 1.511-6.356 2.495-6.092-.192 4.077-.72 8.083-.744 12.16 0 1.631-.144 3.358.072 4.989.12.84.888 3.286 2.207 3.094 1.224-.192-.12-1.919-.24-2.59-.312-1.775.072-3.958.36-5.733.528-3.31 1.703-6.715 3.646-9.498 1.728-2.494 4.39-4.844 7.605-4.413 1.368.192 2.447.528 3.143 1.775.552.983 2.663 2.11 1.44 3.334-1.128 1.127-2.951.216-4.199-.048a5.727 5.727 0 0 0-4.438.96c-2.183 1.534-3.455 4.293-3.862 6.859-.552 3.478.911 12.568 6.333 10.53 3.598-1.344 6.31-6.237 5.997-9.954-.12-1.487-.695-4.318 1.368-4.725 2.639-.528 3.023 2.398 2.759 4.293-.384 2.758-1.848 5.325-3.527 7.507-1.463 1.895-3.143 3.094-4.894 4.653-.528.456-1.847 1.511-1.607 2.375.24.935 2.327 1.223 3.142 1.367 4.103.767 8.757.072 12.859-.48 8.444-1.103 16.769-3.838 23.678-8.826.288 3.094.624 6.188.768 9.282.072 1.51.072 3.046.24 4.533.144.96.527 2.23-.528 2.758ZM42.31 103.69c-.335.168.025-.863-.071-.527.504.167.528.359.072.527Zm35.002-37.464c.528-.575 1.967-1.967 2.423-.647.168-.552.192-1.392.84-.624.263-.935 3.142-.84 3.838-.887 2.279-.12 4.582-.192 6.837-.432 4.678-.456 9.428-.216 14.106-.24a21.557 21.557 0 0 1 3.047.096c.983.144 1.991.552 2.974.384.888-.12 1.464-.384 2.375-.264a28.99 28.99 0 0 0 3.239.216c4.846-.024 9.692.168 14.538.192.935 0 2.087-.192 2.951.215.335.144.695.648.935.696.288.072.12-.384.504-.192.504.264.12 1.103-.216 1.247.192-.072-.36-.168-.312-.168-.264.024-.504.216-.791.216-.432-.024-.816-.287-1.176-.527 0 .096.192.743-.024.767-.192.024-.384-.6-.384-.767-1.079.959-2.231.431-3.574.551-.96.096-2.951.72-3.599-.264a.914.914 0 0 1-.264.552c-.192.288-.359.264-.503-.072-.048 0-.504.096-.528.096-.336-.024-.744-.144-1.08-.168-.504-.048-.408.336-.839.336-.216 0-.792-.312-1.176-.336-.672-.024-1.367.24-2.039.168-.456-.048-.864-.432-1.319-.456-.552-.024-.744.408-1.176-.191-.096-.024-.144.335-.192.335 0 0-.432.072-.48.072a4.703 4.703 0 0 1-.527.192c-.216 0-.36-.168-.6-.168-.408 0-1.655.336-1.631-.384-1.416.528-2.639.312-4.079.456a5.952 5.952 0 0 1-1.727-.144c-.792-.144-1.319.048-2.111.072-.768.048-1.008-.288-1.655-.575-.264-.12-.432-.264-.744-.192-.168.048-.048.336-.096.36-.264.095-.456 0-.84.023-.695.048-.959.624-1.679.072.24-.024.48-.048.72-.095-.672-.288-1.584-.432-1.416.623-.576-.072-.072-.48-.36-.623-.287-.144-.6.095-.96.215-.959.312-1.75.144-2.734.096-1.127-.072-3.766.864-4.558-.335-.024.24-.288.959-.648.91-.12 0 .216-.743.24-.839-.192.384-1.031.48-1.44.672.049-.216.097-.432.145-.624-.384.408-.576.168-1.032.288-.192.072-.48.48-.648.504a.756.756 0 0 0-.743-.288 1.682 1.682 0 0 0-.6-.024c-.792.048-1.511.504-2.303.192-.696-.264-.96-.935-1.367.144-.096-.192-.216-.384-.312-.576-.144.216-.264.408-.408.624-.528-.336-.552-.528-1.152-.408a.543.543 0 0 1-.431-.024c-.025.096-.072.216-.096.312-.024.264-.096.36-.24.264a1.355 1.355 0 0 1-.312-.192c-.384.024-.888.144-1.32.072-.168-.048-1.2-.576-1.271-.504ZM89.4 59.15l.145.216c-.648.335-.792.144-.864-.528.312 0 .36.551.72.312Zm.385-.384c.311.144.671.408.96.048.191.552-1.272 1.343-.96-.048Zm1.99.24c.648.431-.91.096-.91.096a.7.7 0 0 1 .91-.096Zm5.59-2.447c.216 1.128.84 1.08 1.824.576 1.439-.767 1.679-2.015 1.799-3.502.096-1.415.264-1.967 1.751-1.679 1.032.216 1.895.024 2.927 0 1.103-.024 1.487.144 1.583 1.271.096 1.128.288 1.991 1.128 2.879.839.887 1.967 1.415 3.046 1.894.552.264 1.08.528 1.704.576.24.024 1.487-.144 1.511.264.024.288-1.703 1.127-1.895 1.247-.793.45-1.629.82-2.495 1.103-2.015.6-4.15.648-6.261.6-3.383-.048-8.037-1.487-10.052-4.485 1.127-.24 2.279-.48 3.43-.744Zm-.311-9.69c-.528-.455-.888-1.127-1.32-1.654a1.757 1.757 0 0 0-.6-.48c-.216-.144-.36.048-.528-.264-.48-.863 1.008-2.063-.575-2.398-.528-.12-1.823.311-1.967-.456-.216-1.08 1.847-1.151 2.327-1.703.96-1.103.312-2.95.911-4.197.552-1.2 1.991-1.415 3.143-1.775 1.583-.504 3.191-.792 4.798-1.2 1.127-.287 2.999-1.414 4.03-.407-1.607.36-.672.911.408 1.223a18.13 18.13 0 0 0 3.766.6c1.296.132 2.604.084 3.887-.144 1.175-.24 2.495-1.271 3.742-1.008-.696 1.2-2.735 1.847-3.982 2.159-.624.168-1.032.12-.96.912.072.767.744 1.535.912 2.326a5.431 5.431 0 0 1-.36 3.022c-.36.983-.456 1.103-.144 2.039.504 1.463-.576 3.07-1.583 4.125-4.079 4.293-11.827 2.686-15.905-.72Zm11.563-14.774c-.168.12-1.128.384-1.104 0 .072-.504.936-.312 1.104 0Zm2.207-10.241c-.216-.168-.864-.096-.408-.744.168.288.288.504.408.744ZM95.567 17.8c.32-.726.569-1.48.744-2.254.072-.504-.072-1.056.6-1.128-.888-.383-.888-1.894-.936-2.686-.072-1.08-.408-2.518.072-3.526.48-1.031 1.151-1.007 1.343.216.072.48-.216.648-.264.984-.12.671.12.527.528.024.168.503.24 1.295.96 1.247-.048-.144-.312-.456-.24-.624.144-.264.84.144.912.192.623.432.767.84.311 1.391.624.072.096.624.504.744.624.215.192-.816.144-.984.305.116.566.326.744.6.142.199.27.407.384.623.12.408.383.504.791.312.792.24 1.896.216 2.615.648.336.192.432.623.72.791.312.192.72.096 1.055.216-.119.264-.024.432.288.432.247.021.489.078.72.168.17-.127.355-.232.552-.312a.39.39 0 0 0 .576.168 2.83 2.83 0 0 1 1.559.84c.408.383.072.407.528.36.192-.025.503-.337.935-.265.239.047.473.12.696.216a.587.587 0 0 0 .768.072c.431.216.479.6 1.031.648.6.048.408-.696.816.36.552-1.104.768.671 1.319.815.6.144.648-.336 1.152.192.144.168.144.408.312.575.288.264.647.216.911.6-.144-.216.024.744.024.696.048.407-.336.887.432.84 0 .047-.384.575-.432.503-.024-.072-.024-.12-.048-.192-.072.024-.12.552-.096.623.072 0 .096-.047.072-.143-.12.383.072.647-.168 1.007-.144.24-.575.408-.791.552-.528.36-1.056.695-1.584 1.079-1.223.863-2.591 1.919-4.126 2.11.768-.767 5.23-3.621 2.999-4.46a9.144 9.144 0 0 0-1.607-.336c-.528-.048-1.104.263-1.68.072-.719-.24-.456-.912-.887-1.152-.936-.503-.72.696-1.008 1.008-.312-.312-.24-.48-.72-.504-.503-.024-.599.432-1.175.144-.792-.384-.384-1.175-1.487-1.175.023-.168.191-.648-.024-.792-.288.384-.072.792-.336 1.151-.17.194-.397.329-.648.384-.504.144-.576.408-.48-.36-.36.672-1.511.384-2.183.336a15.586 15.586 0 0 1-3.31-.671c-.96-.336-1.488-.888-2.28-1.392-.311-.191-.455-.12-.887-.24-.504 0-.936-.24-.72-.743ZM97.87 6.024c.168-.096.288 1.39.072 1.655-.36-.576-1.007-1.415-.072-1.655Zm.528-.6c.528-.48.168.768.072.96-.192-.12-.384-.264-.6-.384.24-.12.312-.384.528-.576Zm20.031-1.99c4.918 1.03 9.764 2.95 13.699 6.115 3.574 2.879 6.117 6.98 7.532 11.321 1.464 4.51.984 9.522-2.519 13-1.847 1.823-4.27 2.926-6.597 3.981-1.103.504-2.255.936-3.382 1.44-.792.36-1.776.935-2.687.839.456-.48 1.151-.504 1.703-.792.672-.36 1.248-1.055 1.823-1.559.576-.503 1.872-2.062 2.783-1.679-.12-.839.816-1.223 1.248-1.75.455-.576.479-1.248 1.319-1.44-.888-.695-.624-2.014-.432-2.95.224-1.18.377-2.374.456-3.573.168-2.23.312-5.061-.912-7.028-.407-.647-.911-1.223-1.271-1.87-.432-.792-.336-1.488-.336-2.375-.792.527-.959-.552-1.271-1.08-.24-.383-.576-.623-.648-1.103-.048-.36.336-.431.12-.791-.264.192-.36.503-.504.791-.24-.096.048-.431-.096-.551 0 0-.48-.216-.456-.168-.312-.384-.407-1.008-.551-1.463-.552.287-.456.24-1.056-.216a3.316 3.316 0 0 1-.696-.576c-.24-.575.168-.24.072-.6-.336-1.03-2.207-.839-2.375-2.374-.911.576-1.271-.24-1.799-.84-.552-.599-1.487-.839-1.439-1.774l-.864.288c.144-.888-1.151-.816-1.631-1.272.257-.007.513.01.767.048Zm.744 54.469c.456-.408.312.143.6.071.24-.047.288-.24.528-.311.983-.24 2.471.072 3.502 0 1.2-.048 3.263.192 3.839 1.607.335.84-.192.551-.768.503-.433-.008-.865.008-1.296.048a2.928 2.928 0 0 1-.647 0 .473.473 0 0 1-.192-.288c-.624-.096-1.272.264-1.967.288-.912.024-1.728-.144-2.423-.767-.288.407-.456.623-.96.671-.024 0-.504-.192-.576-.215-.096-.024-.36.191-.552.12.36-.576.408-1.272.912-1.727Zm62.638 4.892c.167-.551.287-1.127.455-1.703 2.255 2.567 4.247 6.02 5.134 9.33.576 2.16 1.487 6.045-1.271 7.148-2.255.911-3.503-2.327-4.079-3.934-1.271-3.501-1.271-7.267-.239-10.84ZM80.525 22.43c.024 0-1.463.864-.983.168.192-.288.96-.48 1.271-.48l-.288.312Zm-1.415.384c-.168.144-.336.288-.528.432l-.503-.792c.311-.168 1.727-.264 1.031.36ZM78.055 49.82c-.312-.216-.552-.096-.648.264 0-.36.192-1.176.456-1.272.192-.072-.6-1.007-.384-1.247.576.312.216.624.384 1.055.072.192.287.36.36.504.071.24.407 1.103-.168.696Zm-1.536-2.111c-.312.072.24.6.24.84 0 .167-.216.311-.312.551-.192.528.144.888-.408 1.271 0-1.15-.767-4.197.72-4.749-.72-.575-.12-1.223.432-.551.552.671.216 2.422-.672 2.638Zm-.768-4.533c-.287-1.031-1.175-1.391-2.159-1.32.048-.527.432-1.294.72-.335.12-.288.192-.648.48-.84.456 1.44 2.735 2.231 1.32 3.766-.145-.408-.24-.84-.36-1.271Zm-2.662-1.247c-5.278.383-12.667 1.487-16.89-2.567-2.758-2.638-2.59-6.74-.383-9.666 1.271-1.678 2.999-2.854 4.726-3.957a8.285 8.285 0 0 1 1.967-.96.536.536 0 0 1 .336.073.56.56 0 0 1 .312-.384c.288-.144.696-.216.864-.528a11.63 11.63 0 0 0-.336 1.823l-.432-.504c-.12 1.128-1.296.432-1.991.576.456.624.791.863.815 1.703-.335-.624-1.055-1.055-1.727-1.247.36 1.055.624 1.703.264 2.878-.432-.24-.456-.84-1.008-.983-.144.695-.168 1.463-.336 2.134-1.367-.623-1.223 1.055-.671 1.87.288.433.432.96.696 1.368.647 1.031.143-.504.863-.432-.168 1.104-.216 1.2.576 1.991.792.792 1.175 1.87 2.015 2.59.24-.311-.144-.623-.168-.935.768.12 1.152.911 1.895.216.336.623.672 1.343 1.464 1.463-.504-.983.983-.312 1.367-.168.288.096.816.192.936.24.647.24.192-.192.576.575.575-.167.791-.647 1.463-.24.552.313.552.888.672 1.44.12-.36.264-.744.407-1.104.144.072.768.744.696.744 1.511-.072 1.463.84 1.032 1.99Zm-7.39-18.492c.289-.216.648.072.984 0 .456-.096.72-.48 1.224-.528-.144.456-.408.408-.624.767-.072.12-.048.408-.096.48-.576.576-.767.096-1.343-.336.048.528.144.696-.336.84-.456.12-1.2-.336-1.44-.72.168-.384 1.272-.264 1.632-.503Zm3.623-.84c.504.048-.096 1.487-.815.096.268-.057.541-.09.815-.096Zm2.52-.264c.767-.168 3.358-.887 3.646.312.048-.024.24-.72.335-.623.36.335.408.767.36 1.247-.432-.912-.288-.12-.575-.168-.072-.024-.192.12-.384.072-.264-.072-.432-.624-.6-.792-.264.384-.6.864-1.127.84-.384-.024-.984-1.008-.504.072-.288-.096-.624-.312-.936-.264-.36.048-.552.408-.888.456-.743.12-.863-.6-1.343-.984.672-.072 1.368-.048 2.015-.168Zm4.701-.024c.048-.24.744-.335.912-.264.432.192.264.456.192.864-.312-.144-.624-.288-.936-.456.456.768-.384.864-.168-.144Zm131.44 44.084c-.048-1.799-.096-3.646-.575-5.397-.312-1.223-1.104-3.43-2.591-3.645-2.231-.312-3.479 4.101-4.103 5.636-.119-1.799-.024-3.693-.695-5.396-.552-1.367-1.919-2.663-3.095-1.128-1.055 1.367-1.247 3.382-1.535 5.013-.36 2.11-.576 4.27-.84 6.404-1.031-1.99-1.199-4.245-2.015-6.308-.768-1.943-1.967-3.79-3.119-5.516-.935-1.415-2.087-2.735-3.574-3.598-1.296-.743-3.551-1.559-4.774-.312-1.032 1.032-.864 2.423-.816 3.742.024.575.12.983-.408 1.271-.264.144-.647.072-.935.144a3.272 3.272 0 0 0-1.176.623c-2.663 1.967-3.886 5.517-4.246 8.683-.48 4.005 1.08 7.46 2.423 11.129.216.575.888 1.823.792 2.47-.096.72-1.008.744-1.608.744a48 48 0 0 1-5.565-.264c-4.342-.408-8.661-2.495-12.547-4.365-.72-.336-1.703-.528-2.279-1.08-.552-.503-.696-1.319-1.151-1.894-1.152-1.416-1.896-2.615-3.575-3.478-1.727-.864-3.479-1.68-5.182-2.638-2.087-1.176-4.006-2.687-5.997-4.006-3.719-2.446-7.389-5.157-11.323-7.243-1.824-.96-3.863-1.128-5.782-1.92-1.847-.767-4.126-.767-6.045-.287-.936.24-1.584.792-2.447 1.175-1.008.432-1.848-.048-2.735-.551-1.368-.792-2.711-2.063-.768-2.926.648-.288 1.487-.408 2.063-.84.624-.48 1.104-1.367 1.608-1.99 1.103-1.344 1.775-2.903 3.382-3.742 1.799-.936 3.91-1.175 5.83-1.775 2.063-.648 4.102-1.44 6.117-2.207 3.67-1.367 7.461-2.854 10.1-5.9 2.279-2.614 3.262-5.996 3.166-9.426-.192-7.003-3.934-14.127-9.332-18.516-6.621-5.373-15.017-7.171-23.366-7.075-3.91.048-8.588.551-11.875 2.926-2.83 2.062-3.286 5.66-2.878 8.898.168 1.32.743 3.046-.168 4.221-.528.648-1.464.816-2.16 1.224-.887.503-1.655 1.007-2.662 1.27-4.247 1.152-8.685.744-13.027.672-7.22-.096-14.61 1.847-19.983 6.932-4.343 4.101-5.638 11.848-.36 15.83 4.27 3.238 10.987 2.878 16.049 2.302 1.56-.168 2.639-.432 2.639 1.487 0 2.087-.336 4.27.192 6.332.84 3.238 3.958 3.31 6.693 2.614a29.395 29.395 0 0 0 4.222-1.487c2.015-.839 3.863-2.086 5.878-2.95 1.343-.575 2.375 1.272 3.574 0 .216-.24.264-.6.6-.72.528-.191 1.391.48 1.871.696.696.312 1.392.552 1.655 1.32.264.72.144 1.846-.096 2.542-.527 1.535-1.967 1.223-3.286 1.127-2.303-.168-4.582-.552-6.861-.72-2.063-.143-3.983.48-5.758 1.488-3.718 2.134-6.789 5.516-10.004 8.298-1.655 1.44-3.262 2.975-5.085 4.246-.792.551-1.632 1.031-2.327 1.727-.672.671-.744 1.27-.984 2.158-.408 1.583-2.47 2.375-3.742 3.19a27.132 27.132 0 0 1-5.782 2.734 80.835 80.835 0 0 1-13.146 3.406c-2.207.384-4.39.648-6.621.864-1.92.192-3.959.767-5.878.287.552-.887 1.535-1.439 2.303-2.134a16.462 16.462 0 0 0 2.567-3.046c1.44-2.135 2.47-4.413 2.687-7.004.216-2.326-.024-5.108-1.44-7.075-.48-.672-1.439-.864-1.87-1.487-.433-.6-.265-1.655-.505-2.375-.6-1.799-2.399-4.03-3.958-5.084-1.703-1.128-4.198-1.56-6.165-.96-3.647 1.103-5.902 4.989-7.557 8.155-.912-1.919.624-4.773-1.176-6.332-1.511-1.32-2.686 1.247-3.19 2.35C9.3 63.084 8.748 68.552 7.764 74.069c-.407-.408-.192-1.415-.168-1.895.072-.887.072-1.75.072-2.638 0-2.23.432-4.485.24-6.716-.12-1.295-.527-4.005-2.399-3.597-1.583.36-2.59 2.614-3.094 3.981-.72 1.967-.888 3.934-.84 6.02.048 2.303-.384 4.581-.504 6.884-.216 4.461 0 8.898 1.272 13.215a28.35 28.35 0 0 0 24.925 19.932c2.207.144 4.318-.12 6.501-.336 2.16-.216 4.319-.336 6.454-.6 4.774-.575 9.428-2.086 13.77-4.125 2.279-1.079 4.438-2.375 6.669-3.526.912-.456 1.511-1.031 2.279-1.679.768-.623.983-.671 1.847-.671-.264-.672.48-.888.816-1.32a5.445 5.445 0 0 0-.048.624c.264-.552.48-.552.696.024.216-.623.383-1.271.623-1.87.984.503.912 1.702 2.231.815 1.08-.72 2.088-1.56 3.215-2.255 2.543-1.607 4.726-3.67 7.269-5.252 0 1.535.12 3.094-.096 4.629-.192 1.463-.744 2.806-1.176 4.22-.791 2.567-.863 5.325-1.727 7.868-.36 1.055-1.32 1.943-1.583 2.974-.288 1.055.36 1.895-.72 2.566-.767.48-1.703.696-2.543.984-1.295.455-2.495 1.079-3.742 1.607-5.854 2.518-11.587 5.06-17.009 8.442-5.158 3.214-10.388 6.524-15.114 10.314-4.102 3.31-8.252 7.579-9.26 12.951-.96 5.229 1.608 10.841 6.814 12.544 2.71.888 5.757.792 8.564.816 3.023.048 6.237-.696 9.212-1.223 3.143-.552 6.237-1.44 9.38-1.919 3.023-.48 5.805-1.535 8.756-2.207 3.167-.695 6.405-1.079 9.596-1.703 1.44-.288 2.831-.695 4.27-.959 1.584-.288 3.167-.384 4.726-.768 3.023-.743 5.926-1.918 8.949-2.614 1.367-.312 2.71-.719 4.078-1.007 1.247-.264 2.231-.984 3.502-.384 1.008.48 1.824 1.271 2.783 1.823 1.248.719 2.567 1.367 3.863 1.991 2.614 1.247 5.325 2.134 8.06 3.07 2.879.983 5.686 2.11 8.684 2.782 3.047.671 6.166.863 9.236 1.391a113.702 113.702 0 0 0 18.928 1.607c3.239.024 6.454-.36 9.692-.312 2.855.048 5.326.672 7.941-.839 4.174-2.423 8.996-6.069 8.9-11.369-.096-4.797-2.975-9.378-5.685-13.168-3.287-4.605-7.965-7.843-12.547-11.009-4.894-3.381-10.364-5.708-15.521-8.658-2.615-1.511-5.038-3.142-7.893-4.197-1.368-.504-2.687-1.104-4.03-1.655-1.08-.432-2.639-.696-3.575-1.415-.576-.456-.624-1.152-.792-1.847a34.36 34.36 0 0 0-1.391-4.389 46.27 46.27 0 0 1-2.087-8.635c-.408-2.806-1.32-5.732-.84-8.586 3.071 2.974 6.238 5.852 9.404 8.73 1.176 1.08 2.351 2.207 3.527 3.286.887.815 2.015 2.015 3.238 2.254 1.584.312 1.008-1.439 2.088-1.727.671-.167 2.662 1.535 3.19 1.871 3.335 2.111 7.029 3.454 10.7 4.893 3.838 1.511 7.796 2.854 11.947 3.238a31.186 31.186 0 0 0 11.419-1.151c7.341-2.087 12.762-7.004 16.721-13.384 4.534-7.219 7.82-15.733 7.556-24.416Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m95.64 50.54-.024.024c.025 0 .025 0 .025-.025Z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M96 50.635a3.06 3.06 0 0 0-.168-.671c-.24.383-.456.551-.144.959.098-.102.202-.198.312-.288ZM112.961 105.776c.263-.288-.192-.408-.384-.408.024.312-.144 1.055.288 1.199a.774.774 0 0 1 .096-.791ZM105.763 45.167c-.455.911.576 1.175 1.176.743.456-.336.72-1.175.792-1.703.24-1.727-.984-3.382-1.584-4.94-.168-.408-.36-1.775-.863-1.8-.576-.047-.624 1.224-.624 1.536.016.992.203 1.973.552 2.902.288 1.007 1.103 2.206.551 3.262ZM107.995 41.545c1.799 1.607 3.238-1.055 3.118-2.638-.024-.384-.288-1.823-1.031-1.295-.384.263-.048 1.127-.24 1.486-.864 1.823-1.679-1.007-2.279-1.223-.696-.264-.768.648-.768 1.152a3.332 3.332 0 0 0 1.2 2.518ZM101.469 41.785c.432-.672.936-1.56 1.008-2.35.096-1.248-.624-1.128-1.223-.265-.432.624-.744 1.655-1.656 1.392-1.151-.312-.791-1.871-1.44-2.59-1.654 2.158 1.416 6.787 3.311 3.813ZM103.892 48.453c.672.143 2.423.095 1.824-.936-.768-1.295-3.311.624-1.824.936ZM127.378 9.91c.12-.36-.048-.432-.335-.72-.264.24.072.527.335.72ZM139.901 76.083c.432.072.576-.168.432-.696-.72-.048-.864.192-.432.696ZM115.743 19.623c.48.216.312.672.288 1.08.24-.264.768-.768.552-1.176-.312-.6-1.152-.048-.84.096ZM99.118 12.02l-.215-.432c-.312.24-.768.888-.288 1.2.19-.241.358-.498.503-.768ZM104.972 16.29c.6.479.312-.984.288-1.104-.072.168-.6.863-.288 1.103ZM104.636 15.546l-.144-.36c-.24.216-.552.695-.144.96.12-.188.217-.39.288-.6ZM108.498 20.558l.144.144c.192-.407-.024-.695-.408-.72.028.215.12.416.264.576ZM92.233 65.985c.232-.164.449-.349.648-.551-.72-.432-.288.503-1.151-.072-.168.24.12.815.503.623ZM122.173 105.608c.264-.408.312-.408-.048-.72-.312.504-.288.384.048.72ZM65.533 39.41c.144.144.288.312.431.456.073-.192.456-.767.192-.96-.19.188-.4.357-.623.504ZM70.786 40.945c-.24-.048-.791-.215-.935 0 .336.288 1.127.024.935 0Z"
      fill="#fff"
    />
    <Path
      d="M53 168c0-.458 1.242-.895 3.5-1.295.73-.13.566.121 1.5 0 1.814-.236 5-.831 7.5-1.03 1.837-.146 3.344.122 5.5 0 3.478-.198 7.842-.767 12-.893.822-.025 1.156-.26 2-.282.332-.009 1.165.195 1.5.187 5.019-.121 10.4-.687 16-.687 2.203 0 4.373.51 6.5.53l1 .01c.671.007 4.338-.549 5-.54 3.295.045 3.473.678 6.5.767 7.177.211 13.499.538 18.5.948.514.042 1.014.279 1.5.323.697.063 1.364-.066 2 0 5.366.56 8.5 1.235 8.5 1.962 0 .49-1.426.957-4 1.381-.463.076-.964.151-1.5.224-.473.065-.973.128-1.5.19-3.773.446-7.909.917-14 1.205-.656.031-2.323-.028-3 0-2.977.127-3.457.232-6.799.313-.497.012-3.698-.324-4.201-.313-.497.011-4.842.303-5.345.313-4.143.08-4.656 0-9.155 0-4.138 0-8.158.151-12 .083-3.495-.061-10.343.715-13.5.604-4.835-.17-5.722-1.258-9.5-1.525-.687-.049-.854-.268-1.5-.319-.691-.055-1.858.058-2.5 0-.697-.063-3.364-.59-4-.656-5.365-.56-6.5-.773-6.5-1.5Z"
      fill="#fff"
    />
  </Svg>
)

export default SvgComponent
