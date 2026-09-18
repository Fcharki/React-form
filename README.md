# React Form

A React form application that lets users submit student/trainee data and view it instantly in a data table. All entries are persisted in the browser's `localStorage`, so data survives page reloads.

## Features

- **Student registration form** with fields for name, email, birth date, field of study (filière), level (niveau) and training status (état de formation)
- **Live data table** — new entries appear immediately after submission, without a page reload
- **Edit and delete rows** from the table
- **Clear storage** button to reset the saved data
- **LocalStorage persistence** — data is centered in the `Parent` component, which owns a single source of truth and syncs it to `localStorage`

## Tech Stack

- [React](https://react.dev/) 18 with hooks (`useState`, `useEffect`)
- [Vite](https://vitejs.dev/) for development and builds
- [Bootstrap](https://getbootstrap.com/) via CDN for styling
- PropTypes for runtime prop validation

## Project Structure

```
src/
├── main.jsx            # React entry point (renders <App />)
├── App.jsx             # Root component
├── App.css
└── components/
    ├── Parent.jsx      # Owns formData state, syncs it to localStorage
    ├── Form.jsx        # Registration form, async submit handler
    └── Table.jsx       # Displays rows, supports edit/delete/clear
```

## How It Works

- `Parent.jsx` holds the `formData` array in state. It initializes it from `localStorage` and writes the array back to `localStorage` (key `formData`) whenever it changes.
- `Form.jsx` receives `setFormData`. On submit, an **async** handler saves the entry (to `localStorage` and shared state) and resets the form — no page reload, so the table updates instantly.
- `Table.jsx` receives `formData` and `setFormData` and only renders state changes; editing, deleting and clearing are handled by updating the shared state.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Run the dev server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run dev`      | Start the Vite dev server                |
| `npm run build`    | Build the app for production             |
| `npm run preview`  | Preview the production build locally     |
| `npm run lint`     | Run ESLint with zero-warning policy      |
| `npm run deploy`   | Build and deploy to GitHub Pages         |

## Deployment

The app is configured for GitHub Pages via `gh-pages`. The homepage URL is set in `package.json`:

```bash
npm run deploy
```