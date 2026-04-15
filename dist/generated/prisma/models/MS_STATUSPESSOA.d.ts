import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_STATUSPESSOAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_STATUSPESSOAPayload>;
export type AggregateMS_STATUSPESSOA = {
    _count: MS_STATUSPESSOACountAggregateOutputType | null;
    _avg: MS_STATUSPESSOAAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOASumAggregateOutputType | null;
    _min: MS_STATUSPESSOAMinAggregateOutputType | null;
    _max: MS_STATUSPESSOAMaxAggregateOutputType | null;
};
export type MS_STATUSPESSOAAvgAggregateOutputType = {
    HANDLE: number | null;
    IMAGEM: number | null;
    ORDEM: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
};
export type MS_STATUSPESSOASumAggregateOutputType = {
    HANDLE: number | null;
    IMAGEM: number | null;
    ORDEM: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
};
export type MS_STATUSPESSOAMinAggregateOutputType = {
    HANDLE: number | null;
    IMAGEM: number | null;
    NOME: string | null;
    ORDEM: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
};
export type MS_STATUSPESSOAMaxAggregateOutputType = {
    HANDLE: number | null;
    IMAGEM: number | null;
    NOME: string | null;
    ORDEM: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
};
export type MS_STATUSPESSOACountAggregateOutputType = {
    HANDLE: number;
    IMAGEM: number;
    NOME: number;
    ORDEM: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    _all: number;
};
export type MS_STATUSPESSOAAvgAggregateInputType = {
    HANDLE?: true;
    IMAGEM?: true;
    ORDEM?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
};
export type MS_STATUSPESSOASumAggregateInputType = {
    HANDLE?: true;
    IMAGEM?: true;
    ORDEM?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
};
export type MS_STATUSPESSOAMinAggregateInputType = {
    HANDLE?: true;
    IMAGEM?: true;
    NOME?: true;
    ORDEM?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
};
export type MS_STATUSPESSOAMaxAggregateInputType = {
    HANDLE?: true;
    IMAGEM?: true;
    NOME?: true;
    ORDEM?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
};
export type MS_STATUSPESSOACountAggregateInputType = {
    HANDLE?: true;
    IMAGEM?: true;
    NOME?: true;
    ORDEM?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    _all?: true;
};
export type MS_STATUSPESSOAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAOrderByWithRelationInput | Prisma.MS_STATUSPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_STATUSPESSOACountAggregateInputType;
    _avg?: MS_STATUSPESSOAAvgAggregateInputType;
    _sum?: MS_STATUSPESSOASumAggregateInputType;
    _min?: MS_STATUSPESSOAMinAggregateInputType;
    _max?: MS_STATUSPESSOAMaxAggregateInputType;
};
export type GetMS_STATUSPESSOAAggregateType<T extends MS_STATUSPESSOAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_STATUSPESSOA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOA[P]> : Prisma.GetScalarType<T[P], AggregateMS_STATUSPESSOA[P]>;
};
export type MS_STATUSPESSOAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAOrderByWithAggregationInput | Prisma.MS_STATUSPESSOAOrderByWithAggregationInput[];
    by: Prisma.MS_STATUSPESSOAScalarFieldEnum[] | Prisma.MS_STATUSPESSOAScalarFieldEnum;
    having?: Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_STATUSPESSOACountAggregateInputType | true;
    _avg?: MS_STATUSPESSOAAvgAggregateInputType;
    _sum?: MS_STATUSPESSOASumAggregateInputType;
    _min?: MS_STATUSPESSOAMinAggregateInputType;
    _max?: MS_STATUSPESSOAMaxAggregateInputType;
};
export type MS_STATUSPESSOAGroupByOutputType = {
    HANDLE: number;
    IMAGEM: number | null;
    NOME: string | null;
    ORDEM: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    _count: MS_STATUSPESSOACountAggregateOutputType | null;
    _avg: MS_STATUSPESSOAAvgAggregateOutputType | null;
    _sum: MS_STATUSPESSOASumAggregateOutputType | null;
    _min: MS_STATUSPESSOAMinAggregateOutputType | null;
    _max: MS_STATUSPESSOAMaxAggregateOutputType | null;
};
export type GetMS_STATUSPESSOAGroupByPayload<T extends MS_STATUSPESSOAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_STATUSPESSOAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_STATUSPESSOAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_STATUSPESSOAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_STATUSPESSOAGroupByOutputType[P]>;
}>>;
export type MS_STATUSPESSOAWhereInput = {
    AND?: Prisma.MS_STATUSPESSOAWhereInput | Prisma.MS_STATUSPESSOAWhereInput[];
    OR?: Prisma.MS_STATUSPESSOAWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOAWhereInput | Prisma.MS_STATUSPESSOAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_STATUSPESSOA"> | number;
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEListRelationFilter;
};
export type MS_STATUSPESSOAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOA?: Prisma.MS_PESSOAOrderByRelationAggregateInput;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEOrderByRelationAggregateInput;
};
export type MS_STATUSPESSOAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_STATUSPESSOAWhereInput | Prisma.MS_STATUSPESSOAWhereInput[];
    OR?: Prisma.MS_STATUSPESSOAWhereInput[];
    NOT?: Prisma.MS_STATUSPESSOAWhereInput | Prisma.MS_STATUSPESSOAWhereInput[];
    IMAGEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_STATUSPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_STATUSPESSOA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEListRelationFilter;
}, "HANDLE">;
export type MS_STATUSPESSOAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_STATUSPESSOACountOrderByAggregateInput;
    _avg?: Prisma.MS_STATUSPESSOAAvgOrderByAggregateInput;
    _max?: Prisma.MS_STATUSPESSOAMaxOrderByAggregateInput;
    _min?: Prisma.MS_STATUSPESSOAMinOrderByAggregateInput;
    _sum?: Prisma.MS_STATUSPESSOASumOrderByAggregateInput;
};
export type MS_STATUSPESSOAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput | Prisma.MS_STATUSPESSOAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_STATUSPESSOA"> | number;
    IMAGEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | number | null;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_STATUSPESSOA"> | number | null;
};
export type MS_STATUSPESSOACreateInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_STATUSPESSOAInput;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTECreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOAUncheckedCreateInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_STATUSPESSOAInput;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUncheckedCreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateManyWithoutMS_STATUSPESSOANestedInput;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_STATUSPESSOANestedInput;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUncheckedUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOACreateManyInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
};
export type MS_STATUSPESSOAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_STATUSPESSOANullableScalarRelationFilter = {
    is?: Prisma.MS_STATUSPESSOAWhereInput | null;
    isNot?: Prisma.MS_STATUSPESSOAWhereInput | null;
};
export type MS_STATUSPESSOACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
};
export type MS_STATUSPESSOAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
};
export type MS_STATUSPESSOASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    IMAGEM?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
};
export type MS_STATUSPESSOACreateNestedOneWithoutMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOAInput;
    connect?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOAUpdateOneWithoutMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOAInput;
    upsert?: Prisma.MS_STATUSPESSOAUpsertWithoutMS_PESSOAInput;
    disconnect?: Prisma.MS_STATUSPESSOAWhereInput | boolean;
    delete?: Prisma.MS_STATUSPESSOAWhereInput | boolean;
    connect?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateToOneWithWhereWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOAInput>, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_STATUSPESSOACreateNestedOneWithoutMS_PESSOACLIENTEInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOACLIENTEInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOACLIENTEInput;
    connect?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOAUpdateOneWithoutMS_PESSOACLIENTENestedInput = {
    create?: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOACLIENTEInput>;
    connectOrCreate?: Prisma.MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOACLIENTEInput;
    upsert?: Prisma.MS_STATUSPESSOAUpsertWithoutMS_PESSOACLIENTEInput;
    disconnect?: Prisma.MS_STATUSPESSOAWhereInput | boolean;
    delete?: Prisma.MS_STATUSPESSOAWhereInput | boolean;
    connect?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateToOneWithWhereWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOACLIENTEInput>, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOACLIENTEInput>;
};
export type MS_STATUSPESSOACreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTECreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUncheckedCreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOAInput = {
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
};
export type MS_STATUSPESSOAUpsertWithoutMS_PESSOAInput = {
    update: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOAInput>;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
};
export type MS_STATUSPESSOAUpdateToOneWithWhereWithoutMS_PESSOAInput = {
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOAInput, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_STATUSPESSOAUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOACLIENTE?: Prisma.MS_PESSOACLIENTEUncheckedUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOACreateWithoutMS_PESSOACLIENTEInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOACLIENTEInput = {
    HANDLE: number;
    IMAGEM?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_STATUSPESSOAInput;
};
export type MS_STATUSPESSOACreateOrConnectWithoutMS_PESSOACLIENTEInput = {
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOACLIENTEInput>;
};
export type MS_STATUSPESSOAUpsertWithoutMS_PESSOACLIENTEInput = {
    update: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOACLIENTEInput>;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACreateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedCreateWithoutMS_PESSOACLIENTEInput>;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
};
export type MS_STATUSPESSOAUpdateToOneWithWhereWithoutMS_PESSOACLIENTEInput = {
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateWithoutMS_PESSOACLIENTEInput, Prisma.MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOACLIENTEInput>;
};
export type MS_STATUSPESSOAUpdateWithoutMS_PESSOACLIENTEInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOAUncheckedUpdateWithoutMS_PESSOACLIENTEInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    IMAGEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_STATUSPESSOANestedInput;
};
export type MS_STATUSPESSOACountOutputType = {
    MS_PESSOA: number;
    MS_PESSOACLIENTE: number;
};
export type MS_STATUSPESSOACountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | MS_STATUSPESSOACountOutputTypeCountMS_PESSOAArgs;
    MS_PESSOACLIENTE?: boolean | MS_STATUSPESSOACountOutputTypeCountMS_PESSOACLIENTEArgs;
};
export type MS_STATUSPESSOACountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOACountOutputTypeSelect<ExtArgs> | null;
};
export type MS_STATUSPESSOACountOutputTypeCountMS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_STATUSPESSOACountOutputTypeCountMS_PESSOACLIENTEArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOACLIENTEWhereInput;
};
export type MS_STATUSPESSOASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    IMAGEM?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    MS_PESSOA?: boolean | Prisma.MS_STATUSPESSOA$MS_PESSOAArgs<ExtArgs>;
    MS_PESSOACLIENTE?: boolean | Prisma.MS_STATUSPESSOA$MS_PESSOACLIENTEArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOACountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_STATUSPESSOA"]>;
