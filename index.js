
let backViewImages = document.getElementsByClassName("back")
let backViewImages_array = Array.prototype.slice.call(backViewImages)
let frontFace = document.getElementsByClassName("front")
let frontFace_array = Array.prototype.slice.call(frontFace)
let movecontainer = document.getElementsByClassName('move-counter')

const images = document.querySelectorAll('.front');
const imageSources = Array.from(images).map(img => img.src);

console.log(imageSources);
//keep count
let count = 0;
let moves = 0;

//shuffle the front face images

const shuffled_images = imageSources.sort(() => Math.random() - 0.5); 
console.log(shuffled_images)

// lets flip and compare
let clicked = []
for (let i=0; i<16;i++){
    backViewImages_array[i].addEventListener('click',function(){
        this.setAttribute('src', shuffled_images[i])
        let imgsrc = this.getAttribute('src')
        clicked.push(this)
        let prevImgSrc = clicked[clicked.length - 2].getAttribute('src')
        if(imgsrc !== prevImgSrc){
            clicked.forEach(function notMatched(item){
                setTimeout(()=>{
                    item.setAttribute('src', "./avengers-endGame/avengers-endgame_cm34.300.webp")
                },500)
            })
            clicked.length = 0;
            moves++;
        }
        else{
            clicked.length = 0;
            count++;
            moves++;
            
        }
        if (count===8){
            setTimeout(()=>{alert("congratulations you won!")},300)
        }

    })
    
}






