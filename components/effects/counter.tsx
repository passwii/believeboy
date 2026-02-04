"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  once?: boolean;
}

export function Counter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
  once = true,
}: CounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const springValue = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) =>
    Math.floor(latest)
  );

  const [value, setValue] = useState(0);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      springValue.set(target);
      setHasAnimated(true);
    }
  }, [isInView, target, springValue, hasAnimated]);

  useEffect(() => {
    const unsubscribe = displayValue.on("change", (latest) => {
      setValue(latest);
    });
    return unsubscribe;
  }, [displayValue]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </motion.span>
  );
}

// 带动画样式的统计数字组件
interface StatCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export function StatCounter({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
  delay = 0,
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const startTime = Date.now();
      const endTime = startTime + duration * 1000;

      const timer = setInterval(() => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        
        // Ease out cubic
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOutProgress * value);
        
        setDisplayValue(currentValue);

        if (now >= endTime) {
          setDisplayValue(value);
          clearInterval(timer);
        }
      }, 16);

      setHasAnimated(true);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2 tracking-tight">
        {prefix}
        {displayValue}
        {suffix}
      </div>
      <div className="text-slate-500 text-sm md:text-base">{label}</div>
    </motion.div>
  );
}

// 简化版数字增长动画
interface SimpleCounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function SimpleCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
  className = "",
}: SimpleCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const startValue = 0;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease out cubic
        const easeOutProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (end - startValue) * easeOutProgress);
        
        setCount(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
