import axios from 'axios';

class RequestPasswordFlow {
  authHost: string;

  projectKey: string;

  clientId: string;

  clientSecret: string;

  scope: string;

  authHeader: string;

  userName: string;

  password: string;

  requestUrl: string;

  requestConfig: { headers: { Authorization: string; 'Content-Type': string } };

  constructor() {
    this.authHost = 'auth.europe-west1.gcp.commercetools.com';
    this.projectKey = `${import.meta.env.VITE_CTP_PROJECT_KEY}`;
    this.clientId = `${import.meta.env.VITE_CTP_CLIENT_ID}`;
    this.clientSecret = `${import.meta.env.VITE_CTP_CLIENT_SECRET}`;
    this.userName = '';
    this.password = '';
    this.scope = `manage_project:${import.meta.env.VITE_CTP_PROJECT_KEY}`;
    this.authHeader = `Basic ${btoa(`${this.clientId}:${this.clientSecret}`)}`;
    this.requestUrl = `https://${this.authHost}/oauth/${this.projectKey}/customers/token`;
    this.requestConfig = {
      headers: {
        Authorization: this.authHeader,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
  }

  private requestData(body: { name: string; pass: string }): string {
    this.userName = body.name;
    this.password = body.pass;
    const url = new URLSearchParams();
    url.append('grant_type', 'password');
    url.append('username', this.userName);
    url.append('password', this.password);
    url.append('scope', this.scope);
    return url.toString();
  }

  public post(body: { name: string; pass: string }) {
    return axios.post(this.requestUrl, this.requestData(body), this.requestConfig);
  }
}

export default RequestPasswordFlow;
