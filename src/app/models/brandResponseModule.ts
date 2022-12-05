import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface BrandResponseModule extends ResponseModel{
    data:Brand[];
}