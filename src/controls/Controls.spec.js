import React from 'react'
import Controls from './Controls'
import { render, fireEvent } from 'react-testing-library'

// Test away!


describe('<Controls />', () => {

    describe('Lock/Unlock Gate', () => {

        it('should be disabled when closed is false', () => {

            let state = {
                locked: false,
                closed: false
            }

            const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                buttons = container.getElementsByClassName('toggle-btn'),
                lock = buttons[0]

            expect(lock.disabled).toBe(true)

        });

        it('should be enabled if closed is true', () => {

            let state = {
                locked: false,
                closed: true
            }

            const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                buttons = container.getElementsByClassName('toggle-btn'),
                lock = buttons[0]

            expect(lock.disabled).toBe(false)

        });

        it('should display lock gate when locked is fasle', () => {

            let state = {
                locked: false,
                closed: true
            }

            const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                buttons = container.getElementsByClassName('toggle-btn'),
                lock = buttons[0]

            expect(lock.textContent).toBe('Lock Gate')
        });

        it('should display unlock gate if locked is true', () => {

            let state = {
                locked: true,
                closed: true
            }

            const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                buttons = container.getElementsByClassName('toggle-btn'),
                lock = buttons[0]

            expect(lock.textContent).toBe('Unlock Gate')
        });



        describe('Open/Close Gate', () => {

            it('should be enabled when locked is false', () => {

                let state = {
                    locked: false,
                    closed: false
                }

                const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                    buttons = container.getElementsByClassName('toggle-btn'),
                    open = buttons[1]

                expect(open.disabled).toBe(false)

            });

            it('should be disabled if locked is true', () => {

                let state = {
                    locked: true,
                    closed: true
                }

                const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                    buttons = container.getElementsByClassName('toggle-btn'),
                    open = buttons[1]

                expect(open.disabled).toBe(true)

            });

            it('should display open gate when locked is false', () => {

                let state = {
                    locked: false,
                    closed: true
                }

                const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                    buttons = container.getElementsByClassName('toggle-btn'),
                    open = buttons[1]

                expect(open.textContent).toBe('Open Gate')
            });

            it('should display close gate if closed is false', () => {

                let state = {
                    locked: true,
                    closed: false
                }

                const { container } = render(<Controls locked={state.locked} closed={state.closed} />),
                    buttons = container.getElementsByClassName('toggle-btn'),
                    open = buttons[1]

                expect(open.textContent).toBe('Close Gate')
            });

        });
    });
});
