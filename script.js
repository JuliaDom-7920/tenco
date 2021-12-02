let card_one = document.getElementById('card-one');
let card_two = document.getElementById('card-two');
let card_three = document.getElementById('card-three');
let back_one = document.getElementById('back-one');
let back_two = document.getElementById('back-two');
let back_three = document.getElementById('back-three');
let front_two = document.getElementById('front-two');

card_one.onmouseover = function() {
    back_one.style.transform = 'translateY(0)';
    back_one.style.transition = '.5s';
};
back_one.onmouseout = function() {
    back_one.style.transform = 'translateY(-560px)';
    back_one.style.transition = '.5s';
};

card_two.onmouseover = function() {
    front_two.style.transformOrigin = '50% 20%';
    front_two.style.transform = 'perspective(800px) rotateY(180deg)';
    front_two.style.transition = '.8s cubic-bezier(0.65, 0.05, 0.36, 1)';
    back_two.style.transformOrigin = '50% 20%';
    back_two.style.transform = 'perspective(800px) rotateY(0)';
    back_two.style.transition = '.7s .25s';
};
card_two.onmouseout = function() {
    front_two.style.transformOrigin = '50% 20%';
    front_two.style.transform = 'perspective(800px) rotateY(0deg)';
    front_two.style.transition = '.8s .25';
    back_two.style.transformOrigin = '50% 20%';
    back_two.style.transform = 'perspective(800px) rotateY(-90deg)';
    back_two.style.transition = '.6s cubic-bezier(0.65, 0.05, 0.36, 1)';
};

card_three.onmouseover = function() {
    back_three.style.transform = 'translateX(0)';
    back_three.style.transition = '.5s';
};
back_two.onmouseout = function() {
    back_three.style.transform = 'translateX(400px)';
    back_three.style.transition = '.5s';
};