document.addEventListener("DOMContentLoaded", function() {
    let nomePacienteBoo = false; // 1
    let nomeMedicoBoo = false; // 2
    let numExameBoo = false; // 3
    let dataExameBoo = false; // 4
    
    
    const filenamePatternInput = document.getElementById("examePadrao");
    let filenamePattern = 'exame';

    let padraoValores = [];

    // add event listener to li item
    document.getElementById("numExame").addEventListener("click", () => {
        if (!numExameBoo && padraoValores.length < 4){
            filenamePattern += "_{numExame}";
            padraoValores.push(3);
            console.log(padraoValores);
            renderizarPadraoValores();
            numExameBoo = true;
        }
    });
    document.getElementById("nomeMedico").addEventListener("click", () => {
        if (!nomeMedicoBoo && padraoValores.length < 4){
            filenamePattern+= "_{nomeMedico}";
            padraoValores.push(2);
            console.log(padraoValores);
            renderizarPadraoValores();
            nomeMedicoBoo = true;
        }
    });
    document.getElementById("dataExame").addEventListener("click", () => {
        if (!dataExameBoo && padraoValores.length < 4){
            filenamePattern += "_{dataExame}";
            padraoValores.push(4);
            console.log(padraoValores);
            renderizarPadraoValores();
            dataExameBoo = true;
        }
    });
    document.getElementById("nomePaciente").addEventListener("click", () => {
        if (!nomePacienteBoo && padraoValores.length < 4){
            filenamePattern += "_{nomePaciente}";
            padraoValores.push(1);
            console.log(padraoValores);
            renderizarPadraoValores();
            nomePacienteBoo = true;
        }
    });

    function renderizarPadraoValores() {
        console.log("adsd")
        document.getElementById("examePadrao").textContent = filenamePattern;
    }


    const configIcon = document.getElementById("configIcon");
    const configModal = document.getElementById("configModal");

    function showConfigModal() {
        configModal.classList.add("show", "d-block");
        configModal.setAttribute("aria-modal", "true");
        configModal.focus();
    }

    function hideConfigModal() {
        configModal.classList.remove("show", "d-block");
        configModal.setAttribute("aria-modal", "false");
    }

    configIcon.addEventListener("click", function () {
        showConfigModal();
    });

    configModal.querySelector(".btn-close").addEventListener("click", function () {
        hideConfigModal();
    });

    configModal.querySelector("#saveButton").addEventListener("click", function () {
        const filenamePattern = filenamePatternInput.value;

        fetch('http://localhost:3000/api/salvar-padrao', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ pattern: padraoValores }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Padrão de nome salvo com sucesso:', data);
                hideConfigModal();
            })
            .catch((error) => {
                console.error('Erro ao salvar o padrão de nome:', error);
            });
    });

    document.getElementById("closebtn").addEventListener("click", ()=>{
        document.getElementById("examePadrao").innerHTML = "";
        nomePacienteBoo = false; // 1
        nomeMedicoBoo = false; // 2
        numExameBoo = false; // 3
        dataExameBoo = false; // 4
        padraoValores= []
        filenamePattern = "exame"
    })
});


