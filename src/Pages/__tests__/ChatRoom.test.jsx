import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
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
});
