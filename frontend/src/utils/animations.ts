/**
 * 动画和微交互效果工具函数
 */

// 滚动动画观察器
export const setupScrollAnimations = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        
        // 如果元素有特定的动画类，添加相应的动画
        const element = entry.target as HTMLElement;
        if (element.classList.contains('animate-fade-in')) {
          element.style.animation = 'fadeIn 0.6s ease-out forwards';
        } else if (element.classList.contains('animate-fade-in-up')) {
          element.style.animation = 'fadeInUp 0.6s ease-out forwards';
        } else if (element.classList.contains('animate-fade-in-down')) {
          element.style.animation = 'fadeInDown 0.6s ease-out forwards';
        } else if (element.classList.contains('animate-slide-in-left')) {
          element.style.animation = 'slideInLeft 0.7s ease-out forwards';
        } else if (element.classList.contains('animate-slide-in-right')) {
          element.style.animation = 'slideInRight 0.7s ease-out forwards';
        } else if (element.classList.contains('animate-scale-in')) {
          element.style.animation = 'scaleIn 0.5s ease-out forwards';
        }
      }
    });
  }, observerOptions);

  // 观察所有带有动画类的元素
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  animatedElements.forEach(el => observer.observe(el));

  return observer;
};

// 平滑滚动到指定元素
export const smoothScrollTo = (elementId: string, offset: number = 0) => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// 平滑滚动到指定选择器
export const smoothScrollToSelector = (selector: string, offset: number = 0) => {
  const element = document.querySelector(selector);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// 添加悬停效果到元素
export const addHoverEffect = (element: HTMLElement, effect: 'lift' | 'glow' | 'scale' | 'rotate' = 'lift') => {
  element.addEventListener('mouseenter', () => {
    switch (effect) {
      case 'lift':
        element.style.transform = 'translateY(-5px)';
        element.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.2)';
        break;
      case 'glow':
        element.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
        break;
      case 'scale':
        element.style.transform = 'scale(1.05)';
        break;
      case 'rotate':
        element.style.transform = 'rotate(2deg)';
        break;
    }
  });

  element.addEventListener('mouseleave', () => {
    element.style.transform = '';
    element.style.boxShadow = '';
  });
};

// 数字计数动画
export const animateNumber = (
  element: HTMLElement,
  targetNumber: number,
  duration: number = 2000,
  prefix: string = '',
  suffix: string = ''
) => {
  const startTime = Date.now();
  const initialNumber = 0;

  const updateNumber = () => {
    const currentTime = Date.now();
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    
    // 使用缓动函数
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentNumber = Math.floor(initialNumber + (targetNumber - initialNumber) * easeOutQuart);
    
    element.textContent = `${prefix}${currentNumber.toLocaleString()}${suffix}`;
    
    if (progress < 1) {
      requestAnimationFrame(updateNumber);
    }
  };

  requestAnimationFrame(updateNumber);
};

// 打字机效果
export const typewriterEffect = (
  element: HTMLElement,
  text: string,
  speed: number = 50,
  callback?: () => void
) => {
  let index = 0;
  
  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  };
  
  element.textContent = '';
  type();
};

// 添加视差滚动效果
export const setupParallaxEffect = () => {
  const parallaxElements = document.querySelectorAll('[data-parallax]');
  
  const updateParallax = () => {
    const scrollY = window.scrollY;
    
    parallaxElements.forEach(el => {
      const element = el as HTMLElement;
      const speed = parseFloat(element.getAttribute('data-parallax-speed') || '0.5');
      const yPos = -(scrollY * speed);
      element.style.transform = `translateY(${yPos}px)`;
    });
  };
  
  window.addEventListener('scroll', updateParallax);
  updateParallax();
  
  return () => {
    window.removeEventListener('scroll', updateParallax);
  };
};

// 添加鼠标跟随效果
export const setupMouseFollower = () => {
  const follower = document.createElement('div');
  follower.className = 'mouse-follower';
  follower.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: rgba(59, 130, 246, 0.3);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
    transform: translate(-50%, -50%);
  `;
  document.body.appendChild(follower);
  
  const updateFollower = (e: MouseEvent) => {
    follower.style.left = `${e.clientX}px`;
    follower.style.top = `${e.clientY}px`;
  };
  
  document.addEventListener('mousemove', updateFollower);
  
  // 在链接和按钮上放大跟随器
  const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(2)';
      follower.style.background = 'rgba(59, 130, 246, 0.5)';
    });
    
    element.addEventListener('mouseleave', () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.background = 'rgba(59, 130, 246, 0.3)';
    });
  });
  
  return () => {
    document.removeEventListener('mousemove', updateFollower);
    document.body.removeChild(follower);
  };
};

// 添加滚动进度指示器
export const setupScrollProgress = () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3b82f6, #0f172a);
    z-index: 9999;
    transition: width 0.1s ease;
  `;
  document.body.appendChild(progressBar);
  
  const updateProgress = () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const progress = (scrollPosition / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
  };
  
  window.addEventListener('scroll', updateProgress);
  updateProgress();
  
  return () => {
    window.removeEventListener('scroll', updateProgress);
    document.body.removeChild(progressBar);
  };
};

// 添加页面加载动画
export const setupPageLoadAnimation = () => {
  const overlay = document.createElement('div');
  overlay.className = 'page-load-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #0f172a;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease;
  `;
  
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.style.cssText = `
    width: 50px;
    height: 50px;
    border: 3px solid rgba(255, 255, 255, 0.1);
    border-top: 3px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  `;
  
  overlay.appendChild(loader);
  document.body.appendChild(overlay);
  
  // 页面加载完成后隐藏覆盖层
  window.addEventListener('load', () => {
    setTimeout(() => {
      overlay.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(overlay);
      }, 500);
    }, 300);
  });
  
  // 添加旋转动画
  const style = document.createElement('style');
  style.textContent = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
};

// 初始化所有动画效果
export const initializeAnimations = () => {
  // 设置滚动动画
  const scrollObserver = setupScrollAnimations();
  
  // 设置视差效果
  const parallaxCleanup = setupParallaxEffect();
  
  // 设置滚动进度
  const progressCleanup = setupScrollProgress();
  
  // 设置页面加载动画
  setupPageLoadAnimation();
  
  // 可选：设置鼠标跟随效果（仅在桌面端）
  if (window.innerWidth > 768) {
    const mouseCleanup = setupMouseFollower();
    
    // 返回清理函数
    return () => {
      scrollObserver.disconnect();
      parallaxCleanup();
      progressCleanup();
      mouseCleanup();
    };
  }
  
  // 返回清理函数（移动端）
  return () => {
    scrollObserver.disconnect();
    parallaxCleanup();
    progressCleanup();
  };
};