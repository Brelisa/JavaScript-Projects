const form = document.querySelector('#form');
const copy = document.querySelector('.copy');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const size = parseInt(form.input.value);
    document.querySelector('.text-section').innerHTML = loremIpsum(size);
})

function loremIpsum(size){
    const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur aut minima assumenda corporis. Consequatur vero assumenda eos dolore quae incidunt maxime sequi tempora, necessitatibus excepturi, at, nulla illo similique modi!
    Et laborum impedit alias, consequatur quaerat fugit nobis at a numquam est possimus tenetur nemo itaque vero delectus dolore eum necessitatibus nam corporis. Possimus obcaecati aut dolore labore repudiandae? Et?
    Dolore nam quod maxime iure eius voluptatum unde vel numquam optio temporibus eos ipsa iusto incidunt nemo accusantium laborum, sequi corporis quasi ipsum ea perferendis excepturi. Cumque aliquam nesciunt labore.
    Nemo quia libero in quo et quibusdam, voluptatum, provident vitae doloribus, veniam incidunt esse minus neque quaerat nostrum deserunt dolore perferendis magni. Provident dolorum quod dolorem sit deleniti, magnam voluptatum.
    Molestias in enim repellat, placeat perspiciatis voluptatem ipsum hic autem, animi saepe eaque voluptatum quos? Quaerat voluptatem amet, delectus quam velit, odio voluptatum optio exercitationem incidunt esse eos eius ad?`;

    const array = lorem.split('\n');
    let result = '';

    for(let i = 0; i < size; i++){
        result += `<p class='text-white font-semibold'>${array[i % array.length]}</p>`;
    }

    if(result){
        document.querySelector('.text-wrapper').style.display = 'flex';
    }else{
        document.querySelector('.text-wrapper').style.display = 'none';
    }
    return result;
}

copy.addEventListener('click', (e) => {
    const text = document.querySelector('.text-section').textContent;

    const textArea = document.createElement('textarea');

    document.body.appendChild(textArea);
    textArea.style.display = 'none';

    textArea.select();
    textArea.setSelectionRange(0, 99999);

    if(textArea.select){
        navigator.clipboard.writeText(textArea.value);
        copy.classList.add('fa-clipboard');
        copy.classList.remove('fa-copy');

        setTimeout(() => {
            copy.classList.remove('fa-clipboard');
            copy.classList.add('fa-copy');
        }, 500);
    }
})

