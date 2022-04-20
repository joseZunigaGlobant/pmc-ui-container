import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { createDynamicComponent } from '@bondi-js/utils'

type RouterProps = {
  modules: any[]
}

const NotFound = () => <p>not found</p>

const Router = ({ modules = [] }: RouterProps) => {
  const routes = modules.map(({ url, path, scope, module }, index) => {
    const Component = createDynamicComponent({
      url,
      scope,
      module,
      placeholder: <p>Loading</p>,
    })
    const key = `route-${path}-${index}`
    return <Route path={path} element={<Component />} key={key} />
  })

  return (
    <Routes>
      {routes}
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
