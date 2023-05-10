
function encriptar(){
    var texto = $('#textbox').val()
    var textoCodificado = codificar(texto)
    document.getElementById('message').innerHTML =''
    document.getElementById('message').innerHTML +=textoCodificado 
}

function codificar(texto){
   var textoCodificado = ""
   for(i = 0; i < texto.length; i++){
    var letras = texto.charAt(i)
    if(letras == 'a'){
        textoCodificado += 'ai'
    } else if(letras == 'e'){
        textoCodificado += 'enter'
    } else if(letras == 'i'){
        textoCodificado += 'imes'
    }else if(letras == 'o'){
        textoCodificado += 'ober'
    } else if(letras == 'u'){
        textoCodificado += 'ufat'
    } else {
        textoCodificado += letras
    }
   }
   return textoCodificado
}

function desencriptar(){
    var texto = $('#textbox').val()
    var textoDecodificado = decodificar(texto)
    document.getElementById('message').innerHTML =''
    document.getElementById('message').innerHTML +=textoDecodificado
}

function decodificar(texto){
    var textoDecodificado = ''
    for(i=0; i < texto.length; i++){
        var letras = texto.charAt(i)
       switch(letras){
        case 'e':
            if (texto.substring(i, i+5) === 'enter'){
                textoDecodificado += 'e'
                i += 4
            } else {
                textoDecodificado += letras
            }
            break
        case 'i':
            if(texto.substring(i, i+4) === 'imes') {
                textoDecodificado += 'i'
                i += 3
            } else {
                textoDecodificado += letras
            }
            break
        case 'a':
            if(texto.substring(i, i+2) === 'ai'){
                textoDecodificado += 'a'
                i += 1
            } else {
                textoDecodificado += letras
            }
            break
        case 'o':
            if(texto.substring(i, i+4) === 'ober'){
                textoDecodificado += 'o'
                i += 3
            } else {
                textoDecodificado += letras
            }
            break
        case 'u':
            if(texto.substring(i, i+4) === 'ufat'){
                textoDecodificado += 'u'
                i += 3
            } else {
                textoDecodificado += letras
            }
            break
            default:
                textoDecodificado += letras
                break
       }
    }
    return textoDecodificado
}

