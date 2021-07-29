


function add() {
    var body = document.getElementById('text-box').value;
    console.log(body);

    axios.post('https://jsonplaceholder.typicode.com/posts', {
    userId: '29',
    id:'20',
    title: 'my Post',
    body: body

    
    })
    .then(response => showOutput(response))
    .catch(error => console.error(error));
}

//PATCH
function update() {
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    title: 'Updated post',
    completed: true
    })
    .then(response => showOutput(response))
    .catch(error => console.error(error));
}

// DELETE S
function remove() {
axios.delete('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => showOutput(response))
    .catch(error => console.error(error));
}

// GET REQUEST
document.addEventListener('DOMContentLoaded', 

function getPosts() {
axios.get('https://jsonplaceholder.typicode.com/posts', {
    })
    .then(response => showPosts(response))
    .catch(error => console.error(error));
});



// Show output in browser
function showOutput(response) {
    if (response.status == 201){
        document.getElementById('response').innerHTML = `
        <div>
            <h5>Status: post is created succesfully</h5>
        </div>`;

    } else if (response.status == 200) {
        document.getElementById('response').innerHTML = `
        <div>
            <h5>Status: success</h5>
        </div>`;
    } else {
        document.getElementById('response').innerHTML = `
        <div>
            <h5>Status: success</h5>
        </div>`;
    }

}


function showPosts(response) {
    var arrayLength = response.data.length;
    console.log(arrayLength);
    for (i=0; i<arrayLength; i++){
        console.log(response.data[i].title);
        var showPosts = document.getElementById('response');
        showPosts.innerHTML += '<br><h1><b>' + response.data[i].title + "</b></h1>";
        showPosts.innerHTML += '<br><p><b>' + response.data[i].userId + "</b></p>";
        showPosts.innerHTML += '<br><p><b>' + response.data[i].id + "</b></p>";
        showPosts.innerHTML += '<br><p><b>' + response.data[i].body + "</b></p>";
        showPosts.innerHTML += '<hr>';

       
     }
    
    }
// document.getElementById('get').addEventListener('click', getPosts);
document.getElementById('post').addEventListener('click', add);
document.getElementById('update').addEventListener('click', update);
document.getElementById('delete').addEventListener('click', remove);