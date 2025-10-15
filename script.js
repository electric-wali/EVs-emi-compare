// electricwali.com(manish sahani)
const loanTenureConstraints = {
    'electric-car': {
        min: 1,
        max: 7
    },
    'electric-suv': {
        min: 1,
        max: 7
    },
    'electric-bike': {
        min: 1,
        max: 5
    },
    'electric-scooter': {
        min: 1,
        max: 3
    },
    'commercial-ev': {
        min: 1,
        max: 5
    },
    'luxury-ev': {
        min: 1,
        max: 7
    }
};

const evLoanData = {
    'electric-car': {
        'SBI Green EV Loan': {
            rate: 7.4,
            minAmount: 300000,
            maxAmount: 15000000,
            url: 'https://sbi.co.in/green-ev-loan'
        },
        'HDFC EV Finance': {
            rate: 7.7,
            minAmount: 500000,
            maxAmount: 20000000,
            url: 'https://hdfc.com/ev-finance'
        },
        'Tata Capital EV Loan': {
            rate: 7.6,
            minAmount: 400000,
            maxAmount: 15000000,
            url: 'https://tatacapital.com/ev-loan'
        },
        'Axis Bank EV Special': {
            rate: 7.9,
            minAmount: 350000,
            maxAmount: 18000000,
            url: 'https://axisbank.com/ev-special'
        },
        'ICICI Green Drive': {
            rate: 7.8,
            minAmount: 400000,
            maxAmount: 20000000,
            url: 'https://icicibank.com/green-drive'
        },
        'Bank of Baroda EV Loan': {
            rate: 7.55,
            minAmount: 300000,
            maxAmount: 15000000,
            url: 'https://www.bankofbaroda.in/ev-loan.htm'
        },
        'Kotak EV Finance': {
            rate: 7.75,
            minAmount: 500000,
            maxAmount: 15000000,
            url: 'https://www.kotak.com/en/ev-finance.html'
        },
        'Yes Bank Eco Drive': {
            rate: 7.85,
            minAmount: 400000,
            maxAmount: 12000000,
            url: 'https://www.yesbank.in/eco-drive'
        }
    },
    'electric-suv': {
        'SBI Green EV Loan': {
            rate: 7.5,
            minAmount: 700000,
            maxAmount: 25000000,
            url: 'https://sbi.co.in/green-ev-loan'
        },
        'HDFC EV Finance': {
            rate: 7.8,
            minAmount: 800000,
            maxAmount: 30000000,
            url: 'https://hdfc.com/ev-finance'
        },
        'Tata Capital EV Loan': {
            rate: 7.7,
            minAmount: 700000,
            maxAmount: 25000000,
            url: 'https://tatacapital.com/ev-loan'
        },
        'Axis Bank EV Special': {
            rate: 8.0,
            minAmount: 750000,
            maxAmount: 28000000,
            url: 'https://axisbank.com/ev-special'
        },
        'ICICI Green Drive': {
            rate: 7.9,
            minAmount: 800000,
            maxAmount: 30000000,
            url: 'https://icicibank.com/green-drive'
        },
        'Bank of Baroda EV Loan': {
            rate: 7.65,
            minAmount: 700000,
            maxAmount: 25000000,
            url: 'https://www.bankofbaroda.in/ev-loan.htm'
        },
        'Mahindra Finance EV': {
            rate: 7.95,
            minAmount: 600000,
            maxAmount: 20000000,
            url: 'https://www.mahindrafinance.com/ev-loan.aspx'
        },
        'IDFC First EV Loan': {
            rate: 7.85,
            minAmount: 700000,
            maxAmount: 22000000,
            url: 'https://www.idfcfirstbank.com/ev-loan'
        }
    },
    'electric-bike': {
        'Hero FinCorp E-Bike': {
            rate: 9.5,
            minAmount: 50000,
            maxAmount: 500000,
            url: 'https://herofincorp.com/e-bike-loan'
        },
        'Bajaj Finance E-Bike': {
            rate: 9.8,
            minAmount: 40000,
            maxAmount: 600000,
            url: 'https://bajajfinserv.in/e-bike-loan'
        },
        'HDFC E-Bike Loan': {
            rate: 9.2,
            minAmount: 50000,
            maxAmount: 500000,
            url: 'https://hdfc.com/e-bike-loan'
        },
        'ICICI E-Bike Finance': {
            rate: 9.4,
            minAmount: 45000,
            maxAmount: 550000,
            url: 'https://icicibank.com/e-bike-finance'
        },
        'Axis Bank E-Bike': {
            rate: 9.5,
            minAmount: 50000,
            maxAmount: 500000,
            url: 'https://www.axisbank.com/e-bike-loan'
        },
        'Shriram E-Bike Loan': {
            rate: 10.0,
            minAmount: 40000,
            maxAmount: 400000,
            url: 'https://www.shriramfinance.in/e-bike-loan'
        },
        'Muthoot E-Bike Finance': {
            rate: 10.2,
            minAmount: 30000,
            maxAmount: 300000,
            url: 'https://www.muthootfinance.com/e-bike-finance'
        },
        'TVS Credit E-Bike': {
            rate: 9.7,
            minAmount: 35000,
            maxAmount: 450000,
            url: 'https://tvscredit.com/e-bike-loan'
        }
    },
    'electric-scooter': {
        'Hero FinCorp E-Scooter': {
            rate: 9.0,
            minAmount: 20000,
            maxAmount: 200000,
            url: 'https://herofincorp.com/e-scooter-loan'
        },
        'Bajaj Finance E-Scooter': {
            rate: 9.3,
            minAmount: 25000,
            maxAmount: 250000,
            url: 'https://bajajfinserv.in/e-scooter-loan'
        },
        'HDFC E-Scooter Loan': {
            rate: 8.8,
            minAmount: 30000,
            maxAmount: 200000,
            url: 'https://hdfc.com/e-scooter-loan'
        },
        'ICICI E-Scooter Finance': {
            rate: 9.1,
            minAmount: 25000,
            maxAmount: 220000,
            url: 'https://icicibank.com/e-scooter-finance'
        },
        'Axis Bank E-Scooter': {
            rate: 9.2,
            minAmount: 30000,
            maxAmount: 200000,
            url: 'https://www.axisbank.com/e-scooter-loan'
        },
        'Ola Credit': {
            rate: 8.9,
            minAmount: 20000,
            maxAmount: 150000,
            url: 'https://olacredit.com/e-scooter'
        },
        'Ather Finance': {
            rate: 8.7,
            minAmount: 30000,
            maxAmount: 180000,
            url: 'https://atherenergy.com/finance'
        },
        'Simple Energy Finance': {
            rate: 8.8,
            minAmount: 25000,
            maxAmount: 160000,
            url: 'https://simpleenergy.in/finance'
        }
    },
    'commercial-ev': {
        'SBI Commercial EV': {
            rate: 8.5,
            minAmount: 500000,
            maxAmount: 50000000,
            url: 'https://sbi.co.in/commercial-ev-loan'
        },
        'HDFC Commercial EV': {
            rate: 8.8,
            minAmount: 750000,
            maxAmount: 75000000,
            url: 'https://hdfc.com/commercial-ev-loan'
        },
        'Tata Motors Finance': {
            rate: 8.6,
            minAmount: 600000,
            maxAmount: 60000000,
            url: 'https://tatamotorsfinance.com/ev-loan'
        },
        'Ashok Leyland Finance': {
            rate: 8.9,
            minAmount: 700000,
            maxAmount: 70000000,
            url: 'https://ashokleylandfinance.com/ev-loan'
        },
        'Mahindra Finance EV': {
            rate: 8.7,
            minAmount: 500000,
            maxAmount: 50000000,
            url: 'https://www.mahindrafinance.com/commercial-ev-loan.aspx'
        },
        'ICICI Commercial EV': {
            rate: 8.9,
            minAmount: 800000,
            maxAmount: 80000000,
            url: 'https://icicibank.com/commercial-ev-loan'
        },
        'Axis Bank Commercial EV': {
            rate: 8.8,
            minAmount: 700000,
            maxAmount: 70000000,
            url: 'https://www.axisbank.com/commercial-ev-loan'
        },
        'Yes Bank Green Commercial': {
            rate: 8.7,
            minAmount: 600000,
            maxAmount: 60000000,
            url: 'https://www.yesbank.in/green-commercial'
        }
    },
    'luxury-ev': {
        'HDFC Luxury EV': {
            rate: 8.2,
            minAmount: 1500000,
            maxAmount: 50000000,
            url: 'https://hdfc.com/luxury-ev-loan'
        },
        'ICICI Premium EV': {
            rate: 8.4,
            minAmount: 2000000,
            maxAmount: 75000000,
            url: 'https://icicibank.com/premium-ev-loan'
        },
        'Axis Bank Luxury EV': {
            rate: 8.3,
            minAmount: 1800000,
            maxAmount: 60000000,
            url: 'https://axisbank.com/luxury-ev-loan'
        },
        'Kotak Premium EV': {
            rate: 8.5,
            minAmount: 1500000,
            maxAmount: 50000000,
            url: 'https://www.kotak.com/en/premium-ev-loan.html'
        },
        'Standard Chartered EV': {
            rate: 8.1,
            minAmount: 2500000,
            maxAmount: 100000000,
            url: 'https://www.sc.com/in/ev-loan/'
        },
        'HSBC Premium EV': {
            rate: 8.0,
            minAmount: 3000000,
            maxAmount: 120000000,
            url: 'https://www.hsbc.co.in/ev-loan/'
        },
        'Citibank Luxury EV': {
            rate: 8.2,
            minAmount: 2500000,
            maxAmount: 100000000,
            url: 'https://www.citibank.co.in/ev-loan'
        },
        'IndusInd Premium EV': {
            rate: 8.3,
            minAmount: 2000000,
            maxAmount: 80000000,
            url: 'https://www.indusind.com/premium-ev-loan'
        }
    }
};

