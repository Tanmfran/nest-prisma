export declare class LoggerService {
    private logger;
    constructor();
    log(message: string): void;
    error(message: string, trace?: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
}
