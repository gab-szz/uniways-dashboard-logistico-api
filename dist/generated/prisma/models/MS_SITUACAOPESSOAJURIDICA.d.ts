import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type MS_SITUACAOPESSOAJURIDICAModel = runtime.Types.Result.DefaultSelection<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload>;
export type AggregateMS_SITUACAOPESSOAJURIDICA = {
    _count: MS_SITUACAOPESSOAJURIDICACountAggregateOutputType | null;
    _avg: MS_SITUACAOPESSOAJURIDICAAvgAggregateOutputType | null;
    _sum: MS_SITUACAOPESSOAJURIDICASumAggregateOutputType | null;
    _min: MS_SITUACAOPESSOAJURIDICAMinAggregateOutputType | null;
    _max: MS_SITUACAOPESSOAJURIDICAMaxAggregateOutputType | null;
};
export type MS_SITUACAOPESSOAJURIDICAAvgAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SITUACAOPESSOAJURIDICASumAggregateOutputType = {
    HANDLE: number | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SITUACAOPESSOAJURIDICAMinAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SITUACAOPESSOAJURIDICAMaxAggregateOutputType = {
    HANDLE: number | null;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    CODIGO: number | null;
};
export type MS_SITUACAOPESSOAJURIDICACountAggregateOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: number;
    LOGDATAALTERACAO: number;
    LOGUSUARIOCADASTRO: number;
    LOGUSUARIOALTERACAO: number;
    NOME: number;
    ORDEM: number;
    CODIGO: number;
    _all: number;
};
export type MS_SITUACAOPESSOAJURIDICAAvgAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SITUACAOPESSOAJURIDICASumAggregateInputType = {
    HANDLE?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SITUACAOPESSOAJURIDICAMinAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SITUACAOPESSOAJURIDICAMaxAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    CODIGO?: true;
};
export type MS_SITUACAOPESSOAJURIDICACountAggregateInputType = {
    HANDLE?: true;
    LOGDATACADASTRO?: true;
    LOGDATAALTERACAO?: true;
    LOGUSUARIOCADASTRO?: true;
    LOGUSUARIOALTERACAO?: true;
    NOME?: true;
    ORDEM?: true;
    CODIGO?: true;
    _all?: true;
};
export type MS_SITUACAOPESSOAJURIDICAAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    orderBy?: Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput | Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MS_SITUACAOPESSOAJURIDICACountAggregateInputType;
    _avg?: MS_SITUACAOPESSOAJURIDICAAvgAggregateInputType;
    _sum?: MS_SITUACAOPESSOAJURIDICASumAggregateInputType;
    _min?: MS_SITUACAOPESSOAJURIDICAMinAggregateInputType;
    _max?: MS_SITUACAOPESSOAJURIDICAMaxAggregateInputType;
};
export type GetMS_SITUACAOPESSOAJURIDICAAggregateType<T extends MS_SITUACAOPESSOAJURIDICAAggregateArgs> = {
    [P in keyof T & keyof AggregateMS_SITUACAOPESSOAJURIDICA]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMS_SITUACAOPESSOAJURIDICA[P]> : Prisma.GetScalarType<T[P], AggregateMS_SITUACAOPESSOAJURIDICA[P]>;
};
export type MS_SITUACAOPESSOAJURIDICAGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    orderBy?: Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithAggregationInput | Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithAggregationInput[];
    by: Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum[] | Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum;
    having?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MS_SITUACAOPESSOAJURIDICACountAggregateInputType | true;
    _avg?: MS_SITUACAOPESSOAJURIDICAAvgAggregateInputType;
    _sum?: MS_SITUACAOPESSOAJURIDICASumAggregateInputType;
    _min?: MS_SITUACAOPESSOAJURIDICAMinAggregateInputType;
    _max?: MS_SITUACAOPESSOAJURIDICAMaxAggregateInputType;
};
export type MS_SITUACAOPESSOAJURIDICAGroupByOutputType = {
    HANDLE: number;
    LOGDATACADASTRO: Date | null;
    LOGDATAALTERACAO: Date | null;
    LOGUSUARIOCADASTRO: number | null;
    LOGUSUARIOALTERACAO: number | null;
    NOME: string | null;
    ORDEM: number | null;
    CODIGO: number | null;
    _count: MS_SITUACAOPESSOAJURIDICACountAggregateOutputType | null;
    _avg: MS_SITUACAOPESSOAJURIDICAAvgAggregateOutputType | null;
    _sum: MS_SITUACAOPESSOAJURIDICASumAggregateOutputType | null;
    _min: MS_SITUACAOPESSOAJURIDICAMinAggregateOutputType | null;
    _max: MS_SITUACAOPESSOAJURIDICAMaxAggregateOutputType | null;
};
export type GetMS_SITUACAOPESSOAJURIDICAGroupByPayload<T extends MS_SITUACAOPESSOAJURIDICAGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MS_SITUACAOPESSOAJURIDICAGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MS_SITUACAOPESSOAJURIDICAGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MS_SITUACAOPESSOAJURIDICAGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MS_SITUACAOPESSOAJURIDICAGroupByOutputType[P]>;
}>>;
export type MS_SITUACAOPESSOAJURIDICAWhereInput = {
    AND?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    OR?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    NOT?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    HANDLE?: Prisma.IntFilter<"MS_SITUACAOPESSOAJURIDICA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
};
export type MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    MS_PESSOA?: Prisma.MS_PESSOAOrderByRelationAggregateInput;
};
export type MS_SITUACAOPESSOAJURIDICAWhereUniqueInput = Prisma.AtLeast<{
    HANDLE?: number;
    AND?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    OR?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    NOT?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput[];
    LOGDATACADASTRO?: Prisma.DateTimeNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    NOME?: Prisma.StringNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | string | null;
    ORDEM?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    CODIGO?: Prisma.IntNullableFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAListRelationFilter;
}, "HANDLE">;
export type MS_SITUACAOPESSOAJURIDICAOrderByWithAggregationInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrderInput | Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrderInput | Prisma.SortOrder;
    NOME?: Prisma.SortOrderInput | Prisma.SortOrder;
    ORDEM?: Prisma.SortOrderInput | Prisma.SortOrder;
    CODIGO?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.MS_SITUACAOPESSOAJURIDICACountOrderByAggregateInput;
    _avg?: Prisma.MS_SITUACAOPESSOAJURIDICAAvgOrderByAggregateInput;
    _max?: Prisma.MS_SITUACAOPESSOAJURIDICAMaxOrderByAggregateInput;
    _min?: Prisma.MS_SITUACAOPESSOAJURIDICAMinOrderByAggregateInput;
    _sum?: Prisma.MS_SITUACAOPESSOAJURIDICASumOrderByAggregateInput;
};
export type MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput = {
    AND?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput | Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput[];
    OR?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput[];
    NOT?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput | Prisma.MS_SITUACAOPESSOAJURIDICAScalarWhereWithAggregatesInput[];
    HANDLE?: Prisma.IntWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | number;
    LOGDATACADASTRO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGDATAALTERACAO?: Prisma.DateTimeNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.IntNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    LOGUSUARIOALTERACAO?: Prisma.IntNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    NOME?: Prisma.StringNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | string | null;
    ORDEM?: Prisma.IntNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
    CODIGO?: Prisma.IntNullableWithAggregatesFilter<"MS_SITUACAOPESSOAJURIDICA"> | number | null;
};
export type MS_SITUACAOPESSOAJURIDICACreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    CODIGO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOACreateNestedManyWithoutMS_SITUACAOPESSOAJURIDICAInput;
};
export type MS_SITUACAOPESSOAJURIDICAUncheckedCreateInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    CODIGO?: number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedCreateNestedManyWithoutMS_SITUACAOPESSOAJURIDICAInput;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUpdateManyWithoutMS_SITUACAOPESSOAJURIDICANestedInput;
};
export type MS_SITUACAOPESSOAJURIDICAUncheckedUpdateInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    MS_PESSOA?: Prisma.MS_PESSOAUncheckedUpdateManyWithoutMS_SITUACAOPESSOAJURIDICANestedInput;
};
export type MS_SITUACAOPESSOAJURIDICACreateManyInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    CODIGO?: number | null;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateManyMutationInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SITUACAOPESSOAJURIDICAUncheckedUpdateManyInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SITUACAOPESSOAJURIDICANullableScalarRelationFilter = {
    is?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | null;
    isNot?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | null;
};
export type MS_SITUACAOPESSOAJURIDICACountOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SITUACAOPESSOAJURIDICAAvgOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SITUACAOPESSOAJURIDICAMaxOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SITUACAOPESSOAJURIDICAMinOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGDATACADASTRO?: Prisma.SortOrder;
    LOGDATAALTERACAO?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    NOME?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SITUACAOPESSOAJURIDICASumOrderByAggregateInput = {
    HANDLE?: Prisma.SortOrder;
    LOGUSUARIOCADASTRO?: Prisma.SortOrder;
    LOGUSUARIOALTERACAO?: Prisma.SortOrder;
    ORDEM?: Prisma.SortOrder;
    CODIGO?: Prisma.SortOrder;
};
export type MS_SITUACAOPESSOAJURIDICACreateNestedOneWithoutMS_PESSOAInput = {
    create?: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_SITUACAOPESSOAJURIDICACreateOrConnectWithoutMS_PESSOAInput;
    connect?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateOneWithoutMS_PESSOANestedInput = {
    create?: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateWithoutMS_PESSOAInput>;
    connectOrCreate?: Prisma.MS_SITUACAOPESSOAJURIDICACreateOrConnectWithoutMS_PESSOAInput;
    upsert?: Prisma.MS_SITUACAOPESSOAJURIDICAUpsertWithoutMS_PESSOAInput;
    disconnect?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | boolean;
    delete?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput | boolean;
    connect?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateToOneWithWhereWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUpdateWithoutMS_PESSOAInput>, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_SITUACAOPESSOAJURIDICACreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    CODIGO?: number | null;
};
export type MS_SITUACAOPESSOAJURIDICAUncheckedCreateWithoutMS_PESSOAInput = {
    HANDLE: number;
    LOGDATACADASTRO?: Date | string | null;
    LOGDATAALTERACAO?: Date | string | null;
    LOGUSUARIOCADASTRO?: number | null;
    LOGUSUARIOALTERACAO?: number | null;
    NOME?: string | null;
    ORDEM?: number | null;
    CODIGO?: number | null;
};
export type MS_SITUACAOPESSOAJURIDICACreateOrConnectWithoutMS_PESSOAInput = {
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateWithoutMS_PESSOAInput>;
};
export type MS_SITUACAOPESSOAJURIDICAUpsertWithoutMS_PESSOAInput = {
    update: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateWithoutMS_PESSOAInput>;
    create: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateWithoutMS_PESSOAInput>;
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateToOneWithWhereWithoutMS_PESSOAInput = {
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    data: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateWithoutMS_PESSOAInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateWithoutMS_PESSOAInput>;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SITUACAOPESSOAJURIDICAUncheckedUpdateWithoutMS_PESSOAInput = {
    HANDLE?: Prisma.IntFieldUpdateOperationsInput | number;
    LOGDATACADASTRO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGDATAALTERACAO?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    LOGUSUARIOCADASTRO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    LOGUSUARIOALTERACAO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    NOME?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ORDEM?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    CODIGO?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type MS_SITUACAOPESSOAJURIDICACountOutputType = {
    MS_PESSOA: number;
};
export type MS_SITUACAOPESSOAJURIDICACountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | MS_SITUACAOPESSOAJURIDICACountOutputTypeCountMS_PESSOAArgs;
};
export type MS_SITUACAOPESSOAJURIDICACountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICACountOutputTypeSelect<ExtArgs> | null;
};
export type MS_SITUACAOPESSOAJURIDICACountOutputTypeCountMS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_PESSOAWhereInput;
};
export type MS_SITUACAOPESSOAJURIDICASelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    CODIGO?: boolean;
    MS_PESSOA?: boolean | Prisma.MS_SITUACAOPESSOAJURIDICA$MS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_SITUACAOPESSOAJURIDICACountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["mS_SITUACAOPESSOAJURIDICA"]>;
export type MS_SITUACAOPESSOAJURIDICASelectScalar = {
    HANDLE?: boolean;
    LOGDATACADASTRO?: boolean;
    LOGDATAALTERACAO?: boolean;
    LOGUSUARIOCADASTRO?: boolean;
    LOGUSUARIOALTERACAO?: boolean;
    NOME?: boolean;
    ORDEM?: boolean;
    CODIGO?: boolean;
};
export type MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"HANDLE" | "LOGDATACADASTRO" | "LOGDATAALTERACAO" | "LOGUSUARIOCADASTRO" | "LOGUSUARIOALTERACAO" | "NOME" | "ORDEM" | "CODIGO", ExtArgs["result"]["mS_SITUACAOPESSOAJURIDICA"]>;
export type MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    MS_PESSOA?: boolean | Prisma.MS_SITUACAOPESSOAJURIDICA$MS_PESSOAArgs<ExtArgs>;
    _count?: boolean | Prisma.MS_SITUACAOPESSOAJURIDICACountOutputTypeDefaultArgs<ExtArgs>;
};
export type $MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "MS_SITUACAOPESSOAJURIDICA";
    objects: {
        MS_PESSOA: Prisma.$MS_PESSOAPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        HANDLE: number;
        LOGDATACADASTRO: Date | null;
        LOGDATAALTERACAO: Date | null;
        LOGUSUARIOCADASTRO: number | null;
        LOGUSUARIOALTERACAO: number | null;
        NOME: string | null;
        ORDEM: number | null;
        CODIGO: number | null;
    }, ExtArgs["result"]["mS_SITUACAOPESSOAJURIDICA"]>;
    composites: {};
};
export type MS_SITUACAOPESSOAJURIDICAGetPayload<S extends boolean | null | undefined | MS_SITUACAOPESSOAJURIDICADefaultArgs> = runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload, S>;
export type MS_SITUACAOPESSOAJURIDICACountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<MS_SITUACAOPESSOAJURIDICAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MS_SITUACAOPESSOAJURIDICACountAggregateInputType | true;
};
export interface MS_SITUACAOPESSOAJURIDICADelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['MS_SITUACAOPESSOAJURIDICA'];
        meta: {
            name: 'MS_SITUACAOPESSOAJURIDICA';
        };
    };
    findUnique<T extends MS_SITUACAOPESSOAJURIDICAFindUniqueArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAFindUniqueArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends MS_SITUACAOPESSOAJURIDICAFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends MS_SITUACAOPESSOAJURIDICAFindFirstArgs>(args?: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAFindFirstArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends MS_SITUACAOPESSOAJURIDICAFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends MS_SITUACAOPESSOAJURIDICAFindManyArgs>(args?: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends MS_SITUACAOPESSOAJURIDICACreateArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICACreateArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends MS_SITUACAOPESSOAJURIDICACreateManyArgs>(args?: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    delete<T extends MS_SITUACAOPESSOAJURIDICADeleteArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICADeleteArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends MS_SITUACAOPESSOAJURIDICAUpdateArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAUpdateArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends MS_SITUACAOPESSOAJURIDICADeleteManyArgs>(args?: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends MS_SITUACAOPESSOAJURIDICAUpdateManyArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    upsert<T extends MS_SITUACAOPESSOAJURIDICAUpsertArgs>(args: Prisma.SelectSubset<T, MS_SITUACAOPESSOAJURIDICAUpsertArgs<ExtArgs>>): Prisma.Prisma__MS_SITUACAOPESSOAJURIDICAClient<runtime.Types.Result.GetResult<Prisma.$MS_SITUACAOPESSOAJURIDICAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends MS_SITUACAOPESSOAJURIDICACountArgs>(args?: Prisma.Subset<T, MS_SITUACAOPESSOAJURIDICACountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MS_SITUACAOPESSOAJURIDICACountAggregateOutputType> : number>;
    aggregate<T extends MS_SITUACAOPESSOAJURIDICAAggregateArgs>(args: Prisma.Subset<T, MS_SITUACAOPESSOAJURIDICAAggregateArgs>): Prisma.PrismaPromise<GetMS_SITUACAOPESSOAJURIDICAAggregateType<T>>;
    groupBy<T extends MS_SITUACAOPESSOAJURIDICAGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: MS_SITUACAOPESSOAJURIDICAGroupByArgs['orderBy'];
    } : {
        orderBy?: MS_SITUACAOPESSOAJURIDICAGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, MS_SITUACAOPESSOAJURIDICAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMS_SITUACAOPESSOAJURIDICAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: MS_SITUACAOPESSOAJURIDICAFieldRefs;
}
export interface Prisma__MS_SITUACAOPESSOAJURIDICAClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    MS_PESSOA<T extends Prisma.MS_SITUACAOPESSOAJURIDICA$MS_PESSOAArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.MS_SITUACAOPESSOAJURIDICA$MS_PESSOAArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$MS_PESSOAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface MS_SITUACAOPESSOAJURIDICAFieldRefs {
    readonly HANDLE: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'Int'>;
    readonly LOGDATACADASTRO: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'DateTime'>;
    readonly LOGDATAALTERACAO: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'DateTime'>;
    readonly LOGUSUARIOCADASTRO: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'Int'>;
    readonly LOGUSUARIOALTERACAO: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'Int'>;
    readonly NOME: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'String'>;
    readonly ORDEM: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'Int'>;
    readonly CODIGO: Prisma.FieldRef<"MS_SITUACAOPESSOAJURIDICA", 'Int'>;
}
export type MS_SITUACAOPESSOAJURIDICAFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
};
export type MS_SITUACAOPESSOAJURIDICAFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
};
export type MS_SITUACAOPESSOAJURIDICAFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    orderBy?: Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput | Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum | Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum[];
};
export type MS_SITUACAOPESSOAJURIDICAFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    orderBy?: Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput | Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum | Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum[];
};
export type MS_SITUACAOPESSOAJURIDICAFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    orderBy?: Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput | Prisma.MS_SITUACAOPESSOAJURIDICAOrderByWithRelationInput[];
    cursor?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum | Prisma.MS_SITUACAOPESSOAJURIDICAScalarFieldEnum[];
};
export type MS_SITUACAOPESSOAJURIDICACreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateInput>;
};
export type MS_SITUACAOPESSOAJURIDICACreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.MS_SITUACAOPESSOAJURIDICACreateManyInput | Prisma.MS_SITUACAOPESSOAJURIDICACreateManyInput[];
};
export type MS_SITUACAOPESSOAJURIDICAUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateInput>;
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
};
export type MS_SITUACAOPESSOAJURIDICAUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateManyMutationInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateManyInput>;
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    limit?: number;
};
export type MS_SITUACAOPESSOAJURIDICAUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
    create: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICACreateInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.MS_SITUACAOPESSOAJURIDICAUpdateInput, Prisma.MS_SITUACAOPESSOAJURIDICAUncheckedUpdateInput>;
};
export type MS_SITUACAOPESSOAJURIDICADeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
    where: Prisma.MS_SITUACAOPESSOAJURIDICAWhereUniqueInput;
};
export type MS_SITUACAOPESSOAJURIDICADeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.MS_SITUACAOPESSOAJURIDICAWhereInput;
    limit?: number;
};
export type MS_SITUACAOPESSOAJURIDICA$MS_PESSOAArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type MS_SITUACAOPESSOAJURIDICADefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.MS_SITUACAOPESSOAJURIDICASelect<ExtArgs> | null;
    omit?: Prisma.MS_SITUACAOPESSOAJURIDICAOmit<ExtArgs> | null;
    include?: Prisma.MS_SITUACAOPESSOAJURIDICAInclude<ExtArgs> | null;
};
