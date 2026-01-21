const fs = require('fs');
const { createCanvas } = require('canvas');

// Crear carpeta assets si no existe
if (!fs.existsSync('./assets')) {
    fs.mkdirSync('./assets');
}

// ========================================
// 1. MIRA (Crosshair)
// ========================================
function generateCrosshair() {
    const canvas = createCanvas(128, 128);
    const ctx = canvas.getContext('2d');

    const centerX = 64;
    const centerY = 64;
    const radius = 50;

    // Círculo exterior rojo
    ctx.strokeStyle = '#ff0000';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.stroke();

    // Círculo interior
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius - 10, 0, Math.PI * 2);
    ctx.stroke();

    // Cruz central
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(centerX - 20, centerY);
    ctx.lineTo(centerX + 20, centerY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(centerX, centerY - 20);
    ctx.lineTo(centerX, centerY + 20);
    ctx.stroke();

    // Punto central
    ctx.fillStyle = '#ff0000';
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
    ctx.fill();

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./assets/mira.png', buffer);
    console.log('✅ mira.png generado');
}

// ========================================
// 2. DESTELLO DE BOCA (Muzzle Flash)
// ========================================
function generateMuzzleFlash() {
    const canvas = createCanvas(256, 256);
    const ctx = canvas.getContext('2d');

    const centerX = 128;
    const centerY = 128;

    // Resplandor amarillo-naranja
    const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 100);
    gradient.addColorStop(0, 'rgba(255, 255, 200, 1)');
    gradient.addColorStop(0.3, 'rgba(255, 200, 0, 0.9)');
    gradient.addColorStop(0.6, 'rgba(255, 100, 0, 0.6)');
    gradient.addColorStop(1, 'rgba(255, 50, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Estrella de destello
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4;
        const length = i % 2 === 0 ? 80 : 40;
        const x = centerX + Math.cos(angle) * length;
        const y = centerY + Math.sin(angle) * length;
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.closePath();
    ctx.fill();

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./assets/destello_boca.png', buffer);
    console.log('✅ destello_boca.png generado');
}

// ========================================
// 3. PLUMA (Feather)
// ========================================
function generateFeather() {
    const canvas = createCanvas(64, 64);
    const ctx = canvas.getContext('2d');

    const centerX = 32;
    const centerY = 32;

    // Forma de pluma simple
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;

    // Cuerpo de la pluma (elipse)
    ctx.beginPath();
    ctx.ellipse(centerX, centerY, 8, 25, Math.PI / 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    // Línea central
    ctx.strokeStyle = '#999999';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(centerX - 5, centerY + 20);
    ctx.lineTo(centerX + 5, centerY - 20);
    ctx.stroke();

    // Detalles de pluma
    ctx.strokeStyle = '#cccccc';
    ctx.lineWidth = 1;
    for (let i = -15; i < 15; i += 5) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY + i);
        ctx.lineTo(centerX - 6, centerY + i + 3);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(centerX, centerY + i);
        ctx.lineTo(centerX + 6, centerY + i + 3);
        ctx.stroke();
    }

    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('./assets/pluma.png', buffer);
    console.log('✅ pluma.png generado');
}

// Generar todos los assets
try {
    generateCrosshair();
    generateMuzzleFlash();
    generateFeather();
    console.log('\n🎉 ¡Todos los assets generados exitosamente!');
} catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\n⚠️  Instala canvas con: npm install canvas');
}
