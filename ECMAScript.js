function so_ngay(){
    let a= +document.getElementById("user_year").value;
    if (a % 4 == 0 && a % 100 != 0){
            let b= +document.getElementById("user_month").value
            switch(b){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    alert("thang co 31 ngay");
                break;
                case 2:
                    alert("thang co 29 ngay vi la nam"+a +"la nam nhuan")
                    break;
                case 4:
                case 6:
                case 9:
                case 11:
                    alert("thang co 30 ngay")
                    break
                default:
                    alert("nhap thang trong nam")
        } 
    }
    else if(a % 100 ==0 && a % 400 == 0){
            let b= +document.getElementById("user_month").value
            switch(b){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    alert("thang co 31 ngay");
                break;
                case 2:
                    alert("thang co 29 ngay vi la nam"+a +"la nam nhuan")
                    break
                case 4:
                case 6:
                case 9:
                case 11:
                    alert("thang co 30 ngay")
                    break
                default:
                    alert("nhap thang trong nam")
        } 
    }
    else if(a % 100 == 0 && a % 400 != 0 ){
            let b= +document.getElementById("user_month").value
            switch(b){
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    alert("thang co 31 ngay");
                break;
                case 2:
                    alert("thang co 28 ngay vi la nam"+a +"la nam khong nhuan")
                    break
                case 4:
                case 6:
                case 9:
                case 11:
                    alert("thang co 30 ngay")
                    break
                default:
                    alert("nhap thang trong nam")
            }
        } 
    }

