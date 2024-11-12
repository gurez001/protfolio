import React, { useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
    value: number;
    label: string;
}

const Stat: React.FC<StatProps> = ({ value, label }) => {
    const controls = useAnimation();
    const { ref, inView } = useInView({ triggerOnce: true });

    // Initialize a motion value for the counter
    const counter = useMotionValue(0);

    // Transform the motion value to a formatted number for display
    const roundedCounter = useTransform(counter, (latest) => Math.round(latest).toLocaleString());

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } });

            // Animate the counter value
            counter.set(0);  // Reset counter to 0 before starting animation
            counter.animate(value, { duration: 1.5, ease: 'easeOut' });
        }
    }, [controls, inView, counter, value]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            className="stat-item"
            style={{ margin: '10px 0', textAlign: 'center' }}
        >
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                style={{ fontSize: '2em', fontWeight: 'bold', margin: 0 }}
            >
                <motion.span style={{ fontVariantNumeric: 'tabular-nums' }}>
                    {roundedCounter}
                </motion.span>+
            </motion.p>
            <h2>{label}</h2>
        </motion.div>
    );
};

const SecSection: React.FC = () => {
    return (
        <section style={{ padding: '2em 0', display: 'flex', justifyContent: 'space-around' }}>
            <Stat value={430} label="Happy Clients" />
            <Stat value={535} label="Projects Completed" />
            <Stat value={1179409} label="Lines Coded" />
        </section>
    );
};

export default SecSection;
