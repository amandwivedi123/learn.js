// let main = document.querySelector("#main");
// // console.log(main)S
// main.style.background="rgb(158, 158, 202)";
// main.style.border ="4spx solid black";
// main.style.width ="500px"

// let firstChild = document.querySelector("#main");
// // console.log(main.firstChild);
// main.firstChild.inerText = "Hello CSS";

// let accessParent = document.querySelector("#parent");
// // console.log(accessParent);

// accessParent.style.border = "2px solid black";
// accessParent.style.height ="71px";
// accessParent.style.width ="450px";
// accessParent.style.background ="rgb(231, 208, 102)";
// accessParent.style.margin = "7px";
// accessParent.style.paddingRight="7px";
// accessParent.style.paddingTop="11px";
// accessParent.style.borderRadius = "7%"

// let accessChild = document.querySelectorAll(".child");
// // console.log(accessChild);
// // console.log(accessChild[0]);


// accessChild[0].innerHTML="<b>Aman</b>";
// accessChild[0].style.color="aquaMarine";
// accessChild[0].style.background="red";
// accessChild[0].style.borderRadius="12%";


// // console.log(accessChild[1]);
// accessChild[1].innerHTML="<b>Adarsh</b>";
// accessChild[1].style.color="blue";
// accessChild[1].style.background="white";
// accessChild[1].style.borderRadius="12%";

// // console.log(accessChild[2]);
// accessChild[2].innerHTML="<b>Akhilesh</b>";
// accessChild[2].style.background="grey";
// accessChild[2].style.color="white";
// accessChild[2].style.borderRadius="12%";

// // console.log(accessChild[3]);
// accessChild[3].innerHTML="<b>Abhiram</b>";
// accessChild[3].style.color="green nnn";
// accessChild[3].style.background="yellow";
// accessChild[3].style.borderRadius="12%";



// // **********************************************
//   // DOCUMENT OBJCT MODEL...

// // window ... universal
// // Document .. Inside the Window...
// // Html : Inside the Document
// // Head => Meta , Link , Title, Link..
// //Body => div, h1, Button, p, script...


// //**************************************************
// // Acces Element by id..

// // let a = document.getELementById=(".id1");
// // console.dir(a)

// // Access Element by Class...

// // let b =  documrnt.getElementsByClassName = (".class");    Returns the HTML Collection...
// //console.dir(b);

// // Access Element by Tag Name...

// // let c = document.getElementsByTagName = (" tagName");
// //console.dir(c);

// // Universal Accessing Key...

// // const d = document.querySelector=("("."-for class , "#"- for id and tagName)
// // console.log(d);

// // *************************************************

// // Properties 

// // 1. tagName : returns the tag of element nodes..

// let accessButton = document.querySelector("button");
// // console.log(accessButton);
// //  console.dir(accessButton.tagName);  // Returns tagName.
 
//  //2. THe innertext Property returns the plain text even on children nodes when setted....

// //  console.dir(accessButton.innerText)  // Returns InnerText of the element.

// //  innerText : Returns the text content of the element and all it's childrens.

// // 3. InnerHTML :Returns the plain text or HTML contents in the elements.
// // console.log(accessButton.innerHTML)
// // 4.textContent : Returns the textual content even for hidden content..
// // console.log(accessButton.textContent)


// // ********* CildNodes **************

// let accessFather = document.querySelector("#father");
// // console.log(accessFather);
// // console.log(accessFather.children[0]);
// accessFather.firstChild

// // Father
// // accessFather.innerText="First Element.."

// accessFather.style.background="rgb(231, 208, 102)";
// accessFather.style.border = "4px solid black";

// // accessFather.children
// // console.log(accessFather.children[0]);
// accessFather.children[0].textContent=" 1.1.Hello this is first children(Changed)";

// // accessFather.children

// // console.log(accessFather.children[1]);
// // accessFather.children[1].textContent="2. This is second children (Changed)"



// // access childrens of parent 2..

// let accesChilds = document.querySelector("#parent2");
// console.log(accesChilds.childNodes);
// console.log(accesChilds.children);
// console.log(accesChilds.childElementCount);
// console.log(accesChilds.firstChild);
// console.log(accesChilds.lastChild);
// console.log(accesChilds.firstElementChild);
// console.log(accesChilds.lastElementChild);
// console.log(accesChilds.lastElementChild.lastElementChild);

// let accessList =document.querySelector("#list");
// console.log(accessList.children[3]);
// accessList.children[3].innerHTML = "<b>Promoganate</b>"


// // ******* ATTRIBUTES ****************

// //GetAttributes

// let accessHello = document.querySelector("#hello");
// console.log(accessHello);

// let helloId = accessHello.getAttribute("id");
// console.log(helloId);

// let setAtt = accessHello.setAttribute("class" , "aman")
// console.log(setAtt);


// // *********** Style **********

