//serial numbers path
const serial_number = document.getElementsByClassName("serial_number");

//function to update_serial_numbers
function update_serial_numbers(num){

    for (let i=0;i<num;i++){
        serial_number[i].innerHTML=i+1;
    }

    console.log(`${num} Serial numbers updated`);
}



//changing subjects
const subject = document.getElementsByClassName("subject_name");
const all_subjects = [
    ["Communicative English","Engineering Chemistry","Linear Algebra & Calculus","Basic Civil Engineering","Basic Mechanical Engineering","Introduction to Programming","Engineering Physics","Differential Equations & Vector Calculus","Basic Electrical Engineering ","Basic Electronics Engineering","Data Structures","Engineering Graphics"],
    ["Discrete Mathematics and Graph Theory","Universal Human Values","Principles of Artificial Intelligence","Advanced Data Structures and Algorithm Analysis","Object Oriented Programming and Through Java","Environmental Science","Optimization Techniques","Probability and Statistics","Machine Learning","Database Management Systems","Digital Logic & Computer Organization"],
    [null],
    [null]
] 

function update_subjects(subjectArray){
    if(subjectArray.length===1 || subjectArray==null){
        return;
    }
    for (let i=0;i<subjectArray.length;i++){
        subject[i].innerHTML = subjectArray[i];
    }
    console.log(`${subjectArray.length} subjects updated`);
}


//to manipulate PDFS
let downloads_array = [
    [ //[0,0]
        ["pdf/firstYear/Communicative_English.pdf",null,"pdf/firstYear/Communicative_English_material.pdf"],// QB, AB, CW for Communicative English - [0][0][]
        ["pdf/firstYear/Chemistry.pdf",null,"pdf/firstYear/Chemistry_material.pdf"],// chemistry
        ["pdf/firstYear/Linear_Algebra_and_Calculus.pdf",null,null],// Linear Algebra & Calculus
        [null,null,null],// Basic Civil Engineering
        ["pdf/firstYear/Basic_mechanical_engineering.pdf",null,null],// Basic Mechanical Engineering
        ["pdf/firstYear/Introduction_to_Programming.pdf",null,null],// Introduction to Programming
        ["pdf/firstYear/Engineering_Physics.pdf","pdf/firstYear/Engineering_Physics_AnswerBank.pdf","pdf/firstYear/Engineering_Physics_notes.pdf"],// Engineering Physics
        ["pdf/firstYear/Differential_Equations_and_Vector_Calculus.pdf",null,null],// Differential Equations & Vector Calculus
        ["pdf/firstYear/Basic_Electrical_Engineering.pdf",null,null],// Basic Electrical Engineering
        [null,null,null],// Basic Electronics Engineering
        ["pdf/firstYear/Data_Structures.pdf","pdf/firstYear/Data_Structures_AnswerBank.pdf",null], // Data Structures
        ["pdf/firstYear/Engineering_Graphics.pdf","pdf/firstYear/Engineering_Graphics_AnswerBank.pdf",null]//Engineering Graphics
    ], //1st year
    [null], //2nd year
    [null], //3rd year
    [null]  //4th year
];


//to Create table rows
function create_table_row(){

    const new_table_row = document.createElement('tr');
    
    //table cells
    let serial_number_cell;
    let subject_name_cell;
    let question_bank_cell;
    let answer_bank_cell;
    let class_work_cell;

    for(let i=0;i<5;i++){
        switch(i){
            case 0:
                const spanTag = document.createElement('span');
                spanTag.setAttribute("class","serial_number");
                spanTag.innerHTML = "number";

                const table_cell_1 = document.createElement('td');
                table_cell_1.appendChild(spanTag);
                // table_cell_1.setAttribute("data-label","S.No : ");
                new_table_row.appendChild(table_cell_1);
                console.log("1st cell created successfully");
                break;
            case 1:
                const spanTagForSubject = document.createElement('span');
                spanTagForSubject.setAttribute("class","subject_name");
                spanTagForSubject.innerHTML = "subject";

                const table_cell_2= document.createElement('td');
                table_cell_2.appendChild(spanTagForSubject);
                // table_cell_2.setAttribute("data-label","Subject : ");
                new_table_row.appendChild(table_cell_2);

                console.log("2nd cell created successfully");
                break;
            case 2:
                const a_tag_for_qb = document.createElement('a')
                a_tag_for_qb.innerHTML = "Not Available";
                
                a_tag_for_qb.setAttribute("class","question_banks pdfcell");

                a_tag_for_qb.setAttribute("href","");
                a_tag_for_qb.setAttribute("download","");

                const table_cell_3 = document.createElement('td');
                table_cell_3.appendChild(a_tag_for_qb);
                table_cell_3.setAttribute("data-label","Qns-Bank :");
                new_table_row.append(table_cell_3);

                console.log("3rd cell added successfully");
                break;
            case 3:
                const a_tag_for_ab = document.createElement('a')
                a_tag_for_ab.innerHTML = "Not Available";
                
                a_tag_for_ab.setAttribute("class","answer_banks pdfcell");
                a_tag_for_ab.setAttribute("href","");
                a_tag_for_ab.setAttribute("download","");

                const table_cell_4 = document.createElement('td');
                table_cell_4.appendChild(a_tag_for_ab);
                table_cell_4.setAttribute("data-label","Ans-Bank :");
                new_table_row.append(table_cell_4);

                console.log("4th cell added successfully");
                break;
            case 4:
                const a_tag_for_cw = document.createElement('a')
                a_tag_for_cw.innerHTML = "Not Available";
                
                a_tag_for_cw.setAttribute("class","class_works pdfcell");
                a_tag_for_cw.setAttribute("href","");
                a_tag_for_cw.setAttribute("download","");

                const table_cell_5 = document.createElement('td');
                table_cell_5.appendChild(a_tag_for_cw);
                table_cell_5.setAttribute("data-label","Cls-Work : ");
                new_table_row.append(table_cell_5);

                console.log("5th cell added successfully");
                break;
            default:
                console.log("ErroR");
        }
    }

    return new_table_row;
}
//to join table rows
function create_table(rows){
    for(let i=0;i<rows;i++){
        document.getElementById("table_body").appendChild(create_table_row());
        console.log(`ROW ${i+1} SUCCESSFULLY APPENDED TO TABLE BODY`);
    }
}

