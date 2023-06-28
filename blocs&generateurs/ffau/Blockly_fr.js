'use strict';
goog.provide('Blockly.Msg.fr');
goog.require('Blockly.Msg');

Blockly.Msg.INOUT_HIGH_LEVEL="1(état haut)";
Blockly.Msg.INOUT_LOW_LEVEL="0(état bas)";
Blockly.Msg.ARD_TYPE_CHAR="caractère";
Blockly.Msg.ARD_TYPE_TEXT="texte";
Blockly.Msg.ARD_TYPE_BOOL="binaire";
Blockly.Msg.ARD_TYPE_SHORT="octet";
Blockly.Msg.ARD_TYPE_NUMBER="nombre entier";
Blockly.Msg.ARD_TYPE_LONG="nombre entier long";
Blockly.Msg.ARD_TYPE_DECIMAL="nombre à virgule";
Blockly.Msg.ARD_TYPE_ARRAY="tableau";
Blockly.Msg.ARD_TYPE_NULL="vide";
Blockly.Msg.ARD_TYPE_UNDEF="non défini";
Blockly.Msg.ARD_TYPE_VOLATILE="entier volatile";
Blockly.Msg.ARD_TYPE_CHILDBLOCKMISSING="typage manquant sur un bloc";
Blockly.Msg.ARDUINO_BETWEEN="nombre aléatoire entre";
Blockly.Msg.ARDUINO_BETWEEN_AND="et";
Blockly.Msg.ARDUINO_VAR_DECLARE="déclare";
Blockly.Msg.ARDUINO_VAR_AS="en tant que";
Blockly.Msg.ARDUINO_VAR_VAL="de valeur";
Blockly.Msg.base_def_const="définir";
Blockly.Msg.base_define_const="qui est équivalent à";
Blockly.Msg.base_define_const_tooltip = "permet au programmeur de donner un nom à une valeur quelconque";
Blockly.Msg.type = "défini une valeur comme le type sélectionné";
Blockly.Msg.ADD_COMMENT = "Ajouter un commentaire";
Blockly.Msg.CHANGE_VALUE_TITLE = "Modifier la valeur :";
Blockly.Msg.CLEAN_UP = "Nettoyer les blocs";
Blockly.Msg.COLLAPSE_ALL = "Réduire les blocs";
Blockly.Msg.COLLAPSE_BLOCK = "Réduire le bloc";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE="suivant que";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT="par défaut";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK="vaut";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR="si la variable vaut";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO="faire";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1="Si une valeur est vraie alors exécuter les commandes suivantes";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2="Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3="Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4="Si une valeur est vraie alors exécuter le premier bloc de commandes. Sinon exécuter le bloc suivant de commandes si la condition est vraie.  Si aucune condition n'est vérifiée, alors faire le bloc de commandes par défaut";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "quitter la boucle";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "passer à l’itération suivante";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = "Sortir de cette boucle";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = "Sauter le reste de cette boucle, et poursuivre avec l’itération suivante";
Blockly.Msg.CONTROLS_FLOW_STATEMENTS_WARNING = "Attention : Ce bloc doit être utilisé dans une boucle";
Blockly.Msg.CONTROLS_FOREACH_TITLE = "pour chaque élément %1 de la liste %2";
Blockly.Msg.CONTROLS_FOREACH_TOOLTIP = "Pour chaque élément d’une liste, assigner la valeur de l’élément à la variable %1, puis exécuter des instructions";
Blockly.Msg.CONTROLS_FOR_TITLE = "pour %1 allant de %2 à %3 par pas de %4";
Blockly.Msg.CONTROLS_FOR_TOOLTIP = "Faire prendre à la variable %1 les valeurs depuis le nombre de début jusqu’au nombre de fin, en s’incrémentant du pas spécifié, et exécuter les instructions spécifiées";
Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP = "Ajouter une condition";
Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP = "Ajouter une condition finale";
Blockly.Msg.CONTROLS_IF_IF_TOOLTIP = "Ajouter, supprimer ou réordonner";
Blockly.Msg.CONTROLS_IF_MSG_ELSE = "sinon";
Blockly.Msg.CONTROLS_IF_MSG_ELSEIF = "sinon si";
Blockly.Msg.CONTROLS_IF_MSG_IF = "si";
Blockly.Msg.CONTROLS_IF_TOOLTIP_1 = "Si une valeur est vraie, alors exécuter certains ordres";
Blockly.Msg.CONTROLS_IF_TOOLTIP_2 = "Si une valeur est vraie, alors exécuter le premier bloc d’ordres. Sinon, exécuter le second bloc d’ordres";
Blockly.Msg.CONTROLS_IF_TOOLTIP_3 = "Si la première valeur est vraie, alors exécuter le premier bloc d’ordres. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’ordres";
Blockly.Msg.CONTROLS_IF_TOOLTIP_4 = "Si la première valeur est vraie, alors exécuter le premier bloc d’ordres. Sinon, si la seconde valeur est vraie, exécuter le second bloc d’ordres. Si aucune des valeurs n’est vraie, exécuter le dernier bloc d’ordres";
Blockly.Msg.CONTROLS_REPEAT_INPUT_DO = "faire";
Blockly.Msg.CONTROLS_REPEAT_TITLE = "répéter %1 fois";
Blockly.Msg.CONTROLS_REPEAT_TOOLTIP = "Exécuter des instructions plusieurs fois";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "répéter jusqu’à";
Blockly.Msg.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "répéter tant que";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = "Tant qu’une valeur est fausse, alors exécuter des instructions";
Blockly.Msg.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = "Tant qu’une valeur est vraie, alors exécuter des instructions";
Blockly.Msg.DELETE_ALL_BLOCKS = "Supprimer ces %1 blocs ?";
Blockly.Msg.DELETE_BLOCK = "Supprimer le bloc";
Blockly.Msg.DELETE_VARIABLE = "Supprimer la variable %1";
Blockly.Msg.DELETE_VARIABLE_CONFIRMATION = "Supprimer %1 utilisations de la variable %2 ?";
Blockly.Msg.DELETE_X_BLOCKS = "Supprimer %1 blocs";
Blockly.Msg.DISABLE_BLOCK = "Désactiver le bloc";
Blockly.Msg.DUPLICATE_BLOCK = "Dupliquer";
Blockly.Msg.ENABLE_BLOCK = "Activer le bloc";
Blockly.Msg.EXPAND_ALL = "Développer les blocs";
Blockly.Msg.EXPAND_BLOCK = "Développer le bloc";
Blockly.Msg.EXTERNAL_INPUTS = "Entrées externes";
Blockly.Msg.HELP = "Aide";
Blockly.Msg.INLINE_INPUTS = "Entrées en ligne";
Blockly.Msg.LISTS_CREATE1 = "créer une liste";
Blockly.Msg.LISTS_CREATE2 = "avec";
Blockly.Msg.LISTS_CREATE_TOOLTIP = "Créé une liste avec le nombre d'éléments désiré";
Blockly.Msg.LISTS_append = 'ajouter %1 à la fin de %2';
Blockly.Msg.LISTS_append_TOOLTIP = 'ajoute un élément à la fin de la liste';
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "liste";
Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP = "Ajouter, supprimer, ou réordonner";
Blockly.Msg.LISTS_CREATE_WITH_INPUT_WITH = "créer une liste avec";
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Ajouter un élément";
Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP = "retourne un tableau ou liste avec un nombre quelconque d’éléments";
Blockly.Msg.LISTS_GET = "l'élément";
Blockly.Msg.LISTS_GET_INDEX_FROM_END = "# depuis la fin";
Blockly.Msg.LISTS_GET_INDEX_FROM_START = "#";  // untranslated
Blockly.Msg.LISTS_GET_INDEX_GET = "Obtenir";
Blockly.Msg.LISTS_GET_INDEX_GET_REMOVE = "obtenir et supprimer";
Blockly.Msg.LISTS_GET_INDEX_LAST = "dernier";
Blockly.Msg.LISTS_GET_INDEX_RANDOM = "aléatoire";
Blockly.Msg.LISTS_GET_INDEX_REMOVE = "supprimer";
Blockly.Msg.LISTS_GET_INDEX_TAIL = "";  // untranslated
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "retourne le premier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM = "retourne l’élément à la position indiquée dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "retourne le dernier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "retourne un élément au hasard dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST = "Supprime et retourne le premier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM = "Supprime et retourne l’élément à la position indiquée dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST = "Supprime et retourne le dernier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM = "Supprime et retourne un élément au hasard dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Supprime le premier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM = "Supprime l’élément à la position indiquée dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Supprime le dernier élément dans une liste";
Blockly.Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Supprime un élément au hasard dans une liste";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_END = "jusqu’à # depuis la fin";
Blockly.Msg.LISTS_GET_SUBLIST_END_FROM_START = "jusqu’à #";
Blockly.Msg.LISTS_GET_SUBLIST_END_LAST = "jusqu’à la fin";
Blockly.Msg.LISTS_GET_SUBLIST_START_FIRST = "obtenir la sous-liste depuis le début";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_END = "obtenir la sous-liste depuis # depuis la fin";
Blockly.Msg.LISTS_GET_SUBLIST_START_FROM_START = "obtenir la sous-liste depuis #";
Blockly.Msg.LISTS_GET_SUBLIST_TAIL = "";  // untranslated
Blockly.Msg.LISTS_GET_SUBLIST_TOOLTIP = "Crée une copie de la partie spécifiée d’une liste";
Blockly.Msg.LISTS_INDEX_FROM_END_TOOLTIP = "%1 est le dernier élément";
Blockly.Msg.LISTS_INDEX_FROM_START_TOOLTIP = "%1 est le premier élément";
Blockly.Msg.LISTS_INDEX_OF_FIRST = "trouver la première occurrence de l’élément";
Blockly.Msg.LISTS_INDEX_OF_LAST = "trouver la dernière occurrence de l’élément";
Blockly.Msg.LISTS_INDEX_OF_TOOLTIP = "retourne l’index de la première/dernière occurrence de l’élément dans la liste. retourne %1 si l'élément n'est pas trouvé";
Blockly.Msg.LISTS_INLIST = "dans la liste";
Blockly.Msg.LISTS_ISEMPTY_TITLE = "%1 est vide";
Blockly.Msg.LISTS_ISEMPTY_TOOLTIP = "retourne vrai si la liste est vide";
Blockly.Msg.LISTS_LENGTH_TITLE = "longueur de %1";
Blockly.Msg.LISTS_LENGTH_TOOLTIP = "retourne la longueur d’une liste";
Blockly.Msg.LISTS_REPEAT_TITLE = "créer une liste avec l’élément %1 répété %2 fois";
Blockly.Msg.LISTS_REPEAT_TOOLTIP = "Crée une liste consistant en la valeur fournie répétée le nombre de fois indiqué";
Blockly.Msg.LISTS_SET_INDEX_INPUT_TO = "comme";
Blockly.Msg.LISTS_of = "de";
Blockly.Msg.LISTS_SET_INDEX_SET = "mettre l'élément"
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST = "Insère l’élément au début d’une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM = "Insère l’élément à la position indiquée dans une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST = "Ajouter l’élément à la fin d’une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM = "Insère l’élément au hasard dans une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Fixe le premier élément dans une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM = "Met à jour l’élément à la position indiquée dans une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Fixe le dernier élément dans une liste";
Blockly.Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Fixe un élément au hasard dans une liste";
Blockly.Msg.LOGIC_BOOLEAN_FALSE = "faux";
Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP = "retourne un état logique 0 ou 1";
Blockly.Msg.LOGIC_BOOLEAN_TRUE = "vrai";
Blockly.Msg.compare = "retourne vrai si une valeur est bien dans un intervalle";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ = "retourne vrai si les deux entrées sont égales";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT = "retourne vrai si la première entrée est plus grande que la seconde";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE = "retourne vrai si la première entrée est plus grande ou égale à la seconde";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT = "retourne vrai si la première entrée est plus petite que la seconde";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE = "retourne vrai si la première entrée est plus petite ou égale à la seconde";
Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ = "retourne vrai si les deux entrées sont différentes";
Blockly.Msg.LOGIC_NEGATE_TITLE = "pas %1";
Blockly.Msg.LOGIC_NEGATE_TOOLTIP = "retourne vrai si l’entrée est fausse. retourne faux si l’entrée est vraie";
Blockly.Msg.LOGIC_NULL = "nul";
Blockly.Msg.LOGIC_NULL_TOOLTIP = "retourne nul";
Blockly.Msg.LOGIC_OPERATOR = [["et","&&"],["ou","||"]];
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_AND = "retourne vrai si les deux entrées sont vraies";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_OR = "retourne vrai si au moins une des entrées est vraie";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_xor = "retourne vrai si seulement une des entrées est vraie";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftR = "réalise un décalage à droite\n";
Blockly.Msg.LOGIC_OPERATION_TOOLTIP_shiftL = "réalise un décalage à gauche";
Blockly.Msg.LOGIC_TERNARY_CONDITION = "test";
Blockly.Msg.LOGIC_TERNARY_IF_FALSE = "si faux";
Blockly.Msg.LOGIC_TERNARY_IF_TRUE = "si vrai";
Blockly.Msg.LOGIC_TERNARY_TOOLTIP = "Vérifier la condition dans 'test'. Si elle est vraie, retourne la valeur 'si vrai' ; sinon retourne la valeur 'si faux'";
Blockly.Msg.MATH_ADDITION_SYMBOL = "+";  // untranslated
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD = "retourne la somme des deux nombres";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "retourne le quotient des deux nombres";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS = "retourne la différence des deux nombres";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "retourne le produit des deux nombres";
Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER = "retourne le premier nombre élevé à la puissance du second";
Blockly.Msg.MATH_CHANGE_TITLE = "ajouter à la variable %1, %2";
Blockly.Msg.MATH_CHANGE_TOOLTIP = "Ajouter une valeur à la variable %1";
Blockly.Msg.MATH_CONSTANT_TOOLTIP = "retourne une des constantes courantes : π (3.141…), e (2.718…), φ (1.618…), sqrt(2) (1.414…), sqrt(½) (0.707…), ou ∞ (infini)";
Blockly.Msg.MATH_CONSTRAIN_TITLE = "contraindre %1 entre %2 et %3";
Blockly.Msg.MATH_CONSTRAIN_TOOLTIP = "Contraindre un nombre à être entre les limites spécifiées (incluses)";
Blockly.Msg.MATH_DIVISION_SYMBOL = "÷";  // untranslated
Blockly.Msg.MATH_IS_DIVISIBLE_BY = "est divisible par";
Blockly.Msg.MATH_IS_EVEN = "est pair";
Blockly.Msg.MATH_IS_NEGATIVE = "est négatif";
Blockly.Msg.MATH_IS_ODD = "est impair";
Blockly.Msg.MATH_IS_POSITIVE = "est positif";
Blockly.Msg.MATH_IS_PRIME = "est premier";
Blockly.Msg.MATH_IS_TOOLTIP = "retourne vrai ou faux si un nombre est pair, impair, premier, entier, positif, négatif, ou s’il est divisible par un certain nombre";
Blockly.Msg.MATH_IS_WHOLE = "est entier";
Blockly.Msg.MATH_MODULO_TITLE = "reste de %1 ÷ %2";
Blockly.Msg.MATH_MODULO_TOOLTIP = "retourne le reste de la division euclidienne des deux nombres";
Blockly.Msg.MATH_MULTIPLICATION_SYMBOL = "×";  // untranslated
Blockly.Msg.MATH_NUMBER_TOOLTIP = "Un nombre";
Blockly.Msg.MATH_ONLIST_HELPURL = "";  // untranslated
Blockly.Msg.MATH_ONLIST_OPERATOR_AVERAGE = "moyenne de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_MAX = "maximum de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_MEDIAN = "médiane de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_MIN = "minimum de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_MODE = "majoritaires de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_RANDOM = "élément aléatoire de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_STD_DEV = "écart-type de la liste";
Blockly.Msg.MATH_ONLIST_OPERATOR_SUM = "somme de la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_AVERAGE = "retourne la moyenne (arithmétique) des valeurs numériques dans la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MAX = "retourne le plus grand nombre dans la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MEDIAN = "retourne le nombre médian de la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MIN = "retourne le plus petit nombre dans la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_MODE = "retourne une liste des élément(s) le(s) plus courant(s) dans la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_RANDOM = "retourne un élément dans la liste au hasard";
Blockly.Msg.MATH_ONLIST_TOOLTIP_STD_DEV = "retourne l’écart-type de la liste";
Blockly.Msg.MATH_ONLIST_TOOLTIP_SUM = "retourne la somme de tous les nombres dans la liste";
Blockly.Msg.MATH_POWER_SYMBOL = "^";  // untranslated
Blockly.Msg.MATH_RANDOM_FLOAT_TITLE_RANDOM = "fraction aléatoire";
Blockly.Msg.MATH_RANDOM_FLOAT_TOOLTIP = "retourne une fraction aléatoire entre 0.0 (inclus) et 1.0 (exclus)";
Blockly.Msg.MATH_RANDOM_INT_TITLE = "entier aléatoire entre %1 et %2";
Blockly.Msg.MATH_RANDOM_INT_TOOLTIP = "retourne un entier aléatoire entre les deux limites spécifiées, incluses";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUND = "arrondir";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDDOWN = "arrondir à l’inférieur";
Blockly.Msg.MATH_ROUND_OPERATOR_ROUNDUP = "arrondir au supérieur";
Blockly.Msg.MATH_ROUND_TOOLTIP = "Arrondir un nombre au-dessus ou au-dessous";
Blockly.Msg.MATH_SINGLE_OP_ABSOLUTE = "valeur absolue";
Blockly.Msg.MATH_SINGLE_OP_ROOT = "racine carrée";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS = "retourne la valeur absolue d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_EXP = "retourne e à la puissance d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LN = "retourne le logarithme naturel d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_LOG10 = "retourne le logarithme base 10 d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_NEG = "retourne l’opposé d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_POW10 = "retourne 10 à la puissance d’un nombre";
Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT = "retourne la racine carrée d’un nombre";
Blockly.Msg.MATH_SUBTRACTION_SYMBOL = "-";  // untranslated
Blockly.Msg.MATH_TRIG_ACOS = "acos";  // untranslated
Blockly.Msg.MATH_TRIG_ASIN = "asin";  // untranslated
Blockly.Msg.MATH_TRIG_ATAN = "atan";  // untranslated
Blockly.Msg.MATH_TRIG_COS = "cos";  // untranslated
Blockly.Msg.MATH_TRIG_SIN = "sin";  // untranslated
Blockly.Msg.MATH_TRIG_TAN = "tan";  // untranslated
Blockly.Msg.MATH_TRIG_TOOLTIP_ACOS = "retourne l’arccosinus d’un nombre";
Blockly.Msg.MATH_TRIG_TOOLTIP_ASIN = "retourne l’arcsinus d’un nombre";
Blockly.Msg.MATH_TRIG_TOOLTIP_ATAN = "retourne l’arctangente d’un nombre";
Blockly.Msg.MATH_TRIG_TOOLTIP_COS = "retourne le cosinus d’un angle en degrés";
Blockly.Msg.MATH_TRIG_TOOLTIP_SIN = "retourne le sinus d’un angle en degrés";
Blockly.Msg.MATH_TRIG_TOOLTIP_TAN = "retourne la tangente d’un angle en degrés";
Blockly.Msg.NEW_VARIABLE = "Créer une variable";
Blockly.Msg.NEW_VARIABLE_TITLE = "Nouveau nom de la variable ";
Blockly.Msg.ORDINAL_NUMBER_SUFFIX = "";  // untranslated
Blockly.Msg.PROCEDURES_CALLNORETURN_TOOLTIP = "Exécuter la fonction %1 définie par l’utilisateur";
Blockly.Msg.PROCEDURES_CALLRETURN_TOOLTIP = "Exécuter la fonction %1 définie par l’utilisateur et utiliser son résultat";
Blockly.Msg.PROCEDURES_CREATE_DO = "Créer %1";
Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT = "Décrire cette fonction";
Blockly.Msg.PROCEDURES_DEFNORETURN_DO = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE = "faire";
Blockly.Msg.PROCEDURES_DEFNORETURN_TITLE = "";
Blockly.Msg.PROCEDURES_DEFNORETURN_TOOLTIP = "Crée une procédure ou fonction sans retour de donnée";
Blockly.Msg.PROCEDURES_DEFRETURN_RETURN = "retourner";
Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP = "Crée une procédure ou fonction avec un renvoi de donnée";
Blockly.Msg.PROCEDURES_DEF_DUPLICATE_WARNING = "Attention : Cette fonction a des paramètres en double";
Blockly.Msg.PROCEDURES_HIGHLIGHT_DEF = "Surligner la définition de la fonction";
Blockly.Msg.PROCEDURES_IFRETURN_TOOLTIP = "retourne la valeur indiquée";
Blockly.Msg.PROCEDURES_IFRETURN_WARNING = "Attention : Ce bloc doit être utilisé dans une définition de procédure ou fonction";
Blockly.Msg.PROCEDURES_MUTATORARG_TYPE = "de type";
Blockly.Msg.PROCEDURES_MUTATORARG_TOOLTIP = "Ajouter une entrée à la procédure ou fonction";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TITLE = "arguments en entrée";
Blockly.Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP = "Ajouter, supprimer, ou réarranger";
Blockly.Msg.REDO = "Refaire";
Blockly.Msg.REMOVE_COMMENT = "Supprimer un commentaire";
Blockly.Msg.RENAME_VARIABLE = "Renommer la variable '%1'";
Blockly.Msg.RENAME_VARIABLE_TITLE = "Renommer les variables '%1' ";
//tableau
Blockly.Msg.ARRAY_CREATE_EMPTY_TITLE='vide !';
Blockly.Msg.tab_create="Créer le bloc 'élément du tableau %1'";
Blockly.Msg.tab_create_fix="Créer le bloc 'mettre un élément du tableau %1 à'";
Blockly.Msg.ARRAY_CREATE_WITH="constituée de";
Blockly.Msg.ARRAY_taille="taille";
Blockly.Msg.ARRAY_contenu="qui contient";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TITLE_ADD="liste ou tableau";
Blockly.Msg.ARRAY_CREATE_WITH_CONTAINER_TOOLTIP="Ajouter, supprimer, ou réordonner";
Blockly.Msg.ARRAY_CREATE_WITH_INPUT_WITH=" les éléments";
Blockly.Msg.ARRAY_CREATE_WITH_ITEM_TITLE="élément";
Blockly.Msg.ARRAY_CREATE_WITH_TOOLTIP="retoune une liste avec un certain nombre d'éléments";
Blockly.Msg.ARRAY_GETINDEX_ITEM="l'élément du tableau";
Blockly.Msg.ARRAY_GETINDEX_ITEM2="du tableau";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP1="retourne la valeur stockée dans la liste";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP2="créé un tableau du type sélectionné";
Blockly.Msg.ARRAY_GETINDEX_TOOLTIP3="fixe un élément de la liste ou tableau à la valeur indiquée";
Blockly.Msg.ARRAY_create="définir le tableau";
Blockly.Msg.ARRAY_fixe="mettre l'élément du tableau";
Blockly.Msg.ARRAY_dim="de dimension";
Blockly.Msg.ARRAY_index="index";
Blockly.Msg.ARRAY_append_tooltip="ajouter un élément à la fin de la liste";
Blockly.Msg.ARRAY_append_url="";
Blockly.Msg.size="taille du tableau";
Blockly.Msg.size_TOOLTIP="retourne la taille du tableau";
//texte
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Ajouter un élément";
Blockly.Msg.TEXT_CREATE_JOIN_TITLE_JOIN = "texte";
Blockly.Msg.TEXT_CREATE_JOIN_TOOLTIP = "Ajouter, supprimer, ou réordonner";
Blockly.Msg.TEXT_ISEMPTY_TITLE = "%1 est vide";
Blockly.Msg.TEXT_ISEMPTY_TOOLTIP = "retourne vrai si le texte fourni est vide";
Blockly.Msg.TEXT_JOIN_TITLE_CREATEWITH = "texte créé avec";
Blockly.Msg.TEXT_JOIN_TOOLTIP = "retourne un texte en agrégeant un nombre quelconque d’éléments";
Blockly.Msg.TEXT_LENGTH_TITLE = "longueur de %1";
Blockly.Msg.TEXT_LENGTH_TOOLTIP = "retourne le nombre de lettres (espaces compris) du texte fourni";
Blockly.Msg.TEXT_PRINT_TITLE = "afficher %1";
Blockly.Msg.TEXT_PRINT_TOOLTIP = "Afficher le texte, le nombre ou une autre valeur spécifié";
Blockly.Msg.TEXT_TEXT_TOOLTIP = "Une lettre, un mot ou une phrase";
//other
Blockly.Msg.discard= "Supprimer tous les blocs pour commencer un nouveau programme ?";
Blockly.Msg._AT = "à";
Blockly.Msg.TODAY = "Aujourd'hui";
Blockly.Msg.UNDO = "Annuler";
Blockly.Msg.VARIABLES_AS="de type";
Blockly.Msg.VARIABLES_DEFAULT_NAME = "var";
Blockly.Msg.VARIABLES_GET_CREATE_SET = "Créer le bloc 'mettre la variable %1 à'";
Blockly.Msg.VARIABLES_GET_TOOLTIP = "retourne la valeur de cette variable";
Blockly.Msg.VARIABLES_SET = "mettre la variable";
Blockly.Msg.VARIABLES_SET_CREATE_GET = "Créer le bloc %1";
Blockly.Msg.VARIABLES_SET_TOOLTIP = "Fixe la variable à la valeur indiquée";
Blockly.Msg.var_set_init="déclarer la variable";
Blockly.Msg.var_set_init_tooltip="Déclare et initialise la variable du type et de la valeur indiqués";
Blockly.Msg.ARDUINO_VAR_CONST="déclarer la constante";
Blockly.Msg.ARDUINO_VAR_CONST_tooltip="Déclare une constante du type et de la valeur indiqués";
Blockly.Msg.VARIABLE_ALREADY_EXISTS = "Une variable appelée %1 existe déjà";
Blockly.Msg.PROCEDURES_DEFRETURN_TITLE = "";
Blockly.Msg.CONTROLS_IF_IF_TITLE_IF = Blockly.Msg.CONTROLS_IF_MSG_IF;
Blockly.Msg.CONTROLS_WHILEUNTIL_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.CONTROLS_IF_MSG_THEN = "alors";
Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE = Blockly.Msg.CONTROLS_IF_MSG_ELSE;
Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.PROCEDURES_DEFNORETURN_PROCEDURE;
Blockly.Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.LISTS_GET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.MATH_CHANGE_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.PROCEDURES_DEFRETURN_DO = Blockly.Msg.PROCEDURES_DEFNORETURN_DO;
Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = Blockly.Msg.CONTROLS_IF_MSG_ELSEIF;
Blockly.Msg.LISTS_GET_INDEX_HELPURL = Blockly.Msg.LISTS_INDEX_OF_HELPURL;
Blockly.Msg.CONTROLS_FOREACH_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_SET_INDEX_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.CONTROLS_FOR_INPUT_DO = Blockly.Msg.CONTROLS_REPEAT_INPUT_DO;
Blockly.Msg.LISTS_CREATE_WITH_ITEM_TITLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_APPEND_VARIABLE = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = Blockly.Msg.VARIABLES_DEFAULT_NAME;
Blockly.Msg.LISTS_INDEX_OF_INPUT_IN_LIST = Blockly.Msg.LISTS_INLIST;
Blockly.Msg.PROCEDURES_DEFRETURN_COMMENT = Blockly.Msg.PROCEDURES_DEFNORETURN_COMMENT;