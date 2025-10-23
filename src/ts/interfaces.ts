export interface BasicContext {
    date: string;
    setDate: React.Dispatch<React.SetStateAction<string>>;
    light: boolean | null;
    setTheme: React.Dispatch<React.SetStateAction<boolean | null>>;
    ET: object[];
    MC: object[];
    BL: object[];
    fetchAll: () => void;
}

export interface Source {
    src: object[];
    title: string;
}