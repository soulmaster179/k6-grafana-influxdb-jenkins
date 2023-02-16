import { check, sleep, group } from "k6";
import { Counter } from 'k6/metrics';
import { Httpx } from 'https://jslib.k6.io/httpx/0.0.3/index.js';


const errors = new Counter('errors');

const session = new Httpx({
  baseURL: 'http://httpbin.test.k6.io',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  timeout: 20000
});

function aggregate(response, check, name) {
  if (!check) {
    // couldn't make point from sample: max key length exceeded: 519029 > 65535 - InfluxDB validation
    const responseBody = JSON.stringify(response.body).slice(0, 5000)
    const requestBody = JSON.stringify(response.request.body).slice(0, 5000)
    errors.add(true, {
      name: name,
      error_code: response.error_code,
      request_headers: JSON.stringify(response.request.headers),
      request_cookies: JSON.stringify(response.request.cookies),
      request_method: response.request.method,
      request_body: requestBody,
      response_headers: JSON.stringify(response.headers),
      response_cookies: JSON.stringify(response.cookies),
      response_status: response.status,
      response_body: responseBody
    })
  }
}

export default function () {
  let name
  let response
  let status

  group('get 407 status', function () {
    name = '/status/<status>'
    response = session.get("/status/407", null, {
      tags: { name: name }
    });
    check(response, {
      'status is 407': (r) => r.status === 407
    })
    aggregate(response, status, name)
  })
};
