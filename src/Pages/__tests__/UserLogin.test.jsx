import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import UserLogin from '../UserLogin.page';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

describe("Login", () => {

    test("Render Input Field", async () => {
            render(
            <MemoryRouter>
               <UserLogin/>
            </MemoryRouter>);
        const inputEl = await screen.getByTestId("username");
        expect(inputEl).toBeInTheDocument();
    })

    test("Pass Valid Data In The Input Field", async () => {
            render(
            <MemoryRouter>
               <UserLogin/>
            </MemoryRouter>);
        const inputEl = await screen.getByTestId("username");
        userEvent.type(inputEl, "User1");
        expect(screen.getByTestId("username")).toHaveValue("User1");
    });
})