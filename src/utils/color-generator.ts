export function generateDarkBackground(identifier: string): string {
    // Step 1: Hash the identifier to generate a consistent value
    const hash = hashString(identifier);

    // Step 2: Map the hash to a hue (0–360 degrees)
    const hue = hash % 360;

    // Step 3: Set fixed saturation and lightness
    const saturation = 70; // 70% saturation for vibrancy
    const lightness = 30; // 30% lightness for a dark background

    // Step 4: Convert HSL to RGB
    const rgb = hslToRgb(hue, saturation / 100, lightness / 100);

    // Step 5: Convert RGB to Hex
    return rgbToHex(rgb);
}

// Utility function: Hash a string into a numeric value
function hashString(input: string): number {
    let hash = 0;
    for (let i = 0; i < input.length; i++) {
        hash = (hash * 31 + input.charCodeAt(i)) % Number.MAX_SAFE_INTEGER;
    }
    return Math.abs(hash);
}

// Utility function: Convert HSL to RGB
function hslToRgb(h: number, s: number, l: number): [number, number, number] {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;

    let r = 0,
        g = 0,
        b = 0;

    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        g = 0;
        b = x;
    }

    // Convert to [0-255] range and add m to normalize
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    return [r, g, b];
}

// Utility function: Convert RGB to Hex
function rgbToHex([r, g, b]: [number, number, number]): string {
    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
