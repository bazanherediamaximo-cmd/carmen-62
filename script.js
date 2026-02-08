document.addEventListener('DOMContentLoaded', () => {
    
   
    
    
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainContent = document.getElementById('main-content');
    const musicIsland = document.getElementById('music-island');
    
 
    const audio = document.getElementById('audio-player');
    const btnStart = document.getElementById('btn-start');     
    const btnControl = document.getElementById('btn-control'); 
    const iconControl = btnControl.querySelector('i');        
    
   
    const btnRsvp = document.getElementById('btn-rsvp');       
    const modal = document.getElementById('rsvp-modal');
    const btnCloseModal = document.getElementById('btn-close-modal');
    const rsvpForm = document.getElementById('rsvp-form');

   
    let isPlaying = false;


    

    btnStart.addEventListener('click', () => {
        
        welcomeScreen.classList.add('fade-out'); 
        
        
        setTimeout(() => {
            welcomeScreen.style.display = 'none'; 
            
            
            mainContent.classList.remove('hidden');
            mainContent.classList.add('visible'); 
            
            setTimeout(() => {
                musicIsland.classList.remove('hidden-island');
                musicIsland.classList.add('show-island'); 
            }, 600);

        }, 800); 

        
        toggleAudio();
    });


    

    btnControl.addEventListener('click', toggleAudio);

    function toggleAudio() {
        if (isPlaying) {
            audio.pause();
            isPlaying = false;
           
            iconControl.classList.remove('fa-pause');
            iconControl.classList.add('fa-play');
        } else {
            
            audio.play().then(() => {
                isPlaying = true;
                
                iconControl.classList.remove('fa-play');
                iconControl.classList.add('fa-pause');
            }).catch(error => {
                console.log("Autoplay bloqueado o error de audio:", error);
            });
        }
    }


    
    
    
    btnRsvp.addEventListener('click', () => {
        
        modal.classList.remove('hidden'); 
        
        
        setTimeout(() => {
            modal.classList.add('active'); 
        }, 10);
    });

   
    const closeModal = () => {
        modal.classList.remove('active');
        
        
        setTimeout(() => {
            modal.classList.add('hidden');
        }, 300); 
    };

    
    btnCloseModal.addEventListener('click', closeModal);

    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });


   

    rsvpForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const name = document.getElementById('guest-name').value;
        const count = document.getElementById('guest-count').value;
        const isCeliac = document.getElementById('celiac-check').checked; 

        
        let dietaryInfo = "";
        if (isCeliac) {
            dietaryInfo = "⚠️ Atención: Necesito menú Celíaco.";
        }

        
        const message = `Hola Carmen! Soy *${name}*.%0A` + 
                        `Confirmo mi asistencia a tu cumple 🥳.%0A` +
                        `Somos: ${count} persona(s).%0A` +
                        `${dietaryInfo}`; 

        
        const phoneNumber = "5493512056628"; 

        
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        
        
        window.open(whatsappUrl, '_blank');

        
        closeModal();
    });

});