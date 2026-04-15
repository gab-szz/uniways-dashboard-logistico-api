import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_PESSOAMOTORISTAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_PESSOAMOTORISTAPayload>;
export type AggregateMS_PESSOAMOTORISTA = {
    _count: MS_PESSOAMOTORISTACountAggregateOutputType | null;
    _avg: MS_PESSOAMOTORISTAAvgAggregateOutputType | null;
    _sum: MS_PESSOAMOTORISTASumAggregateOutputType | null;
    _min: MS_PESSOAMOTORISTAMinAggregateOutputType | null;
    _max: MS_PESSOAMOTORISTAMaxAggregateOutputType | null;
};
export type MS_PESSOAMOTORISTAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CONDICAOPAGAMENTO: number | null;
    PESSOA: number | null;
    JORNADAATUAL: number | null;
};
export type MS_PESSOAMOTORISTASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CONDICAOPAGAMENTO: number | null;
    PESSOA: number | null;
    JORNADAATUAL: number | null;
};
export type MS_PESSOAMOTORISTAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CONDICAOPAGAMENTO: number | null;
    PESSOA: number | null;
    JORNADAATUAL: number | null;
};
export type MS_PESSOAMOTORISTAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CONDICAOPAGAMENTO: number | null;
    PESSOA: number | null;
    JORNADAATUAL: number | null;
};
export type MS_PESSOAMOTORISTACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    CONDICAOPAGAMENTO: number;
    PESSOA: number;
    JORNADAATUAL: number;
    _all: number;
};
export type MS_PESSOAMOTORISTAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CONDICAOPAGAMENTO?: true;
    PESSOA?: true;
    JORNADAATUAL?: true;
};
export type MS_PESSOAMOTORISTASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CONDICAOPAGAMENTO?: true;
    PESSOA?: true;
    JORNADAATUAL?: true;
};
export type MS_PESSOAMOTORISTAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CONDICAOPAGAMENTO?: true;
    PESSOA?: true;
    JORNADAATUAL?: true;
};
export type MS_PESSOAMOTORISTAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CONDICAOPAGAMENTO?: true;
    PESSOA?: true;
    JORNADAATUAL?: true;
};
export type MS_PESSOAMOTORISTACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    CONDICAOPAGAMENTO?: true;
    PESSOA?: true;
    JORNADAATUAL?: true;
    _all?: true;
};
export type MS_PESSOAMOTORISTAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    orderBy?: Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput | Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_PESSOAMOTORISTACountAggregateInputType;
    _avg?: MS_PESSOAMOTORISTAAvgAggregateInputType;
    _sum?: MS_PESSOAMOTORISTASumAggregateInputType;
    _min?: MS_PESSOAMOTORISTAMinAggregateInputType;
    _max?: MS_PESSOAMOTORISTAMaxAggregateInputType;
};
export type GetMS_PESSOAMOTORISTAAggregateType<T extends MS_PESSOAMOTORISTAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_PESSOAMOTORISTA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_PESSOAMOTORISTA[P]> : Prisma.GetScalarType<T[P], AggregateMS_PESSOAMOTORISTA[P]>;
};
export type MS_PESSOAMOTORISTAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    orderBy?: Prisma.MS_PESSOAMOTORISTAOrderByWithAggregationInput | Prisma.MS_PESSOAMOTORISTAOrderByWithAggregationInput[];
    by: Prisma.MS_PESSOAMOTORISTAScalarFieldEnum[] | Prisma.MS_PESSOAMOTORISTAScalarFieldEnum;
    having?: Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_PESSOAMOTORISTACountAggregateInputType | true;
    _avg?: MS_PESSOAMOTORISTAAvgAggregateInputType;
    _sum?: MS_PESSOAMOTORISTASumAggregateInputType;
    _min?: MS_PESSOAMOTORISTAMinAggregateInputType;
    _max?: MS_PESSOAMOTORISTAMaxAggregateInputType;
};
export type MS_PESSOAMOTORISTAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    CONDICAOPAGAMENTO: number | null;
    PESSOA: number | null;
    JORNADAATUAL: number | null;
    _count: MS_PESSOAMOTORISTACountAggregateOutputType | null;
    _avg: MS_PESSOAMOTORISTAAvgAggregateOutputType | null;
    _sum: MS_PESSOAMOTORISTASumAggregateOutputType | null;
    _min: MS_PESSOAMOTORISTAMinAggregateOutputType | null;
    _max: MS_PESSOAMOTORISTAMaxAggregateOutputType | null;
};
export type GetMS_PESSOAMOTORISTAGroupByPayload<T extends MS_PESSOAMOTORISTAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_PESSOAMOTORISTAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_PESSOAMOTORISTAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_PESSOAMOTORISTAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_PESSOAMOTORISTAGroupByOutputType[P]>;
}>>;
export type MS_PESSOAMOTORISTAWhereInput = {
    AND?: Prisma.MS_PESSOAMOTORISTAWhereInput | Prisma.MS_PESSOAMOTORISTAWhereInput[];
    OR?: Prisma.MS_PESSOAMOTORISTAWhereInput[];
    NOT?: Prisma.MS_PESSOAMOTORISTAWhereInput | Prisma.MS_PESSOAMOTORISTAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOAMOTORISTA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    CONDICAOPAGAMENTO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    JORNADAATUAL?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
};
export type MS_PESSOAMOTORISTAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAOrderByRelationAggregateInput;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAOrderByWithRelationInput;
};
export type MS_PESSOAMOTORISTAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_PESSOAMOTORISTAWhereInput | Prisma.MS_PESSOAMOTORISTAWhereInput[];
    OR?: Prisma.MS_PESSOAMOTORISTAWhereInput[];
    NOT?: Prisma.MS_PESSOAMOTORISTAWhereInput | Prisma.MS_PESSOAMOTORISTAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    CONDICAOPAGAMENTO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    JORNADAATUAL?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
}, "HANDLE">;
export type MS_PESSOAMOTORISTAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_PESSOAMOTORISTACountOrderByAggregateInput;
    _avg?: Prisma.MS_PESSOAMOTORISTAAvgOrderByAggregateInput;
    _max?: Prisma.MS_PESSOAMOTORISTAMaxOrderByAggregateInput;
    _min?: Prisma.MS_PESSOAMOTORISTAMinOrderByAggregateInput;
    _sum?: Prisma.MS_PESSOAMOTORISTASumOrderByAggregateInput;
};
export type MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput | Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput | Prisma.MS_PESSOAMOTORISTAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number | null;
    CONDICAOPAGAMENTO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number | null;
    PESSOA?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number | null;
    JORNADAATUAL?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOAMOTORISTA"> | number | null;
};
export type MS_PESSOAMOTORISTACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    JORNADAATUAL?: number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOAMOTORISTA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput;
};
export type MS_PESSOAMOTORISTAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    PESSOA?: number | null;
    JORNADAATUAL?: number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
};
export type MS_PESSOAMOTORISTAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUpdateManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTANestedInput;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOAMOTORISTA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOANestedInput;
};
export type MS_PESSOAMOTORISTAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTANestedInput;
};
export type MS_PESSOAMOTORISTACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    PESSOA?: number | null;
    JORNADAATUAL?: number | null;
};
export type MS_PESSOAMOTORISTAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOAMOTORISTAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOAMOTORISTANullableScalarRelationFilter = {
    is?: Prisma.MS_PESSOAMOTORISTAWhereInput | null;
    isNot?: Prisma.MS_PESSOAMOTORISTAWhereInput | null;
};
export type MS_PESSOAMOTORISTAListRelationFilter = {
    every?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    some?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    none?: Prisma.MS_PESSOAMOTORISTAWhereInput;
};
export type MS_PESSOAMOTORISTAOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    CONDICAOPAGAMENTO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
    JORNADAATUAL?: Prisma.SortOrder;
};
export type MS_PESSOAMOTORISTACreateNestedOneWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
};
export type MS_PESSOAMOTORISTACreateNestedManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
};
export type MS_PESSOAMOTORISTAUncheckedCreateNestedManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
};
export type MS_PESSOAMOTORISTAUpdateOneWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
    upsert?: Prisma.MS_PESSOAMOTORISTAUpsertWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
    disconnect?: Prisma.MS_PESSOAMOTORISTAWhereInput | boolean;
    delete?: Prisma.MS_PESSOAMOTORISTAWhereInput | boolean;
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateToOneWithWhereWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
};
export type MS_PESSOAMOTORISTAUpdateManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOAMOTORISTAUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    delete?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    update?: Prisma.MS_PESSOAMOTORISTAUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOAMOTORISTAUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOAMOTORISTAScalarWhereInput | Prisma.MS_PESSOAMOTORISTAScalarWhereInput[];
};
export type MS_PESSOAMOTORISTAUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOAMOTORISTAUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    delete?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    connect?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput | Prisma.MS_PESSOAMOTORISTAWhereUniqueInput[];
    update?: Prisma.MS_PESSOAMOTORISTAUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOAMOTORISTAUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTAUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOAMOTORISTAScalarWhereInput | Prisma.MS_PESSOAMOTORISTAScalarWhereInput[];
};
export type MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    JORNADAATUAL?: number | null;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOAMOTORISTA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput;
};
export type MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    PESSOA?: number | null;
    JORNADAATUAL?: number | null;
};
export type MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
};
export type MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    JORNADAATUAL?: number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
};
export type MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    JORNADAATUAL?: number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput;
};
export type MS_PESSOAMOTORISTACreateOrConnectWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInputEnvelope = {
    data: Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput[];
};
export type MS_PESSOAMOTORISTAUpsertWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    update: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
    create: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
};
export type MS_PESSOAMOTORISTAUpdateToOneWithWhereWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput>;
};
export type MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOAMOTORISTA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOANestedInput;
};
export type MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOAMOTORISTAUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    update: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOAMOTORISTAUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOAMOTORISTAUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOAMOTORISTAScalarWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateManyMutationInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOAMOTORISTAScalarWhereInput = {
    AND?: Prisma.MS_PESSOAMOTORISTAScalarWhereInput | Prisma.MS_PESSOAMOTORISTAScalarWhereInput[];
    OR?: Prisma.MS_PESSOAMOTORISTAScalarWhereInput[];
    NOT?: Prisma.MS_PESSOAMOTORISTAScalarWhereInput | Prisma.MS_PESSOAMOTORISTAScalarWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOAMOTORISTA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOAMOTORISTA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    CONDICAOPAGAMENTO?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
    JORNADAATUAL?: Prisma.IntNullableFilter<"MS_PESSOAMOTORISTA"> | number | null;
};
export type MS_PESSOAMOTORISTACreateManyMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    CONDICAOPAGAMENTO?: number | null;
    JORNADAATUAL?: number | null;
};
export type MS_PESSOAMOTORISTAUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUpdateManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTANestedInput;
};
export type MS_PESSOAMOTORISTAUncheckedUpdateWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_PESSOAMOTORISTA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTANestedInput;
};
export type MS_PESSOAMOTORISTAUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CONDICAOPAGAMENTO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    JORNADAATUAL?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOAMOTORISTACountOutputType = {
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA: number;
};
export type MS_PESSOAMOTORISTACountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: boolean | MS_PESSOAMOTORISTACountOutputTypeCountMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs;
};
export type MS_PESSOAMOTORISTACountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTACountOutputTypeSelect<ExtArgs> | null;
};
export type MS_PESSOAMOTORISTACountOutputTypeCountMS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_PESSOAMOTORISTASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    CONDICAOPAGAMENTO?: boolean;
    PESSOA?: boolean;
    JORNADAATUAL?: boolean;
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: boolean | Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs>;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: boolean | Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_PESSOAMOTORISTACountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_PESSOAMOTORISTA"]>;
export type MS_PESSOAMOTORISTASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    CONDICAOPAGAMENTO?: boolean;
    PESSOA?: boolean;
    JORNADAATUAL?: boolean;
};
export type MS_PESSOAMOTORISTAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "CONDICAOPAGAMENTO" | "PESSOA" | "JORNADAATUAL", ExtArgs["result"]["mS_PESSOAMOTORISTA"]>;
export type MS_PESSOAMOTORISTAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA?: boolean | Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs>;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA?: boolean | Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_PESSOAMOTORISTACountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_PESSOAMOTORISTAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_PESSOAMOTORISTA";
    objects: {
        MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA: Prisma.$MS_PESSOAPayload<ExtArgs>[];
        MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        CONDICAOPAGAMENTO: number | null;
        PESSOA: number | null;
        JORNADAATUAL: number | null;
    }, ExtArgs["result"]["mS_PESSOAMOTORISTA"]>;
    composites: {};
};
export type MS_PESSOAMOTORISTAGetPayload<S extends boolean | null | undefined | MS_PESSOAMOTORISTADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload, S>;
export type MS_PESSOAMOTORISTACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_PESSOAMOTORISTAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_PESSOAMOTORISTACountAggregateInputType | true;
};
export interface MS_PESSOAMOTORISTADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_PESSOAMOTORISTA'];
        meta: {
            name: 'MS_PESSOAMOTORISTA';
        };
    };
    findUnique<T extends MS_PESSOAMOTORISTAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_PESSOAMOTORISTAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_PESSOAMOTORISTAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_PESSOAMOTORISTAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_PESSOAMOTORISTAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_PESSOAMOTORISTACreateArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTACreateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_PESSOAMOTORISTACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOAMOTORISTACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_PESSOAMOTORISTADeleteArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_PESSOAMOTORISTAUpdateArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_PESSOAMOTORISTADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOAMOTORISTADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_PESSOAMOTORISTAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_PESSOAMOTORISTAUpsertArgs>(args: Prisma.SelectSubset<T, MS_PESSOAMOTORISTAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAMOTORISTAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAMOTORISTAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_PESSOAMOTORISTACountArgs>(args?: Prisma.Subset<T, MS_PESSOAMOTORISTACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_PESSOAMOTORISTACountAggregateOutputType> : number>;
    aggregate<T extends MS_PESSOAMOTORISTAAggregateArgs>(args: Prisma.Subset<T, MS_PESSOAMOTORISTAAggregateArgs>): Prisma.PrismaPromise<GetMS_PESSOAMOTORISTAAggregateType<T>>;
    groupBy<T extends MS_PESSOAMOTORISTAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_PESSOAMOTORISTAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_PESSOAMOTORISTAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_PESSOAMOTORISTAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_PESSOAMOTORISTAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_PESSOAMOTORISTAFieldRefs;
}
export interface Prisma__MS_PESSOAMOTORISTAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTA<T extends Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOA<T extends Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_PESSOAMOTORISTAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
    readonly CONDICAOPAGAMENTO: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
    readonly PESSOA: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
    readonly JORNADAATUAL: Prisma.FieldRef<"MS_PESSOAMOTORISTA", 'Int'>;
}
export type MS_PESSOAMOTORISTAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
};
export type MS_PESSOAMOTORISTAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
};
export type MS_PESSOAMOTORISTAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    orderBy?: Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput | Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOAMOTORISTAScalarFieldEnum | Prisma.MS_PESSOAMOTORISTAScalarFieldEnum[];
};
export type MS_PESSOAMOTORISTAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    orderBy?: Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput | Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOAMOTORISTAScalarFieldEnum | Prisma.MS_PESSOAMOTORISTAScalarFieldEnum[];
};
export type MS_PESSOAMOTORISTAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    orderBy?: Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput | Prisma.MS_PESSOAMOTORISTAOrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOAMOTORISTAScalarFieldEnum | Prisma.MS_PESSOAMOTORISTAScalarFieldEnum[];
};
export type MS_PESSOAMOTORISTACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateInput>;
};
export type MS_PESSOAMOTORISTACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_PESSOAMOTORISTACreateManyInput | Prisma.MS_PESSOAMOTORISTACreateManyInput[];
};
export type MS_PESSOAMOTORISTAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateInput>;
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
};
export type MS_PESSOAMOTORISTAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateManyMutationInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateManyInput>;
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    limit?: number;
};
export type MS_PESSOAMOTORISTAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOAMOTORISTACreateInput, Prisma.MS_PESSOAMOTORISTAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_PESSOAMOTORISTAUpdateInput, Prisma.MS_PESSOAMOTORISTAUncheckedUpdateInput>;
};
export type MS_PESSOAMOTORISTADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOAMOTORISTAWhereUniqueInput;
};
export type MS_PESSOAMOTORISTADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAMOTORISTAWhereInput;
    limit?: number;
};
export type MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOA_PESSOAMOTORISTAToMS_PESSOAMOTORISTAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MS_PESSOAMOTORISTA$MS_PESSOA_MS_PESSOAMOTORISTA_PESSOAToMS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_PESSOAMOTORISTADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOAMOTORISTASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAMOTORISTAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAMOTORISTAInclude<ExtArgs> | null;
};
