
/*$('#button').click(() => {
db.collection("users")
    .add({
        subject: $('#subject').val(),
        credit: '3',
        grade: Number($('#grade').val()),
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        $('#subject').val('')
        $('#grade').val('')
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
})
/*db.collection('users').orderBy("subject").onSnapshot(doc => {
        let table = $('tbody')[0]
        $("tbody tr").remove()
        gpa = 0
        credit = 0
        //document.querySelectorAll("tbody tr").forEach(item => item.remove())
        doc.forEach(item => {
            let row = table.insertRow(-1)
            let firstCell = row.insertCell(0)
            let secoundCell = row.insertCell(1)
            firstCell.textContent = item.data().subject
            secoundCell.textContent = item.data().grade
            gpa += ((item.data().grade) * (item.data().credit))
            credit += item.data().credit
        })
        console.log(gpa/credit)
        $('h4').text(gpa/credit)
    })
*/

// index.js
let firebaseConfig = {
    apiKey: "AIzaSyBzfdUNQR9e0fVLbnSA_eSva6oP3feq9HI",
    authDomain: "localhost",
    projectId: "database-2d6f4",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();



$('button').click(() => {
    if($('#subject').val()==='' || $('#credit').val()==='' || $('#grade').val()===''){
        alert('please input all the boxes.');
    }else{
    db.collection("USERS").add({
            subject: $('#subject').val(),
            credit:$('#credit').val(),
            grade: Number($('#grade').val()),
            
        })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            $('#subject').val(' ')
            $('#grade').val(' ')
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        });
    }
});


db.collection("USERS").onSnapshot(doc=>{
    let table = $('tbody')[0]
    gpa =0.00;
    credit=0.00;
    N=0;
   
    $("tbody tr").remove();
    
    doc.forEach(item=>{
        let row= table.insertRow(-1)
        let firstcell =row.insertCell(0)
        let secondcell =row.insertCell(1)
        let thirdcell =row.insertCell(2)
        firstcell.textContent=item.data().subject
        secondcell.textContent=item.data().credit
        thirdcell.textContent=GPAString(item.data().grade)
        if(item.data().grade >= 0 && item.data().credit >=0){
            gpa += (item.data().grade)*(item.data().credit)
        N = item.data().credit;
        credit+=parseInt(N);
        N=0;
        }else{
            item.data().grade.remove
            item.data().credit .remove
        }

       
        
    })
    console.log()
    $('h4').text("Result : "+" "+GPAString(gpa/credit))
})

function fnDelete(){
    db.collection("USERS").remove({
        subject: $('#subject').val(),
        credit:$('#credit').val(),
        grade: Number($('#grade').val()),
        
    })
}

function GPAString(score){
   if(score>=0&&score<=4) 
    { if(score>=4)
   score = 'A';
   else if(score>=3.5)
   score = 'B+';
   else if(score>=3)
   score = 'B';
   else if(score>=2.5)
   score = 'C+';
   else if(score>=2)
   score = 'C';
   else if(score>=1.5)
   score = 'D+';
   else if(score>=1)
   score = 'D';
   else
   score = 'F';
   }
   else{
   score = 'NaN';
   }
   return score}
    