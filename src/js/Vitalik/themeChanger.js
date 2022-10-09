import { save, load } from './storage';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const THEME_STORAGE_KEY = 'theme';
const inputRef = document.querySelector('.theme-switch__toggle');
initPage();
const onThemeSwitch = event => {
  const { checked } = event.target;
  // console.log(event.target.checked);
  document.body.className = checked ? Theme.DARK : Theme.LIGHT;
  save(THEME_STORAGE_KEY, checked);
};
function initPage() {
  const savedChecked = load(THEME_STORAGE_KEY);
  inputRef.checked = savedChecked;
  document.body.className = savedChecked ? Theme.DARK : Theme.LIGHT;
}
inputRef.addEventListener('change', onThemeSwitch);
