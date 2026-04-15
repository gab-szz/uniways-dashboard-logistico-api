import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_SEXOPESSOAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_SEXOPESSOAPayload>;
export type AggregateMS_SEXOPESSOA = {
    _count: MS_SEXOPESSOACountAggregateOutputType | null;
    _avg: MS_SEXOPESSOAAvgAggregateOutputType | null;
    _sum: MS_SEXOPESSOASumAggregateOutputType | null;
    _min: MS_SEXOPESSOAMinAggregateOutputType | null;
    _max: MS_SEXOPESSOAMaxAggregateOutputType | null;
};
export type MS_SEXOPESSOAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SEXOPESSOASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SEXOPESSOAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
    CODIGO: number | null;
};
export type MS_SEXOPESSOAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
    CODIGO: number | null;
};
export type MS_SEXOPESSOACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    NOME: number;
    ORDEM: number;
    SIGLA: number;
    CODIGO: number;
    _all: number;
};
export type MS_SEXOPESSOAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SEXOPESSOASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SEXOPESSOAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
    CODIGO?: true;
};
export type MS_SEXOPESSOAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
    CODIGO?: true;
};
export type MS_SEXOPESSOACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
    CODIGO?: true;
    _all?: true;
};
export type MS_SEXOPESSOAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    orderBy?: Prisma.MS_SEXOPESSOAOrderByWithRelationInput | Prisma.MS_SEXOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_SEXOPESSOACountAggregateInputType;
    _avg?: MS_SEXOPESSOAAvgAggregateInputType;
    _sum?: MS_SEXOPESSOASumAggregateInputType;
    _min?: MS_SEXOPESSOAMinAggregateInputType;
    _max?: MS_SEXOPESSOAMaxAggregateInputType;
};
export type GetMS_SEXOPESSOAAggregateType<T extends MS_SEXOPESSOAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_SEXOPESSOA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_SEXOPESSOA[P]> : Prisma.GetScalarType<T[P], AggregateMS_SEXOPESSOA[P]>;
};
export type MS_SEXOPESSOAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    orderBy?: Prisma.MS_SEXOPESSOAOrderByWithAggregationInput | Prisma.MS_SEXOPESSOAOrderByWithAggregationInput[];
    by: Prisma.MS_SEXOPESSOAScalarFieldEnum[] | Prisma.MS_SEXOPESSOAScalarFieldEnum;
    having?: Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_SEXOPESSOACountAggregateInputType | true;
    _avg?: MS_SEXOPESSOAAvgAggregateInputType;
    _sum?: MS_SEXOPESSOASumAggregateInputType;
    _min?: MS_SEXOPESSOAMinAggregateInputType;
    _max?: MS_SEXOPESSOAMaxAggregateInputType;
};
export type MS_SEXOPESSOAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
    CODIGO: number | null;
    _count: MS_SEXOPESSOACountAggregateOutputType | null;
    _avg: MS_SEXOPESSOAAvgAggregateOutputType | null;
    _sum: MS_SEXOPESSOASumAggregateOutputType | null;
    _min: MS_SEXOPESSOAMinAggregateOutputType | null;
    _max: MS_SEXOPESSOAMaxAggregateOutputType | null;
};
export type GetMS_SEXOPESSOAGroupByPayload<T extends MS_SEXOPESSOAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_SEXOPESSOAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_SEXOPESSOAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_SEXOPESSOAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_SEXOPESSOAGroupByOutputType[P]>;
}>>;
export type MS_SEXOPESSOAWhereInput = {
    AND?: Prisma.MS_SEXOPESSOAWhereInput | Prisma.MS_SEXOPESSOAWhereInput[];
    OR?: Prisma.MS_SEXOPESSOAWhereInput[];
    NOT?: Prisma.MS_SEXOPESSOAWhereInput | Prisma.MS_SEXOPESSOAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_SEXOPESSOA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_SEXOPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_SEXOPESSOA"> | string | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
};
export type MS_SEXOPESSOAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOA?: Prisma.MS_PESSOAOrderByRelationAggregateInput;
};
export type MS_SEXOPESSOAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_SEXOPESSOAWhereInput | Prisma.MS_SEXOPESSOAWhereInput[];
    OR?: Prisma.MS_SEXOPESSOAWhereInput[];
    NOT?: Prisma.MS_SEXOPESSOAWhereInput | Prisma.MS_SEXOPESSOAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_SEXOPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_SEXOPESSOA"> | string | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_SEXOPESSOA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
}, "HANDLE">;
export type MS_SEXOPESSOAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_SEXOPESSOACountOrderByAggregateInput;
    _avg?: Prisma.MS_SEXOPESSOAAvgOrderByAggregateInput;
    _max?: Prisma.MS_SEXOPESSOAMaxOrderByAggregateInput;
    _min?: Prisma.MS_SEXOPESSOAMinOrderByAggregateInput;
    _sum?: Prisma.MS_SEXOPESSOASumOrderByAggregateInput;
};
export type MS_SEXOPESSOAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput | Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput | Prisma.MS_SEXOPESSOAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_SEXOPESSOA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | number | null;
    SIGLA?: Prisma.StringNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | string | null;
    CODIGO?: Prisma.IntNullableWithAggregatesFilter<"MS_SEXOPESSOA"> | number | null;
};
export type MS_SEXOPESSOACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    CODIGO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_SEXOPESSOAInput;
};
export type MS_SEXOPESSOAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    CODIGO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_SEXOPESSOAInput;
};
export type MS_SEXOPESSOAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateManyWithoutMS_SEXOPESSOANestedInput;
};
export type MS_SEXOPESSOAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_SEXOPESSOANestedInput;
};
export type MS_SEXOPESSOACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    CODIGO?: number | null;
};
export type MS_SEXOPESSOAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SEXOPESSOAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SEXOPESSOANullableScalarRelationFilter = {
    is?: Prisma.MS_SEXOPESSOAWhereInput | null;
    isNot?: Prisma.MS_SEXOPESSOAWhereInput | null;
};
export type MS_SEXOPESSOACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SEXOPESSOAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SEXOPESSOAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SEXOPESSOAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SEXOPESSOASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SEXOPESSOACreateNestedOneWithoutMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_SEXOPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_SEXOPESSOACreateOrConnectWithoutMS_PESSOAInput;
    connect?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
};
export type MS_SEXOPESSOAUpdateOneWithoutMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_SEXOPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_SEXOPESSOACreateOrConnectWithoutMS_PESSOAInput;
    upsert?: Prisma.MS_SEXOPESSOAUpsertWithoutMS_PESSOAInput;
    disconnect?: Prisma.MS_SEXOPESSOAWhereInput | boolean;
    delete?: Prisma.MS_SEXOPESSOAWhereInput | boolean;
    connect?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateToOneWithWhereWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUpdateWithoutMS_PESSOAInput>, Prisma.MS_SEXOPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_SEXOPESSOACreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    CODIGO?: number | null;
};
export type MS_SEXOPESSOAUncheckedCreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    CODIGO?: number | null;
};
export type MS_SEXOPESSOACreateOrConnectWithoutMS_PESSOAInput = {
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_SEXOPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
};
export type MS_SEXOPESSOAUpsertWithoutMS_PESSOAInput = {
    update: Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_SEXOPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    where?: Prisma.MS_SEXOPESSOAWhereInput;
};
export type MS_SEXOPESSOAUpdateToOneWithWhereWithoutMS_PESSOAInput = {
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    data: Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateWithoutMS_PESSOAInput, Prisma.MS_SEXOPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_SEXOPESSOAUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SEXOPESSOAUncheckedUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SEXOPESSOACountOutputType = {
    MS_PESSOA: number;
};
export type MS_SEXOPESSOACountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | MS_SEXOPESSOACountOutputTypeCountMS_PESSOAArgs;
};
export type MS_SEXOPESSOACountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOACountOutputTypeSelect<ExtArgs> | null;
};
export type MS_SEXOPESSOACountOutputTypeCountMS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_SEXOPESSOASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    SIGLA?: boolean;
    CODIGO?: boolean;
    MS_PESSOA?: boolean | Prisma.MS_SEXOPESSOA$MS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_SEXOPESSOACountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_SEXOPESSOA"]>;
