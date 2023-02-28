// click to bold font weight
document.getElementById("bold").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.fontWeight = 'bold';
});
// click to bold font size
document.getElementById("italic").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.fontStyle = 'italic';
})
// click to text decoration underline
document.getElementById("underline").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.textDecoration = 'underline';
});
// click to  text align start
document.getElementById("left").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.textAlign = 'left';
});
// click to text align center
document.getElementById("center").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.textAlign = 'center';
});
// click to text align right
document.getElementById("right").addEventListener('click', function(){
    const text = document.getElementById("text-value").style.textAlign = 'right';
});
function loadText(){
    const text = document.getElementById("text-value").value;
    const element = text;
    return element;

}
// post button click handler
document.getElementById("post").addEventListener('click', function(){
    const container = document.getElementById("post-area");
    const text = loadText("text-value");
    container.appendChild(text)

})