---
layout: default
---

<!-- Hero section -->
<header class="bg-accent text-white py-16">
    <div class="container mx-auto px-4 text-center">
        <h1 class="text-4xl mb-4 font-thin">Velkommen til Keto Opskrifter</h1>
        <p class="text-xl font-thin">Din guide til lækre og sunde keto-venlige måltider</p>
    </div>
</header>

<!-- Main content -->
<main class="container mx-auto px-4 py-8 flex-grow bg-background">
    <!-- Recipes Section -->
    <section class="mb-12">
        <h2 class="text-3xl mb-6 text-center font-thin text-primary">Seneste Opskrifter</h2>
        <div id="opskrifter" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for recipe in site.opskrifter %}
                {% unless recipe.published == false %}
                <a href="{{ recipe.url | relative_url }}" class="bg-white rounded-lg overflow-hidden shadow-lg block hover:shadow-xl transition-shadow duration-300 hover:border-primary border-2 border-transparent">
                    {% if recipe.image %}
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="{{ site.baseurl }}{{ recipe.image }}" 
                             alt="{{ recipe.title }}" 
                             class="w-full h-48 object-cover">
                    </div>
                    {% endif %}
                    <div class="p-6">
                        <h3 class="text-2xl mb-2 font-thin text-primary">{{ recipe.title }}</h3>
                        <p class="text-sm text-custom-text mb-2">{{ recipe.date | date: "%d. %B %Y" }}</p>
                        <p class="mb-4 text-custom-text opacity-75">{{ recipe.description }}</p>
                        <span class="inline-block text-primary hover:text-secondary">Læs opskrift →</span>
                    </div>
                </a>
                {% endunless %}
            {% endfor %}
        </div>
    </section>

    <!-- Blog Section -->
    <section>
        <h2 class="text-3xl mb-6 text-center font-thin text-primary">Seneste Blog Indlæg</h2>
        <div id="blog" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {% for post in site.blog %}
                {% unless post.published == false %}
                <a href="{{ post.url | relative_url }}" class="bg-white rounded-lg overflow-hidden shadow-lg block hover:shadow-xl transition-shadow duration-300 hover:border-primary border-2 border-transparent">
                    {% if post.image %}
                    <div class="aspect-w-16 aspect-h-9 overflow-hidden">
                        <img src="{{ site.baseurl }}{{ post.image }}" 
                             alt="{{ post.title }}" 
                             class="w-full h-48 object-cover">
                    </div>
                    {% endif %}
                    <div class="p-6">
                        <h3 class="text-2xl mb-2 font-thin text-primary">{{ post.title }}</h3>
                        <p class="text-sm text-custom-text mb-2">{{ post.date | date: "%d. %B %Y" }}</p>
                        <p class="mb-4 text-custom-text opacity-75">{{ post.description }}</p>
                        <span class="inline-block text-primary hover:text-secondary">Læs mere →</span>
                    </div>
                </a>
                {% endunless %}
            {% endfor %}
        </div>
    </section>
</main> 