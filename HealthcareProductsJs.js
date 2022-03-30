


var getarrHCP=JSON.parse(localStorage.getItem("HealthcareProduct"))

var arrHCP=[{imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Ffd9ab1b65453385db360c1a0dfa20726.png&w=64&q=75" ,
             heading:"Personal Care",
            ptag:"Upto",
             discount:"80% off"},

             {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fd28a9f9262263ec1840b170a53bd4172.png&w=64&q=75",
            heading:"Health Food and Drinks",
            ptag:"Upto",
             discount:"57% off"},

             {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F61b9f0de91653e3585a24e3c650ac55d.png&w=64&q=75",
            heading:"Skin Care",
            ptag:"Upto",
             discount:"50% off"},

             {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fa949eb79355936f09e96c2d986c89e5c.png&w=64&q=75",
            heading:"Home Care",
            ptag:"Upto",
             discount:"35% off"},

             {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fd420b3418fe03581bccd4fa9c26d4b97.png&w=64&q=75",
            heading:"Aruvedic Care",
            ptag:"Upto",
             discount:"70% off"},

             {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fedb0de3af41439a988ad4ed771cd1621.png&w=64&q=75",
             heading:"Sexual Wellness",
             ptag:"Upto",
              discount:"53% off"},

            {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F0670da2370553283abea292910adc473.png&w=64&q=75",
             heading:"Fitness & Supplyments",
            ptag: "Upto",
            discount:"80% off"},

            {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fa22eee73df49335592bf1b6383b4a16e.png&w=64&q=75",
            heading:"Mother and Baby Care",
           ptag: "Upto",
           discount:"50% off"},

           {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F8507b196066d39ac95af3dd0b643f2f1.png&w=64&q=75",
           heading:"Healthcare Devices",
          ptag: "Upto",
          discount:"65% off"},

          {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F65a049b063c63d2ab3649289367b899f.png&w=64&q=75",
          heading:"Surgicals and Dressing",
         ptag: "Upto",
         discount:"55% off"},

         {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F238fcba73526340a85bdf69e6afd0b78.png&w=64&q=75",
             heading:"Covid Essensials",
            ptag: "Upto",
            discount:"77% off"},

            {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F4a3252df55f63750b61220c4d10483dd.png&w=64&q=75",
            heading:"Health Condition",
           ptag: "Upto",
           discount:"65% off"},

           {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F8abcc217fc8b318fb37e54d695695b48.png&w=64&q=75",
           heading:"Diabetic Care",
          ptag: "Upto",
          discount:"65% off"},

          {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Ffe5a5c014c39379e9790c36fcc309c56.png&w=64&q=75",
          heading:"Elderly Care",
         ptag: "Upto",
         discount:"45% off"},

         {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2Fc78304a2551f3d468b2de44ce9641b4c.png&w=64&q=75",
             heading:"Accessories and Wearables",
            ptag: "Upto",
            discount:"35% off"},

            {imageURL:"https://pharmeasy.in/_next/image?url=https%3A%2F%2Fcdn01.pharmeasy.in%2Fdam%2Fdiscovery%2FcategoryImages%2F7ef42ab43b993cddbda6ab907d0d3dc3.png&w=64&q=75",
            heading:"Pet Care",
           ptag: "Upto",
           discount:"30% off"}]

var div6=document.querySelector("#div6")
var div24=document.querySelector("#div24")

arrHCP.map(function(ele){
    var div7=document.createElement("div")
    div7.id="div7"

    div8=document.createElement("div")
    div8.id="div8"

    img1=document.createElement("img")
    img1.id="img1"
    img1.src=ele.imageURL

    div11=document.createElement("div")
    div11.id="div11"
    p1=document.createElement("p")
    p1.innerText=ele.heading

    div9=document.createElement("div")
    div9.id="div9"

    div10=document.createElement("div")
    div10.id="div10"
    p2=document.createElement("p")
    p2.innerText=ele.ptag
    p3=document.createElement("p")
    p3.innerText=ele.discount

     var a4=document.createElement("a")
     a4.id="a4"
     a4.innerText=ele.heading
     a4.href="#"
    

    div24.append(a4)
    div11.append(p1)
    div10.append(p2,p3)
    div9.append(div10)
    div8.append(img1,div11)
    div7.append(div8,div9)
    div6.append(div7)
})

localStorage.setItem("HealthcareProduct",JSON.stringify(arrHCP))