import {Roles} from "@src/core/domain/types";
import {authMiddleWare} from "@afirmashop/common-logic"
import {makeDbLoadAccountByToken} from "@src/adapters/factories/usecases";

export const auth = (roles?: Roles[]) => authMiddleWare({loadAccountByToken: makeDbLoadAccountByToken(), roles})