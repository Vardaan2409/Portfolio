import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
            <div
                className="max-w-md text-center animate-fade-in"
                style={{ animation: 'fade-in 0.7s ease-out forwards' }}
            >
                <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
                <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
                <p className="text-muted-foreground mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <button
                    onClick={() => navigate('/')}
                    className="cosmic-button inline-block"
                >
                    Go Home
                </button>
            </div>
        </div>
    )
}

export default NotFound
