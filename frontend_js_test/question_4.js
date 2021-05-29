// Assume we have a form e.g
// <form>
//    <input type=”text” name=”firstname” />
//    <input type=”check” name=”checkme” />
//    <input type=”submit” value=”submit”
// </form>
// For the above form, write validation in javascript so that if the
//  firstname is empty or if checkme is not checked, it will not allow 
//  the form to submit.

let submitBtn = document.getElementById("btn")
submitBtn.addEventListener("click", Validation)

function Validation(){
    let name = document.getElementById("firstname").value
    let checkBox = document.getElementById("checkme")
    if (name == ""){
        alert("Enter First Name")
    }
    else if (checkBox.checked == false){
        alert("ClickOn CheckBox")
    }
    else{
        document.getElementById("sucessfull").innerHTML = "sucessfull"
    }
}