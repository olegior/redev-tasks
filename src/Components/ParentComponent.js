import React from 'react'
import { Counter } from './Counter'
import { ChildComponent } from './ChildComponent'
import { SiblingComponent } from './SiblingComponent'

export const ParentComponent = () => {
    return (
        <div className='component'>
            <Counter buttons={
                [
                    { title: 'увеличить', action: 1 },
                    { title: 'сбросить', action: 0 },
                    { title: 'случайное значение', action: 2 },
                    { title: 'уменьшить', action: -1 },
                ]
            } >
                <ChildComponent name={'Олег'} />
            </Counter>
            <SiblingComponent />
        </div>
    )
}
