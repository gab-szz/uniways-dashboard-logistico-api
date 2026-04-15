import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly OP_VIAGEM: "OP_VIAGEM";
    readonly OP_STATUSVIAGEM: "OP_STATUSVIAGEM";
    readonly OP_VIAGEMLOG: "OP_VIAGEMLOG";
    readonly IN_INTEGRACAO: "IN_INTEGRACAO";
    readonly MD_TIPOMENSAGEMAUDITORIA: "MD_TIPOMENSAGEMAUDITORIA";
    readonly MS_PESSOA: "MS_PESSOA";
    readonly MS_PESSOACLIENTE: "MS_PESSOACLIENTE";
    readonly MS_PESSOACONTATO: "MS_PESSOACONTATO";
    readonly MS_PESSOAENDERECO: "MS_PESSOAENDERECO";
    readonly MS_PESSOALOG: "MS_PESSOALOG";
    readonly MS_PESSOAMOTORISTA: "MS_PESSOAMOTORISTA";
    readonly MS_PESSOATRANSPORTADOR: "MS_PESSOATRANSPORTADOR";
    readonly MS_SEXOPESSOA: "MS_SEXOPESSOA";
    readonly MS_SITUACAOPESSOAJURIDICA: "MS_SITUACAOPESSOAJURIDICA";
    readonly MS_STATUSPESSOA: "MS_STATUSPESSOA";
    readonly MS_STATUSPESSOACONTATO: "MS_STATUSPESSOACONTATO";
    readonly MS_STATUSPESSOAENDERECO: "MS_STATUSPESSOAENDERECO";
    readonly MS_TIPOINATIVACAOPESSOA: "MS_TIPOINATIVACAOPESSOA";
    readonly MS_TIPOPESSOA: "MS_TIPOPESSOA";
    readonly MS_TIPOPESSOAENDERECO: "MS_TIPOPESSOAENDERECO";
    readonly MS_TIPOPESSOAOCORRENCIA: "MS_TIPOPESSOAOCORRENCIA";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "oP_VIAGEM" | "oP_STATUSVIAGEM" | "oP_VIAGEMLOG" | "iN_INTEGRACAO" | "mD_TIPOMENSAGEMAUDITORIA" | "mS_PESSOA" | "mS_PESSOACLIENTE" | "mS_PESSOACONTATO" | "mS_PESSOAENDERECO" | "mS_PESSOALOG" | "mS_PESSOAMOTORISTA" | "mS_PESSOATRANSPORTADOR" | "mS_SEXOPESSOA" | "mS_SITUACAOPESSOAJURIDICA" | "mS_STATUSPESSOA" | "mS_STATUSPESSOACONTATO" | "mS_STATUSPESSOAENDERECO" | "mS_TIPOINATIVACAOPESSOA" | "mS_TIPOPESSOA" | "mS_TIPOPESSOAENDERECO" | "mS_TIPOPESSOAOCORRENCIA";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        OP_VIAGEM: {
            payload: Prisma.$OP_VIAGEMPayload<ExtArgs>;
            fields: Prisma.OP_VIAGEMFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OP_VIAGEMFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OP_VIAGEMFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                findFirst: {
                    args: Prisma.OP_VIAGEMFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OP_VIAGEMFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                findMany: {
                    args: Prisma.OP_VIAGEMFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>[];
                };
                create: {
                    args: Prisma.OP_VIAGEMCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                createMany: {
                    args: Prisma.OP_VIAGEMCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OP_VIAGEMDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                update: {
                    args: Prisma.OP_VIAGEMUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                deleteMany: {
                    args: Prisma.OP_VIAGEMDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OP_VIAGEMUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OP_VIAGEMUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMPayload>;
                };
                aggregate: {
                    args: Prisma.OP_VIAGEMAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOP_VIAGEM>;
                };
                groupBy: {
                    args: Prisma.OP_VIAGEMGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_VIAGEMGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OP_VIAGEMCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_VIAGEMCountAggregateOutputType> | number;
                };
            };
        };
        OP_STATUSVIAGEM: {
            payload: Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>;
            fields: Prisma.OP_STATUSVIAGEMFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OP_STATUSVIAGEMFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OP_STATUSVIAGEMFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                findFirst: {
                    args: Prisma.OP_STATUSVIAGEMFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OP_STATUSVIAGEMFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                findMany: {
                    args: Prisma.OP_STATUSVIAGEMFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>[];
                };
                create: {
                    args: Prisma.OP_STATUSVIAGEMCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                createMany: {
                    args: Prisma.OP_STATUSVIAGEMCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OP_STATUSVIAGEMDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                update: {
                    args: Prisma.OP_STATUSVIAGEMUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                deleteMany: {
                    args: Prisma.OP_STATUSVIAGEMDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OP_STATUSVIAGEMUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OP_STATUSVIAGEMUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_STATUSVIAGEMPayload>;
                };
                aggregate: {
                    args: Prisma.OP_STATUSVIAGEMAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOP_STATUSVIAGEM>;
                };
                groupBy: {
                    args: Prisma.OP_STATUSVIAGEMGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_STATUSVIAGEMGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OP_STATUSVIAGEMCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_STATUSVIAGEMCountAggregateOutputType> | number;
                };
            };
        };
        OP_VIAGEMLOG: {
            payload: Prisma.$OP_VIAGEMLOGPayload<ExtArgs>;
            fields: Prisma.OP_VIAGEMLOGFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OP_VIAGEMLOGFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OP_VIAGEMLOGFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                findFirst: {
                    args: Prisma.OP_VIAGEMLOGFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OP_VIAGEMLOGFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                findMany: {
                    args: Prisma.OP_VIAGEMLOGFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>[];
                };
                create: {
                    args: Prisma.OP_VIAGEMLOGCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                createMany: {
                    args: Prisma.OP_VIAGEMLOGCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.OP_VIAGEMLOGDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                update: {
                    args: Prisma.OP_VIAGEMLOGUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                deleteMany: {
                    args: Prisma.OP_VIAGEMLOGDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OP_VIAGEMLOGUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.OP_VIAGEMLOGUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OP_VIAGEMLOGPayload>;
                };
                aggregate: {
                    args: Prisma.OP_VIAGEMLOGAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOP_VIAGEMLOG>;
                };
                groupBy: {
                    args: Prisma.OP_VIAGEMLOGGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_VIAGEMLOGGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OP_VIAGEMLOGCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OP_VIAGEMLOGCountAggregateOutputType> | number;
                };
            };
        };
        IN_INTEGRACAO: {
            payload: Prisma.$IN_INTEGRACAOPayload<ExtArgs>;
            fields: Prisma.IN_INTEGRACAOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.IN_INTEGRACAOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.IN_INTEGRACAOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                findFirst: {
                    args: Prisma.IN_INTEGRACAOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.IN_INTEGRACAOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                findMany: {
                    args: Prisma.IN_INTEGRACAOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>[];
                };
                create: {
                    args: Prisma.IN_INTEGRACAOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                createMany: {
                    args: Prisma.IN_INTEGRACAOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.IN_INTEGRACAODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                update: {
                    args: Prisma.IN_INTEGRACAOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                deleteMany: {
                    args: Prisma.IN_INTEGRACAODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.IN_INTEGRACAOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.IN_INTEGRACAOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$IN_INTEGRACAOPayload>;
                };
                aggregate: {
                    args: Prisma.IN_INTEGRACAOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateIN_INTEGRACAO>;
                };
                groupBy: {
                    args: Prisma.IN_INTEGRACAOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IN_INTEGRACAOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.IN_INTEGRACAOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.IN_INTEGRACAOCountAggregateOutputType> | number;
                };
            };
        };
        MD_TIPOMENSAGEMAUDITORIA: {
            payload: Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>;
            fields: Prisma.MD_TIPOMENSAGEMAUDITORIAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                findFirst: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                findMany: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>[];
                };
                create: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                createMany: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                update: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                deleteMany: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
                };
                aggregate: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMD_TIPOMENSAGEMAUDITORIA>;
                };
                groupBy: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MD_TIPOMENSAGEMAUDITORIAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MD_TIPOMENSAGEMAUDITORIACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MD_TIPOMENSAGEMAUDITORIACountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOA: {
            payload: Prisma.$MS_PESSOAPayload<ExtArgs>;
            fields: Prisma.MS_PESSOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOA>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOACountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOACLIENTE: {
            payload: Prisma.$MS_PESSOACLIENTEPayload<ExtArgs>;
            fields: Prisma.MS_PESSOACLIENTEFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOACLIENTEFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOACLIENTEFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOACLIENTEFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOACLIENTEFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOACLIENTEFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOACLIENTECreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOACLIENTECreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOACLIENTEDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOACLIENTEUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOACLIENTEDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOACLIENTEUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOACLIENTEUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACLIENTEPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOACLIENTEAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOACLIENTE>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOACLIENTEGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOACLIENTEGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOACLIENTECountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOACLIENTECountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOACONTATO: {
            payload: Prisma.$MS_PESSOACONTATOPayload<ExtArgs>;
            fields: Prisma.MS_PESSOACONTATOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOACONTATOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOACONTATOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOACONTATOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOACONTATOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOACONTATOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOACONTATOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOACONTATOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOACONTATODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOACONTATOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOACONTATODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOACONTATOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOACONTATOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOACONTATOPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOACONTATOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOACONTATO>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOACONTATOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOACONTATOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOACONTATOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOACONTATOCountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOAENDERECO: {
            payload: Prisma.$MS_PESSOAENDERECOPayload<ExtArgs>;
            fields: Prisma.MS_PESSOAENDERECOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOAENDERECOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOAENDERECOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOAENDERECOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOAENDERECOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOAENDERECOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOAENDERECOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOAENDERECODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOAENDERECOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOAENDERECODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOAENDERECOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOAENDERECOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAENDERECOPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOAENDERECOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOAENDERECO>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOAENDERECOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOAENDERECOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOAENDERECOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOAENDERECOCountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOALOG: {
            payload: Prisma.$MS_PESSOALOGPayload<ExtArgs>;
            fields: Prisma.MS_PESSOALOGFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOALOGFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOALOGFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOALOGFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOALOGFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOALOGFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOALOGCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOALOGCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOALOGDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOALOGUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOALOGDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOALOGUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOALOGUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOALOGPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOALOGAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOALOG>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOALOGGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOALOGGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOALOGCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOALOGCountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOAMOTORISTA: {
            payload: Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>;
            fields: Prisma.MS_PESSOAMOTORISTAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOAMOTORISTAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOAMOTORISTAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOAMOTORISTAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOAMOTORISTAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOAMOTORISTAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOAMOTORISTACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOAMOTORISTACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOAMOTORISTADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOAMOTORISTAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOAMOTORISTADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOAMOTORISTAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOAMOTORISTAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOAMOTORISTAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOAMOTORISTAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOAMOTORISTA>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOAMOTORISTAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOAMOTORISTAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOAMOTORISTACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOAMOTORISTACountAggregateOutputType> | number;
                };
            };
        };
        MS_PESSOATRANSPORTADOR: {
            payload: Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>;
            fields: Prisma.MS_PESSOATRANSPORTADORFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_PESSOATRANSPORTADORFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_PESSOATRANSPORTADORFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                findFirst: {
                    args: Prisma.MS_PESSOATRANSPORTADORFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_PESSOATRANSPORTADORFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                findMany: {
                    args: Prisma.MS_PESSOATRANSPORTADORFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>[];
                };
                create: {
                    args: Prisma.MS_PESSOATRANSPORTADORCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                createMany: {
                    args: Prisma.MS_PESSOATRANSPORTADORCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_PESSOATRANSPORTADORDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                update: {
                    args: Prisma.MS_PESSOATRANSPORTADORUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_PESSOATRANSPORTADORDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_PESSOATRANSPORTADORUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_PESSOATRANSPORTADORUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_PESSOATRANSPORTADORPayload>;
                };
                aggregate: {
                    args: Prisma.MS_PESSOATRANSPORTADORAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_PESSOATRANSPORTADOR>;
                };
                groupBy: {
                    args: Prisma.MS_PESSOATRANSPORTADORGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOATRANSPORTADORGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_PESSOATRANSPORTADORCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_PESSOATRANSPORTADORCountAggregateOutputType> | number;
                };
            };
        };
        MS_SEXOPESSOA: {
            payload: Prisma.$MS_SEXOPESSOAPayload<ExtArgs>;
            fields: Prisma.MS_SEXOPESSOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_SEXOPESSOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_SEXOPESSOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_SEXOPESSOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_SEXOPESSOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                findMany: {
                    args: Prisma.MS_SEXOPESSOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>[];
                };
                create: {
                    args: Prisma.MS_SEXOPESSOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                createMany: {
                    args: Prisma.MS_SEXOPESSOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_SEXOPESSOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                update: {
                    args: Prisma.MS_SEXOPESSOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_SEXOPESSOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_SEXOPESSOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_SEXOPESSOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SEXOPESSOAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_SEXOPESSOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_SEXOPESSOA>;
                };
                groupBy: {
                    args: Prisma.MS_SEXOPESSOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_SEXOPESSOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_SEXOPESSOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_SEXOPESSOACountAggregateOutputType> | number;
                };
            };
        };
        MS_SITUACAOPESSOAJURIDICA: {
            payload: Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>;
            fields: Prisma.MS_SITUACAOPESSOAJURIDICAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                findMany: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>[];
                };
                create: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                createMany: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                update: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_SITUACAOPESSOAJURIDICA>;
                };
                groupBy: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_SITUACAOPESSOAJURIDICAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_SITUACAOPESSOAJURIDICACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_SITUACAOPESSOAJURIDICACountAggregateOutputType> | number;
                };
            };
        };
        MS_STATUSPESSOA: {
            payload: Prisma.$MS_STATUSPESSOAPayload<ExtArgs>;
            fields: Prisma.MS_STATUSPESSOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_STATUSPESSOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_STATUSPESSOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_STATUSPESSOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_STATUSPESSOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                findMany: {
                    args: Prisma.MS_STATUSPESSOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>[];
                };
                create: {
                    args: Prisma.MS_STATUSPESSOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                createMany: {
                    args: Prisma.MS_STATUSPESSOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_STATUSPESSOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                update: {
                    args: Prisma.MS_STATUSPESSOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_STATUSPESSOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_STATUSPESSOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_STATUSPESSOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_STATUSPESSOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_STATUSPESSOA>;
                };
                groupBy: {
                    args: Prisma.MS_STATUSPESSOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_STATUSPESSOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOACountAggregateOutputType> | number;
                };
            };
        };
        MS_STATUSPESSOACONTATO: {
            payload: Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>;
            fields: Prisma.MS_STATUSPESSOACONTATOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_STATUSPESSOACONTATOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_STATUSPESSOACONTATOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                findFirst: {
                    args: Prisma.MS_STATUSPESSOACONTATOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_STATUSPESSOACONTATOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                findMany: {
                    args: Prisma.MS_STATUSPESSOACONTATOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>[];
                };
                create: {
                    args: Prisma.MS_STATUSPESSOACONTATOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                createMany: {
                    args: Prisma.MS_STATUSPESSOACONTATOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_STATUSPESSOACONTATODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                update: {
                    args: Prisma.MS_STATUSPESSOACONTATOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_STATUSPESSOACONTATODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_STATUSPESSOACONTATOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_STATUSPESSOACONTATOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOACONTATOPayload>;
                };
                aggregate: {
                    args: Prisma.MS_STATUSPESSOACONTATOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_STATUSPESSOACONTATO>;
                };
                groupBy: {
                    args: Prisma.MS_STATUSPESSOACONTATOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOACONTATOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_STATUSPESSOACONTATOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOACONTATOCountAggregateOutputType> | number;
                };
            };
        };
        MS_STATUSPESSOAENDERECO: {
            payload: Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>;
            fields: Prisma.MS_STATUSPESSOAENDERECOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_STATUSPESSOAENDERECOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_STATUSPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                findFirst: {
                    args: Prisma.MS_STATUSPESSOAENDERECOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_STATUSPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                findMany: {
                    args: Prisma.MS_STATUSPESSOAENDERECOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>[];
                };
                create: {
                    args: Prisma.MS_STATUSPESSOAENDERECOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                createMany: {
                    args: Prisma.MS_STATUSPESSOAENDERECOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_STATUSPESSOAENDERECODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                update: {
                    args: Prisma.MS_STATUSPESSOAENDERECOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_STATUSPESSOAENDERECODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_STATUSPESSOAENDERECOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_STATUSPESSOAENDERECOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
                };
                aggregate: {
                    args: Prisma.MS_STATUSPESSOAENDERECOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_STATUSPESSOAENDERECO>;
                };
                groupBy: {
                    args: Prisma.MS_STATUSPESSOAENDERECOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOAENDERECOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_STATUSPESSOAENDERECOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_STATUSPESSOAENDERECOCountAggregateOutputType> | number;
                };
            };
        };
        MS_TIPOINATIVACAOPESSOA: {
            payload: Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>;
            fields: Prisma.MS_TIPOINATIVACAOPESSOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                findMany: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>[];
                };
                create: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                createMany: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                update: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_TIPOINATIVACAOPESSOA>;
                };
                groupBy: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOINATIVACAOPESSOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_TIPOINATIVACAOPESSOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOINATIVACAOPESSOACountAggregateOutputType> | number;
                };
            };
        };
        MS_TIPOPESSOA: {
            payload: Prisma.$MS_TIPOPESSOAPayload<ExtArgs>;
            fields: Prisma.MS_TIPOPESSOAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_TIPOPESSOAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_TIPOPESSOAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_TIPOPESSOAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_TIPOPESSOAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                findMany: {
                    args: Prisma.MS_TIPOPESSOAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>[];
                };
                create: {
                    args: Prisma.MS_TIPOPESSOACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                createMany: {
                    args: Prisma.MS_TIPOPESSOACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_TIPOPESSOADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                update: {
                    args: Prisma.MS_TIPOPESSOAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_TIPOPESSOADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_TIPOPESSOAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_TIPOPESSOAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_TIPOPESSOAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_TIPOPESSOA>;
                };
                groupBy: {
                    args: Prisma.MS_TIPOPESSOAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_TIPOPESSOACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOACountAggregateOutputType> | number;
                };
            };
        };
        MS_TIPOPESSOAENDERECO: {
            payload: Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>;
            fields: Prisma.MS_TIPOPESSOAENDERECOFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_TIPOPESSOAENDERECOFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_TIPOPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                findFirst: {
                    args: Prisma.MS_TIPOPESSOAENDERECOFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_TIPOPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                findMany: {
                    args: Prisma.MS_TIPOPESSOAENDERECOFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>[];
                };
                create: {
                    args: Prisma.MS_TIPOPESSOAENDERECOCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                createMany: {
                    args: Prisma.MS_TIPOPESSOAENDERECOCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_TIPOPESSOAENDERECODeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                update: {
                    args: Prisma.MS_TIPOPESSOAENDERECOUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_TIPOPESSOAENDERECODeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_TIPOPESSOAENDERECOUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_TIPOPESSOAENDERECOUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
                };
                aggregate: {
                    args: Prisma.MS_TIPOPESSOAENDERECOAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_TIPOPESSOAENDERECO>;
                };
                groupBy: {
                    args: Prisma.MS_TIPOPESSOAENDERECOGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOAENDERECOGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_TIPOPESSOAENDERECOCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOAENDERECOCountAggregateOutputType> | number;
                };
            };
        };
        MS_TIPOPESSOAOCORRENCIA: {
            payload: Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>;
            fields: Prisma.MS_TIPOPESSOAOCORRENCIAFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                findFirst: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                findMany: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>[];
                };
                create: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIACreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                createMany: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIACreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                delete: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIADeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                update: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                deleteMany: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIADeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                upsert: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
                };
                aggregate: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMS_TIPOPESSOAOCORRENCIA>;
                };
                groupBy: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIAGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOAOCORRENCIAGroupByOutputType>[];
                };
                count: {
                    args: Prisma.MS_TIPOPESSOAOCORRENCIACountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MS_TIPOPESSOAOCORRENCIACountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
    readonly Snapshot: "Snapshot";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const OP_VIAGEMScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly CENTROCUSTO: "CENTROCUSTO";
    readonly PROJETO: "PROJETO";
    readonly EHOBRIGATORIOTABELACLIENTE: "EHOBRIGATORIOTABELACLIENTE";
    readonly EHBAIXARMERCADORIA: "EHBAIXARMERCADORIA";
    readonly TERMINALCOLETAVAZIO: "TERMINALCOLETAVAZIO";
    readonly TERMINALENTREGAVAZIO: "TERMINALENTREGAVAZIO";
    readonly EHOBRIGATORIOTERMINALCOLETA: "EHOBRIGATORIOTERMINALCOLETA";
    readonly EHOBRIGATORIOTERMINALENTREGA: "EHOBRIGATORIOTERMINALENTREGA";
    readonly EHPERMITETERMINALCOLETA: "EHPERMITETERMINALCOLETA";
    readonly EHPERMITETERMINALENTREGA: "EHPERMITETERMINALENTREGA";
    readonly EHOBRIGATORIOVALEPEDAGIO: "EHOBRIGATORIOVALEPEDAGIO";
    readonly EHINFORMARVALEPEDAGIO: "EHINFORMARVALEPEDAGIO";
    readonly EHMDFESUBCONTRATADOCIOT: "EHMDFESUBCONTRATADOCIOT";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly EMPRESA: "EMPRESA";
    readonly NUMERO: "NUMERO";
    readonly DATA: "DATA";
    readonly DATAINICIO: "DATAINICIO";
    readonly DATATERMINO: "DATATERMINO";
    readonly TIPO: "TIPO";
    readonly VEICULO: "VEICULO";
    readonly MOTORISTA: "MOTORISTA";
    readonly BENEFICIARIO: "BENEFICIARIO";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly APROVACAOCADASTRO: "APROVACAOCADASTRO";
    readonly EHSUGERIRMARCADOR: "EHSUGERIRMARCADOR";
    readonly EHDESGASTE: "EHDESGASTE";
    readonly PERCURSO: "PERCURSO";
    readonly EHOBRIGATORIOPERCURSO: "EHOBRIGATORIOPERCURSO";
    readonly EHOBRIGATORIOROTA: "EHOBRIGATORIOROTA";
    readonly EHVIAGEMVAZIA: "EHVIAGEMVAZIA";
    readonly EHNAOGERAACERTOVIAGEM: "EHNAOGERAACERTOVIAGEM";
    readonly DURACAO: "DURACAO";
    readonly DISTANCIAPREVISTA: "DISTANCIAPREVISTA";
    readonly MUNICIPIOORIGEM: "MUNICIPIOORIGEM";
    readonly MUNICIPIODESTINO: "MUNICIPIODESTINO";
    readonly PREENCHERMUNICIPIODESTINO: "PREENCHERMUNICIPIODESTINO";
    readonly PREENCHERMUNICIPIOORIGEM: "PREENCHERMUNICIPIOORIGEM";
    readonly DISTANCIAREALIZADA: "DISTANCIAREALIZADA";
    readonly EHEFETUARACOPLAGEM: "EHEFETUARACOPLAGEM";
    readonly ACOPLAGEM: "ACOPLAGEM";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly EHADIANTAMENTO: "EHADIANTAMENTO";
    readonly EHSERVICO: "EHSERVICO";
    readonly EHDESPESA: "EHDESPESA";
    readonly EHABASTECIMENTO: "EHABASTECIMENTO";
    readonly EHORDEMSERVICO: "EHORDEMSERVICO";
    readonly GERARACERTOVIAGEM: "GERARACERTOVIAGEM";
    readonly EHGERAACERTOVIAGEMAUTOMATICO: "EHGERAACERTOVIAGEMAUTOMATICO";
    readonly EHALTERARMUNICIPIO: "EHALTERARMUNICIPIO";
    readonly EHOBRIGATORIOMARCADOR: "EHOBRIGATORIOMARCADOR";
    readonly EHNAODISTANCIAZERADA: "EHNAODISTANCIAZERADA";
    readonly CODIGOROTAIDA: "CODIGOROTAIDA";
    readonly EHBLOQUEARORIGEMDESTINO: "EHBLOQUEARORIGEMDESTINO";
    readonly EHPERMITEALTERARTIPOVEICULO: "EHPERMITEALTERARTIPOVEICULO";
    readonly EHOBRIGATORIOINFORMARTIPOOCORR: "EHOBRIGATORIOINFORMARTIPOOCORR";
    readonly ULTIMAPOSICAOVEICULO: "ULTIMAPOSICAOVEICULO";
    readonly EHOBRIGATORIOOCORRENCIACHEGADA: "EHOBRIGATORIOOCORRENCIACHEGADA";
    readonly EHMOVIMENTARSTATUSOPERACIONAL: "EHMOVIMENTARSTATUSOPERACIONAL";
    readonly PESOCUBADO: "PESOCUBADO";
    readonly EHVALIDARBAIXA: "EHVALIDARBAIXA";
    readonly NUMEROEIXOS: "NUMEROEIXOS";
    readonly OBSERVACAOFISCAL: "OBSERVACAOFISCAL";
    readonly EHUTILIZAINTEGRACAOVALEPEDAGIO: "EHUTILIZAINTEGRACAOVALEPEDAGIO";
    readonly EHCAPTURARVALORPEDAGIO: "EHCAPTURARVALORPEDAGIO";
    readonly EHPROPRIOCAPTURARVALORPEDAGIO: "EHPROPRIOCAPTURARVALORPEDAGIO";
    readonly PRIORIDADE: "PRIORIDADE";
    readonly EHCOMPOSICAO: "EHCOMPOSICAO";
    readonly TABELA: "TABELA";
    readonly LISTA: "LISTA";
    readonly VALORRECEITAEXTRA: "VALORRECEITAEXTRA";
    readonly VALORSERVICO: "VALORSERVICO";
    readonly VALORADIANTAMENTO: "VALORADIANTAMENTO";
    readonly VALORCOMPOSICAO: "VALORCOMPOSICAO";
    readonly VALORDESPESA: "VALORDESPESA";
    readonly VALORABASTECIMENTO: "VALORABASTECIMENTO";
    readonly VALORORDEMSERVICO: "VALORORDEMSERVICO";
    readonly VALORREEMBOLSO: "VALORREEMBOLSO";
    readonly PAGAMENTO: "PAGAMENTO";
    readonly EHTABELAPRECOCLIENTE: "EHTABELAPRECOCLIENTE";
    readonly EHALTERARTABELAPRECO: "EHALTERARTABELAPRECO";
    readonly CLIENTE: "CLIENTE";
    readonly TIPOVEICULO: "TIPOVEICULO";
    readonly NATUREZATRANSPORTE: "NATUREZATRANSPORTE";
    readonly VOLUME: "VOLUME";
    readonly EHRECEITA: "EHRECEITA";
    readonly PERCURSOTRAJETO: "PERCURSOTRAJETO";
    readonly POSICAOVEICULO: "POSICAOVEICULO";
    readonly FILIAL: "FILIAL";
    readonly FILIALDESTINO: "FILIALDESTINO";
    readonly ROTA: "ROTA";
    readonly QUANTIDADEVOLUME: "QUANTIDADEVOLUME";
    readonly PESO: "PESO";
    readonly VALORMERCADORIA: "VALORMERCADORIA";
    readonly VALORFRETE: "VALORFRETE";
    readonly DATAPREVISAOTERMINO: "DATAPREVISAOTERMINO";
    readonly DATAPREVISAOINICIO: "DATAPREVISAOINICIO";
    readonly EHGERADOPELAORDEMFRETE: "EHGERADOPELAORDEMFRETE";
    readonly TIPOTRANSPORTEFRACIONADO: "TIPOTRANSPORTEFRACIONADO";
    readonly TIPOTRANSPORTE: "TIPOTRANSPORTE";
    readonly EHEFETUACHEGADAAOEMITIR: "EHEFETUACHEGADAAOEMITIR";
    readonly EHEFETUAAOEMITIR: "EHEFETUAAOEMITIR";
    readonly EHPERMITIRVIAGEMSEMITEMTABELA: "EHPERMITIRVIAGEMSEMITEMTABELA";
    readonly PROPRIEDADEVEICULO: "PROPRIEDADEVEICULO";
    readonly EHOBRIGATORIOCENTROCUSTO: "EHOBRIGATORIOCENTROCUSTO";
    readonly EHPODEALTERARCENTRCUSTOPROJETO: "EHPODEALTERARCENTRCUSTOPROJETO";
    readonly RNTRC: "RNTRC";
    readonly EHOBRIGATORIOMOTORISTA: "EHOBRIGATORIOMOTORISTA";
    readonly EHOBRIGATORIOVEICULO: "EHOBRIGATORIOVEICULO";
    readonly EHOBRIGATORIODOCUMENTACAO: "EHOBRIGATORIODOCUMENTACAO";
    readonly EHAGRUPAMENTODESTINO: "EHAGRUPAMENTODESTINO";
    readonly EHOBRIGATORIOINTERNACIONAL: "EHOBRIGATORIOINTERNACIONAL";
    readonly EHOBRIGATORIOMANIFESTO: "EHOBRIGATORIOMANIFESTO";
    readonly EHLIBERASEMCOMPOSICAO: "EHLIBERASEMCOMPOSICAO";
    readonly EHPERMITEACERTOCOMPLEMENTAR: "EHPERMITEACERTOCOMPLEMENTAR";
    readonly EHLIBERADOALTERARVALOR: "EHLIBERADOALTERARVALOR";
    readonly EHVALORPENDENTEACERTO: "EHVALORPENDENTEACERTO";
    readonly PESSOAVINCULADA: "PESSOAVINCULADA";
    readonly EHCANCELARCOTACAO: "EHCANCELARCOTACAO";
    readonly CARREGAMENTO: "CARREGAMENTO";
    readonly EHGERARCARREGAMENTO: "EHGERARCARREGAMENTO";
    readonly EHDISPONIVELAPP: "EHDISPONIVELAPP";
    readonly EHNUMEROCONTROLEORDEM: "EHNUMEROCONTROLEORDEM";
    readonly MOTIVOCANCELAMENTOOLD: "MOTIVOCANCELAMENTOOLD";
    readonly TIPOFROTA: "TIPOFROTA";
    readonly OBSERVACAOCANCELAMENTO: "OBSERVACAOCANCELAMENTO";
    readonly EHLIBERADOGERARACERTOVIAGEM: "EHLIBERADOGERARACERTOVIAGEM";
    readonly VIAGEMEMBARCADOR: "VIAGEMEMBARCADOR";
    readonly EHRECALCULARGERARACERTO: "EHRECALCULARGERARACERTO";
    readonly EHREMOVERADIANTAMENTO: "EHREMOVERADIANTAMENTO";
    readonly EHVALIDARLIMITEVALOR: "EHVALIDARLIMITEVALOR";
    readonly EHTIPOVEICULOORDEM: "EHTIPOVEICULOORDEM";
    readonly VEICULOACOPLADO: "VEICULOACOPLADO";
    readonly EHIGNORARTIPOACOPLAMENTO: "EHIGNORARTIPOACOPLAMENTO";
    readonly EHNAOVALIDAPERIODOVIAGEM: "EHNAOVALIDAPERIODOVIAGEM";
    readonly PROGRAMACAO: "PROGRAMACAO";
    readonly EHTIPOVEICULOMANUAL: "EHTIPOVEICULOMANUAL";
    readonly EHTIPOVEICULOOBRIGATORIO: "EHTIPOVEICULOOBRIGATORIO";
    readonly EHAUTOMATIZARANTESCOMPOSICAO: "EHAUTOMATIZARANTESCOMPOSICAO";
    readonly EHGERARMDFE: "EHGERARMDFE";
    readonly EHPEDAGIOPADRAO: "EHPEDAGIOPADRAO";
    readonly EMISSAO: "EMISSAO";
    readonly MANIFESTACAO: "MANIFESTACAO";
    readonly MUNICIPIOTERMINO: "MUNICIPIOTERMINO";
    readonly EHACERTOVIAGEMINDIVIDUAL: "EHACERTOVIAGEMINDIVIDUAL";
    readonly EHALTERARPEDAGIO: "EHALTERARPEDAGIO";
    readonly EHPEDAGIOCONSULTADO: "EHPEDAGIOCONSULTADO";
    readonly NUMEROEIXOSVOLTA: "NUMEROEIXOSVOLTA";
    readonly EHALTERARNUMEROEIXOS: "EHALTERARNUMEROEIXOS";
    readonly EHPERMITEEMPRESTIMO: "EHPERMITEEMPRESTIMO";
    readonly EHGERENCIAMENTORISCO: "EHGERENCIAMENTORISCO";
    readonly EHGERENCIAMENTOEFETUADO: "EHGERENCIAMENTOEFETUADO";
    readonly EHCALCULARPREVISAO: "EHCALCULARPREVISAO";
    readonly EHUTILIZARCOMPOSICAOCUSTO: "EHUTILIZARCOMPOSICAOCUSTO";
    readonly EHINFORMARCOMPOSICAOCUSTO: "EHINFORMARCOMPOSICAOCUSTO";
    readonly CODIGOPONTOPASSAGEM: "CODIGOPONTOPASSAGEM";
    readonly CODIGOPONTOPASSAGEMRETORNO: "CODIGOPONTOPASSAGEMRETORNO";
    readonly EHRESPONSAVELPEDAGIO: "EHRESPONSAVELPEDAGIO";
    readonly EHFORMAPAGAMENTOPEDAGIO: "EHFORMAPAGAMENTOPEDAGIO";
    readonly EHVALORPEDAGIO: "EHVALORPEDAGIO";
    readonly EHMULTIPLOPEDAGIO: "EHMULTIPLOPEDAGIO";
    readonly EHVALORORDEM: "EHVALORORDEM";
    readonly FILIALORDEMFRETE: "FILIALORDEMFRETE";
    readonly EHPROGRAMACAOFINANCEIRA: "EHPROGRAMACAOFINANCEIRA";
    readonly EMPRESAORDEMFRETE: "EMPRESAORDEMFRETE";
    readonly EHOBRIGATORIOCOMPOSICAOCUSTO: "EHOBRIGATORIOCOMPOSICAOCUSTO";
    readonly EHMANIFESTARAOEMITIR: "EHMANIFESTARAOEMITIR";
    readonly EHPERMITIROUTRAEMPRESADESPESA: "EHPERMITIROUTRAEMPRESADESPESA";
    readonly EHPERMITIROCORRENCIAINICIOFIM: "EHPERMITIROCORRENCIAINICIOFIM";
    readonly UNIDADENEGOCIO: "UNIDADENEGOCIO";
    readonly PESSOACENTROCUSTO: "PESSOACENTROCUSTO";
    readonly EHOBRIGATORIOUNIDADENEGOCIO: "EHOBRIGATORIOUNIDADENEGOCIO";
    readonly CONTEINER: "CONTEINER";
    readonly EHPERMITIRMESMAPREVISAO: "EHPERMITIRMESMAPREVISAO";
    readonly EHPERMITIRDOCUMENTOPARCIAL: "EHPERMITIRDOCUMENTOPARCIAL";
    readonly EHINCLUIRROMANEIOEMANDAMENTO: "EHINCLUIRROMANEIOEMANDAMENTO";
    readonly EVENTOAPROVACAO: "EVENTOAPROVACAO";
    readonly GRUPOETAPA: "GRUPOETAPA";
    readonly PERCURSOFILIALSAIDA: "PERCURSOFILIALSAIDA";
    readonly EHACERTOSEMCOMPOSICAO: "EHACERTOSEMCOMPOSICAO";
    readonly EHMANIFESTARINTRAMUNICIPAL: "EHMANIFESTARINTRAMUNICIPAL";
    readonly TRANSPORTADORAORDEMFRETE: "TRANSPORTADORAORDEMFRETE";
    readonly TABELAORDEMFRETE: "TABELAORDEMFRETE";
    readonly LISTAORDEMFRETE: "LISTAORDEMFRETE";
    readonly EHCALCULARPEDAGIOPRACA: "EHCALCULARPEDAGIOPRACA";
    readonly EHCONTROLARCHEGADALOCAL: "EHCONTROLARCHEGADALOCAL";
    readonly EHCONTROLARENTRADALOCAL: "EHCONTROLARENTRADALOCAL";
    readonly EHCONTROLARSAIDALOCAL: "EHCONTROLARSAIDALOCAL";
    readonly EHCONTROLARINICIOCARGADESCARGA: "EHCONTROLARINICIOCARGADESCARGA";
    readonly EHCONTROLATERMINOCARGADESCARGA: "EHCONTROLATERMINOCARGADESCARGA";
    readonly EHEFETUARACOPLAGEMAGREGADO: "EHEFETUARACOPLAGEMAGREGADO";
    readonly EHEFETUARACOPLAGEMTERCEIRO: "EHEFETUARACOPLAGEMTERCEIRO";
    readonly EHEFETUARACOPLAGEMPROPRIO: "EHEFETUARACOPLAGEMPROPRIO";
    readonly EHOBRIGATORIODURACAOPERCURSO: "EHOBRIGATORIODURACAOPERCURSO";
    readonly MOTIVOCANCELAMENTO: "MOTIVOCANCELAMENTO";
    readonly EHEMITIRAUTOMATICAMENTE: "EHEMITIRAUTOMATICAMENTE";
    readonly EHGERARACERTOEMPRESADOCUMENTO: "EHGERARACERTOEMPRESADOCUMENTO";
    readonly DURACAOPREVISTA: "DURACAOPREVISTA";
    readonly EHCONTROLARMOVIMENTACAOLOCAL: "EHCONTROLARMOVIMENTACAOLOCAL";
    readonly PROXIMACOLETA: "PROXIMACOLETA";
    readonly PROXIMAENTREGA: "PROXIMAENTREGA";
    readonly PROXIMOLOCAL: "PROXIMOLOCAL";
    readonly PROGRESSOVIAGEM: "PROGRESSOVIAGEM";
    readonly FILIALATUAL: "FILIALATUAL";
    readonly EHVINCULARFILIALRELACIONADA: "EHVINCULARFILIALRELACIONADA";
    readonly DATACOLETATERMINALVAZIO: "DATACOLETATERMINALVAZIO";
    readonly DATAENTREGATERMINALVAZIO: "DATAENTREGATERMINALVAZIO";
    readonly EHPERMITEDATACOLETAENTREGA: "EHPERMITEDATACOLETAENTREGA";
    readonly EHRECALCULARMUNICIPIOTERMINO: "EHRECALCULARMUNICIPIOTERMINO";
    readonly PERCURSOTERMINO: "PERCURSOTERMINO";
    readonly PERCURSOTRAJETOTERMINO: "PERCURSOTRAJETOTERMINO";
    readonly PESSOALOCALORIGEM: "PESSOALOCALORIGEM";
    readonly PESSOALOCALDESTINO: "PESSOALOCALDESTINO";
    readonly ENDERECOLOCALORIGEM: "ENDERECOLOCALORIGEM";
    readonly ENDERECOLOCALDESTINO: "ENDERECOLOCALDESTINO";
    readonly EHRECALCULARCUSTO: "EHRECALCULARCUSTO";
    readonly REDESPACHADOR: "REDESPACHADOR";
    readonly VALORCOMPOSICAOCUSTO: "VALORCOMPOSICAOCUSTO";
    readonly SITUACAOENTREGA: "SITUACAOENTREGA";
    readonly EHVISUALIZARMAPA: "EHVISUALIZARMAPA";
    readonly GEOMETRIATRAJETO: "GEOMETRIATRAJETO";
    readonly EHRECALCULARCOMPOSICAOTERMINO: "EHRECALCULARCOMPOSICAOTERMINO";
    readonly EHOBRIGATORIODOCUMENTO: "EHOBRIGATORIODOCUMENTO";
    readonly EHNAOENCERRARMDFECHEGADA: "EHNAOENCERRARMDFECHEGADA";
    readonly EHPERMITEALTERARBENEFICIARIO: "EHPERMITEALTERARBENEFICIARIO";
    readonly EHNAOALTERAMARCADORSAIDA: "EHNAOALTERAMARCADORSAIDA";
    readonly EHPERMITIRMARCADORAPP: "EHPERMITIRMARCADORAPP";
    readonly LINKMAPA: "LINKMAPA";
    readonly EHGERARMIC: "EHGERARMIC";
    readonly MANIFESTACAOINTERNACIONAL: "MANIFESTACAOINTERNACIONAL";
    readonly MONITORAMENTO: "MONITORAMENTO";
    readonly EHMULTIPLOMOTORISTA: "EHMULTIPLOMOTORISTA";
    readonly EHPERMITEPEDAGIOCOLETALOTACAO: "EHPERMITEPEDAGIOCOLETALOTACAO";
    readonly NUMEROCONTROLE: "NUMEROCONTROLE";
    readonly NUMEROEIXOSIDA: "NUMEROEIXOSIDA";
    readonly CODIGOROTAVOLTA: "CODIGOROTAVOLTA";
    readonly VALORFRETELIQUIDO: "VALORFRETELIQUIDO";
    readonly TIPOCARGA: "TIPOCARGA";
    readonly EHRETORNOVAZIO: "EHRETORNOVAZIO";
    readonly EHTRANSPORTEALTODESEMPENHO: "EHTRANSPORTEALTODESEMPENHO";
    readonly EHOBRIGATORIOFRETEMINIMO: "EHOBRIGATORIOFRETEMINIMO";
    readonly EHBLOQUEARINFERIORFRETEMINIMO: "EHBLOQUEARINFERIORFRETEMINIMO";
    readonly EHCALCULARPREVISAOROMANEIOITEM: "EHCALCULARPREVISAOROMANEIOITEM";
    readonly OPERACAOTRANSPORTE: "OPERACAOTRANSPORTE";
    readonly EHPERMITEOPERACAOTRANSPORTE: "EHPERMITEOPERACAOTRANSPORTE";
    readonly EHATUALIZARGEOLOCALIZACAO: "EHATUALIZARGEOLOCALIZACAO";
};
export type OP_VIAGEMScalarFieldEnum = (typeof OP_VIAGEMScalarFieldEnum)[keyof typeof OP_VIAGEMScalarFieldEnum];
export declare const OP_STATUSVIAGEMScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly IMAGEM: "IMAGEM";
};
export type OP_STATUSVIAGEMScalarFieldEnum = (typeof OP_STATUSVIAGEMScalarFieldEnum)[keyof typeof OP_STATUSVIAGEMScalarFieldEnum];
export declare const OP_VIAGEMLOGScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly DATA: "DATA";
    readonly USUARIO: "USUARIO";
    readonly TIPOMENSAGEM: "TIPOMENSAGEM";
    readonly COMPLEMENTO: "COMPLEMENTO";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly VIAGEM: "VIAGEM";
};
export type OP_VIAGEMLOGScalarFieldEnum = (typeof OP_VIAGEMLOGScalarFieldEnum)[keyof typeof OP_VIAGEMLOGScalarFieldEnum];
export declare const IN_INTEGRACAOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly REFERENCIAORIGEM: "REFERENCIAORIGEM";
    readonly ULTIMATENTATIVA: "ULTIMATENTATIVA";
    readonly SEQUENCIAL: "SEQUENCIAL";
    readonly PROCESSADOPOR: "PROCESSADOPOR";
    readonly DATAULTIMOLOCK: "DATAULTIMOLOCK";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly ORIGEM: "ORIGEM";
    readonly HANDLEORIGEM: "HANDLEORIGEM";
    readonly NUMEROORIGEM: "NUMEROORIGEM";
    readonly DATA: "DATA";
    readonly CANALINTEGRACAO: "CANALINTEGRACAO";
    readonly EMPRESA: "EMPRESA";
    readonly EMPRESAWEBSERVICE: "EMPRESAWEBSERVICE";
    readonly EXPIRAEM: "EXPIRAEM";
    readonly FILIAL: "FILIAL";
    readonly MODELOMENSAGEM: "MODELOMENSAGEM";
    readonly OBJETO: "OBJETO";
    readonly PROCESSOINTERNO: "PROCESSOINTERNO";
    readonly PROCESSOTABELA: "PROCESSOTABELA";
    readonly PROCESSOWEBSERVICE: "PROCESSOWEBSERVICE";
    readonly PRODUTOWEBSERVICE: "PRODUTOWEBSERVICE";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly TIPOINTEGRACAO: "TIPOINTEGRACAO";
    readonly NUMERO: "NUMERO";
    readonly PROXIMATENTATIVA: "PROXIMATENTATIVA";
    readonly TIPOORIGEM: "TIPOORIGEM";
    readonly PROCESSADOEM: "PROCESSADOEM";
    readonly QUANTIDADETENTATIVA: "QUANTIDADETENTATIVA";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly TIPOCONFIGURACAO: "TIPOCONFIGURACAO";
    readonly AGENDAMENTO: "AGENDAMENTO";
    readonly GRUPOAVISOFALHA: "GRUPOAVISOFALHA";
    readonly MODELOMENSAGEMFALHA: "MODELOMENSAGEMFALHA";
    readonly TIPOEVENTOINTERNO: "TIPOEVENTOINTERNO";
    readonly EVENTOINTERNO: "EVENTOINTERNO";
    readonly NOME: "NOME";
    readonly INTEGRACAOORIGEM: "INTEGRACAOORIGEM";
    readonly REGISTROTABELA: "REGISTROTABELA";
    readonly ARQUIVO: "ARQUIVO";
    readonly TIPOPROCESSAMENTO: "TIPOPROCESSAMENTO";
    readonly PROCESSOFORMULARIO: "PROCESSOFORMULARIO";
    readonly ERRO: "ERRO";
    readonly MENSAGEMERRO: "MENSAGEMERRO";
    readonly WEBSERVICEOPERACAO: "WEBSERVICEOPERACAO";
    readonly COMANDOSQL: "COMANDOSQL";
    readonly EHCOMPACTARARQUIVO: "EHCOMPACTARARQUIVO";
    readonly SUBDIRETORIO: "SUBDIRETORIO";
    readonly EHMOVERARQUIVOPARASUBDIRETORIO: "EHMOVERARQUIVOPARASUBDIRETORIO";
    readonly EHREMOVERARQUIVOSERVIDOR: "EHREMOVERARQUIVOSERVIDOR";
    readonly DIRETORIO: "DIRETORIO";
    readonly DESTINATARIOEMAIL: "DESTINATARIOEMAIL";
    readonly ASSUNTOEMAIL: "ASSUNTOEMAIL";
    readonly MENSAGEMEMAIL: "MENSAGEMEMAIL";
    readonly ERROINTEGRACAO: "ERROINTEGRACAO";
    readonly EVENTOINTERNOERRO: "EVENTOINTERNOERRO";
    readonly AGENDAMENTOERRO: "AGENDAMENTOERRO";
    readonly DATAINICIOEXECUCAO: "DATAINICIOEXECUCAO";
    readonly DATATERMINOEXECUCAO: "DATATERMINOEXECUCAO";
    readonly TEMPOEXECUCAODECIMAL: "TEMPOEXECUCAODECIMAL";
    readonly TEMPOEXECUCAO: "TEMPOEXECUCAO";
    readonly PID: "PID";
    readonly EHEXECUTARPROXIMATENTATIVA: "EHEXECUTARPROXIMATENTATIVA";
    readonly PAGINA: "PAGINA";
    readonly EHOBRIGATORIO: "EHOBRIGATORIO";
    readonly WEBSERVICE: "WEBSERVICE";
    readonly WEBSERVICEPRODUTO: "WEBSERVICEPRODUTO";
    readonly WEBSERVICEPRODUTOPROCESSO: "WEBSERVICEPRODUTOPROCESSO";
    readonly PROCESSANDO: "PROCESSANDO";
    readonly ULTIMAATUALIZACAO: "ULTIMAATUALIZACAO";
    readonly EHRETORNOWEBSERVICE200: "EHRETORNOWEBSERVICE200";
    readonly URL: "URL";
};
export type IN_INTEGRACAOScalarFieldEnum = (typeof IN_INTEGRACAOScalarFieldEnum)[keyof typeof IN_INTEGRACAOScalarFieldEnum];
export declare const MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly CODIGO: "CODIGO";
};
export type MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum = (typeof MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum)[keyof typeof MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum];
export declare const MS_PESSOAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly SIGLA: "SIGLA";
    readonly EHPROSPECT: "EHPROSPECT";
    readonly EHEMPRESACONCORRENTE: "EHEMPRESACONCORRENTE";
    readonly CATEGORIAATIVIDADE: "CATEGORIAATIVIDADE";
    readonly PESSOAFUNCIONARIO: "PESSOAFUNCIONARIO";
    readonly RNTRC: "RNTRC";
    readonly ENDERECOFISCAL: "ENDERECOFISCAL";
    readonly EHGERACOMISSAOMOTORISTAACERTO: "EHGERACOMISSAOMOTORISTAACERTO";
    readonly PESSOACLIENTE: "PESSOACLIENTE";
    readonly PESSOAFORNECEDOR: "PESSOAFORNECEDOR";
    readonly PESSOAMOTORISTA: "PESSOAMOTORISTA";
    readonly CELULAR: "CELULAR";
    readonly EMAILDOCUMENTOTRANSPORTE: "EMAILDOCUMENTOTRANSPORTE";
    readonly CARTEIRAMOTORISTA: "CARTEIRAMOTORISTA";
    readonly MATRICULA: "MATRICULA";
    readonly EMAILDOCUMENTOELETRONICO: "EMAILDOCUMENTOELETRONICO";
    readonly EHGRUPOEMPRESARIAL: "EHGRUPOEMPRESARIAL";
    readonly EHTECNICOMANUTENCAO: "EHTECNICOMANUTENCAO";
    readonly VEICULO: "VEICULO";
    readonly CATEGORIARNTRC: "CATEGORIARNTRC";
    readonly INATIVACAOPESSOA: "INATIVACAOPESSOA";
    readonly NATUREZAJURIDICA: "NATUREZAJURIDICA";
    readonly EHEXPEDIDORRECEBEDOR: "EHEXPEDIDORRECEBEDOR";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly EHAGENTEVENDA: "EHAGENTEVENDA";
    readonly EHPRESTADORSERVICO: "EHPRESTADORSERVICO";
    readonly CODIGO: "CODIGO";
    readonly TIPO: "TIPO";
    readonly CNPJCPF: "CNPJCPF";
    readonly DATAINCLUSAO: "DATAINCLUSAO";
    readonly STATUS: "STATUS";
    readonly NOME: "NOME";
    readonly APELIDO: "APELIDO";
    readonly LOGRADOURO: "LOGRADOURO";
    readonly CLASSIFICACAOFISCAL: "CLASSIFICACAOFISCAL";
    readonly TELEFONE: "TELEFONE";
    readonly FAX: "FAX";
    readonly EMAIL: "EMAIL";
    readonly EHCLIENTE: "EHCLIENTE";
    readonly EHFORNECEDOR: "EHFORNECEDOR";
    readonly EHFUNCIONARIO: "EHFUNCIONARIO";
    readonly EHMOTORISTA: "EHMOTORISTA";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly STATUSDATA: "STATUSDATA";
    readonly APROVACAOCADASTRO: "APROVACAOCADASTRO";
    readonly EHCONSTRUTORA: "EHCONSTRUTORA";
    readonly EHPORTO: "EHPORTO";
    readonly CNAE: "CNAE";
    readonly PESSOAFILIAL: "PESSOAFILIAL";
    readonly CENTROCUSTO: "CENTROCUSTO";
    readonly PROJETO: "PROJETO";
    readonly CNPJCPFSEMMASCARA: "CNPJCPFSEMMASCARA";
    readonly EHISENTOINSCRICAOESTADUAL: "EHISENTOINSCRICAOESTADUAL";
    readonly C_HANDLE: "C_HANDLE";
    readonly EHEMPRESAPEQUENOPORTE: "EHEMPRESAPEQUENOPORTE";
    readonly INSCRICAOINSS: "INSCRICAOINSS";
    readonly EHOPTANTEPISCOFINSCUMULATIVO: "EHOPTANTEPISCOFINSCUMULATIVO";
    readonly EHENTIDADEFILANTROPICA: "EHENTIDADEFILANTROPICA";
    readonly RAMOATIVIDADE: "RAMOATIVIDADE";
    readonly SETORATIVIDADE: "SETORATIVIDADE";
    readonly CARTEIRAIDENTIDADE: "CARTEIRAIDENTIDADE";
    readonly ORGAOEMISSOR: "ORGAOEMISSOR";
    readonly ESTADOEMISSOR: "ESTADOEMISSOR";
    readonly DATANASCIMENTO: "DATANASCIMENTO";
    readonly SEXO: "SEXO";
    readonly ESTADOCIVIL: "ESTADOCIVIL";
    readonly DEPENDENTES: "DEPENDENTES";
    readonly CARTEIRATRABALHO: "CARTEIRATRABALHO";
    readonly DATAADMISSAO: "DATAADMISSAO";
    readonly NOMEPAI: "NOMEPAI";
    readonly NOMEMAE: "NOMEMAE";
    readonly NOMECONJUGE: "NOMECONJUGE";
    readonly LOCALTRABALHO: "LOCALTRABALHO";
    readonly EHORGAOPUBLICO: "EHORGAOPUBLICO";
    readonly EHCOOPERATIVA: "EHCOOPERATIVA";
    readonly EHOPTANTESIMPLESFEDERAL: "EHOPTANTESIMPLESFEDERAL";
    readonly EHOPTANTELUCROPRESUMIDO: "EHOPTANTELUCROPRESUMIDO";
    readonly INSCRICAOESTADUAL: "INSCRICAOESTADUAL";
    readonly INSCRICAOESTADUALSUBSTITUTO: "INSCRICAOESTADUALSUBSTITUTO";
    readonly INSCRICAOMUNICIPAL: "INSCRICAOMUNICIPAL";
    readonly SUFRAMA: "SUFRAMA";
    readonly OBSERVACAODOCUMENTO: "OBSERVACAODOCUMENTO";
    readonly EHREDESPACHADOR: "EHREDESPACHADOR";
    readonly EHCLIENTEINDIRETO: "EHCLIENTEINDIRETO";
    readonly EHPRESTADORSERVICOINDIRETO: "EHPRESTADORSERVICOINDIRETO";
    readonly PESSOATRANSPORTADOR: "PESSOATRANSPORTADOR";
    readonly EHARMADOR: "EHARMADOR";
    readonly EHDESPACHANTE: "EHDESPACHANTE";
    readonly EHAGENCIAMARITIMA: "EHAGENCIAMARITIMA";
    readonly EHTERMINAL: "EHTERMINAL";
    readonly INSCRICAOCRC: "INSCRICAOCRC";
    readonly INSCRICAOCRA: "INSCRICAOCRA";
    readonly GRUPOEMPRESARIAL: "GRUPOEMPRESARIAL";
    readonly EHTRANSPORTADOR: "EHTRANSPORTADOR";
    readonly UFCRC: "UFCRC";
    readonly VALIDADECRC: "VALIDADECRC";
    readonly EHCONSUMIDORFINAL: "EHCONSUMIDORFINAL";
    readonly MOEDA: "MOEDA";
    readonly EHALFANDEGA: "EHALFANDEGA";
    readonly CERTIFICADOIDONEIDADE: "CERTIFICADOIDONEIDADE";
    readonly EHEXPORTADOR: "EHEXPORTADOR";
    readonly EHIMPORTADOR: "EHIMPORTADOR";
    readonly EHFRONTEIRATERRESTRE: "EHFRONTEIRATERRESTRE";
    readonly EHAEROPORTO: "EHAEROPORTO";
    readonly DESPACHANTE: "DESPACHANTE";
    readonly AGENCIAMARITIMA: "AGENCIAMARITIMA";
    readonly ALFANDEGA: "ALFANDEGA";
    readonly PORTO: "PORTO";
    readonly FRONTEIRATERRESTRE: "FRONTEIRATERRESTRE";
    readonly CARTEIRAIDENTIDADEEMISSAO: "CARTEIRAIDENTIDADEEMISSAO";
    readonly EHNECESSARIOAJUSTE: "EHNECESSARIOAJUSTE";
    readonly PRIMEIRAHABILITACAO: "PRIMEIRAHABILITACAO";
    readonly ESCOLARIDADE: "ESCOLARIDADE";
    readonly NATURALIDADE: "NATURALIDADE";
    readonly REGISTROJUNTACOMERCIALESTADO: "REGISTROJUNTACOMERCIALESTADO";
    readonly DATAREGISTRO: "DATAREGISTRO";
    readonly EHCOOPERADO: "EHCOOPERADO";
    readonly EHAJUDANTEMOTORISTA: "EHAJUDANTEMOTORISTA";
    readonly EHINTERESSADOCOOPERADO: "EHINTERESSADOCOOPERADO";
    readonly INDICADORIE: "INDICADORIE";
    readonly DATADEMISSAO: "DATADEMISSAO";
    readonly TIPOCOTACAOMOEDA: "TIPOCOTACAOMOEDA";
    readonly EMPRESA: "EMPRESA";
    readonly PESSOAUNIDADENEGOCIO: "PESSOAUNIDADENEGOCIO";
    readonly DATASITUACAO: "DATASITUACAO";
    readonly SITUACAOCREDITO: "SITUACAOCREDITO";
    readonly LIMITECREDITO: "LIMITECREDITO";
    readonly CREDITOUTILIZADO: "CREDITOUTILIZADO";
    readonly PESSOACOOPERADO: "PESSOACOOPERADO";
    readonly EHMULTIPLOENDERECO: "EHMULTIPLOENDERECO";
    readonly FILIALINTERNARESPONSAVEL: "FILIALINTERNARESPONSAVEL";
    readonly PESSOAINTERNARESPONSAVEL: "PESSOAINTERNARESPONSAVEL";
    readonly SITUACAOPESSOAJURIDICA: "SITUACAOPESSOAJURIDICA";
    readonly PESSOACENTROCUSTO: "PESSOACENTROCUSTO";
    readonly EHAGREGADO: "EHAGREGADO";
    readonly EHPARCEIRO: "EHPARCEIRO";
    readonly EHUSUARIOTERCEIRO: "EHUSUARIOTERCEIRO";
    readonly TIPOUSUARIOTERCEIRO: "TIPOUSUARIOTERCEIRO";
    readonly TIPOEMPRESA: "TIPOEMPRESA";
    readonly PORTEEMPRESA: "PORTEEMPRESA";
    readonly REGIMETRIBUTARIOFEDERAL: "REGIMETRIBUTARIOFEDERAL";
    readonly EHCONTRIBUINTECPRB: "EHCONTRIBUINTECPRB";
    readonly DATACADASTRO: "DATACADASTRO";
    readonly CORRACA: "CORRACA";
    readonly MODALIDADEJORNADA: "MODALIDADEJORNADA";
    readonly FILIALFATURAMENTO: "FILIALFATURAMENTO";
    readonly EHPESSOACOMERCIOINDUSTRIAL: "EHPESSOACOMERCIOINDUSTRIAL";
    readonly EHEQUIPARADOTAC: "EHEQUIPARADOTAC";
    readonly CODIGOPARTICIPANTE: "CODIGOPARTICIPANTE";
};
export type MS_PESSOAScalarFieldEnum = (typeof MS_PESSOAScalarFieldEnum)[keyof typeof MS_PESSOAScalarFieldEnum];
export declare const MS_PESSOACLIENTEScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly CONDICAOPAGAMENTOFATURADO: "CONDICAOPAGAMENTOFATURADO";
    readonly BANCO: "BANCO";
    readonly PERCENTUALCOMISSAO: "PERCENTUALCOMISSAO";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly AGENTEVENDAS: "AGENTEVENDAS";
    readonly CATEGORIAFATURAMENTO: "CATEGORIAFATURAMENTO";
    readonly CONDICAOPAGAMENTO: "CONDICAOPAGAMENTO";
    readonly DOCUMENTOPORFATURA: "DOCUMENTOPORFATURA";
    readonly FORMAENVIOFATURA: "FORMAENVIOFATURA";
    readonly FORMAPAGAMENTO: "FORMAPAGAMENTO";
    readonly PERIODOFATURAMENTO: "PERIODOFATURAMENTO";
    readonly VALORMAXIMOFATURA: "VALORMAXIMOFATURA";
    readonly PESSOA: "PESSOA";
    readonly RELATORIO: "RELATORIO";
    readonly EHUTILIZARTABELAPRECOFAT: "EHUTILIZARTABELAPRECOFAT";
    readonly EHPERMITEAPENASUMAFATURA: "EHPERMITEAPENASUMAFATURA";
    readonly ALCADALIMITESEGURO: "ALCADALIMITESEGURO";
    readonly OCORRENCIATRANSPORTEAUTOMATICA: "OCORRENCIATRANSPORTEAUTOMATICA";
    readonly PESSOAARMAZENAGEM: "PESSOAARMAZENAGEM";
    readonly CONTATESOURARIA: "CONTATESOURARIA";
    readonly EHNAOAGRUPARDOCUMENTO: "EHNAOAGRUPARDOCUMENTO";
    readonly C_HANDLE: "C_HANDLE";
    readonly PESSOAFATURAMENTO: "PESSOAFATURAMENTO";
    readonly AREAATENDIMENTO: "AREAATENDIMENTO";
    readonly DATASITUACAO: "DATASITUACAO";
    readonly SITUACAOCREDITO: "SITUACAOCREDITO";
    readonly PERCENTUALMULTA: "PERCENTUALMULTA";
    readonly DIASCARENCIAMULTA: "DIASCARENCIAMULTA";
    readonly PERCENTUALMORA: "PERCENTUALMORA";
    readonly DIASCARENCIAMORA: "DIASCARENCIAMORA";
    readonly TIPOPALETEPADRAO: "TIPOPALETEPADRAO";
    readonly TIPOLOTEFATURA: "TIPOLOTEFATURA";
    readonly CONTABANCARIA: "CONTABANCARIA";
    readonly LIMITECREDITO: "LIMITECREDITO";
    readonly CREDITOUTILIZADO: "CREDITOUTILIZADO";
    readonly AGENTEVENDA: "AGENTEVENDA";
    readonly DURACAOCARGA: "DURACAOCARGA";
    readonly DURACAODESCARGA: "DURACAODESCARGA";
    readonly FILIALARMAZENAGEM: "FILIALARMAZENAGEM";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly ULTIMATRANSFERENCIAAGENTE: "ULTIMATRANSFERENCIAAGENTE";
};
export type MS_PESSOACLIENTEScalarFieldEnum = (typeof MS_PESSOACLIENTEScalarFieldEnum)[keyof typeof MS_PESSOACLIENTEScalarFieldEnum];
export declare const MS_PESSOACONTATOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly CELULAR: "CELULAR";
    readonly GRUPOENVIOAUTOMATICO: "GRUPOENVIOAUTOMATICO";
    readonly STATUSERRADO: "STATUSERRADO";
    readonly STATUSDATAOLD: "STATUSDATAOLD";
    readonly OPERADORA: "OPERADORA";
    readonly STATUSOLD: "STATUSOLD";
    readonly NOME: "NOME";
    readonly FUNCAO: "FUNCAO";
    readonly TELEFONE: "TELEFONE";
    readonly RAMAL: "RAMAL";
    readonly EMAIL: "EMAIL";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly PESSOA: "PESSOA";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly C_HANDLE: "C_HANDLE";
    readonly CONTATO: "CONTATO";
    readonly MUNICIPIO: "MUNICIPIO";
    readonly EHPRINCIPAL: "EHPRINCIPAL";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly EHFUNCAOAUTOMATICA: "EHFUNCAOAUTOMATICA";
};
export type MS_PESSOACONTATOScalarFieldEnum = (typeof MS_PESSOACONTATOScalarFieldEnum)[keyof typeof MS_PESSOACONTATOScalarFieldEnum];
export declare const MS_PESSOAENDERECOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly PESSOA: "PESSOA";
    readonly CEP: "CEP";
    readonly TIPOLOGRADOURO: "TIPOLOGRADOURO";
    readonly LOGRADOURO: "LOGRADOURO";
    readonly COMPLEMENTO: "COMPLEMENTO";
    readonly PAIS: "PAIS";
    readonly ESTADO: "ESTADO";
    readonly MUNICIPIO: "MUNICIPIO";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly C_LNGENDEREC: "C_LNGENDEREC";
    readonly BAIRRO: "BAIRRO";
    readonly NUMERO: "NUMERO";
    readonly TIPO: "TIPO";
    readonly DATAALTERACAO: "DATAALTERACAO";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly MOTIVO: "MOTIVO";
    readonly EHSEMNUMERO: "EHSEMNUMERO";
    readonly IMPORTADO: "IMPORTADO";
    readonly LATITUDE: "LATITUDE";
    readonly LONGITUDE: "LONGITUDE";
    readonly NOME: "NOME";
    readonly PESSOADOCUMENTACAO: "PESSOADOCUMENTACAO";
    readonly PESSOADOCUMENTACAOITEM: "PESSOADOCUMENTACAOITEM";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly EHNOMEMANUAL: "EHNOMEMANUAL";
    readonly MUNICIPIOIMPORTACAO: "MUNICIPIOIMPORTACAO";
    readonly ESTADOIMPORTACAO: "ESTADOIMPORTACAO";
    readonly PAISIMPORTACAO: "PAISIMPORTACAO";
    readonly CEPIMPORTACAO: "CEPIMPORTACAO";
    readonly TIPOLOGRADOUROIMPORTACAO: "TIPOLOGRADOUROIMPORTACAO";
    readonly BAIRROIMPORTACAO: "BAIRROIMPORTACAO";
    readonly ENDERECOIMPORTACAO: "ENDERECOIMPORTACAO";
    readonly ENDERECOIMPORTACAO2: "ENDERECOIMPORTACAO2";
    readonly CODIGOPAISIMPORTACAO: "CODIGOPAISIMPORTACAO";
    readonly SIGLAESTADOIMPORTACAO: "SIGLAESTADOIMPORTACAO";
    readonly CODIGOIBGEMUNICIPIOIMPORTACAO: "CODIGOIBGEMUNICIPIOIMPORTACAO";
    readonly MASCARAENDERECOIMPORTACAO: "MASCARAENDERECOIMPORTACAO";
    readonly MASCARAENDERECO2IMPORTACAO: "MASCARAENDERECO2IMPORTACAO";
    readonly SEPARADORENDERECOIMPORTACAO: "SEPARADORENDERECOIMPORTACAO";
    readonly EHALTEROUNOME: "EHALTEROUNOME";
    readonly RAZAOSOCIAL: "RAZAOSOCIAL";
    readonly EHALTEROUBAIRRO: "EHALTEROUBAIRRO";
    readonly EHALTEROUNUMERO: "EHALTEROUNUMERO";
    readonly EHALTEROUMUNICIPIO: "EHALTEROUMUNICIPIO";
    readonly EHALTEROULOGRADOURO: "EHALTEROULOGRADOURO";
    readonly EHALTEROUCOMPLEMENTO: "EHALTEROUCOMPLEMENTO";
};
export type MS_PESSOAENDERECOScalarFieldEnum = (typeof MS_PESSOAENDERECOScalarFieldEnum)[keyof typeof MS_PESSOAENDERECOScalarFieldEnum];
export declare const MS_PESSOALOGScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly DATA: "DATA";
    readonly TIPOMENSAGEM: "TIPOMENSAGEM";
    readonly COMPLEMENTO: "COMPLEMENTO";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly PESSOA: "PESSOA";
    readonly USUARIO: "USUARIO";
};
export type MS_PESSOALOGScalarFieldEnum = (typeof MS_PESSOALOGScalarFieldEnum)[keyof typeof MS_PESSOALOGScalarFieldEnum];
export declare const MS_PESSOAMOTORISTAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly CONDICAOPAGAMENTO: "CONDICAOPAGAMENTO";
    readonly PESSOA: "PESSOA";
    readonly JORNADAATUAL: "JORNADAATUAL";
};
export type MS_PESSOAMOTORISTAScalarFieldEnum = (typeof MS_PESSOAMOTORISTAScalarFieldEnum)[keyof typeof MS_PESSOAMOTORISTAScalarFieldEnum];
export declare const MS_PESSOATRANSPORTADORScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly RNTRC: "RNTRC";
    readonly PESSOA: "PESSOA";
};
export type MS_PESSOATRANSPORTADORScalarFieldEnum = (typeof MS_PESSOATRANSPORTADORScalarFieldEnum)[keyof typeof MS_PESSOATRANSPORTADORScalarFieldEnum];
export declare const MS_SEXOPESSOAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly SIGLA: "SIGLA";
    readonly CODIGO: "CODIGO";
};
export type MS_SEXOPESSOAScalarFieldEnum = (typeof MS_SEXOPESSOAScalarFieldEnum)[keyof typeof MS_SEXOPESSOAScalarFieldEnum];
export declare const MS_SITUACAOPESSOAJURIDICAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly CODIGO: "CODIGO";
};
export type MS_SITUACAOPESSOAJURIDICAScalarFieldEnum = (typeof MS_SITUACAOPESSOAJURIDICAScalarFieldEnum)[keyof typeof MS_SITUACAOPESSOAJURIDICAScalarFieldEnum];
export declare const MS_STATUSPESSOAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly IMAGEM: "IMAGEM";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
};
export type MS_STATUSPESSOAScalarFieldEnum = (typeof MS_STATUSPESSOAScalarFieldEnum)[keyof typeof MS_STATUSPESSOAScalarFieldEnum];
export declare const MS_STATUSPESSOACONTATOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly IMAGEM: "IMAGEM";
};
export type MS_STATUSPESSOACONTATOScalarFieldEnum = (typeof MS_STATUSPESSOACONTATOScalarFieldEnum)[keyof typeof MS_STATUSPESSOACONTATOScalarFieldEnum];
export declare const MS_STATUSPESSOAENDERECOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly IMAGEM: "IMAGEM";
};
export type MS_STATUSPESSOAENDERECOScalarFieldEnum = (typeof MS_STATUSPESSOAENDERECOScalarFieldEnum)[keyof typeof MS_STATUSPESSOAENDERECOScalarFieldEnum];
export declare const MS_TIPOINATIVACAOPESSOAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly ALCADAAPROVACAO: "ALCADAAPROVACAO";
    readonly EHATIVAR: "EHATIVAR";
    readonly NOME: "NOME";
    readonly SIGLA: "SIGLA";
    readonly EMPRESA: "EMPRESA";
};
export type MS_TIPOINATIVACAOPESSOAScalarFieldEnum = (typeof MS_TIPOINATIVACAOPESSOAScalarFieldEnum)[keyof typeof MS_TIPOINATIVACAOPESSOAScalarFieldEnum];
export declare const MS_TIPOPESSOAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly ALCADAAPROVACAO: "ALCADAAPROVACAO";
    readonly STATUSDATA: "STATUSDATA";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly STATUS: "STATUS";
    readonly CODIGO: "CODIGO";
    readonly TIPOCONTATO: "TIPOCONTATO";
    readonly ARQUIVOMODELO: "ARQUIVOMODELO";
    readonly GRUPOENVIOEMAILFINANCEIRO: "GRUPOENVIOEMAILFINANCEIRO";
    readonly GRUPOENVIOCONTATO: "GRUPOENVIOCONTATO";
    readonly EHCADASTRARPESSOAGERENCIADORA: "EHCADASTRARPESSOAGERENCIADORA";
    readonly TIPOGERENCIAMENTORISCO: "TIPOGERENCIAMENTORISCO";
    readonly GERENCIADORARISCO: "GERENCIADORARISCO";
};
export type MS_TIPOPESSOAScalarFieldEnum = (typeof MS_TIPOPESSOAScalarFieldEnum)[keyof typeof MS_TIPOPESSOAScalarFieldEnum];
export declare const MS_TIPOPESSOAENDERECOScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly NOME: "NOME";
    readonly ORDEM: "ORDEM";
    readonly SIGLA: "SIGLA";
};
export type MS_TIPOPESSOAENDERECOScalarFieldEnum = (typeof MS_TIPOPESSOAENDERECOScalarFieldEnum)[keyof typeof MS_TIPOPESSOAENDERECOScalarFieldEnum];
export declare const MS_TIPOPESSOAOCORRENCIAScalarFieldEnum: {
    readonly HANDLE: "HANDLE";
    readonly LOGDATACADASTRO: "LOGDATACADASTRO";
    readonly LOGDATAALTERACAO: "LOGDATAALTERACAO";
    readonly LOGUSUARIOCADASTRO: "LOGUSUARIOCADASTRO";
    readonly LOGUSUARIOALTERACAO: "LOGUSUARIOALTERACAO";
    readonly STATUS: "STATUS";
    readonly STATUSDATA: "STATUSDATA";
    readonly EMPRESA: "EMPRESA";
    readonly CODIGO: "CODIGO";
    readonly ALCADAAPROVACAO: "ALCADAAPROVACAO";
    readonly NOME: "NOME";
    readonly OBSERVACAO: "OBSERVACAO";
    readonly ACAO: "ACAO";
};
export type MS_TIPOPESSOAOCORRENCIAScalarFieldEnum = (typeof MS_TIPOPESSOAOCORRENCIAScalarFieldEnum)[keyof typeof MS_TIPOPESSOAOCORRENCIAScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    oP_VIAGEM?: Prisma.OP_VIAGEMOmit;
    oP_STATUSVIAGEM?: Prisma.OP_STATUSVIAGEMOmit;
    oP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGOmit;
    iN_INTEGRACAO?: Prisma.IN_INTEGRACAOOmit;
    mD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit;
    mS_PESSOA?: Prisma.MS_PESSOAOmit;
    mS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEOmit;
    mS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOOmit;
    mS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOOmit;
    mS_PESSOALOG?: Prisma.MS_PESSOALOGOmit;
    mS_PESSOAMOTORISTA?: Prisma.MS_PESSOAMOTORISTAOmit;
    mS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOATRANSPORTADOROmit;
    mS_SEXOPESSOA?: Prisma.MS_SEXOPESSOAOmit;
    mS_SITUACAOPESSOAJURIDICA?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit;
    mS_STATUSPESSOA?: Prisma.MS_STATUSPESSOAOmit;
    mS_STATUSPESSOACONTATO?: Prisma.MS_STATUSPESSOACONTATOOmit;
    mS_STATUSPESSOAENDERECO?: Prisma.MS_STATUSPESSOAENDERECOOmit;
    mS_TIPOINATIVACAOPESSOA?: Prisma.MS_TIPOINATIVACAOPESSOAOmit;
    mS_TIPOPESSOA?: Prisma.MS_TIPOPESSOAOmit;
    mS_TIPOPESSOAENDERECO?: Prisma.MS_TIPOPESSOAENDERECOOmit;
    mS_TIPOPESSOAOCORRENCIA?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
