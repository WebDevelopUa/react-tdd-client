import '@testing-library/jest-dom'
import {fireEvent, render, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpPage from "../pages/SignUpPage";
// import axios from "axios";
import {rest} from 'msw';
import {setupServer} from "msw/node";

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

        const setup = () => {
            render(<SignUpPage/>);

            const usernameInput = screen.getByPlaceholderText("username");
            const emailInput = screen.getByPlaceholderText("email");
            const passwordInput = screen.getByLabelText("Password");
            const passwordConfirmInput = screen.getByLabelText("Confirm Password");

            userEvent.type(usernameInput, "tom");
            userEvent.type(emailInput, "tom@gmail.com");
            userEvent.type(passwordInput, "Axxx!553551100");
            userEvent.type(passwordConfirmInput, "Axxx!553551100");
        }

        it("11) enables the button when password + confirm password fields have the same values", () => {
            render(<SignUpPage/>)
            const button = screen.queryByRole("button", {name: "Sign Up"});
            const passwordInput = screen.getByLabelText("Password");
            const passwordConfirmInput = screen.getByLabelText("Confirm Password");

            userEvent.type(passwordInput, "44555");
            userEvent.type(passwordConfirmInput, "44555");
            expect(button).toBeEnabled();
        })

        // it("12) sends username + email + password to backend on Submit button clicked with axios", () => {
        //     render(<SignUpPage/>)
        //
        //     const usernameInput = screen.getByPlaceholderText("username");
        //     const emailInput = screen.getByPlaceholderText("email");
        //     const passwordInput = screen.getByLabelText("Password");
        //     const passwordConfirmInput = screen.getByLabelText("Confirm Password");
        //     const button = screen.queryByRole("button", {name: "Sign Up"});
        //
        //     userEvent.type(usernameInput, "tom");
        //     userEvent.type(emailInput, "tom@gmail.dom");
        //     userEvent.type(passwordInput, "Axxx!55355");
        //     userEvent.type(passwordConfirmInput, "Axxx!55355");
        //
        //     const mockFn = jest.fn();
        //     axios.post = mockFn;
        //
        //     userEvent.click(button);
        //
        //     // axios.post(url[0], body[1])
        //     const firstCallOfMockFunction = mockFn.mock.calls[0];
        //     const body = firstCallOfMockFunction[1];
        //
        //     expect(body).toEqual(
        //         {
        //             username: "tom",
        //             email: "tom@gmail.dom",
        //             password: "Axxx!55355",
        //         }
        //     )
        //
        // })

        it("13) sends username + email + password to backend on Submit button clicked with fetch", async () => {

            setup();

            const mockFn = jest.fn();
            window.fetch = mockFn;

            const button = screen.queryByRole("button", {name: "Sign Up"});
            userEvent.click(button);

            // fetch("/api/1.0/users" [0], {method: 'POST', headers: {}, body: JSON.stringify({})} [1]);
            const firstCallOfMockFunction = mockFn.mock.calls[0];
            const body = JSON.parse(firstCallOfMockFunction[1].body);

            expect(body).toEqual(
                {
                    username: "tom",
                    email: "tom@gmail.com",
                    password: "Axxx!553551100",
                }
            )

        })

        it("14) sends username + email + password to backend on Submit button clicked with Mock Service Worker", async () => {
            let server = setupServer(
                // Describe the requests to mock
                rest.post('/api/1.0/users'), (req, res, ctx) => {
                    return res((res) => {
                        return sessionStorage.setItem('res', res);
                    })
                });

            await server.listen();

            render(<SignUpPage/>);

            const usernameInput = screen.getByPlaceholderText("username");
            const emailInput = screen.getByPlaceholderText("email");
            const passwordInput = screen.getByLabelText("Password");
            const passwordConfirmInput = screen.getByLabelText("Confirm Password");

            userEvent.type(usernameInput, "tom");
            userEvent.type(emailInput, "tom110110cc@gmail.com");
            userEvent.type(passwordInput, "Axxx!5535511001cc");
            userEvent.type(passwordConfirmInput, "Axxx!5535511001cc");

            let button = screen.getByRole("button", {name: "Sign Up"});
            userEvent.click(button);
            fireEvent.click(button);
            // expect(button).toBeInTheDocument();

            await new Promise(resolve => setTimeout(resolve, 1500));

            await waitFor(() => {
                expect(sessionStorage.getItem('res')).toEqual(
                    {
                        username: "tom",
                        email: "tomssss@gmail.com",
                        password: "Axxx!55355a"
                    })
            })
        })


    })
})


