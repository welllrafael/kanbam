export interface IRepository {
  create(data: object): Promise<string>;
  update(data: object): Promise<string>;
  delete(data: object): Promise<string>;
  getById(id: string): Promise<string>;
  getAll(): Promise<string>;
}
