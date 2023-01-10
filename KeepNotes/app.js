
let addButton = document.getElementById("add");

let updateLocalStorage = () =>{
    let textAreaData = document.querySelectorAll("textarea");
    console.log(typeof textAreaData)
    let notesArray = [] ;
   
    textAreaData.forEach((data) => {
        return notesArray.push(data.value);

    })
    localStorage.setItem("notesArray",JSON.stringify(notesArray))
    
};



let show = (text = "") => {
    let newNote = document.createElement("div");
    newNote.classList.add("note");
    // console.log(newNote)

    let htmlData = `
    <div class="tools">
    <button class="edit" id="edit" ><i class="far fa-edit"></i></button>
    <button class="edit" id="delete"><i class="far fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ?  "" : "hidden"}"></div>
    <textarea class=" ${text ?  "hidden" : ""}" ></textarea>
    `;

    newNote.insertAdjacentHTML('afterbegin', htmlData);

    document.body.appendChild(newNote)

    // Getting references***********************************
    let editButton = newNote.querySelector(".edit")
    let deleteButton = newNote.querySelector("#delete");
    let mainDiv = newNote.querySelector(".main");
    let textArea = newNote.querySelector("textarea");
     
    textArea.value = text;
    mainDiv.innerHTML = text;

    
    //    Editing the content of element**************
    editButton.addEventListener("click", () => {
        mainDiv.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
        mainDiv.innerHTML = textArea.value;

        updateLocalStorage();
    
    })


    //    deleting element************************
    deleteButton.addEventListener("click", () => {
        newNote.remove();
        updateLocalStorage();
    })

}

let notes = JSON.parse(localStorage.getItem("notesArray"));
console.log(notes)
if(notes) notes.forEach((note)=> show(note))


addButton.addEventListener("click", () => show());



