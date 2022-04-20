import React, { ComponentType, Fragment } from 'react'
import { render } from '@testing-library/react'

/**
 * A wrapper built around @testing-library/react to make the testing of react components easier.
 * 
 * Receives a react component, a map with props for the component (optional), and a react component as a wrapper (also optionally), 
 * the wrapper is usefull when you need to test a component that depends on a HOC or a context.
 */

function setup<T>(Component: ComponentType<T>, props = {} as T, Wrapper: ComponentType<any> = Fragment) {
  return render(
    <Wrapper>
      <Component {...(props as T)} />
    </Wrapper>
  )
}

export default setup