// accessHello.style.height ="25px";
// accessHello.style.width = "100px";
// accessHello.style.background ="grey";
// accessHello.style.color ="white";
// accessHello.style.textDecoration ="underline"
// accessHello.style.fontWeight ="bold";
// accessHello.style.textAlign ="center";
// accessHello.style.border="3px solid black";
// accessHello.style.borderRadius="7%";
// console.dir(accessHello.style);


// // Create and Insert Elements on webpage

// // append = insert the element at last inside the div..
// // prepend = insert the element at starting inside the div..
// // before = insert the element before the div (Outside);
// // after = Insert the element after the div (Outside)..




// let newBtn = document.createElement("button");
// newBtn.innerText="Click Me!";
// console.log(newBtn);

// let getList = document.querySelector(".list2");
// console.log(getList);
// getList.after(newBtn)
 

// let newPara = document.createElement("h3");
// newPara.innerText = "WELCOME TO WEBPAGE"
// console.log(newPara);

// // let mainId = document.querySelector("#main");
// // console.log(mainId);

// // main.after(newPara);

// // let creatEL =  document.createElement("p");
// // creatEL.setAttribute("class","child")
// //  creatEL.innerText="Bandna";
// // creatEL.style.background="pink";
// // creatEL.style.color="blue";
// // creatEL.style.borderRadius="12%";
// // creatEL.style.border ="2px solid black"
// // console.log(creatEL);

// // console.log(accessChild).prepend(creatEL);

// // *********** DELETE ELEMENT ***********

// // element.remove();

// // Append CHild;
// // Remove CHild; 


// // let para2 = document.querySelector(".par1").children;
// // console.log(para2);
// // document.querySelector(".par1").children[2].style.backgroundColor="red";

// // let mainDiv = document.querySelector("#main");
// // console.log(mainDiv)

// // let newBtn = document.createElement("Button");
// // console.log(newBtn);
// // newBtn.innerText="ClickMe!"
// // let bos = document.querySelector("body  ");
// // bos.append(newBtn);

// // let par2 = document.createElement("p3");
// // par2.innerHTML="<li>Hello I am aman</li>";
// // console.log(par2);

// // let li1 = document.querySelector("#am");
// // li1.append(par2);

// // let newHdn = document.createElement("h1");
// // newHdn.setAttribute("class","abc")
// // newHdn.innerText="Hello World!";
// // newHdn.style.border =" 2px solid black";
// // newHdn.style.textAlign ="center";
// // newHdn.style.borderRadius="5px";
// // newHdn.style.backgroundColor="rgb(160, 217, 234)"
// // console.log(newHdn);

// // let newdoc= document.querySelector("body").prepend(newHdn);

// // let paraDel = document.querySelector("#list").children[1];
// // console.log(paraDel) 


// // let element = document.querySelector("h1");
// // element.setAttribute("class","aman") ;
// // console.log(element);

// // const accountId = 123456;
// // let accountEmail ="dwivediaman084@gmail.com";
// // var accountCity = "Satna";

// // accountId =2;
// // accountEmail="aman";
// // accountCity="maihar";
// // let accountState;
// // console.table([accountId,accountCity,accountEmail,accountState]);

// // console.log(accountId,accountCity,accountEmail);

// // let names = "aman";
// // let age = 20;
// // let isPass = true;
// // let state = null;
// // console.table([names,age,isPass,state]);

// // let val = Number(state);
// // console.log(val)

// // console.log(typeof (val));

// // let isTrue = false;

// // let newBoo = Number(isTrue);
// // console.log(newBoo);

// // let aman = 2;
// // let booo = Boolean(aman);
// // console.log(booo);


// // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  /* Types Of memory =  1. Stack Memory 2. Heap Memory. 

//   1. All the primitive values are stored on Stack Memory.
//   2. All  the Non-Primitive Values are stored on Heap memory. 
//  */

// //   let name = "aman";
// //    newName = name;

// //    newName = "Shuikha"

// //    console.log(newName);
   
// //    let product = {
// //     name : "Redmi",
// //     model : 2024,
// //     isOnSale :  true,
// //    }

// //    let newProduct= product;

// //    newProduct.name = "Vivo";
// //    newProduct.model = 2020;

// //    console.log(newProduct.model);
// //    console.log(product.model)
  
// // +++++++++++++++++++++++++++++++++++

//  //STRINGS 
 

// //  let name =('AMAN');
// //  let age = 20;


// // console.log(name.charAt(2));
// // console.log();

// // console.log(document.getElementById("main")) 
// // document.body.style.backgroundColor = "green"

// // document.getElementById("main").innerText="Hello World";
// let inner = document.getElementById("inner");

// let CrtEle = document.createElement("p");
// CrtEle.setAttribute("class","child")
// CrtEle.innerText="E"
// // CrtEle.append(".inner")
// console.log(inner.append(CrtEle));


// let children = document.querySelector(".children")
// let addEl = document.createElement("h3");
// addEl.setAttribute("class" , "h3El")
// addEl.innerText="List Of Vegetables";
// children.prepend(addEl)


// let list = document.querySelector("#list");

// children.append(list)

// let innerr = document.getElementById("am");
// // console.log(am.childNodes);
// am.children[0].innerHTML ="<b> Potato </b>"



