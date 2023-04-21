let search_text = document.querySelector('.search').value

function addEvent() {
  let added_task = document.querySelector('.event').value
  if (added_task === '') {
    document.querySelector('spann').innerHTML = "You must enter a task"
  } else {
    // adding an "li"
    let li = document.createElement("li")
    li.className = "lyst"
    document.querySelector('.ul').appendChild(li)

    //creating a p tag that will contain the task
    let task = document.createElement('p')
    task.innerHTML = added_task
    task.className = "ptag"
    li.appendChild(task)

    //create a span that will contain all the buttons
    const actionbtn = document.createElement('div')
    li.appendChild(actionbtn)

    // creating a check button
    let checkbtn = document.createElement('button')
    checkbtn.innerHTML = '<i class="fa-solid fa-check"></i>'
    checkbtn.className = "checkbtn"
    actionbtn.appendChild(checkbtn)

    // creating a delete btn
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    deleteBtn.className = "deleteBtn"
    actionbtn.appendChild(deleteBtn)

    //function to delete task
    deleteBtn.addEventListener('click', function() {
      li.remove()
    })

    // line through function
    checkbtn.addEventListener('click', function() {
      let todoContainer = document.querySelector('.ul')
      todoContainer[0] = li.style.textDecoration = "line-through"
    })
    // removing line-through function
    checkbtn.addEventListener('dblclick', function() {
      let todoContainer = document.querySelector('.ul')
      todoContainer[0] = li.style.textDecoration = "none"
    })
  }
  added_task = ""
  // saveData()
}

// function saveData() {
//   let addText = document.querySelector('.ul')
//   localStorage.setItem("data", addText.innerHTML)
// }

// function showTask() {
//   document.querySelector('.ul').innerHTML = localStorage.getItem("data")
// }
// showTask()

