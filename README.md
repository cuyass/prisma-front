# Prisma Front

**Prisma Front** és el frontend d’una plataforma educativa sobre ciberseguretat i diversitat, dissenyada per ser accessible i modular. Està construït amb **React**, **Tailwind CSS**, i **Vite**, i es connecta amb un backend Spring Boot a través d'una API RESTful.

> Backend: [https://github.com/cuyass/prismaback](https://github.com/cuyass/prismaback)

---

## 🛠 Tecnologies principals

- React (JSX) v.19.1.0
- React Router DOM v.7.6.0
- Tailwind CSS v.4.1.6
- DaisyUI v.5.0.35
- Vite v.6.3.5
- Axios (per a crides API) v.1.9
- [Markdown Editor for React](https://uiwjs.github.io/react-md-editor/) (per pujada d’imatges) v.4.0.6
- PostgreSQL (a través del backend) v.42.7.5
- Icones de Lucide-React v.0.511.0

---

## Estructura del projecte

```
src/
├── assets/
├── components/
│ ├── buttons/ 
│ ├── pages/ 
│ ├── sections/
│ └── router/ 
├── App.jsx 
├── main.jsx 
├── index.css 
```

---

## Pàgines i funcionalitats

- `Home.jsx`: Pàgina d’inici amb Hero, ítems destacats i seccions informatives.
- `Learn.jsx`: Accés a lliçons disponibles.
- `LessonView.jsx`: Visualització d’una lliçó individual amb format Markdown.
- `LessonQuiz.jsx`: Quiz interactiu per lliçó (amb preguntes i respostes).
- `Register.jsx`: Registre d’usuàries.
- `Directory.jsx`: Directori de recursos relacionats amb ciberseguretat i diversitat.
- `FAQ.jsx`: Preguntes freqüents per a situacions crítiques (privacitat, assetjament, etc.).
- `AdminDashboard.jsx`: Gestió de lliçons (CRUD) per administració.

---

> [!WARNING]  
> PRISMA és un projecte que està en la primera fase de desenvolupament i li manca la seguretat bàsica.
> 22/05/2025 -> no hi ha rols, la ruta /admindashboard està desprotegida, els arxius JSON estan desprotegits, manca de login, el registre de correu no està encriptat, el component Markdown Editor no està sanititzat, el codi no té tests unitaris.

## Configuració i execució

1. **Clona el repositori**
```bash
git clone https://github.com/cuyass/prisma-front.git
cd prisma-front
```
2. **Instal·la les dependències**
```bash
npm install
```
3. **Executa el projecte**
```bash
npm run dev
```
Per defecte, estarà disponible a http://localhost:5173

## Connexió amb el backend
El frontend es comunica amb l’API exposada a:

```bash
http://localhost:8080/api/v1
```
> El backend té CORS habilitat per a aquest domini.

## Testing i funcionalitat

Lliçons es renderitzen via MarkdownLesson.jsx

El Quiz es gestiona, de moment, via Postman

Els components Alert, Drawer, Navbar, Pagination, etc., milloren l’experiència d’usuari

Es mostra una alerta personalitzada amb variant i duració per a missatges d'èxit o error

## Estils i UX

Utilitza Tailwind CSS i DaisyUI per a disseny responsive i accessible

Missatges d'alerta amb botó de tancar i temporitzador opcional (Alert.jsx)

Navegació clara amb Navbar.jsx i rutes controlades via Router.jsx

## Crèdits

Desenvolupat per Marion

Contacte: https://www.linkedin.com/in/mariona-cuyas/
