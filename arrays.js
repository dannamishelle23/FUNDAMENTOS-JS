const celulares = [
    {
    marca: "Samsung",
    modelo: "Galaxy S23 Ultra",
    precio: 502.25,
    capacidadBateria: "5000 mAh",
    ram: "8GB"
    }, 

    {
        marca: "Xiaomi",
        modelo: "Redmi K80",
        precio: 643.15,
        capacidadBateria: "6550 mAh",
        ram: "8GB",
    },

    {
        marca: "Apple",
        modelo: "iPhone 15 Pro",
        precio: 3500,
        capacidadBateria: "3274 mAh",
        ram: "8 - 16 GB"
    }
]

const celularesMasVendidos = celulares.map((u) => {
    return {
        marca: u.marca.toUpperCase(),
        modelo: u.modelo.toUpperCase(),
        precio: u.precio
    }
})

console.log("Top celulares más vendidos: ", celularesMasVendidos)
