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

// learn more about the event.preventDefault() method
// what is const document querySelector
// classList.add and remove
// send form method
// event.target
// then fuction and catch function
// the let function
// the onclick function
function contact(event) {
    event.preventDefault();

    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList.add('modal__overlay--visible');


    emailjs
        .sendForm('service_wljzwur', 'template_amvqrzt', event.target,
            'P2iXEfxavJX4fyh-L'
        ).then(() => {
            loading.classList.remove('modal__overlay--visible');
            success.classList.add('modal__overlay--visible');
        }

        ).catch(() => {
            loading.classList.remove('modal__overlay--visible');
            alert('The email service is temporarily unavailable. Please contact me directly on my email.');
        });



}

let isModalOpen = false;
function toggleModal() {
   if( isModalOpen) {
        isModalOpen = false;
       return document.body.classList.remove('modal--open');
        
    }
isModalOpen = true;
document.body.classList.add('modal--open');

}
