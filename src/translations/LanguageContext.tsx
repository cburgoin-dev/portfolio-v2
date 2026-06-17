import {
    createContext,
    useContext,
    useState,
} from "react";

export type Language = "en" | "es";

type LanguageContextType = {
    language: Language;
    setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => {},
});

const STORAGE_KEY = "portfolio-language";

type Props = {
    children: React.ReactNode;
};

export function LanguageProvider({ children }: Props) {
    const [language, setLanguageState] = useState<Language>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (
            saved === "en" ||
            saved === "es"
        ) {
            return saved;
        }

        return "en";
    });

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);

        localStorage.setItem(
            STORAGE_KEY,
            lang
        );
    };

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    return useContext(LanguageContext)
}