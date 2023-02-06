let currentUrl = window.location.href;

if(currentUrl.includes('/account/register')){
  const myInterval2 = setInterval(()=>{
    if($('#register_email').length > 0){
      clearInterval(myInterval2);
      let userEmail = localStorage.getItem('optUserEmail');
      let registerEmailEle = $('#register_email');
      if(userEmail){
        registerEmailEle.val(userEmail);
        registerEmailEle.addClass('form-field-filled');
      }
    }
  }, 100);

}else{
  const myInterval = setInterval(()=>{
    if($('.productgrid--items article.productgrid--item').length > 0){
      clearInterval(myInterval);
      let isUserLoggedIn = $('#shopify-section-mega-menu .site-header-account-link a[href="/account/login"]').length
      if(isUserLoggedIn){
        addOptChanges();
      }
    }
  }, 100);
}

function addOptChanges(){
  $('head').append(`
  <style>
  .opt_signup{background-color:#8ebb3a;background-image:url(https://i.ibb.co/wcML7Vc/opt-sign-back.jpg);background-repeat:no-repeat;background-size:cover;padding:15px 20px;min-height:376px;}.opt_signup h3{font-size:38px;color:#fff;margin:0 auto 10px;font-weight:500;text-align:center;max-width:209px}.opt_signup .opt_form{max-width:209px;margin:0 auto}.opt_signup .opt_form input{outline:0;color:#555;border-radius:20px;padding:10px 10px 10px 13px;font-size:14px;line-height:16px;border:1px solid transparent;width:100%;transition:.2s ease-in-out}.opt_signup .opt_form input::placeholder{color:#c2c2c2}.opt_signup .opt_form button{color:#fff;background:#e7721b;border-radius:50px;padding:5px 15px;text-align:center;cursor:pointer;width:100%;border:none;margin-top:12px;font-size:13px;font-weight:400;transition:.2s ease-in-out}.opt_signup .opt_form button:focus,.opt_signup .opt_form button:hover{background:#f78632}@media (min-width:1030px) and (max-width:1268px){.opt_signup h3{font-size:24px}.opt_signup{padding:15px}.opt_signup .opt_form input{padding:7px 8px 7px 10px;font-size:13px}}@media (max-width:490px){.opt_signup h3{font-size:24px}.opt_signup{padding:15px}.opt_signup .opt_form input{padding:7px 8px 7px 10px;font-size:13px}}.opt_signup .opt_form input.opt_error{border-color:#e7721b}`);
  if($(window).width() > 767){
    let limitEle = $('.productgrid--items article.productgrid--item:nth-child(6)').length > 0;
    if(limitEle){
      limitEle = $('.productgrid--items article.productgrid--item:nth-child(6)');
    }else{
      limitEle = $('.productgrid--items article.productgrid--item:last-child');
    }
    limitEle.after(`
    <div class="opt_signup productgrid--item">
      <h3>Are you part of the club?</h3>
      <div class="opt_form">
        <input id="opt_email" type="email" required placeholder="Your Email">
        <button type="button">Sign up to earn points and earn rewards.</button>
      </div>
    </div>
    `);
  }else{
    let limitEle = $('.productgrid--items article.productgrid--item:nth-child(2)').length > 0;
    if(limitEle){
      limitEle = $('.productgrid--items article.productgrid--item:nth-child(2)');
    }else{
      limitEle = $('.productgrid--items article.productgrid--item:last-child');
    }
    limitEle.after(`
    <div class="opt_signup productgrid--item">
      <h3>Are you part of the club?</h3>
      <div class="opt_form">
        <input id="opt_email" type="email" required placeholder="Your Email">
        <button type="button">Sign up to earn points and earn rewards.</button>
      </div>
    </div>
    `);
  }

  function addChangesAgain(){
    setTimeout(()=>{
      addOptChanges();
    }, 1800);
  }

  // click to go to register page
  $('.opt_form button').on('click', function(){
    let emailVal = $('#opt_email').val();
    //validate that 
    if(validateEmail(emailVal)){
      localStorage.setItem('optUserEmail', emailVal);
      window.location.href = "https://www.brightlifedirect.com/account/register";
    }else{
      $('#opt_email').addClass('opt_error');
    }
  });
  // when clear filter
  $('.bc-sf-filter-clear-all').on('click', function(){
    addChangesAgain();
  });
  // when clear filter in title
  $('.bc-sf-filter-block-title a.bc-sf-filter-clear').on('click', function(){
    addChangesAgain();
  });

  // when click on any filter
  $('.bc-sf-filter-option-multiple-list li').on('click', function(){
    addChangesAgain();
  });
  // when click clear selected
  $('.bc-sf-filter-selected-items .selected-item a').on('click', function(){
    addChangesAgain();
  });
  // when click on paging
  $('#bc-sf-filter-top-show-limit a').on('click', function(){
    addChangesAgain();
  });

  // when click pn pagination
  $('#bc-sf-filter-bottom-pagination a.pagination--item').on('click', function(){
    addChangesAgain();
  });
  // validate email pattern
  function validateEmail(email){
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
}