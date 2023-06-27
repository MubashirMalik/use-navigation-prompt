import React from "react"
import { useEffect } from 'react';
import { handlePrompt  } from './unstableHistory';

const useNavigationPrompt = (showPrompt) => {
    useEffect(() => {
        let unblock
        // Block navigation and register a callback that fires when a navigation attempt is blocked.
        if (showPrompt) {
            unblock = handlePrompt()
        }
        return () => { if (typeof unblock === "function") { unblock() } }
    }, [showPrompt]) // To force useEffect to run again when prop changes.
}

export default useNavigationPrompt