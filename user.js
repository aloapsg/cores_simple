var edad = ['selecciona', 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

var genero = ['selecciona', "Masculino", "Femenino"];

var oSexual = ['selecciona', "Heterosexual", "Homosexual", "Bisexual"];

var lugarNac = ['selecciona', 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche', 'CDMX', 'Chiapas', 'Chihuahua', 'Coahuila', 'Colima', 'Durango', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco', 'Estado de México', 'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla', 'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora', 'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas'];

var lugarRec = ['selecciona', "wtf"];

var nivEdu = ['selecciona', "Sin educación formal", "Primaria", "Secundaria", "Preparatoria", "Licenciatura", "Maestría", "Doctorado"];

var ocup = ['selecciona', "Estudiante", "Estudiante y empleado", "Empleado", "Jubilado o desempleado"];

var otrLenguas = ['selecciona', "Alemán", "Árabe", "Catalán", "Chino", "Coreano", "Francés", "Griego Moderno", "Hebreo", "Inglés", "Italiano", "Japonés", "Náhuatl", "Portugués", "Rumano", "Ruso", "Sueco", "Vasco", "Amuzgo", "Chatino", "Chichimeco", "Chinanteco", "Ch\´ol", "Chontal de Tabasco", "Cuicateco", "Huasteco", "Huave del oeste", "Huichol", "Lacandón", "Mam del Soconusco", "Matlatzinca", "Maya", "Mayo", "Mazahua", "Mazateco", "Mixe", "Mixteco del oeste de la costa", "Náhuatl de la huasteca potosina", "Otomí", "Pame del norte", "Popoloca", "Popoluca de la Sierra", "Purépecha", "Seri", "Tarahumara", "Tepehua del norte", "Tlahuica", "Tlapaneco", "Tojolabal", "Totonaco de la costa", "Triqui de la alta", "Tseltal", "Tsotsil", "Yaqui", "Zapoteco de la planicie costera", "Zoque del norte alto", "Akateko", "Awakateko", "Ayapaneco", "Chocholteco", "Chontal de Oaxaca", "Chuj", "Cora", "Cucapá", "Guarijío", "Ixcateco", "Ixil", "Jakalteko", "Kaqchikel", "K\'iche\'", "Kickapoo", "Kiliwa", "Ku\'ahl", "Kumiai", "Oluteco", "Paipai", "Pápago", "Q\'anjobal", "Qato\'k", "Q\'eqchi\'", "Sayulteco", "Teko", "Tepehuano del sur", "Texistepequeño"];

var relacion = ["selecciona", "Amiga/o-amiga/o", "Novia/o-novia/o", "Madre-hija/o", "Hija/o-madre", "Padre-hija/o", "Hija/o-padre", "Hermana/o-hermana/o", "Prima/o-prima/o", "Tía/o-sobrina/o", "Sobrina/o-tía/o", "Cuñada/o-cuñada/o", "Superior-subordinada/o", "Subordinada/o-superior", "Profesor/a-alumna/o", "Alumna/o-profesor/a", "Compañera/o de trabajo-compañera/o de trabajo", "Compañera/o de escuela-compañera/o de escuela", "Cliente-prestador/a de servicios", "Prestador/a de servicios-cliente"];

var carreras = ["selecciona", 'Arquitectura', 'Arquitectura de Paisaje', 'Diseño Industrial', 'Urbanismo', 'Actuaría', 'Biología', 'Ciencias de la Computación', 'Ciencias de la Tierra', 'Física', 'Física Biomédica', 'Matemáticas', 'Matemáticas Aplicadas', 'Antropología', 'Ciencias de la Comunicación', 'Ciencias Políticas y Administración Pública', 'Relaciones Internacionales', 'Sociología', 'Contaduría', 'Administración', 'Informática', 'Derecho', 'Economía', 'Bibliotecología y Estudios de la Información', 'Desarrollo y Gestión Interculturales', 'Estudios Latinoamericanos', 'Filosofía', 'Geografía', 'Historia', 'Lengua y Literaturas Hispánicas', 'Lengua y Literaturas Modernas (Letras Alemanas)', 'Lengua y Literaturas Modernas (Letras Francesas)', 'Lengua y Literaturas Modernas (Letras Inglesas)', 'Lengua y Literaturas Modernas (Letras Italianas)', 'Lengua y Literaturas Modernas (Letras Portuguesas)', 'Letras Clásicas', 'Literatura Dramática y Teatro', 'Pedagogía', 'Ingeniería Civil', 'Ingeniería de Minas y Metalurgia', 'Ingeniería Eléctrica y Electrónica', 'Ingeniería en Computación', 'Ingeniería en Sistemas Biomédicosb', 'Ingeniería en Telecomunicacionesb', 'Ingeniería Geofísica', 'Ingeniería Geológica', 'Ingeniería Geomática', 'Ingeniería Industrial', 'Ingeniería Mecánica', 'Ingeniería Mecatrónica', 'Ingeniería Petrolera', 'Ciencia Forense', 'Fisioterapia', 'Investigación Biomédica Básica', 'Médico Cirujano', 'Neurociencias', 'Médico Veterinario Zootecnista', 'Cirujano Dentista', 'Psicología', 'Ingeniería Química', 'Ingeniería Química Metalúrgica', 'Química', 'Química de Alimentos', 'Química Farmacéutico Biológica', 'Trabajo Social'];

var delegacions = ['selecciona', 'Álvaro Obregón', 'Azcapotzalco', 'Benito Juárez', 'Coyoacán', 'Cuajimalpa de Morelos', 'Cuauhtémoc', 'Gustavo A. Madero', 'Iztacalco', 'Iztapalapa', 'Magdalena Contreras', 'Miguel Hidalgo', 'Milpa Alta', 'Tláhuac', 'Tlalpan', 'Venustiano Carranza', 'Xochimilco'];

var colonias = [];

var user_1 = [];
var user_2 = [];
var arch = false; //si no se ha seleccionado archivo
var bloc = false; //same down here
var blockV = false; //para que no aparezcan muchas veces
var users = ['selecciona'];
var resi = false;
var resi2 = false;
var choose;
var form = false;
var form2 = false;
var delegacion = false;

//document.getElementById('fileinput').addEventListener('change', readSingleFile, false);

function variabl1() {
    document.getElementById("us1").style.display = 'block';
    document.getElementById("variabls1").style.display = 'block';
    if(form == false){
        for(var i=0; i<edad.length; i++){
            var opt = document.createElement("option");
            document.getElementById('edad').options.add(opt);
            opt.text = edad[i];
            opt.value = edad[i];
        }
        for(var i=0; i<genero.length; i++){
            var opt = document.createElement("option");
            document.getElementById('genero').options.add(opt);
            opt.text = genero[i];
            opt.value = genero[i];
        }
    
        for(var i=0; i<oSexual.length; i++){
            var opt = document.createElement("option");
            document.getElementById('oSexual').options.add(opt);
            opt.text = oSexual[i];
            opt.value = oSexual[i];
        }
            
        for(var i=0; i<lugarNac.length; i++){
            var opt = document.createElement("option");
            document.getElementById('lugarNac').options.add(opt);
            opt.text = lugarNac[i];
            opt.value = lugarNac[i];
        }
            
        for(var i=0; i<nivEdu.length; i++){
            var opt = document.createElement("option");
            document.getElementById('nivEdu').options.add(opt);
            opt.text = nivEdu[i];
            opt.value = nivEdu[i];
        }
    
        for(var i=0; i<ocup.length; i++){
            var opt = document.createElement("option");
            document.getElementById('ocup').options.add(opt);
            opt.text = ocup[i];
            opt.value = ocup[i];
        }
            
        for(var i=0; i<otrLenguas.length; i++){
            var opt = document.createElement("option");
            document.getElementById('otrLenguas').options.add(opt);
            opt.text = otrLenguas[i];
            opt.value = otrLenguas[i];
        }
        for(var i=0; i<relacion.length; i++){
                    var opt = document.createElement("option");
                    document.getElementById('relacion').options.add(opt);
                    opt.text = relacion[i];
                    opt.value = relacion[i];
        }
        form = true;
    }
}

function variabl2(){
    if(document.getElementById("ocup").value == ocup[2] || document.getElementById("ocup").value == ocup[3]){
        user_1[6]= user_1[6] + " " + document.getElementById("prof").value;
    }
    if(choose == true){
        user_1[4]= user_1[4] + " " + document.getElementById("colonias").options[document.getElementById("colonias").selectedIndex].value;
    }
    jsonis(user_1);
    if(user_1.length >= 8){
        concat(1);
        document.getElementById("us2").style.display = 'block';
        document.getElementById("us1").style.display = 'none';
        document.getElementById("heyb").style.display = 'none';
        document.getElementById("variabls1").style.display = 'none';
        document.getElementById("who").style.display = 'none';
        document.getElementById("variabls2").style.display = 'block';
        document.getElementById("inic").style.display = 'none';
        document.getElementById("new").style.display = 'none';

    if(form2 == false){
    for(var i=0; i<edad.length; i++){
            var opt = document.createElement("option");
            document.getElementById('edad2').options.add(opt);
            opt.text = edad[i];
            opt.value = edad[i];
        }
            
        for(var i=0; i<genero.length; i++){
            var opt = document.createElement("option");
            document.getElementById('genero2').options.add(opt);
            opt.text = genero[i];
            opt.value = genero[i];
        }
    
        for(var i=0; i<oSexual.length; i++){
            var opt = document.createElement("option");
            document.getElementById('oSexual2').options.add(opt);
            opt.text = oSexual[i];
            opt.value = oSexual[i];
        }
            
        for(var i=0; i<lugarNac.length; i++){
            var opt = document.createElement("option");
            document.getElementById('lugarNac2').options.add(opt);
            opt.text = lugarNac[i];
            opt.value = lugarNac[i];
        }
        
        for(var i=0; i<nivEdu.length; i++){
            var opt = document.createElement("option");
            document.getElementById('nivEdu2').options.add(opt);
            opt.text = nivEdu[i];
            opt.value = nivEdu[i];
        }
    
        for(var i=0; i<ocup.length; i++){
            var opt = document.createElement("option");
            document.getElementById('ocup2').options.add(opt);
            opt.text = ocup[i];
            opt.value = ocup[i];
        }
            
        for(var i=0; i<otrLenguas.length; i++){
            var opt = document.createElement("option");
            document.getElementById('otrLenguas2').options.add(opt);
            opt.text = otrLenguas[i];
            opt.value = otrLenguas[i];
        }
    
        for(var i=0; i<lugarRec.length; i++){
            var opt = document.createElement("option");
            document.getElementById('lugarRec2').options.add(opt);
            opt.text = lugarRec[i];
            opt.value = lugarRec[i];
        }
            form2 = true;
    }else{document.getElementById("heyb").style.display = 'block';}
}
}

function reset() {
    if(user_2.length >= 5){
        concat(0);
        document.getElementById("heyb").style.display = 'none';
        document.getElementById("us2").style.display = 'none';
        document.getElementById("inic").style.display = 'block';
        document.getElementById("variabls2").style.display = 'none';
        arch = false;
        bloc = false;
        blockV = false;
    }else{
        document.getElementById("heyb").style.display = 'block';
    }
}

function di(e, b) { //e es el arreglo         b es el índice
    for(var i=0;i<10;i++){
          if(i == b){
              if(b == 6){
                ocu(0);
              }
              if(b == 5){
                 nivEd(0);
              }
              if(b == 4){
                 if (choose == true){ 
                     //cp escogió 
                     user_1[4] = user_1[4] + " " + document.getElementById("colonias").options[document.getElementById("colonias").selectedIndex].value;
                 }else{
                     //escribir del o mun y colonia 
                     if(delegacion == false){ //escribir mun y colonia
                        user_1[4] = document.getElementById("mun").value;
                     }else{
                         user_1[4] = document.getElementById("del").options[document.getElementById("del").selectedIndex].value;
                     }
                     user_1[4] = user_1[4] + document.getElementById("colonia").value;
                 }
              }
              if(b == 7){
                 leng();
                 }
            user_1[i] = document.getElementById(e).options[document.getElementById(e).selectedIndex].value;
            }
}
}

function di2(e, b) {
    for(var i=0;i<10;i++){
          if(i == b){
              user_2[i-1] = document.getElementById(e).options[document.getElementById(e).selectedIndex].value;
            }
    }
}

function code_post(c){
    var postal_code = document.getElementById("codigo_postal").value;
    var myRequest = new Request('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/' + postal_code);
        fetch(myRequest)
            .then(function(response) {
                if(response.status == 200) return response.json();
                else throw new Error('Something went wrong on api server!');
            })
            .then(function(response) {
                resultado = JSON.stringify(response); //resultado
                //var y = JSON.stringify(JSON.parse(resultado));
            // 250 municipio 341 estado de la rep
                alert(resultado);
            //38 municipio 64 estado
                posC = resultado.indexOf("\",",38);
                col = resultado.slice(38,posC);
                posDM = resultado.indexOf("\",",posC + 12);
                del_mun = resultado.slice(posC + 12,posDM);
            if(c == 1){
               user_1[4]=col + " " + del_mun;
               }else{
                    user_2[4] = col + " " + del_mun;
               }
            colonia = resultado.indexOf("colonia"); 
            colonia_fin = resultado.indexOf("]",colonia);
            arrColonias = resultado.slice(colonia + 12 ,colonia_fin - 1);
            colonias = arrColonias.split('\",\"');
            for(var i=0; i<colonias.length; i++){
            var opt = document.createElement("option");
            document.getElementById('colonias').options.add(opt);
            opt.text = colonias[i];
            opt.value = colonias[i];
        }
            })
            .catch(function(error) {
                console.error(error);
            });
}

function code_post2(c){
    var postal_code = document.getElementById("codigo_postal2").value;
    var myRequest = new Request('https://api-codigos-postales.herokuapp.com/v2/codigo_postal/' + postal_code);
        fetch(myRequest)
            .then(function(response) {
                if(response.status == 200) return response.json();
                else throw new Error('Something went wrong on api server!');
            })
            .then(function(response) {
                resultado = JSON.stringify(response); //resultado
                //var y = JSON.stringify(JSON.parse(resultado));
            // 250 municipio 341 estado de la rep
                alert(resultado);
            //38 municipio 64 estado
                posC = resultado.indexOf("\",",38);
                col = resultado.slice(38,posC);
                posDM = resultado.indexOf("\",",posC + 12);
                del_mun = resultado.slice(posC + 12,posDM);
            if(c == 1){
               user_1[5]=col + " " + del_mun;
               }else{
                    user_2[5] = col + " " + del_mun;
               }
            colonia = resultado.indexOf("colonia"); 
            colonia_fin = resultado.indexOf("]",colonia);
            arrColonias = resultado.slice(colonia + 12 ,colonia_fin - 1);
            colonias = arrColonias.split('\",\"');
            for(var i=0; i<colonias.length; i++){
            var opt = document.createElement("option");
            document.getElementById('colonias2').options.add(opt);
            opt.text = colonias[i];
            opt.value = colonias[i];
        }
            })
            .catch(function(error) {
                console.error(error);
            });
}
    
function concat(a,b){ //a selector b prof u oficio
    if(a){
        user_1[7] = user_1[7] + " " + b;
        //alert(user_1);
    }else{
        user_2[7] = user_2[7] + " " + b;
    }
}

function ocu(f){
    if(f == 0){
        user_1[6] = document.getElementById("ocup").options[document.getElementById("ocup").selectedIndex].value;
        if(document.getElementById("ocup").value == ocup[2] || document.getElementById("ocup").value == ocup[3]){
            document.getElementById("job").style.display = 'block';
        }
    }
}

function ocu2(f){
    if(f == 0){
        if(document.getElementById("ocup2").value == ocup[2] || document.getElementById("ocup2").value == ocup[3]){
           document.getElementById("job2").style.display = 'block';
        }
    }else{
        //concat();
    }
}

function nivEd(f){
    if(f == 0){
        if(document.getElementById("nivEdu").value == nivEdu[5]){
           document.getElementById("carreras").style.display = 'block';
        }
    }else{
        
    }
    for(var i=0; i<carreras.length; i++){
            var opt = document.createElement("option");
            document.getElementById('carrera').options.add(opt);
            opt.text = carreras[i];
            opt.value = carreras[i];
        }
}

function nivEd2(){
        if(document.getElementById("nivEdu2").value == nivEdu[5]){
           document.getElementById("carreras2").style.display = 'block';
    for(var i=0; i<carreras.length; i++){
            var opt = document.createElement("option");
            document.getElementById('carrera2').options.add(opt);
            opt.text = carreras[i];
            opt.value = carreras[i];
        }
}
}

function jsonis(k){
    env = JSON.stringify(k);
    alert(env);
   }

function choose(x){
    if(x == 1){
        choose = true;
        document.getElementById("residencia1").style.display = 'block';
        document.getElementById("residencia2").style.display = 'none';
    }else{
        document.getElementById("residencia2").style.display = 'block';
        document.getElementById("residencia1").style.display = 'none';
        choose = false;
    }
}

function choose2(x){
    if(x == 1){
        document.getElementById("residencia3").style.display = 'block';
        document.getElementById("residencia4").style.display = 'none';
    }else{
        document.getElementById("residencia4").style.display = 'block';
        document.getElementById("residencia3").style.display = 'none';
    }
}

function deleg(){
    if(resi == false){
        delegacion = true;
        document.getElementById("delegaciones").style.display = 'block';
        resi = true;
        for(var i=0; i<delegacions.length; i++){
            var opt = document.createElement("option");
            document.getElementById('del').options.add(opt);
            opt.text = delegacions[i];
            opt.value = delegacions[i];
        }
    }else{
        document.getElementById("otrosMun").style.display = 'none';
        document.getElementById("delegaciones").style.display = 'block';
    }
}

function mun(){
    if(resi == false){
        document.getElementById("otrosMun").style.display = 'block';
        resi = true;
    }else{
        document.getElementById("delegaciones").style.display = 'none';
        document.getElementById("otrosMun").style.display = 'block';
    }
}

function deleg2(){
    if(resi2 == false){
        document.getElementById("delegaciones2").style.display = 'block';
        resi2 = true;
        for(var i=0; i<delegacions.length; i++){
            var opt = document.createElement("option");
            document.getElementById('del2').options.add(opt);
            opt.text = delegacions[i];
            opt.value = delegacions[i];
        }
    }else{
        document.getElementById("otrosMun2").style.display = 'none';
        document.getElementById("delegaciones2").style.display = 'block';
    }
}

function mun2(){
    if(resi2 == false){
        document.getElementById("otrosMun2").style.display = 'block';
        resi2 = true;
    }else{
        document.getElementById("delegaciones2").style.display = 'none';
        document.getElementById("otrosMun2").style.display = 'block';
    }
}

function showCol(){
    for(var i=0; i<colonias.length; i++){
            var opt = document.createElement("option");
            document.getElementById('colonia').options.add(opt);
            opt.text = delegacions[i];
            opt.value = delegacions[i];
        }
}

function otroLenguas(){
    document.getElementById("leng2").style.display = 'block';
    for(var i=0; i<otrLenguas.length; i++){
            var opt = document.createElement("option");
            document.getElementById('otrLenguas2').options.add(opt);
            opt.text = otrLenguas[i];
            opt.value = otrLenguas[i];
        }
}

function otroLenguas2(){
    document.getElementById("leng3").style.display = 'block';
    for(var i=0; i<otrLenguas.length; i++){
            var opt = document.createElement("option");
            document.getElementById('otrLenguas3').options.add(opt);
            opt.text = otrLenguas[i];
            opt.value = otrLenguas[i];
        }
}

function leng(){
}