// electricwali.com(manish sahani)
function formatCurrency(amount) {
    return '₹' + amount.toLocaleString('en-IN');
}

function getCurrentPage() {
    const path = window.location.pathname;
    const page = path.split("/").pop() || 'index.html';
    return page;
}

function setActiveNavLink() {
    const currentPage = getCurrentPage();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if ((currentPage === '#' && linkHref === '#') ||
            (currentPage === '#' && linkHref === '#') ||
            (currentPage === '#' && linkHref === '#') ||
            (currentPage === '#' && linkHref === '#') ||
            (currentPage === '#' && linkHref === '#')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

//  electricwali.com(manish sahani)
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
}

function updateThemeToggle(theme) {
    const themeToggle = document.querySelector('.theme-toggle');
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    }
}

// electricwali.com(manish sahani)
function loadHeader() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="header">
                <div class="container">
                    <div class="header-content">
                        <a href="index.html" class="logo">
                            <i class="fas fa-bolt logo-icon"></i>
                            <div class="logo-text">Electric<span>Wali</span></div>
                        </a>
                        
                        <ul class="nav-links">
                            <li><a href="index.html">Home</a></li>
                            
                            <li><a href="https://electricwali.com/e-bikes/">E-Bikes</a></li>
                            <li><a href="https://electricwali.com/top-e-vehicles/">EVS Vehicle</a></li>
                            <li><a href="https://electricwali.com/ev-news/">EVs News</a></li>
                            
                            <li><a href="https://electricwali.com/about-us/">About Us</a></li>
                        </ul>
                        
                        <div class="header-actions">
                            <button class="theme-toggle" onclick="toggleTheme()">
                                <i class="fas fa-moon"></i>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </header>
        `;
        setActiveNavLink();
    }
}

function loadFooter() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="footer">
                <div class="container">
                    <div class="footer-content">
                        <div class="footer-column">
                            <div class="footer-logo">
                                <i class="fas fa-bolt"></i>
                                <span>Elactric Wali</span>
                            </div>
                            <p>Making EV ownership accessible through transparent financing solutions and smart loan calculations.</p>
                            <div class="social-links">
                                <a href="https://www.linkedin.com/company/electirc-wali/"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                              
                                <a href="#"><i class="fab fa-instagram"></i></a>
                               
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        
                        <div class="footer-column">
                            <h3>Quick Links</h3>
                            <ul class="footer-links">
                                <li><a href="index.html">Home</a></li>
                                 <li><a href="https://electricwali.com/">Official Website</a></li>
                                <li><a href="https://www.linkedin.com/company/electirc-wali/">LinkedIn</a></li>
                                <li><a href="https://electricwali.com/ev-subsidy-portal/">Subsidy Portal</a></li>
                                <li><a href="https://electricwali.com/ev-vs-petrol/">EVs VS Petrol</a></li>
                                <li><a href="https://electricwali.com/about-us/">About Us</a></li>
                               
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h3>EV Types</h3>
                            <ul class="footer-links">
                                <li><a href="https://electricwali.com/ev-cars/">Electric Cars</a></li>
                                
                                <li><a href="https://electricwali.com/e-bikes/">Electric Bikes</a></li>
                                <li><a href="https://electricwali.com/ev-scooters/">Electric Scooters</a></li>
                                <li><a href="https://electricwali.com/commercial-e-vehicle/">Commercial EVs</a></li>
                                <li><a href="https://electricwali.com/ev-news/">EVs News</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h3>Contact Info</h3>
                            <ul class="footer-links">
                                <li><i class="fas fa-envelope"></i> mail@electriwali.com</li>
                               
                                <li><i class="fas fa-map-marker-alt"></i> Noida, New Delhi, India</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <p>&copy; 2025 EV Loan Calculator. All rights reserved. Powered by Electric Wali</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// electricwali.com(manish sahani)
function getLoanConstraints(loanType) {
    const banks = evLoanData[loanType];
    let minAmount = Infinity;
    let maxAmount = 0;

    for (const bank in banks) {
        const bankData = banks[bank];
        if (bankData.minAmount < minAmount) minAmount = bankData.minAmount;
        if (bankData.maxAmount > maxAmount) maxAmount = bankData.maxAmount;
    }

    return {
        minAmount,
        maxAmount
    };
}

function updateLoanConstraints(loanType) {
    const constraints = getLoanConstraints(loanType);
    const loanAmountInput = document.getElementById('loanAmount');
    const loanTenureInput = document.getElementById('loanTenure');

    if (loanAmountInput) {
        loanAmountInput.min = constraints.minAmount;
        loanAmountInput.max = constraints.maxAmount;
        loanAmountInput.placeholder = `${formatCurrency(constraints.minAmount)} - ${formatCurrency(constraints.maxAmount)}`;
    }

    if (loanTenureInput) {
        const tenureConstraints = loanTenureConstraints[loanType];
        loanTenureInput.min = tenureConstraints.min;
        loanTenureInput.max = tenureConstraints.max;
        loanTenureInput.placeholder = `${tenureConstraints.min}-${tenureConstraints.max} years`;
        
        loanAmountInput.value = '';
        loanTenureInput.value = '';
    }
}

function showError(elementId, message) {
    const element = document.getElementById(elementId);
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
    }
}

function hideErrors() {
    document.querySelectorAll('.error-msg').forEach(el => {
        el.style.display = 'none';
    });
}

function updateBankCards(loanType) {
    const bankGrid = document.getElementById('bankGrid');
    if (!bankGrid) return;

    bankGrid.innerHTML = '';

    Object.keys(evLoanData[loanType]).forEach(bank => {
        const data = evLoanData[loanType][bank];
        const card = document.createElement('div');
        card.className = 'bank-card fade-in';
        card.innerHTML = `
            <div class="bank-header">
                <h3>${bank}</h3>
                <div class="interest-bubble">${data.rate}%</div>
            </div>
            <p class="bank-limit">Loan Range: ${formatCurrency(data.minAmount)} - ${formatCurrency(data.maxAmount)}</p>
            <div class="emi-result" data-bank="${bank}"></div>
        `;
        bankGrid.appendChild(card);
    });
}

function calculateEMI() {
    hideErrors();
    const amount = parseFloat(document.getElementById('loanAmount').value);
    const tenureYears = parseInt(document.getElementById('loanTenure').value);
    const loanType = document.querySelector('.loan-tab.active').dataset.loan;
    const loanName = document.querySelector('.loan-tab.active span').textContent.trim();

    // electricwali.com(manish sahani)
    const constraints = getLoanConstraints(loanType);
    const tenureConstraints = loanTenureConstraints[loanType];

    // electricwali.com(manish sahani)
    document.getElementById('summaryType').textContent = loanName;
    document.getElementById('summaryAmount').textContent = formatCurrency(amount);
    document.getElementById('summaryTenure').textContent = `${tenureYears} years`;

    let isValid = true;

    if (isNaN(amount) || amount <= 0) {
        showError('amountError', 'Please enter a valid loan amount');
        isValid = false;
    } else if (amount < constraints.minAmount) {
        showError('amountError', `Minimum loan amount for ${loanName} is ${formatCurrency(constraints.minAmount)}`);
        isValid = false;
    } else if (amount > constraints.maxAmount) {
        showError('amountError', `Maximum loan amount for ${loanName} is ${formatCurrency(constraints.maxAmount)}`);
        isValid = false;
    }

    if (isNaN(tenureYears) || tenureYears < tenureConstraints.min || tenureYears > tenureConstraints.max) {
        showError('tenureError', `Please enter tenure between ${tenureConstraints.min}-${tenureConstraints.max} years`);
        isValid = false;
    }

    if (!isValid) return;

    const tenureMonths = tenureYears * 12;
    let bestRate = Infinity;
    let lowestEMI = Infinity;
    let bestBank = '';
    let bestBankUrl = '';

    // electricwali.com(manish sahani)
    updateBankCards(loanType);

    Object.entries(evLoanData[loanType]).forEach(([bank, data]) => {
        const card = document.querySelector(`.emi-result[data-bank="${bank}"]`);

        if (amount < data.minAmount) {
            card.innerHTML = `
                <div class="error-msg" style="display:block; margin: 1rem 0;">
                    Minimum loan amount: ${formatCurrency(data.minAmount)}
                </div>
            `;
        } else if (amount > data.maxAmount) {
            card.innerHTML = `
                <div class="error-msg" style="display:block; margin: 1rem 0;">
                    Maximum loan amount: ${formatCurrency(data.maxAmount)}
                </div>
            `;
        } else {
            const monthlyRate = (data.rate / 12) / 100;
            const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
                (Math.pow(1 + monthlyRate, tenureMonths) - 1);
            const totalPayment = emi * tenureMonths;
            const interestAmount = totalPayment - amount;
            const principalPercent = ((amount / totalPayment) * 100).toFixed(0);

            // electricwali.com(manish sahani)
            if (data.rate < bestRate) {
                bestRate = data.rate;
                bestBank = bank;
                bestBankUrl = data.url;
            }
            if (emi < lowestEMI) lowestEMI = emi;

            card.innerHTML = `
                <div class="emi-result">
                    <p>
                        <span>Monthly EMI:</span>
                        <span>${formatCurrency(Math.round(emi))}</span>
                    </p>
                    <p>
                        <span>Total Interest:</span>
                        <span>${formatCurrency(Math.round(interestAmount))}</span>
                    </p>
                    <p>
                        <span>Total Payment:</span>
                        <span>${formatCurrency(Math.round(totalPayment))}</span>
                    </p>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${principalPercent}%;"></div>
                    </div>
                    <p style="text-align: center; font-size: 0.9rem; color: #64748b;">
                        ${principalPercent}% Principal | ${(100 - principalPercent).toFixed(0)}% Interest
                    </p>
                </div>
                <button class="apply-btn" onclick="window.open('${data.url}', '_blank')">
                    <i class="fas fa-paper-plane"></i> Apply Now
                </button>
            `;
        }
    });

    // electricwali.com(manish sahani)
    document.getElementById('summaryRate').textContent = bestRate.toFixed(1) + '%';
    document.getElementById('summaryEMI').textContent = formatCurrency(Math.round(lowestEMI));

    // electricwali.com(manish sahani)
    document.getElementById('bestBank').textContent = `${bestBank} ${loanName}`;
    document.getElementById('bestBankLink').href = bestBankUrl;
}

// electricwali.com(manish sahani)
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // electricwali.com(manish sahani)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // electricwali.com(manish sahani)
            item.classList.toggle('active');
        });
    });
}

// electricwali.com(manish sahani)
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // electricwali.com(manish sahani)
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // electricwali.com(manish sahani)
            if (!data.name || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // electricwali.com(manish sahani)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.innerHTML = '<div class="loading"></div> Sending...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// electricwali.com(manish sahani)
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

// electricwali.com(manish sahani)
document.addEventListener('DOMContentLoaded', function() {
    // Load header and footer
    loadHeader();
    loadFooter();
    
    // electricwali.com(manish sahani)
    initTheme();
    
    // electricwali.com(manish sahani)
    if (document.getElementById('calculator')) {
        updateBankCards('electric-car');
        updateLoanConstraints('electric-car');
        
        // electricwali.com(manish sahani)
        document.querySelectorAll('.loan-tab').forEach(tab => {
            tab.addEventListener('click', function() {
                document.querySelector('.loan-tab.active').classList.remove('active');
                this.classList.add('active');
                const loanType = this.dataset.loan;
                updateBankCards(loanType);
                updateLoanConstraints(loanType);

                // electricwali.com(manish sahani)
                document.getElementById('summaryAmount').textContent = '₹0';
                document.getElementById('summaryTenure').textContent = '0 years';
                document.getElementById('summaryRate').textContent = '0%';
                document.getElementById('summaryEMI').textContent = '₹0';
                document.getElementById('bestBank').textContent = '-';
            });
        });

        // electricwali.com(manish sahani)
        document.getElementById('calculateBtn').addEventListener('click', calculateEMI);
    }
    
    // Initialize FAQ
    initFAQ();
    
    // electricwali.com(manish sahani)
    initContactForm();
    
    // electricwali.com(manish sahani)
    initSmoothScroll();
    
    // electricwali.com(manish sahani)
    const animateElements = document.querySelectorAll('.feature-card, .bank-card, .stat-card');
    animateElements.forEach((el, index) => {
        el.classList.add('slide-up');
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// electricwali.com(manish sahani)
window.toggleTheme = toggleTheme;
window.toggleMobileMenu = toggleMobileMenu;
window.calculateEMI = calculateEMI;
