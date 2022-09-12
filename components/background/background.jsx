import Particles from 'react-tsparticles'
import { loadSlim } from 'tsparticles-slim'
import { useCallback, useMemo } from 'react'
import particlesConfig from './particles-config'

const Background = (props) => {
    const options = useMemo(() => particlesConfig, [])
    const particlesInit = useCallback((engine) => loadSlim(engine), [])
    return <Particles id={props.id} init={particlesInit} options={options} />
}

export default Background
