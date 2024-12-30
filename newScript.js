const pDFsObject = {
    firstYear : {
      subject_1 : {
        subjectName : "Communicative English",
        //[qb,ab,cw]
        pDFs : ["pdf/firstYear/Communicative_English.pdf", null, "pdf/firstYear/Communicative_English_material.pdf"],
      },
      subject_2 : {
        subjectName : "Chemistry",
        pDFs : ["pdf/firstYear/Chemistry.pdf", null, "pdf/firstYear/Chemistry_material.pdf"]
      },
      subject_3 : {
        subjectName : "Linear Algebra & Calculus",
        pDFs : ["pdf/firstYear/Linear_Algebra_and_Calculus.pdf", null, "pdf/firstYear/LAandC_Notes.pdf"]
      },
      subject_4 : {
        subjectName : "Basic Civil Engineering",
        pDFs : null
      },
      subject_5 : {
        subjectName : "Basic Mechanical Engineering",
        pDFs : ["pdf/firstYear/Basic_mechanical_engineering.pdf", "pdf/firstYear/BME_AnswerBank.pdf", null]
      },
      subject_6 : {
        subjectName : "Introduction to Programming",
        pDFs : ["pdf/firstYear/Introduction_to_Programming.pdf", null, null]
      },
      subject_7 : {
        subjectName : "Engineering Physics",
        pDFs : ["pdf/firstYear/Engineering_Physics.pdf", "pdf/firstYear/Engineering_Physics_AnswerBank.pdf", "pdf/firstYear/Engineering_Physics_notes.pdf"]
      },
      subject_8 : {
        subjectName : "Differential Equations & Vector Calculus",
        pDFs : ["pdf/firstYear/Differential_Equations_and_Vector_Calculus.pdf", "pdf/firstYear/DEVC_AnswerBank.pdf", null]
      },
      subject_9 : {
        subjectName : "Basic Electrical Engineering (Part A)",
        pDFs : ["pdf/firstYear/Basic_Electrical_Engineering.pdf", null, "pdf/firstYear/BEEE_PART_A_compressed.pdf"]
      },
      subject_10 : {
        subjectName : "Basic Electronics Engineering (Part B)",
        pDFs : ["pdf/firstYear/BEEE_Question_Bank.pdf", null, "pdf/firstYear/BEEE_ClassWork_PartB-compressed.pdf"]
      },
      subject_11 : {
        subjectName : "Data Structures",
        pDFs : ["pdf/firstYear/Data_Structures.pdf", "pdf/firstYear/Data_Structures_AnswerBank.pdf", null]
      },
      subject_12 : {
        subjectName : "Engineering Graphics",
        pDFs : ["pdf/firstYear/Engineering_Graphics.pdf", "pdf/firstYear/Engineering_Graphics_AnswerBank.pdf", null]
      }
    },

    secondYear : {
      subject_1 : {
        subjectName : "Discrete Mathematics and Graph Theory",
        pDFs : null
      },
      subject_2 : {
        subjectName : "Universal Human Values",
        pDFs : [null,null,"pdf/secondYear/UHV_unit1.pdf"]
      },
      subject_3 : {
        subjectName : "Principles of Artificial Intelligence",
        pDFs : null
      },
      subject_4 : {
        subjectName : "Advanced Data Structures and Algorithm Analysis",
        pDFs : null
      },
      subject_5 : {
        subjectName : "Object Oriented Programming and Through Java",
        pDFs : null
      },
      subject_6 : {
        subjectName : "Environmental Science",
        pDFs : null
      },
      subject_7 : {
        subjectName : "Optimization Techniques",
        pDFs : null
      },
      subject_8 : {
        subjectName : "Probability and Statistics",
        pDFs : null
      },
      subject_9 : {
        subjectName : "Machine Learning",
        pDFs : null
      },
      subject_10 : {
        subjectName : "Database Management Systems",
        pDFs : null
      },
      subject_11 : {
        subjectName : "Digital Logic & Computer Organization",
        pDFs : null
      }
    },
    // thirdYear : null,
    // fourthYear : null
};
const createTableRow=()=>{
    const tableRow =  document.createElement('tr');
    //<td><span class = 'serial_number'></span><td>
    const serialNumberCell = (function(){
        const tableCell = document.createElement('td');
        const spanTag = document.createElement('span');
        spanTag.setAttribute('class','serial_number');
        tableCell.appendChild(spanTag);
        return tableCell;
    })();
    //<td><span class ='subject_name'></span></td>
    const subjectCell = (function(){
        const tableCell = document.createElement('td');
        const spanTag = document.createElement('span');
        spanTag.setAttribute('class','subject_name');
        tableCell.appendChild(spanTag);
        return tableCell;
    })();
    //<td data-label = "Qns-Bank  : "><a class='question_banks pdfcell'></a> </td>
    const questionBankCell = (function(){
        const tableCell = document.createElement('td');
        tableCell.setAttribute("data-label","Qns-Bank : ");
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('class','question_banks pdfcell');
        tableCell.appendChild(anchorTag);
        return tableCell;
    })();
    //<td data-label = "Ans-Bank : "><a class = "answer_banks pdfcell"></a></td>  
    const answerBankCell = (function(){
        const tableCell = document.createElement('td');
        tableCell.setAttribute("data-label","Ans-Bank : ");
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('class','answer_banks pdfcell');
        tableCell.appendChild(anchorTag);
        return tableCell;
    })();
    //<td data-label = 'Cls-Work :'><a class = "class_works pdfcell"></a></td>
    const classWorkCell = (function(){
        const tableCell = document.createElement('td');
        tableCell.setAttribute('data-label','Cls-Work : ');
        const anchorTag = document.createElement('a');
        anchorTag.setAttribute('class','class_works pdfcell');
        tableCell.appendChild(anchorTag);
        return tableCell;
    })();

    [serialNumberCell,subjectCell,questionBankCell,answerBankCell,classWorkCell].forEach(cell=>tableRow.append(cell));
    console.log('table row created');
    return tableRow
}
const tableBody = document.querySelector('tbody');
const allYears = Object.keys(pDFsObject); //[firstYear,secondYear,thirdYear,fourthYear]
const createTable=year=>{
    tableBody.innerHTML = "";
    const tableCaption = document.querySelector('caption');
    tableCaption.innerHTML = `Year : ${year+1}&nbsp`
    if (pDFsObject[allYears[year]]===null){
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.setAttribute('colSpan','5');
        cell.innerHTML = "CURRENTLY NOT AVAILABLE";
        cell.style.color = 'black';
        row.append(cell);
        tableBody.append(row);
        // tableBody.style.height = '30vh';
    }else{
        (function(){
            const subjectNumbers = Object.keys(pDFsObject[allYears[year]]);
            const pointer = pDFsObject[allYears[year]];
            let serialNumber = 1;
            subjectNumbers.forEach(e=>{
                if (pointer[e].pDFs!=null){
                    let row = createTableRow();
                    row.children[0].firstChild.innerHTML = serialNumber;
                    serialNumber++;
                    row.children[1].firstChild.innerHTML = pointer[e].subjectName;
                    const checkPDFs =array=>array!=null?true:false;
                    if (checkPDFs(pointer[e].pDFs)){
                        pointer[e].pDFs.forEach((e,i)=>{
                            const anchorTag = row.children[i+2].firstChild;
                            if (e!=null){
                                anchorTag.setAttribute('href',e);
                                anchorTag.setAttribute('download','');
                                anchorTag.innerHTML = 'Available';
                            }else{
                                anchorTag.innerHTML = 'Not available';
                            }
                        })
                    }
                    tableBody.append(row);
                }
            })
        })();
    }
    console.log('created a table');
}

