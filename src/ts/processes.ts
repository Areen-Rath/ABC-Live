import { Storage } from "expo-storage";
import * as NavigationBar from "expo-navigation-bar";

/**
 * Fetches news from a website through ABC Live API.
 * @param url URL of the API page to fetch news from
 * @param setNews Method to update the news state (`ET`/`MC`/`BL`)
 */
export async function fetchNews(
    url: string,
    setNews: React.Dispatch<React.SetStateAction<object[]>>
): Promise<void> {
    setNews([]);
    await fetch(url)
        .then(response => response.json())
        .then(responseJson => {
            let response = [];
            for(var i in responseJson.data){
                response.push([
                    responseJson.data[i].title,
                    responseJson.data[i].link,
                    responseJson.data[i].img,
                    responseJson.data[i].desc
                ]);
            }

            setNews(response);
        })
}

/**
 * Fetches theme from local storage.
 * If the app is freshly installed, i.e., local storage does not contain theme data,
 * it sets the default theme as dark.
 * @param setTheme Method to update the theme (`false` for dark and `true` for light)
 */
export async function fetchTheme(
    setTheme: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<void> {
    try {
        let isEnabled = await Storage.getItem({ key: "light" });
        setTheme(isEnabled === "true")
    } catch (err) {
        setTheme(false);
        await Storage.setItem({
            key: "light",
            value: false
        });
    }
}

/**
 * Switches theme from light to dark or dark to light whenever called.
 * @param val Theme the user wants to set, obtained from the toggle's state (`false` for dark and `true` for light)
 * @param setTheme Method to update the theme (`false` for dark and `true` for white)
 */
export async function switchTheme(
    val: boolean | undefined,
    setTheme: React.Dispatch<React.SetStateAction<boolean | null>>
): Promise<void> {
    setTheme(val as React.SetStateAction<boolean | null>);
    await Storage.setItem({
        key: "light",
        value: val
    });
}