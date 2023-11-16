document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('password-strength-text');
    const strengthIndicator = document.getElementById('password-strength');

    passwordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);
        updateStrengthIndicator(strength);
        updateStrengthText(strength);
    });

    function checkPasswordStrength(password) {
        // Define your criteria for password strength here
        // For simplicity, this example checks the length and presence of uppercase and lowercase letters
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);

        if (password.length >= minLength && hasUpperCase && hasLowerCase) {
            return 'strong';
        } else if (password.length >= minLength / 2) {
            return 'medium';
        } else {
            return 'weak';
        }
    }

    function updateStrengthIndicator(strength) {
        strengthIndicator.textContent = '';
        strengthIndicator.className = 'strength-' + strength;
    }

    function updateStrengthText(strength) {
        strengthText.textContent = 'Password Strength: ' + strength.charAt(0).toUpperCase() + strength.slice(1);
    }
});
