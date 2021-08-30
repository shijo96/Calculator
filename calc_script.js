function clr(){
    document.getElementById("display").value = ""

}
function btClick(val){
    document.getElementById("display").value+=val

}
function btEql(){

    var text = document.getElementById("display").value
    var res = eval(text)
    document.getElementById("display").value=res

}