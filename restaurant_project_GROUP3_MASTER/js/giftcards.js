window.onload=execute;
function execute(){
    var elem=document.getElementById("rdm");
    elem.onclick=redeem;
    function redeem(){
        var input= document.getElementsByName("code");  
        switch(input.value){
        case("Silver"):
            document.getElementById("balance").innerHTML="Your Current balance is : 50 CAD";
            break;
            case("Gold"):
            document.getElementById("balance").innerHTML="Your Current balance is : 100 CAD";
            break;
            case("Platinum"):
            document.getElementById("balance").innerHTML="Your Current balance is : 150CAD";
            break;
            default:
                document.getElementById("balance").innerHTML="Your Current balance is : 0 CAD";
            break;
        }
    }
    }