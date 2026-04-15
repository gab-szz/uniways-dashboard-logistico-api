import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OP_STATUSVIAGEMModel = runtime.Types.Result.DefaultSelection<Prisma.$OP_STATUSVIAGEMPayload>;
export type AggregateOP_STATUSVIAGEM = {
    _count: OP_STATUSVIAGEMCountAggregateOutputType | null;
    _avg: OP_STATUSVIAGEMAvgAggregateOutputType | null;
    _sum: OP_STATUSVIAGEMSumAggregateOutputType | null;
    _min: OP_STATUSVIAGEMMinAggregateOutputType | null;
    _max: OP_STATUSVIAGEMMaxAggregateOutputType | null;
};
export type OP_STATUSVIAGEMAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type OP_STATUSVIAGEMSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type OP_STATUSVIAGEMMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type OP_STATUSVIAGEMMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
};
export type OP_STATUSVIAGEMCountAggregateOutputType = {
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
export type OP_STATUSVIAGEMAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type OP_STATUSVIAGEMSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type OP_STATUSVIAGEMMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type OP_STATUSVIAGEMMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    IMAGEM?: true;
};
export type OP_STATUSVIAGEMCountAggregateInputType = {
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
export type OP_STATUSVIAGEMAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    orderBy?: Prisma.OP_STATUSVIAGEMOrderByWithRelationInput | Prisma.OP_STATUSVIAGEMOrderByWithRelationInput[];
    cursor?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OP_STATUSVIAGEMCountAggregateInputType;
    _avg?: OP_STATUSVIAGEMAvgAggregateInputType;
    _sum?: OP_STATUSVIAGEMSumAggregateInputType;
    _min?: OP_STATUSVIAGEMMinAggregateInputType;
    _max?: OP_STATUSVIAGEMMaxAggregateInputType;
};
export type GetOP_STATUSVIAGEMAggregateType<T extends OP_STATUSVIAGEMAggregateArgs> = {
    [P in keyof T & keyof AggregateOP_STATUSVIAGEM]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOP_STATUSVIAGEM[P]> : Prisma.GetScalarType<T[P], AggregateOP_STATUSVIAGEM[P]>;
};
export type OP_STATUSVIAGEMGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    orderBy?: Prisma.OP_STATUSVIAGEMOrderByWithAggregationInput | Prisma.OP_STATUSVIAGEMOrderByWithAggregationInput[];
    by: Prisma.OP_STATUSVIAGEMScalarFieldEnum[] | Prisma.OP_STATUSVIAGEMScalarFieldEnum;
    having?: Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OP_STATUSVIAGEMCountAggregateInputType | true;
    _avg?: OP_STATUSVIAGEMAvgAggregateInputType;
    _sum?: OP_STATUSVIAGEMSumAggregateInputType;
    _min?: OP_STATUSVIAGEMMinAggregateInputType;
    _max?: OP_STATUSVIAGEMMaxAggregateInputType;
};
export type OP_STATUSVIAGEMGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    IMAGEM: number | null;
    _count: OP_STATUSVIAGEMCountAggregateOutputType | null;
    _avg: OP_STATUSVIAGEMAvgAggregateOutputType | null;
    _sum: OP_STATUSVIAGEMSumAggregateOutputType | null;
    _min: OP_STATUSVIAGEMMinAggregateOutputType | null;
    _max: OP_STATUSVIAGEMMaxAggregateOutputType | null;
};
export type GetOP_STATUSVIAGEMGroupByPayload<T extends OP_STATUSVIAGEMGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OP_STATUSVIAGEMGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OP_STATUSVIAGEMGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OP_STATUSVIAGEMGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OP_STATUSVIAGEMGroupByOutputType[P]>;
}>>;
export type OP_STATUSVIAGEMWhereInput = {
    AND?: Prisma.OP_STATUSVIAGEMWhereInput | Prisma.OP_STATUSVIAGEMWhereInput[];
    OR?: Prisma.OP_STATUSVIAGEMWhereInput[];
    NOT?: Prisma.OP_STATUSVIAGEMWhereInput | Prisma.OP_STATUSVIAGEMWhereInput[];
    HANDLE?: Prisma.IntFilter<"OP_STATUSVIAGEM"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    NOME?: Prisma.StringNullableFilter<"OP_STATUSVIAGEM"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMListRelationFilter;
};
export type OP_STATUSVIAGEMOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    OP_VIAGEM?: Prisma.OP_VIAGEMOrderByRelationAggregateInput;
};
export type OP_STATUSVIAGEMWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.OP_STATUSVIAGEMWhereInput | Prisma.OP_STATUSVIAGEMWhereInput[];
    OR?: Prisma.OP_STATUSVIAGEMWhereInput[];
    NOT?: Prisma.OP_STATUSVIAGEMWhereInput | Prisma.OP_STATUSVIAGEMWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    NOME?: Prisma.StringNullableFilter<"OP_STATUSVIAGEM"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    IMAGEM?: Prisma.IntNullableFilter<"OP_STATUSVIAGEM"> | number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMListRelationFilter;
}, "HANDLE">;
export type OP_STATUSVIAGEMOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OP_STATUSVIAGEMCountOrderByAggregateInput;
    _avg?: Prisma.OP_STATUSVIAGEMAvgOrderByAggregateInput;
    _max?: Prisma.OP_STATUSVIAGEMMaxOrderByAggregateInput;
    _min?: Prisma.OP_STATUSVIAGEMMinOrderByAggregateInput;
    _sum?: Prisma.OP_STATUSVIAGEMSumOrderByAggregateInput;
};
export type OP_STATUSVIAGEMScalarWhereWithAggregatesInput = {
    AND?: Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput | Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput[];
    OR?: Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput | Prisma.OP_STATUSVIAGEMScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"OP_STATUSVIAGEM"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | number | null;
    IMAGEM?: Prisma.IntNullableWithAggregatesFilter<"OP_STATUSVIAGEM"> | number | null;
};
export type OP_STATUSVIAGEMCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMCreateNestedManyWithoutOP_STATUSVIAGEMInput;
};
export type OP_STATUSVIAGEMUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMUncheckedCreateNestedManyWithoutOP_STATUSVIAGEMInput;
};
export type OP_STATUSVIAGEMUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMUpdateManyWithoutOP_STATUSVIAGEMNestedInput;
};
export type OP_STATUSVIAGEMUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMUncheckedUpdateManyWithoutOP_STATUSVIAGEMNestedInput;
};
export type OP_STATUSVIAGEMCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type OP_STATUSVIAGEMUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_STATUSVIAGEMUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_STATUSVIAGEMNullableScalarRelationFilter = {
    is?: Prisma.OP_STATUSVIAGEMWhereInput | null;
    isNot?: Prisma.OP_STATUSVIAGEMWhereInput | null;
};
export type OP_STATUSVIAGEMCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type OP_STATUSVIAGEMAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type OP_STATUSVIAGEMMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type OP_STATUSVIAGEMMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type OP_STATUSVIAGEMSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
};
export type OP_STATUSVIAGEMCreateNestedOneWithoutOP_VIAGEMInput = {
    create?: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedCreateWithoutOP_VIAGEMInput>;
    connectOrCreate?: Prisma.OP_STATUSVIAGEMCreateOrConnectWithoutOP_VIAGEMInput;
    connect?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
};
export type OP_STATUSVIAGEMUpdateOneWithoutOP_VIAGEMNestedInput = {
    create?: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedCreateWithoutOP_VIAGEMInput>;
    connectOrCreate?: Prisma.OP_STATUSVIAGEMCreateOrConnectWithoutOP_VIAGEMInput;
    upsert?: Prisma.OP_STATUSVIAGEMUpsertWithoutOP_VIAGEMInput;
    disconnect?: Prisma.OP_STATUSVIAGEMWhereInput | boolean;
    delete?: Prisma.OP_STATUSVIAGEMWhereInput | boolean;
    connect?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateToOneWithWhereWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUpdateWithoutOP_VIAGEMInput>, Prisma.OP_STATUSVIAGEMUncheckedUpdateWithoutOP_VIAGEMInput>;
};
export type OP_STATUSVIAGEMCreateWithoutOP_VIAGEMInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type OP_STATUSVIAGEMUncheckedCreateWithoutOP_VIAGEMInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    IMAGEM?: number | null;
};
export type OP_STATUSVIAGEMCreateOrConnectWithoutOP_VIAGEMInput = {
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    create: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedCreateWithoutOP_VIAGEMInput>;
};
export type OP_STATUSVIAGEMUpsertWithoutOP_VIAGEMInput = {
    update: Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedUpdateWithoutOP_VIAGEMInput>;
    create: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedCreateWithoutOP_VIAGEMInput>;
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
};
export type OP_STATUSVIAGEMUpdateToOneWithWhereWithoutOP_VIAGEMInput = {
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    data: Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateWithoutOP_VIAGEMInput, Prisma.OP_STATUSVIAGEMUncheckedUpdateWithoutOP_VIAGEMInput>;
};
export type OP_STATUSVIAGEMUpdateWithoutOP_VIAGEMInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_STATUSVIAGEMUncheckedUpdateWithoutOP_VIAGEMInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_STATUSVIAGEMCountOutputType = {
    OP_VIAGEM: number;
};
export type OP_STATUSVIAGEMCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    OP_VIAGEM?: boolean | OP_STATUSVIAGEMCountOutputTypeCountOP_VIAGEMArgs;
};
export type OP_STATUSVIAGEMCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMCountOutputTypeSelect<ExtArgs> | null;
};
export type OP_STATUSVIAGEMCountOutputTypeCountOP_VIAGEMArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_VIAGEMWhereInput;
};
export type OP_STATUSVIAGEMSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
    OP_VIAGEM?: boolean | Prisma.OP_STATUSVIAGEM$OP_VIAGEMArgs<ExtArgs>;
    _count?: boolean | Prisma.OP_STATUSVIAGEMCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["oP_STATUSVIAGEM"]>;
