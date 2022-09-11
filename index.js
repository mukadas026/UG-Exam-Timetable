let data = []
const search = document.getElementById('search-box');
const btn = document.getElementById('btn');
const form = document.getElementById('field');
const tdata = document.getElementsByClassName('tdata');
let date, time, venue;

fetch('./timetable.json')
  .then(response => response.json())
  .then(result => result.forEach((obj,i) => {
    if(obj !== null){
      data.push(obj)
    } 
  }))
  .catch((e) => console.log(e))

  form.onsubmit = (e) => {
    e.preventDefault()
  }

  btn.onclick = (e) => {
    e.preventDefault();
    data.forEach((obj, i) => {
      if(obj.hasOwnProperty('Date')){
        date = obj['Date'];
      }
      if(obj.hasOwnProperty('Time')){
        time = obj['Time'];
      }
      if(String(obj.Code).toLowerCase().includes(String(search.value).toLowerCase())){

          tdata[0].innerHTML = obj.Name;
          tdata[1].innerHTML = date;
          tdata[2].innerHTML = time;
          tdata[3].innerHTML = obj.Mode;
          for(let i = 0; i < tdata.length; i++){
            
            tdata[i].classList.add('fade');

            setTimeout(() => tdata[i].classList.remove('fade'),1000)
          }

        return
      }
    })
  }
  
