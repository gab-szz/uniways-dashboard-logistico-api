import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_TIPOPESSOAOCORRENCIAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload>;
export type AggregateMS_TIPOPESSOAOCORRENCIA = {
    _count: MS_TIPOPESSOAOCORRENCIACountAggregateOutputType | null;
    _avg: MS_TIPOPESSOAOCORRENCIAAvgAggregateOutputType | null;
    _sum: MS_TIPOPESSOAOCORRENCIASumAggregateOutputType | null;
    _min: MS_TIPOPESSOAOCORRENCIAMinAggregateOutputType | null;
    _max: MS_TIPOPESSOAOCORRENCIAMaxAggregateOutputType | null;
};
export type MS_TIPOPESSOAOCORRENCIAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    STATUS: number | null;
    EMPRESA: number | null;
    CODIGO: number | null;
    ALCADAAPROVACAO: number | null;
    ACAO: number | null;
};
export type MS_TIPOPESSOAOCORRENCIASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    STATUS: number | null;
    EMPRESA: number | null;
    CODIGO: number | null;
    ALCADAAPROVACAO: number | null;
    ACAO: number | null;
};
export type MS_TIPOPESSOAOCORRENCIAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    STATUS: number | null;
    STATUSDATA: Date | null;
    EMPRESA: number | null;
    CODIGO: number | null;
    ALCADAAPROVACAO: number | null;
    NOME: string | null;
    OBSERVACAO: string | null;
    ACAO: number | null;
};
export type MS_TIPOPESSOAOCORRENCIAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    STATUS: number | null;
    STATUSDATA: Date | null;
    EMPRESA: number | null;
    CODIGO: number | null;
    ALCADAAPROVACAO: number | null;
    NOME: string | null;
    OBSERVACAO: string | null;
    ACAO: number | null;
};
export type MS_TIPOPESSOAOCORRENCIACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    STATUS: number;
    STATUSDATA: number;
    EMPRESA: number;
    CODIGO: number;
    ALCADAAPROVACAO: number;
    NOME: number;
    OBSERVACAO: number;
    ACAO: number;
    _all: number;
};
export type MS_TIPOPESSOAOCORRENCIAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    STATUS?: true;
    EMPRESA?: true;
    CODIGO?: true;
    ALCADAAPROVACAO?: true;
    ACAO?: true;
};
export type MS_TIPOPESSOAOCORRENCIASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    STATUS?: true;
    EMPRESA?: true;
    CODIGO?: true;
    ALCADAAPROVACAO?: true;
    ACAO?: true;
};
export type MS_TIPOPESSOAOCORRENCIAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    STATUS?: true;
    STATUSDATA?: true;
    EMPRESA?: true;
    CODIGO?: true;
    ALCADAAPROVACAO?: true;
    NOME?: true;
    OBSERVACAO?: true;
    ACAO?: true;
};
export type MS_TIPOPESSOAOCORRENCIAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    STATUS?: true;
    STATUSDATA?: true;
    EMPRESA?: true;
    CODIGO?: true;
    ALCADAAPROVACAO?: true;
    NOME?: true;
    OBSERVACAO?: true;
    ACAO?: true;
};
export type MS_TIPOPESSOAOCORRENCIACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    STATUS?: true;
    STATUSDATA?: true;
    EMPRESA?: true;
    CODIGO?: true;
    ALCADAAPROVACAO?: true;
    NOME?: true;
    OBSERVACAO?: true;
    ACAO?: true;
    _all?: true;
};
export type MS_TIPOPESSOAOCORRENCIAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput | Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_TIPOPESSOAOCORRENCIACountAggregateInputType;
    _avg?: MS_TIPOPESSOAOCORRENCIAAvgAggregateInputType;
    _sum?: MS_TIPOPESSOAOCORRENCIASumAggregateInputType;
    _min?: MS_TIPOPESSOAOCORRENCIAMinAggregateInputType;
    _max?: MS_TIPOPESSOAOCORRENCIAMaxAggregateInputType;
};
export type GetMS_TIPOPESSOAOCORRENCIAAggregateType<T extends MS_TIPOPESSOAOCORRENCIAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_TIPOPESSOAOCORRENCIA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_TIPOPESSOAOCORRENCIA[P]> : Prisma.GetScalarType<T[P], AggregateMS_TIPOPESSOAOCORRENCIA[P]>;
};
export type MS_TIPOPESSOAOCORRENCIAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithAggregationInput | Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithAggregationInput[];
    by: Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum[] | Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum;
    having?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_TIPOPESSOAOCORRENCIACountAggregateInputType | true;
    _avg?: MS_TIPOPESSOAOCORRENCIAAvgAggregateInputType;
    _sum?: MS_TIPOPESSOAOCORRENCIASumAggregateInputType;
    _min?: MS_TIPOPESSOAOCORRENCIAMinAggregateInputType;
    _max?: MS_TIPOPESSOAOCORRENCIAMaxAggregateInputType;
};
export type MS_TIPOPESSOAOCORRENCIAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    STATUS: number | null;
    STATUSDATA: Date | null;
    EMPRESA: number | null;
    CODIGO: number | null;
    ALCADAAPROVACAO: number | null;
    NOME: string | null;
    OBSERVACAO: string | null;
    ACAO: number | null;
    _count: MS_TIPOPESSOAOCORRENCIACountAggregateOutputType | null;
    _avg: MS_TIPOPESSOAOCORRENCIAAvgAggregateOutputType | null;
    _sum: MS_TIPOPESSOAOCORRENCIASumAggregateOutputType | null;
    _min: MS_TIPOPESSOAOCORRENCIAMinAggregateOutputType | null;
    _max: MS_TIPOPESSOAOCORRENCIAMaxAggregateOutputType | null;
};
export type GetMS_TIPOPESSOAOCORRENCIAGroupByPayload<T extends MS_TIPOPESSOAOCORRENCIAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_TIPOPESSOAOCORRENCIAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_TIPOPESSOAOCORRENCIAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_TIPOPESSOAOCORRENCIAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_TIPOPESSOAOCORRENCIAGroupByOutputType[P]>;
}>>;
export type MS_TIPOPESSOAOCORRENCIAWhereInput = {
    AND?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput | Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    OR?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    NOT?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput | Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_TIPOPESSOAOCORRENCIA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUS?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUSDATA?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    EMPRESA?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    ACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
};
export type MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUSDATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput | Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    OR?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    NOT?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput | Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUS?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUSDATA?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    EMPRESA?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    ACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
}, "HANDLE">;
export type MS_TIPOPESSOAOCORRENCIAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUS?: Prisma.SortOrderInput | Prisma.SortOrder;
    STATUSDATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    ACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_TIPOPESSOAOCORRENCIACountOrderByAggregateInput;
    _avg?: Prisma.MS_TIPOPESSOAOCORRENCIAAvgOrderByAggregateInput;
    _max?: Prisma.MS_TIPOPESSOAOCORRENCIAMaxOrderByAggregateInput;
    _min?: Prisma.MS_TIPOPESSOAOCORRENCIAMinOrderByAggregateInput;
    _sum?: Prisma.MS_TIPOPESSOAOCORRENCIASumOrderByAggregateInput;
};
export type MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput | Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput | Prisma.MS_TIPOPESSOAOCORRENCIAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUS?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    STATUSDATA?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | Date | string | null;
    EMPRESA?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    CODIGO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    ALCADAAPROVACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    OBSERVACAO?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | string | null;
    ACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAOCORRENCIA"> | number | null;
};
export type MS_TIPOPESSOAOCORRENCIACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    STATUS?: number | null;
    STATUSDATA?: Date | string | null;
    EMPRESA?: number | null;
    CODIGO?: number | null;
    ALCADAAPROVACAO?: number | null;
    NOME?: string | null;
    OBSERVACAO?: string | null;
    ACAO?: number | null;
};
export type MS_TIPOPESSOAOCORRENCIAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    STATUS?: number | null;
    STATUSDATA?: Date | string | null;
    EMPRESA?: number | null;
    CODIGO?: number | null;
    ALCADAAPROVACAO?: number | null;
    NOME?: string | null;
    OBSERVACAO?: string | null;
    ACAO?: number | null;
};
export type MS_TIPOPESSOAOCORRENCIAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUSDATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOPESSOAOCORRENCIAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUSDATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOPESSOAOCORRENCIACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    STATUS?: number | null;
    STATUSDATA?: Date | string | null;
    EMPRESA?: number | null;
    CODIGO?: number | null;
    ALCADAAPROVACAO?: number | null;
    NOME?: string | null;
    OBSERVACAO?: string | null;
    ACAO?: number | null;
};
export type MS_TIPOPESSOAOCORRENCIAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUSDATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOPESSOAOCORRENCIAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUS?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    STATUSDATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    EMPRESA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ALCADAAPROVACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_TIPOPESSOAOCORRENCIACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    STATUSDATA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    ACAO?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    ACAO?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    STATUSDATA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    ACAO?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    STATUSDATA?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    ACAO?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    STATUS?: Prisma.SortOrder;
    EMPRESA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
    ALCADAAPROVACAO?: Prisma.SortOrder;
    ACAO?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAOCORRENCIASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    STATUS?: boolean;
    STATUSDATA?: boolean;
    EMPRESA?: boolean;
    CODIGO?: boolean;
    ALCADAAPROVACAO?: boolean;
    NOME?: boolean;
    OBSERVACAO?: boolean;
    ACAO?: boolean;
}, ExtArgs["result"]["mS_TIPOPESSOAOCORRENCIA"]>;
export type MS_TIPOPESSOAOCORRENCIASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    STATUS?: boolean;
    STATUSDATA?: boolean;
    EMPRESA?: boolean;
    CODIGO?: boolean;
    ALCADAAPROVACAO?: boolean;
    NOME?: boolean;
    OBSERVACAO?: boolean;
    ACAO?: boolean;
};
export type MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "STATUS" | "STATUSDATA" | "EMPRESA" | "CODIGO" | "ALCADAAPROVACAO" | "NOME" | "OBSERVACAO" | "ACAO", ExtArgs["result"]["mS_TIPOPESSOAOCORRENCIA"]>;
export type $MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_TIPOPESSOAOCORRENCIA";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        STATUS: number | null;
        STATUSDATA: Date | null;
        EMPRESA: number | null;
        CODIGO: number | null;
        ALCADAAPROVACAO: number | null;
        NOME: string | null;
        OBSERVACAO: string | null;
        ACAO: number | null;
    }, ExtArgs["result"]["mS_TIPOPESSOAOCORRENCIA"]>;
    composites: {};
};
export type MS_TIPOPESSOAOCORRENCIAGetPayload<S extends boolean | null | undefined | MS_TIPOPESSOAOCORRENCIADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload, S>;
export type MS_TIPOPESSOAOCORRENCIACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_TIPOPESSOAOCORRENCIAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_TIPOPESSOAOCORRENCIACountAggregateInputType | true;
};
export interface MS_TIPOPESSOAOCORRENCIADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_TIPOPESSOAOCORRENCIA'];
        meta: {
            name: 'MS_TIPOPESSOAOCORRENCIA';
        };
    };
    findUnique<T extends MS_TIPOPESSOAOCORRENCIAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_TIPOPESSOAOCORRENCIAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_TIPOPESSOAOCORRENCIAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_TIPOPESSOAOCORRENCIAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_TIPOPESSOAOCORRENCIAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_TIPOPESSOAOCORRENCIACreateArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIACreateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_TIPOPESSOAOCORRENCIACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_TIPOPESSOAOCORRENCIADeleteArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_TIPOPESSOAOCORRENCIAUpdateArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_TIPOPESSOAOCORRENCIADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_TIPOPESSOAOCORRENCIAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_TIPOPESSOAOCORRENCIAUpsertArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAOCORRENCIAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAOCORRENCIAClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAOCORRENCIAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_TIPOPESSOAOCORRENCIACountArgs>(args?: Prisma.Subset<T, MS_TIPOPESSOAOCORRENCIACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_TIPOPESSOAOCORRENCIACountAggregateOutputType> : number>;
    aggregate<T extends MS_TIPOPESSOAOCORRENCIAAggregateArgs>(args: Prisma.Subset<T, MS_TIPOPESSOAOCORRENCIAAggregateArgs>): Prisma.PrismaPromise<GetMS_TIPOPESSOAOCORRENCIAAggregateType<T>>;
    groupBy<T extends MS_TIPOPESSOAOCORRENCIAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_TIPOPESSOAOCORRENCIAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_TIPOPESSOAOCORRENCIAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_TIPOPESSOAOCORRENCIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_TIPOPESSOAOCORRENCIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_TIPOPESSOAOCORRENCIAFieldRefs;
}
export interface Prisma__MS_TIPOPESSOAOCORRENCIAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_TIPOPESSOAOCORRENCIAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly STATUS: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly STATUSDATA: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'DateTime'>;
    readonly EMPRESA: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly CODIGO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly ALCADAAPROVACAO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'String'>;
    readonly OBSERVACAO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'String'>;
    readonly ACAO: Prisma.FieldRef<"MS_TIPOPESSOAOCORRENCIA", 'Int'>;
}
export type MS_TIPOPESSOAOCORRENCIAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
};
export type MS_TIPOPESSOAOCORRENCIAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
};
export type MS_TIPOPESSOAOCORRENCIAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput | Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum | Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum[];
};
export type MS_TIPOPESSOAOCORRENCIAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput | Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum | Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum[];
};
export type MS_TIPOPESSOAOCORRENCIAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput | Prisma.MS_TIPOPESSOAOCORRENCIAOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum | Prisma.MS_TIPOPESSOAOCORRENCIAScalarFieldEnum[];
};
export type MS_TIPOPESSOAOCORRENCIACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAOCORRENCIACreateInput, Prisma.MS_TIPOPESSOAOCORRENCIAUncheckedCreateInput>;
};
export type MS_TIPOPESSOAOCORRENCIACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_TIPOPESSOAOCORRENCIACreateManyInput | Prisma.MS_TIPOPESSOAOCORRENCIACreateManyInput[];
};
export type MS_TIPOPESSOAOCORRENCIAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAOCORRENCIAUpdateInput, Prisma.MS_TIPOPESSOAOCORRENCIAUncheckedUpdateInput>;
    where: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
};
export type MS_TIPOPESSOAOCORRENCIAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAOCORRENCIAUpdateManyMutationInput, Prisma.MS_TIPOPESSOAOCORRENCIAUncheckedUpdateManyInput>;
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    limit?: number;
};
export type MS_TIPOPESSOAOCORRENCIAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_TIPOPESSOAOCORRENCIACreateInput, Prisma.MS_TIPOPESSOAOCORRENCIAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_TIPOPESSOAOCORRENCIAUpdateInput, Prisma.MS_TIPOPESSOAOCORRENCIAUncheckedUpdateInput>;
};
export type MS_TIPOPESSOAOCORRENCIADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAOCORRENCIAWhereUniqueInput;
};
export type MS_TIPOPESSOAOCORRENCIADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAOCORRENCIAWhereInput;
    limit?: number;
};
export type MS_TIPOPESSOAOCORRENCIADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAOCORRENCIASelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAOCORRENCIAOmit<ExtArgs> | null;
};
