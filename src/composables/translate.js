import siteTexts from '@/composables/texts'

const translate = () => {

    const texts = siteTexts()
    function traduction(e) {
        e.target.animate(
        [
            {filter: 'blur(0px)'},
            {filter: 'blur(50px)'},
            {filter: 'blur(0px)'}
        ], {
            duration: 1500,
            fill: 'forwards',
            easing: 'cubic-bezier(.84,-0.01,.14,.99)'
        })
        
        setTimeout(() => {
        if(e.target.classList.contains('fr')){
            e.target.innerHTML = texts[e.target.id].eng
                e.target.classList.remove('fr')
        } else {
                e.target.innerHTML = texts[e.target.id].fr
                e.target.classList.add('fr')
            }
        }, 750);
        
    }
    return traduction
}

export default translate

