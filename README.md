# 🐔 Chicken Shooter - Caza Gallinas

Juego de disparos a gallinas desarrollado con Phaser 3.

## 🎮 Cómo Jugar

1. **Objetivo**: Dispara a las gallinas que aparecen en pantalla antes de que escapen
2. **Controles**: 
   - Mueve el ratón para apuntar
   - Clic izquierdo para disparar
3. **Sistema de Vidas**: Tienes 3 vidas (❤️). Pierdes una vida cada vez que una gallina escapa
4. **Puntuación**: Cada gallina eliminada te da entre 10-20 puntos aleatorios
5. **Dificultad**: El juego se vuelve más difícil con el tiempo (las gallinas aparecen más rápido)

## 🚀 Ejecutar el Juego

### Opción 1: Instalar dependencias y ejecutar
```bash
npm install
npm run dev
```

### Opción 2: Usar http-server directamente
```bash
npx http-server -p 8000 -o
```

El juego se abrirá automáticamente en tu navegador en `http://localhost:8000`

## 📁 Estructura del Proyecto

```
Gallinas/
├── index.html          # Archivo principal del juego
├── assets/             # Recursos gráficos
│   ├── fondo_granja.png
│   ├── gallina1.png
│   ├── gallina2.png
│   ├── gallina_hit.png
│   ├── escopeta.png
│   ├── mira.png
│   ├── destello_boca.png
│   └── pluma.png
├── package.json
└── README.md
```

## 🎯 Características

- ✅ Sistema de aparición de gallinas aleatorio
- ✅ Física y movimiento fluido
- ✅ Sistema de vidas con feedback visual
- ✅ Efectos de partículas (plumas)
- ✅ Animación de retroceso de escopeta
- ✅ Destello de disparo (muzzle flash)
- ✅ Puntuación flotante
- ✅ Pantalla de Game Over con reinicio
- ✅ Dificultad progresiva

## 🛠️ Tecnologías

- **Phaser 3.80.1** - Motor de juego
- **HTML5 Canvas** - Renderizado
- **JavaScript ES6** - Lógica del juego

## 📝 Notas

⚠️ **Importante**: El juego debe ejecutarse desde un servidor local (no abrir directamente el archivo HTML) para evitar problemas de CORS con la carga de assets.

¡Disfruta cazando gallinas! 🎯🐔
