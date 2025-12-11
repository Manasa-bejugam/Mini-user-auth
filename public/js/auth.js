// API Base URL
const API_URL = '/api';

// Token management
const TOKEN_KEY = 'auth_token';

const getToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
};

const removeToken = () => {
    localStorage.removeItem(TOKEN_KEY);
};

// Alert helper
const showAlert = (message, type = 'info') => {
    const alertContainer = document.getElementById('alert-container');
    if (!alertContainer) return;

    const alert = document.createElement('div');
    alert.className = `alert alert-${type}`;
    alert.textContent = message;

    alertContainer.innerHTML = '';
    alertContainer.appendChild(alert);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        alert.style.opacity = '0';
        setTimeout(() => alert.remove(), 300);
    }, 5000);
};

// API call helper
const apiCall = async (endpoint, options = {}) => {
    const token = getToken();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` })
        },
        ...options
    };

    try {
        const response = await fetch(`${API_URL}${endpoint}`, config);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Request failed');
        }

        return data;
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
};

// Authentication API functions

/**
 * Register a new user
 * @param {Object} userData - { username, email, password }
 * @returns {Promise<Object>} Response data
 */
const register = async (userData) => {
    return await apiCall('/auth/register', {
        method: 'POST',
        body: JSON.stringify(userData)
    });
};

/**
 * Login user
 * @param {Object} credentials - { email, password }
 * @returns {Promise<Object>} Response data with token
 */
const login = async (credentials) => {
    const data = await apiCall('/auth/login', {
        method: 'POST',
        body: JSON.stringify(credentials)
    });

    if (data.success && data.data.token) {
        setToken(data.data.token);
    }

    return data;
};

/**
 * Verify email with token
 * @param {string} token - Verification token
 * @returns {Promise<Object>} Response data
 */
const verifyEmail = async (token) => {
    return await apiCall(`/auth/verify/${token}`, {
        method: 'GET'
    });
};

/**
 * Request password reset
 * @param {Object} emailData - { email }
 * @returns {Promise<Object>} Response data
 */
const forgotPassword = async (emailData) => {
    return await apiCall('/auth/forgot-password', {
        method: 'POST',
        body: JSON.stringify(emailData)
    });
};

/**
 * Reset password with token
 * @param {string} token - Reset token
 * @param {Object} passwordData - { password }
 * @returns {Promise<Object>} Response data
 */
const resetPassword = async (token, passwordData) => {
    return await apiCall(`/auth/reset-password/${token}`, {
        method: 'POST',
        body: JSON.stringify(passwordData)
    });
};

/**
 * Get user profile (protected route)
 * @returns {Promise<Object>} User profile data
 */
const getUserProfile = async () => {
    return await apiCall('/user/profile', {
        method: 'GET'
    });
};

/**
 * Logout user
 */
const logout = () => {
    removeToken();
    window.location.href = '/login.html';
};

/**
 * Check if user is authenticated
 * @returns {boolean} Authentication status
 */
const isAuthenticated = () => {
    return !!getToken();
};
