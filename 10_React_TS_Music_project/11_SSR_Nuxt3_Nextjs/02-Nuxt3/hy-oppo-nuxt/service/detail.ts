import hyRequest from "./index";
import type { IResultData } from "./index";
import type { IProductDetail } from "@/store/home";
export type IDetailProductType = "oppo" | "air" | "watch" | "tablet";

export interface IDetailInfo {
  id?: number;
  title?: string;
  productDetailss?: IProductDetail[];
}
export const getDetailInfo = (type: IDetailProductType) => {
  return hyRequest.get<IResultData<IDetailInfo[]>>("/oppoDetail", {
    type,
  });
};
