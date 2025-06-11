// template_amvqrzt
// service_wljzwur
// P2iXEfxavJX4fyh-L


// This is another way present it. the 'then is more preferred way
// async function contact(event) {
//     event.preventDefault();
//    await emailjs
//         .sendForm('service_wljzwur', 'template_amvqrzt', event.target,
//             'P2iXEfxavJX4fyh-L'
//         ) {
//             console.log('this worked!')
//         }

//         )
// }


function contact(event) {
    event.preventDefault();
    //     emailjs
    //         .sendForm('service_wljzwur', 'template_amvqrzt', event.target,
    //             'P2iXEfxavJX4fyh-L'
    //         ).then(() => {
    //             console.log('this worked!')
    //         }

    //         )

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += ' .modal__overlay--visible'
    setTimeout(() => {
        console.log('it worked!')
    }, 1000);
}