export const obtenerColorAleatorio = () => {
    const colores = [
        "#fca5a5", "#93c5fd", "#86efac", "#fde68a", "#c4b5fd", "#f9a8d4",
        "#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa", "#f472b6",
        "#ef4444", "#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#ec4899",
        "#dc2626", "#2563eb", "#059669", "#d97706", "#7c3aed", "#db2777",
        "#111827", "#1f2937", "#374151", "#4b5563", "#6b7280",
        "#e11d48", "#0ea5e9", "#22c55e", "#eab308", "#9333ea"
    ];

    const indiceAleatorio = Math.floor(Math.random() * colores.length);

    return colores[indiceAleatorio];
};
export const cambiarColorFondo = (color) => {
    document.body.style.backgroundColor = color;
    console.log(`El color de fondo cambió a: ${color}`);
};