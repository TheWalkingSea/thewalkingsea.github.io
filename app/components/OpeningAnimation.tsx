import { useEffect, useState, useRef } from 'react';

const ANIMATION_FADE_DURATION = 1;

export default function OpeningAnimation({ onComplete }: { onComplete: () => void }) {
    const [animationPhase, setAnimationPhase] = useState<'name' | 'video' | 'fade'>('name');
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        // Disable scrolling during animation
        document.body.style.overflow = 'hidden';

        // Phase 1: Show name shrinking (3 seconds)
        const videoTimer = setTimeout(() => {
            setAnimationPhase('video');
        }, 1000);

        return () => {
            clearTimeout(videoTimer);
            // Re-enable scrolling when component unmounts
            document.body.style.overflow = '';
        };
    }, []);

    // Handle video playback when video phase starts
    useEffect(() => {
        if (animationPhase === 'video' && videoRef.current) {
            videoRef.current.play().catch(err => {
                console.log('Video autoplay failed:', err);
                // If video fails to play, skip to fade
                setTimeout(() => {
                    setAnimationPhase('fade');
                    setTimeout(() => {
                        onComplete();
                    }, 1000);
                }, 500);
            });
        }
    }, [animationPhase, onComplete]);

    const handleTimeUpdate = () => {
        if (videoRef.current && animationPhase === 'video') {
            const { currentTime, duration } = videoRef.current;
            // Start fading when 1 second is left
            if (duration - currentTime <= ANIMATION_FADE_DURATION) {
                setAnimationPhase('fade');
            }
        }
    };

    const handleVideoEnd = () => {
        // Complete the animation
        onComplete();
    };

    return (
        <div className={`fixed inset-0 z-50 overflow-hidden ${animationPhase !== 'fade' ? 'bg-black' : ''}`}>
            {/* Phase 1: Name shrinking into center */}
            <div
                className={`absolute inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
                    animationPhase === 'name' ? 'opacity-100' : 'opacity-0'
                }`}
            >
                <div className="star-wars-container">
                    <h1
                        className="font-starwars text-amber-400 text-9xl star-wars-shrink z-100"
                        style={{
                            textShadow: '0 0 40px rgba(251, 191, 36, 0.8), 0 0 80px rgba(251, 191, 36, 0.4)',
                        }}
                    >
                        Austin
                    </h1>
                </div>
            </div>

            {/* Phase 2: Hyperdrive video - behind the name */}
            {(animationPhase === 'video' || animationPhase === 'fade') && (
                <div
                    className={`absolute inset-0 z-0 transition-opacity ease-out ${
                        animationPhase === 'fade' ? 'opacity-0' : 'opacity-100'
                    }`}
                    style={{
                        transitionDuration: `${ANIMATION_FADE_DURATION}s`
                    }}
                >
                    <video
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleVideoEnd}
                        playsInline
                        muted
                        autoPlay
                    >
                        <source src="/hyperdrive.mp4" type="video/mp4" />
                    </video>
                </div>
            )}
        </div>
    );
}
