# Repository Guidelines

## Project Structure & Module Organization
The project follows a modular, section-based architecture for a React landing page.
- **src/components/**: Contains individual page sections (e.g., `Hero`, `Security`, `Economy`). Each section resides in its own directory with a corresponding `.jsx` file and a `.scss` style file.
- **src/styles/**: Centralized styling resources.
  - `variables.scss`: Design tokens (colors, typography, breakpoints).
  - `mixins.scss`: Reusable style patterns (containers, cards, buttons).
  - `global.scss`: Base styles and project-wide classes.
- **src/data/**: Static data used across components, such as navigation items.
- **src/assets/**: Static assets like images and SVGs.

## Build, Test, and Development Commands
The project uses Vite as the build tool.
- `npm run dev`: Starts the development server.
- `npm run build`: Generates the production build in the `dist/` folder.
- `npm run preview`: Locally previews the production build.

## Coding Style & Naming Conventions
- **React**: Functional components are preferred. Use standard JSX patterns.
- **Styling**: Sass is used for all styling.
  - **BEM Naming**: Follow the Block-Element-Modifier convention for CSS classes (e.g., `.header__nav`, `.section--accent`).
  - **Sass Modules**: Use `@use` to import variables and mixins from `src/styles`. Avoid `@import` for internal files.
  - **Responsive Design**: Use the predefined breakpoints in `variables.scss` within media queries.
- **Data**: Extract repetitive content or configuration (like navigation links) into `src/data/`.

## Commit & Pull Request Guidelines
Commit messages should be descriptive and typically follow these patterns:
- `feat: <description>` for new features or sections.
- `fix: <description>` for bug fixes.
- `Polish <description>` or `Refine <description>` for visual adjustments and style improvements.
- `Add <description>` for adding new assets or sections.
Changes are generally integrated through Pull Requests.
