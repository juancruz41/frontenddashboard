const API_BASE_URL = "https://api.coincap.io/v2";

export const apiEndpoints = {
    bitcoinPrice: `${API_BASE_URL}/assets/bitcoin`,
    bitcoinHistory: `${API_BASE_URL}/assets/bitcoin/history`,
};

export default apiEndpoints;
