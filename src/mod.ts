declare global {
    interface Crypto {
        randomUUID: () => `${string}-${string}-${string}-${string}-${string}`;
    }
}

export {}