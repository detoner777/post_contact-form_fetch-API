
// https://www.youtube.com/watch?v=c3qWHnJJbSY (have enother example with URLSearchParam send method)

const postData = document.getElementById('postData');

    postData.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this);

        fetch('form.php', {
            method: 'post',
            body: formData
      }).then(function (response) {
          return response.text();
      }).then(function (text) {
          console.log(text);
      }).catch(function (error) {
          console.error(error);
      })
    });



/* Have e problems with code below

document.getElementById('postData').addEventListener('submit', postData);

 function postData(event){
            event.preventDefault();

            let firstName = document.getElementById('fname').value;
            let secondName = document.getElementById('sname').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: new Headers(),
                body:JSON.stringify({firstName:firstName, secondName:secondName})
                })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err)) => console.log(err))
                
            }
           */

