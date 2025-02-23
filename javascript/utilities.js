import SUBJECTS from "./data";
const tblRow=()=>{
    const sl=`<td><span class = 'serial_number'></span><td>`;
    const subName = `<td><span class = 'subject_name'></span><td>`;
    const qbCell = `<td><span class = 'question_banks pdfCell'></span><td>`;
    const abCell = `<td><span class = 'answer_banks pdfCell'></span><td>`;
    const cwCell = `<td><span class = 'class_works pdfCell'></span><td>`;
    const row = document.createElement('tr');
    row.append(sl,subName,qbCell,abCell,cwCell);
    return row;
}

const tbl=()=>{
    const tblBody = document.querySelector('tbody');
    const tblCaption=x=>document.querySelector('caption').textContent=`Year : ${x+1}&nbsp`;
    const yrs=Object.keys(SUBJECTS);
    const subjects=x=>SUBJECTS[yrs[x-1]];
    const nullHandler=(info="CURRENTLY NOT AVAILABLE")=>{
        const row = document.createElement('tr');
        row.append(`<td colspan='5' class='error'>${info}</td>`);
        tblBody.innerHTML=row;
    }
    return  year=>{
        tblBody.innerHTML='';
        tblCaption(year);
        if (SUBJECTS[subjects(year)]===null) return nullHandler();

        return tblBody;
    }
}