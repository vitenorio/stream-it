import React from 'react'
import Stepper from 'react-stepper-horizontal'

export const ProgressBar = (props) => {

    const style = {
        activeColor: '#A66660',
        completeColor: '#A66660',
        circleFontSize: 0,
        titleFontSize: 0,
        size: 12,
    }

    return (
        <Stepper steps={props.steps} activeStep={props.activeStep} {...style} />
    )
}