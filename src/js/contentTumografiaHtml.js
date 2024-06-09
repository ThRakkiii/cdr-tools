

const radioButtonsq3 = document.querySelectorAll('input[name="cirurgia"]');
let q3selected = false;
radioButtonsq3.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q3selected = true;
      } else if (radioButton.value === "nao") {
         q3selected = false;
      }
   });
});

const radioButtonsq4 = document.querySelectorAll('input[name="outraCirurgia"]');
let q4selected = false;
radioButtonsq4.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q4selected = true;
      } else if (radioButton.value === "nao") {
         q4selected = false;
      }
   });
});

const radioButtonsq5 = document.querySelectorAll('input[name="quimioterapia"]');
let q5selected = false;
radioButtonsq5.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q5selected = true;
      } else if (radioButton.value === "nao") {
         q5selected = false;
      }
   });
});

const radioButtonsq6 = document.querySelectorAll('.d-inp');
let hipertensao = false;
let cardiopatias = false;
let diabetes = false;
let insurenal = false;
let anemiaFalci = false;
let mieloma = false;
let asma = false;
let rinite = false;
let outros = false;
radioButtonsq6.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      switch (radioButton.value) {
         case 'hipertensao':
            hipertensao = hipertensao ? false : true;
            break;
         case 'cardiopatias':
            cardiopatias = cardiopatias ? false : true;
            break;
         case 'diabetes':
            diabetes = diabetes ? false : true;
            break;
         case 'insuficienciaRenal':
            insurenal = insurenal ? false : true;
            break;
         case 'anemiaFalciforme':
            anemiaFalci = anemiaFalci ? false : true;
            break;
         case 'mielomaMultiplo':
            mieloma = mieloma ? false : true;
            break;
         case 'asma':
            asma = asma ? false : true;
            break;
         case 'rinite':
            rinite = rinite ? false : true;
            break;
         case 'outros':
            outros = outros ? false : true;
            break;
      }
   });
});

const radioButtonsq7 = document.querySelectorAll('input[name="medicamento"]');
let q7selected = false;
radioButtonsq7.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q7selected = true;
      } else if (radioButton.value === "nao") {
         q7selected = false;
      }
   });
});

const radioButtonsq8 = document.querySelectorAll('input[name="alergia"]');
let q8selected = false;
radioButtonsq8.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q8selected = true;
      } else if (radioButton.value === "nao") {
         q8selected = false;
      }
   });
});

const radioButtonsq9 = document.querySelectorAll('input[name="alergiaMedicamentosa"]');
let q9selected = false;
radioButtonsq9.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q9selected = true;
      } else if (radioButton.value === "nao") {
         q9selected = false;
      }
   });
});

const radioButtonsq10 = document.querySelectorAll('input[name="alergiaAlimentar"]');
let q10selected = false;
radioButtonsq10.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q10selected = true;
      } else if (radioButton.value === "nao") {
         q10selected = false;
      }
   });
});

const radioButtonsq11 = document.querySelectorAll('input[name="tabagista"]');
let q11selected = false;
radioButtonsq11.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q11selected = true;
      } else if (radioButton.value === "nao") {
         q11selected = false;
      }
   });
});

const radioButtonsq12 = document.querySelectorAll('input[name="tuberculose"]');
let q12selected = false;
radioButtonsq12.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q12selected = true;
      } else if (radioButton.value === "nao") {
         q12selected = false;
      }
   });
});

const radioButtonsq13 = document.querySelectorAll('input[name="tcAnterior"]');
let q13selected = false;
radioButtonsq13.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q13selected = true;
      } else if (radioButton.value === "nao") {
         q13selected = false;
      }
   });
});

const radioButtonsq13_1 = document.querySelectorAll('input[name="tcAnteriorInter"]');
let q13_1selected = false;
radioButtonsq13_1.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q13_1selected = true;
      } else if (radioButton.value === "nao") {
         q13_1selected = false;
      }
   });
});

const radioButtonsq14 = document.querySelectorAll('input[name="examePrevio"]');
let q14selected = false;
radioButtonsq14.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q14selected = true;
      } else if (radioButton.value === "nao") {
         q14selected = false;
      }
   });
});

const radioButtonsq14_1 = document.querySelectorAll('input[name="quest14_1"]');
let q14_1selected = false;
radioButtonsq14_1.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q14_1selected = true;
      } else if (radioButton.value === "nao") {
         q14_1selected = false;
      }
   });
});

const radioButtonsq15 = document.querySelectorAll('input[name="anestesia"]');
let q15selected = false;
radioButtonsq15.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q15selected = true;
      } else if (radioButton.value === "nao") {
         q15selected = false;
      }
   });
});

const radioButtonsq16 = document.querySelectorAll('input[name="contrasteIodado"]');
let q16selected = false;
radioButtonsq16.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q16selected = true;
      } else if (radioButton.value === "nao") {
         q16selected = false;
      }
   });
});

const radioButtonsq16_1 = document.querySelectorAll('input[name="intercorrenciaContrasIodado"]');
let q16_1selected = false;
radioButtonsq16_1.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q16_1selected = true;
      } else if (radioButton.value === "nao") {
         q16_1selected = false;
      }
   });
});

const radioButtonsq17 = document.querySelectorAll('input[name="hipoglicemiante"]');
let q17selected = false;
radioButtonsq17.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q17selected = true;
      } else if (radioButton.value === "nao") {
         q17selected = false;
      }
   });
});

const radioButtonsq18 = document.querySelectorAll('input[name="possibilidadeGravidez"]');
let q18selected = false;
radioButtonsq18.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q18selected = true;
      } else if (radioButton.value === "nao") {
         q18selected = false;
      }
   });
});

const radioButtonsq19 = document.querySelectorAll('input[name="possibilidadeAmamentacao"]');
let q19selected = false;
radioButtonsq19.forEach(radioButton => {
   radioButton.addEventListener('change', () => {
      if (radioButton.value === "sim") {
         q19selected = true;
      } else if (radioButton.value === "nao") {
         q19selected = false;
      }
   });
});


