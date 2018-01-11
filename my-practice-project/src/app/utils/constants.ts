
export class appConst{
    private static apiUrl = 'http://localhost:3001';
    // private static appUrl = ;
    public static get APP_URL(): string { return this.apiUrl;};
    public static get TODO(): string { return this.apiUrl+'/todo';};
    public static get USER(): string { return this.apiUrl+'/users';};
    public static get LOGIN(): string { return this.apiUrl+'/users/login';};
};