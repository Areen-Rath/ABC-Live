import { createContext } from "react";
import { BasicContext } from "./interfaces";

const context: BasicContext = {
    date: "",
    setDate: () => {},
    light: false,
    setTheme: () => {},
    ET: [],
    MC: [],
    BL: [],
    fetchAll: () => {}
}

export const AppContext = createContext(context);