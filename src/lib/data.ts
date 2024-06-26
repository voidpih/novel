import { FetchNovel, FetchNovels, FetchCountryCode } from "@/types/data"

const API = `${process.env.NEXT_PUBLIC_API_URL}/api`
const token = `Bearer ${process.env.API_TOKEN_NOVEL}`

export async function fetchNovels(): Promise<FetchNovels> {
    const response = await fetch(`${API}/listNovel?htmlToText=0`, {
        headers: {
            Authorization: token,
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch novels')
    }
    return response.json()
}

export async function fetchNovel(id: number): Promise<FetchNovel> {
    const response = await fetch(`${API}/novel/${id}?htmlToText=0`, {
        headers: {
            Authorization: token,
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch novel')
    }
    return response.json()
}

export async function fetchCoutryCode(): Promise<FetchCountryCode> {
    const response = await fetch(`${API}/countryCode`, {
        headers: {
            Authorization: token,
        }
    })

    if (!response.ok) {
        throw new Error('Failed to fetch country code')
    }
    return response.json()
}
