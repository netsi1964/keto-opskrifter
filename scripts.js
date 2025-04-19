// Configure marked.js
marked.setOptions({
    breaks: true,
    gfm: true
});

// Function to load and display recipe
async function loadRecipe(filename) {
    try {
        const response = await fetch(filename);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const markdown = await response.text();
        
        // Convert markdown to HTML
        const html = marked.parse(markdown);
        
        // Hide recipe cards and show recipe content
        document.getElementById('opskrifter').style.display = 'none';
        const recipeContent = document.getElementById('recipe-content');
        const recipeContainer = document.getElementById('recipe-container');
        recipeContainer.innerHTML = html;
        recipeContent.classList.remove('hidden');
        
        // Scroll to top
        window.scrollTo(0, 0);
    } catch (error) {
        console.error('Error loading recipe:', error);
        alert('Beklager, kunne ikke indlæse opskriften. Prøv igen senere.');
    }
}

// Function to hide recipe and show cards
function hideRecipe() {
    document.getElementById('recipe-content').classList.add('hidden');
    document.getElementById('opskrifter').style.display = 'grid';
} 