import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_TIPOINATIVACAOPESSOAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_TIPOINATIVACAOPESSOAPayload>;
export type AggregateMS_TIPOINATIVACAOPESSOA = {
    _count: MS_TIPOINATIVACAOPESSOACountAggregateOutputType | null;
    _avg: MS_TIPOINATIVACAOPESSOAAvgAggregateOutputType | null;
    _sum: MS_TIPOINATIVACAOPESSOASumAggregateOutputType | null;
    _min: MS_TIPOINATIVACAOPESSOAMinAggregateOutputType | null;
    _max: MS_TIPOINATIVACAOPESSOAMaxAggregateOutputType | null;
};
export type MS_TIPOINATIVACAOPESSOAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ALCADAAPROVACAO: number | null;
    EMPRESA: number | null;
};
export type MS_TIPOINATIVACAOPESSOASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ALCADAAPROVACAO: number | null;
    EMPRESA: number | null;
};
export type MS_TIPOINATIVACAOPESSOAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ALCADAAPROVACAO: number | null;
    EHATIVAR: string | null;
    NOME: string | null;
    SIGLA: string | null;
    EMPRESA: number | null;
};
export type MS_TIPOINATIVACAOPESSOAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ALCADAAPROVACAO: number | null;
    EHATIVAR: string | null;
    NOME: string | null;
    SIGLA: string | null;
    EMPRESA: number | null;
};
export type MS_TIPOINATIVACAOPESSOACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    ALCADAAPROVACAO: number;
    EHATIVAR: number;
    NOME: number;
    SIGLA: number;
    EMPRESA: number;
    _all: number;
};
export type MS_TIPOINATIVACAOPESSOAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ALCADAAPROVACAO?: true;
    EMPRESA?: true;
};
export type MS_TIPOINATIVACAOPESSOASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ALCADAAPROVACAO?: true;
    EMPRESA?: true;
};
export type MS_TIPOINATIVACAOPESSOAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ALCADAAPROVACAO?: true;
    EHATIVAR?: true;
    NOME?: true;
    SIGLA?: true;
    EMPRESA?: true;
};
export type MS_TIPOINATIVACAOPESSOAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ALCADAAPROVACAO?: true;
    EHATIVAR?: true;
    NOME?: true;
    SIGLA?: true;
    EMPRESA?: true;
};
export type MS_TIPOINATIVACAOPESSOACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ALCADAAPROVACAO?: true;
    EHATIVAR?: true;
    NOME?: true;
    SIGLA?: true;
    EMPRESA?: true;
    _all?: true;
};
export type MS_TIPOINATIVACAOPESSOAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    orderBy?: Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput | Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_TIPOINATIVACAOPESSOACountAggregateInputType;
    _avg?: MS_TIPOINATIVACAOPESSOAAvgAggregateInputType;
    _sum?: MS_TIPOINATIVACAOPESSOASumAggregateInputType;
    _min?: MS_TIPOINATIVACAOPESSOAMinAggregateInputType;
    _max?: MS_TIPOINATIVACAOPESSOAMaxAggregateInputType;
};
export type GetMS_TIPOINATIVACAOPESSOAAggregateType<T extends MS_TIPOINATIVACAOPESSOAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_TIPOINATIVACAOPESSOA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_TIPOINATIVACAOPESSOA[P]> : Prisma.GetScalarType<T[P], AggregateMS_TIPOINATIVACAOPESSOA[P]>;
};
export type MS_TIPOINATIVACAOPESSOAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    orderBy?: Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithAggregationInput | Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithAggregationInput[];
    by: Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum[] | Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum;
    having?: Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_TIPOINATIVACAOPESSOACountAggregateInputType | true;
    _avg?: MS_TIPOINATIVACAOPESSOAAvgAggregateInputType;
    _sum?: MS_TIPOINATIVACAOPESSOASumAggregateInputType;
    _min?: MS_TIPOINATIVACAOPESSOAMinAggregateInputType;
    _max?: MS_TIPOINATIVACAOPESSOAMaxAggregateInputType;
};
export type MS_TIPOINATIVACAOPESSOAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ALCADAAPROVACAO: number | null;
    EHATIVAR: string | null;
    NOME: string | null;
    SIGLA: string | null;
    EMPRESA: number | null;
    _count: MS_TIPOINATIVACAOPESSOACountAggregateOutputType | null;
    _avg: MS_TIPOINATIVACAOPESSOAAvgAggregateOutputType | null;
    _sum: MS_TIPOINATIVACAOPESSOASumAggregateOutputType | null;
    _min: MS_TIPOINATIVACAOPESSOAMinAggregateOutputType | null;
    _max: MS_TIPOINATIVACAOPESSOAMaxAggregateOutputType | null;
};
export type GetMS_TIPOINATIVACAOPESSOAGroupByPayload<T extends MS_TIPOINATIVACAOPESSOAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_TIPOINATIVACAOPESSOAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_TIPOINATIVACAOPESSOAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_TIPOINATIVACAOPESSOAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_TIPOINATIVACAOPESSOAGroupByOutputType[P]>;
}>>;
export type MS_TIPOINATIVACAOPESSOAWhereInput = {
    AND?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput | Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    OR?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    NOT?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput | Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_TIPOINATIVACAOPESSOA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    EHATIVAR?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    EMPRESA?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
};
export type MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    EHATIVAR?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput | Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    OR?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    NOT?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput | Prisma.MS_TIPOINATIVACAOPESSOAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    EHATIVAR?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    EMPRESA?: Prisma.IntNullableFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
}, "HANDLE">;
export type MS_TIPOINATIVACAOPESSOAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    EHATIVAR?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_TIPOINATIVACAOPESSOACountOrderByAggregateInput;
    _avg?: Prisma.MS_TIPOINATIVACAOPESSOAAvgOrderByAggregateInput;
    _max?: Prisma.MS_TIPOINATIVACAOPESSOAMaxOrderByAggregateInput;
    _min?: Prisma.MS_TIPOINATIVACAOPESSOAMinOrderByAggregateInput;
    _sum?: Prisma.MS_TIPOINATIVACAOPESSOASumOrderByAggregateInput;
};
export type MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput | Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput | Prisma.MS_TIPOINATIVACAOPESSOAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
    EHATIVAR?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    SIGLA?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | string | null;
    EMPRESA?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOINATIVACAOPESSOA"> | number | null;
};
export type MS_TIPOINATIVACAOPESSOACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    ALCADAAPROVACAO?: number | null;
    EHATIVAR?: string | null;
    NOME?: string | null;
    SIGLA?: string | null;
    EMPRESA?: number | null;
};
export type MS_TIPOINATIVACAOPESSOAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    ALCADAAPROVACAO?: number | null;
    EHATIVAR?: string | null;
    NOME?: string | null;
    SIGLA?: string | null;
    EMPRESA?: number | null;
};
export type MS_TIPOINATIVACAOPESSOAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    EHATIVAR?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOINATIVACAOPESSOAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    EHATIVAR?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOINATIVACAOPESSOACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    ALCADAAPROVACAO?: number | null;
    EHATIVAR?: string | null;
    NOME?: string | null;
    SIGLA?: string | null;
    EMPRESA?: number | null;
};
export type MS_TIPOINATIVACAOPESSOAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    EHATIVAR?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOINATIVACAOPESSOAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    EHATIVAR?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOINATIVACAOPESSOACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    EHATIVAR?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    EHATIVAR?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    EHATIVAR?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
};
export type MS_TIPOINATIVACAOPESSOASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    ALCADAAPROVACAO?: boolean;
    EHATIVAR?: boolean;
    NOME?: boolean;
    SIGLA?: boolean;
    EMPRESA?: boolean;
}, ExtArgs["result"]["mS_TIPOINATIVACAOPESSOA"]>;
export type MS_TIPOINATIVACAOPESSOASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    ALCADAAPROVACAO?: boolean;
    EHATIVAR?: boolean;
    NOME?: boolean;
    SIGLA?: boolean;
    EMPRESA?: boolean;
};
export type MS_TIPOINATIVACAOPESSOAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "ALCADAAPROVACAO" | "EHATIVAR" | "NOME" | "SIGLA" | "EMPRESA", ExtArgs["result"]["mS_TIPOINATIVACAOPESSOA"]>;
export type $MS_TIPOINATIVACAOPESSOAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_TIPOINATIVACAOPESSOA";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        ALCADAAPROVACAO: number | null;
        EHATIVAR: string | null;
        NOME: string | null;
        SIGLA: string | null;
        EMPRESA: number | null;
    }, ExtArgs["result"]["mS_TIPOINATIVACAOPESSOA"]>;
    composites: {};
};
export type MS_TIPOINATIVACAOPESSOAGetPayload<S extends boolean | null | undefined | MS_TIPOINATIVACAOPESSOADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload, S>;
export type MS_TIPOINATIVACAOPESSOACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_TIPOINATIVACAOPESSOAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_TIPOINATIVACAOPESSOACountAggregateInputType | true;
};
export interface MS_TIPOINATIVACAOPESSOADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_TIPOINATIVACAOPESSOA'];
        meta: {
            name: 'MS_TIPOINATIVACAOPESSOA';
        };
    };
    findUnique<T extends MS_TIPOINATIVACAOPESSOAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_TIPOINATIVACAOPESSOAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_TIPOINATIVACAOPESSOAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_TIPOINATIVACAOPESSOAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_TIPOINATIVACAOPESSOAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_TIPOINATIVACAOPESSOACreateArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOACreateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_TIPOINATIVACAOPESSOACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_TIPOINATIVACAOPESSOADeleteArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_TIPOINATIVACAOPESSOAUpdateArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_TIPOINATIVACAOPESSOADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_TIPOINATIVACAOPESSOAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_TIPOINATIVACAOPESSOAUpsertArgs>(args: Prisma.SelectSubset<T, MS_TIPOINATIVACAOPESSOAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOINATIVACAOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOINATIVACAOPESSOAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_TIPOINATIVACAOPESSOACountArgs>(args?: Prisma.Subset<T, MS_TIPOINATIVACAOPESSOACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_TIPOINATIVACAOPESSOACountAggregateOutputType> : number>;
    aggregate<T extends MS_TIPOINATIVACAOPESSOAAggregateArgs>(args: Prisma.Subset<T, MS_TIPOINATIVACAOPESSOAAggregateArgs>): Prisma.PrismaPromise<GetMS_TIPOINATIVACAOPESSOAAggregateType<T>>;
    groupBy<T extends MS_TIPOINATIVACAOPESSOAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_TIPOINATIVACAOPESSOAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_TIPOINATIVACAOPESSOAGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_TIPOINATIVACAOPESSOAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_TIPOINATIVACAOPESSOAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_TIPOINATIVACAOPESSOAFieldRefs;
}
export interface Prisma__MS_TIPOINATIVACAOPESSOAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_TIPOINATIVACAOPESSOAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'Int'>;
    readonly ALCADAAPROVACAO: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'Int'>;
    readonly EHATIVAR: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'String'>;
    readonly NOME: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'String'>;
    readonly SIGLA: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'String'>;
    readonly EMPRESA: Prisma.FieldRef<"MS_TIPOINATIVACAOPESSOA", 'Int'>;
}
export type MS_TIPOINATIVACAOPESSOAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
};
export type MS_TIPOINATIVACAOPESSOAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
};
export type MS_TIPOINATIVACAOPESSOAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    orderBy?: Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput | Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum | Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum[];
};
export type MS_TIPOINATIVACAOPESSOAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    orderBy?: Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput | Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum | Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum[];
};
export type MS_TIPOINATIVACAOPESSOAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    orderBy?: Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput | Prisma.MS_TIPOINATIVACAOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum | Prisma.MS_TIPOINATIVACAOPESSOAScalarFieldEnum[];
};
export type MS_TIPOINATIVACAOPESSOACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOINATIVACAOPESSOACreateInput, Prisma.MS_TIPOINATIVACAOPESSOAUncheckedCreateInput>;
};
export type MS_TIPOINATIVACAOPESSOACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_TIPOINATIVACAOPESSOACreateManyInput | Prisma.MS_TIPOINATIVACAOPESSOACreateManyInput[];
};
export type MS_TIPOINATIVACAOPESSOAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOINATIVACAOPESSOAUpdateInput, Prisma.MS_TIPOINATIVACAOPESSOAUncheckedUpdateInput>;
    where: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
};
export type MS_TIPOINATIVACAOPESSOAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_TIPOINATIVACAOPESSOAUpdateManyMutationInput, Prisma.MS_TIPOINATIVACAOPESSOAUncheckedUpdateManyInput>;
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    limit?: number;
};
export type MS_TIPOINATIVACAOPESSOAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_TIPOINATIVACAOPESSOACreateInput, Prisma.MS_TIPOINATIVACAOPESSOAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_TIPOINATIVACAOPESSOAUpdateInput, Prisma.MS_TIPOINATIVACAOPESSOAUncheckedUpdateInput>;
};
export type MS_TIPOINATIVACAOPESSOADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOINATIVACAOPESSOAWhereUniqueInput;
};
export type MS_TIPOINATIVACAOPESSOADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOINATIVACAOPESSOAWhereInput;
    limit?: number;
};
export type MS_TIPOINATIVACAOPESSOADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOINATIVACAOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOINATIVACAOPESSOAOmit<ExtArgs> | null;
};
