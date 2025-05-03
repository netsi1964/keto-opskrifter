# Keto Opskrifter

En samling af lækre keto-venlige opskrifter bygget med Jekyll og GitHub Pages.

## Indholdsfortegnelse

1. [Kom i gang](#kom-i-gang)
   - [Dette skal du bruge](#dette-skal-du-bruge)
   - [Installation trin-for-trin](#installation-trin-for-trin)
2. [Fejlfinding](#fejlfinding)
   - [Almindelige problemer](#almindelige-problemer)
3. [Udvikling](#udvikling)
   - [Teknisk setup](#teknisk-setup)
   - [Mappestruktur](#mappestruktur)
4. [Opskrifter](#opskrifter)
5. [Bidrag](#bidrag)
6. [Om projektet](#om-projektet)
7. [Teknologier](#teknologier)

## Kom i gang

### Dette skal du bruge

- Ruby (2.7.0 eller nyere)
- Bundler
- Jekyll

### Installation trin-for-trin

1. Installer Ruby på din computer:
   - **På Mac**: 
     ```bash
     brew install ruby
     ```
   - **På Windows**: 
     Hent og installer fra [RubyInstaller](https://rubyinstaller.org/)
   - **På Linux**: 
     ```bash
     sudo apt-get install ruby-full
     ```

2. Åbn din terminal og installer Bundler:
```bash
gem install bundler
```

3. Hent koden til din computer:
```bash
git clone https://github.com/netsi1964/keto-opskrifter.git
cd keto-opskrifter
```

4. Installer alle nødvendige pakker:
```bash
bundle install
```

5. Start hjemmesiden:
```bash
bundle exec jekyll serve
```

6. Se siden i din browser:
```
http://127.0.0.1:4000/keto-opskrifter/
```

## Fejlfinding

### Almindelige problemer

Hvis noget ikke virker, så prøv disse løsninger:

1. **Forkert Ruby version?**
   Kør disse kommandoer:
   ```bash
   rbenv install 2.7.0
   rbenv global 2.7.0
   ```

2. **Problemer med bundle install?**
   Prøv at opdatere først:
   ```bash
   bundle update
   bundle install
   ```

3. **Siden starter ikke?**
   - Se om port 4000 er ledig
   - Prøv en anden port sådan her:
     ```bash
     bundle exec jekyll serve --port 4001
     ```

4. **Pakke-konflikter?**
   Ryd op og installer igen:
   ```bash
   gem cleanup
   bundle install
   ```

## Udvikling

### Teknisk setup

Siden er bygget med:
- Jekyll til at lave statiske sider
- GitHub Pages til at vise siden online
- Tailwind CSS til styling
- Custom CSS variabler til farver

Sådan kommer du i gang med at kode:
1. Find markdown filerne i `_opskrifter/` mappen
2. Ret i filerne - siden opdaterer automatisk
3. Genindlæs browseren for at se dine ændringer
4. Gem dine ændringer på GitHub med commit og push

### Mappestruktur

```
keto-opskrifter/
├── _layouts/          # Sidernes udseende og templates
├── _includes/         # Genanvendelige komponenter
├── _posts/           # Blog indlæg
├── _opskrifter/      # Opskrift samlingen
├── assets/
│   ├── images/      # Billeder til opskrifter og indlæg
│   └── css/         # Styling filer
├── blog.html         # Blog oversigtsside
├── opskrifter.html   # Opskrifter oversigtsside
├── index.html        # Forsiden
├── _config.yml       # Jekyll konfiguration
├── package.json      # Node.js afhængigheder
└── tailwind.config.js # Tailwind CSS konfiguration
```

## Opskrifter

Se alle opskrifter på [https://netsi1964.github.io/keto-opskrifter/](https://netsi1964.github.io/keto-opskrifter/)

Nuværende opskrifter:
- Keto-venligt rugbrød
- (Flere opskrifter kommer snart)

## Bidrag

Har du en god keto-opskrift? Sådan bidrager du:
1. Fork dette repository
2. Tilføj din opskrift i `_opskrifter` mappen
3. Send en pull request

## Om projektet

- **Udvikler**: Sten Hougaard
- **Twitter**: [@netsi1964](https://twitter.com/netsi1964)
- **Website**: [https://netsi1964.github.io/keto-opskrifter/](https://netsi1964.github.io/keto-opskrifter/)

## Teknologier

Her er en forklaring af de vigtigste teknologier der bruges i projektet:

### Ruby

Ruby er et dynamisk, objektorienteret programmeringssprog skabt af Yukihiro "Matz" Matsumoto i 1995. Det er kendt for sin enkle og læsbare syntaks, der gør det nemt at lære og behageligt at arbejde med.

- **Version:** 3.0.0 eller nyere
- **Formål:** Kører Jekyll og håndterer opsætning
- [Læs mere om Ruby](https://www.ruby-lang.org/)

### Jekyll

Jekyll er en statisk site generator skrevet i Ruby. Det tager tekst skrevet i markdown format og bygger et statisk HTML website.

- **Hovedfunktioner:**
  - Konverterer Markdown til HTML
  - Understøtter temaer og layouts
  - Indbygget udviklerserver
  - GitHub Pages integration
- [Jekyll dokumentation](https://jekyllrb.com/)

### Bundler

Bundler er et værktøj til at håndtere Ruby gems (pakker) og deres afhængigheder.

- **Hovedformål:**
  - Holder styr på projektets gems
  - Sikrer konsistente versioner
  - Forenkler installation
- [Læs mere om Bundler](https://bundler.io/)

### GitHub Pages

GitHub Pages er en gratis hosting service fra GitHub, der tager dine repository filer og publicerer et website.

- **Fordele:**
  - Gratis hosting
  - Automatisk bygning af Jekyll sites
  - Nem deployment
  - SSL/HTTPS understøttelse
- [GitHub Pages dokumentation](https://pages.github.com/)

### Markdown

Markdown er et let markup sprog designet til at være nemt at læse og skrive.

- **Anvendelse:**
  - Skrive opskrifter
  - Dokumentation
  - Formatering af tekst
- [Markdown Guide](https://www.markdownguide.org/) 