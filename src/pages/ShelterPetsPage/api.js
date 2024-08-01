import BaseApi from '../../utils/BaseApi';
import { baseUrl, apiHeaders } from '../../utils/constants';

class ShelterApi extends BaseApi {
  constructor({ _baseUrl, _headers }) {
    super({ _baseUrl });
    this._headers = _headers;
  }

  getShelterById(id) { // загрузка информации о приюте по его id
    return fetch(`${this._baseUrl}/v1/shelters/${id}/`, {
      headers: this._headers,
    }).then((res) => {
      return super._processTheResponse(res);
    });
  }
}

const shelterApi = new ShelterApi({
  _baseUrl: baseUrl,
  _headers: apiHeaders,
});

export default shelterApi;