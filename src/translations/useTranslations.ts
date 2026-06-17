import en from "./en";
import es from "./es";

import { useLanguage } from "./LanguageContext";

const translations = {
    en,
    es,
};

export type Translation = typeof en;

export function useTranslations(): Translation {
    const { language } = useLanguage();

    return translations[language];
}