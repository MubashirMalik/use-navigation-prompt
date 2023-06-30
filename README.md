# React Use Navigation Prompt

[![npm version](https://badge.fury.io/js/use-navigation-prompt.svg)](https://badge.fury.io/js/use-navigation-prompt)

A React Hook for blocking page navigation and displaying a prompt based on a condition.

## Installation

Install the package from npm:

```bash
npm install use-navigation-prompt
```

## Usage

```jsx
import { useState } from 'react';
import useNavigationPrompt from 'use-navigation-prompt';

function App() {
    const [isNavigationBlocked, setIsNavigationBlocked] = useState(false);
    useNavigationPrompt(isNavigationBlocked);

    return (
        <div>
            Navigation is: { !isNavigationBlocked ? "not" : "" } Blocked
            <button onClick={() => setIsNavigationBlocked(prevIsNavigationBlocked => !prevIsNavigationBlocked)}>
                Toggle
            </button>
        </div>
    );
}

export default App;
```

## Explanation

The `useNavigationPrompt` hook can be used to block page navigation and display a prompt when a specific condition is met. The hook takes a single parameter, a boolean value indicating whether the navigation should be blocked or not.

In the example above, we initialize the `isNavigationBlocked` state variable to `false` using the `useState` hook. We then pass this state variable to the `useNavigationPrompt` hook. When the state value changes to `true`, the hook will block the page navigation and display a prompt asking the user to confirm their intent to leave the page.

The prompt will be displayed by the browser and is customizable based on the user agent. The user can choose to proceed with the navigation or cancel it.

The example also includes a button that toggles the `isNavigationBlocked` state, allowing you to simulate enabling or disabling the navigation prompt.

## License

This project is licensed under the [MIT License](LICENSE).