const yearBoxes = Array.from(document.getElementsByClassName('years_box'));
yearBoxes.forEach(year=>year.onclick=function(){
    tableBody.innerHTML = ''
    createTable(yearBoxes.indexOf(year));
    document.querySelector('tbody').scrollIntoView({
        behavior : 'smooth'
    })
}) 


//search

const searchButton = document.querySelector('button');
searchButton.addEventListener('click',function(){
    let isFound = false;
    const searchBar = document.querySelector('input');
    const userInput = searchBar.value.toLowerCase().trim();
    const allYears = Object.keys(pDFsObject);


    console.log(allYears);
    for (let year of allYears){
        if (year!=null){
            const subjectObjects = Object.values(pDFsObject[year]);
            const requiredObject = subjectObjects.find(obj=>obj.subjectName.toLowerCase().trim()==userInput);
            if (requiredObject!=undefined){
                isFound = true;
                tableBody.innerHTML = "";
                let row = createTableRow();
                const tableCaption = document.querySelector('caption');
                tableCaption.innerHTML = 'Results Found';
                
                row.children[0].firstChild.innerHTML = 1;
                row.children[1].firstChild.innerHTML = requiredObject.subjectName;
                requiredObject.pDFs.forEach((p,i)=>{
                    if(p!=null){
                        row.children[2+i].firstChild.setAttribute('href',p);
                        row.children[2+i].firstChild.setAttribute('download','');
                        row.children[2+i].firstChild.innerHTML = 'Available'
                    }else{
                        row.children[2+i].firstChild.innerHTML = 'Not available';
                    }

                });
                tableBody.appendChild(row);
                tableBody.scrollIntoView({
                    behavior:"smooth"
                })
            }else{
                isFound = isFound?true:false;
            }
        }
    }
    if (!isFound){
        alert('Not found\nEnter full subject name');
    }

});