// ****************************************************************************************************



// Select ELement  By ID 

let getH1 = document.getElementById("dom");  // Access Element By Id
//  console.log(dom);
//  console.log(dom.id);   // Get id of the Element..
//  console.log(dom.className);  // Get id of Element ..
// console.log(getH1.getAttribute("class"));  // Get Attribute

// let AttSet = getH1.setAttribute("type","new")  // Set Attribute
// console.log(AttSet);

//  Setting some Styling

// getH1.style.backgroundColor="dodgerBlue"; // Added Some Styling.
// getH1.style.color="white";
// getH1.style.textAlign="center";
// getH1.style.border ="2px solid black";
// // getH1.style.visibility="hidden";

// Get Proper
// console.log("InnerText =" , getH1.innerText);
// console.log( "Text Content =" ,getH1.textContent);
// console.log("InnerHTML =" , getH1.innerHTML);


// Access Element By Class

// let getClass = document.getElementsByClassName  ("ama");  // Returns HTML Collection
// console.log(getClass);

// getClass.forEach((e2) => {   // HTML Collecton does not have the property Of FOREACH..
// TO Manipulate the vElements on HTML Collection we have to Convert the HTML Collection Into Array..


//  let CnvrtArr = Array.from(getClass); //convert the HTML Collection to Array
// //  console.log(CnvrtArr);

//  CnvrtArr.forEach ((el) => {
//     el.style.backgroundColor ="red";
//     el.style.padding ="10px";
//     el.style.border="3px solid black";
   //  el.style.borderRadius ="10%";
//  })  // After Conversion we can manipulate the vaues..
//     e2.style.backgroundColor="blue";
// })

//






// Access Elements By querySelector 

let getQuery = document.querySelectorAll(".ama"); // Returns Nodelist.
// console.log(getQuery);

// getQuery[1].style.backgroundColor="red"; // we cannot manipulate the elements on nodelists directly we have to select the element before manipulating...

// To access all element on node list at a time we use foreach...  // NODELIST

// getQuery.forEach ((el) => {
//     el.style.backgroundColor ="red";
//     el.style.padding ="10px";
//     el.style.border="3px solid black";
//     el.style.borderRadius ="10%";
   
// })



// let list = document.querySelector("ul"); // Accessing and giving style on the list on UL ...

// let mylist = list.querySelectorAll("li")
// console.log(list);

// mylist[2].style.backgroundColor="green";
// mylist[2].style.padding="7px";


var parent= document.querySelector(".parent");
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[2].innerText);

// for(let i=0 ; i <= parent.children.length; i++){
// // console.log(parent.children[i].innerText)
// };

let day = document.querySelector(".day");
// console.log(parent.childNodes);
//  Array.from(day);
//  let i = 0;
//  for(let days of day) {
//    console.log(i,days.innerHTML);
   
//    i++
//  }

let createEl = document.createElement("div");
createEl.innerHTML="Saturday";
createEl.id = Math.round(Math.random() * 10 + 1)
createEl.setAttribute("class","day");
parent.append(createEl)




// for(let i = 0 ; i<= parent.children.length; i++) {
//    console.log(parent.children[i].innerHTML);
// }


let accessDay = document.querySelectorAll(".day");
// console.log(accessDay);

parent.style.display="flex";




accessDay.forEach( el =>{
   el.style.backgroundColor ="rgb(255, 189, 213";
   el.style.color ="black";
   el.style.fontWeight ="bold";
   el.style.border ="3px solid black";
   el.style.padding = "10px";
   el.style.width =" 150px";
   el.style.margin ="10px";

})

function addDay (dayName) {
   let createEl = document.createElement("div");
   createEl.innerText =`${dayName}`;
   
}
addDay("sunday")

let language = document.querySelector(".language");

// function createLi (el) {
//  let li=  document.createElement("li");
//   li.setAttribute= "class","language";
//   li.innerHTML = el
//  language.appendChild(li)
// }
// createLi("python")
// createLi("Django")


let mon = document.querySelector("#mon");
mon.style.display="flex";
function mont (months) {
let createMonth = document.createElement("li");
createMonth.setAttribute("class","month");
createMonth.innerText = months;
createMonth.style.backgroundColor= "rgb(156, 247, 183)";
createMonth.style.color ="black";
createMonth.style.border ="3px solid black";
createMonth.style.padding ="5px";
createMonth.style.fontWeight="bold";
createMonth.style.width ="120px";
createMonth.style.margin ="4px";
mon.append(createMonth)
}
mont("january");
mont("february")
mont("march");
mont("april")
mont("may");
mont("june");

let langu = document.querySelector(".language")
langu.style.display="flex";

let lang = document.querySelectorAll(".lang");
 lang.forEach((lang) => {
lang.style.backgroundColor= "rgb(233, 142, 241)";
   lang.style.color ="black";
   lang.style.border ="3px solid black";
  lang.style.padding ="5px";  
  lang .style.fontWeight="bold";
  lang.style.width ="140px";
  lang.style.margin ="4px";
 })
