import SUBJECTS from "./data.js";
window.handleUnavailable = ()=>alert("Not available");

const tblRow=(year, serialNumber, subjectName, qbLink=null, abLink=null, cwLink=null )=>{
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><span class='serial_number'>${serialNumber}</span></td>
        <td><span class='subject_name'>${subjectName}</span></td>
        <td data-label = "Question-Bank :"><a href='${qbLink?`assets/pdf/${year}/${qbLink}`:"#sshow_table"}' class='question_banks pdfcell' ${!qbLink && "onclick='handleUnavailable()'"} >${qbLink ? "available" : "not available"}</a></td>
        <td data-label = "Answer-Bank :"><a href='${abLink?`assets/pdf/${year}/${abLink}`: "#sshow_table"}' class='answer_banks pdfcell' ${!abLink && "onclick='handleUnavailable()'"} >${abLink ? "available" : "not available"}</a></td>
        <td data-label = "Class work :"><a href='${cwLink?`assets/pdf/${year}/${cwLink}` : "#sshow_table"}' class='class_work pdfcell' ${!cwLink && "onclick='handleUnavailable()'"} >${cwLink ? "available" : "not available"}</a></td>
    `;
    return row;
}


const tbl=()=>{
    const tblBody = document.querySelector('tbody');
    const tblCaption=x=>document.querySelector('caption').textContent=`Selected Year : ${x}`;
    const yrs=Object.keys(SUBJECTS);
    const subjects=x=>[SUBJECTS[yrs[x-1]], yrs[[x-1]]];
    const nullHandler=(info="CURRENTLY NOT AVAILABLE")=>{
        const row = document.createElement('tr');
        row.innerHTML=`<td colspan='5' class='error'>${info}</td>`;
        tblBody.appendChild(row);
        console.log("null handler added");
    }
    return (year)=>{
        console.log("Hello")
        const [pdfs, subName] = subjects(year);
        tblBody.innerHTML='';
        tblCaption(year);
        console.log("year is ", year)
        console.log("key", subName)
        console.log("is year null? ,", SUBJECTS[subName])
        if ((SUBJECTS[subName]||null)===null) return nullHandler();
        const entries = Object.entries(pdfs);
        console.log("entries", entries)
        console.log("entries", ...entries[0])
        entries.forEach((e, i)=>{
            e[1] && tblBody.appendChild(tblRow(subName,i+1,e[0],...e[1]||''));
        })
        return tblBody;
    }
}

const table = tbl();
table(1);
window.addEventListener("DOMContentLoaded",()=>{
    const yrBoxes= document.querySelectorAll(".hyper_links_to_table");
    yrBoxes.forEach((box)=>{
        box.addEventListener("click",(e)=>{
            console.log(typeof e.currentTarget.dataset.id);
            table(parseInt(e.currentTarget.dataset.id));
        })
    })
})

const sidebar=()=>{
    const openBtn =  document.querySelector(".logo");
    const closeBtn = document.querySelector("#cross");
    const homeBtn = document.querySelector("#home");
    const pdfBtn = document.querySelector("#pdf");
    const syllabusBtn = document.querySelector("#syllabus");
    const aboutBtn = document.querySelector("#aboutNav");
    const nav = document.querySelector("nav");
    return ()=>{
        openBtn.addEventListener("click",()=>{
            cross.style.zIndex = "1";
            nav.style.zIndex = "1";
        })
        closeBtn.addEventListener("click",()=>{
            cross.style.zIndex = "-1";
            nav.style.zIndex = "-1";
        })
        homeBtn.addEventListener("click",()=>{
            nav.style.zIndex = "-1";
        })
        pdfBtn.addEventListener("click",()=>{
            nav.style.zIndex = "-1";
        })
        syllabusBtn.addEventListener("click",()=>{
            nav.style.zIndex = "-1";
        })
        aboutBtn.addEventListener("click",()=>{
            nav.style.zIndex = "-1";
        })

    }
}
const z=sidebar();
z();

const flexBox=()=>{
    const totalSubjects = document.querySelectorAll('.total_subjects');
    const availPdfs = document.querySelectorAll('.available_pdfs');
    const keys = Object.keys(SUBJECTS);
    const getSubjects =(year)=>{
        console.log("keys :",keys[year-1])
        console.log("SUBJECTS :",SUBJECTS[keys[year-1]])
        if (SUBJECTS[keys[year-1]]===null) return ["N/A","N/A"];
        const pdfsObject = Object.values(SUBJECTS[keys[year-1]]);
        const pdfObjKeys = Object.keys(pdfsObject) || null;
        const totalSubjects = pdfObjKeys.length || null;
        let counter = 0;
        if (pdfObjKeys===null) return ["N/A","N/A"];
        pdfObjKeys.forEach(e=>{
            pdfsObject[e]!==null && counter++;
        })
        return [totalSubjects, counter];
    }
    return year=>{
        const [a, b] = getSubjects(year);
        totalSubjects[year-1].textContent = `Tot.subjects : ${a}`;
        availPdfs[year-1].textContent = `Avail.subjects : ${b}`;
    }
}

const selectionBar=flexBox();
[1,2,3,4].forEach(e=>selectionBar(e));

const searchFunction=()=>{
    const searchBtn = document.querySelector("#search_button"); 
    const tblBody = document.querySelector('tbody');  
    const entries = Object.entries(SUBJECTS); 
    const convert=s=>s.trim().toLowerCase().replaceAll("&","and");
    let searchFilterArray;
    return ()=>{
        searchBtn.addEventListener("click",()=>{
            console.log(entries);
            searchFilterArray=[];
            tblBody.innerHTML='';
            const input = convert(document.querySelector("#searchBar").value);
            if (input.length===0){
                alert("input field empty");
                return;
            }
            // const input = "chem";
            entries.forEach(([k, v])=>{
                console.log(k);
                console.log(v);
                if (v!==null){
                    console.log("not null values", v)
                    const innerEntries = Object.entries(v);
                    innerEntries.forEach(e=>{
                        console.log("sub", convert(e[0]));
                        if (convert(e[0]).includes(input)){
                            console.log("%ctrue","color:red");
                            searchFilterArray.push([e,k]);
                        }
                    })
                }
            })
            console.log("filtered items", searchFilterArray);
            searchFilterArray.forEach(([[subNames, pdfs],year],i)=>{
                tblBody.appendChild(tblRow(year, i+1, subNames, ...pdfs||''));
            })
        })
    }
}
const search = searchFunction();
search();
