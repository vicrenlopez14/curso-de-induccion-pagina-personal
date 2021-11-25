const data = {
    "nombre_colegio": "Instituto Tecnico Ricaldone",
    "foto_colegio": "src/logo.jpg",
    "foto_persona": "https://lh3.googleusercontent.com/a-/AOh14GjIcOHPH6tJhOrbH-kVidmhdU59Bw6kLKff6P6Izg=s288-p-rw-no",
    "autobiografia": "Soy estudiante del Instituto Técnico Ricaldone desde el año 2019, previamente a eso pertenecí a la Escuela Salesiana Domingo Savio desde primer grado de primaria hasta sexto, mi educación inicial, la realicé en el Kinder Pedro Ricaldone, por lo que se podría decir que para el año 2019, en realidad regresé a donde inicié.",
    "ocios": [
        "Programar.",
        "Aprender cosas nuevas.",
        "Pasar tiempo con mi mascota."
    ],
    "metas": [
        "Adaptarme bien a un nuevo nivel académico, bachillerato.",
        "Obtener buenas calificaciones.",
        "Pasar satisfactoriamente al siguiente nivel"
    ]
}

function write() {
    document.getElementById('school_name').innerText = data.nombre_colegio
    document.getElementById('logo_elem').setAttribute("src", data.foto_colegio)
    document.getElementById('person_picture').setAttribute("src", data.foto_persona)
    document.getElementById('biography').innerText = data.autobiografia

    // Add the hobbies
    for (const text of data.ocios) {
        const entry = document.createElement('li')
        entry.appendChild(document.createTextNode(text))
        document.getElementById('hobbies_list').appendChild(entry)
    }

    // Add the objectives
    for (const text of data.metas) {
        const entry  = document.createElement('li')
        entry.appendChild(document.createTextNode(text))
        document.getElementById('objectives_list').appendChild(entry)
    }
}

write()