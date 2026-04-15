import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_PESSOATRANSPORTADORModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_PESSOATRANSPORTADORPayload>;
export type AggregateMS_PESSOATRANSPORTADOR = {
    _count: MS_PESSOATRANSPORTADORCountAggregateOutputType | null;
    _avg: MS_PESSOATRANSPORTADORAvgAggregateOutputType | null;
    _sum: MS_PESSOATRANSPORTADORSumAggregateOutputType | null;
    _min: MS_PESSOATRANSPORTADORMinAggregateOutputType | null;
    _max: MS_PESSOATRANSPORTADORMaxAggregateOutputType | null;
};
export type MS_PESSOATRANSPORTADORAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    PESSOA: number | null;
};
export type MS_PESSOATRANSPORTADORSumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    PESSOA: number | null;
};
export type MS_PESSOATRANSPORTADORMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    RNTRC: string | null;
    PESSOA: number | null;
};
export type MS_PESSOATRANSPORTADORMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    RNTRC: string | null;
    PESSOA: number | null;
};
export type MS_PESSOATRANSPORTADORCountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    RNTRC: number;
    PESSOA: number;
    _all: number;
};
export type MS_PESSOATRANSPORTADORAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    PESSOA?: true;
};
export type MS_PESSOATRANSPORTADORSumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    PESSOA?: true;
};
export type MS_PESSOATRANSPORTADORMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    RNTRC?: true;
    PESSOA?: true;
};
export type MS_PESSOATRANSPORTADORMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    RNTRC?: true;
    PESSOA?: true;
};
export type MS_PESSOATRANSPORTADORCountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    RNTRC?: true;
    PESSOA?: true;
    _all?: true;
};
export type MS_PESSOATRANSPORTADORAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    orderBy?: Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput | Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_PESSOATRANSPORTADORCountAggregateInputType;
    _avg?: MS_PESSOATRANSPORTADORAvgAggregateInputType;
    _sum?: MS_PESSOATRANSPORTADORSumAggregateInputType;
    _min?: MS_PESSOATRANSPORTADORMinAggregateInputType;
    _max?: MS_PESSOATRANSPORTADORMaxAggregateInputType;
};
export type GetMS_PESSOATRANSPORTADORAggregateType<T extends MS_PESSOATRANSPORTADORAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_PESSOATRANSPORTADOR]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_PESSOATRANSPORTADOR[P]> : Prisma.GetScalarType<T[P], AggregateMS_PESSOATRANSPORTADOR[P]>;
};
export type MS_PESSOATRANSPORTADORGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    orderBy?: Prisma.MS_PESSOATRANSPORTADOROrderByWithAggregationInput | Prisma.MS_PESSOATRANSPORTADOROrderByWithAggregationInput[];
    by: Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum[] | Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum;
    having?: Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_PESSOATRANSPORTADORCountAggregateInputType | true;
    _avg?: MS_PESSOATRANSPORTADORAvgAggregateInputType;
    _sum?: MS_PESSOATRANSPORTADORSumAggregateInputType;
    _min?: MS_PESSOATRANSPORTADORMinAggregateInputType;
    _max?: MS_PESSOATRANSPORTADORMaxAggregateInputType;
};
export type MS_PESSOATRANSPORTADORGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    RNTRC: string | null;
    PESSOA: number | null;
    _count: MS_PESSOATRANSPORTADORCountAggregateOutputType | null;
    _avg: MS_PESSOATRANSPORTADORAvgAggregateOutputType | null;
    _sum: MS_PESSOATRANSPORTADORSumAggregateOutputType | null;
    _min: MS_PESSOATRANSPORTADORMinAggregateOutputType | null;
    _max: MS_PESSOATRANSPORTADORMaxAggregateOutputType | null;
};
export type GetMS_PESSOATRANSPORTADORGroupByPayload<T extends MS_PESSOATRANSPORTADORGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_PESSOATRANSPORTADORGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_PESSOATRANSPORTADORGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_PESSOATRANSPORTADORGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_PESSOATRANSPORTADORGroupByOutputType[P]>;
}>>;
export type MS_PESSOATRANSPORTADORWhereInput = {
    AND?: Prisma.MS_PESSOATRANSPORTADORWhereInput | Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    OR?: Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    NOT?: Prisma.MS_PESSOATRANSPORTADORWhereInput | Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOATRANSPORTADOR"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    RNTRC?: Prisma.StringNullableFilter<"MS_PESSOATRANSPORTADOR"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
};
export type MS_PESSOATRANSPORTADOROrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    RNTRC?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAOrderByRelationAggregateInput;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAOrderByWithRelationInput;
};
export type MS_PESSOATRANSPORTADORWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_PESSOATRANSPORTADORWhereInput | Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    OR?: Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    NOT?: Prisma.MS_PESSOATRANSPORTADORWhereInput | Prisma.MS_PESSOATRANSPORTADORWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    RNTRC?: Prisma.StringNullableFilter<"MS_PESSOATRANSPORTADOR"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAListRelationFilter;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.XOR<Prisma.MS_PESSOANullableScalarRelationFilter, Prisma.MS_PESSOAWhereInput> | null;
}, "HANDLE">;
export type MS_PESSOATRANSPORTADOROrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    RNTRC?: Prisma.SortOrderInput | Prisma.SortOrder;
    PESSOA?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_PESSOATRANSPORTADORCountOrderByAggregateInput;
    _avg?: Prisma.MS_PESSOATRANSPORTADORAvgOrderByAggregateInput;
    _max?: Prisma.MS_PESSOATRANSPORTADORMaxOrderByAggregateInput;
    _min?: Prisma.MS_PESSOATRANSPORTADORMinOrderByAggregateInput;
    _sum?: Prisma.MS_PESSOATRANSPORTADORSumOrderByAggregateInput;
};
export type MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    RNTRC?: Prisma.StringNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | string | null;
    PESSOA?: Prisma.IntNullableWithAggregatesFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
};
export type MS_PESSOATRANSPORTADORCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOACreateNestedManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOATRANSPORTADOR_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput;
};
export type MS_PESSOATRANSPORTADORUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    PESSOA?: number | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
};
export type MS_PESSOATRANSPORTADORUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUpdateManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORNestedInput;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOATRANSPORTADOR_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOANestedInput;
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORNestedInput;
};
export type MS_PESSOATRANSPORTADORCreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    PESSOA?: number | null;
};
export type MS_PESSOATRANSPORTADORUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOATRANSPORTADORNullableScalarRelationFilter = {
    is?: Prisma.MS_PESSOATRANSPORTADORWhereInput | null;
    isNot?: Prisma.MS_PESSOATRANSPORTADORWhereInput | null;
};
export type MS_PESSOATRANSPORTADORListRelationFilter = {
    every?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    some?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    none?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
};
export type MS_PESSOATRANSPORTADOROrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORCountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    RNTRC?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    RNTRC?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    RNTRC?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORSumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    PESSOA?: Prisma.SortOrder;
};
export type MS_PESSOATRANSPORTADORCreateNestedOneWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
};
export type MS_PESSOATRANSPORTADORCreateNestedManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
};
export type MS_PESSOATRANSPORTADORUncheckedCreateNestedManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInputEnvelope;
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
};
export type MS_PESSOATRANSPORTADORUpdateOneWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORNestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
    upsert?: Prisma.MS_PESSOATRANSPORTADORUpsertWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
    disconnect?: Prisma.MS_PESSOATRANSPORTADORWhereInput | boolean;
    delete?: Prisma.MS_PESSOATRANSPORTADORWhereInput | boolean;
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateToOneWithWhereWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
};
export type MS_PESSOATRANSPORTADORUpdateManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOATRANSPORTADORUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    delete?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    update?: Prisma.MS_PESSOATRANSPORTADORUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOATRANSPORTADORUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereInput[];
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput> | Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[] | Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    connectOrCreate?: Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    upsert?: Prisma.MS_PESSOATRANSPORTADORUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    createMany?: Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInputEnvelope;
    set?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    disconnect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    delete?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    connect?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput | Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput[];
    update?: Prisma.MS_PESSOATRANSPORTADORUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    updateMany?: Prisma.MS_PESSOATRANSPORTADORUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
    deleteMany?: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereInput[];
};
export type MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.MS_PESSOACreateNestedOneWithoutMS_PESSOATRANSPORTADOR_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput;
};
export type MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    PESSOA?: number | null;
};
export type MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
};
export type MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOACreateNestedManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
};
export type MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput;
};
export type MS_PESSOATRANSPORTADORCreateOrConnectWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInputEnvelope = {
    data: Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput | Prisma.MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput[];
};
export type MS_PESSOATRANSPORTADORUpsertWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    update: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
    create: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
};
export type MS_PESSOATRANSPORTADORUpdateToOneWithWhereWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput>;
};
export type MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: Prisma.MS_PESSOAUpdateOneWithoutMS_PESSOATRANSPORTADOR_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOANestedInput;
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    PESSOA?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_PESSOATRANSPORTADORUpsertWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    update: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOATRANSPORTADORUpdateWithWhereUniqueWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOATRANSPORTADORUpdateManyWithWhereWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    where: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput;
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateManyMutationInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput>;
};
export type MS_PESSOATRANSPORTADORScalarWhereInput = {
    AND?: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereInput[];
    OR?: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput[];
    NOT?: Prisma.MS_PESSOATRANSPORTADORScalarWhereInput | Prisma.MS_PESSOATRANSPORTADORScalarWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_PESSOATRANSPORTADOR"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_PESSOATRANSPORTADOR"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
    RNTRC?: Prisma.StringNullableFilter<"MS_PESSOATRANSPORTADOR"> | string | null;
    PESSOA?: Prisma.IntNullableFilter<"MS_PESSOATRANSPORTADOR"> | number | null;
};
export type MS_PESSOATRANSPORTADORCreateManyMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    RNTRC?: string | null;
};
export type MS_PESSOATRANSPORTADORUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUpdateManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORNestedInput;
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_PESSOATRANSPORTADOR_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORNestedInput;
};
export type MS_PESSOATRANSPORTADORUncheckedUpdateManyWithoutMS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    RNTRC?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type MS_PESSOATRANSPORTADORCountOutputType = {
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR: number;
};
export type MS_PESSOATRANSPORTADORCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: boolean | MS_PESSOATRANSPORTADORCountOutputTypeCountMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs;
};
export type MS_PESSOATRANSPORTADORCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORCountOutputTypeSelect<ExtArgs> | null;
};
export type MS_PESSOATRANSPORTADORCountOutputTypeCountMS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_PESSOATRANSPORTADORSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    RNTRC?: boolean;
    PESSOA?: boolean;
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: boolean | Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs>;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: boolean | Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_PESSOATRANSPORTADORCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_PESSOATRANSPORTADOR"]>;
export type MS_PESSOATRANSPORTADORSelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    RNTRC?: boolean;
    PESSOA?: boolean;
};
export type MS_PESSOATRANSPORTADOROmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "RNTRC" | "PESSOA", ExtArgs["result"]["mS_PESSOATRANSPORTADOR"]>;
export type MS_PESSOATRANSPORTADORInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR?: boolean | Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs>;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA?: boolean | Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_PESSOATRANSPORTADORCountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_PESSOATRANSPORTADORPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_PESSOATRANSPORTADOR";
    objects: {
        MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR: Prisma.$MS_PESSOAPayload<ExtArgs>[];
        MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        RNTRC: string | null;
        PESSOA: number | null;
    }, ExtArgs["result"]["mS_PESSOATRANSPORTADOR"]>;
    composites: {};
};
export type MS_PESSOATRANSPORTADORGetPayload<S extends boolean | null | undefined | MS_PESSOATRANSPORTADORDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload, S>;
export type MS_PESSOATRANSPORTADORCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_PESSOATRANSPORTADORFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_PESSOATRANSPORTADORCountAggregateInputType | true;
};
export interface MS_PESSOATRANSPORTADORDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_PESSOATRANSPORTADOR'];
        meta: {
            name: 'MS_PESSOATRANSPORTADOR';
        };
    };
    findUnique<T extends MS_PESSOATRANSPORTADORFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_PESSOATRANSPORTADORFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_PESSOATRANSPORTADORFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_PESSOATRANSPORTADORFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_PESSOATRANSPORTADORFindManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_PESSOATRANSPORTADORCreateArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORCreateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_PESSOATRANSPORTADORCreateManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_PESSOATRANSPORTADORDeleteArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORDeleteArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_PESSOATRANSPORTADORUpdateArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_PESSOATRANSPORTADORDeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_PESSOATRANSPORTADORUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_PESSOATRANSPORTADORUpsertArgs>(args: Prisma.SelectSubset<T, MS_PESSOATRANSPORTADORUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOATRANSPORTADORClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOATRANSPORTADORPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_PESSOATRANSPORTADORCountArgs>(args?: Prisma.Subset<T, MS_PESSOATRANSPORTADORCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_PESSOATRANSPORTADORCountAggregateOutputType> : number>;
    aggregate<T extends MS_PESSOATRANSPORTADORAggregateArgs>(args: Prisma.Subset<T, MS_PESSOATRANSPORTADORAggregateArgs>): Prisma.PrismaPromise<GetMS_PESSOATRANSPORTADORAggregateType<T>>;
    groupBy<T extends MS_PESSOATRANSPORTADORGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_PESSOATRANSPORTADORGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_PESSOATRANSPORTADORGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_PESSOATRANSPORTADORGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_PESSOATRANSPORTADORGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_PESSOATRANSPORTADORFieldRefs;
}
export interface Prisma__MS_PESSOATRANSPORTADORClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADOR<T extends Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOA<T extends Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAArgs<ExtArgs>>): Prisma.Prisma__MS_PESSOAClient<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_PESSOATRANSPORTADORFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'Int'>;
    readonly RNTRC: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'String'>;
    readonly PESSOA: Prisma.FieldRef<"MS_PESSOATRANSPORTADOR", 'Int'>;
}
export type MS_PESSOATRANSPORTADORFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
};
export type MS_PESSOATRANSPORTADORFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
};
export type MS_PESSOATRANSPORTADORFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    orderBy?: Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput | Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum | Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum[];
};
export type MS_PESSOATRANSPORTADORFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    orderBy?: Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput | Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum | Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum[];
};
export type MS_PESSOATRANSPORTADORFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    orderBy?: Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput | Prisma.MS_PESSOATRANSPORTADOROrderByWithRelationInput[];
    cursor?: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum | Prisma.MS_PESSOATRANSPORTADORScalarFieldEnum[];
};
export type MS_PESSOATRANSPORTADORCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateInput>;
};
export type MS_PESSOATRANSPORTADORCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_PESSOATRANSPORTADORCreateManyInput | Prisma.MS_PESSOATRANSPORTADORCreateManyInput[];
};
export type MS_PESSOATRANSPORTADORUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateInput>;
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
};
export type MS_PESSOATRANSPORTADORUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateManyMutationInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateManyInput>;
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    limit?: number;
};
export type MS_PESSOATRANSPORTADORUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORCreateInput, Prisma.MS_PESSOATRANSPORTADORUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_PESSOATRANSPORTADORUpdateInput, Prisma.MS_PESSOATRANSPORTADORUncheckedUpdateInput>;
};
export type MS_PESSOATRANSPORTADORDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
    where: Prisma.MS_PESSOATRANSPORTADORWhereUniqueInput;
};
export type MS_PESSOATRANSPORTADORDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOATRANSPORTADORWhereInput;
    limit?: number;
};
export type MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOA_PESSOATRANSPORTADORToMS_PESSOATRANSPORTADORArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MS_PESSOATRANSPORTADOR$MS_PESSOA_MS_PESSOATRANSPORTADOR_PESSOAToMS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOASelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOAOmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOAInclude<ExtArgs> | null;
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_PESSOATRANSPORTADORDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_PESSOATRANSPORTADORSelect<ExtArgs> | null;
    omit?: Prisma.MS_PESSOATRANSPORTADOROmit<ExtArgs> | null;
    include?: Prisma.MS_PESSOATRANSPORTADORInclude<ExtArgs> | null;
};
