// comment button


function postComment(postId) {

    let comment = document.getElementById(`${postId}`).value;

    const request = new XMLHttpRequest();

    request.open('POST', `/post/${postId}/comment/${comment}`);
    request.onload = function () {
        console.log('this.res: ', this.responseText);
    }
    request.send();

    //     let val = document.querySelector(".inp").value;
    //     let heading = document.querySelector(".heading");
    //     heading.innerHTML = heading.innerHTML + val;

    // let display = document.querySelector(".bt");

}

function likePost(postId) {

    // Change DOM content directly since the data wont be changed yet
    let likes = document.querySelector('.like').innerHTML;
    likes = Number(likes.replace(' likes', '').trim());
    likes++;
    likes = likes + " likes";
    document.querySelector('.like').innerHTML = likes;

    const request = new XMLHttpRequest();

    request.open('POST', `/post/${postId}/like`);
    request.onload = function () {
        console.log('this.res: ', this.responseText);
    }
    request.send();

}

// document.querySelector(".bt").addEventListener('click', () => {
//     let val = document.querySelector(".inp").value;
//     let heading = document.querySelector(".heading");
//     heading.innerHTML = heading.innerHTML + val;



//     // console.log(heading.innerHTML);


//     // document.querySelector(".bt").addEventListener('click',() => {   
//     //     let hdn = document.querySelector(".hdn");
//     //     console.log("hdn")
//     //     hdn.innerHTML = givenvalue;
//     //     document.querySelector(".inp").value = "";

//     // let givennvalue;
//     // document.querySelector(".submitbt").addEventListener('click',() => {

//     //     let hdn = document.querySelector(".likedis");



//     //     givennvalue = document.querySelector(".upfile").value;
//     //     // console.log("hdn")
//     //     hdn.innerHTML = givennvalue;
//     //     document.querySelector(".upfile").value = "";

// });




function toggle() {
    document.querySelector('.commentsContainor').style.display = document.querySelector('.commentsContainor').style.display=="block" ? "none" : "block";
}