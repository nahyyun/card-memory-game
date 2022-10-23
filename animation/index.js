const show = [
    {transform: 'rotateY(180deg)'},
    {transform: 'rotateY(0deg)'}
];

const hide = [
    {transform: 'rotateY(0deg)'},
    {transform: 'rotateY(180deg)'}
];

const flipAlterOption = {
    duration: 1300,
    iterations: 2,
    direction: 'alternate',
    easing: 'ease-out'
};

const flipOption = {
    duration: 700,
    iterations: 1,
    fill: 'forwards'
};

function animate(target, keyframes, option){
    const [front, back] = target.children;
    return (
        front.animate(keyframes[0], option).finished,
        back.animate(keyframes[1], option).finished
    )
}

export async function showFrontBackAnimation(cards) {
    let animation = [];
    
    cards.forEach(card => 
        animation.push(animate(card, [show, hide], flipAlterOption))
    )
    return await Promise.all(animation)
}

export async function showFrontAnimation(card){
    return await Promise.all([
        animate(card, [show, hide], flipOption)
    ])
}

export async function showBackAnimation(card){
    return await Promise.all(
        card.map(card => animate(card, [hide, show], flipOption))
    )
}