import axios from "axios";

export interface Ben10 {
    omnitrix: {
        id: number;
        name: string;
        image: string;
    }[];
}

export interface BrawlStars {
    brawlers: {
        id: number;
        name: string;
        image: string;
        gadget: [string, string | null];
        starpower: [string, string | null];
        category: string;
        pins: {
            image: string;
        }[];
        sprays:
            | {
                  image: string;
              }[]
            | null;
        profile_icon: { image: string }[];
    }[];
    players: {
        pins: {
            image: string;
        }[];
        sprays: {
            image: string;
        }[];
        profile_icons: {
            image: string;
        }[];
    };
}

export interface GenshinImpact {
    character: {
        id: number;
        name: string;
        image: string;
        element: string;
        weapon: string;
        special_dish: string | null;
        sex: "Male" | "Female";
        birthday: string;
        constellation: string;
        nation: string | null;
    }[];
    elements: {
        id: number;
        name: string;
        image: string;
        archon: string;
        status_applies: string | null;
    }[];
}

export interface JAK {
    hobby: [
        {
            id: number;
            value: string;
            games: {
                id: number;
                platform: string;
                value: string;
                description: string;
                imageURL: string;
                link: string;
            }[];
        },
        {
            id: number;
            value: string;
            languages: {
                id: number;
                value: string;
                website: string;
                imageURL: string;
            }[];
            frameworks: {
                id: number;
                value: string;
                website: string;
                languages: string[];
                imageURL: string;
            }[];
        },
        {
            id: number;
            value: string;
            instruments: {
                id: number;
                value: string;
                imageURL: string;
            }[];
        }
    ];
    games: {
        id: number;
        platform: string;
        value: string;
        description: string;
        imageURL: string;
        link: string;
    }[];
    pictures: {
        id: number;
        name: string;
        height: string;
        width: string;
        image: string;
    }[];
    fav_food: {
        id: number;
        value: string;
        imageURL: string;
        ingredients: string[];
    }[];
    social_medias: {
        id: number;
        value: string;
        imageURL: string;
        link: string;
        username: string;
    }[];
}

export interface Miraculous {
    kwamis: {
        id: number;
        name: string;
        image: string;
        owner: string[];
        holder: string;
        miraculous: string;
        power: string;
        magical_words: string | null;
    }[];
    holders: {
        id: number;
        name: string;
        image: string;
        real_name: string;
        kwami: string[];
        magical_words: string;
        main_power: string;
    }[];
    akumatized: {
        id: number;
        name: string;
        image: string;
        victim: string;
        goals: string[];
        quote: string | null;
        power_and_abilities: string[];
    }[];
    amokatized: {
        id: number;
        name: string;
        image: string;
        serve: string;
        power_and_ability: string[] | null[];
    }[];
}

export interface MughalEmpire {
    description: string;
    kings: {
        id: number;
        name: string;
        givenName: string;
        image: string;
        description: string;
        reigned: string;
        wives: {
            id: number;
            name: string;
            born: string | null;
            died: string | null;
            image: string | null;
            description: string;
        }[];
    }[];
}

export class api {
    rapidAPIKey: string;
    baseURL = "https://jak_api.p.rapidapi.com";

    constructor(rapidAPIKey: string) {
        this.rapidAPIKey = rapidAPIKey;
    }

    async getJAK(): Promise<JAK> {
        const response = await axios.get(`${this.baseURL}/jak`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getBrawlStars(): Promise<BrawlStars> {
        const response = await axios.get(`${this.baseURL}/brawlStars`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getBen10(): Promise<Ben10> {
        const response = await axios.get(`${this.baseURL}/ben10`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getMiraculous(): Promise<Miraculous> {
        const response = await axios.get(`${this.baseURL}/miraculous`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getGenshinImpact(): Promise<GenshinImpact> {
        const response = await axios.get(`${this.baseURL}/genshinImpact`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getMughalEmpire(): Promise<MughalEmpire> {
        const response = await axios.get(`${this.baseURL}/mughalEmpire`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }

    async getAlexisResponse(): Promise<string> {
        const response = await axios.get(`${this.baseURL}/ai`, {
            headers: {
                "X-RapidAPI-Host": "jak_api.p.rapidapi.com",
                "X-RapidAPI-Key": this.rapidAPIKey,
            },
        });

        return response.data;
    }
}
