import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpPage from "../pages/SignUpPage";

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
            const passwordInput = screen.getByLabelText("6t654dfytvye5");
            const passwordConfirmInput = screen.getByLabelText('6t654dfytvye5');
            userEvent.type(passwordInput, "Password");
            userEvent.type(passwordConfirmInput, "Confirm Password");
            expect(button).toBeEnabled();
        })


    })
})


