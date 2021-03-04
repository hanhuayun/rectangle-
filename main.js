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
  $perimeter.val(p);
  $area.val(a);
})
})
