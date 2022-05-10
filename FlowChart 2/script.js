const dialog = document.querySelector("#dialog");
const messageDialog = document.querySelector("#message");
var ClickedId;

function addBtnClicked() {
    dialog.showModal();
    ClickedId = this.event.target.id;
    let index = ClickedId.indexOf('-');
    ClickedId = ClickedId.slice(6, index);
}

function dialogCloseBtnClicked() {
    dialog.close();
    const inputField = document.querySelector("#inputField");
    let inputValue = inputField.value;

    if (inputValue <= 2 && inputValue >= 1) {
        makeBox(inputValue);
    }
    else {
        messageDialog.innerHTML = "Please Enter the Correct Value!";
        messageDialog.classList.add("danger");
        messageDialog.showModal();
        setTimeout(() => {
            messageDialog.classList.remove("danger");
            messageDialog.close();
        }, 2500);
    }
    inputField.value = "";
}

function makeBox(totalChildMaked) {
    let main = document.querySelector(".main");
    for (let i = 0; i < totalChildMaked; i++) {
        let containerId = ClickedId.length;
        let presentChild = 0;

        let mainContainer = document.querySelector("#mainContainer" + containerId)
        let checkContainer = mainContainer;
        let innerContainer


        if (!mainContainer) {
            presentChild = 0;
            mainContainer = document.createElement("div");
            mainContainer.id = "mainContainer" + containerId;
            mainContainer.classList.add("mainContainer");
            mainContainer.style.gridTemplateColumns = "repeat(" + Math.pow(2, containerId - 1) + ",calc(100vw/" + Math.pow(2, containerId - 1) + "))";

            for (let j = 0; j < Math.pow(2, containerId - 1); j++) {

                innerContainer = document.createElement("div");
                innerContainer.id = 'innerContainer' + ("00000000" + j.toString(2)).slice(-(containerId + 1));
                innerContainer.classList.add("innerContainer");

                mainContainer.appendChild(innerContainer)
            }
            innerContainer = mainContainer.querySelector("#innerContainer" + ("000000" + ClickedId).slice(-(containerId + 1)));
        }
        else {
            innerContainer = document.querySelector("#innerContainer" + ("000000" + ClickedId).slice(-(containerId + 1)));
            presentChild = innerContainer.childNodes.length;
        }

        innerContainer.style.gridTemplateColumns = "repeat(" + (presentChild + 1) + ",auto)";

        let container = document.createElement("div");
        container.classList.add("container");
        container.id = "container" + ClickedId + presentChild + "-" + innerContainer.id.slice(14,);

        let line1 = document.createElement("div");
        line1.classList.add("line");

        container.appendChild(line1);

        let box = document.createElement("div");
        box.classList.add("box");
        box.id = "box" + ClickedId + presentChild;
        box.style.width = "calc(10em - " + containerId + "em - 0.25em)";

        let delBtn = document.createElement("div");
        delBtn.classList.add("delBtn");
        delBtn.id = 'delBtn' + ClickedId + presentChild + "-" + innerContainer.id.slice(14,);
        delBtn.setAttribute('onclick', 'delBtnClicked()');

        box.appendChild(delBtn)

        container.appendChild(box);

        let line2 = document.createElement("div");
        line2.classList.add("line");

        container.appendChild(line2);

        let addBtn = document.createElement("div");
        addBtn.innerHTML = "+";
        addBtn.classList.add("addBtn");
        addBtn.setAttribute('onclick', 'addBtnClicked()');
        addBtn.id = 'addBtn' + ClickedId + presentChild + "-" + innerContainer.id.slice(14,);

        container.appendChild(addBtn);

        let hr = document.createElement("hr");
        hr.id = 'hr' + ClickedId + presentChild;
        hr.style.width = "calc(100vw /" + Math.pow(2, containerId + 1) + ")";

        container.appendChild(hr);

        innerContainer.appendChild(container);

        if (!checkContainer) {
            main.appendChild(mainContainer);
        }

    }
    checkForAddBtn();
}

function checkForAddBtn() {
    let innerContainer = document.querySelector("#innerContainer0" + ClickedId);
    if (innerContainer.childNodes.length == 2) {
        let hr = document.querySelector("#hr" + ClickedId);
        hr.style.display = "block";
        let btn
    }

}


function delBtnClicked() {

    let removeId = this.event.target.id;
    let index = removeId.indexOf('-');
    removeId = removeId.slice(6, index);

    let connectedNodes = document.querySelectorAll("[id^='container" + removeId + "']");
    let main = document.querySelector(".main");

    for (let i = 0; i < connectedNodes.length; i++) {
        let innerContainerIndex = connectedNodes[i].id;
        let ind = innerContainerIndex.indexOf("-");
        innerContainerIndex = innerContainerIndex.slice(ind + 1,);
        let innerContainer = document.querySelector("#innerContainer" + innerContainerIndex);
        if (innerContainer) {
            innerContainer.removeChild(connectedNodes[i]);
            let mainContainerIdd = innerContainerIndex.length - 1;
            let mainContainer = document.querySelector("#mainContainer" + mainContainerIdd);
            main.removeChild(mainContainer);
        }
        else {
            let hr = document.querySelector("#hr0");
            hr.style.display = "none";
        }
    }

}