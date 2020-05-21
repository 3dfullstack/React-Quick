import React, { useState, useEffect, useRef, useMemo, useLayoutEffect } from 'react';

export const useCustomHook = (number) => {
    
    alert("useEffect")

    useEffect (() => {
        console.log("useEffect() from custom Hook.")
        return () => {
            console.log("Return From Hook.")
        }
    }, [])

    alert("After useEffect")
    alert("useLayoutEffect")

    useLayoutEffect (() => {
        console.log("useEffect() from custom Hook.")
        return () => {
            console.log("Return From Hook.")
        }
    }, [])
    
    alert("After useLayoutEffect")

    const memoValue = async () => {
        let arg = 0;
        for(var i = 0; i < number; i++) {
            arg = i * i
        }
        return arg
    }

    const execv = async () => {
        return await memoValue()
    }

    execv().then(value => console.log(value))
}