//upload pdfs to the anchor tags
function upload_pdfs(year,serial_number){
    const [destructured_value] = downloads_array[year];
    if (destructured_value==null){
        console.log(`ROW Unavailable`)
        return;
    }
    for(let i=0;i<serial_number;i++){
        //[null]
        if(false){
        }else{
            if(downloads_array[year][i][0]==null){
                document.querySelectorAll('.pdfcell')[i].parentElement.removeAttribute("href");
                document.querySelectorAll('.pdfcell')[i].parentElement.removeAttribute("download");
                console.log(`[${year}] [${i}] [${0}] unavailable`);        
            }else{
                document.getElementsByClassName("question_banks")[i].setAttribute("href",downloads_array[year][i][0]);
                document.getElementsByClassName("question_banks")[i].innerHTML = "Available";
                console.log(`[${year}] [${i}] [${0}] uploaded`);        
            }
            if(downloads_array[year][i][1]==null){
                console.log(`[${year}] [${i}] [${0}] unavailable`);
            }else{
                document.getElementsByClassName("answer_banks")[i].setAttribute("href",downloads_array[year][i][1]);
                document.getElementsByClassName("answer_banks")[i].innerHTML = "Available";
                console.log(`[${year}] [${i}] [${2}] uploaded`);
            }
            if(downloads_array[year][i][2]==null){
                console.log(`[${year}] [${i}] [${0}] unavailable`);      
            }else{
                document.getElementsByClassName("class_works")[i].setAttribute("href",downloads_array[year][i][2]);
                document.getElementsByClassName("class_works")[i].innerHTML = "Available";  
                console.log(`[${year}] [${i}] [${2}] uploaded`);
            }
        }
    }
    console.log("upload_pdf_function executed");
}

// update table caption
function update_caption(year){
    const year_array = ["First ","Second ","Third ","Fourth " ];
    const caption = document.getElementById("year_caption");
    caption.innerHTML = year_array[year];
    console.log(`Year ${year_array[year]} updated as caption`);
}

//update subjects on flex box
const update_years_flexbox =  ["12","11", "Not Available", "Not Available"];
//updates total_subjects
function update_flexBox_total_subjects(year){
    const total_subjects = document.getElementsByClassName("total_subjects");
    if(update_years_flexbox[year]!="Not Available"){
        total_subjects[year].innerHTML = `Total Subjects : ${update_years_flexbox[year]}`; 
    }else{
        total_subjects[year].innerHTML = "Not Available"; 
    }

    console.log(`TOTAL SUBJECTS : ${update_years_flexbox[year]} Updated`);
}
//updates available_subjects
function update_flexBox_available_subjects(year){
    const available_subjects = document.getElementsByClassName("available_pdfs");
    if(downloads_array[year].length!==1){ //-----------------------------------------------------------------------------------------------------------------------------------------------------------
        available_subjects[year].innerHTML = `Available : ${downloads_array[year].length}`; 
    }else{
        available_subjects[year].innerHTML = "Not Available"; 
    }

    console.log(`AVAILABLE SUBJECTS : ${downloads_array[year].length} Updated`);
}
//calling both functions
for (let i=0;i<4;i++){
    update_flexBox_available_subjects(i);
    update_flexBox_total_subjects(i);
}


// managing the unavailable PDFs(*)
function manage_all_pdfs(){
    const pdfcells = document.getElementsByClassName('pdfcell');
    for (let i = 0; i < pdfcells.length; i++){
        const cell = pdfcells[i];
        
        if (cell.innerHTML === "Not Available"){
            const parent = cell.parentElement;
            parent.removeAttribute("href");
            parent.removeAttribute("download");
            
            parent.onclick = function() {
                console.log("clicked on unavailable")
                return false; 
            };
        }
    }
    console.log("manage_all_pdfs function executed");
}



