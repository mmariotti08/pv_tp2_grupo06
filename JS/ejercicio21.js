document.addEventListener('DOMContentLoaded', () => {
    const selectPaises = document.getElementById('selectPaises');
    const selectCapitales = document.getElementById('selectCapitales');

   
    const paisACapital = {
        "argentina": "buenos-aires",
        "brasil": "brasilia",
        "chile": "santiago",
        "uruguay": "montevideo",
        "paraguay": "asuncion",
        "bolivia": "la-paz"
    };

   
    const capitalAPais = {};
    for (let pais in paisACapital) {
        capitalAPais[paisACapital[pais]] = pais;
    }

    
    selectPaises.addEventListener('change', () => {
        const valor = selectPaises.value;
        if (valor !== "") {
            selectCapitales.value = paisACapital[valor];
            
            console.log("--- Cambio desde País ---");
            console.log(`País: ${selectPaises.options[selectPaises.selectedIndex].text}`);
            console.log(`Capital: ${selectCapitales.options[selectCapitales.selectedIndex].text}`);
        }
    });

  
    selectCapitales.addEventListener('change', () => {
        const valor = selectCapitales.value;
        if (valor !== "") {
            
            selectPaises.value = capitalAPais[valor];

            console.log("--- Cambio desde Capital ---");
            console.log(`País: ${selectPaises.options[selectPaises.selectedIndex].text}`);
            console.log(`Capital: ${selectCapitales.options[selectCapitales.selectedIndex].text}`);
        }
    });
});