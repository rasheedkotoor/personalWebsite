$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            fName:{
                required:true,
            },
            lName:{
                required:true,
            },
            emailid:{
                required:true,
                email:true,
            },
            mobnum:{
                required:true,
                number:true,
                minilength:10,
                maxlength:10,
            },
            whatnum:{
                required:true,
                number:true,
                minilength:10,
                maxlength:10,
            },
            message1:{
                required:true,
            },
            message2:{
                required:true,
            }
        },
        messages:{
            fName:"Enter first name",
            lName:"Enter Last name",
            emailid:"Enter a valid email",
            mobnum:"Enter Contact number",
            whatnum:"Enter whatsapp number",
            message1:"leave some Messages"
        }
    })
})