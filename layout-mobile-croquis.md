# CROQUIS LAYOUT MOBILE EXISTANT

```
┌─────────────────────────────────────────────────────────────┐
│                    HEADER MOBILE (FIXE)                     │
│  ┌─────────────┐                              ┌─────────┐  │
│  │    LOGO     │                              │   ☰    │  │
│  │  ATN SOUL   │                              │ MENU   │  │
│  └─────────────┘                              └─────────┘  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                    GRILLE PRINCIPALE                    │ │
│  │                     (70vh hauteur)                      │ │
│  │                                                         │ │
│  │  ┌─────────────┐        ┌─────────────────────────────┐ │ │
│  │  │   COLONNE 1 │        │         COLONNE 2           │ │ │
│  │  │   CACHÉE    │        │      (4fr - 40% largeur)    │ │ │
│  │  │ display:none│        │                             │ │ │
│  │  │             │        │  ┌─────────────────────────┐ │ │ │
│  │  │             │        │  │        "ABOUT"          │ │ │ │
│  │  │             │        │  │                         │ │ │ │
│  │  │             │        │  │  Padding:               │ │ │ │
│  │  │             │        │  │  10px haut              │ │ │ │
│  │  │             │        │  │  0px côtés              │ │ │ │
│  │  │             │        │  │  50px bas               │ │ │ │
│  │  │             │        │  └─────────────────────────┘ │ │ │
│  │  └─────────────┘        └─────────────────────────────┘ │ │
│  │                                                         │ │
│  │  ┌─────────────────────────────────────────────────────┐ │ │
│  │  │              COLONNE 3                              │ │ │
│  │  │         (6fr - 60% largeur)                         │ │ │
│  │  │                                                     │ │ │
│  │  │  ┌─────────────────────────────────────────────────┐ │ │ │
│  │  │  │            SLIDER D'IMAGES                       │ │ │ │
│  │  │  │                                                 │ │ │ │
│  │  │  │  Padding:                                       │ │ │ │
│  │  │  │  20px haut/gauche                               │ │ │ │
│  │  │  │  2px droite                                     │ │ │ │
│  │  │  │  20px bas                                       │ │ │ │
│  │  │  │                                                 │ │ │ │
│  │  │  │  [Image 1] [Image 2] [Image 3]                  │ │ │ │
│  │  │  │  ◀───────────────▶                              │ │ │ │
│  │  │  └─────────────────────────────────────────────────┘ │ │ │
│  │  └─────────────────────────────────────────────────────┘ │ │
│  └─────────────────────────────────────────────────────────┘ │
│                                                             │
│  ┌─────────────────────────────────────────────────────────┐ │
│  │                ESPACE RESTANT                          │ │
│  │              (30vh environ)                            │ │
│  └─────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘

DÉTAILS TECHNIQUES:
- Grid: 4fr 6fr (40% / 60%)
- Gap: 6px entre colonnes
- Hauteur totale: 70vh
- Header fixe en haut
- Espace compensateur pour header: 40px
```

## STRUCTURE RESPONSIVE

### DESKTOP (>1024px)
```
┌─────────┬─────────────────┬─────────────────┐
│ COLONNE │    COLONNE 2    │    COLONNE 3    │
│    1    │   (41% largeur) │   (41% largeur) │
│ (18%)   │                 │                 │
│ Rouge   │                 │                 │
│ Logo    │                 │                 │
│ Nav     │                 │                 │
│ Audio   │                 │                 │
└─────────┴─────────────────┴─────────────────┘
```

### MOBILE (≤1024px)
```
┌─────────────────────────────────────────────┐
│              HEADER MOBILE                  │
├─────────────┬───────────────────────────────┤
│   COLONNE   │         COLONNE 2             │
│     1       │      (4fr - 40%)              │
│  CACHÉE     │                               │
│ display:none│                               │
├─────────────┼───────────────────────────────┤
│             │         COLONNE 3             │
│             │      (6fr - 60%)              │
│             │    SLIDER D'IMAGES            │
└─────────────┴───────────────────────────────┘
```

## ÉLÉMENTS MOBILES

### Header Mobile
- Position: fixed, top: 0
- Logo ATN SOUL (120px largeur)
- Bouton menu hamburger (☰)
- Background: blanc
- Border-bottom: 1px solid #e5e5e5

### Menu Mobile (quand ouvert)
- Position: fixed, top: 60px
- Background: blanc
- Navigation verticale
- Liens streaming (Apple Music, Spotify)
- Box-shadow: 0 2px 10px rgba(0,0,0,0.1)
