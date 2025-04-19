---
layout: default
---

<!-- Hero section -->
<header class="bg-green-500 text-white py-16">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl font-bold mb-4">Velkommen til Keto Opskrifter</h1>
        <p class="text-xl">Din guide til lækre og sunde keto-venlige måltider</p>
    </div>
</header>

<!-- Main content -->
<main class="container mx-auto px-4 py-8 flex-grow">
    <section id="opskrifter" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {% for recipe in site.opskrifter %}
        <article class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div class="p-6">
                <h2 class="text-2xl font-bold mb-2">{{ recipe.title }}</h2>
                <p class="text-gray-600 mb-4">{{ recipe.description }}</p>
                <a href="{{ recipe.url | relative_url }}" class="text-green-600 hover:text-green-800 font-semibold">Læs opskrift →</a>
            </div>
        </article>
        {% endfor %}
    </section>
</main> 