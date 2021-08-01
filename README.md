## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Dependencies

The app uses the follow dependencies:

- Redux: for handling the application global state. This provides to the application the possibility to render the characters list in an asynchronous way when pushing 'Load more' or 'Back' buttons.
- Redux-Sagas: as a middleware of Redux.
- Moment.js: provides date handling for calculating films released years.
