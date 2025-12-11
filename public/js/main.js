// Simple helper functions for the app
function showMessage(msg, type) {
    const messageDiv = document.getElementById('message');
    if (messageDiv) {
        messageDiv.className = `alert alert-${type}`;
        messageDiv.textContent = msg;
        messageDiv.classList.remove('hidden');
    }
}
