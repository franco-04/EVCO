# Node.js CI/CD en Google Cloud Run 🚀

Práctica **Complementaria** usando:
- **Node.js + Express**
- **Jest** para pruebas automáticas
- **Docker** para contenedores
- **GitHub Actions** para pipeline de CI/CD
- **Google Cloud Run** como servicio gestionado
- **Google Firestore** como base de datos (contador de visitas)

---

## 📌 Endpoints de la API

- `/` → Responde un JSON de bienvenida.
  ```json
  { "message": "Hello from Node.js CI/CD on Cloud Run" }
- `/health` → Health check sencillo.
  ```json
  ok
- `/hits` → Incrementa un contador en Firestore y devuelve el valor actualizado.
  ```json
  { "count": 5 }
- `/hits/value` → Devuelve el contador sin incrementarlo.
  ```json
  { "count": 5 }

## 🌐 Despliegue en producción

Servicio en **Google Cloud Run**:  
**https://node-cicd-service-lzblzgm45q-uc.a.run.app**
