function initialize(){
    let lang = "en";
    refactor(lang);
};
function english(){
    let lang = "en";
    refactor(lang);
}
function urdu(){
    let lang = "ur";
    refactor(lang);
}
function chinese(){
    let lang = "zh";
    refactor(lang);
}
function refactor(lang){
    $.ajax({
        url:`https://techkaro-test.herokuapp.com/api/v1/getdata?lang=${lang}`,
        success: function(data){
            console.log(data);
    //         document.querySelector('.nav-text').innerHTML
    //         for(let i = 0; i <= 3; i++){
    //             document.querySelector('#text-position').innerHTML += data.menuOptions[i].toUpperCase;
    //             let optionEl = `<li class="nav-item">
    //     <a class="nav-link" href="#">
	// 		<span class="nav-text">
    //             ${optionEl}
	// 		</span>
	// 	</a>
    //   </li>`
    //         }
            document.querySelector('.icon-set').innerHTML = new Date(data.date).toDateString('en-US');
            document.querySelector('.card-title').innerHTML = data.info.heading;
            document.querySelector('.card-text').innerHTML = data.info.description;
            document.querySelector('.card-titleB').innerHTML = data.sale.heading;
            document.querySelector('.card-textB').innerHTML = data.sale.description;
            document.querySelector(`.img-heading`).style.background = `url(${data.imageURL})`;
        
        },
        erorr(err){
            console.log(err)
        }
}) 
}