const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('capitalizar',(texto)=>{
    let palabras =texto.split('');
    palabras.forEach((palabra,idx)=>{
     palabras
    });
    return palabras.join('')
});