export type MS_SEXOPESSOASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    SIGLA?: boolean;
    CODIGO?: boolean;
};
export type MS_SEXOPESSOAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "SIGLA" | "CODIGO", ExtArgs["result"]["mS_SEXOPESSOA"]>;
export type MS_SEXOPESSOAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | Prisma.MS_SEXOPESSOA$MS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_SEXOPESSOACountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_SEXOPESSOAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_SEXOPESSOA";
    objects: {
        MS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        NOME: string | null;
        ORDEM: number | null;
        SIGLA: string | null;
        CODIGO: number | null;
    }, ExtArgs["result"]["mS_SEXOPESSOA"]>;
    composites: {};
};
export type MS_SEXOPESSOAGetPayload<S extends boolean | null | undefined | MS_SEXOPESSOADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload, S>;
export type MS_SEXOPESSOACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_SEXOPESSOAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_SEXOPESSOACountAggregateInputType | true;
};
export interface MS_SEXOPESSOADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_SEXOPESSOA'];
        meta: {
            name: 'MS_SEXOPESSOA';
        };
    };
    findUnique<T extends MS_SEXOPESSOAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_SEXOPESSOAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_SEXOPESSOAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_SEXOPESSOAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_SEXOPESSOAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_SEXOPESSOAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_SEXOPESSOAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_SEXOPESSOAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_SEXOPESSOACreateArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOACreateArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_SEXOPESSOACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_SEXOPESSOACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_SEXOPESSOADeleteArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_SEXOPESSOAUpdateArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_SEXOPESSOADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_SEXOPESSOADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_SEXOPESSOAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_SEXOPESSOAUpsertArgs>(args: Prisma.SelectSubset<T, MS_SEXOPESSOAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_SEXOPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_SEXOPESSOAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_SEXOPESSOACountArgs>(args?: Prisma.Subset<T, MS_SEXOPESSOACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_SEXOPESSOACountAggregateOutputType> : number>;
    aggregate<T extends MS_SEXOPESSOAAggregateArgs>(args: Prisma.Subset<T, MS_SEXOPESSOAAggregateArgs>): Prisma.PrismaPromise<GetMS_SEXOPESSOAAggregateType<T>>;
    groupBy<T extends MS_SEXOPESSOAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_SEXOPESSOAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_SEXOPESSOAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_SEXOPESSOAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_SEXOPESSOAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_SEXOPESSOAFieldRefs;
}
export interface Prisma__MS_SEXOPESSOAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOA<T extends Prisma.MS_SEXOPESSOA$MS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_SEXOPESSOA$MS_PESSOAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_SEXOPESSOAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_SEXOPESSOA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_SEXOPESSOA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_SEXOPESSOA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_SEXOPESSOA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_SEXOPESSOA", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_SEXOPESSOA", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_SEXOPESSOA", 'Int'>;
    readonly SIGLA: Prisma.FieldRef<"MS_SEXOPESSOA", 'String'>;
    readonly CODIGO: Prisma.FieldRef<"MS_SEXOPESSOA", 'Int'>;
}
export type MS_SEXOPESSOAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
};
export type MS_SEXOPESSOAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
};
export type MS_SEXOPESSOAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    orderBy?: Prisma.MS_SEXOPESSOAOrderByWithRelationInput | Prisma.MS_SEXOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SEXOPESSOAScalarFieldEnum | Prisma.MS_SEXOPESSOAScalarFieldEnum[];
};
export type MS_SEXOPESSOAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    orderBy?: Prisma.MS_SEXOPESSOAOrderByWithRelationInput | Prisma.MS_SEXOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SEXOPESSOAScalarFieldEnum | Prisma.MS_SEXOPESSOAScalarFieldEnum[];
};
export type MS_SEXOPESSOAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    orderBy?: Prisma.MS_SEXOPESSOAOrderByWithRelationInput | Prisma.MS_SEXOPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SEXOPESSOAScalarFieldEnum | Prisma.MS_SEXOPESSOAScalarFieldEnum[];
};
export type MS_SEXOPESSOACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_SEXOPESSOACreateInput, Prisma.MS_SEXOPESSOAUncheckedCreateInput>;
};
export type MS_SEXOPESSOACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_SEXOPESSOACreateManyInput | Prisma.MS_SEXOPESSOACreateManyInput[];
};
export type MS_SEXOPESSOAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateInput, Prisma.MS_SEXOPESSOAUncheckedUpdateInput>;
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
};
export type MS_SEXOPESSOAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateManyMutationInput, Prisma.MS_SEXOPESSOAUncheckedUpdateManyInput>;
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    limit?: number;
};
export type MS_SEXOPESSOAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_SEXOPESSOACreateInput, Prisma.MS_SEXOPESSOAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_SEXOPESSOAUpdateInput, Prisma.MS_SEXOPESSOAUncheckedUpdateInput>;
};
export type MS_SEXOPESSOADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_SEXOPESSOAWhereUniqueInput;
};
export type MS_SEXOPESSOADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SEXOPESSOAWhereInput;
    limit?: number;
};
export type MS_SEXOPESSOA$MS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAWhereInput;
    orderBy?: Prisma.MS_PESSOAOrderByWithRelationInput | Prisma.MS_PESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOAScalarFieldEnum | Prisma.MS_PESSOAScalarFieldEnum[];
};
export type MS_SEXOPESSOADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SEXOPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_SEXOPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_SEXOPESSOAInclude<ExtArgs> | null;
};
