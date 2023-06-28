import "styled-components";
import type { ColorsType } from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: ColorsType;
  }
}
