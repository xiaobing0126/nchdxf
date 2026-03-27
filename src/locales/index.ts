import { createI18n } from "vue-i18n";
import commonMessages from "./common";
import homeMessages from "./home";

const messages = {
  "zh-CN": {
    ...commonMessages["zh-CN"],
    ...homeMessages["zh-CN"],
  },
  "en-US": {
    ...commonMessages["en-US"],
    ...homeMessages["en-US"],
  },
} as const;

type Locale = keyof typeof messages;
const defaultLocale: Locale = "zh-CN";
const savedLocale = localStorage.getItem("app-locale") as Locale | null;
const locale: Locale =
  savedLocale && savedLocale in messages ? savedLocale : defaultLocale;

const i18n = createI18n({
  legacy: false,
  locale,
  fallbackLocale: defaultLocale,
  messages,
});

export function setAppLocale(nextLocale: Locale) {
  i18n.global.locale.value = nextLocale;
  localStorage.setItem("app-locale", nextLocale);
}

export type { Locale };
export default i18n;
