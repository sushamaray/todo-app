# To-Do List

A polished Next.js task app with local persistence, urgency-aware sorting, editable due dates, and a responsive dashboard layout for both mobile and desktop.

## Highlights

- Add, edit, complete, and delete tasks with browser-based persistence via `localStorage`
- Filter tasks by `all`, `completed`, and `pending`
- Smart task ordering that keeps overdue and dated tasks near the top
- Theme switcher with `light`, `dark`, and `system` modes
- Flexible due date flow: starts as `dd/mm/yyyy`, auto-fills today on activation, and stays editable
- Responsive two-panel layout that adapts cleanly across phones, tablets, and desktop screens
- Typography powered by `Space Grotesk`, `Lexend`, and `Alef`

## Tech Stack

- Next.js 16
- React 19
- Tailwind CSS 4
- `next/font`

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project Structure

```text
src/app/
  components/TaskItem.jsx
  globals.css
  layout.js
  page.js
```

## Behavior Notes

- Tasks are saved per browser/device.
- When the due date field is first activated, it fills with the current local date automatically.
- Users can still replace that auto-filled date with any other date they want.
- Theme preference is also saved locally.

## Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Future Upgrade Ideas

- Drag-and-drop task ordering
- Categories or priority tags
- Import/export for backups
- Search and quick keyboard shortcuts
