$(()=>{
 //get dom elem
 let $width=$("#width"),
     $height=$("#height"),
     $btnCal=$("#calc"),
     $perimeter=$("#perimeter"),
     $area=$("#area");
//calc button click
$btnCal.click(()=>{
  //get value
  let w=Number($width.val()),
      h=Number($height.val());
  //calc
  let p=(w+h)*2,
      a=w*h;
/**
*小数点后面保留第 n 位
*
* @param x 做近似处理的数
* @param n 小数点后第 n 位
* @returns 近似处理后的数 
*/
function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}
  $perimeter.val(roundFractional(p,1));
  $area.val(roundFractional(a,2));
})
})
