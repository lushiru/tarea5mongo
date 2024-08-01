const loc=window.location.href.split("http://localhost:3001/")[1];

if(loc==""){
    document.getElementById('home').classList.add("activado");
}else{
    if(loc.includes("/")){
        const loc2=loc.split("/")[1];
        if(loc2=="crear"){document.getElementById('crear').classList.add("activado");}
        if(loc2=="actualizar"){document.getElementById('empleado').classList.add("activado");}
    }else{
        if(loc=="nosotros"){document.getElementById('nosotros').classList.add("activado");}
        if(loc=="empleado"){document.getElementById('empleado').classList.add("activado");}
    }
}