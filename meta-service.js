// Meta Service Form JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Meta Service Form JavaScript Loaded');
    
    // Get elements
    const metaOrderBtn = document.getElementById('metaOrderBtn');
    const metaFormModal = document.getElementById('metaFormModal');
    const closeMetaModal = document.getElementById('closeMetaModal');
    const metaCancelBtn = document.getElementById('metaCancelBtn');
    const metaSubmitBtn = document.getElementById('metaSubmitBtn');
    const metaServiceForm = document.getElementById('metaServiceForm');
    
    console.log('Elements found:', {
        metaOrderBtn: !!metaOrderBtn,
        metaFormModal: !!metaFormModal,
        closeMetaModal: !!closeMetaModal,
        metaCancelBtn: !!metaCancelBtn,
        metaSubmitBtn: !!metaSubmitBtn,
        metaServiceForm: !!metaServiceForm
    });
    
    // Platform selection styling
    const platformRadios = document.querySelectorAll('input[name="platform"]');
    platformRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Reset all
            platformRadios.forEach(r => {
                const parent = r.parentElement;
                parent.classList.remove('ring-2', 'ring-blue-500');
            });
            
            // Highlight selected
            if (this.checked) {
                const parent = this.parentElement;
                parent.classList.add('ring-2', 'ring-blue-500');
            }
        });
    });
    
    // Service type selection styling
    const serviceTypeRadios = document.querySelectorAll('input[name="service-type"]');
    serviceTypeRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Reset all
            serviceTypeRadios.forEach(r => {
                const parent = r.parentElement;
                parent.classList.remove('ring-2', 'ring-blue-500');
            });
            
            // Highlight selected
            if (this.checked) {
                const parent = this.parentElement;
                parent.classList.add('ring-2', 'ring-blue-500');
            }
        });
    });
    
    // Priority selection styling
    const priorityRadios = document.querySelectorAll('input[name="priority"]');
    priorityRadios.forEach(radio => {
        radio.addEventListener('change', function() {
            // Reset all
            priorityRadios.forEach(r => {
                const parent = r.parentElement;
                parent.classList.remove('ring-2', 'ring-blue-500');
            });
            
            // Highlight selected
            if (this.checked) {
                const parent = this.parentElement;
                parent.classList.add('ring-2', 'ring-blue-500');
            }
        });
    });
    
    // Function to close modal
    function closeModal() {
        if (metaFormModal) {
            // Add animation classes for smooth closing
            metaFormModal.classList.add('closing');
            
            // Wait for animation to complete
            setTimeout(() => {
                metaFormModal.classList.add('hidden');
                metaFormModal.classList.remove('closing');
                document.body.style.overflow = 'auto'; // Enable scrolling again
            }, 300);
            
            // Remove the history entry we added when opening the modal
            if (window.history && window.history.state && window.history.state.modalOpen) {
                window.history.back();
            }
        }
    }
    
    // Function to open modal
    function openModal() {
        if (metaFormModal) {
            // Add a history entry before opening the modal
            window.history.pushState({ modalOpen: true }, document.title, window.location.href);
            
            metaFormModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            
            // Scroll to top of modal
            setTimeout(() => {
                if (metaFormModal.scrollTo) {
                    metaFormModal.scrollTo(0, 0);
                }
            }, 100);
        }
    }
    
    // Open modal when order button is clicked
    if (metaOrderBtn) {
        metaOrderBtn.addEventListener('click', function(e) {
            console.log('Meta Order Button Clicked');
            e.preventDefault();
            openModal();
        });
    } else {
        console.error('metaOrderBtn not found');
    }
    
    // Close modal when close button is clicked
    if (closeMetaModal) {
        closeMetaModal.addEventListener('click', function(e) {
            console.log('Close Meta Modal Button Clicked');
            e.preventDefault();
            closeModal();
        });
    }
    
    // Close modal when cancel button is clicked
    if (metaCancelBtn) {
        metaCancelBtn.addEventListener('click', function(e) {
            console.log('Cancel Button Clicked');
            e.preventDefault();
            closeModal();
        });
    }
    
    // Close modal when clicking outside the form
    if (metaFormModal) {
        metaFormModal.addEventListener('click', function(e) {
            if (e.target === metaFormModal) {
                console.log('Clicked outside modal');
                closeModal();
            }
        });
    }
    
    // Handle back button for mobile
    window.addEventListener('popstate', function(e) {
        // If modal is open, close it
        if (metaFormModal && !metaFormModal.classList.contains('hidden')) {
            metaFormModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Handle form submission
    if (metaSubmitBtn) {
        metaSubmitBtn.addEventListener('click', function(e) {
            console.log('Meta Submit Button Clicked');
            e.preventDefault();
            
            // Basic form validation
            const name = document.getElementById('meta-name')?.value;
            const phone = document.getElementById('meta-phone')?.value;
            const link = document.getElementById('meta-link')?.value;
            const agreement = document.getElementById('meta-agreement')?.checked;
            
            console.log('Form data:', { name, phone, link, agreement });
            
            // Check if required fields are filled
            if (!name || !phone || !link || !agreement) {
                alert('অনুগ্রহ করে সব প্রয়োজনীয় তথ্য পূরণ করুন।');
                return;
            }
            
            // Get selected platform
            let platform = '';
            document.getElementsByName('platform').forEach(radio => {
                if (radio.checked) {
                    platform = radio.value;
                }
            });
            
            if (!platform) {
                alert('অনুগ্রহ করে একটি প্ল্যাটফর্ম নির্বাচন করুন।');
                return;
            }
            
            // Get selected service type
            let serviceType = '';
            document.getElementsByName('service-type').forEach(radio => {
                if (radio.checked) {
                    serviceType = radio.value;
                }
            });
            
            if (!serviceType) {
                alert('অনুগ্রহ করে একটি সার্ভিস টাইপ নির্বাচন করুন।');
                return;
            }
            
            // Get selected priority
            let priority = '';
            document.getElementsByName('priority').forEach(radio => {
                if (radio.checked) {
                    priority = radio.value;
                }
            });
            
            if (!priority) {
                alert('অনুগ্রহ করে একটি অগ্রাধিকার নির্বাচন করুন।');
                return;
            }
            
            // Get optional fields
            const email = document.getElementById('meta-email')?.value || '';
            const description = document.getElementById('meta-description')?.value || '';
            const documents = document.getElementById('meta-documents')?.value || '';
            
            // Prepare WhatsApp message
            const message = `🔵 Meta Service অর্ডার\n\n` +
                `১. নাম: ${name}\n` +
                `২. ফোন: ${phone}\n` +
                `৩. ইমেইল: ${email || 'N/A'}\n` +
                `৪. আইডি লিংক: ${link}\n` +
                `৫. প্ল্যাটফর্ম: ${platform}\n` +
                `৬. সার্ভিস টাইপ: ${serviceType}\n` +
                `৭. বর্ণনা: ${description || 'N/A'}\n` +
                `৮. ডকুমেন্ট: ${documents || 'N/A'}\n` +
                `৯. অগ্রাধিকার: ${priority}\n` +
                `১০. সম্মতি: হ্যাঁ`;
            
            console.log('WhatsApp message:', message);
            
            // Redirect to WhatsApp with the message
            const whatsappUrl = `https://wa.me/8801886191222?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Close the modal after submission
            closeModal();
        });
    } else {
        console.error('metaSubmitBtn not found');
    }
    
    // Add keyboard event listener for Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && metaFormModal && !metaFormModal.classList.contains('hidden')) {
            closeModal();
        }
    });
    
    // Add swipe down to close for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    const modalContent = metaFormModal ? metaFormModal.querySelector('.modal-content-animation') : null;
    
    if (modalContent) {
        modalContent.addEventListener('touchstart', function(e) {
            touchStartY = e.changedTouches[0].screenY;
        }, false);
        
        modalContent.addEventListener('touchmove', function(e) {
            // If user is scrolling down from the top of the form
            if (metaServiceForm.scrollTop === 0) {
                const currentY = e.changedTouches[0].screenY;
                const diff = currentY - touchStartY;
                
                // If swiping down
                if (diff > 0) {
                    // Add some resistance to the pull
                    modalContent.style.transform = `translateY(${diff / 3}px)`;
                    e.preventDefault(); // Prevent default scrolling
                }
            }
        }, { passive: false });
        
        modalContent.addEventListener('touchend', function(e) {
            touchEndY = e.changedTouches[0].screenY;
            const diff = touchEndY - touchStartY;
            
            // Reset transform
            modalContent.style.transform = '';
            
            // If swiped down more than 100px from the top of the form
            if (diff > 100 && metaServiceForm.scrollTop === 0) {
                closeModal();
            }
        }, false);
    }
    
    // Add a visible back button for mobile
    const backButton = document.createElement('button');
    backButton.innerHTML = '<i class="fas fa-arrow-left"></i>';
    backButton.className = 'fixed top-4 left-4 z-50 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md md:hidden';
    backButton.style.display = 'none';
    document.body.appendChild(backButton);
    
    backButton.addEventListener('click', function() {
        closeModal();
    });
    
    // Show back button when modal is open
    if (metaOrderBtn) {
        metaOrderBtn.addEventListener('click', function() {
            backButton.style.display = 'flex';
        });
    }
    
    // Hide back button when modal is closed
    function hideBackButton() {
        backButton.style.display = 'none';
    }
    
    if (closeMetaModal) {
        closeMetaModal.addEventListener('click', hideBackButton);
    }
    
    if (metaCancelBtn) {
        metaCancelBtn.addEventListener('click', hideBackButton);
    }
    
    if (metaFormModal) {
        metaFormModal.addEventListener('click', function(e) {
            if (e.target === metaFormModal) {
                hideBackButton();
            }
        });
    }
    
    window.addEventListener('popstate', hideBackButton);
    
    // Double tap to close (for iOS)
    let lastTap = 0;
    if (metaFormModal) {
        metaFormModal.addEventListener('touchend', function(e) {
            const currentTime = new Date().getTime();
            const tapLength = currentTime - lastTap;
            
            if (tapLength < 300 && tapLength > 0) {
                closeModal();
                e.preventDefault();
            }
            
            lastTap = currentTime;
        });
    }
});

