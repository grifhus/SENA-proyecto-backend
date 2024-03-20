// Importar y configurar dotenv para cargar variables de entorno
import dotenv from "dotenv"
dotenv.config()
// Importar el framework Express
import express from "express"
import authRoutes from "./routes/authRoutes"
import userRoutes from "./routes/userRoutes"

// Crear una instancia de la aplicación Express
const app = express()

// Configurar la aplicación Express para analizar solicitudes JSON
app.use(express.json())

// Rutas
// Aquí normalmente definirías las rutas de tu aplicación para manejar diferentes endpoints
app.use("/auth", authRoutes)
app.use("/users", userRoutes)
// Middleware de autenticación
// Aquí podrías definir middleware para autenticar las solicitudes

// Middleware de usuario
// Aquí podrías definir middleware para manejar operaciones de usuario, como registro, inicio de sesión, etc.

// Mensaje de consola para indicar que el servidor está en funcionamiento
console.log("Esto está siendo ejecutado")

// Exportar la aplicación Express para que pueda ser utilizada en otros archivos
export default app
