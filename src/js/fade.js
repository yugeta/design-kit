document.addEventListener("DOMContentLoaded", () => {
  const className = 'dk-modal-fade-in';
  const fadeInActions = document.querySelectorAll("." + className);

  fadeInActions.forEach((fadeInAction) => {
    fadeInAction.addEventListener('click', fadeIn);
  });
});

/**
 * dk-modal-fade-inクラスを持つ要素の直後にある
 * dk-modal-fade-in-windowクラスを持つ要素および
 * dk-modal-fade-in-windowクラスの子要素かつ
 * dk-modal-fade-in-bodyクラスを持つ要素を
 * フェードインさせます。
 * dk-modal-fade-in-windowクラスを持つ
 * 要素に対しフェードアウトイベントを付加します。
 */
function fadeIn() {
  const className = 'dk-modal-fade-in-window';
  const target = this.nextElementSibling;

  if (target != null && (target.classList.contains(className))) {
    classOperate_fade(target, 'remove', 'is-close')
    classOperate_fade(target, 'add', 'is-open')
    target.addEventListener('click', function () {
      classOperate_fade(target, 'remove', 'is-open')
      classOperate_fade(target, 'add', 'is-close')
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
function classOperate_fade(target, operate, className) {
  const childClassName = 'dk-modal-fade-in-body';
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
