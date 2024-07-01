function handle(event){
    text = event.target.value;
    const helloText = document.getElementById('HELLO');
    console.log(helloText.innerText)
    
    helloText.innerText = `Hello, ${text}`
}

function submit(e){
    e.preventDefault();
}