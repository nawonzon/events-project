type HttpConfig = RequestInit

function request<TResponse>(url: string, config: HttpConfig = {}): Promise<TResponse> {
  return fetch(url, config).then((response) => response.json())
}

export const doGet = <T>(url: string) => request<T>(url)

export const doPost = <T>(url: string, body: object) =>
  request<T>(url, {
    method: 'post',
    body: JSON.stringify(body)
  })
