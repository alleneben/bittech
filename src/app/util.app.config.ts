import { InjectionToken } from "@angular/core";

export let APP_CONFIG = new InjectionToken<AppConfig>("app.config");

export interface AppConfig {
    apiBase: string;
}

export const BaseAppConfig:AppConfig = {
    apiBase: "http://bittechcorp.com/gfp/gfpapis/registration/register.php"
    // apiBase: "http://worktimer.kitchencarelimited.com/server/",
    // apiBase: "https://orders.kitchencarelimited.com/server/"
};
