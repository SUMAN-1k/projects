function validate()

{
    var n1=parseFloat(document.getElementById("marks1").value);
    var n2=parseFloat(document.getElementById("marks2").value);
    var n3=parseFloat(document.getElementById("marks3").value);
    var n4=parseFloat(document.getElementById("marks4").value);
    var n5=parseFloat(document.getElementById("marks5").value);
    var n6=parseFloat(document.getElementById("marks6").value);
    var n7=parseFloat(document.getElementById("marks7").value);
    var n8=parseFloat(document.getElementById("marks8").value);
    

    if(n1>100 || n2>100 || n3>100 || n4>100 || n5>100 || n6>100 || n7>100 || n8>100 )
   {
    window.alert("Please enter your marks below or equal  to 100");
   }
 else{
    marks()
    }
}
function marks()
{
    var n1=parseFloat(document.getElementById("marks1").value);
    var num1;
    if(n1>=90)
    {
        num1=10*3;
    }
    
    else if(n1>=80 && n1<90)
    {
        num1=9*3;
    }
    else if(n1>=70 && n1<80)
    {
        num1=8*3;
    }
    else if(n1>=60 && n1<70)
    {
        num1=7*3;
    }
    else if(n1>=50 && n1<60)
    {
        num1=6*3;
    }
    else if(n1>=45 && n1<50)
    {
        num1=5*3;
    }
    else if(n1>=40  && n1<45)
    {
        num1=4*3;
    }
    else
    {
       num1=0;
    }
    var n2=parseFloat(document.getElementById("marks2").value);
    var num2;
    if(n2>=90)
    {
        num2=10*4;
    }
    
    else if(n2>=80 && n2<90)
    {
        num2=9*4;
    }
    else if(n2>=70 && n2<80)
    {
        num2=8*4;
    }
    else if(n2>=60 && n2<70)
    {
        num2=7*4;
    }
    else if(n2>=50 && n2<60)
    {
        num2=6*4;
    }
    else if(n2>=45 && n2<50)
    {
        num2=5*4;
    }
    else if(n2>=40  && n2<45)
    {
        num2=4*4;
    }
    else{
        num2=0;
    }

    var n3=parseFloat(document.getElementById("marks3").value);
    var num3;
    if(n3>=90)
    {
        num3=10*4;
    }
    
    else if(n3>=80 && n3<90)
    {
        num3=9*4;
    }
    else if(n3>=70 && n3<80)
    {
        num3=8*4;
    }
    else if(n3>=60 && n3<70)
    {
        num3=7*4;
    }
    else if(n3>=50 && n3<60)
    {
        num3=6*4;
    }
    else if(n3>=45 && n3<50)
    {
        num3=5*4;
    }
    else if(n3>=40  && n3<45)
    {
        num3=4*4;
    }
    else
    {
       num3=0;
    }
    var n4=parseFloat(document.getElementById("marks4").value);
    var num4;
    if(n4>=90)
    {
        num4=10*3;
    }
    
    else if(n4>=80 && n4<90)
    {
        num4=9*3;
    }
    else if(n4>=70 && n4<80)
    {
        num4=8*3;
    }
    else if(n4>=60 && n4<70)
    {
        num4=7*3;
    }
    else if(n4>=50 && n4<60)
    {
        num4=6*3;
    }
    else if(n4>=45 && n4<50)
    {
        num4=5*3;
    }
    else if(n4>=40  && n4<45)
    {
        num4=4*3;
    }
    else
    {
       num4=0;
    }
    var n5=parseFloat(document.getElementById("marks5").value)
    var num5;
    if(n5>=90)
    {
        num5=10*1;
    }
    
    else if(n5>=80 && n5<90)
    {
        num5=9*1;
    }
    else if(n5>=70 && n5<80)
    {
        num5=8*1;
    }
    else if(n5>=60 && n5<70)
    {
        num5=7*1;
    }
    else if(n5>=50 && n5<60)
    {
        num5=6*1;
    }
    else if(n5>=45 && n5<50)
    {
        num5=5*1;
    }
    else if(n5>=40  && n5<45)
    {
        num5=4*1;
    }
    else
    {
       num5=0;
    }
    var n6=parseFloat(document.getElementById("marks6").value)
    var num6;
    if(n6>=90)
    {
        num6=10*1;
    }
    
    else if(n6>=80 && n6<90)
    {
        num6=9*1;
    }
    else if(n6>=70 && n6<80)
    {
        num6=8*1;
    }
    else if(n6>=60 && n6<70)
    {
        num6=7*1;
    }
    else if(n6>=50 && n6<60)
    {
        num6=6*1;
    }
    else if(n6>=45 && n6<50)
    {
        num6=5*1;
    }
    else if(n6>=40  && n6<45)
    {
        num6=4*1;
    }
    else
    {
       num6=0;
    }
    var n7=parseFloat(document.getElementById("marks7").value)
    var num7;
    if(n7>=90)
    {
        num7=10*1;
    }
    
    else if(n7>=80 && n7<90)
    {
        num7=9*1;
    }
    else if(n7>=70 && n7<80)
    {
        num7=8*1;
    }
    else if(n7>=60 && n7<70)
    {
        num7=7*1;
    }
    else if(n7>=50 && n7<60)
    {
        num7=6*1;
    }
    else if(n7>=45 && n7<50)
    {
        num7=5*1;
    }
    else if(n7>=40  && n7<45)
    {
        num7=4*1;
    }
    else
    {
       num7=0;
    }
    var n8=parseFloat(document.getElementById("marks8").value)
    var num8;
    if(n8>=90)
    {
        num8=10*1;
    }
    
    else if(n8>=80 && n8<90)
    {
        num8=9*1;
    }
    else if(n8>=70 && n8<80)
    {
        num8=8*1;
    }
    else if(n8>=60 && n8<70)
    {
        num8=7*1;
    }
    else if(n8>=50 && n8<60)
    {
        num8=6*1;
    }
    else if(n8>=45 && n8<50)
    {
        num8=5*1;
    }
    else if(n8>=40  && n8<45)
    {
        num8=4*1;
    }
    else
    {
       num8=0;
    }
    
    
    document.getElementById("s1").innerHTML= ((num1+num2+num3+num4+num5+num6+num7+num8)/18);
}
