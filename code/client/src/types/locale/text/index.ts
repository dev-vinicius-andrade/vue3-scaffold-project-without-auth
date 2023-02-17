import {StringCase} from "@enums"
export interface ILocaleText{
  text?: string;
  key?: string;
  single?: boolean;
  multiple?: boolean;
  count?: number;
  params?: any;
  stringCases?: StringCase[];
  removeDoubleSpaces?: boolean;
}

export default ILocaleText
