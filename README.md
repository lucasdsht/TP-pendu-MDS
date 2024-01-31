# Le pendu

Vous allez coder le jeu du pendu.

3 pages dans une nav permettront de naviguer de page en page:

- home : affiche la règle du jeu , un visuel pourquoi pas et tout ce que vous trouverez intéressant d'afficher
- jouer : le jeu se passera ici
- statistiques : affichage des statistiques de jeu
- gérez la page 404


## Le jeu

Trouver une API qui renvoie un mot au hasard :
https://www.dicolink.com
https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json

Toutes les lettres de l'alphabet seront affichées colorées, lorsqu'un utilisateur clique sur l'une d'entre elle, elle devient grisée et les mêmes lettres présentes dans le mot mytère apparaissent.

Si la lettre n'est pas présente dans le mot alors la construction de la potence avance !


### Victoire
Lorsque toutes les lettres ont été devinées, alors un message de victoire apparaît avec un nouvel input permettant de saisir le nom du gagnant.

### Echec
Lorsque la potence est terminée alors le joueur a perdu, la défaite s'affiche.


## La page statistiques

Elle affiche le pseudo des personnes qui ont gagné, classées par ordre alphabétique.
Elle affiche dessous, le nombre de fois où le mot n'a pas été trouvé.

Les données de cette page seront stockées en localstorage. Vous pouvez utiliser un composant react pour faire ceci.

## Bonus
Laissez libre court à votre imagination, un système de compte de points par exemple, un timer ou si vous êtes plutôt genre créatif les lettres qui se retournent avec un effet de carte que l'on retourne ...

### Exemple pour le comptage des points:

Rajouter un input qui permet au joueur de faire une proposition avant que toutes les lettres ne soient retournées:
Et:

- si le joueur trouve le mot uniquement grâce aux lettres : 2 points
- si le joueur propose un mot et que c'est le bon : 2 points + 1 point par lettre restante
- si le joueur se trompe de mot alors -2 points

Lorsqu'un mot est deviné alors on propose au joueur d'en deviner un autre et le score s'accumule.
Un bouton lui propose de stopper sa partie et d'enregistrer son pseudo pour apparaître dans les stats.

### A vos claviers !

On peut aussi  jouer avec le clavier, on appuie sur une lettre du clavier, c'est comme si on cliquait dessus !
