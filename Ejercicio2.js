var convertor = {
    convertir:function(medida,unidad,convertirA,tipoMedida){
        if(tipoMedida == 'L'){
            switch(unidad){
                case 'm':
                    switch(convertirA){
                        case 'cm':
                            console.log(medida*100,'cm');
                            break;
                        case 'ft':
                            console.log(medida*3.28,'ft');
                            break;
                        case 'km':
                            console.log(medida/1000,'km');
                            break;
                        default:
                            console.log('Tipo no registrado');
                    }
                    break;
                case 'km':
                    switch(convertirA){
                        case 'cm':
                            console.log(medida/100000,'cm');
                            break;
                        case 'ft':
                            console.log(medida*3280.84,'ft');
                            break;
                        case 'm':
                            console.log(medida*1000,'m');
                            break;
                        default:
                            console.log('Tipo no registrado');
                    }
                    break;
                case 'ft':
                    switch(convertirA){
                        case 'cm':
                            console.log(medida*30.48,'ft');
                            break;
                        case 'km':
                            console.log(medida*0.0003048,'km');
                            break;
                        case 'm':
                            console.log(medida*0.3048,'m');
                            break;
                        default:
                            console.log('Tipo no registrado');
                    }
                    break;
                default:
                    console.log('Unidad de medida no registrada')
            }
        }
        else if(tipoMedida == 'T'){
            switch(unidad){
                case 'c':
                    switch(convertirA){
                        case 'k':
                            console.log(medida+273,'k');
                            break;
                        case 'f':
                            console.log(medida*9/5+32,'f');
                            break;
                        default:
                            console.log('Tipo no registrado');

                    }
                    break;
                case 'k':
                switch(convertirA){
                        case 'c':
                            console.log(medida-273,'c');
                            break;
                        case 'f':
                            console.log((medida-273)*9/5+32,'f');
                            break;
                        default:
                            console.log('Tipo no registrado');

                    }
                    break;
                case 'f':
                    switch(convertirA){
                        case 'k':
                            console.log((medida-32)*5/9 +273,'k');
                            break;
                        case 'c':
                            console.log((medida-32)*5/9,'c')
                            break;
                        default:
                            console.log('Tipo no registrado');
                    }
                    break;
                default:
                    console.log('Unidad de medida no registrada');

            
            }
        }
    }
}