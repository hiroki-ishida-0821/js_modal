'use strict'

// modalを出す
const modalOpen = document.querySelectorAll('.trigger');
const modal = document.querySelectorAll('.clModal');
const modalCover = document.querySelectorAll('.modal-bg');

let modalCloseAction;
let dataModalOpen;
let targetModal;

const TIMEOUT_SPEED = 200;

for (let i = 0; i < modalOpen.length; i++) {

    //モーダルを下げる処理
    modalCloseAction = function(e) {
        targetModal = e.currentTarget.closest('.clModal');
        targetModal.classList.add('close');

    setTimeout(function(e) {
        targetModal.classList.remove('apper');
        targetModal.classList.remove('close');
    }, TIMEOUT_SPEED);
    };

    // グレー部分をクリックでmodalを下げる
    const modalWrapClose = function() {
        modalCover[i].addEventListener('click',function(e){
        modalCloseAction(e);
    },false);
    };

    // modalをあげる
    const modalWrapOpen = function(e) {
    dataModalOpen = e.currentTarget.getAttribute('data-modal-open');
    for (var b = 0; b < modal.length; b++) {

    if (modal[b].getAttribute('data-modal') === dataModalOpen) {
        modal[b].classList.add('apper');
        modalWrapClose();
        return false;
    }
    }
    };

    modalOpen[i].addEventListener('click', function(e) {
        modalWrapOpen(e);
    }, false);
}

// modalを下げる
const modalBtnClose = document.querySelectorAll('#close');
for (let n = 0; n < modalBtnClose.length; n++) {
    modalBtnClose[n].addEventListener('click', function(e) {
        modalCloseAction(e);
        return false;
    }, false);
}
