"use client";

import { SurveyState } from "@/utils/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useSurveyStore = create<SurveyState>()(
    persist(
        set => ({
            currentSectionIndex: 0,
            responses: {},

            setResponse: (questionId: string, value: string | string[]) =>
                set(state => ({
                    responses: {
                        ...state.responses,
                        [questionId]: value,
                    },
                })),

            nextSection: () =>
                set(state => ({
                    currentSectionIndex: state.currentSectionIndex + 1,
                })),

            previousSection: () =>
                set(state => ({
                    currentSectionIndex: Math.max(
                        0,
                        state.currentSectionIndex - 1,
                    ),
                })),

            resetSurvey: () =>
                set({
                    currentSectionIndex: 0,
                    responses: {},
                }),
        }),
        {
            name: "survey-storage",
            storage: {
                getItem: name => {
                    const str = sessionStorage.getItem(name);
                    return str ? JSON.parse(str) : null;
                },
                setItem: (name, value) => {
                    sessionStorage.setItem(name, JSON.stringify(value));
                },
                removeItem: name => sessionStorage.removeItem(name),
            },
        },
    ),
);
