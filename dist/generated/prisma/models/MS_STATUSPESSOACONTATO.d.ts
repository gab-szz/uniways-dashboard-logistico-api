import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_STATUSPESSOACONTATOModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_STATUSPESSOACONTATOPayload>;
export type AggregateMS_STATUSPESSOACONTATO = {
    _count: MS_STATUSPESSOACONTATOCountAggregateOutputType | null;
    _avg: MS_STATUSPESSOACONTATOAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOACONTATOSumAggregateOutputType | null;
    _min: MS_STATUSPESSOACONTATOMinAggregateOutputType | null;
    _max: MS_STATUSPESSOACONTATOMaxAggregateOutputType | null;
};
export type MS_STATUSPESSOACONTATOAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOACONTATOSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOACONTATOMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOACONTATOMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type MS_STATUSPESSOACONTATOCountAggregateOutputType = {
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
export type MS_STATUSPESSOACONTATOAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOACONTATOSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOACONTATOMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOACONTATOMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type MS_STATUSPESSOACONTATOCountAggregateInputType = {
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
export type MS_STATUSPESSOACONTATOAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput | Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_STATUSPESSOACONTATOCountAggregateInputType;
    _avg?: MS_STATUSPESSOACONTATOAvgAggregateInputType;
    _sum?: MS_STATUSPESSOACONTATOSumAggregateInputType;
    _min?: MS_STATUSPESSOACONTATOMinAggregateInputType;
    _max?: MS_STATUSPESSOACONTATOMaxAggregateInputType;
};
export type GetMS_STATUSPESSOACONTATOAggregateType<T extends MS_STATUSPESSOACONTATOAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_STATUSPESSOACONTATO]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOACONTATO[P]> : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOACONTATO[P]>;
};
export type MS_STATUSPESSOACONTATOGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOACONTATOOrderByWithAggregationInput | Prisma.MS_STATUSPESSOACONTATOOrderByWithAggregationInput[];
    by: Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum[] | Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum;
    having?: Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_STATUSPESSOACONTATOCountAggregateInputType | true;
    _avg?: MS_STATUSPESSOACONTATOAvgAggregateInputType;
    _sum?: MS_STATUSPESSOACONTATOSumAggregateInputType;
    _min?: MS_STATUSPESSOACONTATOMinAggregateInputType;
    _max?: MS_STATUSPESSOACONTATOMaxAggregateInputType;
};
export type MS_STATUSPESSOACONTATOGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
    _count: MS_STATUSPESSOACONTATOCountAggregateOutputType | null;
    _avg: MS_STATUSPESSOACONTATOAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOACONTATOSumAggregateOutputType | null;
    _min: MS_STATUSPESSOACONTATOMinAggregateOutputType | null;
    _max: MS_STATUSPESSOACONTATOMaxAggregateOutputType | null;
};
export type GetMS_STATUSPESSOACONTATOGroupByPayload<T extends MS_STATUSPESSOACONTATOGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_STATUSPESSOACONTATOGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_STATUSPESSOACONTATOGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_STATUSPESSOACONTATOGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_STATUSPESSOACONTATOGroupByOutputType[P]>;
}>>;
export type MS_STATUSPESSOACONTATOWhereInput = {
    AND?: Prisma.MS_STATUSPESSOACONTATOWhereInput | Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    OR?: Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOACONTATOWhereInput | Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_STATUSPESSOACONTATO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOACONTATO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOListRelationFilter;
};
export type MS_STATUSPESSOACONTATOOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOOrderByRelationAggregateInput;
};
export type MS_STATUSPESSOACONTATOWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_STATUSPESSOACONTATOWhereInput | Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    OR?: Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOACONTATOWhereInput | Prisma.MS_STATUSPESSOACONTATOWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOACONTATO"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOListRelationFilter;
}, "HANDLE">;
export type MS_STATUSPESSOACONTATOOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_STATUSPESSOACONTATOCountOrderByAggregateInput;
    _avg?: Prisma.MS_STATUSPESSOACONTATOAvgOrderByAggregateInput;
    _max?: Prisma.MS_STATUSPESSOACONTATOMaxOrderByAggregateInput;
    _min?: Prisma.MS_STATUSPESSOACONTATOMinOrderByAggregateInput;
    _sum?: Prisma.MS_STATUSPESSOACONTATOSumOrderByAggregateInput;
};
export type MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOACONTATOScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | number | null;
    IMAGEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOACONTATO"> | number | null;
};
export type MS_STATUSPESSOACONTATOCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOCreateNestedManyWithoutMS_STATUSPESSOACONTATOInput;
};
export type MS_STATUSPESSOACONTATOUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOUncheckedCreateNestedManyWithoutMS_STATUSPESSOACONTATOInput;
};
export type MS_STATUSPESSOACONTATOUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOUpdateManyWithoutMS_STATUSPESSOACONTATONestedInput;
};
export type MS_STATUSPESSOACONTATOUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOACONTATO?: Prisma.MS_PESSOACONTATOUncheckedUpdateManyWithoutMS_STATUSPESSOACONTATONestedInput;
};
export type MS_STATUSPESSOACONTATOCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOACONTATOUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOACONTATOUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOACONTATONullableScalarRelationFilter = {
    is?: Prisma.MS_STATUSPESSOACONTATOWhereInput | null;
    isNot?: Prisma.MS_STATUSPESSOACONTATOWhereInput | null;
};
export type MS_STATUSPESSOACONTATOCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACONTATOAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACONTATOMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACONTATOMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACONTATOSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACONTATOCreateNestedOneWithoutMS_PESSOACONTATOInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateWithoutMS_PESSOACONTATOInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACONTATOCreateOrConnectWithoutMS_PESSOACONTATOInput;
    connect?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
};
export type MS_STATUSPESSOACONTATOUpdateOneWithoutMS_PESSOACONTATONestedInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateWithoutMS_PESSOACONTATOInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACONTATOCreateOrConnectWithoutMS_PESSOACONTATOInput;
    upsert?: Prisma.MS_STATUSPESSOACONTATOUpsertWithoutMS_PESSOACONTATOInput;
    disconnect?: Prisma.MS_STATUSPESSOACONTATOWhereInput | boolean;
    delete?: Prisma.MS_STATUSPESSOACONTATOWhereInput | boolean;
    connect?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateToOneWithWhereWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUpdateWithoutMS_PESSOACONTATOInput>, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateWithoutMS_PESSOACONTATOInput>;
};
export type MS_STATUSPESSOACONTATOCreateWithoutMS_PESSOACONTATOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOACONTATOUncheckedCreateWithoutMS_PESSOACONTATOInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type MS_STATUSPESSOACONTATOCreateOrConnectWithoutMS_PESSOACONTATOInput = {
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateWithoutMS_PESSOACONTATOInput>;
};
export type MS_STATUSPESSOACONTATOUpsertWithoutMS_PESSOACONTATOInput = {
    update: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateWithoutMS_PESSOACONTATOInput>;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateWithoutMS_PESSOACONTATOInput>;
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
};
export type MS_STATUSPESSOACONTATOUpdateToOneWithWhereWithoutMS_PESSOACONTATOInput = {
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateWithoutMS_PESSOACONTATOInput, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateWithoutMS_PESSOACONTATOInput>;
};
export type MS_STATUSPESSOACONTATOUpdateWithoutMS_PESSOACONTATOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOACONTATOUncheckedUpdateWithoutMS_PESSOACONTATOInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOACONTATOCountOutputType = {
    MS_PESSOACONTATO: number;
};
export type MS_STATUSPESSOACONTATOCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOACONTATO?: boolean | MS_STATUSPESSOACONTATOCountOutputTypeCountMS_PESSOACONTATOArgs;
};
export type MS_STATUSPESSOACONTATOCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOCountOutputTypeSelect<ExtArgs> | null;
};
export type MS_STATUSPESSOACONTATOCountOutputTypeCountMS_PESSOACONTATOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOACONTATOWhereInput;
};
export type MS_STATUSPESSOACONTATOSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
    MS_PESSOACONTATO?: boolean | Prisma.MS_STATUSPESSOACONTATO$MS_PESSOACONTATOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOACONTATOCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_STATUSPESSOACONTATO"]>;
export type MS_STATUSPESSOACONTATOSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
};
export type MS_STATUSPESSOACONTATOOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "IMAGEM", ExtArgs["result"]["mS_STATUSPESSOACONTATO"]>;
export type MS_STATUSPESSOACONTATOInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOACONTATO?: boolean | Prisma.MS_STATUSPESSOACONTATO$MS_PESSOACONTATOArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOACONTATOCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_STATUSPESSOACONTATOPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_STATUSPESSOACONTATO";
    objects: {
        MS_PESSOACONTATO: Prisma.$MS_PESSOACONTATOPayload<ExtArgs>[];
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
    }, ExtArgs["result"]["mS_STATUSPESSOACONTATO"]>;
    composites: {};
};
export type MS_STATUSPESSOACONTATOGetPayload<S extends boolean | null | undefined | MS_STATUSPESSOACONTATODefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload, S>;
export type MS_STATUSPESSOACONTATOCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_STATUSPESSOACONTATOFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_STATUSPESSOACONTATOCountAggregateInputType | true;
};
export interface MS_STATUSPESSOACONTATODelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_STATUSPESSOACONTATO'];
        meta: {
            name: 'MS_STATUSPESSOACONTATO';
        };
    };
    findUnique<T extends MS_STATUSPESSOACONTATOFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_STATUSPESSOACONTATOFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_STATUSPESSOACONTATOFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_STATUSPESSOACONTATOFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_STATUSPESSOACONTATOFindManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_STATUSPESSOACONTATOCreateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOCreateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_STATUSPESSOACONTATOCreateManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_STATUSPESSOACONTATODeleteArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATODeleteArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_STATUSPESSOACONTATOUpdateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_STATUSPESSOACONTATODeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATODeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_STATUSPESSOACONTATOUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_STATUSPESSOACONTATOUpsertArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACONTATOUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOACONTATOClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOACONTATOPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_STATUSPESSOACONTATOCountArgs>(args?: Prisma.Subset<T, MS_STATUSPESSOACONTATOCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_STATUSPESSOACONTATOCountAggregateOutputType> : number>;
    aggregate<T extends MS_STATUSPESSOACONTATOAggregateArgs>(args: Prisma.Subset<T, MS_STATUSPESSOACONTATOAggregateArgs>): Prisma.PrismaPromise<GetMS_STATUSPESSOACONTATOAggregateType<T>>;
    groupBy<T extends MS_STATUSPESSOACONTATOGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_STATUSPESSOACONTATOGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_STATUSPESSOACONTATOGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_STATUSPESSOACONTATOGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_STATUSPESSOACONTATOGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_STATUSPESSOACONTATOFieldRefs;
}
export interface Prisma__MS_STATUSPESSOACONTATOClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOACONTATO<T extends Prisma.MS_STATUSPESSOACONTATO$MS_PESSOACONTATOArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_STATUSPESSOACONTATO$MS_PESSOACONTATOArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOACONTATOPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_STATUSPESSOACONTATOFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'Int'>;
    readonly IMAGEM: Prisma.FieldRef<"MS_STATUSPESSOACONTATO", 'Int'>;
}
export type MS_STATUSPESSOACONTATOFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
};
export type MS_STATUSPESSOACONTATOFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
};
export type MS_STATUSPESSOACONTATOFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput | Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum | Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum[];
};
export type MS_STATUSPESSOACONTATOFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput | Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum | Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum[];
};
export type MS_STATUSPESSOACONTATOFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput | Prisma.MS_STATUSPESSOACONTATOOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum | Prisma.MS_STATUSPESSOACONTATOScalarFieldEnum[];
};
export type MS_STATUSPESSOACONTATOCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateInput>;
};
export type MS_STATUSPESSOACONTATOCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_STATUSPESSOACONTATOCreateManyInput | Prisma.MS_STATUSPESSOACONTATOCreateManyInput[];
};
export type MS_STATUSPESSOACONTATOUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateInput, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateInput>;
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
};
export type MS_STATUSPESSOACONTATOUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateManyMutationInput, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateManyInput>;
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOACONTATOUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOCreateInput, Prisma.MS_STATUSPESSOACONTATOUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_STATUSPESSOACONTATOUpdateInput, Prisma.MS_STATUSPESSOACONTATOUncheckedUpdateInput>;
};
export type MS_STATUSPESSOACONTATODeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOACONTATOWhereUniqueInput;
};
export type MS_STATUSPESSOACONTATODeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOACONTATOWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOACONTATO$MS_PESSOACONTATOArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOACONTATOInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOACONTATOWhereInput;
    orderBy?: Prisma.MS_PESSOACONTATOOrderByWithRelationInput | Prisma.MS_PESSOACONTATOOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOACONTATOWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOACONTATOScalarFieldEnum | Prisma.MS_PESSOACONTATOScalarFieldEnum[];
};
export type MS_STATUSPESSOACONTATODefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACONTATOSelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOACONTATOOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOACONTATOInclude<ExtArgs> | null;
};
