import React from 'react';
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from '@testing-library/react';
import UserLogin from '../UserLogin.page';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import ChatRoom from '../ChatRoom';

describe("Login", () => {

    test("Render Input Field", async () => {
            render(
            <MemoryRouter>
               <UserLogin/>
            </MemoryRouter>);
        const inputEl =  screen.queryByTestId("username-field")
        expect(inputEl).toBeInTheDocument();
    })

    test("Pass Valid Data In The Input Field", async () => {
            render(
            <MemoryRouter>
               <UserLogin/>
            </MemoryRouter>);
        const inputEl =  screen.getByTestId("username-field");
        userEvent.type(inputEl, "User1");
        expect(inputEl).toHaveValue("User1");
    });

    test("Pass Invalid Data in the Input Field", async () => {
        const handleSubmit = jest.fn();
        render(
            <MemoryRouter>
               <UserLogin/>
            </MemoryRouter>);
            const inputEl = await screen.getByRole("textbox");
            const buttonEl =  await screen.getByTestId("username-button");
            userEvent.type(inputEl," ");
            expect(inputEl).toHaveValue(" ");
            expect(handleSubmit).not.toHaveBeenCalled();

    });

    test("Enter Username and Click Login Button", async () => {
        const handleSubmit = jest.fn();
        render(
            <MemoryRouter>
               <UserLogin/>
               <ChatRoom/>
            </MemoryRouter>);
            const inputEl = await screen.getByTestId("username-field");
            const buttonEl =  await screen.getByTestId("username-button");

            userEvent.type(inputEl,"User1");
            expect(inputEl).toHaveValue("User1");

            expect(handleSubmit).not.toHaveBeenCalled();
            
            userEvent.click(buttonEl);
            expect(screen.getByText("Hello,User1")).toBeInTheDocument();


    });
    
})