(function() {
    const anchorTags = Array.from(document.getElementsByTagName('a')).filter(e => e.innerHTML=== 'Not available');
    anchorTags.forEach(e=>{
        e.addEventListener('click',function() {
            alert('Downloading...');
        });
    });
})();

const row = document.createElement("tr");
const cell = document.createElement("td");
cell.innerHTML = "SELECT THE APPROPRIATE YEAR TO VIEW THE AVAILABLE PDFS";
cell.style.color="black";
cell.setAttribute("colSpan","5");
row.appendChild(cell);
tableBody.appendChild(row);



const updateYearBoxContent =year=>{
    const totalPDFs2 = document.getElementsByClassName('totalpDFs')[allYears.indexOf(year)];
    const totalPDFs = document.getElementsByClassName('total_subjects')[allYears.indexOf(year)];
    const availablePDFs = document.getElementsByClassName('available_pdfs')[allYears.indexOf(year)];


    const availablePDFsCount = Object.values(pDFsObject[year]).reduce((a,b)=>{
      if (b.pDFs!=null){
          return a + b.pDFs.filter(e=>e!=null).length;
      }
      else return a;
  },0);
    availablePDFs.innerHTML = `Available PDFs : ${availablePDFsCount}`;
    const totalPDFsCount = Object.values(pDFsObject[year])
    totalPDFs.innerHTML = `Subjects : ${totalPDFsCount.length}`;
    totalPDFs2.innerHTML = `Total PDFs : ${totalPDFsCount.length*3}`;
}
allYears.filter(e=>Object.values(pDFsObject[e])!=null?true:false).forEach(e=>updateYearBoxContent(e));

//others
const screenWidth = window.innerWidth
if (screenWidth<767){
    document.getElementsByClassName("mainLOGO")[0].setAttribute("src","whitebars.png");
    document.getElementsByTagName("th")[0].style.display = "none";
}

const about = document.getElementById("aboutNav");
about.onclick = function(){
    alert("Not available");
}


//others - to be modified

const header = document.getElementsByTagName("header")[0];
header.onclick = function(){
    document.getElementsByTagName("nav")[0].style.display = "block";
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
