import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_STATUSPESSOAENDERECOModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_STATUSPESSOAENDERECOPayload>;
export type AggregateMS_STATUSPESSOAENDERECO = {
    _count: MS_STATUSPESSOAENDERECOCountAggregateOutputType | null;
    _avg: MS_STATUSPESSOAENDERECOAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOAENDERECOSumAggregateOutputType | null;
    _min: MS_STATUSPESSOAENDERECOMinAggregateOutputType | null;
    _max: MS_STATUSPESSOAENDERECOMaxAggregateOutputType | null;
};
export type MS_STATUSPESSOAENDERECOAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOAENDERECOSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOAENDERECOMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOAENDERECOMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOAENDERECOCountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    NOME: number;
    ORDEM: number;
    IMAGEM: number;
    _all: number;
};
export type MS_STATUSPESSOAENDERECOAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOAENDERECOSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOAENDERECOMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOAENDERECOMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOAENDERECOCountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
    _all?: true;
};
export type MS_STATUSPESSOAENDERECOAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_STATUSPESSOAENDERECOCountAggregateInputType;
    _avg?: MS_STATUSPESSOAENDERECOAvgAggregateInputType;
    _sum?: MS_STATUSPESSOAENDERECOSumAggregateInputType;
    _min?: MS_STATUSPESSOAENDERECOMinAggregateInputType;
    _max?: MS_STATUSPESSOAENDERECOMaxAggregateInputType;
};
export type GetMS_STATUSPESSOAENDERECOAggregateType<T extends MS_STATUSPESSOAENDERECOAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_STATUSPESSOAENDERECO]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOAENDERECO[P]> : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOAENDERECO[P]>;
};
export type MS_STATUSPESSOAENDERECOGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAENDERECOOrderByWithAggregationInput | Prisma.MS_STATUSPESSOAENDERECOOrderByWithAggregationInput[];
    by: Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum[] | Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum;
    having?: Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_STATUSPESSOAENDERECOCountAggregateInputType | true;
    _avg?: MS_STATUSPESSOAENDERECOAvgAggregateInputType;
    _sum?: MS_STATUSPESSOAENDERECOSumAggregateInputType;
    _min?: MS_STATUSPESSOAENDERECOMinAggregateInputType;
    _max?: MS_STATUSPESSOAENDERECOMaxAggregateInputType;
};
export type MS_STATUSPESSOAENDERECOGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
    _count: MS_STATUSPESSOAENDERECOCountAggregateOutputType | null;
    _avg: MS_STATUSPESSOAENDERECOAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOAENDERECOSumAggregateOutputType | null;
    _min: MS_STATUSPESSOAENDERECOMinAggregateOutputType | null;
    _max: MS_STATUSPESSOAENDERECOMaxAggregateOutputType | null;
};
export type GetMS_STATUSPESSOAENDERECOGroupByPayload<T extends MS_STATUSPESSOAENDERECOGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_STATUSPESSOAENDERECOGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_STATUSPESSOAENDERECOGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_STATUSPESSOAENDERECOGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_STATUSPESSOAENDERECOGroupByOutputType[P]>;
}>>;
export type MS_STATUSPESSOAENDERECOWhereInput = {
    AND?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    OR?: Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_STATUSPESSOAENDERECO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOListRelationFilter;
};
export type MS_STATUSPESSOAENDERECOOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOOrderByRelationAggregateInput;
};
export type MS_STATUSPESSOAENDERECOWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    OR?: Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | Prisma.MS_STATUSPESSOAENDERECOWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOListRelationFilter;
}, "HANDLE">;
export type MS_STATUSPESSOAENDERECOOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_STATUSPESSOAENDERECOCountOrderByAggregateInput;
    _avg?: Prisma.MS_STATUSPESSOAENDERECOAvgOrderByAggregateInput;
    _max?: Prisma.MS_STATUSPESSOAENDERECOMaxOrderByAggregateInput;
    _min?: Prisma.MS_STATUSPESSOAENDERECOMinOrderByAggregateInput;
    _sum?: Prisma.MS_STATUSPESSOAENDERECOSumOrderByAggregateInput;
};
export type MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOAENDERECOScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
    IMAGEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOAENDERECO"> | number | null;
};
export type MS_STATUSPESSOAENDERECOCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOCreateNestedManyWithoutMS_STATUSPESSOAENDERECOInput;
};
export type MS_STATUSPESSOAENDERECOUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUncheckedCreateNestedManyWithoutMS_STATUSPESSOAENDERECOInput;
};
export type MS_STATUSPESSOAENDERECOUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUpdateManyWithoutMS_STATUSPESSOAENDERECONestedInput;
};
export type MS_STATUSPESSOAENDERECOUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOAENDERECO?: Prisma.MS_PESSOAENDERECOUncheckedUpdateManyWithoutMS_STATUSPESSOAENDERECONestedInput;
};
export type MS_STATUSPESSOAENDERECOCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOAENDERECOUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOAENDERECOUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOAENDERECONullableScalarRelationFilter = {
    is?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | null;
    isNot?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | null;
};
export type MS_STATUSPESSOAENDERECOCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAENDERECOAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAENDERECOMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAENDERECOMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAENDERECOSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAENDERECOCreateNestedOneWithoutMS_PESSOAENDERECOInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput;
    connect?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
};
export type MS_STATUSPESSOAENDERECOUpdateOneWithoutMS_PESSOAENDERECONestedInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput;
    upsert?: Prisma.MS_STATUSPESSOAENDERECOUpsertWithoutMS_PESSOAENDERECOInput;
    disconnect?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | boolean;
    delete?: Prisma.MS_STATUSPESSOAENDERECOWhereInput | boolean;
    connect?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateToOneWithWhereWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput>, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_STATUSPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOAENDERECOCreateOrConnectWithoutMS_PESSOAENDERECOInput = {
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_STATUSPESSOAENDERECOUpsertWithoutMS_PESSOAENDERECOInput = {
    update: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateWithoutMS_PESSOAENDERECOInput>;
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
};
export type MS_STATUSPESSOAENDERECOUpdateToOneWithWhereWithoutMS_PESSOAENDERECOInput = {
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput>;
};
export type MS_STATUSPESSOAENDERECOUpdateWithoutMS_PESSOAENDERECOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOAENDERECOUncheckedUpdateWithoutMS_PESSOAENDERECOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOAENDERECOCountOutputType = {
    MS_PESSOAENDERECO: number;
};
export type MS_STATUSPESSOAENDERECOCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOAENDERECO?: boolean | MS_STATUSPESSOAENDERECOCountOutputTypeCountMS_PESSOAENDERECOArgs;
};
export type MS_STATUSPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOCountOutputTypeSelect<ExtArgs> | null;
};
export type MS_STATUSPESSOAENDERECOCountOutputTypeCountMS_PESSOAENDERECOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAENDERECOWhereInput;
};
export type MS_STATUSPESSOAENDERECOSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
    MS_PESSOAENDERECO?: boolean | Prisma.MS_STATUSPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_STATUSPESSOAENDERECO"]>;
export type MS_STATUSPESSOAENDERECOSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
};
export type MS_STATUSPESSOAENDERECOOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "IMAGEM", ExtArgs["result"]["mS_STATUSPESSOAENDERECO"]>;
export type MS_STATUSPESSOAENDERECOInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOAENDERECO?: boolean | Prisma.MS_STATUSPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOAENDERECOCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_STATUSPESSOAENDERECOPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_STATUSPESSOAENDERECO";
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
        IMAGEM: number | null;
    }, ExtArgs["result"]["mS_STATUSPESSOAENDERECO"]>;
    composites: {};
};
export type MS_STATUSPESSOAENDERECOGetPayload<S extends boolean | null | undefined | MS_STATUSPESSOAENDERECODefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload, S>;
export type MS_STATUSPESSOAENDERECOCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_STATUSPESSOAENDERECOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_STATUSPESSOAENDERECOCountAggregateInputType | true;
};
export interface MS_STATUSPESSOAENDERECODelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_STATUSPESSOAENDERECO'];
        meta: {
            name: 'MS_STATUSPESSOAENDERECO';
        };
    };
    findUnique<T extends MS_STATUSPESSOAENDERECOFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_STATUSPESSOAENDERECOFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_STATUSPESSOAENDERECOFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_STATUSPESSOAENDERECOFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_STATUSPESSOAENDERECOFindManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_STATUSPESSOAENDERECOCreateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOCreateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_STATUSPESSOAENDERECOCreateManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_STATUSPESSOAENDERECODeleteArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECODeleteArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_STATUSPESSOAENDERECOUpdateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_STATUSPESSOAENDERECODeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_STATUSPESSOAENDERECOUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_STATUSPESSOAENDERECOUpsertArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAENDERECOUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAENDERECOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAENDERECOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_STATUSPESSOAENDERECOCountArgs>(args?: Prisma.Subset<T, MS_STATUSPESSOAENDERECOCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_STATUSPESSOAENDERECOCountAggregateOutputType> : number>;
    aggregate<T extends MS_STATUSPESSOAENDERECOAggregateArgs>(args: Prisma.Subset<T, MS_STATUSPESSOAENDERECOAggregateArgs>): Prisma.PrismaPromise<GetMS_STATUSPESSOAENDERECOAggregateType<T>>;
    groupBy<T extends MS_STATUSPESSOAENDERECOGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_STATUSPESSOAENDERECOGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_STATUSPESSOAENDERECOGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_STATUSPESSOAENDERECOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_STATUSPESSOAENDERECOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_STATUSPESSOAENDERECOFieldRefs;
}
export interface Prisma__MS_STATUSPESSOAENDERECOClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOAENDERECO<T extends Prisma.MS_STATUSPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_STATUSPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAENDERECOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_STATUSPESSOAENDERECOFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'Int'>;
    readonly IMAGEM: Prisma.FieldRef<"MS_STATUSPESSOAENDERECO", 'Int'>;
}
export type MS_STATUSPESSOAENDERECOFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
};
export type MS_STATUSPESSOAENDERECOFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
};
export type MS_STATUSPESSOAENDERECOFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum | Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum[];
};
export type MS_STATUSPESSOAENDERECOFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum | Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum[];
};
export type MS_STATUSPESSOAENDERECOFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput | Prisma.MS_STATUSPESSOAENDERECOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum | Prisma.MS_STATUSPESSOAENDERECOScalarFieldEnum[];
};
export type MS_STATUSPESSOAENDERECOCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateInput>;
};
export type MS_STATUSPESSOAENDERECOCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_STATUSPESSOAENDERECOCreateManyInput | Prisma.MS_STATUSPESSOAENDERECOCreateManyInput[];
};
export type MS_STATUSPESSOAENDERECOUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateInput>;
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
};
export type MS_STATUSPESSOAENDERECOUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateManyMutationInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateManyInput>;
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOAENDERECOUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOCreateInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_STATUSPESSOAENDERECOUpdateInput, Prisma.MS_STATUSPESSOAENDERECOUncheckedUpdateInput>;
};
export type MS_STATUSPESSOAENDERECODeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAENDERECOWhereUniqueInput;
};
export type MS_STATUSPESSOAENDERECODeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAENDERECOWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOAENDERECO$MS_PESSOAENDERECOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MS_STATUSPESSOAENDERECODefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOAENDERECOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAENDERECOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAENDERECOInclude<ExtArgs> | null;
};
