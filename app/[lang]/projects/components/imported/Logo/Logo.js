"use client"
import { useEffect, useRef } from 'react'
import styles from './logo.module.css'

export default function Logo() {
    const canvasRef = useRef(null)

    // Creates the canvas logo animation
    useEffect(() => {
        // Initializing the canvas
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')
        let animationId

        // Setting up the canvas size
        canvas.width = 48
        canvas.height = 100

        // Create number array
        const numbers = [0, 1]

        // Setting up the columns
        const fontSize = 10
        const columns = canvas.width / fontSize

        // Setting up the drops
        const drops = []
        for (let i = 0; i < columns; i++) {
            drops[i] = 1
        }

        // Setting up the draw function
        function draw() {
            context.fillStyle = 'rgba(0, 0, 0, .1)'
            context.fillRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < drops.length; i++) {
                const text = numbers[Math.floor(Math.random() * numbers.length)]
                context.fillStyle = '#f00'
                context.fillText(text, i * fontSize, drops[i] * fontSize)
                drops[i]++
                if (drops[i] * fontSize > canvas.height && Math.random() > .95) {
                    drops[i] = 0
                }
            }
            // Loop the animation
            animationId = window.requestAnimationFrame(draw)
        }

        animationId = window.requestAnimationFrame(draw)

        return () => {
            window.cancelAnimationFrame(animationId)
            context.clearRect(50, 0, 48, 100)
        }

    }, [canvasRef])

    return (
        <div className={styles.logo_wrapper}>
            <svg className={styles.logo} width="70" height="200" viewBox="-1 30 138 310" fill="none">
                <path id={styles.V} d="M69.4932 306.314L2.25546 190.11C2.25546 190.11 7.68516 195.974 15.0569 190.684C22.9836 184.997 27.9774 187.157 27.9774 187.157L69.6517 259.21L111.385 187.058C111.385 187.058 118.103 184.502 122.661 189.674C128.368 197.977 135.859 190.11 135.859 190.11L69.4932 306.314Z"/>
                <path id={styles.A} d="M69.3943 5.02832L135.859 189.937C135.859 189.937 129.795 197.844 123.196 190.313C117.782 184.135 111.346 187.163 111.346 187.163L69.5726 72.8011L27.8389 187.163C27.8389 187.163 21.6759 185.46 15.295 190.551C7.94302 196.417 1.99805 189.937 1.99805 189.937L69.3943 5.02832Z"/>
                <g className={styles.handles}>
                    <path id={styles.right_handle} d="M111.332 187.111C111.332 187.111 118.466 184.25 123.618 190.813C128.771 197.376 135.675 189.585 135.675 189.585"/>
                    <path id={styles.left_handle} d="M2.09766 189.129C2.09766 189.129 7.47361 196.314 15.0535 190.716C22.6333 185.118 27.8451 187.258 27.8451 187.258"/>
                </g>
                <g className={styles.contour}>
                    <path id={styles.outer} d="M69.4141 4.99902L1.99805 189.868L69.4141 306.429L135.998 189.888L69.4141 4.99902Z"/>
                    <path id={styles.inner} d="M27.9277 187.176L69.602 259.368L111.336 187.176L69.602 72.6953L27.9277 187.176Z"/>
                </g>
            </svg>
            <canvas id={styles.matrix} ref={canvasRef} style={{width: 48, height: 100}}></canvas>
        </div>
    )
}