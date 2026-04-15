import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_PESSOALOGModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_PESSOALOGPayload>;
export type AggregateMS_PESSOALOG = {
    _count: MS_PESSOALOGCountAggregateOutputType | null;
    _avg: MS_PESSOALOGAvgAggregateOutputType | null;
    _sum: MS_PESSOALOGSumAggregateOutputType | null;
    _min: MS_PESSOALOGMinAggregateOutputType | null;
    _max: MS_PESSOALOGMaxAggregateOutputType | null;
};
export type MS_PESSOALOGAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    TIPOMENSAGEM: number | null;
    PESSOA: number | null;
    USUARIO: number | null;
};
export type MS_PESSOALOGSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    TIPOMENSAGEM: number | null;
    PESSOA: number | null;
    USUARIO: number | null;
};
export type MS_PESSOALOGMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    PESSOA: number | null;
    USUARIO: number | null;
};
export type MS_PESSOALOGMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    PESSOA: number | null;
    USUARIO: number | null;
};
export type MS_PESSOALOGCountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    DATA: number;
    TIPOMENSAGEM: number;
    COMPLEMENTO: number;
    OBSERVACAO: number;
    PESSOA: number;
    USUARIO: number;
    _all: number;
};
export type MS_PESSOALOGAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    TIPOMENSAGEM?: true;
    PESSOA?: true;
    USUARIO?: true;
};
export type MS_PESSOALOGSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    TIPOMENSAGEM?: true;
    PESSOA?: true;
    USUARIO?: true;
};
export type MS_PESSOALOGMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    PESSOA?: true;
    USUARIO?: true;
};
export type MS_PESSOALOGMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    PESSOA?: true;
    USUARIO?: true;
};
export type MS_PESSOALOGCountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    DATA?: true;
    TIPOMENSAGEM?: true;
    COMPLEMENTO?: true;
    OBSERVACAO?: true;
    PESSOA?: true;
    USUARIO?: true;
    _all?: true;
};
export type MS_PESSOALOGAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOALOGWhereInput;
    orderBy?: Prisma.MS_PESSOALOGOrderByWithRelationInput | Prisma.MS_PESSOALOGOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOALOGWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_PESSOALOGCountAggregateInputType;
    _avg?: MS_PESSOALOGAvgAggregateInputType;
    _sum?: MS_PESSOALOGSumAggregateInputType;
    _min?: MS_PESSOALOGMinAggregateInputType;
    _max?: MS_PESSOALOGMaxAggregateInputType;
};
export type GetMS_PESSOALOGAggregateType<T extends MS_PESSOALOGAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_PESSOALOG]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_PESSOALOG[P]> : Prisma.GetScalarType<T[P], AggregateMS_PESSOALOG[P]>;
};
export type MS_PESSOALOGGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOALOGWhereInput;
    orderBy?: Prisma.MS_PESSOALOGOrderByWithAggregationInput | Prisma.MS_PESSOALOGOrderByWithAggregationInput[];
    by: Prisma.MS_PESSOALOGScalarFieldEnum[] | Prisma.MS_PESSOALOGScalarFieldEnum;
    having?: Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_PESSOALOGCountAggregateInputType | true;
    _avg?: MS_PESSOALOGAvgAggregateInputType;
    _sum?: MS_PESSOALOGSumAggregateInputType;
    _min?: MS_PESSOALOGMinAggregateInputType;
    _max?: MS_PESSOALOGMaxAggregateInputType;
};
export type MS_PESSOALOGGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    DATA: Date | null;
    TIPOMENSAGEM: number | null;
    COMPLEMENTO: string | null;
    OBSERVACAO: string | null;
    PESSOA: number | null;
    USUARIO: number | null;
    _count: MS_PESSOALOGCountAggregateOutputType | null;
    _avg: MS_PESSOALOGAvgAggregateOutputType | null;
    _sum: MS_PESSOALOGSumAggregateOutputType | null;
    _min: MS_PESSOALOGMinAggregateOutputType | null;
    _max: MS_PESSOALOGMaxAggregateOutputType | null;
};
export type GetMS_PESSOALOGGroupByPayload<T extends MS_PESSOALOGGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_PESSOALOGGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_PESSOALOGGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_PESSOALOGGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_PESSOALOGGroupByOutputType[P]>;
}>>;
export type MS_PESSOALOGWhereInput = {
    AND?: Prisma.MS_PESSOALOGWhereInput | Prisma.MS_PESSOALOGWhereInput[];
    OR?: Prisma.MS_PESSOALOGWhereInput[];
    NOT?: Prisma.MS_PESSOALOGWhereInput | Prisma.MS_PESSOALOGWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOALOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    USUARIO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIANullableScalarRelationFilter, Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput> | null;
    MS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
};
export type MS_PESSOALOGOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    DATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    USUARIO?: Prisma.SortOrderInput | Prisma.SortOrder;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput;
    MS_PESSOA?: Prisma.MS_PESSOAOrderByWithRelationInput;
};
export type MS_PESSOALOGWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_PESSOALOGWhereInput | Prisma.MS_PESSOALOGWhereInput[];
    OR?: Prisma.MS_PESSOALOGWhereInput[];
    NOT?: Prisma.MS_PESSOALOGWhereInput | Prisma.MS_PESSOALOGWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    USUARIO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIANullableScalarRelationFilter, Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput> | null;
    MS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
}, "HANDLE">;
export type MS_PESSOALOGOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    DATA?: Prisma.SortOrderInput | Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    USUARIO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_PESSOALOGCountOrderByAggregateInput;
    _avg?: Prisma.MS_PESSOALOGAvgOrderByAggregateInput;
    _max?: Prisma.MS_PESSOALOGMaxOrderByAggregateInput;
    _min?: Prisma.MS_PESSOALOGMinOrderByAggregateInput;
    _sum?: Prisma.MS_PESSOALOGSumOrderByAggregateInput;
};
export type MS_PESSOALOGScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput | Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput | Prisma.MS_PESSOALOGScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_PESSOALOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOALOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOALOG"> | number | null;
    DATA?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOALOG"> | Date | string | null;
    TIPOMENSAGEM?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOALOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableWithAggregatesFilter<"MS_PESSOALOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableWithAggregatesFilter<"MS_PESSOALOG"> | string | null;
    PESSOA?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOALOG"> | number | null;
    USUARIO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOALOG"> | number | null;
};
export type MS_PESSOALOGCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    USUARIO?: number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutMS_PESSOALOGInput;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOALOGInput;
};
export type MS_PESSOALOGUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    PESSOA?: number | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutMS_PESSOALOGNestedInput;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOALOGNestedInput;
};
export type MS_PESSOALOGUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    PESSOA?: number | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGListRelationFilter = {
    every?: Prisma.MS_PESSOALOGWhereInput;
    some?: Prisma.MS_PESSOALOGWhereInput;
    none?: Prisma.MS_PESSOALOGWhereInput;
};
export type MS_PESSOALOGOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MS_PESSOALOGCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
};
export type MS_PESSOALOGAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
};
export type MS_PESSOALOGMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
};
export type MS_PESSOALOGMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    DATA?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    COMPLEMENTO?: Prisma.SortOrder;
    OBSERVACAO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
};
export type MS_PESSOALOGSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    TIPOMENSAGEM?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    USUARIO?: Prisma.SortOrder;
};
export type MS_PESSOALOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
};
export type MS_PESSOALOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
};
export type MS_PESSOALOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    upsert?: Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    set?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    delete?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    update?: Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    updateMany?: Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    deleteMany?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
};
export type MS_PESSOALOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput> | Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    upsert?: Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope;
    set?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    delete?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    update?: Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    updateMany?: Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput[];
    deleteMany?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
};
export type MS_PESSOALOGCreateNestedManyWithoutMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput> | Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
};
export type MS_PESSOALOGUncheckedCreateNestedManyWithoutMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput> | Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
};
export type MS_PESSOALOGUpdateManyWithoutMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput> | Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    delete?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    update?: Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
};
export type MS_PESSOALOGUncheckedUpdateManyWithoutMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput> | Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput[] | Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpsertWithWhereUniqueWithoutMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOALOGCreateManyMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    delete?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    connect?: Prisma.MS_PESSOALOGWhereUniqueInput | Prisma.MS_PESSOALOGWhereUniqueInput[];
    update?: Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpdateWithWhereUniqueWithoutMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMS_PESSOAInput | Prisma.MS_PESSOALOGUpdateManyWithWhereWithoutMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
};
export type MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    USUARIO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOALOGInput;
};
export type MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    PESSOA?: number | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGCreateOrConnectWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInputEnvelope = {
    data: Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput | Prisma.MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput[];
};
export type MS_PESSOALOGUpsertWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    update: Prisma.XOR<Prisma.MS_PESSOALOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
    create: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type MS_PESSOALOGUpdateWithWhereUniqueWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput, Prisma.MS_PESSOALOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type MS_PESSOALOGUpdateManyWithWhereWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    where: Prisma.MS_PESSOALOGScalarWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateManyMutationInput, Prisma.MS_PESSOALOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIAInput>;
};
export type MS_PESSOALOGScalarWhereInput = {
    AND?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
    OR?: Prisma.MS_PESSOALOGScalarWhereInput[];
    NOT?: Prisma.MS_PESSOALOGScalarWhereInput | Prisma.MS_PESSOALOGScalarWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOALOG"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    DATA?: Prisma.DateTimeNullableFilter<"MS_PESSOALOG"> | Date | string | null;
    TIPOMENSAGEM?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    COMPLEMENTO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    OBSERVACAO?: Prisma.StringNullableFilter<"MS_PESSOALOG"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
    USUARIO?: Prisma.IntNullableFilter<"MS_PESSOALOG"> | number | null;
};
export type MS_PESSOALOGCreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    USUARIO?: number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutMS_PESSOALOGInput;
};
export type MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGCreateOrConnectWithoutMS_PESSOAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput>;
};
export type MS_PESSOALOGCreateManyMS_PESSOAInputEnvelope = {
    data: Prisma.MS_PESSOALOGCreateManyMS_PESSOAInput | Prisma.MS_PESSOALOGCreateManyMS_PESSOAInput[];
};
export type MS_PESSOALOGUpsertWithWhereUniqueWithoutMS_PESSOAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    update: Prisma.XOR<Prisma.MS_PESSOALOGUpdateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedUpdateWithoutMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_PESSOALOGCreateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedCreateWithoutMS_PESSOAInput>;
};
export type MS_PESSOALOGUpdateWithWhereUniqueWithoutMS_PESSOAInput = {
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateWithoutMS_PESSOAInput, Prisma.MS_PESSOALOGUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_PESSOALOGUpdateManyWithWhereWithoutMS_PESSOAInput = {
    where: Prisma.MS_PESSOALOGScalarWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateManyMutationInput, Prisma.MS_PESSOALOGUncheckedUpdateManyWithoutMS_PESSOAInput>;
};
export type MS_PESSOALOGCreateManyMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    PESSOA?: number | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOALOGNestedInput;
};
export type MS_PESSOALOGUncheckedUpdateWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGCreateManyMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    DATA?: Date | string | null;
    TIPOMENSAGEM?: number | null;
    COMPLEMENTO?: string | null;
    OBSERVACAO?: string | null;
    USUARIO?: number | null;
};
export type MS_PESSOALOGUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MD_TIPOMENSAGEMAUDITORIA?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutMS_PESSOALOGNestedInput;
};
export type MS_PESSOALOGUncheckedUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGUncheckedUpdateManyWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    DATA?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    TIPOMENSAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    COMPLEMENTO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    OBSERVACAO?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    USUARIO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOALOGSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    DATA?: boolean;
    TIPOMENSAGEM?: boolean;
    COMPLEMENTO?: boolean;
    OBSERVACAO?: boolean;
    PESSOA?: boolean;
    USUARIO?: boolean;
    MD_TIPOMENSAGEMAUDITORIA?: boolean | Prisma.MS_PESSOALOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>;
    MS_PESSOA?: boolean | Prisma.MS_PESSOALOG$MS_PESSOAArgs<ExtArgs>;
}, ExtArgs["result"]["mS_PESSOALOG"]>;
export type MS_PESSOALOGSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    DATA?: boolean;
    TIPOMENSAGEM?: boolean;
    COMPLEMENTO?: boolean;
    OBSERVACAO?: boolean;
    PESSOA?: boolean;
    USUARIO?: boolean;
};
export type MS_PESSOALOGOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "DATA" | "TIPOMENSAGEM" | "COMPLEMENTO" | "OBSERVACAO" | "PESSOA" | "USUARIO", ExtArgs["result"]["mS_PESSOALOG"]>;
export type MS_PESSOALOGInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MD_TIPOMENSAGEMAUDITORIA?: boolean | Prisma.MS_PESSOALOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>;
    MS_PESSOA?: boolean | Prisma.MS_PESSOALOG$MS_PESSOAArgs<ExtArgs>;
};
export type $MS_PESSOALOGPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_PESSOALOG";
    objects: {
        MD_TIPOMENSAGEMAUDITORIA: Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs> | null;
        MS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        DATA: Date | null;
        TIPOMENSAGEM: number | null;
        COMPLEMENTO: string | null;
        OBSERVACAO: string | null;
        PESSOA: number | null;
        USUARIO: number | null;
    }, ExtArgs["result"]["mS_PESSOALOG"]>;
    composites: {};
};
export type MS_PESSOALOGGetPayload<S extends boolean | null | undefined | MS_PESSOALOGDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload, S>;
export type MS_PESSOALOGCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_PESSOALOGFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_PESSOALOGCountAggregateInputType | true;
};
export interface MS_PESSOALOGDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_PESSOALOG'];
        meta: {
            name: 'MS_PESSOALOG';
        };
    };
    findUnique<T extends MS_PESSOALOGFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_PESSOALOGFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_PESSOALOGFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_PESSOALOGFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_PESSOALOGFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_PESSOALOGFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_PESSOALOGFindManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOALOGFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_PESSOALOGCreateArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGCreateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_PESSOALOGCreateManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOALOGCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_PESSOALOGDeleteArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGDeleteArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_PESSOALOGUpdateArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_PESSOALOGDeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOALOGDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_PESSOALOGUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_PESSOALOGUpsertArgs>(args: Prisma.SelectSubset<T, MS_PESSOALOGUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOALOGClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_PESSOALOGCountArgs>(args?: Prisma.Subset<T, MS_PESSOALOGCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_PESSOALOGCountAggregateOutputType> : number>;
    aggregate<T extends MS_PESSOALOGAggregateArgs>(args: Prisma.Subset<T, MS_PESSOALOGAggregateArgs>): Prisma.PrismaPromise<GetMS_PESSOALOGAggregateType<T>>;
    groupBy<T extends MS_PESSOALOGGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_PESSOALOGGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_PESSOALOGGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_PESSOALOGGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_PESSOALOGGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_PESSOALOGFieldRefs;
}
export interface Prisma__MS_PESSOALOGClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MD_TIPOMENSAGEMAUDITORIA<T extends Prisma.MS_PESSOALOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOALOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    MS_PESSOA<T extends Prisma.MS_PESSOALOG$MS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOALOG$MS_PESSOAArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_PESSOALOGFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_PESSOALOG", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_PESSOALOG", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
    readonly DATA: Prisma.FieldRef<"MS_PESSOALOG", 'DateTime'>;
    readonly TIPOMENSAGEM: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
    readonly COMPLEMENTO: Prisma.FieldRef<"MS_PESSOALOG", 'String'>;
    readonly OBSERVACAO: Prisma.FieldRef<"MS_PESSOALOG", 'String'>;
    readonly PESSOA: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
    readonly USUARIO: Prisma.FieldRef<"MS_PESSOALOG", 'Int'>;
}
export type MS_PESSOALOGFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
};
export type MS_PESSOALOGFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
};
export type MS_PESSOALOGFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOALOGWhereInput;
    orderBy?: Prisma.MS_PESSOALOGOrderByWithRelationInput | Prisma.MS_PESSOALOGOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOALOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOALOGScalarFieldEnum | Prisma.MS_PESSOALOGScalarFieldEnum[];
};
export type MS_PESSOALOGFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOALOGWhereInput;
    orderBy?: Prisma.MS_PESSOALOGOrderByWithRelationInput | Prisma.MS_PESSOALOGOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOALOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOALOGScalarFieldEnum | Prisma.MS_PESSOALOGScalarFieldEnum[];
};
export type MS_PESSOALOGFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOALOGWhereInput;
    orderBy?: Prisma.MS_PESSOALOGOrderByWithRelationInput | Prisma.MS_PESSOALOGOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOALOGWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOALOGScalarFieldEnum | Prisma.MS_PESSOALOGScalarFieldEnum[];
};
export type MS_PESSOALOGCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOALOGCreateInput, Prisma.MS_PESSOALOGUncheckedCreateInput>;
};
export type MS_PESSOALOGCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_PESSOALOGCreateManyInput | Prisma.MS_PESSOALOGCreateManyInput[];
};
export type MS_PESSOALOGUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateInput, Prisma.MS_PESSOALOGUncheckedUpdateInput>;
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
};
export type MS_PESSOALOGUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_PESSOALOGUpdateManyMutationInput, Prisma.MS_PESSOALOGUncheckedUpdateManyInput>;
    where?: Prisma.MS_PESSOALOGWhereInput;
    limit?: number;
};
export type MS_PESSOALOGUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOALOGCreateInput, Prisma.MS_PESSOALOGUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_PESSOALOGUpdateInput, Prisma.MS_PESSOALOGUncheckedUpdateInput>;
};
export type MS_PESSOALOGDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOALOGWhereUniqueInput;
};
export type MS_PESSOALOGDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOALOGWhereInput;
    limit?: number;
};
export type MS_PESSOALOG$MD_TIPOMENSAGEMAUDITORIAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
};
export type MS_PESSOALOG$MS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_PESSOALOGDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOALOGSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOALOGOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOALOGInclude<ExtArgs> | null;
};