export type OP_STATUSVIAGEMSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    IMAGEM?: boolean;
};
export type OP_STATUSVIAGEMOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "IMAGEM", ExtArgs["result"]["oP_STATUSVIAGEM"]>;
export type OP_STATUSVIAGEMInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    OP_VIAGEM?: boolean | Prisma.OP_STATUSVIAGEM$OP_VIAGEMArgs<ExtArgs>;
    _count?: boolean | Prisma.OP_STATUSVIAGEMCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $OP_STATUSVIAGEMPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OP_STATUSVIAGEM";
    objects: {
        OP_VIAGEM: Prisma.$OP_VIAGEMPayload<ExtArgs>[];
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
    }, ExtArgs["result"]["oP_STATUSVIAGEM"]>;
    composites: {};
};
export type OP_STATUSVIAGEMGetPayload<S extends boolean | null | undefined | OP_STATUSVIAGEMDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload, S>;
export type OP_STATUSVIAGEMCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OP_STATUSVIAGEMFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OP_STATUSVIAGEMCountAggregateInputType | true;
};
export interface OP_STATUSVIAGEMDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OP_STATUSVIAGEM'];
        meta: {
            name: 'OP_STATUSVIAGEM';
        };
    };
    findUnique<T extends OP_STATUSVIAGEMFindUniqueArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OP_STATUSVIAGEMFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OP_STATUSVIAGEMFindFirstArgs>(args?: Prisma.SelectSubset<T, OP_STATUSVIAGEMFindFirstArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OP_STATUSVIAGEMFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OP_STATUSVIAGEMFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OP_STATUSVIAGEMFindManyArgs>(args?: Prisma.SelectSubset<T, OP_STATUSVIAGEMFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OP_STATUSVIAGEMCreateArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMCreateArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OP_STATUSVIAGEMCreateManyArgs>(args?: Prisma.SelectSubset<T, OP_STATUSVIAGEMCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends OP_STATUSVIAGEMDeleteArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMDeleteArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OP_STATUSVIAGEMUpdateArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMUpdateArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OP_STATUSVIAGEMDeleteManyArgs>(args?: Prisma.SelectSubset<T, OP_STATUSVIAGEMDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OP_STATUSVIAGEMUpdateManyArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends OP_STATUSVIAGEMUpsertArgs>(args: Prisma.SelectSubset<T, OP_STATUSVIAGEMUpsertArgs<ExtArgs>>): Prisma.Prisma__OP_STATUSVIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_STATUSVIAGEMPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OP_STATUSVIAGEMCountArgs>(args?: Prisma.Subset<T, OP_STATUSVIAGEMCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OP_STATUSVIAGEMCountAggregateOutputType> : number>;
    aggregate<T extends OP_STATUSVIAGEMAggregateArgs>(args: Prisma.Subset<T, OP_STATUSVIAGEMAggregateArgs>): Prisma.PrismaPromise<GetOP_STATUSVIAGEMAggregateType<T>>;
    groupBy<T extends OP_STATUSVIAGEMGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OP_STATUSVIAGEMGroupByArgs['orderBy'];
    } : {
        orderBy?: OP_STATUSVIAGEMGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OP_STATUSVIAGEMGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOP_STATUSVIAGEMGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OP_STATUSVIAGEMFieldRefs;
}
export interface Prisma__OP_STATUSVIAGEMClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    OP_VIAGEM<T extends Prisma.OP_STATUSVIAGEM$OP_VIAGEMArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OP_STATUSVIAGEM$OP_VIAGEMArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OP_STATUSVIAGEMFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"OP_STATUSVIAGEM", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"OP_STATUSVIAGEM", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"OP_STATUSVIAGEM", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"OP_STATUSVIAGEM", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"OP_STATUSVIAGEM", 'Int'>;
    readonly NOME: Prisma.FieldRef<"OP_STATUSVIAGEM", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"OP_STATUSVIAGEM", 'Int'>;
    readonly IMAGEM: Prisma.FieldRef<"OP_STATUSVIAGEM", 'Int'>;
}
export type OP_STATUSVIAGEMFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
};
export type OP_STATUSVIAGEMFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
};
export type OP_STATUSVIAGEMFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    orderBy?: Prisma.OP_STATUSVIAGEMOrderByWithRelationInput | Prisma.OP_STATUSVIAGEMOrderByWithRelationInput[];
    cursor?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_STATUSVIAGEMScalarFieldEnum | Prisma.OP_STATUSVIAGEMScalarFieldEnum[];
};
export type OP_STATUSVIAGEMFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    orderBy?: Prisma.OP_STATUSVIAGEMOrderByWithRelationInput | Prisma.OP_STATUSVIAGEMOrderByWithRelationInput[];
    cursor?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_STATUSVIAGEMScalarFieldEnum | Prisma.OP_STATUSVIAGEMScalarFieldEnum[];
};
export type OP_STATUSVIAGEMFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    orderBy?: Prisma.OP_STATUSVIAGEMOrderByWithRelationInput | Prisma.OP_STATUSVIAGEMOrderByWithRelationInput[];
    cursor?: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_STATUSVIAGEMScalarFieldEnum | Prisma.OP_STATUSVIAGEMScalarFieldEnum[];
};
export type OP_STATUSVIAGEMCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateInput, Prisma.OP_STATUSVIAGEMUncheckedCreateInput>;
};
export type OP_STATUSVIAGEMCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OP_STATUSVIAGEMCreateManyInput | Prisma.OP_STATUSVIAGEMCreateManyInput[];
};
export type OP_STATUSVIAGEMUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateInput, Prisma.OP_STATUSVIAGEMUncheckedUpdateInput>;
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
};
export type OP_STATUSVIAGEMUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateManyMutationInput, Prisma.OP_STATUSVIAGEMUncheckedUpdateManyInput>;
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    limit?: number;
};
export type OP_STATUSVIAGEMUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
    create: Prisma.XOR<Prisma.OP_STATUSVIAGEMCreateInput, Prisma.OP_STATUSVIAGEMUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OP_STATUSVIAGEMUpdateInput, Prisma.OP_STATUSVIAGEMUncheckedUpdateInput>;
};
export type OP_STATUSVIAGEMDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
    where: Prisma.OP_STATUSVIAGEMWhereUniqueInput;
};
export type OP_STATUSVIAGEMDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_STATUSVIAGEMWhereInput;
    limit?: number;
};
export type OP_STATUSVIAGEM$OP_VIAGEMArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMInclude<ExtArgs> | null;
    where?: Prisma.OP_VIAGEMWhereInput;
    orderBy?: Prisma.OP_VIAGEMOrderByWithRelationInput | Prisma.OP_VIAGEMOrderByWithRelationInput[];
    cursor?: Prisma.OP_VIAGEMWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_VIAGEMScalarFieldEnum | Prisma.OP_VIAGEMScalarFieldEnum[];
};
export type OP_STATUSVIAGEMDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_STATUSVIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_STATUSVIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_STATUSVIAGEMInclude<ExtArgs> | null;
};
