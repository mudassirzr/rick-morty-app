import { charactersInfo } from "state/types";

export interface PaginationProps extends charactersInfo {
    onChangePage: (page: number) => void
    loading: boolean
}