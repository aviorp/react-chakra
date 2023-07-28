import { api } from "./";

class BaseService {
  client: typeof api;
  endpoint: string;
  constructor(endpoint: string) {
    this.client = api;
    this.endpoint = endpoint;
  }
  async getAll<T>() {
    return this.client.get<T>(this.endpoint);
  }
  async getOne<T>(id: string) {
    return await this.client.get<T>(`${this.endpoint}/${id}`);
  }
  async create<T>(payload: T) {
    return this.client.post<T>(this.endpoint, payload);
  }
  update<T>(id: string, payload: T) {
    return this.client.put(`${this.endpoint}/${id}`, payload);
  }
  delete(id: string) {
    return this.client.delete(`${this.endpoint}/${id}`);
  }
}

export default BaseService;
