let colors = ["red","orange","purple","blue","teal","white"];

for(let i=0;i<colors.length;i++){
  $(".color-options li").eq(i).css("background-color",colors[i]);
}

$(".color-options li").click(function(){
  
  let currentBG = $(this).css("background-color");
  $(".change").css("color",currentBG);

})


$(".color-box i").click(function(){
    let optionsWidth = $(".color-options").outerWidth();   
    if($(".color-box").css("left")=='0px'){
      $(".color-box").animate({"left":-optionsWidth},2000);
    }
    else{
      $(".color-box").animate({"left":0},2000);
    }
})
