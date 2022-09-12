const particlesConfig = {
    particles: {
        number: {
            value: 99,
            density: { enable: true, value_area: 710.2328774690454 }
        },
        color: { value: '#ffffff' },
        shape: {
            type: 'circle',
            stroke: { width: 0, color: '' },
            polygon: { nb_sides: 7 }
        },
        opacity: {
            value: 0.2,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 10,
                size_min: 1,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 0.5,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            bounce: true,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: true, mode: 'repulse' },
            resize: true
        },
        modes: {
            grab: {
                distance: 133.99274002972194,
                line_linked: { opacity: 0.7 }
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
            },
            repulse: { distance: 150, duration: 0.3 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
}

export default particlesConfig
