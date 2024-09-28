import { Item, Playlist } from "@/types/types";

import dotenv from "dotenv";

dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
// Functions
const getToken = async (): Promise<string> => {
	const url = "https://accounts.spotify.com/api/token";

	const body = new URLSearchParams({
		grant_type: "client_credentials",
	});

	const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
		"base64"
	);

	const response = await fetch(url, {
		method: "POST",
		headers: {
			Authorization: `Basic ${authString}`,
			"Content-Type": "application/x-www-form-urlencoded",
		},
		body: body.toString(),
		cache: "no-cache",
	});

	const data = await response.json();
	return data.access_token; // Return the access token
};
//
const getMyPlaylists = async (): Promise<Item[]> => {
	const token = await getToken(); // Await the token retrieval
	const url =
		"https://api.spotify.com/v1/users/3157qxpgggxxkcgfhn4zj2cppanm/playlists";

	const result = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: "no-cache",
	});

	if (!result.ok) {
		throw new Error("Failed to fetch playlists: " + result.statusText);
	}

	const data = await result.json();
	return data.items; // Return the list of playlists
};
//
const getPlaylistItems = async (playlistId: string) => {
	const token = await getToken();
	const url = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`;
	const result = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: "no-cache",
	});
	if (!result.ok) {
		throw new Error("Failed to fetch playlists: " + result.statusText);
	}
	const data = await result.json();
	return data.items;
};
//
const getPlaylistInfo = async (playlistId: string) => {
	const token = await getToken();
	const url = `https://api.spotify.com/v1/playlists/${playlistId}`;
	const result = await fetch(url, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
		cache: "no-cache",
	});
	if (!result.ok) {
		throw new Error("Failed to fetch playlists: " + result.statusText);
	}
	const data = await result.json();
	return data;
};
export { getToken, getMyPlaylists, getPlaylistItems, getPlaylistInfo };
