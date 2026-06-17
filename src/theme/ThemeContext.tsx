import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

export type Theme = "dark" | "light";

type ThemeContextType = {
    theme: Theme;
    setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextType>({
    theme: "dark",
    setTheme: () => {},
});

const STORAGE_KEY = "portfolio-theme";

type Props = {
    children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {

    const [theme, setThemeState] = useState<Theme>(() => {
        const saved = localStorage.getItem(STORAGE_KEY);

        if (
            saved === "dark" ||
            saved === "light"
        ) {
            return saved;
        }

        return "dark";
    });

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            theme
        );

        localStorage.setItem(
            STORAGE_KEY,
            theme
        );
    }, [theme]);

    useEffect(() => {
        const id = requestAnimationFrame(() => {
            document.documentElement.classList.remove(
                "preload"
            );
        });

        return () => cancelAnimationFrame(id);
    }, []);

    const setTheme = (theme: Theme) => {
        setThemeState(theme);
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext)
}