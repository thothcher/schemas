# Angular Flow Lab

A static web app demo that teaches Angular flow concepts using a draggable block-based interface. Users can build and run simplified Angular data flows with blocks representing backend services, HTTP methods, Angular components, routing, and more.

## Project Structure

- `index.html` - Main HTML page and application shell.
- `styles.css` - App styling for layout, navigation, workspace, and inspector.
- `app.js` - JavaScript logic for the interactive drag-and-drop flow editor, language switching, mission/hint system, and flow validation.
- `imgs/` - Image assets used by the UI (logo, icons, etc.).

## Features

- Block library for learning Angular architecture concepts.
- Code samples and explanations follow current **Angular 22** practice: standalone components, `inject()`, signals (`signal`, `computed`, `input()`, `toSignal`), resources (`rxResource` / `httpResource`), built-in control flow (`@if` / `@for`), Signal Forms, functional guards/interceptors and lazy `loadComponent` routes. Components are OnPush by default in v22, and `HttpClient` uses Fetch by default.
- Drag-and-drop canvas with nodes and connections.
- Reference schemas (the **Examples** button) open as read-only previews: blocks can be dragged to rearrange them, and **Unlock to edit** makes them fully editable.
- Multi-language UI support: English and Georgian.
- Run, reset, and answer-check controls.
- Interactive inspector with block details and code examples.
- Preview overlay to simulate browser/web output.

## How to Use

1. Open `index.html` in a web browser.
2. Drag blocks from the left library onto the canvas.
3. Connect blocks to build a linear Angular flow.
4. Use `Run Flow` to simulate the flow.
5. Use `Check Answer` to verify the flow structure.
6. Use `Reset` to clear the canvas.

## Notes

- This is a static front-end demo and does not require a server.
- If you need local testing, open `index.html` directly or serve the folder with a simple static server.

## License

Use and modify freely for learning and demo purposes.