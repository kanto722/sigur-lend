// SEND MAIL
function sendFormOne(sendButton, inputName_Name, inputName_Phone) {
    $('[name = ' + sendButton + ']').on('click', function () {
        name2 = $(this).siblings('[name = ' + inputName_Name + ']').val();
        console.log("🚀 ~ file: project.js ~ line 31 ~ name2", name2)
        phone = $(this).siblings('[name = ' + inputName_Phone + ']').val();
        console.log("🚀 ~ file: project.js ~ line 33 ~ phone", phone)
  
  
        if (name2 == 0 || phone == 0) {
            alert('Заполните, пожалуйста, все поля');
            return false;
        } 
        else {
            $.ajax({
                type: 'POST',
                url: "/backend/mail.php",
                data: {
                    "name2": name2,
                    "phone": phone
                }
            });
            return false;
        }
    });
  };
  
  sendFormOne('send', 'name2', 'phone');


  // tabs
function openOne(){
    $('.tabs-btn-one').addClass('tabs-btn-one_active');
    $('.tabs-btn-one').removeClass('tabs-btn-one_close');
    $('.tabs-btn-two').addClass('tabs-btn-two_close');
    $('.tabs-btn-three').addClass('tabs-btn-three_close');


    $('.tabs-content-text_one').addClass('tabs-content-text_one_active');
    $('.tabs-content-text_one').removeClass('tabs-content-text_one_close');
    $('.tabs-content-text_two').addClass('tabs-content-text_two_close');
    $('.tabs-content-text_two').removeClass('tabs-content-text_two_active');
    $('.tabs-content-text_three').addClass('tabs-content-text_three_close');
    $('.tabs-content-text_three').removeClass('tabs-content-text_three_active');

}

function openTwo(){
    $('.tabs-btn-one').addClass('tabs-btn-one_close');
    $('.tabs-btn-one').removeClass('tabs-btn-one_active');
    $('.tabs-btn-two').removeClass('tabs-btn-two_close');
    $('.tabs-btn-two').addClass('tabs-btn-two_active');
    $('.tabs-btn-three').addClass('tabs-btn-three_close');


    $('.tabs-btn-two').addClass('tabs-btn_active');
    $('.tabs-content-text_one').addClass('tabs-content-text_one_close');
    $('.tabs-content-text_one').removeClass('tabs-content-text_one_active');
    $('.tabs-content-text_two').addClass('tabs-content-text_two_active');
    $('.tabs-content-text_two').removeClass('tabs-content-text_two_close');
    $('.tabs-content-text_three').addClass('tabs-content-text_three_close');
    $('.tabs-content-text_three').removeClass('tabs-content-text_three_active');
}

function openThree(){
    $('.tabs-btn-one').addClass('tabs-btn-one_close');
    $('.tabs-btn-one').removeClass('tabs-btn-one_active');
    $('.tabs-btn-two').removeClass('tabs-btn-two_active');
    $('.tabs-btn-two').addClass('tabs-btn-two_close');
    $('.tabs-btn-three').addClass('tabs-btn-three_active');
    $('.tabs-btn-three').removeClass('tabs-btn-three_close');


    $('.tabs-btn-three').addClass('tabs-btn_active');
    $('.tabs-content-text_one').addClass('tabs-content-text_one_close');
    $('.tabs-content-text_one').removeClass('tabs-content-text_one_active');
    $('.tabs-content-text_two').addClass('tabs-content-text_two_close');
    $('.tabs-content-text_two').removeClass('tabs-content-text_two_active');
    $('.tabs-content-text_three').addClass('tabs-content-text_three_active');
    $('.tabs-content-text_three').removeClass('tabs-content-text_three_close');
}
// tabs