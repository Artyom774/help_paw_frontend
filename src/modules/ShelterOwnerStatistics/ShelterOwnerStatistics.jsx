import React from 'react';
import './ShelterOwnerStatistics.scss';
import ShelterMetricsOverview from '../../components/ShelterMetricsOverview/ShelterMetricsOverview';

// TODO додалеть пути, сейчас эти страницы не сверстаны

const ShelterOwnerStatistics = ({ shelter }) => {
  const metrics = [
    { title: 'Количество питомцев: ',
      valueKey: shelter.count_pets,
      actionText: 'Посмотреть всех питомцев',
      path: `/my-shelter/${shelter.id}/all-pets` },
    { title: 'Количество вакансий: ', valueKey: shelter.count_vacancies, actionText: 'Посмотреть все вакансии', path: `/shelters/${shelter.id}/vacancies` },
    { title: 'Количество тегов: ', valueKey: shelter.count_pets, actionText: 'Посмотреть все теги', path: '/' },
    { title: 'Количество новостей: ', valueKey: shelter.count_news, actionText: 'Посмотреть новости приюта', path: `/shelters/${shelter.id}/news` },
  ];
  return (
    <div className='shelter-owner-statistic'>
      {metrics.map((metric) => {
        return (
          <ShelterMetricsOverview key={metric.title} title={metric.title} metricValue={metric.valueKey} path={metric.path} actionText={metric.actionText} />
        );
      })}
    </div>
  );
};

export default ShelterOwnerStatistics;
