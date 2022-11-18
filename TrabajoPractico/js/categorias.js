const cursos = [
    {
        titulo: 'almacen',
        enlace : 'almacen'
    },
    {
        titulo: 'congelados',
        enlace : 'congelados'
    },
    {
        titulo: 'bebidas',
        enlace : 'bebidas'
    },
    {
        titulo: 'productos a granel',
        enlace : 'produ_granel'
    },
    {
        titulo: 'productos veganos',
        enlace : 'produ_vegano'
    }
]

const resultado = document.querySelector("#resultado");
cursos.forEach((item) => {
    resultado.innerHTML += '';
});
const buscador = document.querySelector("#buscador");
buscador.addEventListener("keyup", () => {
    const valor = buscador.value;
    let cursosFiltrados = cursos.filter(curso => curso.titulo.indexOf(valor) > -1);
    resultado.innerHTML = ""; // vaciar el section de resultados
    cursosFiltrados.forEach((item) => {
        resultado.innerHTML += `<article>
        <div class="link-cat">
                        <div class="link-a">
                            <a href="#${item.enlace}">${item.titulo}</a>
                        </div>
        </article>`;
    });
});


const selectElement = function (element) {
    return document.querySelector(element);
}


let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function () {
    body.classList.toggle('open');
})