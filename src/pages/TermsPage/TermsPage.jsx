import React from 'react';
import './TermsPage.scss';
import DetailsCard from '../../components/DetailsCard/DetailsCard';
import MainContainer from '../../components/MainContainer/MainContainer';

const TermsOfServicePage = () => {
  return (
    <MainContainer base='additional'>
      <section className='terms__container main privacy-policy__container'>
        <ul className='terms__list standard-font_type_small'>
          <li className='terms__item'>
            <DetailsCard title='Пользовательское Соглашение' isOpen={false} iconType='arrow' titleClasses='standard-font_type_h4'>
              <div className='terms__description-container'>
                <p className='terms__description'>
                  Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между владельцем https://lapkipomoshi.ru/ (далее Лапки помощи
                  или Администрация) с одной стороны и пользователем сайта с другой. Сайт Лапки помощи не является средством массовой информации.
                </p>
                <p className='terms__description'>Используя сайт, Вы соглашаетесь с условиями данного соглашения.</p>
                <p className='terms__description standard-font_type_body'>
                  Если Вы не согласны с условиями данного соглашения, не используйте сайт Лапки помощи!
                </p>
              </div>
            </DetailsCard>
          </li>

          <li className='terms__item'>
            <DetailsCard title='Права и обязанности сторон' isOpen={false} iconType='arrow' titleClasses='standard-font_type_h4'>
              <div className='terms__description-container'>
                <ul className='terms__description'>
                  <li className='standard-font_type_body terms__description-subtitle'> Пользователь имеет право:</li>
                  <li> - осуществлять поиск информации на сайте</li>
                  <li> - получать информацию на сайте</li>
                  <li> - создавать информацию для сайта</li>
                  <li> - распространять информацию на сайте</li>
                  <li> - комментировать контент, выложенный на сайте</li>
                  <li> - изменять рейтинг пользователей </li>
                  <li> - копировать информацию на другие сайты с указанием источника</li>
                  <li> - требовать от администрации скрытия любой информации о пользователе</li>
                  <li> - требовать от администрации скрытия любой информации переданной пользователем сайту</li>
                  <li> - использовать информацию сайта в личных некоммерческих целях</li>
                  <li> - использовать информацию сайта в коммерческих целях с разрешения Администрации</li>
                  <li> - использовать информацию сайта в коммерческих целях с разрешения правообладателей</li>
                  <li> - использовать информацию сайта в коммерческих целях без специального разрешения</li>
                </ul>

                <ul className='terms__description'>
                  <li className='standard-font_type_body terms__description-subtitle'> Администрация имеет право:</li>
                  <li> - по своему усмотрению и необходимости создавать, изменять, отменять правила</li>
                  <li> - получать информацию на сайте</li>
                  <li> - создавать, изменять, удалять информацию</li>
                  <li> - удалять учетные записи</li>
                </ul>

                <ul className='terms__description'>
                  <li className='standard-font_type_body terms__description-subtitle'> Пользователь обязуется:</li>
                  <li> - обеспечить достоверность предоставляемой информации</li>
                  <li> - обеспечивать сохранность личных данных от доступа третьих лиц</li>
                  <li> - обновлять Персональные данные, предоставленные при регистрации, в случае их изменения</li>
                  <li> - при копировании информации с других источников, включать в её состав информацию об авторе</li>
                  <li>
                    - не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти и вражды,
                    а также иной информации, за распространение которой предусмотрена уголовная или административная ответственность
                  </li>
                  <li> - не нарушать работоспособность сайта</li>
                  <li> - не совершать действия, направленные на введение других Пользователей в заблуждение</li>
                  <li>
                    - не размещать материалы рекламного, эротического, порнографического или оскорбительного характера, а также иную информацию, размещение
                    которой запрещено или противоречит нормам действующего законодательства РФ
                  </li>
                  <li> - не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами</li>
                </ul>

                <ul className='terms__description terms__description-subtitle'>
                  <li className='standard-font_type_body'> Администрация обязуется:</li>
                  <li> - поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.</li>
                  <li> - осуществлять разностороннюю защиту учетной записи Пользователя</li>
                  <li>
                    - защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной
                    записи пользователя, нарушившего правила
                  </li>
                  <li>
                    - предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом
                  </li>
                </ul>
              </div>
            </DetailsCard>
          </li>

          <li className='terms__item'>
            <DetailsCard title='Ответственность сторон' isOpen={false} iconType='arrow' titleClasses='standard-font_type_h4'>
              <div className='terms__description-container'>
                <ul className='terms__description'>
                  <li> - пользователь лично несет полную ответственность за распространяемую им информацию</li>
                  <li> - администрация не несет никакой ответственности за достоверность информации, скопированной из других источников</li>
                  <li> - администрация не несёт ответственность за несовпадение ожидаемых Пользователем и реально полученных услуг</li>
                  <li> - администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами</li>
                  <li>
                    - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не
                    гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса
                  </li>
                </ul>
              </div>
            </DetailsCard>
          </li>

          <li className='terms__item'>
            <DetailsCard title='Условия действия Соглашения' isOpen={false} iconType='arrow' titleClasses='standard-font_type_h4'>
              <div className='terms__description-container'>
                <ul className='terms__description'>
                  <li>Данное Соглашение вступает в силу при любом использовании данного сайта.</li>
                  <li>Соглашение перестает действовать при появлении его новой версии.</li>
                  <li>Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.</li>
                  <li>Администрация не оповещает пользователей об изменении в Соглашении.</li>
                </ul>
              </div>
            </DetailsCard>
          </li>
        </ul>
      </section>
    </MainContainer>
  );
};

export default TermsOfServicePage;