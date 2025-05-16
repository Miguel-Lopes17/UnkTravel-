const elements = [
    '.containerimg',
    '.containerlogin',
    '.containericon' ,
    '.logincontainer',
    '.phrase-email',
    '.phrase-password',
    '.email',
    '.password'
];           

function back() {
    const hasMoveClass = elements.every(selector => {
        const el = document.querySelector(selector);
        return el && el.classList.contains('move');
    });

    elements.forEach(selector => {
        const el = document.querySelector(selector);
        if (el) {
            hasMoveClass 
                ? el.classList.remove('move') : window.location.href = "../index.html";    
        }
    });
}

function move() {
    const cond = document.getElementById('email').value.trim();

    cond != "" 
        ? elements.forEach(selector => {document.querySelector(selector).classList.add('move');}) : ""
}       