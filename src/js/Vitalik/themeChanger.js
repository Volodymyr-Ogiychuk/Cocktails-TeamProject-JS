import { save, load } from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const THEME_STORAGE_KEY = 'theme';
const inputRef = document.querySelector('.theme-switch__toggle');
const qq = document.querySelector('.navi.is-open');
const ww = document.querySelector('.menu-btn');
const rr = document.querySelector('.theme__title-light');
const tt = document.querySelector('.instractions-text');
const yy = document.querySelector('.star');
const uu = document.querySelector('.ingredient__text');
const ii = document.querySelector('.modal__icon');
const oo = document.querySelector('.compound__elem');

initPage();
const onThemeSwitch = event => {
  const { checked } = event.target;
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  save(THEME_STORAGE_KEY, checked);
  if (checked) {
    qq.classList.add(Theme.DARK);
    ww.classList.add(Theme.DARK);
    rr.classList.add(Theme.DARK);
    tt.classList.add(Theme.DARK);
    yy.classList.add(Theme.DARK);
    uu.classList.add(Theme.DARK);
    ii.classList.add(Theme.DARK);
    oo.classList.add(Theme.DARK);
    return;
  }
  qq.classList.remove(Theme.DARK);
  ww.classList.remove(Theme.DARK);
  rr.classList.remove(Theme.DARK);
  tt.classList.remove(Theme.DARK);
  yy.classList.remove(Theme.DARK);
  uu.classList.remove(Theme.DARK);
  ii.classList.remove(Theme.DARK);
  oo.classList.remove(Theme.DARK);
  return;
};
function initPage() {
  const savedChecked = load(THEME_STORAGE_KEY);
  inputRef.checked = savedChecked;
  document.body.className = savedChecked ? Theme.DARK : Theme.LIGHT;
  if (savedChecked) {
    qq.classList.add(Theme.DARK);
    ww.classList.add(Theme.DARK);
    rr.classList.add(Theme.DARK);
    tt.classList.add(Theme.DARK);
    yy.classList.add(Theme.DARK);
    uu.classList.add(Theme.DARK);
    ii.classList.add(Theme.DARK);
    oo.classList.add(Theme.DARK);
    return;
  }
  qq.classList.remove(Theme.DARK);
  ww.classList.remove(Theme.DARK);
  rr.classList.remove(Theme.DARK);
  tt.classList.remove(Theme.DARK);
  yy.classList.remove(Theme.DARK);
  uu.classList.remove(Theme.DARK);
  ii.classList.remove(Theme.DARK);
  oo.classList.remove(Theme.DARK);
  return;
}
inputRef.addEventListener('change', onThemeSwitch);
