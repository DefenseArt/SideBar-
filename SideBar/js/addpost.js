function addPost(boardId) {
    var title = document.getElementById("postTitle").value;
    var content = document.getElementById("postContent").value;
    var date = new Date().toLocaleString();
  
    var postDiv = document.createElement("div");
    postDiv.className = "card my-3";
    postDiv.innerHTML = `
      <div class="card-body">
        <h3 class="card-title">${title}</h3>
        <p class="card-text">${content}</p>
        <p class="card-text"><small class="text-muted">${date}</small></p>
        <img class="card-img-bottom" src="images/3.webp" alt="이미지">
        <button type="button" class="btn btn-danger my-3" onclick="deletePost(this)">삭제</button>
      </div>
    `;
  
    var cardText = postDiv.querySelector(".card-text");
    var cardImg = postDiv.querySelector(".card-img-bottom");
  
    postDiv.addEventListener("click", function() {
      if (cardText.style.display === "none") {
        cardText.style.display = "block";
        cardImg.style.display = "block";
      } else {
        cardText.style.display = "none";
        cardImg.style.display = "none";
      }
    });
  
    var postsDiv = document.querySelector("#" + boardId);
    postsDiv.insertBefore(postDiv, postsDiv.firstChild);
  
    savePosts(boardId);
  
    document.getElementById("postTitle").value = "";
    document.getElementById("postContent").value = "";
  
    $('#addPostModal').modal('hide');
  }
  
  function addPostPage(boardId) {
    $('#addPostModal').modal('show');
    document.getElementById("addPostModalLabel").innerHTML = "게시글 작성 - " + boardId;
    document.getElementById("addPostModal").dataset.boardId = boardId;
  }
  
  function showBoard(boardId) {
    var boards = document.querySelectorAll(".container > div");
    for (var i = 0; i < boards.length; i++) {
      boards[i].style.display = "none";
    }
    document.getElementById(boardId).style.display = "block";
    getPosts(boardId);
  }