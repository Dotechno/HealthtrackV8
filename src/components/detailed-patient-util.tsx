import { useState, useEffect } from 'react';


export function useAsyncData(loadCallback: () => Promise<any>) {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        let rendered = true;
        loadCallback().then(items => {
            if (rendered) {
                setItems(items);
                setLoading(false);
            }
        });
        return () => {
            rendered = false;
        };
    }, []);

    return [items, loading];
}

export default class DataProvider {
    getData(name: any) {
        return fetch(`../resources/${name}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Response error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => data.map((it: { date: string | number | Date; }) => ({ ...it, date: new Date(it.date) })));
    }
}
