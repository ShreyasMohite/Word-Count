const lengths = () => {
    let words = document.getElementById("words").value;
    let words_length = words.length;
    document.getElementById("answer").innerHTML = words_length;


}