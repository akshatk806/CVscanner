// Data is an array of object which contains information about candidates
const Data=[
    {
        name:"Akshat kumar",
        age:20,
        city:"Delhi",
        language:"JavaScript",
        framework:"React",
        image:"https://randomuser.me/api/portraits/men/75.jpg"
    },
    {
        name:"Shivam",
        age:19,
        city:"Mumbai",
        language:"Java",
        framework:"Spring",
        image:"https://randomuser.me/api/portraits/men/63.jpg"
    },
    {
        name:"Bittu",
        age:22,
        city:"Bangalore",
        language:"Python",
        framework:"Django",
        image:"https://randomuser.me/api/portraits/men/70.jpg"
    },
    {
        name:"Sunny Leone",
        age:38,
        city:"New York",
        language:"PHP",
        framework:"laravel",
        image:"https://randomuser.me/api/portraits/women/70.jpg"
    }
]

// CV Iterator

function cvIterator(profiles){
    let nextIndex=0;
    return{
        next:function(){
            return nextIndex<profiles.length?{value:profiles[nextIndex++],done:false}:{done:true}
        }
    }
}
const candidates=cvIterator(Data);

nextCV();

// Button listener for next button
const nextBtn=document.getElementById('nextBtn');
nextBtn.addEventListener('click',nextCV);

function nextCV(){
    const cuurentCanditate=candidates.next().value;
    let image=document.getElementById('image');
    let profile=document.getElementById('profile');

    if(cuurentCanditate!=undefined){
        image.innerHTML=`<img src='${cuurentCanditate.image}'>`;
        profile.innerHTML=`<ul class="list-group">
        <li class="list-group-item">Name: ${cuurentCanditate.name}</li>
        <li class="list-group-item">${cuurentCanditate.name} Years old</li>
        <li class="list-group-item">City: ${cuurentCanditate.city}</li>
        <li class="list-group-item">Language: ${cuurentCanditate.language}</li>
        <li class="list-group-item">Framework: ${cuurentCanditate.framework}</li>
      </ul>`;
    }
    else{
        alert('End of candidate applications');
        window.location.reload();
    }
}
