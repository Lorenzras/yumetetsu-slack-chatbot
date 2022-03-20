declare global {
  namespace NodeJS {
    interface ProcessEnv {
      KINTONE_BASE_URL: string,

      KINTONE_TOKEN_LTCUST: string,
      KINTONE_TOKEN_HANKYO?: string,

      SLACK_SIGNING_SECRET: string,
      SLACK_BOT_TOKEN: string,

      SLACK_CHANNEL_ID_TOYOKAWA: string,
      SLACK_CHANNEL_ID_TOYOHASHI: string,
      SLACK_CHANNEL_ID_TOYOTA: string,
      SLACK_CHANNEL_ID_NAKAGAWA: string,
      SLACK_CHANNEL_ID_GAMAGORI: string,
      SLACK_CHANNEL_ID_TAKAHAMA: string,
      SLACK_CHANNEL_ID_OGAKI: string,

      SLACK_CHANNEL_ID_TEST: string,
      SLACK_CHANNEL_ID_DEV: string,

      BROWSER_TYPE?: 'NORMAL' | 'HEADLESS',
      ENVIRONMENT?: 'dev' | 'prod',
      NODE_ENV: string,
      CLI_KINTONE_PATH: string
    }
  }
}


export {};
