export const baseUrl = process.env.REACT_APP_SERVER_TYPE === 'prod' ? 'https://lapkipomoshi.ru/api' : 'http://194.67.118.153/api';
export const apiHeaders = {
  'Content-Type': 'application/json',
};

export const shelterLinkList = [
  { to: 'about', caption: 'О приюте' },
  { to: 'how-to-help', caption: 'Как помочь' },
  { to: 'news', caption: 'Новости' },
  { to: 'pets', caption: 'Питомцы' },
  { to: 'vacancies', caption: 'Вакансии' },
];

export const colorLinkList = [
  {
    to: '/shelters/list/red',
    caption: 'Красные',
    explanation: 'Красные приюты - те, которым для сбора нужной суммы не хватает больше всего. Им особенно нужна ваша помощь!',
  },
  {
    to: '/shelters/list/yellow',
    caption: 'Жёлтые',
    explanation: 'Жёлтые приюты - те, которым для сбора нужной суммы не хватает совсем чуть-чуть. Возможно, именно вы поможете закрыть сбор!',
  },
  {
    to: '/shelters/list/green',
    caption: 'Зелёные',
    explanation: 'Зелёные приюты - те, у которых успешно закрыт сбор материальных средств. Но вы так же можете оказать им нематериальную помощь!',
  },
  {
    to: '/shelters/list/all',
    caption: 'Все приюты',
    explanation: 'Все приюты – это список всех имеющихся на сайте приютов.',
  },
];
