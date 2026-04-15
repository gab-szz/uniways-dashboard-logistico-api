import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_TIPOPESSOAENDERECOModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_TIPOPESSOAENDERECOPayload>;
export type AggregateMS_TIPOPESSOAENDERECO = {
    _count: MS_TIPOPESSOAENDERECOCountAggregateOutputType | null;
    _avg: MS_TIPOPESSOAENDERECOAvgAggregateOutputType | null;
    _sum: MS_TIPOPESSOAENDERECOSumAggregateOutputType | null;
    _min: MS_TIPOPESSOAENDERECOMinAggregateOutputType | null;
    _max: MS_TIPOPESSOAENDERECOMaxAggregateOutputType | null;
};
export type MS_TIPOPESSOAENDERECOAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
};
export type MS_TIPOPESSOAENDERECOSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
};
export type MS_TIPOPESSOAENDERECOMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
};
export type MS_TIPOPESSOAENDERECOMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
};
export type MS_TIPOPESSOAENDERECOCountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    NOME: number;
    ORDEM: number;
    SIGLA: number;
    _all: number;
};
export type MS_TIPOPESSOAENDERECOAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
};
export type MS_TIPOPESSOAENDERECOSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
};
export type MS_TIPOPESSOAENDERECOMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
};
export type MS_TIPOPESSOAENDERECOMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
};
export type MS_TIPOPESSOAENDERECOCountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    SIGLA?: true;
    _all?: true;
};
export type MS_TIPOPESSOAENDERECOAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_TIPOPESSOAENDERECOCountAggregateInputType;
    _avg?: MS_TIPOPESSOAENDERECOAvgAggregateInputType;
    _sum?: MS_TIPOPESSOAENDERECOSumAggregateInputType;
    _min?: MS_TIPOPESSOAENDERECOMinAggregateInputType;
    _max?: MS_TIPOPESSOAENDERECOMaxAggregateInputType;
};
export type GetMS_TIPOPESSOAENDERECOAggregateType<T extends MS_TIPOPESSOAENDERECOAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_TIPOPESSOAENDERECO]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_TIPOPESSOAENDERECO[P]> : Prisma.GetScalarType<T[P], AggregateMS_TIPOPESSOAENDERECO[P]>;
};
export type MS_TIPOPESSOAENDERECOGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAENDERECOOrderByWithAggregationInput | Prisma.MS_TIPOPESSOAENDERECOOrderByWithAggregationInput[];
    by: Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum[] | Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum;
    having?: Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_TIPOPESSOAENDERECOCountAggregateInputType | true;
    _avg?: MS_TIPOPESSOAENDERECOAvgAggregateInputType;
    _sum?: MS_TIPOPESSOAENDERECOSumAggregateInputType;
    _min?: MS_TIPOPESSOAENDERECOMinAggregateInputType;
    _max?: MS_TIPOPESSOAENDERECOMaxAggregateInputType;
};
export type MS_TIPOPESSOAENDERECOGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    SIGLA: string | null;
    _count: MS_TIPOPESSOAENDERECOCountAggregateOutputType | null;
    _avg: MS_TIPOPESSOAENDERECOAvgAggregateOutputType | null;
    _sum: MS_TIPOPESSOAENDERECOSumAggregateOutputType | null;
    _min: MS_TIPOPESSOAENDERECOMinAggregateOutputType | null;
    _max: MS_TIPOPESSOAENDERECOMaxAggregateOutputType | null;
};
export type GetMS_TIPOPESSOAENDERECOGroupByPayload<T extends MS_TIPOPESSOAENDERECOGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_TIPOPESSOAENDERECOGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_TIPOPESSOAENDERECOGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_TIPOPESSOAENDERECOGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_TIPOPESSOAENDERECOGroupByOutputType[P]>;
}>>;
export type MS_TIPOPESSOAENDERECOWhereInput = {
    AND?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    OR?: Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    NOT?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_TIPOPESSOAENDERECO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOListRelationFilter;
};
export type MS_TIPOPESSOAENDERECOOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOOrderByRelationAggregateInput;
};
export type MS_TIPOPESSOAENDERECOWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    OR?: Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    NOT?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | Prisma.MS_TIPOPESSOAENDERECOWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    SIGLA?: Prisma.StringNullableFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOListRelationFilter;
}, "HANDLE">;
export type MS_TIPOPESSOAENDERECOOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    SIGLA?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_TIPOPESSOAENDERECOCountOrderByAggregateInput;
    _avg?: Prisma.MS_TIPOPESSOAENDERECOAvgOrderByAggregateInput;
    _max?: Prisma.MS_TIPOPESSOAENDERECOMaxOrderByAggregateInput;
    _min?: Prisma.MS_TIPOPESSOAENDERECOMinOrderByAggregateInput;
    _sum?: Prisma.MS_TIPOPESSOAENDERECOSumOrderByAggregateInput;
};
export type MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput | Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput | Prisma.MS_TIPOPESSOAENDERECOScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | number | null;
    SIGLA?: Prisma.StringNullableWithAggregatesFilter<"MS_TIPOPESSOAENDERECO"> | string | null;
};
export type MS_TIPOPESSOAENDERECOCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOCreateNestedManyWithoutMS_TIPOPESSOAENDERECOInput;
};
export type MS_TIPOPESSOAENDERECOUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUncheckedCreateNestedManyWithoutMS_TIPOPESSOAENDERECOInput;
};
export type MS_TIPOPESSOAENDERECOUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUpdateManyWithoutMS_TIPOPESSOAENDERECONestedInput;
};
export type MS_TIPOPESSOAENDERECOUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUncheckedUpdateManyWithoutMS_TIPOPESSOAENDERECONestedInput;
};
export type MS_TIPOPESSOAENDERECOCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
};
export type MS_TIPOPESSOAENDERECOUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_TIPOPESSOAENDERECOUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_TIPOPESSOAENDERECONullableScalarRelationFilter = {
    is?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | null;
    isNot?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | null;
};
export type MS_TIPOPESSOAENDERECOCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAENDERECOAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAENDERECOMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAENDERECOMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    SIGLA?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAENDERECOSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
};
export type MS_TIPOPESSOAENDERECOCreateNestedOneWithoutMS_PESSOAENDERECOInput = {
    create?: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    connectOrCreate?: Prisma.MS_TIPOPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput;
    connect?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
};
export type MS_TIPOPESSOAENDERECOUpdateOneWithoutMS_PESSOAENDERECONestedInput = {
    create?: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    connectOrCreate?: Prisma.MS_TIPOPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput;
    upsert?: Prisma.MS_TIPOPESSOAENDERECOUpsertWithoutMS_PESSOAENDERECOInput;
    disconnect?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | boolean;
    delete?: Prisma.MS_TIPOPESSOAENDERECOWhereInput | boolean;
    connect?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateToOneWithWhereWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput>, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_TIPOPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
};
export type MS_TIPOPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    SIGLA?: string | null;
};
export type MS_TIPOPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput = {
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_TIPOPESSOAENDERECOUpsertWithoutMS_PESSOAENDERECOInput = {
    update: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
    create: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
};
export type MS_TIPOPESSOAENDERECOUpdateToOneWithWhereWithoutMS_PESSOAENDERECOInput = {
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_TIPOPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_TIPOPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    SIGLA?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_TIPOPESSOAENDERECOCountOutputType = {
    MS_PESSOAENDERECO: number;
};
export type MS_TIPOPESSOAENDERECOCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOAENDERECO?: boolean | MS_TIPOPESSOAENDERECOCountOutputTypeCountMS_PESSOAENDERECOArgs;
};
export type MS_TIPOPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOCountOutputTypeSelect<ExtArgs> | null;
};
export type MS_TIPOPESSOAENDERECOCountOutputTypeCountMS_PESSOAENDERECOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAENDERECOWhereInput;
};
export type MS_TIPOPESSOAENDERECOSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    SIGLA?: boolean;
    MS_PESSOAENDERECO?: boolean | Prisma.MS_TIPOPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_TIPOPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_TIPOPESSOAENDERECO"]>;
export type MS_TIPOPESSOAENDERECOSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    SIGLA?: boolean;
};
export type MS_TIPOPESSOAENDERECOOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "SIGLA", ExtArgs["result"]["mS_TIPOPESSOAENDERECO"]>;
export type MS_TIPOPESSOAENDERECOInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOAENDERECO?: boolean | Prisma.MS_TIPOPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_TIPOPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_TIPOPESSOAENDERECOPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_TIPOPESSOAENDERECO";
    objects: {
        MS_PESSOAENDERECO: Prisma.$MS_PESSOAENDERECOPayload<ExtArgs>[];
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
    }, ExtArgs["result"]["mS_TIPOPESSOAENDERECO"]>;
    composites: {};
};
export type MS_TIPOPESSOAENDERECOGetPayload<S extends boolean | null | undefined | MS_TIPOPESSOAENDERECODefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload, S>;
export type MS_TIPOPESSOAENDERECOCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_TIPOPESSOAENDERECOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_TIPOPESSOAENDERECOCountAggregateInputType | true;
};
export interface MS_TIPOPESSOAENDERECODelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_TIPOPESSOAENDERECO'];
        meta: {
            name: 'MS_TIPOPESSOAENDERECO';
        };
    };
    findUnique<T extends MS_TIPOPESSOAENDERECOFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_TIPOPESSOAENDERECOFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_TIPOPESSOAENDERECOFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_TIPOPESSOAENDERECOFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_TIPOPESSOAENDERECOFindManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_TIPOPESSOAENDERECOCreateArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOCreateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_TIPOPESSOAENDERECOCreateManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_TIPOPESSOAENDERECODeleteArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECODeleteArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_TIPOPESSOAENDERECOUpdateArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_TIPOPESSOAENDERECODeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_TIPOPESSOAENDERECOUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_TIPOPESSOAENDERECOUpsertArgs>(args: Prisma.SelectSubset<T, MS_TIPOPESSOAENDERECOUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_TIPOPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_TIPOPESSOAENDERECOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_TIPOPESSOAENDERECOCountArgs>(args?: Prisma.Subset<T, MS_TIPOPESSOAENDERECOCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_TIPOPESSOAENDERECOCountAggregateOutputType> : number>;
    aggregate<T extends MS_TIPOPESSOAENDERECOAggregateArgs>(args: Prisma.Subset<T, MS_TIPOPESSOAENDERECOAggregateArgs>): Prisma.PrismaPromise<GetMS_TIPOPESSOAENDERECOAggregateType<T>>;
    groupBy<T extends MS_TIPOPESSOAENDERECOGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_TIPOPESSOAENDERECOGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_TIPOPESSOAENDERECOGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_TIPOPESSOAENDERECOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_TIPOPESSOAENDERECOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_TIPOPESSOAENDERECOFieldRefs;
}
export interface Prisma__MS_TIPOPESSOAENDERECOClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOAENDERECO<T extends Prisma.MS_TIPOPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_TIPOPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAENDERECOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_TIPOPESSOAENDERECOFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'Int'>;
    readonly SIGLA: Prisma.FieldRef<"MS_TIPOPESSOAENDERECO", 'String'>;
}
export type MS_TIPOPESSOAENDERECOFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
};
export type MS_TIPOPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
};
export type MS_TIPOPESSOAENDERECOFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum | Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum[];
};
export type MS_TIPOPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum | Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum[];
};
export type MS_TIPOPESSOAENDERECOFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_TIPOPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum | Prisma.MS_TIPOPESSOAENDERECOScalarFieldEnum[];
};
export type MS_TIPOPESSOAENDERECOCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateInput>;
};
export type MS_TIPOPESSOAENDERECOCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_TIPOPESSOAENDERECOCreateManyInput | Prisma.MS_TIPOPESSOAENDERECOCreateManyInput[];
};
export type MS_TIPOPESSOAENDERECOUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateInput>;
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
};
export type MS_TIPOPESSOAENDERECOUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateManyMutationInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateManyInput>;
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    limit?: number;
};
export type MS_TIPOPESSOAENDERECOUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOCreateInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_TIPOPESSOAENDERECOUpdateInput, Prisma.MS_TIPOPESSOAENDERECOUncheckedUpdateInput>;
};
export type MS_TIPOPESSOAENDERECODeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_TIPOPESSOAENDERECOWhereUniqueInput;
};
export type MS_TIPOPESSOAENDERECODeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_TIPOPESSOAENDERECOWhereInput;
    limit?: number;
};
export type MS_TIPOPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_PESSOAENDERECOOrderByWithRelationInput | Prisma.MS_PESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOAENDERECOScalarFieldEnum | Prisma.MS_PESSOAENDERECOScalarFieldEnum[];
};
export type MS_TIPOPESSOAENDERECODefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_TIPOPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_TIPOPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_TIPOPESSOAENDERECOInclude<ExtArgs> | null;
};
