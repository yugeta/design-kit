document.addEventListener("DOMContentLoaded", () => {
  const className = 'dk-modal-action';
  const fadeInActions = document.querySelectorAll("." + className);

  fadeInActions.forEach((fadeInAction) => {
    fadeInAction.addEventListener('click', fadeInModal);
  });
});

/**
 * dk-modalクラスを持つ要素の直後にある
 * dk-modal-windowクラスを持つ要素および
 * dk-modal-windowクラスの子要素かつ
 * dk-modal-bodyクラスを持つ要素を
 * フェードインさせます。
 * dk-modal-windowクラスを持つ
 * 要素に対しフェードアウトイベントを付加します。
 */
function fadeInModal() {
  const className = 'dk-modal-window';
  const target = this.nextElementSibling;

  if (target != null && (target.classList.contains(className))) {
    classOperateModal(target, 'remove', 'is-close')
    classOperateModal(target, 'add', 'is-open')
    target.addEventListener('click', function () {
      classOperateModal(target, 'remove', 'is-open')
      classOperateModal(target, 'add', 'is-close')
    });
  }
}

/**
 * 対象の要素に対し指定したクラスの
 * 追加/削除を行います。
 *
 * @param {HTMLElement} target DOM要素です。
 * @param {string} operate クラスに対する処理を指定します。(add/remove)
 * @param {string} className 追加/削除するクラス名を指定します。(is-open/is-close)
 */
function classOperateModal(target, operate, className) {
  const childClassName = 'dk-modal-body';
  const targetChilds = target.querySelectorAll('.' + childClassName);
  if (operate === 'add') {
    target.classList.add(className);
    for (child of targetChilds) {
      child.classList.add(className)
    }
  } else if (operate === 'remove') {
    target.classList.remove(className);
    for (child of targetChilds) {
      child.classList.remove(className)
    }
  }
}
