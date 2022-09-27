import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen, rerender } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ChatRoom from "../ChatRoom";
import { MemoryRouter } from "react-router-dom";

describe("Chatroom", () => {
  test("Render Card Header", () => {
    render(
      <MemoryRouter>
        <ChatRoom />
      </MemoryRouter>
    );
    expect(screen.getByText("Hello,")).toBeInTheDocument();
  });

  test("Message Is Sent From The User", () => {
    const handleSubmit = jest.fn();
    const {rerender} = render(
      <MemoryRouter>
        <ChatRoom />
      </MemoryRouter>
    );
    const inputEl = screen.getByTestId("text-message");
    const sendButtonEl = screen.getByTestId("text-message-button");
    userEvent.type(inputEl, "Hi");
    expect(screen.getByText("Hi")).toBeInTheDocument();
    userEvent.click(sendButtonEl);
    render(
      <MemoryRouter>
        <ChatRoom />
      </MemoryRouter>
    );
    expect(screen.getByText("You")).toBeInTheDocument();
    // expect(handleSubmit.mockReturnValue).toHaveBeenCalled();
  })
});
