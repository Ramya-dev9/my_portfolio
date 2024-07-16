function setFlipSide(side) {
    var isFrontCard;
    console.log('called');
    switch (side) {
        case 'Front': isFrontCard = true;
            break;
        case 'Back': isFrontCard = false;
            break;
        default: isFrontCard = true;
            break
    }
    var mySpan = document.getElementById("myCard");
    if (!isFrontCard) {
        mySpan.classList.replace('flip-front', 'flip-back');
    }
    else if (isFrontCard) {
        mySpan.classList.replace('flip-back', 'flip-front');
    }
}

function setProject(projectName) {
    var proj1 = document.getElementById("project_1");
    var proj1_link = document.getElementById("project_1_link");
    var proj2 = document.getElementById("project_2");
    var proj2_link = document.getElementById("project_2_link");
    var proj3 = document.getElementById("project_3");
    var proj3_link = document.getElementById("project_3_link");

    switch (projectName) {
        case 'project_1': proj1.style.display = 'block';
            proj1_link.style.display = 'none';
            proj2.style.display = 'none';
            proj2_link.style.display = 'block';
            proj3.style.display = 'none';
            proj3_link.style.display = 'block';
            break;
        case 'project_2': proj2.style.display = 'block';
            proj2_link.style.display = 'none';
            proj1.style.display = 'none';
            proj1_link.style.display = 'block';
            proj3.style.display = 'none';
            proj3_link.style.display = 'block';
            break;
        case 'project_3': proj3.style.display = 'block';
            proj3_link.style.display = 'none';
            proj2.style.display = 'none';
            proj2_link.style.display = 'block';
            proj1.style.display = 'none';
            proj1_link.style.display = 'block';
            break;
        default: proj1.style.display = 'block';
            proj1_link.style.display = 'none';
            proj2.style.display = 'none';
            proj2_link.style.display = 'block';
            proj3.style.display = 'none';
            proj3_link.style.display = 'block';
            break
    }
}
