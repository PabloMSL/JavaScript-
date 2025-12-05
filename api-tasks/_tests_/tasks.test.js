const request = require('supertest');
const app = require('../app'); // Importar la aplicación Express
let testServer; // Variable para la instancia del servidor de pruebas
let createdTaskId; // Para almacenar el ID de una tarea creada y usarlo en otros tests

// Esto se ejecuta una vez antes de todos los tests
beforeAll((done) => {
    // Iniciar el servidor de pruebas en un puerto diferente para evitar conflictos
    testServer = app.listen(4000, () => {
        console.log('Servidor de pruebas iniciado en el puerto 4000');
        // Opcional: Reiniciar la "base de datos" (el array de tareas en memoria)
        // Esto es crucial para asegurar que cada corrida de tests empiece con un estado limpio.
        // Dado que estamos usando un array en memoria, necesitamos una forma de resetearlo.
        // Para este ejemplo, simularemos un reset a través de un endpoint o directamente si el arrayes accesible.
        // Para nuestra app actual, simplemente sobrescribimos `tasks` si estuviera expuesto oreiniciamos el módulo.
        // Una forma más robusta sería pasar una copia del array de tareas o un servicio de datosmockeable.
        done();
    });
});
// Esto se ejecuta una vez después de todos los tests
afterAll((done) => {
    // Cerrar el servidor de pruebas para liberar el puerto
    testServer.close(() => {
        console.log('Servidor de pruebas cerrado.');
        done();
    });
});
describe('API de Tareas', () => {
    // Test para GET /api/tasks
    it('debería obtener todas las tareas', async () => {
        const res = await request(app).get('/api/tasks');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
    // Test para POST /api/tasks
    it('debería devolver 400 si los datos de la tarea son inválidos al crear', async () => {
        const invalidTask = { title: 'ab', description: 'desc' }; // Título demasiado corto
        const res = await request(app)
        .post('/api/tasks')
        .send(invalidTask);
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors[0]).toHaveProperty('msg', 'El título debe tener al menos 3 caracteres.');
    });
    // Test para GET /api/tasks/:id
    it('debería obtener una tarea por su ID', async () => {
        const res = await request(app).get(`/api/tasks/${createdTaskId}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id', createdTaskId);
    });
    // Test para PUT /api/tasks/:id
    it('debería devolver 400 si los datos de la tarea son inválidos al actualizar', async () => {
        // Primero, creamos una tarea válida para actualizar
        const validTask = { title: 'Tarea para validar', completed: false };
        const createRes = await request(app).post('/api/tasks').send(validTask);
        const taskId = createRes.body.id;
        const invalidUpdate = { title: 'a', completed: 'no-bool' }; // Título corto y completed no        booleano
        const res = await request(app)
        .put(`/api/tasks/${taskId}`)
        .send(invalidUpdate);
        expect(res.statusCode).toEqual(400);
        expect(res.body).toHaveProperty('errors');
        expect(res.body.errors.length).toBeGreaterThan(0); // Puede haber múltiples errores
        expect(res.body.errors.some(err => err.msg === 'El título debe tener al menos 3caracteres.')).toBeTruthy();
        expect(res.body.errors.some(err => err.msg === 'El campo "completed" debe ser unbooleano.')).toBeTruthy();  
        // Limpiar la tarea creada
        await request(app).delete(`/api/tasks/${taskId}`);
    });
    // Test para DELETE /api/tasks/:id
    it('debería eliminar una tarea', async () => {
        const res = await request(app).delete(`/api/tasks/${createdTaskId}`);
        expect(res.statusCode).toEqual(204); // No Content para eliminación exitosa
        // Verificar que la tarea ya no existe
        const getRes = await request(app).get(`/api/tasks/${createdTaskId}`);
        expect(getRes.statusCode).toEqual(404); // Not Found
    });
    // Test para GET /api/tasks/:id con ID no existente
    it('debería devolver 404 si la tarea no existe', async () => {
        const nonExistentId = 9999;
        const res = await request(app).get(`/api/tasks/${nonExistentId}`);
        expect(res.statusCode).toEqual(404);
    });
});