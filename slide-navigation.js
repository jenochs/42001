// Slide Navigation System
class SlideNavigation {
    constructor(currentSlide, totalSlides) {
        this.currentSlide = currentSlide;
        this.totalSlides = totalSlides;
        this.initializeNavigation();
        this.updateProgress();
    }

    initializeNavigation() {
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowLeft':
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                    this.nextSlide();
                    break;
                case 'Home':
                    this.goToSlide(1);
                    break;
                case 'End':
                    this.goToSlide(this.totalSlides);
                    break;
                case 'Escape':
                    this.goToIndex();
                    break;
                case ' ':
                    e.preventDefault();
                    this.nextSlide();
                    break;
            }
        });

        // Button navigation
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        const homeBtn = document.getElementById('homeBtn');

        if (prevBtn) prevBtn.addEventListener('click', () => this.previousSlide());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextSlide());
        if (homeBtn) homeBtn.addEventListener('click', () => this.goToIndex());

        // Update button states
        this.updateButtonStates();

        // Swipe gestures for mobile
        let touchStartX = 0;
        let touchEndX = 0;

        document.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        document.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextSlide();
            }
            if (touchEndX > touchStartX + 50) {
                this.previousSlide();
            }
        };

        this.handleSwipe = handleSwipe;
    }

    previousSlide() {
        if (this.currentSlide > 1) {
            this.goToSlide(this.currentSlide - 1);
        }
    }

    nextSlide() {
        if (this.currentSlide < this.totalSlides) {
            this.goToSlide(this.currentSlide + 1);
        }
    }

    goToSlide(slideNumber) {
        window.location.href = `slide-${String(slideNumber).padStart(2, '0')}-${this.getSlideSlug(slideNumber)}.html`;
    }

    goToIndex() {
        window.location.href = 'index.html';
    }

    updateButtonStates() {
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');

        if (prevBtn) {
            prevBtn.disabled = this.currentSlide === 1;
        }
        
        if (nextBtn) {
            nextBtn.disabled = this.currentSlide === this.totalSlides;
        }
    }

    updateProgress() {
        const progressFill = document.querySelector('.progress-fill');
        if (progressFill) {
            const progress = (this.currentSlide / this.totalSlides) * 100;
            progressFill.style.width = `${progress}%`;
        }
    }

    getSlideSlug(slideNumber) {
        const slugs = {
            1: 'executive-summary',
            2: 'ai-regulations-overview',
            3: 'agent-onboarding-checklist',
            4: 'timeline-enforcement',
            5: 'key-requirements',
            6: 'penalties-enforcement',
            7: 'solution-overview',
            8: 'isolation-architecture',
            9: 'monitoring-observability',
            10: 'risk-management',
            11: 'audit-compliance',
            12: 'implementation-timeline',
            13: 'readiness-assessment',
            14: 'implementation-roadmap',
            15: 'call-to-action'
        };
        return slugs[slideNumber] || 'slide';
    }
}

// Syntax highlighting for code blocks
function highlightCode() {
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        // Basic syntax highlighting
        let html = block.innerHTML;
        
        // Keywords
        html = html.replace(/\b(const|let|var|function|class|if|else|for|while|return|import|export|from|async|await)\b/g, '<span style="color: #f472b6;">$1</span>');
        
        // Strings
        html = html.replace(/"([^"]*)"/g, '<span style="color: #a5f3fc;">"$1"</span>');
        html = html.replace(/'([^']*)'/g, '<span style="color: #a5f3fc;">\'$1\'</span>');
        
        // Comments
        html = html.replace(/\/\/(.*)$/gm, '<span style="color: #6b7280;">//$1</span>');
        html = html.replace(/\/\*([\s\S]*?)\*\//g, '<span style="color: #6b7280;">/*$1*/</span>');
        
        // Numbers
        html = html.replace(/\b(\d+)\b/g, '<span style="color: #fde047;">$1</span>');
        
        block.innerHTML = html;
    });
}

// Smooth scroll for internal links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Copy code functionality
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        block.parentNode.insertBefore(wrapper, block);
        wrapper.appendChild(block);
        
        const copyBtn = document.createElement('button');
        copyBtn.innerHTML = '📋 Copy';
        copyBtn.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #1e293b;
            border: 1px solid #334155;
            color: #e2e8f0;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.8rem;
        `;
        
        copyBtn.addEventListener('click', async () => {
            const code = block.querySelector('code')?.innerText || block.innerText;
            await navigator.clipboard.writeText(code);
            copyBtn.innerHTML = '✅ Copied!';
            setTimeout(() => {
                copyBtn.innerHTML = '📋 Copy';
            }, 2000);
        });
        
        wrapper.appendChild(copyBtn);
    });
}

// Initialize everything on DOM load
document.addEventListener('DOMContentLoaded', () => {
    highlightCode();
    initSmoothScroll();
    initCodeCopy();
});