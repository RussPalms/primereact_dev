import { Component, ComponentProvider } from '@primereact/core/component';
import { mergeProps } from '@primeuix/utils';
import * as React from 'react';
import { useProgressSpinner } from './ProgressSpinner.base';

export const ProgressSpinner = React.memo(
    React.forwardRef((inProps, inRef) => {
        const progressspinner = useProgressSpinner(inProps, inRef);
        const {
            id,
            props,
            ptm,
            ptmi,
            cx,
            // element refs
            elementRef
        } = progressspinner;

        const circleProps = mergeProps(
            {
                className: cx('circle'),
                cx: '50',
                cy: '50',
                r: '20',
                fill: props.fill,
                strokeWidth: props.strokeWidth,
                strokeMiterlimit: '10'
            },
            ptm('circle')
        );

        const spinProps = mergeProps(
            {
                className: cx('spin'),
                viewBox: '25 25 50 50',
                style: sx('spin')
            },
            ptm('spin')
        );

        const rootProps = mergeProps(
            {
                id,
                className: cx('root'),
                role: 'progressbar',
                'aria-busy': true
            },
            ptmi('root')
        );

        return (
            <ComponentProvider pIf={props.pIf} value={progressspinner}>
                <Component as={props.as || 'div'} {...rootProps} ref={elementRef}>
                    <svg {...spinProps}>
                        <circle {...circleProps} />
                    </svg>
                </Component>
            </ComponentProvider>
        );
    })
);

ProgressSpinner.displayName = 'ProgressSpinner';
