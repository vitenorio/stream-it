import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import styled from "styled-components"
import { spacingSizes } from '../utils/sizes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    button: {
      margin: theme.spacing(1),
    },
    stepperContainer: {
      
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      marginRight: theme.spacing(4),
    },
  }),
);

const StepperContent = styled.div`
  height: 45%;
  position: relative;
  padding: ${spacingSizes.small}%;
`

export interface FormStepperProps {
  getSteps: () => string[],
  getStepContent: (activeStep: any) => any
}

export const FormStepper: React.FunctionComponent<FormStepperProps> = ({
    getSteps,
    getStepContent
}) => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = React.useState(0)
  const [completed, setCompleted] = React.useState(new Set<number>())
  const [skipped, setSkipped] = React.useState(new Set<number>())
  const steps = getSteps()

  const totalSteps = () => {
    return getSteps().length
  }

  const isStepOptional = (step: number) => {
    return step === 2 || step === 4
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1)
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const skippedSteps = () => {
    return skipped.size
  }

  const completedSteps = () => {
    return completed.size
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps() - skippedSteps()
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed
          // find the first step that has been completed
          steps.findIndex((step, i) => !completed.has(i))
        : activeStep + 1

    setActiveStep(newActiveStep)
  }

  const handleStep = (step: number) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = new Set(completed)
    newCompleted.add(activeStep)
    setCompleted(newCompleted)

    if (completed.size !== totalSteps() - skippedSteps()) {
      handleNext()
    }
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  };

  function isStepComplete(step: number) {
    return completed.has(step)
  }

  return (
  <>
    <StepperContent>{getStepContent(activeStep)}</StepperContent>
    <div className={classes.stepperContainer}>
          <div className={classes.buttonContainer}>
            {isStepOptional(activeStep) && !completed.has(activeStep) && (
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleSkip}
                  className={classes.button}
                >
                  Pular
                </Button>
              )}
          {activeStep !== steps.length &&
               (
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={handleComplete} 
                  className={classes.button}>
                  {completedSteps() === totalSteps() - 1 ? 'Pronto' : 'Próximo'}
                </Button>
              )}
          </div>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {}
          const buttonProps: { optional?: React.ReactNode } = {}
          if (isStepSkipped(index)) {
            stepProps.completed = false
          }
          return (
            <Step key={label} {...stepProps}>
              <StepButton
                onClick={handleStep(index)}
                completed={isStepComplete(index)}
                {...buttonProps}
              />
            </Step>
          )
        })}
      </Stepper>
      </div>
    </>
  )
}
