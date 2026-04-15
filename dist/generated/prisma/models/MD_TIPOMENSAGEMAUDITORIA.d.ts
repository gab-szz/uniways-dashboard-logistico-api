import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MD_TIPOMENSAGEMAUDITORIAModel = runtime.Types.Result.DefaultSelection<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload>;
export type AggregateMD_TIPOMENSAGEMAUDITORIA = {
    _count: MD_TIPOMENSAGEMAUDITORIACountAggregateOutputType | null;
    _avg: MD_TIPOMENSAGEMAUDITORIAAvgAggregateOutputType | null;
    _sum: MD_TIPOMENSAGEMAUDITORIASumAggregateOutputType | null;
    _min: MD_TIPOMENSAGEMAUDITORIAMinAggregateOutputType | null;
    _max: MD_TIPOMENSAGEMAUDITORIAMaxAggregateOutputType | null;
};
export type MD_TIPOMENSAGEMAUDITORIAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CODIGO: number | null;
};
export type MD_TIPOMENSAGEMAUDITORIASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CODIGO: number | null;
};
export type MD_TIPOMENSAGEMAUDITORIAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    CODIGO: number | null;
};
export type MD_TIPOMENSAGEMAUDITORIAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    CODIGO: number | null;
};
export type MD_TIPOMENSAGEMAUDITORIACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    NOME: number;
    CODIGO: number;
    _all: number;
};
export type MD_TIPOMENSAGEMAUDITORIAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CODIGO?: true;
};
export type MD_TIPOMENSAGEMAUDITORIASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CODIGO?: true;
};
export type MD_TIPOMENSAGEMAUDITORIAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    CODIGO?: true;
};
export type MD_TIPOMENSAGEMAUDITORIAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    CODIGO?: true;
};
export type MD_TIPOMENSAGEMAUDITORIACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    CODIGO?: true;
    _all?: true;
};
export type MD_TIPOMENSAGEMAUDITORIAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    orderBy?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput | Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput[];
    cursor?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MD_TIPOMENSAGEMAUDITORIACountAggregateInputType;
    _avg?: MD_TIPOMENSAGEMAUDITORIAAvgAggregateInputType;
    _sum?: MD_TIPOMENSAGEMAUDITORIASumAggregateInputType;
    _min?: MD_TIPOMENSAGEMAUDITORIAMinAggregateInputType;
    _max?: MD_TIPOMENSAGEMAUDITORIAMaxAggregateInputType;
};
export type GetMD_TIPOMENSAGEMAUDITORIAAggregateType<T extends MD_TIPOMENSAGEMAUDITORIAAggregateArgs> = {
    [P in keyof T & keyof AggregateMD_TIPOMENSAGEMAUDITORIA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMD_TIPOMENSAGEMAUDITORIA[P]> : Prisma.GetScalarType<T[P], AggregateMD_TIPOMENSAGEMAUDITORIA[P]>;
};
export type MD_TIPOMENSAGEMAUDITORIAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    orderBy?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithAggregationInput | Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithAggregationInput[];
    by: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum[] | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum;
    having?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MD_TIPOMENSAGEMAUDITORIACountAggregateInputType | true;
    _avg?: MD_TIPOMENSAGEMAUDITORIAAvgAggregateInputType;
    _sum?: MD_TIPOMENSAGEMAUDITORIASumAggregateInputType;
    _min?: MD_TIPOMENSAGEMAUDITORIAMinAggregateInputType;
    _max?: MD_TIPOMENSAGEMAUDITORIAMaxAggregateInputType;
};
export type MD_TIPOMENSAGEMAUDITORIAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    CODIGO: number | null;
    _count: MD_TIPOMENSAGEMAUDITORIACountAggregateOutputType | null;
    _avg: MD_TIPOMENSAGEMAUDITORIAAvgAggregateOutputType | null;
    _sum: MD_TIPOMENSAGEMAUDITORIASumAggregateOutputType | null;
    _min: MD_TIPOMENSAGEMAUDITORIAMinAggregateOutputType | null;
    _max: MD_TIPOMENSAGEMAUDITORIAMaxAggregateOutputType | null;
};
export type GetMD_TIPOMENSAGEMAUDITORIAGroupByPayload<T extends MD_TIPOMENSAGEMAUDITORIAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MD_TIPOMENSAGEMAUDITORIAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MD_TIPOMENSAGEMAUDITORIAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MD_TIPOMENSAGEMAUDITORIAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MD_TIPOMENSAGEMAUDITORIAGroupByOutputType[P]>;
}>>;
export type MD_TIPOMENSAGEMAUDITORIAWhereInput = {
    AND?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    OR?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    NOT?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | string | null;
    CODIGO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGListRelationFilter;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGListRelationFilter;
};
export type MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGOrderByRelationAggregateInput;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGOrderByRelationAggregateInput;
};
export type MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    OR?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    NOT?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | string | null;
    CODIGO?: Prisma.IntNullableFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGListRelationFilter;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGListRelationFilter;
}, "HANDLE">;
export type MD_TIPOMENSAGEMAUDITORIAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MD_TIPOMENSAGEMAUDITORIACountOrderByAggregateInput;
    _avg?: Prisma.MD_TIPOMENSAGEMAUDITORIAAvgOrderByAggregateInput;
    _max?: Prisma.MD_TIPOMENSAGEMAUDITORIAMaxOrderByAggregateInput;
    _min?: Prisma.MD_TIPOMENSAGEMAUDITORIAMinOrderByAggregateInput;
    _sum?: Prisma.MD_TIPOMENSAGEMAUDITORIASumOrderByAggregateInput;
};
export type MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | string | null;
    CODIGO?: Prisma.IntNullableWithAggregatesFilter<"MD_TIPOMENSAGEMAUDITORIA"> | number | null;
};
export type MD_TIPOMENSAGEMAUDITORIACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MD_TIPOMENSAGEMAUDITORIANullableScalarRelationFilter = {
    is?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | null;
    isNot?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | null;
};
export type MD_TIPOMENSAGEMAUDITORIACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MD_TIPOMENSAGEMAUDITORIAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MD_TIPOMENSAGEMAUDITORIAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MD_TIPOMENSAGEMAUDITORIAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MD_TIPOMENSAGEMAUDITORIASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutOP_VIAGEMLOGInput = {
    create?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutOP_VIAGEMLOGInput>;
    connectOrCreate?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutOP_VIAGEMLOGInput;
    connect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutOP_VIAGEMLOGNestedInput = {
    create?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutOP_VIAGEMLOGInput>;
    connectOrCreate?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutOP_VIAGEMLOGInput;
    upsert?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpsertWithoutOP_VIAGEMLOGInput;
    disconnect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | boolean;
    delete?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | boolean;
    connect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateToOneWithWhereWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutOP_VIAGEMLOGInput>, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutOP_VIAGEMLOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIACreateNestedOneWithoutMS_PESSOALOGInput = {
    create?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutMS_PESSOALOGInput>;
    connectOrCreate?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutMS_PESSOALOGInput;
    connect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateOneWithoutMS_PESSOALOGNestedInput = {
    create?: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutMS_PESSOALOGInput>;
    connectOrCreate?: Prisma.MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutMS_PESSOALOGInput;
    upsert?: Prisma.MD_TIPOMENSAGEMAUDITORIAUpsertWithoutMS_PESSOALOGInput;
    disconnect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | boolean;
    delete?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput | boolean;
    connect?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateToOneWithWhereWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutMS_PESSOALOGInput>, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutMS_PESSOALOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIACreateWithoutOP_VIAGEMLOGInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutOP_VIAGEMLOGInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutOP_VIAGEMLOGInput = {
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutOP_VIAGEMLOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIAUpsertWithoutOP_VIAGEMLOGInput = {
    update: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutOP_VIAGEMLOGInput>;
    create: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutOP_VIAGEMLOGInput>;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateToOneWithWhereWithoutOP_VIAGEMLOGInput = {
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    data: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutOP_VIAGEMLOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutOP_VIAGEMLOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateWithoutOP_VIAGEMLOGInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutOP_VIAGEMLOGInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOALOG?: Prisma.MS_PESSOALOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIACreateWithoutMS_PESSOALOGInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutMS_PESSOALOGInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    CODIGO?: number | null;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUncheckedCreateNestedManyWithoutMD_TIPOMENSAGEMAUDITORIAInput;
};
export type MD_TIPOMENSAGEMAUDITORIACreateOrConnectWithoutMS_PESSOALOGInput = {
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutMS_PESSOALOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIAUpsertWithoutMS_PESSOALOGInput = {
    update: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutMS_PESSOALOGInput>;
    create: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateWithoutMS_PESSOALOGInput>;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateToOneWithWhereWithoutMS_PESSOALOGInput = {
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    data: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateWithoutMS_PESSOALOGInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutMS_PESSOALOGInput>;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateWithoutMS_PESSOALOGInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateWithoutMS_PESSOALOGInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    OP_VIAGEMLOG?: Prisma.OP_VIAGEMLOGUncheckedUpdateManyWithoutMD_TIPOMENSAGEMAUDITORIANestedInput;
};
export type MD_TIPOMENSAGEMAUDITORIACountOutputType = {
    MS_PESSOALOG: number;
    OP_VIAGEMLOG: number;
};
export type MD_TIPOMENSAGEMAUDITORIACountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOALOG?: boolean | MD_TIPOMENSAGEMAUDITORIACountOutputTypeCountMS_PESSOALOGArgs;
    OP_VIAGEMLOG?: boolean | MD_TIPOMENSAGEMAUDITORIACountOutputTypeCountOP_VIAGEMLOGArgs;
};
export type MD_TIPOMENSAGEMAUDITORIACountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIACountOutputTypeSelect<ExtArgs> | null;
};
export type MD_TIPOMENSAGEMAUDITORIACountOutputTypeCountMS_PESSOALOGArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOALOGWhereInput;
};
export type MD_TIPOMENSAGEMAUDITORIACountOutputTypeCountOP_VIAGEMLOGArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OP_VIAGEMLOGWhereInput;
};
export type MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    CODIGO?: boolean;
    MS_PESSOALOG?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIA$MS_PESSOALOGArgs<ExtArgs>;
    OP_VIAGEMLOG?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIA$OP_VIAGEMLOGArgs<ExtArgs>;
    _count?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIACountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mD_TIPOMENSAGEMAUDITORIA"]>;
export type MD_TIPOMENSAGEMAUDITORIASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    CODIGO?: boolean;
};
export type MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "CODIGO", ExtArgs["result"]["mD_TIPOMENSAGEMAUDITORIA"]>;
export type MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOALOG?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIA$MS_PESSOALOGArgs<ExtArgs>;
    OP_VIAGEMLOG?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIA$OP_VIAGEMLOGArgs<ExtArgs>;
    _count?: boolean | Prisma.MD_TIPOMENSAGEMAUDITORIACountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MD_TIPOMENSAGEMAUDITORIA";
    objects: {
        MS_PESSOALOG: Prisma.$MS_PESSOALOGPayload<ExtArgs>[];
        OP_VIAGEMLOG: Prisma.$OP_VIAGEMLOGPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        NOME: string | null;
        CODIGO: number | null;
    }, ExtArgs["result"]["mD_TIPOMENSAGEMAUDITORIA"]>;
    composites: {};
};
export type MD_TIPOMENSAGEMAUDITORIAGetPayload<S extends boolean | null | undefined | MD_TIPOMENSAGEMAUDITORIADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload, S>;
export type MD_TIPOMENSAGEMAUDITORIACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MD_TIPOMENSAGEMAUDITORIAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MD_TIPOMENSAGEMAUDITORIACountAggregateInputType | true;
};
export interface MD_TIPOMENSAGEMAUDITORIADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MD_TIPOMENSAGEMAUDITORIA'];
        meta: {
            name: 'MD_TIPOMENSAGEMAUDITORIA';
        };
    };
    findUnique<T extends MD_TIPOMENSAGEMAUDITORIAFindUniqueArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MD_TIPOMENSAGEMAUDITORIAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MD_TIPOMENSAGEMAUDITORIAFindFirstArgs>(args?: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MD_TIPOMENSAGEMAUDITORIAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MD_TIPOMENSAGEMAUDITORIAFindManyArgs>(args?: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MD_TIPOMENSAGEMAUDITORIACreateArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIACreateArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MD_TIPOMENSAGEMAUDITORIACreateManyArgs>(args?: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MD_TIPOMENSAGEMAUDITORIADeleteArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIADeleteArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MD_TIPOMENSAGEMAUDITORIAUpdateArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAUpdateArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MD_TIPOMENSAGEMAUDITORIADeleteManyArgs>(args?: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MD_TIPOMENSAGEMAUDITORIAUpdateManyArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MD_TIPOMENSAGEMAUDITORIAUpsertArgs>(args: Prisma.SelectSubset<T, MD_TIPOMENSAGEMAUDITORIAUpsertArgs<ExtArgs>>): Prisma.Prisma__MD_TIPOMENSAGEMAUDITORIAClient<runtime.Types.Result.GetResult<Prisma.$MD_TIPOMENSAGEMAUDITORIAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MD_TIPOMENSAGEMAUDITORIACountArgs>(args?: Prisma.Subset<T, MD_TIPOMENSAGEMAUDITORIACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MD_TIPOMENSAGEMAUDITORIACountAggregateOutputType> : number>;
    aggregate<T extends MD_TIPOMENSAGEMAUDITORIAAggregateArgs>(args: Prisma.Subset<T, MD_TIPOMENSAGEMAUDITORIAAggregateArgs>): Prisma.PrismaPromise<GetMD_TIPOMENSAGEMAUDITORIAAggregateType<T>>;
    groupBy<T extends MD_TIPOMENSAGEMAUDITORIAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MD_TIPOMENSAGEMAUDITORIAGroupByArgs['orderBy'];
    } : {
        orderBy?: MD_TIPOMENSAGEMAUDITORIAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MD_TIPOMENSAGEMAUDITORIAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMD_TIPOMENSAGEMAUDITORIAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MD_TIPOMENSAGEMAUDITORIAFieldRefs;
}
export interface Prisma__MD_TIPOMENSAGEMAUDITORIAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOALOG<T extends Prisma.MD_TIPOMENSAGEMAUDITORIA$MS_PESSOALOGArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MD_TIPOMENSAGEMAUDITORIA$MS_PESSOALOGArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOALOGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    OP_VIAGEMLOG<T extends Prisma.MD_TIPOMENSAGEMAUDITORIA$OP_VIAGEMLOGArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MD_TIPOMENSAGEMAUDITORIA$OP_VIAGEMLOGArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OP_VIAGEMLOGPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MD_TIPOMENSAGEMAUDITORIAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'String'>;
    readonly CODIGO: Prisma.FieldRef<"MD_TIPOMENSAGEMAUDITORIA", 'Int'>;
}
export type MD_TIPOMENSAGEMAUDITORIAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    orderBy?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput | Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput[];
    cursor?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum[];
};
export type MD_TIPOMENSAGEMAUDITORIAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    orderBy?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput | Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput[];
    cursor?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum[];
};
export type MD_TIPOMENSAGEMAUDITORIAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    orderBy?: Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput | Prisma.MD_TIPOMENSAGEMAUDITORIAOrderByWithRelationInput[];
    cursor?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum | Prisma.MD_TIPOMENSAGEMAUDITORIAScalarFieldEnum[];
};
export type MD_TIPOMENSAGEMAUDITORIACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateInput>;
};
export type MD_TIPOMENSAGEMAUDITORIACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MD_TIPOMENSAGEMAUDITORIACreateManyInput | Prisma.MD_TIPOMENSAGEMAUDITORIACreateManyInput[];
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateInput>;
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateManyMutationInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateManyInput>;
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    limit?: number;
};
export type MD_TIPOMENSAGEMAUDITORIAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIACreateInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MD_TIPOMENSAGEMAUDITORIAUpdateInput, Prisma.MD_TIPOMENSAGEMAUDITORIAUncheckedUpdateInput>;
};
export type MD_TIPOMENSAGEMAUDITORIADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
    where: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereUniqueInput;
};
export type MD_TIPOMENSAGEMAUDITORIADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MD_TIPOMENSAGEMAUDITORIAWhereInput;
    limit?: number;
};
export type MD_TIPOMENSAGEMAUDITORIA$MS_PESSOALOGArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MD_TIPOMENSAGEMAUDITORIA$OP_VIAGEMLOGArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MD_TIPOMENSAGEMAUDITORIADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MD_TIPOMENSAGEMAUDITORIASelect<ExtArgs> | null;
    omit?: Prisma.MD_TIPOMENSAGEMAUDITORIAOmit<ExtArgs> | null;
    include?: Prisma.MD_TIPOMENSAGEMAUDITORIAInclude<ExtArgs> | null;
};
