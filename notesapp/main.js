showNotes();
function showNotes() {
    let notes = localStorage.getItem("notes");
    let notesArea = document.getElementById('notes');
    if (notes) {
        var notesArr = JSON.parse(notes);
        let html = '';
        notesArr.forEach(function (a, id) {
            html += `<div class="noteCard m-2 card" style="width: 18rem;">
           <div class="card-body">
               <h5 class="card-title">${id + 1}</h5>
               <p class="card-text cardTxt">${a}</p>
               <button href="#" id='${id}' onclick="deleteNotes(this.id)"  class="btn btn-primary dlnotes">Delete Note</button>
           </div>
       </div>`;
        });

        notesArea.innerHTML = html;
    }
    else {
        notesArea.innerHTML = `Nothing to you Use "Add a note to add a note"`;
    }
}

function deleteNotes(id)
{
    let notes = JSON.parse(localStorage.getItem("notes"));
    notes.splice(id,1);
    localStorage.setItem('notes',JSON.stringify(notes));
    showNotes();
}

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {
    let textElement = document.getElementById('textArea');
    textData = textElement.value;
    textElement.value = '';
    let notes = localStorage.getItem("notes");
    if (notes) {
        var notesArr = JSON.parse(notes);
    }
    else {
        var notesArr = [];
    }
    notesArr.push(textData);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    showNotes();
})

let searchElement = document.getElementById('inputSearch');
searchElement.addEventListener('input',function(){
    let txtEle = document.getElementsByClassName('noteCard');
    Array.from(txtEle).forEach(function(ele){
        let cardtxt = ele.querySelector("p.cardTxt").innerHTML;
        if (cardtxt.includes(searchElement.value.toLowerCase()))
        {
            ele.style.display='block';
        }
        else
        {
            ele.style.display='none';
        }
    });
})