import React from 'react'
import Display from './Display'
import { render } from 'react-testing-library'

// Test away!

describe('<Display />', () => {

    describe('lockedClass', () => {

        it('should have a class of green-led if locked is true', () => {

            let locked = true

            const { container } = render(<Display locked={locked} />),
                classes = container.getElementsByClassName('led'),
                lockedClass = classes[1]

            expect(lockedClass.classList.contains('green-led')).toBe(true)
        });

        it('should have a class of red-led if locked is false', () => {

            let locked = false

            const { container } = render(<Display locked={locked} />),
                classes = container.getElementsByClassName('led'),
                lockedClass = classes[1]

            expect(lockedClass.classList.contains('green-led')).toBe(true)
        });

    })



    describe('closedClass', () => {

        it('should have a class of green-led if closed is false', () => {

            let closed = false

            const { container } = render(<Display closed={closed} />),
                classes = container.getElementsByClassName('led'),
                closedClass = classes[1]

            expect(closedClass.classList.contains('green-led')).toBe(true)
        });

        it('should have a class of red-led if closed is true', () => {

            let closed = true

            const { container } = render(<Display closed={closed} />),
                classes = container.getElementsByClassName('led'),
                closedClass = classes[1]

            expect(closedClass.classList.contains('red-led')).toBe(true)
        });
    });

});