export type MS_STATUSPESSOASelectScalar = {
    HANDLE?: boolean;
    IMAGEM?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
};
export type MS_STATUSPESSOAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "IMAGEM" | "NOME" | "ORDEM" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO", ExtArgs["result"]["mS_STATUSPESSOA"]>;
export type MS_STATUSPESSOAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | Prisma.MS_STATUSPESSOA$MS_PESSOAArgs<ExtArgs>;
    MS_PESSOACLIENTE?: boolean | Prisma.MS_STATUSPESSOA$MS_PESSOACLIENTEArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_STATUSPESSOACountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_STATUSPESSOAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_STATUSPESSOA";
    objects: {
        MS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs>[];
        MS_PESSOACLIENTE: Prisma.$MS_PESSOACLIENTEPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        IMAGEM: number | null;
        NOME: string | null;
        ORDEM: number | null;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
    }, ExtArgs["result"]["mS_STATUSPESSOA"]>;
    composites: {};
};
export type MS_STATUSPESSOAGetPayload<S extends boolean | null | undefined | MS_STATUSPESSOADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload, S>;
export type MS_STATUSPESSOACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_STATUSPESSOAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_STATUSPESSOACountAggregateInputType | true;
};
export interface MS_STATUSPESSOADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_STATUSPESSOA'];
        meta: {
            name: 'MS_STATUSPESSOA';
        };
    };
    findUnique<T extends MS_STATUSPESSOAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_STATUSPESSOAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_STATUSPESSOAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_STATUSPESSOAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_STATUSPESSOAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_STATUSPESSOACreateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOACreateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_STATUSPESSOACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_STATUSPESSOADeleteArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_STATUSPESSOAUpdateArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_STATUSPESSOADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_STATUSPESSOADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_STATUSPESSOAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_STATUSPESSOAUpsertArgs>(args: Prisma.SelectSubset<T, MS_STATUSPESSOAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_STATUSPESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_STATUSPESSOAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_STATUSPESSOACountArgs>(args?: Prisma.Subset<T, MS_STATUSPESSOACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_STATUSPESSOACountAggregateOutputType> : number>;
    aggregate<T extends MS_STATUSPESSOAAggregateArgs>(args: Prisma.Subset<T, MS_STATUSPESSOAAggregateArgs>): Prisma.PrismaPromise<GetMS_STATUSPESSOAAggregateType<T>>;
    groupBy<T extends MS_STATUSPESSOAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_STATUSPESSOAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_STATUSPESSOAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_STATUSPESSOAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_STATUSPESSOAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_STATUSPESSOAFieldRefs;
}
export interface Prisma__MS_STATUSPESSOAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOA<T extends Prisma.MS_STATUSPESSOA$MS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_STATUSPESSOA$MS_PESSOAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MS_PESSOACLIENTE<T extends Prisma.MS_STATUSPESSOA$MS_PESSOACLIENTEArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_STATUSPESSOA$MS_PESSOACLIENTEArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOACLIENTEPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_STATUSPESSOAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_STATUSPESSOA", 'Int'>;
    readonly IMAGEM: Prisma.FieldRef<"MS_STATUSPESSOA", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_STATUSPESSOA", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_STATUSPESSOA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_STATUSPESSOA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_STATUSPESSOA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_STATUSPESSOA", 'Int'>;
}
export type MS_STATUSPESSOAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAOrderByWithRelationInput | Prisma.MS_STATUSPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAScalarFieldEnum | Prisma.MS_STATUSPESSOAScalarFieldEnum[];
};
export type MS_STATUSPESSOAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAOrderByWithRelationInput | Prisma.MS_STATUSPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAScalarFieldEnum | Prisma.MS_STATUSPESSOAScalarFieldEnum[];
};
export type MS_STATUSPESSOAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    orderBy?: Prisma.MS_STATUSPESSOAOrderByWithRelationInput | Prisma.MS_STATUSPESSOAOrderByWithRelationInput[];
    cursor?: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_STATUSPESSOAScalarFieldEnum | Prisma.MS_STATUSPESSOAScalarFieldEnum[];
};
export type MS_STATUSPESSOACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOACreateInput, Prisma.MS_STATUSPESSOAUncheckedCreateInput>;
};
export type MS_STATUSPESSOACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_STATUSPESSOACreateManyInput | Prisma.MS_STATUSPESSOACreateManyInput[];
};
export type MS_STATUSPESSOAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateInput, Prisma.MS_STATUSPESSOAUncheckedUpdateInput>;
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateManyMutationInput, Prisma.MS_STATUSPESSOAUncheckedUpdateManyInput>;
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_STATUSPESSOACreateInput, Prisma.MS_STATUSPESSOAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_STATUSPESSOAUpdateInput, Prisma.MS_STATUSPESSOAUncheckedUpdateInput>;
};
export type MS_STATUSPESSOADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
    where: Prisma.MS_STATUSPESSOAWhereUniqueInput;
};
export type MS_STATUSPESSOADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_STATUSPESSOAWhereInput;
    limit?: number;
};
export type MS_STATUSPESSOA$MS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MS_STATUSPESSOA$MS_PESSOACLIENTEArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOACLIENTESelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOACLIENTEOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOACLIENTEInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOACLIENTEWhereInput;
    orderBy?: Prisma.MS_PESSOACLIENTEOrderByWithRelationInput | Prisma.MS_PESSOACLIENTEOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOACLIENTEWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOACLIENTEScalarFieldEnum | Prisma.MS_PESSOACLIENTEScalarFieldEnum[];
};
export type MS_STATUSPESSOADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_STATUSPESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_STATUSPESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_STATUSPESSOAInclude<ExtArgs> | null;
};
