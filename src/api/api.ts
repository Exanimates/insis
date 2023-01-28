interface Data {
  code: string;
  name: string;
  region_code: string;
  type: string;
}

interface Suggestions {
  value: string,
  unrestricted_value: string,
  data: Data
}

interface Aggregate {
  suggestions: Suggestions[]
}

class Api {
  token = '471b25c34037fea2bccf956b03f5c3ec01f6d004';
  baseUrl = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fms_unit'

  async query (data = {}): Promise<Aggregate> {
    const response = await fetch(this.baseUrl, {
      method: "POST",
      mode: "cors",
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": "Token " + this.token
      },
      body: JSON.stringify(data)
    })

    const result = await response.json();

    return result;
  }

}

export default new Api()
