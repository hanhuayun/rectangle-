$(()=>{
  //get dom elem
  let $width=$("#width"),
      $height=$("#height"),
      $btnCal=$("#calc"),
      $form=$("#main"),
      $widthValidate=$("#width-validate"),
      $heightValidate=$("#height-validate"),
      $perimeter=$("#perimeter"),
      $area=$("#area");
/*
//多字段校验事件冒泡机制
$form.focusout((e)=>{
  console.log(e.target);
});
*/
  $width.keypress((e)=>{
    let key=e.key,
        val=e.target.value,
        pos=e.target.selectionStart;
    /*if(/[abcdf-zAECDF-Z`~！@#$%^&*()=_+[\]{}|;'",<>/?\\]/.test(key)) e.preventDefault();
    if(val.indexOf('e')!==-1) e.preventDefault();
    console.log(e.key);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.target.selectionStart);*/
  val=val.slice(0,pos)+key+val.slice(pos,val.ength);
    if(!/^(0|[1-9]\d*)(\.\d+)?((e|E)(\+|-)?\d+)?$/.test(val)) e.preventDefault();
  });
  $height.keypress();
  $width.focusout(()=>{
    if(!validate($width,$widthValidate)){
      $width.select();
    }
  });
  $height.focusout(()=>{
    if(!validate($height,$heightValidate)){
      $height.select();
    }
  });
 
  //calc button click
  $btnCal.click(()=>{
    //get value
    let w=Number($width.val()),
        h=Number($height.val());
    //validate
    if(validate($width,$widthValidate)&&validate($height,$heightValidate)){
      //calc
      let p=(w+h)*2,
          a=w*h;
      /*
       *小数点后面保留第 n 位
       * @param x 做近似处理的数
       * @param n 小数点后第 n 位
       * @returns 近似处理后的数 
      */
      function roundFractional(x, n) {
        return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
      }

      $perimeter.val(roundFractional(p,1));
      $area.val(roundFractional(a,2));
    }
  })
});
function validate(input,output){
  //is empty
  if(input.val()===""){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html("");
  }

  //is number
  let val=Number(input.val());
  if(isNaN(val)){
    output.html('该字段应该是数值');
    return false;
  }else{
    output.html("");
  }

  //is +
  if(val<0){
    output.html('该数值不能小于0');
    return false;
  }else{
    output.html("");
  }

  return true;
}
