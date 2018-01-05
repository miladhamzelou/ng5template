
export class appConst{
    private static appurl = 'http://localhost:3001';
    public static get APP_URL(): string { return this.appurl;};
    public static get TODO(): string { return this.appurl+'/todo';};
    public static get USER(): string { return this.appurl+'/users';};
    public static get LOGIN(): string { return this.appurl+'/users/login';};
};