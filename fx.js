function calcular() {
    l1=document.getElementById('lado1').value
    l2=document.getElementById('lado2').value
    ang=document.getElementById('angulo').value
    res= l1**2+l2**2-(2*l1*l2*ang)
    defi=Math.sqrt(res)
    document.getElementById('resultado').value=defi
    
}