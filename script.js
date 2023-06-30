
// kiem tra hoc luc hoc sinh
function myFunction1(){
    const rankDisplay = document.getElementById("rank");
    let mark = +document.getElementById("nhapdiem").value;
    if(mark < 4){
        rankDisplay.innerHTML="Ban da thi truot";
    }else if(mark >= 4 && mark < 5){
        rankDisplay.innerHTML="Ban duoc loai D";
        console.log(typeof(mark))
    }else if(mark >= 5 && mark < 6){
        rankDisplay.innerHTML="Ban duoc loai C";
        console.log(typeof(mark))
    }else if(mark >= 7 && mark < 8){
        rankDisplay.innerHTML="Ban duoc loai B";
        console.log(typeof(mark))
    }else if(mark >= 9 && mark <= 10){
        rankDisplay.innerHTML="Ban duoc loai A";
        console.log(typeof(mark))
    }else{
        rankDisplay.innerHTML="Khong phai diem "
    }
}

// tinh phuong trinh bac nhat 
function myFunction2(){
    const nowPt= document.getElementById("nowPt");
    let thamsoa= +document.getElementById("thamsoa").value;
    let thamsob= +document.getElementById("thamsob").value;
    const nghiem= document.getElementById("nghiem");
    let giatri=  - thamsob / thamsoa
    if(thamsoa===0 && thamsob===0){
        nghiem.innerHTML="Phuong trinh vo so nghiem "
    }else if(thamsoa===0 ){
        nghiem.innerHTML="phuong trinh vo nghiem"
    } else {
        nowPt.innerHTML= `Phuong trinh vua nhap : ${thamsoa}.x + ${thamsob} = 0`
        nghiem.innerHTML = `Nghiem x tim duoc la : ${giatri}`;
    }
}
function myFunction3(){
    const nowPtt= document.getElementById("nowPtt");
    let thamsoaa= +document.getElementById("thamsoaa").value;
    let thamsobb= +document.getElementById("thamsobb").value;
    let thamsoc = +document.getElementById("thamsoc").value;
    
    const nghiem2= document.getElementById("nghiem2")
    if(thamsoaa===0 && thamsobb===0){
        nghiem2.innerHTML="Phuong trinh vo nghiem "
    }else if(thamsoaa===0){
        let giatri =  - thamsoc / thamsobb;
        nowPtt.innerHTML= `Phuong trinh vua nhap : ${thamsobb}.x + ${thamsoc} = 0`
        nghiem2.innerHTML = `Nghiem x tim duoc la : ${giatri}`;
    }else{
        let denta= ( thamsobb  * thamsobb - 4 * thamsoaa * thamsoc ) ;
        nowPtt.innerHTML= `Phuong trinh vua nhap : ${thamsoaa}.x^2 + ${thamsobb}.x +${thamsoc} = 0`
        if(denta === 0){
            let giatri =  - thamsobb / ( 2 * thamsoaa);  
            nghiem2.innerHTML = `Nghiem x tim duoc la :  ${giatri}`;
        }else if(denta < 0){
            nghiem2.innerHTML =`Phuong trinh vo nghiem`
        }else{
            let canDenta = Math.sqrt(denta)
            let x1= ( -  thamsobb - canDenta) / ( 2 * thamsoaa);
            let x2= ( - thamsobb + canDenta) / ( 2 * thamsoaa);
            nghiem2.innerHTML  =`Phuong trinh co 2 nghiem la ${x1} va ${x2}`;
        }
    }
}