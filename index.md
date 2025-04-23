---
layout: default
---

<!-- Hero section -->
<header class="header-custom text-white py-16">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl mb-4">Velkommen til Keto Opskrifter</h1>
        <p class="text-xl">Din guide til lækre og sunde keto-venlige måltider</p>
    </div>
</header>

<!-- Main content -->
<main class="container mx-auto px-4 py-8 flex-grow">
    <section id="opskrifter" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {% for recipe in site.opskrifter %}
        <article class="card-custom rounded-lg overflow-hidden shadow-lg">
            {% if recipe.image %}
            <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                <img src="{{ site.baseurl }}{{ recipe.image }}" 
                     alt="{{ recipe.title }}" 
                     class="w-full h-48 object-cover">
            </div>
            {% endif %}
            <div class="p-6">
                <h2 class="text-2xl mb-2">{{ recipe.title }}</h2>
                <p class="mb-4 opacity-75">{{ recipe.description }}</p>
                <a href="{{ recipe.url | relative_url }}" class="inline-block text-green-600 hover:text-green-800">Læs opskrift →</a>
            </div>
        </article>
        {% endfor %}
    </section>
</main> 