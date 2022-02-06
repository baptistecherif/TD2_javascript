"use strict";


// EXERCICE 1
// 1) Ecrire une fonction javascript ´ max(t) qui renvoie le plus grand ´el´ement du tableau t pass´e en
// param`etre

function max(t) {
    let max_element = null;
    for (let e of t) {
        if (max_element === null || e > max_element) {
            max_element = e;
        }
    }
    return max_element;
}

// 2) Ecrire une fonction javascript ´ argmax(t) qui renvoie l’indice du plus grand ´el´ement du tableau
// t pass´e en param`etre

function argmax(t) {
    1
    let max_element = null;
    let max_index = null;
    for (let [i, e] of t.entries()) {
        if (max_element === null || e > max_element) {
            max_element = e;
            max_index = i;
        }
    }
    return max_index;
}

// 3) Ecrire une fonction javascript ´ median(t) qui retourne la valeur m´ediane du tableau de nombres
// pass´e en param`etre. On suppose que le tableau ne contient pas de NaN ou de  trous , c’est
// `a dire que toutes les cases interm´ediaires entre deux cases du tableaux contenant des nombres
// contiennent aussi des nombres (pas de undefined).

function median(t) {
    t.sort(function(a, b) {return b - a});
    let middle = Math.floor(a.length / 2);
    if (a.length % 2 == 0)
        return (a[middle] + a[middle + 1]) / 2;
    else
        return a[middle];
}

// 4) . Ecrire une fonction javascript ´ search(t, x) qui renvoie l’indice de la valeur x dans le tableau
// tri´e t en utilisant la recherche par dichotomie. On fait les mˆemes hypoth`eses sur le tableau qu’`a
// la question pr´ec´edente

function search(t, x) {
    let start = 0, end = t.length;
    while (start < end) {
        let middle = Math.floor((start + end) / 2);
        let value = t[middle];
        if (value < x) start = middle;
        else if (value > x) end = middle;
        else return middle;
    }
    return -1;
}


// EXERCICE 2
// 1) Ecrire une fonction javascript ´ sum_of_values(d) qui renvoie la somme des valeurs du dictionnaire pass´e en param`etre

function sum_of_values(d) {
    let sum = 0;
    for (let key in d) {
        sum += d[key];
    }
    return sum;
}

// 2) Ecrire une fonction javascript ´ argmin(d) qui retourne la cl´e associ´ee `a la plus petite valeur du
// dictionnaire pass´e en param`etre

function argmin(d) {
    let min_value = null;
    let min_key = null;
    for (let key in d) {
        if (min_key == null || d[key] < min_value) {
            min_value = d[key];
            min_key = key;
        }
    }
    return min_key;
}

// 3) Ecrire une fonction javascript ´ union(d1, d2) qui renvoie un nouveau dictionnaire contenant
// tous les ´el´ements de d1 et de d2. Si une cl´e appartient aux deux dictionnaires, la valeur associ´ee
// devra ˆetre un tableau contenant les deux valeurs

function union(d1, d2) {
    let result = {};
    for (let key in d1) {
        if (key in d2) result[key] = [d1[key], d2[key]];
        else result[key] = d1[key];
    }
    for (let key in d2) {
        if (! (key in d1)) result[key] = d2[key];
    }
    return result;
}

// 4) Ecrire une fonction javascript ´ swap(d) qui renverse un dictionnaire dont le rˆole des cl´es et des
// valeurs est renvers´e par rapport `a celui pass´e en param`etre, c’est `a dire que les cl´es deviennent
// les valeurs et vice-versa. Si une valeur apparait plusieurs fois, la fonction devra afficher un
// message d’erreur et retourner null

function swap(d) {
    let result = {};
    for (let key in d) {
        let value = d[key];
        if (value in result) {
            console.log("erreur")
            return null;
        }   else {
            result[value]=key;
        }
        return result;
    }
}


// EXERCICE 3
// Ecrire un programme javascript qui analyse le contenu de cette chaˆıne, et g´en`ere un tableau conte- ´
// nant des objets avec les champs year, month et temperature pour repr´esenter les valeurs se trouvant
// sur chaque ligne.

let data = "1901\t1\t-3\n1901\t2\t-2\n1901\t3\t7";
let table = [];
for (let line of data.split("\n")) {
    let row = line.split("\t");
    table.push({
        year: parseInt(row[0]),
        month: parseInt(row[1]),
        temperature: parseInt(row[2]),
    });
}
console.log(table);


// EXERCICE 4
// Ecrire une fonction ´ to_html_list(t) qui g´en`ere une chaˆıne de caract`ere contenant une liste UL `a
// partir d’un tableau javascript pass´e en param`etre.

function to_html_list(t) {
    let result = "<ul>";
    for (let element of t) {
        result += "<li>" + element + "</li>";
    }
    result += "</ul>";
    return result;
}
