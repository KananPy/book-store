const form = document.querySelector('#form');
const form_btn = document.querySelector('#form_btn');
const text_area = document.querySelector('#text_form');
const text_anonim_two = document.querySelector('#textarea_two')
form_btn.addEventListener('click', (e) => {
    e.preventDefault()


    const name = document.querySelector('#fname').value;

    const myPostObj = {
        title: "New post",
        body: name,
      };
      const mypromiseCreate = $.ajax(
        "https://blog-api-t6u0.onrender.com/posts",
        {
          method: "POST",
          data: myPostObj,
        }
      );
      mypromiseCreate.then((res) => {
        console.log("res", res);
        text_area.innerHTML = res.body;
        text_anonim_two.innerHTML = res.body;
      })
      
      
})
