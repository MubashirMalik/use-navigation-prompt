import { createBrowserHistory } from "history";

const history = createBrowserHistory()

export const handlePrompt = () => {
    let allowNavigation = false
    // Block navigation and register a callback that fires when a navigation attempt is blocked.
    const funcRef = history.block(tx => { // Navigation was blocked!
        if (
            allowNavigation || 
            // Unblock Navigation! (Use case: Save Button)
            (tx.location.state && tx.location.state.allowNavigation)
            // Let's show a confirmation dialog
            // so the user can decide if they actually want to navigate
            // away and discard changes they've made in the current page.
        ) {
            // Clear history state
            if (!allowNavigation) {
                allowNavigation = true
                history.replace(history.location.pathname, null)
            }
            
            // Unblock the navigation.
            funcRef()

            // Retry the transition.
            tx.retry()
        } else if (window.confirm('You have unsaved changes. Are you sure you want to leave this page?')) { 
            // Show a confirmation dialog if there are unsaved changes.

            // Unblock the navigation.
            funcRef();

            // Retry the transition.
            tx.retry();
        }
    })
    return funcRef
}

export default history