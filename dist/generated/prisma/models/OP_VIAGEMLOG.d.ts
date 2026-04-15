import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type OP_VIAGEMLOGModel = runtime.Types.Result.DefaultSelection<Prisma.$OP_VIAGEMLOGPayload>;
export type AggregateOP_VIAGEMLOG = {
    _count: OP_VIAGEMLOGCountAggregateOutputType | null;
    _avg: OP_VIAGEMLOGAvgAggregateOutputType | null;
    _sum: OP_VIAGEMLOGSumAggregateOutputType | null;
    _min: OP_VIAGEMLOGMinAggregateOutputType | null;
    _max: OP_VIAGEMLOGMaxAggregateOutputType | null;
};
export type OP_VIAGEMLOGAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    USUARIO: number | null;
    TIPOMENSAGEM: number | null;
    VIAGEM: number | null;
};
export type OP_VIAGEMLOGSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    USUARIO: number | null;
    TIPOMENSAGEM: number | null;
    VIAGEM: number | null;
};
export type OP_VIAGEMLOGMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    USUARIO: number | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    VIAGEM: number | null;
};
export type OP_VIAGEMLOGMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    USUARIO: number | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    VIAGEM: number | null;
};
export type OP_VIAGEMLOGCountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    DATA: number;
    USUARIO: number;
    TIPOMENSAGEM: number;
    COMPLEMENTO: number;
    OBSERVACAO: number;
    VIAGEM: number;
    _all: number;
};
export type OP_VIAGEMLOGAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    USUARIO?: true;
    TIPOMENSAGEM?: true;
    VIAGEM?: true;
};
export type OP_VIAGEMLOGSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    USUARIO?: true;
    TIPOMENSAGEM?: true;
    VIAGEM?: true;
};
export type OP_VIAGEMLOGMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    USUARIO?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    VIAGEM?: true;
};
export type OP_VIAGEMLOGMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    USUARIO?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    VIAGEM?: true;
};
export type OP_VIAGEMLOGCountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    USUARIO?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    VIAGEM?: true;
    _all?: true;
};
export type OP_VIAGEMLOGAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    orderBy?: Prisma.OP_VIAGEMLOGOrderByWithRelationInput | Prisma.OP_VIAGEMLOGOrderByWithRelationInput[];
    cursor?: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | OP_VIAGEMLOGCountAggregateInputType;
    _avg?: OP_VIAGEMLOGAvgAggregateInputType;
    _sum?: OP_VIAGEMLOGSumAggregateInputType;
    _min?: OP_VIAGEMLOGMinAggregateInputType;
    _max?: OP_VIAGEMLOGMaxAggregateInputType;
};
export type GetOP_VIAGEMLOGAggregateType<T extends OP_VIAGEMLOGAggregateArgs> = {
    [P in keyof T & keyof AggregateOP_VIAGEMLOG]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOP_VIAGEMLOG[P]> : Prisma.GetScalarType<T[P], AggregateOP_VIAGEMLOG[P]>;
};
export type OP_VIAGEMLOGGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    orderBy?: Prisma.OP_VIAGEMLOGOrderByWithAggregationInput | Prisma.OP_VIAGEMLOGOrderByWithAggregationInput[];
    by: Prisma.OP_VIAGEMLOGScalarFieldEnum[] | Prisma.OP_VIAGEMLOGScalarFieldEnum;
    having?: Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OP_VIAGEMLOGCountAggregateInputType | true;
    _avg?: OP_VIAGEMLOGAvgAggregateInputType;
    _sum?: OP_VIAGEMLOGSumAggregateInputType;
    _min?: OP_VIAGEMLOGMinAggregateInputType;
    _max?: OP_VIAGEMLOGMaxAggregateInputType;
};
export type OP_VIAGEMLOGGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    USUARIO: number | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    VIAGEM: number | null;
    _count: OP_VIAGEMLOGCountAggregateOutputType | null;
    _avg: OP_VIAGEMLOGAvgAggregateOutputType | null;
    _sum: OP_VIAGEMLOGSumAggregateOutputType | null;
    _min: OP_VIAGEMLOGMinAggregateOutputType | null;
    _max: OP_VIAGEMLOGMaxAggregateOutputType | null;
};
export type GetOP_VIAGEMLOGGroupByPayload<T extends OP_VIAGEMLOGGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OP_VIAGEMLOGGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OP_VIAGEMLOGGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OP_VIAGEMLOGGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OP_VIAGEMLOGGroupByOutputType[P]>;
}>>;
export type OP_VIAGEMLOGWhereInput = {
    AND?: Prisma.OP_VIAGEMLOGWhereInput | Prisma.OP_VIAGEMLOGWhereInput[];
    OR?: Prisma.OP_VIAGEMLOGWhereInput[];
    NOT?: Prisma.OP_VIAGEMLOGWhereInput | Prisma.OP_VIAGEMLOGWhereInput[];
    HANDLE?: Prisma.IntFilter<"OP_VIAGEMLOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    USUARIO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    VIAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIANullableScalarRelationFilter, Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput> | null;
    OP_VIAGEM?: Prisma.XOR<Prisma.OP_VIAGEMNullableScalarRelationFilter, Prisma.OP_VIAGEMWhereInput> | null;
};
export type OP_VIAGEMLOGOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    DATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    USUARIO?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput;
    OP_VIAGEM?: Prisma.OP_VIAGEMOrderByWithRelationInput;
};
export type OP_VIAGEMLOGWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.OP_VIAGEMLOGWhereInput | Prisma.OP_VIAGEMLOGWhereInput[];
    OR?: Prisma.OP_VIAGEMLOGWhereInput[];
    NOT?: Prisma.OP_VIAGEMLOGWhereInput | Prisma.OP_VIAGEMLOGWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    USUARIO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    VIAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIANullableScalarRelationFilter, Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput> | null;
    OP_VIAGEM?: Prisma.XOR<Prisma.OP_VIAGEMNullableScalarRelationFilter, Prisma.OP_VIAGEMWhereInput> | null;
}, "HANDLE">;
export type OP_VIAGEMLOGOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    DATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    USUARIO?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OP_VIAGEMLOGCountOrderByAggregateInput;
    _avg?: Prisma.OP_VIAGEMLOGAvgOrderByAggregateInput;
    _max?: Prisma.OP_VIAGEMLOGMaxOrderByAggregateInput;
    _min?: Prisma.OP_VIAGEMLOGMinOrderByAggregateInput;
    _sum?: Prisma.OP_VIAGEMLOGSumOrderByAggregateInput;
};
export type OP_VIAGEMLOGScalarWhereWithAggregatesInput = {
    AND?: Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput | Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput[];
    OR?: Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput | Prisma.OP_VIAGEMLOGScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"OP_VIAGEMLOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | number | null;
    DATA?: Prisma.DateTimeNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | Date | string | null;
    USUARIO?: Prisma.IntNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | number | null;
    TIPOMENSAGEM?: Prisma.IntNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | string | null;
    VIAGEM?: Prisma.IntNullableWithAggregatesFilter<"OP_VIAGEMLOG"> | number | null;
};
export type OP_VIAGEMLOGCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutOP_VIAGEMLOGInput;
    OP_VIAGEM?: Prisma.OP_VIAGEMCreateNestedOneWithoutOP_VIAGEMLOGInput;
};
export type OP_VIAGEMLOGUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    VIAGEM?: number | null;
};
export type OP_VIAGEMLOGUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutOP_VIAGEMLOGNestedInput;
    OP_VIAGEM?: Prisma.OP_VIAGEMUpdateOneWithoutOP_VIAGEMLOGNestedInput;
};
export type OP_VIAGEMLOGUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_VIAGEMLOGCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    VIAGEM?: number | null;
};
export type OP_VIAGEMLOGUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OP_VIAGEMLOGUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_VIAGEMLOGListRelationFilter = {
    every?: Prisma.OP_VIAGEMLOGWhereInput;
    some?: Prisma.OP_VIAGEMLOGWhereInput;
    none?: Prisma.OP_VIAGEMLOGWhereInput;
};
export type OP_VIAGEMLOGOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    VIAGEM?: Prisma.SortOrder;
};
export type OP_VIAGEMLOGCreateNestedManyWithoutOP_VIAGEMInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput> | Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInputEnvelope;
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
};
export type OP_VIAGEMLOGUncheckedCreateNestedManyWithoutOP_VIAGEMInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput> | Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInputEnvelope;
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
};
export type OP_VIAGEMLOGUpdateManyWithoutOP_VIAGEMNestedInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput> | Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput[];
    upsert?: Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutOP_VIAGEMInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInputEnvelope;
    set?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    disconnect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    delete?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    update?: Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutOP_VIAGEMInput[];
    updateMany?: Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutOP_VIAGEMInput[];
    deleteMany?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
};
export type OP_VIAGEMLOGUncheckedUpdateManyWithoutOP_VIAGEMNestedInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput> | Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput[];
    upsert?: Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutOP_VIAGEMInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInputEnvelope;
    set?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    disconnect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    delete?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    update?: Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutOP_VIAGEMInput[];
    updateMany?: Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutOP_VIAGEMInput | Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutOP_VIAGEMInput[];
    deleteMany?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
};
export type OP_VIAGEMLOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
};
export type OP_VIAGEMLOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
};
export type OP_VIAGEMLOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    upsert?: Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    set?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    disconnect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    delete?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    update?: Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    updateMany?: Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    deleteMany?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
};
export type OP_VIAGEMLOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput = {
    create?: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    upsert?: Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    set?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    disconnect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    delete?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    connect?: Prisma.OP_VIAGEMLOGWhereUniqueInput | Prisma.OP_VIAGEMLOGWhereUniqueInput[];
    update?: Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    updateMany?: Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    deleteMany?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
};
export type OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutOP_VIAGEMLOGInput;
};
export type OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
};
export type OP_VIAGEMLOGCreateOrConnectWithoutOP_VIAGEMInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput>;
};
export type OP_VIAGEMLOGCreateManyOP_VIAGEMInputEnvelope = {
    data: Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInput | Prisma.OP_VIAGEMLOGCreateManyOP_VIAGEMInput[];
};
export type OP_VIAGEMLOGUpsertWithWhereUniqueWithoutOP_VIAGEMInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    update: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedUpdateWithoutOP_VIAGEMInput>;
    create: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutOP_VIAGEMInput>;
};
export type OP_VIAGEMLOGUpdateWithWhereUniqueWithoutOP_VIAGEMInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateWithoutOP_VIAGEMInput, Prisma.OP_VIAGEMLOGUncheckedUpdateWithoutOP_VIAGEMInput>;
};
export type OP_VIAGEMLOGUpdateManyWithWhereWithoutOP_VIAGEMInput = {
    where: Prisma.OP_VIAGEMLOGScalarWhereInput;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateManyMutationInput, Prisma.OP_VIAGEMLOGUncheckedUpdateManyWithoutOP_VIAGEMInput>;
};
export type OP_VIAGEMLOGScalarWhereInput = {
    AND?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
    OR?: Prisma.OP_VIAGEMLOGScalarWhereInput[];
    NOT?: Prisma.OP_VIAGEMLOGScalarWhereInput | Prisma.OP_VIAGEMLOGScalarWhereInput[];
    HANDLE?: Prisma.IntFilter<"OP_VIAGEMLOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"OP_VIAGEMLOG"> | Date | string | null;
    USUARIO?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"OP_VIAGEMLOG"> | string | null;
    VIAGEM?: Prisma.IntNullableFilter<"OP_VIAGEMLOG"> | number | null;
};
export type OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMCreateNestedOneWithoutOP_VIAGEMLOGInput;
};
export type OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    VIAGEM?: number | null;
};
export type OP_VIAGEMLOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope = {
    data: Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput | Prisma.OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput[];
};
export type OP_VIAGEMLOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    update: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
    create: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type OP_VIAGEMLOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.OP_VIAGEMLOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type OP_VIAGEMLOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.OP_VIAGEMLOGScalarWhereInput;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateManyMutationInput, Prisma.OP_VIAGEMLOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type OP_VIAGEMLOGCreateManyOP_VIAGEMInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
};
export type OP_VIAGEMLOGUpdateWithoutOP_VIAGEMInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutOP_VIAGEMLOGNestedInput;
};
export type OP_VIAGEMLOGUncheckedUpdateWithoutOP_VIAGEMInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OP_VIAGEMLOGUncheckedUpdateManyWithoutOP_VIAGEMInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OP_VIAGEMLOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    USUARIO?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    VIAGEM?: number | null;
};
export type OP_VIAGEMLOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OP_VIAGEM?: Prisma.OP_VIAGEMUpdateOneWithoutOP_VIAGEMLOGNestedInput;
};
export type OP_VIAGEMLOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_VIAGEMLOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    VIAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type OP_VIAGEMLOGSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    DATA?: boolean;
    USUARIO?: boolean;
    TIPOMENSAGEM?: boolean;
    COMPLEMENTO?: boolean;
    OBSERVACAO?: boolean;
    VIAGEM?: boolean;
    MD_TIPOMENSAGEMAUDITORIA?: boolean | Prisma.OP_VIAGEMLOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>;
    OP_VIAGEM?: boolean | Prisma.OP_VIAGEMLOG$OP_VIAGEMArgs<ExtArgs>;
}, ExtArgs["result"]["oP_VIAGEMLOG"]>;
export type OP_VIAGEMLOGSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    DATA?: boolean;
    USUARIO?: boolean;
    TIPOMENSAGEM?: boolean;
    COMPLEMENTO?: boolean;
    OBSERVACAO?: boolean;
    VIAGEM?: boolean;
};
export type OP_VIAGEMLOGOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "DATA" | "USUARIO" | "TIPOMENSAGEM" | "COMPLEMENTO" | "OBSERVACAO" | "VIAGEM", ExtArgs["result"]["oP_VIAGEMLOG"]>;
export type OP_VIAGEMLOGInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MD_TIPOMENSAGEMAUDITORIA?: boolean | Prisma.OP_VIAGEMLOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>;
    OP_VIAGEM?: boolean | Prisma.OP_VIAGEMLOG$OP_VIAGEMArgs<ExtArgs>;
};
export type $OP_VIAGEMLOGPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OP_VIAGEMLOG";
    objects: {
        MD_TIPOMENSAGEMAUDITORIA: Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs> | null;
        OP_VIAGEM: Prisma.$OP_VIAGEMPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        DATA: Date | null;
        USUARIO: number | null;
        TIPOMENSAGEM: number | null;
        COMPLEMENTO: string | null;
        OBSERVACAO: string | null;
        VIAGEM: number | null;
    }, ExtArgs["result"]["oP_VIAGEMLOG"]>;
    composites: {};
};
export type OP_VIAGEMLOGGetPayload<S extends boolean | null | undefined | OP_VIAGEMLOGDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload, S>;
export type OP_VIAGEMLOGCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OP_VIAGEMLOGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OP_VIAGEMLOGCountAggregateInputType | true;
};
export interface OP_VIAGEMLOGDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OP_VIAGEMLOG'];
        meta: {
            name: 'OP_VIAGEMLOG';
        };
    };
    findUnique<T extends OP_VIAGEMLOGFindUniqueArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends OP_VIAGEMLOGFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends OP_VIAGEMLOGFindFirstArgs>(args?: Prisma.SelectSubset<T, OP_VIAGEMLOGFindFirstArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends OP_VIAGEMLOGFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OP_VIAGEMLOGFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends OP_VIAGEMLOGFindManyArgs>(args?: Prisma.SelectSubset<T, OP_VIAGEMLOGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends OP_VIAGEMLOGCreateArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGCreateArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends OP_VIAGEMLOGCreateManyArgs>(args?: Prisma.SelectSubset<T, OP_VIAGEMLOGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends OP_VIAGEMLOGDeleteArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGDeleteArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends OP_VIAGEMLOGUpdateArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGUpdateArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends OP_VIAGEMLOGDeleteManyArgs>(args?: Prisma.SelectSubset<T, OP_VIAGEMLOGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends OP_VIAGEMLOGUpdateManyArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends OP_VIAGEMLOGUpsertArgs>(args: Prisma.SelectSubset<T, OP_VIAGEMLOGUpsertArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMLOGClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends OP_VIAGEMLOGCountArgs>(args?: Prisma.Subset<T, OP_VIAGEMLOGCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OP_VIAGEMLOGCountAggregateOutputType> : number>;
    aggregate<T extends OP_VIAGEMLOGAggregateArgs>(args: Prisma.Subset<T, OP_VIAGEMLOGAggregateArgs>): Prisma.PrismaPromise<GetOP_VIAGEMLOGAggregateType<T>>;
    groupBy<T extends OP_VIAGEMLOGGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OP_VIAGEMLOGGroupByArgs['orderBy'];
    } : {
        orderBy?: OP_VIAGEMLOGGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OP_VIAGEMLOGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOP_VIAGEMLOGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: OP_VIAGEMLOGFieldRefs;
}
export interface Prisma__OP_VIAGEMLOGClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MD_TIPOMENSAGEMAUDITORIA<T extends Prisma.OP_VIAGEMLOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OP_VIAGEMLOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    OP_VIAGEM<T extends Prisma.OP_VIAGEMLOG$OP_VIAGEMArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OP_VIAGEMLOG$OP_VIAGEMArgs<ExtArgs>>): Prisma.Prisma__OP_VIAGEMClient<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface OP_VIAGEMLOGFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"OP_VIAGEMLOG", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"OP_VIAGEMLOG", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
    readonly DATA: Prisma.FieldRef<"OP_VIAGEMLOG", 'DateTime'>;
    readonly USUARIO: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
    readonly TIPOMENSAGEM: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
    readonly COMPLEMENTO: Prisma.FieldRef<"OP_VIAGEMLOG", 'String'>;
    readonly OBSERVACAO: Prisma.FieldRef<"OP_VIAGEMLOG", 'String'>;
    readonly VIAGEM: Prisma.FieldRef<"OP_VIAGEMLOG", 'Int'>;
}
export type OP_VIAGEMLOGFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
};
export type OP_VIAGEMLOGFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
};
export type OP_VIAGEMLOGFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    orderBy?: Prisma.OP_VIAGEMLOGOrderByWithRelationInput | Prisma.OP_VIAGEMLOGOrderByWithRelationInput[];
    cursor?: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_VIAGEMLOGScalarFieldEnum | Prisma.OP_VIAGEMLOGScalarFieldEnum[];
};
export type OP_VIAGEMLOGFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    orderBy?: Prisma.OP_VIAGEMLOGOrderByWithRelationInput | Prisma.OP_VIAGEMLOGOrderByWithRelationInput[];
    cursor?: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_VIAGEMLOGScalarFieldEnum | Prisma.OP_VIAGEMLOGScalarFieldEnum[];
};
export type OP_VIAGEMLOGFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    orderBy?: Prisma.OP_VIAGEMLOGOrderByWithRelationInput | Prisma.OP_VIAGEMLOGOrderByWithRelationInput[];
    cursor?: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OP_VIAGEMLOGScalarFieldEnum | Prisma.OP_VIAGEMLOGScalarFieldEnum[];
};
export type OP_VIAGEMLOGCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateInput, Prisma.OP_VIAGEMLOGUncheckedCreateInput>;
};
export type OP_VIAGEMLOGCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.OP_VIAGEMLOGCreateManyInput | Prisma.OP_VIAGEMLOGCreateManyInput[];
};
export type OP_VIAGEMLOGUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateInput, Prisma.OP_VIAGEMLOGUncheckedUpdateInput>;
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
};
export type OP_VIAGEMLOGUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateManyMutationInput, Prisma.OP_VIAGEMLOGUncheckedUpdateManyInput>;
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    limit?: number;
};
export type OP_VIAGEMLOGUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.OP_VIAGEMLOGCreateInput, Prisma.OP_VIAGEMLOGUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.OP_VIAGEMLOGUpdateInput, Prisma.OP_VIAGEMLOGUncheckedUpdateInput>;
};
export type OP_VIAGEMLOGDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
    where: Prisma.OP_VIAGEMLOGWhereUniqueInput;
};
export type OP_VIAGEMLOGDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_VIAGEMLOGWhereInput;
    limit?: number;
};
export type OP_VIAGEMLOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
};
export type OP_VIAGEMLOG$OP_VIAGEMArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMInclude<ExtArgs> | null;
    where?: Prisma.OP_VIAGEMWhereInput;
};
export type OP_VIAGEMLOGDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OP_VIAGEMLOGSelect<ExtArgs> | null;
    omit?: Prisma.OP_VIAGEMLOGOmit<ExtArgs> | null;
    include?: Prisma.OP_VIAGEMLOGInclude<ExtArgs> | null;
};
