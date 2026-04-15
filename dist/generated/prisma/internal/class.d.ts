import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get oP_VIAGEM(): Prisma.OP_VIAGEMDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get oP_STATUSVIAGEM(): Prisma.OP_STATUSVIAGEMDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get oP_VIAGEMLOG(): Prisma.OP_VIAGEMLOGDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get iN_INTEGRACAO(): Prisma.IN_INTEGRACAODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mD_TIPOMENSAGEMAUDITORIA(): Prisma.MD_TIPOMENSAGEMAUDITORIADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOA(): Prisma.MS_PESSOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOACLIENTE(): Prisma.MS_PESSOACLIENTEDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOACONTATO(): Prisma.MS_PESSOACONTATODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOAENDERECO(): Prisma.MS_PESSOAENDERECODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOALOG(): Prisma.MS_PESSOALOGDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOAMOTORISTA(): Prisma.MS_PESSOAMOTORISTADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_PESSOATRANSPORTADOR(): Prisma.MS_PESSOATRANSPORTADORDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_SEXOPESSOA(): Prisma.MS_SEXOPESSOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_SITUACAOPESSOAJURIDICA(): Prisma.MS_SITUACAOPESSOAJURIDICADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_STATUSPESSOA(): Prisma.MS_STATUSPESSOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_STATUSPESSOACONTATO(): Prisma.MS_STATUSPESSOACONTATODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_STATUSPESSOAENDERECO(): Prisma.MS_STATUSPESSOAENDERECODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_TIPOINATIVACAOPESSOA(): Prisma.MS_TIPOINATIVACAOPESSOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_TIPOPESSOA(): Prisma.MS_TIPOPESSOADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_TIPOPESSOAENDERECO(): Prisma.MS_TIPOPESSOAENDERECODelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get mS_TIPOPESSOAOCORRENCIA(): Prisma.MS_TIPOPESSOAOCORRENCIADelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