//controlling all above functions - main1 and main2
function main(year){
    let total_subjects;
    if (all_subjects[year][0]==null){
        total_subjects = 0;
    }
    else{
        total_subjects = all_subjects[year].length;
    }
    create_table(total_subjects);
    update_serial_numbers(total_subjects);
    update_subjects(all_subjects[year]);
    upload_pdfs(year,all_subjects[year].length);
    update_caption(year);
    console.log(`PDFs for year ${year+1} uploaded`);
    manage_all_pdfs();
    return;
}
function main2(year){
    update_caption(year);
    console.log(`year :  ${year+1} main 2 executed`);
    return;
}


const selectors = document.getElementsByClassName("hyper_links_to_table");

function main_control(){
    const table_body = document.getElementById("table_body");
    const new_row = document.createElement("tr");
    const new_cell = document.createElement("td");
    new_cell.innerHTML = "Select the appropriate year to view the available pdfs";
    new_cell.style.textTransform = "upperCase";
    new_cell.style.color="black";
    new_row.appendChild(new_cell);
    table_body.appendChild(new_row);
    new_cell.setAttribute("colSpan","5");
    table_body.style.height = "60vh";
    const screenx = window.innerWidth;
    if (screenx<767){
        new_cell.innerHTML = "Select a year<br>to view available PDFs";
        table_body.style.height = "25vh";
        new_row.style.display = "flex";
        table_body.style.width = "20px";
    }

    for(let i=0;i<4;i++){
        document.getElementsByClassName("years_box")[i].addEventListener("click",function(){
            if (i<2){
                table_body.innerHTML="";
                console.log("table cleared")
                main(i);
            }else if(i>=2){
                main2(i);
                table_body.innerHTML="";
                const another_new_row = document.createElement("tr");
                const another_new_cell = document.createElement("td");
                another_new_cell.innerHTML = "Currently not available";
                another_new_cell.setAttribute("colSpan","5");
                another_new_cell.style.color="black";
                another_new_row.appendChild(another_new_cell);
                table_body.appendChild(another_new_row);
                another_new_cell.style.textTransform="upperCase";
            }
        })
    }
}

// main function call to all function
main_control();

//not available
const mobile = document.getElementById("mobile");
mobile.addEventListener("click",function(){
    alert("Go for desktopp mode");
})


//new
//searchFunctionality
const single_subject_array = [
    "communicative english", "chemistry", "linear algebra and calculus", "basic civil engineering", "basic mechanical engineering", 
    "introduction to programming", "engineering physics", "differential equations and vector calculus", "basic electrical engineering", 
    "basic electronics engineering", "data structures", "engineering graphics", 
    "discrete mathematics and graph theory", "universal human values", "principles of artificial intelligence", 
    "advanced data structures and algorithm analysis", "object oriented programming through java", "environmental science", 
    "optimization techniques", "probability and statistics", "machine learning", "database management systems", 
    "digital logic and computer organization"
]
const search_button = document.getElementById("search_button");
search_button.onclick = function(){
    const search_value = document.getElementsByTagName("input")[0].value.trim().toLowerCase();
    document.getElementsByTagName("input")[0].value = " ";
    if (single_subject_array.includes(search_value)){
        let year;
        if (single_subject_array.indexOf(search_value)<=12){
            year = "First";
        }else{
            year = "Second"
        }
        alert(`
            PDFs for the subject are available\n
            please select ${year} year`)
    }else{
        alert(`
            Unavailable\n
            Enter the full name of the subject\n`)
    }
}

const about = document.getElementById("aboutNav");
about.onclick = function(){
    alert("Not available");
}


const header = document.getElementsByTagName("header")[0];
header.onclick = function(){
    document.getElementsByTagName("nav")[0].style.display = "block";
}

const screenWidth = window.innerWidth;
if (screenWidth<767){
    document.getElementsByClassName("mainLOGO")[0].setAttribute("src","whitebars.png");
}

const cross = document.getElementsByClassName("cross")[0];
cross.onclick = function(){
    cross.style.zIndex = "-1";
    document.getElementsByTagName("ol")[0].style.zIndex = "-1";
}
const navButton = document.getElementsByClassName("logo")[0];
navButton.onclick = function(){
    cross.style.zIndex = "1";
    document.getElementsByTagName("ol")[0].style.zIndex = "1";
}
const home = document.getElementById("home");
const pdfss = document.getElementById("pdf");
const navBarr = document.getElementById("aboutNav");
home.addEventListener("click",function(){
    cross.style.zIndex = "-1";
    document.getElementsByTagName("ol")[0].style.zIndex = "-1";
    console.log("Nav Bar closed by home");
})
pdfss.addEventListener("click",function(){
    cross.style.zIndex = "-1";
    document.getElementsByTagName("ol")[0].style.zIndex = "-1";
    console.log("Nav Bar closed by pdfss");
})

navBarr.addEventListener("click",function(){
    cross.style.zIndex = "-1";
    document.getElementsByTagName("ol")[0].style.zIndex = "-1";
    console.log("Nav Bar closed by about Navv");
})
const sscreenWidth = window.innerWidth;
if (sscreenWidth<767){
    document.getElementsByTagName("th")[0].style.display = "none";
}
