

const div = document.createElement('div');
document.body.append(div);
for(let i=1; i<6; i++ ){
    const p=document.createElement('p');
    div.append(p);
    const article=document.createElement('article');
    p.append(article);
    article.style.fontWeight=700;
    article.innerText = `Rad ${i}`;
    article.style.fontSize = `${10*i}px`;
    p.style.backgroundColor = `hsl(120, 80%, ${i*10}%)`;
    article.style.color = 'aqua';
    p.style.marginBottom = '20px';
    p.style.display= 'flex';
    p.style.justifyContent= 'center';


}



const parent = document.createElement('div');
parent.style.width = '70%';
parent.style.marginLeft='15%';
parent.style.display = 'flex';
parent.style.border='2px solid black';
parent.style.justifyContent = 'space-evenly';


/* parent element*/
document.body.appendChild(parent);

/*Child - parent element*/
const wrapper = document.createElement('div');
parent.appendChild(wrapper);

const box = document.createElement('div');
wrapper.appendChild(box);


/*Column1*/ 

const ol = document.createElement('ol');
wrapper.appendChild(ol);
for(let i=0; i<10; i++){
    const li = document.createElement('li');
    ol.append(li);
    li.innerText = `${i}`;
    li.style.listStyle = 'none';
    li.style.backgroundColor = `white`;
    ol.style.width = '45px';
    ol.style.border= '10px solid fuchsia';
    li.style.marginLeft= '-40px';
    
    
}



console.log('----%-----');
console.log(11%2, 10%2);
const lis = document.querySelectorAll('li');
for(let i=0; i<lis.length; i++){
    console.log(i, i%2);
    if(i===3){
        lis[i].style.backgroundColor='fuchsia';
        lis[i].style.color ='white';
    }

    else if(i%2 === 0) {
        lis[i].style.background = 'black';
        lis[i].style.color ='white';
    }  
    
}
/*Column2*/ 

const p = document.createElement('p');
parent.append(p);
for(let i=9; i>=0; i--){
    const li = document.createElement('li');
    p.append(li);
    li.innerText = `${i}`;
    li.style.listStyle = 'none';
    li.style.backgroundColor = `white`;
    li.style.display='flex';
    li.style.justifyContent='center';
    p.style.width = '85px';
    p.style.border= '10px solid fuchsia';
    if (i === 8) {
        li.style.backgroundColor = 'fuchsia';
    }
    console.log('----%-----');
console.log(11%2, 10%2);
const lis = document.querySelectorAll('li');
for(let i=0; i<lis.length; i++){
    console.log(i, i%2);
    if(i%2 === 0) {
        lis[i].style.background = 'black';
        lis[i].style.color ='white';
    }
 
}
}

/*Column3*/ 



const numbers = ['ett', 'två', 'tre', 'fyra',  'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
   console.log(numbers);
   console.log(numbers[2]);
   console.log(numbers.length);


   const ul = document.createElement('ul');
   parent.appendChild(ul)

   for(let i=0; i<numbers.length; i++){
    const li = document.createElement('li');
   ul.append(li);

   li.innerText = numbers[i];
   li.style.listStyle = 'none';         
    li.style.backgroundColor = `white`;
    ul.style.width = '45px';
    ul.style.border= '10px solid fuchsia';
    li.style.marginLeft= '-40px';
    li.style.display='flex';
    li.style.justifyContent='end';
    
   console.log('----%-----');
console.log(11%2, 10%2);
const lis = document.querySelectorAll('li');
for(let i=0; i<lis.length; i++){
    console.log(i, i%2);
    if(i%2 === 0) {
        lis[i].style.background = 'black';
        lis[i].style.color ='white';
    };
    if(lis[i].innerText === 'sex'){
        lis[i].style.backgroundColor = 'fuchsia'
    };
    }

}
/*Hej Clara
Sista uppgiften "The columns" görde jag på två olika sätt
första 2 är med loop och loop-reverse
och sista är med arrays :)
*/ 