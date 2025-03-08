
      let menuOpen=false
  const hambuger = document.querySelector('.hambuger')
  const navlink = document.querySelector('.three')
  hambuger.addEventListener('click', ()=>{
if(menuOpen==false){
navlink.style.diplay ='block';
menuOpen=true
}
else if(menuOpen==true){
navlink.style.display='false';
menuOpen =false
}
  })
    
