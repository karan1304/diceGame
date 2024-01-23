function rollDice()
{
    const img=["images/one.jpg","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png"];
    let image=document.getElementById('image');
    const randomIndex=Math.floor(Math.random()*img.length);
    
    image.src=img[randomIndex];
}

rollDice();