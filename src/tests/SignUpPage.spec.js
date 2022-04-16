import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpPage from "../pages/SignUpPage";
import axios from "axios";

// SIGN UP PAGE TESTS
describe("Sign Up Page:", () => {

    // LAYOUT
    describe("Layout:", () => {

        it("1) has header", () => {
            render(<SignUpPage/>);
            const header = screen.queryByRole("heading", {name: "Sign Up"});
            expect(header).toBeInTheDocument();
        })

        it("2) has username input", () => {
            render(<SignUpPage/>);
            const input = screen.getByPlaceholderText("username");
            expect(input).toBeInTheDocument();
        })

        it("3) has email input", () => {
            render(<SignUpPage/>);
            // const {container} = render(<SignUpPage/>);
            // let input = container.querySelectorAll("input");
            // expect(input.length).toBe(2);

            const input = screen.getByPlaceholderText("email");
            expect(input).toBeInTheDocument();
        })

        it("4) has email input label", () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText("Email");
            expect(input).toBeInTheDocument();
        })

        it("5) has password input label", () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText("Password");
            expect(input).toBeInTheDocument();
        })

        it("6) has password type for password input", () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText("Password");
            expect(input.type).toBe("password");
        })

        it("7) has confirm password input label", () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText("Confirm Password");
            expect(input).toBeInTheDocument();
        })

        it("8) has confirm password type for password input", () => {
            render(<SignUpPage/>);
            const input = screen.getByLabelText("Confirm Password");
            expect(input.type).toBe("password");
        })

        it("9) has SignUp button", () => {
            render(<SignUpPage/>);
            const button = screen.queryByRole("button", {name: "Sign Up"});
            expect(button).toBeInTheDocument();
        })

        it("10) disabled SignUp button initially", () => {
            render(<SignUpPage/>);
            const button = screen.queryByRole("button", {name: "Sign Up"});
            expect(button).toBeDisabled();
        })

    })

    // INTERACTIONS
    describe("Interactions", () => {

        it("11) enables the button when password + confirm password fields have the same values", () => {
            render(<SignUpPage/>)
            const button = screen.queryByRole("button", {name: "Sign Up"});
            const passwordInput = screen.getByLabelText("Password");
            const passwordConfirmInput = screen.getByLabelText("Confirm Password");

            userEvent.type(passwordInput, "44555");
            userEvent.type(passwordConfirmInput, "44555");
            expect(button).toBeEnabled();
        })


        it("12) sends username + email + password to backend on Submit button clicked", () => {
            render(<SignUpPage/>)

            const usernameInput = screen.getByPlaceholderText("username");
            const emailInput = screen.getByPlaceholderText("email");
            const passwordInput = screen.getByLabelText("Password");
            const passwordConfirmInput = screen.getByLabelText("Confirm Password");
            const button = screen.queryByRole("button", {name: "Sign Up"});

            userEvent.type(usernameInput, "tom");
            userEvent.type(emailInput, "tom@gmail.dom");
            userEvent.type(passwordInput, "Axxx!55355");
            userEvent.type(passwordConfirmInput, "Axxx!55355");

            const mockFn = jest.fn();
            axios.post = mockFn;

            userEvent.click(button);

            // axios.post(url[0], body[1])
            const firstCallOfMockFunction = mockFn.mock.calls[0];
            const body = firstCallOfMockFunction[1];

            expect(body).toEqual(
                {
                    username: "tom",
                    email: "tom@gmail.dom",
                    password: "Axxx!55355",
                }
            )

        })


    })
})