const htmlToprint = () => {

   const converterData = (data) => {
      var partes = data.split("-");
      var dataConvertida = partes[2] + "/" + partes[1] + "/" + partes[0];
      return dataConvertida;
   }

   const converterDataMonth = (data) => {
      var partes = data.split("-");
      var mes = ""
      switch (partes[1]) {
         case "01":
            mes = "Janeiro"
            break;
         case "02":
            mes = "Fevereiro"
            break;
         case "03":
            mes = "Março"
            break;
         case "04":
            mes = "Abril"
            break;
         case "05":
            mes = "Maio"
            break;
         case "06":
            mes = "Junho"
            break;
         case "07":
            mes = "Julho"
            break;
         case "08":
            mes = "Agosto"
            break;
         case "09":
            mes = "Setembro"
            break;
         case "10":
            mes = "Outubro"
            break;
         case "11":
            mes = "Novembro"
            break;
         case "12":
            mes = "Dezembro"
            break;


      }

      var dataConvertida = mes + "/" + partes[0];
      return dataConvertida;
   }

   const simNaoStr = (perg) => {
      let ret = perg ? "(x)Sim ( )Não" : "( )Sim (x)Não";
      return ret;
   };

   const pergScritStr = (perg, varName) => {
      let ret = perg ? `let ${varName} = true` : `let ${varName} = false`;
      return ret;
   };

   const isSelected = op => op ? 'x' : ' ';

   let dataProxRev = document.getElementById("proximaRevisao");
   let codigo = document.getElementById("codigo")
   let revisao = document.getElementById("revisao")


   let nomePaciente = document.getElementById("paciente");
   let dataNascimento = document.getElementById("dn");
   let pesoPaciente = document.getElementById("peso");
   let alturaPaciente = document.getElementById("altura");
   let rgCpf = document.getElementById("rgCPF");

   let telefone = document.getElementById("telefone");
   let dataExame = document.getElementById("dataExame");
   let exame = document.getElementById("exame");
   let protocolo = document.getElementById("protocolo");
   let medicoSolicitante = document.getElementById("medicoSolicitante");


   let q1 = document.getElementById("motivoExame");
   let q2 = document.getElementById("principalQueixa");
   let q2QntTempo = document.getElementById("tempoSintomas");
   let q3 = q3selected;
   let q3Qual = document.getElementById("cirurgiaRealizada")
   let q4 = q4selected;
   let q4Qual = document.getElementById("outraCirurgiaRealizada")
   let q5 = q5selected;
   let q5Qual = document.getElementById("quimioterapiaRealizada")
   let q6Qual = document.getElementById("outraEnfermidadeTipo")
   let q7 = q7selected;
   let q7Qual = document.getElementById("medicamentoUtilizado")
   let q8 = q8selected;
   let q8Qual = document.getElementById("alergiaTipo")
   let q9 = q9selected;
   let q9Qual = document.getElementById("alergiaMedicamentosaTipo")
   let q10 = q10selected
   let q10Qual = document.getElementById("alergiaAlimentarTipo")
   let q11 = q11selected;
   let q12 = q12selected;
   let q13 = q13selected;
   let q13Qual = document.getElementById("tcAnteriorData")   
   let q13_1 = q13_1selected;
   let q13_1Qual = document.getElementById("tcAnteriorInterTipo")
   let q14 = q14selected;
   let q14_1 = q14_1selected;
   let q14Qual = document.getElementById("examePrevioData")
   let q15 = q15selected;
   let q16 = q16selected;
   let q16Qual = document.getElementById("contrasteIodadoTipo")
   let q16_1 = q16_1selected;
   let q16_1Qual = document.getElementById("intercorrenciaContrasIodadoTipo")
   let q17 = q17selected;
   let q17Qual = document.getElementById("hipoglicemianteTipo")
   let q18 = q18selected;
   let q19 = q19selected;
   let q20 = document.getElementById("TipoExame");
   let q21 = document.getElementById("OrientacaoMedica");

   // variaveis que levarão texto para o html
   let textq3 = simNaoStr(q3);
   let textq4 = simNaoStr(q4);
   let textq5 = simNaoStr(q5);
   let textq7 = simNaoStr(q7);
   let textq8 = simNaoStr(q8);
   let textq9 = simNaoStr(q9);
   let textq10 = simNaoStr(q10);
   let textq11 = simNaoStr(q11);
   let textq12 = simNaoStr(q12);
   let textq13 = simNaoStr(q13);
   let textq13_1 = simNaoStr(q13_1);
   let textq14 = simNaoStr(q14);
   let textq14_1 = simNaoStr(q14_1);
   let textq15 = simNaoStr(q15);
   let textq16 = simNaoStr(q16);
   let textq16_1 = simNaoStr(q16_1);
   let textq17 = simNaoStr(q17);
   let textq18 = simNaoStr(q18);
   let textq19 = simNaoStr(q19);
   let textq6Hipertensao = isSelected(hipertensao);
   let textq6Cardiopatias = isSelected(cardiopatias);
   let textq6Diabetes = isSelected(diabetes);
   let textq6Insurenal = isSelected(insurenal);
   let textq6AnemiaFalci = isSelected(anemiaFalci);
   let textq6Mieloma = isSelected(mieloma);
   let textq6Asma = isSelected(asma);
   let textq6Rinite = isSelected(rinite);
   let textq6Outros = isSelected(outros);
   let q3script = pergScritStr(q3, "q3");
   let q4script = pergScritStr(q4, "q4");
   let q5script = pergScritStr(q5, "q5");
   let q6script = pergScritStr(outros, "q6");
   let q7script = pergScritStr(q7, "q7");
   let q8script = pergScritStr(q8, "q8");
   let q9script = pergScritStr(q9, "q9");
   let q10script = pergScritStr(q10, "q10");
   let q13script = pergScritStr(q13, "q13");
   let q13_1script = pergScritStr(q13_1, "q13_1");
   let q14script = pergScritStr(q14, "q14");
   let q16script = pergScritStr(q16, "q16");
   let q16_1script = pergScritStr(q16_1, "q16_1");
   let q17script = pergScritStr(q17, "q17");


   let content = `<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Historico Enfermagem ${nomePaciente.value}</title>
    <style>

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Arial, Helvetica, sans-serif;
     }
     
     body {
        padding: 20px;
     }
     
     .head {
        height: 120px;
        overflow: hidden;
     }
     
     .logo {
        float: left;
        width: calc(50% - 10px);
        border: 1px black solid;
        height: 100%;
        position: relative;
     }
     
     .text-head {
        float: right;
        width: calc(50% + 10px);
        height: 100%;
        border-right: 1px black solid;
        border-bottom: 1px black solid;
        border-top: 1px black solid;
        position: relative;
        text-align: center;
     }
     
     .text-head h4 {
        position: absolute;
        top: 40%;
        left: 10%;
        transform: translate(-50%, -50%);
     }
     
     .first-box {
        margin-top: 15px;
        border: solid 1px black;
        padding: 10px;
        overflow: hidden;
     }
     
     .cabecalho {
        width: calc(50% - 10px);
        float: left;
        overflow: hidden;
        border-right: solid 1px black;
     }
     
     .infos-box {
        overflow: hidden;
        
     }
     
     .left-info {
        float: left;
        width: 100%;
     }
     
     .left-info div,
     .right-info div {
        margin-bottom: 20px;
     }
     
     .aside-box {
        width: calc(50% - 10px);
        float: right;
        overflow: hidden;
     }
     
     .aside-box ul {
        text-decoration: none;
        list-style: none;   
     }
     
     ul li {
        margin-bottom: 15px;
        overflow: hidden;
        margin-bottom: 20px;
     }
     
     .qt{
         font-weight: 700;
     }
     
     .doctor-info {
        overflow: hidden;
        width: 800px;
        margin: 15px 0;
     }
     
     .box-docName {
        width: 70%;
        float: left;
     }
     
     .box-crm,
     .box-spec {
        width: 30%;
        float: left;
     }
     
     .box-spec {
        margin-top: 10px;
     }
     
     .question {
        margin: 20px 0;
        overflow: hidden;
     }
     
     .q {
        font-weight: bold;
        width: auto;
        float: left;
        margin-right: 10px;
     }
     
     .text-med {
        clear: left;
     }
     
     .text-med p {
        display: inline-block;
        line-height: 25px;
     }
     
   
     
     .q7,
     .q8,
     .q9,
     .q10,
     .q11,
     .q12,
     .q14,
     .q15,
     .q16,
     .q17,
     .q18 {
        overflow: hidden;
        margin: 10px 0;
     }
     
     .box-q11 {
        overflow: hidden;
        margin-top: 10px;
     }
     
     .q12,
     .q15,
     .q16 {
        width: 100%;
        float: left;
        margin-top: 10px;
     }
     
     .q12 .q,
     .q15 .q,
     .q16 .q {
        width: 100%;
        float: left;
     }
     
     #qan,
     .qan {
        clear: left;
     }
     
     .rad-choose {
        margin-right: 25px;
        margin-bottom: 5px;
     }
     
     svg {
        height: 115px;
        width: 350px;
     }

     .obsHead{
   padding: 10px;
   margin:10px 0;
   border: #000 solid 1px;
   }

.cod,
.rev{
   width:270px;
   float: left;
   overflow: hidden;
}
     
    </style>
     
</head>
<body>
    <div class="head">
    <div class="logo">

    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    width="100%" viewBox="0 0 491 212" enable-background="new 0 0 491 212" xml:space="preserve">
<path fill="#FDFDFC" opacity="1.000000" stroke="none" 
   d="
M366.000000,213.000000 
   C244.000015,213.000000 122.500046,213.000000 1.000049,213.000000 
   C1.000033,142.333374 1.000033,71.666733 1.000016,1.000077 
   C164.666611,1.000051 328.333221,1.000051 491.999878,1.000026 
   C491.999908,71.666588 491.999908,142.333176 491.999939,212.999878 
   C450.166656,213.000000 408.333344,213.000000 366.000000,213.000000 
M173.663895,88.749229 
   C173.663895,88.749229 173.671280,88.685600 174.734421,88.948479 
   C175.096130,88.997719 175.457855,89.046967 175.881119,89.702766 
   C175.727097,90.277802 175.573090,90.852837 175.258087,91.972763 
   C175.414154,92.304482 175.570221,92.636200 175.789978,93.751587 
   C175.464172,95.839142 175.138367,97.926697 174.405472,100.394363 
   C174.333969,100.752808 174.262466,101.111259 174.120865,102.235207 
   C172.285080,112.641640 167.905075,121.862946 160.616898,129.491669 
   C146.061966,144.726669 117.477394,144.621704 108.345642,120.193352 
   C105.523643,112.644218 105.549484,112.084061 113.044518,108.779907 
   C113.041557,115.159996 116.030540,117.245285 122.112656,115.211769 
   C124.935173,114.268082 127.820778,113.513084 131.094315,112.549995 
   C129.816559,108.996521 127.314278,106.352936 122.888275,106.021858 
   C120.268379,105.825882 117.624298,105.953018 115.237526,105.292503 
   C118.597206,100.375832 123.716278,100.040146 128.961716,100.861824 
   C128.971634,107.540657 128.971634,107.540657 144.021164,104.992165 
   C140.390518,102.188507 137.653412,100.074875 135.421097,97.591385 
   C136.004395,96.735832 136.587692,95.880272 137.845993,95.021164 
   C138.521179,95.016800 139.196381,95.012436 139.973450,95.774208 
   C141.763779,100.259651 141.763779,100.259651 150.916489,94.057785 
   C149.502502,93.236771 148.262131,92.516556 146.582153,91.366989 
   C145.808289,90.979736 145.034424,90.592491 142.846710,89.497734 
   C145.698044,88.770737 147.167374,88.396103 148.747437,88.749802 
   C151.810196,93.469559 154.007874,88.416603 157.722290,88.605263 
   C155.836929,87.206924 154.925980,86.531281 153.835617,85.151321 
   C152.174484,84.352592 150.513351,83.553864 148.952408,82.114609 
   C148.816315,80.379944 148.680222,78.645279 148.544113,76.910614 
   C146.292587,79.493248 141.166046,80.824844 144.679642,85.220314 
   C141.773666,88.032776 138.867676,90.845238 135.221878,93.876366 
   C131.404709,95.656097 127.584854,97.416580 122.827950,95.809303 
   C123.711777,93.631264 124.441643,91.832642 125.888359,89.993797 
   C126.364685,89.944061 126.841019,89.894333 127.795670,90.358353 
   C129.657425,90.591850 132.540771,91.686958 133.199539,90.905861 
   C135.708160,87.931450 137.872177,84.472847 136.993149,79.594536 
   C137.000214,79.410477 137.007294,79.226425 137.401184,78.496994 
   C138.369019,76.997833 139.336868,75.498672 140.643814,73.838638 
   C140.851456,73.680702 140.988556,73.475594 141.359436,72.514946 
   C141.175323,72.035561 140.991226,71.556175 141.365250,70.713867 
   C141.551498,70.094681 141.737732,69.475494 142.260132,68.276306 
   C143.499802,66.739067 144.739487,65.201836 146.273315,63.299816 
   C139.540649,62.952175 138.129623,64.460663 139.795700,69.539192 
   C139.531555,69.980270 139.267426,70.421341 138.314484,70.995789 
   C137.213837,71.350426 136.113174,71.705063 134.770096,71.520081 
   C132.920792,72.334183 131.071487,73.148285 129.003403,73.237732 
   C127.726639,70.441521 127.840042,66.518631 123.143829,66.225845 
   C122.961601,69.742378 122.783409,73.181137 122.590271,76.908386 
   C124.991592,76.782364 126.450325,76.705811 127.890968,77.373062 
   C127.253212,78.943336 126.615448,80.513618 125.360687,82.204765 
   C124.576698,82.880417 123.792709,83.556068 122.382515,83.785950 
   C121.538506,79.860107 120.894554,75.761696 115.929031,75.777809 
   C115.365234,78.557083 114.738609,81.224655 114.295753,83.922394 
   C113.523460,88.626961 116.174797,90.639420 121.076149,89.823303 
   C119.353165,92.542213 117.630188,95.261124 115.185448,97.885048 
   C114.656441,97.411926 114.127434,96.938805 113.688545,95.734131 
   C112.730850,87.327980 110.165245,84.236084 104.404114,84.466400 
   C104.588928,85.395409 105.034782,86.370102 104.909065,87.264435 
   C104.635216,89.212395 104.049469,91.114899 103.628036,93.044022 
   C102.367104,98.815926 104.090828,101.041283 109.974205,101.887321 
   C109.966087,102.511192 109.957962,103.135071 109.378326,104.199783 
   C102.784569,107.864410 100.675392,108.116386 96.637505,101.796028 
   C92.432182,95.213577 89.709023,87.636604 86.820412,80.304344 
   C86.298401,78.979332 88.107407,76.735992 89.476318,75.018463 
   C90.274040,75.673096 91.071754,76.327736 92.032425,77.701515 
   C98.236877,83.332069 101.253654,75.259811 106.326210,73.830948 
   C104.557945,72.832138 102.789688,71.833328 101.088089,70.250351 
   C101.722816,69.538971 102.357552,68.827591 103.565094,67.735252 
   C105.252762,66.592819 106.940430,65.450378 108.763344,64.216393 
   C108.176918,63.528046 107.565742,62.810650 106.970795,61.288898 
   C106.959282,60.484520 106.947762,59.680141 107.017296,58.201977 
   C107.826599,57.184586 108.635902,56.167191 109.445213,55.149799 
   C109.322884,54.750889 109.200554,54.351978 109.078224,53.953068 
   C106.912766,54.422157 104.747307,54.891247 101.774574,55.182243 
   C100.850357,56.132042 99.926147,57.081837 98.264259,58.006161 
   C97.526306,58.005856 96.788345,58.005550 96.060760,57.196266 
   C94.101776,57.024887 92.142799,56.853508 90.063484,55.766937 
   C90.022987,55.461926 89.982491,55.156910 90.257095,54.227989 
   C91.400887,51.727894 92.544670,49.227802 93.849663,46.375362 
   C92.350327,46.249332 91.236404,46.155697 89.508385,45.640926 
   C89.228096,45.234657 88.947815,44.828388 88.992928,43.859463 
   C89.781235,42.329330 90.569542,40.799198 91.401627,39.184093 
   C85.753555,38.814278 84.814117,39.726353 84.356110,44.972965 
   C83.508286,45.004078 82.660461,45.035187 81.352631,44.581642 
   C79.573883,43.369400 77.795135,42.157162 76.016388,40.944920 
   C75.677956,41.318264 75.339523,41.691605 75.001099,42.064945 
   C75.660782,43.769550 76.320465,45.474152 76.794434,48.100876 
   C76.721649,48.405853 76.648865,48.710831 76.188026,48.912037 
   C75.925964,48.815620 75.718414,48.650642 74.893578,48.191551 
   C74.268646,48.419689 73.643715,48.647823 72.561195,49.288261 
   C73.366524,51.547375 74.171852,53.806492 74.881752,56.694008 
   C73.916374,57.405941 72.950989,58.117870 71.280342,58.993214 
   C70.887665,59.242939 70.129456,59.664482 70.154541,59.717850 
   C71.749924,63.111935 73.409004,66.476074 75.031738,70.590897 
   C75.032516,71.089920 75.033302,71.588943 74.810158,72.605309 
   C74.243584,73.084679 73.677010,73.564056 72.378433,74.021935 
   C71.646240,74.008118 70.914055,73.994301 69.895287,73.349609 
   C69.073563,71.715088 68.251839,70.080566 67.235008,68.057953 
   C66.027946,69.553879 65.037247,70.781662 63.455448,71.998154 
   C63.061413,71.993286 62.667377,71.988411 62.186802,71.319893 
   C62.206963,70.875313 62.227119,70.430733 62.507488,69.756050 
   C62.358723,69.505096 62.209957,69.254143 61.577320,68.506126 
   C61.207466,67.461426 60.837612,66.416733 60.443668,65.303986 
   C56.203365,67.323845 57.550087,70.706299 58.230206,74.452415 
   C58.280300,75.139938 58.330399,75.827454 58.380493,76.514977 
   C57.903854,76.309433 57.427216,76.103889 56.910175,75.196129 
   C53.235321,72.413109 51.352478,72.904060 47.926380,78.159355 
   C50.598141,78.159355 52.794819,78.159355 55.226524,78.601868 
   C55.476322,79.033882 55.726120,79.465897 55.279060,80.096283 
   C54.166073,81.768700 53.053082,83.441116 51.940094,85.113525 
   C52.381676,85.730774 52.823257,86.348022 53.264839,86.965271 
   C56.858616,85.645508 60.452396,84.325752 64.658669,83.089233 
   C65.427330,84.033882 66.195992,84.978539 66.284569,86.275352 
   C64.712654,86.687500 62.903912,86.743233 61.623505,87.594063 
   C59.626968,88.920761 57.988857,90.786865 56.198864,92.424400 
   C56.531029,92.852386 56.863194,93.280373 57.195358,93.708366 
   C61.109444,94.055840 65.023537,94.403305 68.973785,95.397949 
   C68.989067,95.613480 69.004356,95.829002 68.647789,96.603828 
   C66.938728,98.613747 65.229660,100.623657 62.804432,103.475800 
   C65.705460,103.297310 67.160286,102.972488 68.531921,103.184883 
   C70.131767,103.432610 71.639587,104.220985 73.221062,104.650581 
   C79.215866,106.279022 81.959084,104.210785 81.974106,97.375740 
   C81.994385,96.865807 82.014664,96.355873 82.768959,95.998138 
   C86.997147,96.850311 89.146736,99.692490 89.917366,103.696976 
   C90.951836,109.072418 92.278488,114.436417 92.744186,119.868393 
   C94.331596,138.384171 82.757751,149.970184 64.274368,147.928116 
   C59.374348,147.386749 54.721283,144.560257 49.971401,142.739746 
   C48.524536,142.185196 47.133072,141.486069 45.716236,140.853149 
   C45.187397,141.528152 44.658562,142.203156 44.129726,142.878159 
   C48.767292,146.901184 53.144524,151.281128 58.086987,154.886154 
   C80.846687,171.487000 106.118309,173.692932 132.046738,165.181442 
   C158.452042,156.513397 173.879440,137.315247 179.576981,109.526955 
   C179.491440,108.038651 179.405884,106.550354 179.196655,104.172485 
   C179.148773,101.775414 179.100891,99.378349 179.598434,96.471497 
   C179.210907,94.303802 178.823395,92.136101 178.229492,89.332512 
   C178.134689,88.897026 178.039871,88.461533 178.463501,87.617752 
   C178.446579,84.690720 178.169403,81.958817 174.100616,81.318016 
   C174.135391,80.876587 174.170151,80.435150 174.482468,79.797394 
   C174.380585,79.533279 174.278717,79.269173 174.007965,78.220108 
   C173.149048,75.196098 172.572830,72.056221 171.388214,69.165688 
   C156.834503,33.653130 117.477890,15.526234 80.914856,27.689352 
   C61.229389,34.237953 46.568916,46.746510 37.359798,66.307976 
   C31.636734,78.888580 29.687216,91.974457 32.073997,105.623474 
   C32.705013,103.954414 32.753159,102.226547 32.892551,100.506058 
   C33.386658,94.407249 33.465641,88.229347 34.561195,82.238548 
   C35.502525,77.091103 37.618469,72.158455 39.815544,66.820457 
   C40.349014,65.986542 40.886372,65.155098 41.415386,64.318367 
   C57.100327,39.509880 79.337463,27.378990 108.877098,29.930653 
   C138.073608,32.452675 161.708237,52.851067 169.057739,81.490738 
   C169.921082,84.855057 170.578293,88.272263 171.417786,92.055687 
   C172.259781,91.024307 172.680420,90.509056 173.514099,89.690239 
   C173.583435,89.367653 173.652771,89.045059 173.663895,88.749229 
M393.046204,106.500000 
   C393.046204,116.575661 393.046204,126.651321 393.046204,136.574951 
   C396.758026,136.574951 399.680267,136.574951 403.152649,136.574951 
   C403.152649,121.524910 403.152649,106.806152 403.152649,91.848282 
   C406.039398,91.848282 408.398956,92.111565 410.676392,91.791153 
   C414.867889,91.201424 417.165924,92.718323 419.106934,96.619148 
   C424.797760,108.056015 431.010132,119.233231 437.009796,130.516617 
   C440.863586,137.764359 441.596008,138.092651 450.379242,136.168716 
   C442.598633,121.527611 434.858582,106.962807 426.936371,92.055283 
   C428.995087,91.672127 430.443329,91.336922 431.910156,91.140083 
   C442.701324,89.691956 448.884155,83.669548 450.053528,72.720970 
   C450.558685,67.991447 450.420837,63.136169 450.038239,58.381207 
   C449.318909,49.440731 444.806580,43.720158 435.996307,42.050343 
   C429.211395,40.764397 422.143951,40.818333 415.192047,40.606094 
   C407.925995,40.384266 400.647919,40.556545 393.046112,40.556545 
   C393.046112,62.569660 393.046112,84.034828 393.046204,106.500000 
M374.812225,105.129539 
   C382.039246,82.971336 374.710724,61.318928 356.054749,48.668835 
   C339.562317,37.485809 321.159882,40.944923 303.060516,40.476452 
   C303.060516,72.930046 303.060516,104.650169 303.060516,136.914917 
   C311.244171,136.914917 319.187286,137.066711 327.122833,136.885941 
   C349.324036,136.380203 365.346741,126.333885 374.812225,105.129539 
M280.760162,55.770515 
   C268.948090,38.194233 246.911514,35.047314 229.039017,41.576862 
   C210.819046,48.233349 200.625229,62.311386 198.226837,81.142174 
   C195.655365,101.331779 201.667953,118.969574 219.223526,130.703339 
   C233.580917,140.299515 249.377014,141.980942 265.108612,134.115128 
   C280.313934,126.512451 286.132843,112.499908 288.897339,96.650650 
   C279.369598,95.281372 279.443787,95.305649 276.798035,103.388718 
   C275.771576,106.524666 274.543518,109.635651 273.033478,112.565353 
   C265.578247,127.029945 251.134766,133.126022 235.656723,128.183975 
   C217.606033,122.420509 209.043610,108.808365 207.320221,90.966385 
   C205.732742,74.531723 212.619827,61.423569 226.873016,52.804588 
   C242.350494,43.445293 262.586243,46.395115 271.636963,60.057999 
   C275.676758,66.156471 280.146362,65.893921 286.624908,65.294449 
   C284.546661,61.917400 282.842773,59.148708 280.760162,55.770515 
M316.409271,145.976059 
   C315.951385,146.160782 315.475891,146.311127 315.038300,146.535400 
   C308.804382,149.730118 305.887482,155.344910 307.482361,161.057083 
   C309.150421,167.031082 314.956329,171.117722 320.962555,170.545471 
   C326.891479,169.980576 331.510345,165.559418 332.194000,159.794800 
   C332.998535,153.010696 329.835785,148.315552 322.934753,145.936768 
   C321.982300,145.608459 321.128021,144.995361 319.977631,144.380020 
   C319.389618,144.686447 318.252563,145.278976 316.409271,145.976059 
M428.436401,170.104660 
   C436.160553,166.889923 439.431702,160.886337 437.129425,154.150085 
   C434.942444,147.751221 428.135651,144.225479 421.506470,146.057755 
   C415.258240,147.784714 411.611359,154.093811 412.915161,160.920700 
   C414.136353,167.315063 420.101196,171.076080 428.436401,170.104660 
M276.892761,149.378967 
   C278.303253,150.387833 279.713745,151.396683 281.124237,152.405548 
   C278.945496,146.162231 273.744873,144.197495 268.020203,146.446304 
   C262.021118,148.802902 259.127960,155.311920 261.030273,162.172180 
   C262.588226,167.790634 268.179962,171.249039 274.166626,170.296814 
   C279.846527,169.393387 283.137634,164.783569 282.658569,158.526306 
   C279.633240,158.526306 276.616486,158.526306 273.599731,158.526306 
   C273.577606,158.892273 273.555511,159.258224 273.533386,159.624191 
   C275.659607,159.901703 277.785828,160.179214 279.936890,160.459976 
   C278.293243,167.562225 273.112793,170.132431 267.756561,166.850815 
   C263.576294,164.289673 261.727203,158.174927 263.785583,153.719406 
   C266.063782,148.788055 270.396423,147.140427 276.892761,149.378967 
M299.914764,152.546906 
   C299.914764,155.440216 299.914764,158.333542 299.914764,161.226852 
   C299.606049,161.302658 299.297302,161.378448 298.988586,161.454239 
   C295.671234,156.521667 292.353912,151.589096 289.036560,146.656525 
   C288.394165,154.683640 287.573334,162.354111 288.584930,169.926376 
   C289.282806,169.936661 289.980713,169.946930 290.678589,169.957214 
   C290.678589,164.949417 290.678589,159.941605 290.678589,154.933807 
   C291.055878,154.907089 291.433167,154.880356 291.810455,154.853622 
   C295.066620,159.680786 298.322815,164.507935 301.578979,169.335098 
   C302.156647,161.379852 303.202301,153.708237 301.933411,146.143173 
   C301.368469,146.126587 300.803528,146.110001 300.238586,146.093414 
   C300.130585,147.936127 300.022583,149.778839 299.914764,152.546906 
M387.867554,165.360443 
   C392.742218,170.572525 397.988159,171.892242 402.820892,169.131989 
   C406.327057,167.129410 407.800781,164.159851 407.254944,160.192139 
   C405.869690,161.006500 405.416992,162.376724 404.528931,163.349533 
   C403.023438,164.998642 401.481323,167.040924 399.527649,167.763214 
   C395.751465,169.159317 391.218262,166.547394 389.311768,162.595688 
   C387.134918,158.083511 388.236298,152.881805 391.966492,150.057281 
   C395.675629,147.248703 399.795410,147.356537 403.340637,150.303909 
   C404.292664,151.095398 405.343536,151.767990 406.349060,152.495148 
   C406.781982,151.849243 407.214905,151.203339 407.647797,150.557434 
   C405.051666,148.987213 402.633575,146.767059 399.818542,145.995743 
   C395.348572,144.770996 391.209290,146.335510 388.366516,150.163925 
   C384.967133,154.742035 385.005768,159.690079 387.867554,165.360443 
M245.053787,162.351166 
   C249.535706,159.584732 251.838379,160.242569 253.642441,164.673721 
   C254.429108,166.605911 255.448257,168.443436 256.361816,170.323959 
   C256.981140,170.007980 257.600464,169.691986 258.219788,169.375992 
   C255.289658,161.871414 252.359528,154.366852 249.429398,146.862274 
   C249.035156,146.928879 248.640930,146.995483 248.246689,147.062088 
   C245.376511,154.507812 242.506332,161.953537 239.636154,169.399261 
   C240.287842,169.671509 240.939529,169.943771 241.591217,170.216019 
   C242.654099,167.851440 243.716995,165.486847 245.053787,162.351166 
M227.350220,156.888245 
   C225.533752,148.076355 219.717926,144.714539 209.220032,146.578201 
   C209.220032,154.221466 209.220032,161.903336 209.220032,169.539688 
   C220.841385,171.213409 226.124832,167.698410 227.350220,156.888245 
M443.198761,167.220551 
   C445.591919,170.586380 449.228973,171.541687 452.411926,169.738220 
   C454.575989,168.512039 456.413269,165.387192 456.898132,162.827545 
   C457.634583,158.939636 454.452698,157.031708 451.113953,155.829010 
   C450.331635,155.547195 449.233093,155.481781 448.834930,154.922089 
   C447.748932,153.395538 446.959412,151.658051 446.052460,150.004135 
   C448.061768,149.546249 450.069031,148.775253 452.081238,148.762177 
   C453.091980,148.755585 454.111725,150.127335 455.127380,150.875748 
   C454.459290,146.254227 451.523560,144.774750 448.032166,146.022858 
   C446.094238,146.715637 443.898193,148.955139 443.397308,150.903412 
   C442.491699,154.425903 445.264191,156.166504 448.375488,157.190598 
   C449.628845,157.603149 451.120575,158.012192 451.914368,158.931686 
   C453.112244,160.319290 454.681763,162.294479 454.448547,163.757843 
   C454.207367,165.271240 452.178406,167.228928 450.606842,167.593689 
   C449.069977,167.950424 446.994629,166.762604 445.405212,165.828308 
   C444.442291,165.262283 443.953461,163.889832 443.251617,162.879684 
   C442.884857,163.013107 442.518127,163.146530 442.151367,163.279953 
   C442.390839,164.369919 442.630341,165.459900 443.198761,167.220551 
M341.549377,148.807343 
   C344.319000,149.065765 347.088593,149.324173 349.649139,149.563095 
   C348.702942,146.426422 347.696381,145.248978 344.159454,145.972778 
   C341.959747,146.422958 338.913300,148.277969 338.445587,150.074799 
   C337.986877,151.836929 339.948761,154.655807 341.531647,156.385666 
   C342.763397,157.731796 345.383484,157.754196 346.759674,159.037277 
   C348.015259,160.207916 349.141937,162.348282 348.994781,163.938095 
   C348.869171,165.295044 347.014862,167.247437 345.632141,167.537064 
   C343.986450,167.881760 341.863281,167.024826 340.264435,166.124664 
   C339.249146,165.553085 338.811890,163.954834 338.115387,162.816971 
   C336.801636,166.608292 338.358276,168.880463 341.425995,169.946899 
   C345.092316,171.221497 348.437256,170.351944 350.675781,167.059036 
   C352.670441,164.124832 352.705933,160.869965 349.944305,158.468231 
   C348.143158,156.901825 345.673615,156.075272 343.450317,155.030533 
   C340.913422,153.838440 339.008850,152.473572 341.549377,148.807343 
M365.869385,157.524078 
   C365.869385,154.454697 365.869385,151.385315 365.869385,148.536514 
   C368.931427,148.120544 371.131592,147.821655 373.331726,147.522766 
   C373.265167,147.234726 373.198608,146.946671 373.132019,146.658630 
   C367.228943,146.658630 361.325867,146.658630 355.422760,146.658630 
   C355.428009,147.036774 355.433228,147.414932 355.438477,147.793076 
   C357.817017,147.983917 360.195587,148.174759 363.349854,148.427841 
   C363.349854,155.774200 363.349854,162.864105 363.349854,169.954025 
   C364.045532,169.973785 364.741180,169.993546 365.436859,170.013306 
   C365.580994,166.176010 365.725128,162.338715 365.869385,157.524078 
M380.636475,168.886276 
   C381.475067,153.741287 381.064056,148.254990 378.119690,145.378555 
   C378.119690,153.803329 378.105713,161.462967 378.205292,169.121140 
   C378.207642,169.301270 379.484772,169.464813 380.636475,168.886276 
M235.118576,155.549469 
   C235.118576,152.449219 235.118576,149.348984 235.118576,146.248734 
   C234.628250,146.277954 234.137909,146.307175 233.647583,146.336395 
   C233.647583,154.124466 233.647583,161.912537 233.647583,169.700607 
   C234.137939,169.702682 234.628311,169.704773 235.118668,169.706848 
   C235.118668,165.313217 235.118668,160.919571 235.118576,155.549469 
M134.682327,63.156898 
   C133.751816,62.053177 132.821304,60.949455 131.406754,59.271595 
   C130.988373,61.259258 130.597366,62.206890 130.633698,63.137840 
   C130.704514,64.951462 130.944214,66.770798 131.322891,68.543144 
   C131.365875,68.744377 133.314499,68.903427 133.415619,68.667992 
   C134.067810,67.149757 134.451859,65.516327 134.682327,63.156898 
M136.642746,64.474907 
   C136.865784,64.532455 137.088806,64.590012 137.311844,64.647560 
   C137.168549,64.506912 137.025253,64.366264 136.642746,64.474907 
z"/>
<path fill="#C09140" opacity="1.000000" stroke="none" 
   d="
M123.008713,84.231720 
   C123.792709,83.556068 124.576698,82.880417 125.689148,82.555298 
   C125.735573,85.281891 125.453529,87.657951 125.171494,90.034019 
   C124.441643,91.832642 123.711777,93.631264 122.827950,95.809303 
   C127.584854,97.416580 131.404709,95.656097 135.841446,93.953079 
   C136.697678,94.361435 136.934326,94.693069 137.170975,95.024712 
   C136.587692,95.880272 136.004395,96.735832 134.818283,97.817947 
   C132.462891,98.704033 130.710312,99.363548 128.957718,100.023056 
   C123.716278,100.040146 118.597206,100.375832 115.017120,105.884048 
   C114.234703,106.964310 113.672691,107.453026 113.110672,107.941742 
   C105.549484,112.084061 105.523643,112.644218 108.345642,120.193352 
   C117.477394,144.621704 146.061966,144.726669 160.616898,129.491669 
   C167.905075,121.862946 172.285080,112.641640 174.379578,101.671509 
   C174.696381,100.743294 174.754456,100.378777 174.812546,100.014252 
   C175.138367,97.926697 175.464172,95.839142 175.835480,93.082008 
   C175.727005,92.084244 175.573044,91.756058 175.419067,91.427872 
   C175.573090,90.852837 175.727097,90.277802 175.971466,89.168259 
   C176.689560,88.431190 177.317322,88.228615 177.945068,88.026047 
   C178.039871,88.461533 178.134689,88.897026 178.193604,90.054153 
   C178.456161,92.844284 178.754578,94.912781 179.053009,96.981277 
   C179.100891,99.378349 179.148773,101.775414 179.151428,105.016327 
   C179.098434,107.235580 179.090668,108.611000 179.082901,109.986412 
   C173.879440,137.315247 158.452042,156.513397 132.046738,165.181442 
   C106.118309,173.692932 80.846687,171.487000 58.086987,154.886154 
   C53.144524,151.281128 48.767292,146.901184 44.129726,142.878159 
   C44.658562,142.203156 45.187397,141.528152 45.716236,140.853149 
   C47.133072,141.486069 48.524536,142.185196 49.971401,142.739746 
   C54.721283,144.560257 59.374348,147.386749 64.274368,147.928116 
   C82.757751,149.970184 94.331596,138.384171 92.744186,119.868393 
   C92.278488,114.436417 90.951836,109.072418 89.917366,103.696976 
   C89.146736,99.692490 86.997147,96.850311 82.254860,95.614029 
   C78.186234,93.162285 74.631706,91.094666 70.956955,88.781387 
   C70.550819,88.316154 70.264900,88.096558 70.011826,87.572891 
   C70.364410,86.513458 70.684166,85.758095 71.320358,85.165619 
   C75.533501,87.942345 79.479454,90.405075 84.846741,89.937027 
   C83.819855,82.332771 82.852715,75.170921 81.938850,67.641457 
   C82.041733,66.536667 82.091347,65.799500 82.358597,65.018784 
   C82.576233,64.975235 82.988266,64.810059 83.326218,65.007553 
   C84.303780,67.473869 84.943405,69.742691 85.549805,71.893669 
   C88.275192,71.232269 90.802444,70.618958 93.162430,70.301620 
   C91.610191,72.037277 90.225220,73.476944 88.840248,74.916611 
   C88.107407,76.735992 86.298401,78.979332 86.820412,80.304344 
   C89.709023,87.636604 92.432182,95.213577 96.637505,101.796028 
   C100.675392,108.116386 102.784569,107.864410 109.975891,103.895920 
   C112.351372,101.721382 114.129288,99.850708 115.907211,97.980026 
   C117.630188,95.261124 119.353165,92.542213 121.307388,89.253159 
   C122.028656,87.199242 122.518684,85.715477 123.008713,84.231720 
z"/>
<path fill="#8D6C3F" opacity="1.000000" stroke="none" 
   d="
M393.046143,106.000000 
   C393.046112,84.034828 393.046112,62.569660 393.046112,40.556545 
   C400.647919,40.556545 407.925995,40.384266 415.192047,40.606094 
   C422.143951,40.818333 429.211395,40.764397 435.996307,42.050343 
   C444.806580,43.720158 449.318909,49.440731 450.038239,58.381207 
   C450.420837,63.136169 450.558685,67.991447 450.053528,72.720970 
   C448.884155,83.669548 442.701324,89.691956 431.910156,91.140083 
   C430.443329,91.336922 428.995087,91.672127 426.936371,92.055283 
   C434.858582,106.962807 442.598633,121.527611 450.379242,136.168716 
   C441.596008,138.092651 440.863586,137.764359 437.009796,130.516617 
   C431.010132,119.233231 424.797760,108.056015 419.106934,96.619148 
   C417.165924,92.718323 414.867889,91.201424 410.676392,91.791153 
   C408.398956,92.111565 406.039398,91.848282 403.152649,91.848282 
   C403.152649,106.806152 403.152649,121.524910 403.152649,136.574951 
   C399.680267,136.574951 396.758026,136.574951 393.046204,136.574951 
   C393.046204,126.651321 393.046204,116.575661 393.046143,106.000000 
M402.962830,68.496910 
   C402.962830,73.283066 402.962830,78.069221 402.962830,82.931984 
   C412.890350,82.931984 422.321167,83.179657 431.728424,82.816704 
   C435.801575,82.659554 438.746399,79.855316 439.967682,75.858269 
   C440.784943,73.183472 441.269684,70.386040 441.674225,67.610107 
   C442.919373,59.065762 438.536987,50.296387 431.413177,49.599609 
   C422.113800,48.690037 412.658264,49.376923 402.962799,49.376923 
   C402.962799,55.567673 402.962799,61.532730 402.962830,68.496910 
z"/>
<path fill="#8D6B3E" opacity="1.000000" stroke="none" 
   d="
M374.638062,105.477203 
   C365.346741,126.333885 349.324036,136.380203 327.122833,136.885941 
   C319.187286,137.066711 311.244171,136.914917 303.060516,136.914917 
   C303.060516,104.650169 303.060516,72.930046 303.060516,40.476452 
   C321.159882,40.944923 339.562317,37.485809 356.054749,48.668835 
   C374.710724,61.318928 382.039246,82.971336 374.638062,105.477203 
M364.105804,69.504845 
   C354.291046,50.725006 333.357178,46.658314 312.707214,50.261585 
   C312.707214,76.013260 312.707214,101.738731 312.707214,127.420662 
   C354.565277,131.545166 379.054230,104.222763 364.105804,69.504845 
z"/>
<path fill="#8D6C3E" opacity="1.000000" stroke="none" 
   d="
M280.949524,56.075268 
   C282.842773,59.148708 284.546661,61.917400 286.624908,65.294449 
   C280.146362,65.893921 275.676758,66.156471 271.636963,60.057999 
   C262.586243,46.395115 242.350494,43.445293 226.873016,52.804588 
   C212.619827,61.423569 205.732742,74.531723 207.320221,90.966385 
   C209.043610,108.808365 217.606033,122.420509 235.656723,128.183975 
   C251.134766,133.126022 265.578247,127.029945 273.033478,112.565353 
   C274.543518,109.635651 275.771576,106.524666 276.798035,103.388718 
   C279.443787,95.305649 279.369598,95.281372 288.897339,96.650650 
   C286.132843,112.499908 280.313934,126.512451 265.108612,134.115128 
   C249.377014,141.980942 233.580917,140.299515 219.223526,130.703339 
   C201.667953,118.969574 195.655365,101.331779 198.226837,81.142174 
   C200.625229,62.311386 210.819046,48.233349 229.039017,41.576862 
   C246.911514,35.047314 268.948090,38.194233 280.949524,56.075268 
z"/>
<path fill="#8D6E43" opacity="1.000000" stroke="none" 
   d="
M37.924610,65.875999 
   C46.568916,46.746510 61.229389,34.237953 80.914856,27.689352 
   C117.477890,15.526234 156.834503,33.653130 171.388214,69.165688 
   C172.572830,72.056221 173.149048,75.196098 174.041321,78.861404 
   C174.118073,79.666382 174.161484,79.830048 174.204910,79.993721 
   C174.170151,80.435150 174.135391,80.876587 174.085999,82.065384 
   C173.938019,84.770363 173.804657,86.727982 173.671295,88.685600 
   C173.671280,88.685600 173.663895,88.749229 173.469696,88.870209 
   C173.217346,89.325394 173.159195,89.659599 173.101074,89.993805 
   C172.680420,90.509056 172.259781,91.024307 171.417786,92.055687 
   C170.578293,88.272263 169.921082,84.855057 169.057739,81.490738 
   C161.708237,52.851067 138.073608,32.452675 108.877098,29.930653 
   C79.337463,27.378990 57.100327,39.509880 41.415386,64.318367 
   C40.886372,65.155098 40.349014,65.986542 39.242462,66.832397 
   C38.421120,66.521561 38.172867,66.198776 37.924610,65.875999 
z"/>
<path fill="#BE9856" opacity="1.000000" stroke="none" 
   d="
M316.762390,145.923798 
   C318.252563,145.278976 319.389618,144.686447 319.977631,144.380020 
   C321.128021,144.995361 321.982300,145.608459 322.934753,145.936768 
   C329.835785,148.315552 332.998535,153.010696 332.194000,159.794800 
   C331.510345,165.559418 326.891479,169.980576 320.962555,170.545471 
   C314.956329,171.117722 309.150421,167.031082 307.482361,161.057083 
   C305.887482,155.344910 308.804382,149.730118 315.038300,146.535400 
   C315.475891,146.311127 315.951385,146.160782 316.762390,145.923798 
M310.035645,155.968338 
   C309.985535,156.797256 309.848206,157.631607 309.899536,158.454193 
   C310.216339,163.533493 313.654175,167.353058 318.419891,167.978683 
   C323.076263,168.589951 327.791718,165.696472 329.441711,161.215500 
   C331.025574,156.914139 328.975220,151.782074 324.671692,149.276047 
   C319.326172,146.163254 313.460815,148.542831 310.035645,155.968338 
z"/>
<path fill="#BD9755" opacity="1.000000" stroke="none" 
   d="
M428.057373,170.166992 
   C420.101196,171.076080 414.136353,167.315063 412.915161,160.920700 
   C411.611359,154.093811 415.258240,147.784714 421.506470,146.057755 
   C428.135651,144.225479 434.942444,147.751221 437.129425,154.150085 
   C439.431702,160.886337 436.160553,166.889923 428.057373,170.166992 
M435.131683,157.582291 
   C434.188721,151.865433 430.952362,148.494965 426.000183,148.072388 
   C420.830719,147.631271 415.683044,151.777267 415.056274,156.886749 
   C414.416565,162.101685 418.385345,167.238708 423.616211,167.966415 
   C429.625610,168.802444 434.077789,165.107956 435.131683,157.582291 
z"/>
<path fill="#BE9856" opacity="1.000000" stroke="none" 
   d="
M276.555206,149.185364 
   C270.396423,147.140427 266.063782,148.788055 263.785583,153.719406 
   C261.727203,158.174927 263.576294,164.289673 267.756561,166.850815 
   C273.112793,170.132431 278.293243,167.562225 279.936890,160.459976 
   C277.785828,160.179214 275.659607,159.901703 273.533386,159.624191 
   C273.555511,159.258224 273.577606,158.892273 273.599731,158.526306 
   C276.616486,158.526306 279.633240,158.526306 282.658569,158.526306 
   C283.137634,164.783569 279.846527,169.393387 274.166626,170.296814 
   C268.179962,171.249039 262.588226,167.790634 261.030273,162.172180 
   C259.127960,155.311920 262.021118,148.802902 268.020203,146.446304 
   C273.744873,144.197495 278.945496,146.162231 281.124237,152.405548 
   C279.713745,151.396683 278.303253,150.387833 276.555206,149.185364 
z"/>
<path fill="#C19C5C" opacity="1.000000" stroke="none" 
   d="
M299.914673,152.084229 
   C300.022583,149.778839 300.130585,147.936127 300.238586,146.093414 
   C300.803528,146.110001 301.368469,146.126587 301.933411,146.143173 
   C303.202301,153.708237 302.156647,161.379852 301.578979,169.335098 
   C298.322815,164.507935 295.066620,159.680786 291.810455,154.853622 
   C291.433167,154.880356 291.055878,154.907089 290.678589,154.933807 
   C290.678589,159.941605 290.678589,164.949417 290.678589,169.957214 
   C289.980713,169.946930 289.282806,169.936661 288.584930,169.926376 
   C287.573334,162.354111 288.394165,154.683640 289.036560,146.656525 
   C292.353912,151.589096 295.671234,156.521667 298.988586,161.454239 
   C299.297302,161.378448 299.606049,161.302658 299.914764,161.226852 
   C299.914764,158.333542 299.914764,155.440216 299.914673,152.084229 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M81.885582,68.009071 
   C82.852715,75.170921 83.819855,82.332771 84.846741,89.937027 
   C79.479454,90.405075 75.533501,87.942345 71.152008,84.859711 
   C69.036682,82.274521 67.406151,80.158134 66.089066,78.335114 
   C70.743141,79.584206 70.182617,76.554771 70.181862,73.980484 
   C70.914055,73.994301 71.646240,74.008118 72.670364,74.421341 
   C73.251122,77.942719 73.303970,81.118942 74.000343,84.147194 
   C74.167282,84.873169 76.492119,85.487152 77.790565,85.426468 
   C78.586067,85.389290 80.120506,83.659714 79.950790,83.220818 
   C78.489273,79.441277 76.715027,75.782661 75.034088,72.087967 
   C75.033302,71.588943 75.032516,71.089920 75.434372,70.285851 
   C77.596954,69.322876 79.356903,68.664948 81.309044,68.004150 
   C81.501236,68.001274 81.885582,68.009071 81.885582,68.009071 
z"/>
<path fill="#BD9755" opacity="1.000000" stroke="none" 
   d="
M387.637512,165.041931 
   C385.005768,159.690079 384.967133,154.742035 388.366516,150.163925 
   C391.209290,146.335510 395.348572,144.770996 399.818542,145.995743 
   C402.633575,146.767059 405.051666,148.987213 407.647797,150.557434 
   C407.214905,151.203339 406.781982,151.849243 406.349060,152.495148 
   C405.343536,151.767990 404.292664,151.095398 403.340637,150.303909 
   C399.795410,147.356537 395.675629,147.248703 391.966492,150.057281 
   C388.236298,152.881805 387.134918,158.083511 389.311768,162.595688 
   C391.218262,166.547394 395.751465,169.159317 399.527649,167.763214 
   C401.481323,167.040924 403.023438,164.998642 404.528931,163.349533 
   C405.416992,162.376724 405.869690,161.006500 407.254944,160.192139 
   C407.800781,164.159851 406.327057,167.129410 402.820892,169.131989 
   C397.988159,171.892242 392.742218,170.572525 387.637512,165.041931 
z"/>
<path fill="#BE9A5A" opacity="1.000000" stroke="none" 
   d="
M244.916840,162.736725 
   C243.716995,165.486847 242.654099,167.851440 241.591217,170.216019 
   C240.939529,169.943771 240.287842,169.671509 239.636154,169.399261 
   C242.506332,161.953537 245.376511,154.507812 248.246689,147.062088 
   C248.640930,146.995483 249.035156,146.928879 249.429398,146.862274 
   C252.359528,154.366852 255.289658,161.871414 258.219788,169.375992 
   C257.600464,169.691986 256.981140,170.007980 256.361816,170.323959 
   C255.448257,168.443436 254.429108,166.605911 253.642441,164.673721 
   C251.838379,160.242569 249.535706,159.584732 244.916840,162.736725 
z"/>
<path fill="#BD9652" opacity="1.000000" stroke="none" 
   d="
M227.420761,157.258362 
   C226.124832,167.698410 220.841385,171.213409 209.220032,169.539688 
   C209.220032,161.903336 209.220032,154.221466 209.220032,146.578201 
   C219.717926,144.714539 225.533752,148.076355 227.420761,157.258362 
M224.744095,160.749496 
   C225.427109,152.592331 221.842667,148.058975 214.602402,148.322601 
   C213.437424,148.365021 211.389999,149.820679 211.341995,150.709061 
   C211.040451,156.288208 211.189453,161.891724 211.189453,167.398041 
   C218.314285,168.310959 221.393097,166.858521 224.744095,160.749496 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M82.988266,64.810059 
   C82.988266,64.810059 82.576233,64.975235 82.101746,64.994469 
   C81.456200,65.006927 81.285133,65.000153 80.972473,64.675926 
   C78.963699,60.785717 76.056572,58.876751 71.985611,58.829800 
   C72.950989,58.117870 73.916374,57.405941 75.229172,56.565517 
   C77.112892,56.603462 78.649185,56.769897 80.185478,56.936333 
   C80.137070,55.432404 80.516617,53.725525 79.925484,52.478958 
   C79.273582,51.104271 77.730797,50.152054 76.576073,49.015812 
   C76.648865,48.710831 76.721649,48.405853 77.230835,47.680573 
   C80.337975,48.964336 81.379318,47.589729 81.812637,45.066299 
   C82.660461,45.035187 83.508286,45.004078 85.137573,44.968155 
   C86.835197,44.782940 87.751358,44.602531 88.667526,44.422123 
   C88.947815,44.828388 89.228096,45.234657 89.582787,46.104523 
   C88.259819,48.704914 86.862457,50.841709 85.465088,52.978508 
   C86.957390,53.602970 88.449692,54.227436 89.941994,54.851898 
   C89.982491,55.156910 90.022987,55.461926 89.874634,56.383125 
   C88.303726,58.410278 86.921677,59.821239 85.156555,61.202850 
   C84.178406,62.385685 83.583336,63.597870 82.988266,64.810059 
z"/>
<path fill="#8C6D40" opacity="1.000000" stroke="none" 
   d="
M113.077591,108.360825 
   C113.672691,107.453026 114.234703,106.964310 114.893906,106.205231 
   C117.624298,105.953018 120.268379,105.825882 122.888275,106.021858 
   C127.314278,106.352936 129.816559,108.996521 131.094315,112.549995 
   C127.820778,113.513084 124.935173,114.268082 122.112656,115.211769 
   C116.030540,117.245285 113.041557,115.159996 113.077591,108.360825 
z"/>
<path fill="#BE9A5A" opacity="1.000000" stroke="none" 
   d="
M443.034302,166.885208 
   C442.630341,165.459900 442.390839,164.369919 442.151367,163.279953 
   C442.518127,163.146530 442.884857,163.013107 443.251617,162.879684 
   C443.953461,163.889832 444.442291,165.262283 445.405212,165.828308 
   C446.994629,166.762604 449.069977,167.950424 450.606842,167.593689 
   C452.178406,167.228928 454.207367,165.271240 454.448547,163.757843 
   C454.681763,162.294479 453.112244,160.319290 451.914368,158.931686 
   C451.120575,158.012192 449.628845,157.603149 448.375488,157.190598 
   C445.264191,156.166504 442.491699,154.425903 443.397308,150.903412 
   C443.898193,148.955139 446.094238,146.715637 448.032166,146.022858 
   C451.523560,144.774750 454.459290,146.254227 455.127380,150.875748 
   C454.111725,150.127335 453.091980,148.755585 452.081238,148.762177 
   C450.069031,148.775253 448.061768,149.546249 446.052429,150.004150 
   C446.959412,151.658051 447.748932,153.395538 448.834930,154.922089 
   C449.233093,155.481781 450.331635,155.547195 451.113953,155.829010 
   C454.452698,157.031708 457.634583,158.939636 456.898132,162.827545 
   C456.413269,165.387192 454.575989,168.512039 452.411926,169.738220 
   C449.228973,171.541687 445.591919,170.586380 443.034302,166.885208 
z"/>
<path fill="#8D6D41" opacity="1.000000" stroke="none" 
   d="
M109.969398,101.262390 
   C104.090828,101.041283 102.367104,98.815926 103.628036,93.044022 
   C104.049469,91.114899 104.635216,89.212395 104.909065,87.264435 
   C105.034782,86.370102 104.588928,85.395409 104.404114,84.466400 
   C110.165245,84.236084 112.730850,87.327980 113.427246,96.366196 
   C112.100433,98.419640 111.034920,99.841011 109.969398,101.262390 
z"/>
<path fill="#8C6D40" opacity="1.000000" stroke="none" 
   d="
M81.932961,98.139893 
   C81.959084,104.210785 79.215866,106.279022 73.221062,104.650581 
   C71.639587,104.220985 70.131767,103.432610 68.531921,103.184883 
   C67.160286,102.972488 65.705460,103.297310 62.804432,103.475800 
   C65.229660,100.623657 66.938728,98.613747 69.238617,96.301605 
   C74.341881,94.010384 78.409782,94.535072 81.932961,98.139893 
z"/>
<path fill="#BD9857" opacity="1.000000" stroke="none" 
   d="
M341.285919,149.090332 
   C339.008850,152.473572 340.913422,153.838440 343.450317,155.030533 
   C345.673615,156.075272 348.143158,156.901825 349.944305,158.468231 
   C352.705933,160.869965 352.670441,164.124832 350.675781,167.059036 
   C348.437256,170.351944 345.092316,171.221497 341.425995,169.946899 
   C338.358276,168.880463 336.801636,166.608292 338.115387,162.816971 
   C338.811890,163.954834 339.249146,165.553085 340.264435,166.124664 
   C341.863281,167.024826 343.986450,167.881760 345.632141,167.537064 
   C347.014862,167.247437 348.869171,165.295044 348.994781,163.938095 
   C349.141937,162.348282 348.015259,160.207916 346.759674,159.037277 
   C345.383484,157.754196 342.763397,157.731796 341.531647,156.385666 
   C339.948761,154.655807 337.986877,151.836929 338.445587,150.074799 
   C338.913300,148.277969 341.959747,146.422958 344.159454,145.972778 
   C347.696381,145.248978 348.702942,146.426422 349.649139,149.563095 
   C347.088593,149.324173 344.319000,149.065765 341.285919,149.090332 
z"/>
<path fill="#BE9D66" opacity="1.000000" stroke="none" 
   d="
M365.869324,158.012756 
   C365.725128,162.338715 365.580994,166.176010 365.436859,170.013306 
   C364.741180,169.993546 364.045532,169.973785 363.349854,169.954025 
   C363.349854,162.864105 363.349854,155.774200 363.349854,148.427841 
   C360.195587,148.174759 357.817017,147.983917 355.438477,147.793076 
   C355.433228,147.414932 355.428009,147.036774 355.422760,146.658630 
   C361.325867,146.658630 367.228943,146.658630 373.132019,146.658630 
   C373.198608,146.946671 373.265167,147.234726 373.331726,147.522766 
   C371.131592,147.821655 368.931427,148.120544 365.869385,148.536514 
   C365.869385,151.385315 365.869385,154.454697 365.869324,158.012756 
z"/>
<path fill="#957D5C" opacity="1.000000" stroke="none" 
   d="
M37.642204,66.091988 
   C38.172867,66.198776 38.421120,66.521561 38.942192,66.987579 
   C37.618469,72.158455 35.502525,77.091103 34.561195,82.238548 
   C33.465641,88.229347 33.386658,94.407249 32.892551,100.506058 
   C32.753159,102.226547 32.705013,103.954414 32.073997,105.623474 
   C29.687216,91.974457 31.636734,78.888580 37.642204,66.091988 
z"/>
<path fill="#8D6F44" opacity="1.000000" stroke="none" 
   d="
M122.695618,84.008835 
   C122.518684,85.715477 122.028656,87.199242 121.268768,88.888519 
   C116.174797,90.639420 113.523460,88.626961 114.295753,83.922394 
   C114.738609,81.224655 115.365234,78.557083 115.929031,75.777809 
   C120.894554,75.761696 121.538506,79.860107 122.695618,84.008835 
z"/>
<path fill="#8E7048" opacity="1.000000" stroke="none" 
   d="
M69.978981,87.876968 
   C70.264900,88.096558 70.550819,88.316154 70.891052,89.138474 
   C70.276115,91.411064 69.606865,93.080917 68.937622,94.750778 
   C65.023537,94.403305 61.109444,94.055840 57.195358,93.708366 
   C56.863194,93.280373 56.531029,92.852386 56.198864,92.424400 
   C57.988857,90.786865 59.626968,88.920761 61.623505,87.594063 
   C62.903912,86.743233 64.712654,86.687500 66.779457,86.364891 
   C68.175888,86.928604 69.077438,87.402786 69.978981,87.876968 
z"/>
<path fill="#8F7046" opacity="1.000000" stroke="none" 
   d="
M101.021431,70.834511 
   C102.789688,71.833328 104.557945,72.832138 106.326210,73.830948 
   C101.253654,75.259811 98.236877,83.332069 92.035019,76.983871 
   C93.181053,71.393898 97.044945,71.021088 101.021431,70.834511 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M83.326218,65.007553 
   C83.583336,63.597870 84.178406,62.385685 85.026276,61.588264 
   C85.094688,66.241608 87.258133,68.370201 90.365868,66.919006 
   C91.501427,66.388741 92.478806,65.519714 93.663696,64.974800 
   C93.990509,65.125687 94.181984,65.107018 94.373459,65.088341 
   C94.163307,64.913345 93.953148,64.738358 93.510818,64.237167 
   C94.202553,61.942402 95.126472,59.973827 96.050400,58.005249 
   C96.788345,58.005550 97.526306,58.005856 98.626419,58.361450 
   C98.703003,60.623203 98.417427,62.529675 98.154510,64.590057 
   C98.177155,64.743973 97.997574,64.998062 97.731110,65.188156 
   C96.086327,66.920708 94.708008,68.463173 93.329697,70.005638 
   C90.802444,70.618958 88.275192,71.232269 85.549805,71.893669 
   C84.943405,69.742691 84.303780,67.473869 83.326218,65.007553 
z"/>
<path fill="#8D6F44" opacity="1.000000" stroke="none" 
   d="
M128.959717,100.442444 
   C130.710312,99.363548 132.462891,98.704033 134.565887,98.002876 
   C137.653412,100.074875 140.390518,102.188507 144.021164,104.992165 
   C128.971634,107.540657 128.971634,107.540657 128.959717,100.442444 
z"/>
<path fill="#8F7046" opacity="1.000000" stroke="none" 
   d="
M136.928406,80.143311 
   C137.872177,84.472847 135.708160,87.931450 133.199539,90.905861 
   C132.540771,91.686958 129.657425,90.591850 127.533363,89.733009 
   C128.273102,82.906166 130.214935,81.103668 136.928406,80.143311 
z"/>
<path fill="#8D6F44" opacity="1.000000" stroke="none" 
   d="
M71.632980,58.911507 
   C76.056572,58.876751 78.963699,60.785717 80.919083,65.050720 
   C81.043800,66.497658 81.080330,67.252335 81.116852,68.007019 
   C79.356903,68.664948 77.596954,69.322876 75.449677,69.911865 
   C73.409004,66.476074 71.749924,63.111935 70.154541,59.717850 
   C70.129456,59.664482 70.887665,59.242939 71.632980,58.911507 
z"/>
<path fill="#8C6D40" opacity="1.000000" stroke="none" 
   d="
M93.528351,64.805237 
   C92.478806,65.519714 91.501427,66.388741 90.365868,66.919006 
   C87.258133,68.370201 85.094688,66.241608 85.409348,61.617619 
   C86.921677,59.821239 88.303726,58.410278 89.934799,56.840721 
   C92.142799,56.853508 94.101776,57.024887 96.055580,57.600761 
   C95.126472,59.973827 94.202553,61.942402 93.465271,64.304840 
   C93.651909,64.698700 93.528351,64.805237 93.528351,64.805237 
z"/>
<path fill="#8D6E43" opacity="1.000000" stroke="none" 
   d="
M74.922119,72.346634 
   C76.715027,75.782661 78.489273,79.441277 79.950790,83.220818 
   C80.120506,83.659714 78.586067,85.389290 77.790565,85.426468 
   C76.492119,85.487152 74.167282,84.873169 74.000343,84.147194 
   C73.303970,81.118942 73.251122,77.942719 73.036362,74.432091 
   C73.677010,73.564056 74.243584,73.084679 74.922119,72.346634 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M136.960785,79.868927 
   C130.214935,81.103668 128.273102,82.906166 127.294205,89.476135 
   C126.841019,89.894333 126.364685,89.944061 125.529922,90.013908 
   C125.453529,87.657951 125.735573,85.281891 125.997650,82.494858 
   C126.615448,80.513618 127.253212,78.943336 128.038147,76.732941 
   C128.530945,75.382675 128.876556,74.672531 129.222183,73.962387 
   C131.071487,73.148285 132.920792,72.334183 134.722382,72.122253 
   C134.149445,74.471718 133.624237,76.219025 133.099014,77.966324 
   C134.404129,78.325005 135.709244,78.683685 137.014359,79.042366 
   C137.007294,79.226425 137.000214,79.410477 136.960785,79.868927 
z"/>
<path fill="#C4A167" opacity="1.000000" stroke="none" 
   d="
M380.401917,169.261185 
   C379.484772,169.464813 378.207642,169.301270 378.205292,169.121140 
   C378.105713,161.462967 378.119690,153.803329 378.119690,145.378555 
   C381.064056,148.254990 381.475067,153.741287 380.401917,169.261185 
z"/>
<path fill="#F7F1E2" opacity="1.000000" stroke="none" 
   d="
M137.508484,95.022934 
   C136.934326,94.693069 136.697678,94.361435 136.211365,93.843750 
   C138.867676,90.845238 141.773666,88.032776 145.262268,84.940941 
   C146.847336,84.026085 147.849777,83.390610 148.852219,82.755135 
   C150.513351,83.553864 152.174484,84.352592 153.542267,85.557777 
   C151.711502,86.649979 150.174103,87.335732 148.636703,88.021469 
   C147.167374,88.396103 145.698044,88.770737 142.846710,89.497734 
   C145.034424,90.592491 145.808289,90.979736 146.412415,91.638603 
   C144.118973,92.942841 141.995270,93.975464 139.871567,95.008080 
   C139.196381,95.012436 138.521179,95.016800 137.508484,95.022934 
z"/>
<path fill="#8F734C" opacity="1.000000" stroke="none" 
   d="
M64.046173,83.005989 
   C60.452396,84.325752 56.858616,85.645508 53.264839,86.965271 
   C52.823257,86.348022 52.381676,85.730774 51.940094,85.113525 
   C53.053082,83.441116 54.166073,81.768700 56.024261,80.039871 
   C58.228073,79.661896 59.686680,79.340340 61.427586,79.160980 
   C62.488647,80.537445 63.267410,81.771721 64.046173,83.005989 
z"/>
<path fill="#93774F" opacity="1.000000" stroke="none" 
   d="
M129.112793,73.600060 
   C128.876556,74.672531 128.530945,75.382675 128.047195,76.361038 
   C126.450325,76.705811 124.991592,76.782364 122.590271,76.908386 
   C122.783409,73.181137 122.961601,69.742378 123.143829,66.225845 
   C127.840042,66.518631 127.726639,70.441521 129.112793,73.600060 
z"/>
<path fill="#8E7048" opacity="1.000000" stroke="none" 
   d="
M76.382050,48.963924 
   C77.730797,50.152054 79.273582,51.104271 79.925484,52.478958 
   C80.516617,53.725525 80.137070,55.432404 80.185478,56.936333 
   C78.649185,56.769897 77.112892,56.603462 75.276886,56.251320 
   C74.171852,53.806492 73.366524,51.547375 73.131683,49.127487 
   C74.323242,48.783508 74.944313,48.600307 75.565376,48.417103 
   C75.718414,48.650642 75.925964,48.815620 76.382050,48.963924 
z"/>
<path fill="#8E7048" opacity="1.000000" stroke="none" 
   d="
M139.922516,95.391144 
   C141.995270,93.975464 144.118973,92.942841 146.632202,91.853279 
   C148.262131,92.516556 149.502502,93.236771 150.916489,94.057785 
   C141.763779,100.259651 141.763779,100.259651 139.922516,95.391144 
z"/>
<path fill="#8E7048" opacity="1.000000" stroke="none" 
   d="
M90.099548,54.539944 
   C88.449692,54.227436 86.957390,53.602970 85.465088,52.978508 
   C86.862457,50.841709 88.259819,48.704914 89.889832,46.315090 
   C91.236404,46.155697 92.350327,46.249332 93.849663,46.375362 
   C92.544670,49.227802 91.400887,51.727894 90.099548,54.539944 
z"/>
<path fill="#8D6F44" opacity="1.000000" stroke="none" 
   d="
M97.997574,64.998062 
   C97.997574,64.998062 98.177155,64.743973 98.460098,64.344193 
   C101.480225,63.327362 104.217392,62.710308 106.954567,62.093254 
   C107.565742,62.810650 108.176918,63.528046 108.763344,64.216393 
   C106.940430,65.450378 105.252762,66.592819 102.892181,67.900528 
   C100.812042,67.043221 99.404808,66.020638 97.997574,64.998062 
z"/>
<path fill="#BA904B" opacity="1.000000" stroke="none" 
   d="
M235.118622,156.037704 
   C235.118668,160.919571 235.118668,165.313217 235.118668,169.706848 
   C234.628311,169.704773 234.137939,169.702682 233.647583,169.700607 
   C233.647583,161.912537 233.647583,154.124466 233.647583,146.336395 
   C234.137909,146.307175 234.628250,146.277954 235.118576,146.248734 
   C235.118576,149.348984 235.118576,152.449219 235.118622,156.037704 
z"/>
<path fill="#8C6D40" opacity="1.000000" stroke="none" 
   d="
M70.038574,73.665047 
   C70.182617,76.554771 70.743141,79.584206 66.061951,78.305573 
   C65.721382,77.982658 65.560349,77.998589 65.315308,77.685738 
   C64.729019,75.585075 64.387787,73.797256 64.046555,72.009445 
   C65.037247,70.781662 66.027946,69.553879 67.235008,68.057953 
   C68.251839,70.080566 69.073563,71.715088 70.038574,73.665047 
z"/>
<path fill="#8C6D40" opacity="1.000000" stroke="none" 
   d="
M137.207764,78.769684 
   C135.709244,78.683685 134.404129,78.325005 133.099014,77.966324 
   C133.624237,76.219025 134.149445,74.471718 134.843597,72.392059 
   C136.113174,71.705063 137.213837,71.350426 138.952972,71.007889 
   C139.996674,71.038918 140.401901,71.057861 140.807129,71.076797 
   C140.991226,71.556175 141.175323,72.035561 141.000137,72.901367 
   C140.356232,73.443520 140.244186,73.680763 140.304703,73.999519 
   C139.336868,75.498672 138.369019,76.997833 137.207764,78.769684 
z"/>
<path fill="#F6F1E5" opacity="1.000000" stroke="none" 
   d="
M97.731110,65.188156 
   C99.404808,66.020638 100.812042,67.043221 102.605782,68.091003 
   C102.357552,68.827591 101.722816,69.538971 101.054764,70.542435 
   C97.044945,71.021088 93.181053,71.393898 91.953552,76.624298 
   C91.071754,76.327736 90.274040,75.673096 89.158279,74.967537 
   C90.225220,73.476944 91.610191,72.037277 93.162422,70.301620 
   C94.708008,68.463173 96.086327,66.920708 97.731110,65.188156 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M68.955704,95.074364 
   C69.606865,93.080917 70.276115,91.411064 71.011276,89.384125 
   C74.631706,91.094666 78.186234,93.162285 81.887848,95.537926 
   C82.014664,96.355873 81.994385,96.865807 81.953537,97.757812 
   C78.409782,94.535072 74.341881,94.010384 69.424538,96.021950 
   C69.004356,95.829002 68.989067,95.613480 68.955704,95.074364 
z"/>
<path fill="#BE9A5A" opacity="1.000000" stroke="none" 
   d="
M65.560349,77.998589 
   C65.560349,77.998589 65.721382,77.982658 65.748497,78.012199 
   C67.406151,80.158134 69.036682,82.274521 70.835571,84.696823 
   C70.684166,85.758095 70.364410,86.513458 70.011826,87.572891 
   C69.077438,87.402786 68.175888,86.928604 67.119499,86.188812 
   C66.195992,84.978539 65.427330,84.033882 64.352417,83.047607 
   C63.267410,81.771721 62.488647,80.537445 61.294804,78.848419 
   C61.294456,77.976936 61.738945,77.183739 62.118382,77.213715 
   C63.279129,77.305443 64.414879,77.713554 65.560349,77.998589 
z"/>
<path fill="#F6F1E5" opacity="1.000000" stroke="none" 
   d="
M106.962677,61.691078 
   C104.217392,62.710308 101.480225,63.327362 98.437454,64.190277 
   C98.417427,62.529675 98.703003,60.623203 98.995255,58.374184 
   C99.926147,57.081837 100.850357,56.132042 102.021622,55.594559 
   C101.138367,61.333454 104.807510,58.851517 106.936241,58.875763 
   C106.947762,59.680141 106.959282,60.484520 106.962677,61.691078 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M65.315308,77.685738 
   C64.414879,77.713554 63.279129,77.305443 62.118382,77.213715 
   C61.738945,77.183739 61.294456,77.976936 61.012505,78.706223 
   C59.686680,79.340340 58.228073,79.661896 56.372692,79.940681 
   C55.726120,79.465897 55.476322,79.033882 55.382507,78.221893 
   C56.009182,77.194054 56.479877,76.546196 56.950577,75.898346 
   C57.427216,76.103889 57.903854,76.309433 58.380493,76.514977 
   C58.330399,75.827454 58.280300,75.139938 58.495335,74.152817 
   C59.931423,73.229988 61.102383,72.606766 62.273342,71.983536 
   C62.667377,71.988411 63.061413,71.993286 63.750999,72.003799 
   C64.387787,73.797256 64.729019,75.585075 65.315308,77.685738 
z"/>
<path fill="#8F734C" opacity="1.000000" stroke="none" 
   d="
M134.803101,63.538795 
   C134.451859,65.516327 134.067810,67.149757 133.415619,68.667992 
   C133.314499,68.903427 131.365875,68.744377 131.322891,68.543144 
   C130.944214,66.770798 130.704514,64.951462 130.633698,63.137840 
   C130.597366,62.206890 130.988373,61.259258 131.406754,59.271595 
   C132.821304,60.949455 133.751816,62.053177 134.803101,63.538795 
z"/>
<path fill="#8A6E46" opacity="1.000000" stroke="none" 
   d="
M56.930374,75.547241 
   C56.479877,76.546196 56.009182,77.194054 55.264992,78.000633 
   C52.794819,78.159355 50.598141,78.159355 47.926380,78.159355 
   C51.352478,72.904060 53.235321,72.413109 56.930374,75.547241 
z"/>
<path fill="#8F734C" opacity="1.000000" stroke="none" 
   d="
M62.230072,71.651718 
   C61.102383,72.606766 59.931423,73.229988 58.412544,73.858917 
   C57.550087,70.706299 56.203365,67.323845 60.443668,65.303986 
   C60.837612,66.416733 61.207466,67.461426 61.823090,69.008469 
   C62.128338,69.669258 62.187809,69.827705 62.247280,69.986153 
   C62.227119,70.430733 62.206963,70.875313 62.230072,71.651718 
z"/>
<path fill="#8F734C" opacity="1.000000" stroke="none" 
   d="
M81.582634,44.823971 
   C81.379318,47.589729 80.337975,48.964336 77.323692,47.219509 
   C76.320465,45.474152 75.660782,43.769550 75.001099,42.064945 
   C75.339523,41.691605 75.677956,41.318264 76.016388,40.944920 
   C77.795135,42.157162 79.573883,43.369400 81.582634,44.823971 
z"/>
<path fill="#93774F" opacity="1.000000" stroke="none" 
   d="
M148.902313,82.434875 
   C147.849777,83.390610 146.847336,84.026085 145.569901,84.771713 
   C141.166046,80.824844 146.292587,79.493248 148.544113,76.910614 
   C148.680222,78.645279 148.816315,80.379944 148.902313,82.434875 
z"/>
<path fill="#8A6E46" opacity="1.000000" stroke="none" 
   d="
M106.976768,58.538872 
   C104.807510,58.851517 101.138367,61.333454 102.425262,55.683609 
   C104.747307,54.891247 106.912766,54.422157 109.078224,53.953068 
   C109.200554,54.351978 109.322884,54.750889 109.445213,55.149799 
   C108.635902,56.167191 107.826599,57.184586 106.976768,58.538872 
z"/>
<path fill="#8E7048" opacity="1.000000" stroke="none" 
   d="
M139.986954,69.061493 
   C138.129623,64.460663 139.540649,62.952175 146.273315,63.299816 
   C144.739487,65.201836 143.499802,66.739067 141.769699,68.605469 
   C140.848495,68.976921 140.417725,69.019203 139.986954,69.061493 
z"/>
<path fill="#8A6E46" opacity="1.000000" stroke="none" 
   d="
M88.830231,44.140793 
   C87.751358,44.602531 86.835197,44.782940 85.561234,44.946785 
   C84.814117,39.726353 85.753555,38.814278 91.401627,39.184093 
   C90.569542,40.799198 89.781235,42.329330 88.830231,44.140793 
z"/>
<path fill="#8A6E46" opacity="1.000000" stroke="none" 
   d="
M148.692078,88.385635 
   C150.174103,87.335732 151.711502,86.649979 153.631958,85.909935 
   C154.925980,86.531281 155.836929,87.206924 157.722290,88.605263 
   C154.007874,88.416603 151.810196,93.469559 148.692078,88.385635 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M174.202850,88.817039 
   C173.804657,86.727982 173.938019,84.770363 174.151001,82.392609 
   C178.169403,81.958817 178.446579,84.690720 178.204285,87.821899 
   C177.317322,88.228615 176.689560,88.431190 175.940689,88.864983 
   C175.457855,89.046967 175.096130,88.997719 174.202850,88.817039 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M109.971802,101.574860 
   C111.034920,99.841011 112.100433,98.419640 113.382187,96.731972 
   C114.127434,96.938805 114.656441,97.411926 115.546326,97.932541 
   C114.129288,99.850708 112.351372,101.721382 110.261650,103.675499 
   C109.957962,103.135071 109.966087,102.511192 109.971802,101.574860 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M179.325714,96.726387 
   C178.754578,94.912781 178.456161,92.844284 178.296799,90.372093 
   C178.823395,92.136101 179.210907,94.303802 179.325714,96.726387 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M179.329941,109.756683 
   C179.090668,108.611000 179.098434,107.235580 179.213257,105.461105 
   C179.405884,106.550354 179.491440,108.038651 179.329941,109.756683 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M139.891327,69.300339 
   C140.417725,69.019203 140.848495,68.976921 141.601624,68.895470 
   C141.737732,69.475494 141.551498,70.094681 141.086182,70.895332 
   C140.401901,71.057861 139.996674,71.038918 139.297363,70.941200 
   C139.267426,70.421341 139.531555,69.980270 139.891327,69.300339 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M75.229477,48.304329 
   C74.944313,48.600307 74.323242,48.783508 73.360481,48.921333 
   C73.643715,48.647823 74.268646,48.419689 75.229477,48.304329 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M136.762360,64.350266 
   C137.025253,64.366264 137.168549,64.506912 137.311844,64.647560 
   C137.088806,64.590012 136.865784,64.532455 136.762360,64.350266 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M174.609009,100.204308 
   C174.754456,100.378777 174.696381,100.743294 174.414627,101.288757 
   C174.262466,101.111259 174.333969,100.752808 174.609009,100.204308 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M175.338577,91.700317 
   C175.573044,91.756058 175.727005,92.084244 175.803619,92.690170 
   C175.570221,92.636200 175.414154,92.304482 175.338577,91.700317 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M173.307587,89.842026 
   C173.159195,89.659599 173.217346,89.325394 173.498795,88.856827 
   C173.652771,89.045059 173.583435,89.367653 173.307587,89.842026 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M174.343689,79.895554 
   C174.161484,79.830048 174.118073,79.666382 174.125763,79.253883 
   C174.278717,79.269173 174.380585,79.533279 174.343689,79.895554 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M140.474258,73.919083 
   C140.244186,73.680763 140.356232,73.443520 140.847977,73.255554 
   C140.988556,73.475594 140.851456,73.680702 140.474258,73.919083 
z"/>
<path fill="#F8F4EA" opacity="1.000000" stroke="none" 
   d="
M62.377384,69.871101 
   C62.187809,69.827705 62.128338,69.669258 62.065025,69.257004 
   C62.209957,69.254143 62.358723,69.505096 62.377384,69.871101 
z"/>
<path fill="#F5EEDE" opacity="1.000000" stroke="none" 
   d="
M81.309044,68.004150 
   C81.080330,67.252335 81.043800,66.497658 81.060677,65.368179 
   C81.285133,65.000153 81.456200,65.006927 81.884109,65.038010 
   C82.091347,65.799500 82.041733,66.536667 81.938850,67.641457 
   C81.885582,68.009071 81.501236,68.001274 81.309044,68.004150 
z"/>
<path fill="#FDFDFB" opacity="1.000000" stroke="none" 
   d="
M402.962830,67.997345 
   C402.962799,61.532730 402.962799,55.567673 402.962799,49.376923 
   C412.658264,49.376923 422.113800,48.690037 431.413177,49.599609 
   C438.536987,50.296387 442.919373,59.065762 441.674225,67.610107 
   C441.269684,70.386040 440.784943,73.183472 439.967682,75.858269 
   C438.746399,79.855316 435.801575,82.659554 431.728424,82.816704 
   C422.321167,83.179657 412.890350,82.931984 402.962830,82.931984 
   C402.962830,78.069221 402.962830,73.283066 402.962830,67.997345 
z"/>
<path fill="#FCFCFB" opacity="1.000000" stroke="none" 
   d="
M364.327271,69.811142 
   C379.054230,104.222763 354.565277,131.545166 312.707214,127.420662 
   C312.707214,101.738731 312.707214,76.013260 312.707214,50.261585 
   C333.357178,46.658314 354.291046,50.725006 364.327271,69.811142 
z"/>
<path fill="#FCFBF7" opacity="1.000000" stroke="none" 
   d="
M310.093475,155.567657 
   C313.460815,148.542831 319.326172,146.163254 324.671692,149.276047 
   C328.975220,151.782074 331.025574,156.914139 329.441711,161.215500 
   C327.791718,165.696472 323.076263,168.589951 318.419891,167.978683 
   C313.654175,167.353058 310.216339,163.533493 309.899536,158.454193 
   C309.848206,157.631607 309.985535,156.797256 310.093475,155.567657 
z"/>
<path fill="#FCFBF7" opacity="1.000000" stroke="none" 
   d="
M435.130798,157.997253 
   C434.077789,165.107956 429.625610,168.802444 423.616211,167.966415 
   C418.385345,167.238708 414.416565,162.101685 415.056274,156.886749 
   C415.683044,151.777267 420.830719,147.631271 426.000183,148.072388 
   C430.952362,148.494965 434.188721,151.865433 435.130798,157.997253 
z"/>
<path fill="#FBF9F2" opacity="1.000000" stroke="none" 
   d="
M224.585922,161.120544 
   C221.393097,166.858521 218.314285,168.310959 211.189453,167.398041 
   C211.189453,161.891724 211.040451,156.288208 211.341995,150.709061 
   C211.389999,149.820679 213.437424,148.365021 214.602402,148.322601 
   C221.842667,148.058975 225.427109,152.592331 224.585922,161.120544 
z"/>
<path fill="#F6F1E5" opacity="1.000000" stroke="none" 
   d="
M93.697449,64.631027 
   C93.953148,64.738358 94.163307,64.913345 94.373459,65.088341 
   C94.181984,65.107018 93.990509,65.125687 93.663696,64.974800 
   C93.528351,64.805237 93.651909,64.698700 93.697449,64.631027 
z"/>
</svg></div>
        
   <div class="text-head">            
            <h4>QUESTIONÁRIO DE AVALIAÇÃO CLÍNICA</h4>
        </div>
    </div>

   

   <div class="first-box">
      <div class="cabecalho">
         

         <div class="infos-box">
            <div class="left-info">

               <div class="name-box">
                  <span class="qt">Nome Completo: </span>
                  <span>${nomePaciente.value}</span>
               </div>

               <div class="birthDay">
                  <span class="qt">Data de Nascimento:</span>
                  <span id="birthDayAns">${dataNascimento.value != "" ? converterData(dataNascimento.value) : ""}</span>
               </div>

               <div class="weight">
                  <span class="qt">Peso:</span>
                  <span id="weightAns">${pesoPaciente.value}kg</span>
               </div>



               <div class="proced">
                  <span class="qt">Telefone:</span>
                  <span id="procedAns">${telefone.value}</span>
               </div>



               <div class="height">
                  <span class="qt">Altura:</span>
                  <span id="heightAns">${alturaPaciente.value}</span>
               </div>

               <div class="proced">
                  <span class="qt">Rg ou CPF:</span>
                  <span id="procedAns">${rgCpf.value}</span>
               </div>

              
            </div>


         </div>

         
      </div>

      <div class="aside-box">
         <ul>

            <li>
               <span class="qt">Protocolo:</span>
               <span id="tax">${protocolo.value}</span>
            </li>

            <li>
               <span class="qt">Exame:</span>
               <span id="exameNumber">${exame.value}</span>
            </li>



            <li>
               <span class="qt">Médico Solicitante: </span>
               <span id="doc-name">${medicoSolicitante.value}</span>
            </li>

            <li>
               <span class="qt">Data Exame:</span>
               <span id="dateAns">${dataExame.value != "" ? converterData(dataExame.value) : ""}</span>
            </li>
         </ul>
      </div>
   </div>


    <div class="questions">
        <div class="q1 question">
            <span class="q" style="width: 320px;">1. Qual o motivo da solicitação do exame:</span>
            <span id="an1">
                ${q1.value}
            </span>
        </div>

        <div class="q2 question">
            <span class="q" style="width: 210px;">2. Qual a principal queixa?</span>
            <span id="an2" style="width: calc(100% - 220px);">${q2.value}</span>
        </div>

        <div class="q2#" >
            <span class="q">Há quanto tempo: </span>
            <span id="an2#">${q2QntTempo.value}</span>
        </div>
        <br/>
        <div class="q3 question">
            <div class="q">3. Já realizou alguma cirurgia na área em estudo?</div>
            <div id="qan">${textq3}</div>
            
        </div>

        <div class="q4 question">
            <div class="q">4. Já realizou alguma outra cirurgia?</div>
            <div id="qan">${textq4}</div>
           
        </div>

        <div class="q5 question">
            <div class="q">5. Já realizou Quimioterapia?</div>
            <div id="qan">${textq5}</div>
           
        </div>   

        <div class="q6 question">
            <span class="q">6. É portador de alguma enfermidade conhecida?</span>
          
            <div class="box-q6 qan">
                <span class="rad-choose">
                    <span id="hipertensao">(${textq6Hipertensao})</span>
                    <span>Hipertensão</span>
                </span>

                <span class="rad-choose">
                    <span id="cardiopatias">(${textq6Cardiopatias})</span>
                    <span>Cardiopatias</span>
                </span>

                <span class="rad-choose">
                    <span id="diabetes">(${textq6Diabetes})</span>
                    <span>Diabetes</span>
                </span>

                <span class="rad-choose">
                    <span id="insuficienciaRenal">(${textq6Insurenal})</span>
                    <span>Insuficiencia Renal</span>
                </span>

                <span class="rad-choose">
                    <span id="anemiaFalciforme">(${textq6AnemiaFalci})</span>
                    <span>Anemia Falciforme</span>
                </span>

                <span class="rad-choose">
                    <span id="mieloMultiplo">(${textq6Mieloma})</span>
                    <span>Mielo Mútiplo</span>
                </span>

                <span class="rad-choose">
                    <span id="asma">(${textq6Asma})</span>
                    <span>Asma</span>
                </span>

                <span class="rad-choose">
                    <span id="rinite">(${textq6Rinite})</span>
                    <span>Rinite</span>
                </span>

                <span class="rad-choose">
                    <span id="outros">(${textq6Outros})</span>
                    <span>Outros:</span>
                </span>
            </div>
           
            
        </div>     

        

        <div class="question q7">
            <div class="q">7. Utiliza algum medicamento?</div>
            <div id="qan">${textq7}</div>
            
        </div>

        <div class="question q8">
            <div class="q">8. Possui algum tipo de alergia?</div>
            <div id="qan">${textq8}</div>
            
        </div>

         <div class="question q9">
            <div class="q">9. Possui alguma alergia medicamentosa (iodo)?</div>
            <div id="qan">${textq9}</div>
            
        </div>
     
        
        <div class="q10 question">
            <div class="q">10. Possui alguma alergia alimentar (camarão/mariscos)?</div>
            <div id="qan">${textq10}</div>
            
        </div>

          <div id="q11">
            <div class="q">11. Tabagista?</div>
            <div id="qan">${textq11}</div>
           
        </div>

        <div class="q12 question">
            <div class="q">12. Já fez tratamento para tuberculose?</div>
            <div id="qan">${textq12}</div>
            
        </div>

        <div id="q13 question" class="q13t">
            <div class="q">13. Já realizou TC anteriormente?</div>
            <div id="qan">${textq13}</div>
            
        </div>

        <div class="q14 question">
            <div class="q">14. Já realizou algum exame prévio da área em estudo?</div>
            <div id="qan">${textq14}</div>
            
        </div>

        <div class="q15 question">
            <div class="q">15. Será realizado algum tipo de anestesia?</div>
            <div id="qan">${textq15}</div>    

        </div>

        <div class="q16 question">
            <div class="q">16. Já realizou algum tipo de exame com uso de contraste iodado? Por exemplo: TC, Cateterismo Cardíaco ou Urografia Excretora?</div>
            <div id="qan">${textq16}</div>
          
        </div>

        <div class="q17t">
            <div class="q">17. Usa Hipoglicemiante oral?</div>
            <div id="qan">${textq17}</div>
          
        </div>

        </br>
        <div class="q" style="font-size: 20px;">
            Exclusivo para o sexo feminino
        </div>
        </br>
        
        <div style="clear:left;">
            <div class="q">18. Existe alguma possibilidade de estar grávida?</div>
            <div id="qan">${textq18}</div>
            
        </div>

        <div class="q19 question">
            <div class="q">19. Está Amamentando? </div>
            <div id="qan">${textq19}</div>
            
        </div>

         <div class="q20 question">
            <span class="q" style="width: 320px;">20 Qual o motivo da solicitação do exame:</span>
            <span id="an1">
                ${q20.value}
            </span>
        </div>

        <div class="q21 question">
            <span class="q" style="width: 330px;">21. Qual o motivo da solicitação do exame:</span>
            <span id="an1">
                ${q21.value}
            </span>
        </div>
    </div>

    <div class="assEntrevistador" style="margin-top: 40px;">
        <span>Assinatura do paciente:</span>
        <span>___________________________________________</span>
    </div>

    <div class="assEntrevistador" style="margin-top: 40px;">
        <span>Assinatura do entrevistador:</span>
        <span>___________________________________________</span>
    </div>
    <script>


        ${q3script}

        if(q3){
            document.querySelector(".q3").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong> ${q3Qual.value}:</span><span id="ans-inf"></span></div>'
        }        

        ${q4script}

        if(q4){
            document.querySelector(".q4").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q4Qual.value}</span></div>'
        }

         ${q5script}

        if(q5){
            document.querySelector(".q5").innerHTML += '<div class="inf-q"><span> <strong> Tempo: </strong> </span><span id="ans-inf">${q5Qual.value}</span></div>'
        }

        ${q6script}

        if(q6){
            document.querySelector(".q6").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q6Qual.value}</span></div>'
        }

        
        ${q7script}

        if(q7){
            document.querySelector(".q7").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q7Qual.value}</span></div>'
        }
        
        ${q8script}

        if(q8){
            document.querySelector(".q8").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q8Qual.value}</span></div>'
        }

         ${q9script}

        if(q9){
            document.querySelector(".q9").innerHTML += '<div class="inf-q"><span> <strong> Qual: </strong> </span><span id="ans-inf">${q9Qual.value}</span></div>'
        }

        ${q10script}

        if(q10){
            document.querySelector(".q10").innerHTML += '<div class="inf-q"><span><strong>Qual: </strong></span><span id="ans-inf">${q10Qual.value}</span></div>'
        }

        ${q13script}

       if(q13){
            document.querySelector(".q13t").innerHTML += '<div class="inf-q"> <span> <strong>Obs:</strong> </span> <span id="ans-inf">${q13Qual.value}</span> </div>'

            document.querySelector(".q13t").innerHTML += '<div class="obsq15" style="margin-top: 5px;"><div class="q">Aconteceu alguma intercorrencia?</div><div id="obsans14">${textq13_1}</div></div>'

            ${q13_1script}

            if(q13_1){
               document.querySelector(".q13t").innerHTML += '<div class="inf-q"><span><strong>Qual: </strong></span><span id="ans-inf">${q13_1Qual.value}</span></div>'
            }
        }

        ${q14script}
        
       
        if(q14){

            document.querySelector(".q14").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q14Qual.value}</span></div>'
        }

        ${q16script}

        if(q16){
            
            document.querySelector(".q16").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q16Qual.value}</span></div>'

            document.querySelector(".q16").innerHTML += '<div class="obsq15" style="margin-top: 5px;"><div class="q">Aconteceu alguma intercorrencia?</div><div id="obsans14">${textq16_1}</div></div>'

            ${q16_1script}

            if(q16_1){
               document.querySelector(".q16").innerHTML += '<div class="inf-q"><span><strong>Qual: </strong></span><span id="ans-inf">${q16_1Qual.value}</span></div>'
            }
        }

        ${q17script}

        if(q17){
            document.querySelector(".q17t").innerHTML += '<div class="inf-q"><span><strong>Qual:</strong></span><span id="ans-inf">${q17Qual.value}</span></div>'
        }
        
    
    </script>
</body>
</html>`

   return content
}

const generateFileName = () => {
   let exame = document.getElementById("exame").value;
   let medicoSolicitante = document.getElementById("medicoSolicitante").value;
   let dataExame = document.getElementById("dataExame").value;
   let nomePaciente = document.getElementById("paciente").value;

   return {
      exame: exame.replace(/\s/g, ''),
      medicoSolicitante: medicoSolicitante.replace(/\s/g, ''),
      dataExame: dataExame.replace(/\s/g, ''),
      nomePaciente: nomePaciente.replace(/\s/g, '')
   }

};
