

// function to add a coment to the comment list
var counter=0

function submitEntry(){
	var username=document.getElementById('username').value
	var comment=document.getElementById('comment').value
	var newComment=document.createElement('li')
	newComment.setAttribute('class','border')
	var newUser=document.createElement('h4')
	var newCommentText=document.createElement('p')
	newCommentText.setAttribute('class','visible')
	newUser.textContent="Username: " + username
	console.log(newUser.textContent)
	newCommentText.textContent="Comment: " + comment
	console.log(newCommentText.textContent)
	newComment.appendChild(newUser)
	newComment.appendChild(newCommentText)
	var date=document.createElement('p')
	date.textContent=Date()
	newComment.appendChild(date)
	document.getElementById('addComment').appendChild(newComment)
	newComment.setAttribute('id',Date())
	var deleteButton=document.createElement('button')
	var editButton=document.createElement('button')
	var showButton=document.createElement('button')
	deleteButton.textContent='Delete'
	showButton.textContent='Show/Hide'
	newComment.appendChild(showButton)
	newComment.appendChild(deleteButton)
	deleteButton.setAttribute('onclick','del(this)')
	showButton.setAttribute('onclick','show(this)')
	counter++

	if (counter%2==0){
		newComment.className+=' red'
	}else{
		newComment.className+=' green'
	}


}//function to create a comment ends here

function del(e){
	var id=e.parentNode.getAttribute('id')
	var elem = document.getElementById(id);
    elem.parentNode.removeChild(elem);
    colorAdjust()
}

function show(e){
	var id=e.parentNode.getAttribute('id')
	var elem = document.getElementById(id);
	var dispStatus=elem.children[1].getAttribute('class')
	

	if (dispStatus==='visible'){
		elem.children[1].setAttribute('class','hidden')
	}else{
		elem.children[1].setAttribute('class','visible')
	}
}



function colorAdjust(){
	var liArray=document.getElementById('addComment').children
	console.log(liArray)

	for (var i=0;i<liArray.length;i++){
		if (i%2==0){
			liArray.className="border red"
		}else{
			liArray.className="border green"
		}
	}
}