import project from '../../imgs/1280x720.svg';

const CareerData = [
    {
        id: 1,
        formation_title: 'Ingenieria Civil informatica (2000-2024)',
        start_year: '2020',
        end_year: '2024',
        formation_content:
            [
                { year: 'Jun 2023', description: 'PSYS' },
                { year: 'Ago 2023', description: 'UNAB-Centro de alumnos' },
            ],
        demo_image: { project },
        formation_description:
            [

            {            
type:'paragraph',
content:
`Realicé mis estudios superiores en la Universidad Andrés Bello, ubicada en la Región Metropolitana. \
Durante mi formación académica, tuve la oportunidad de trabajar con diversas tecnologías, destacando \
áreas como aprendizaje automático, visión artificial, ciberseguridad y desarrollo web.

A lo largo de mi carrera, participé en varios proyectos que ampliaron mis conocimientos y habilidades. \
Entre estos, sobresale el año 2023, en el cual llevamos a cabo dos proyectos destacados en el marco de una \
actividad institucional conocida como "Relación con el Medio". Esta iniciativa ofreció a los estudiantes la \
posibilidad de colaborar en proyectos con clientes externos.`
            },
            {
type:'title',
content:
`PSYS`
            },
            {
type:'paragraph',
content:
`Uno de los clientes fue PSYS, una pequeña organización dedicada a proporcionar servicios de salud mental en \
línea. Nuestro equipo tenía la misión de asesorar al cliente sobre el rendimiento de su plataforma, la cual \
enfrentaba problemas al agendar citas y realizar solicitudes a los servicios de AWS.

El trabajo incluyó una evaluación exhaustiva del rendimiento de la plataforma y la elaboración de un informe \
detallado. Este informe reveló diversas fallas, como archivos cargados localmente y llamadas incorrectas a AWS. \
Este proyecto me permitió comprender la estructura de una plataforma y las implicaciones de un rendimiento \
deficiente, además de ofrecerme mi primer contacto con un cliente real.
`
},
{
    type:'title',
    content:
`Centro de alumnos UNAB`
},
{
    type:'paragraph',
    content:
`En otro proyecto, colaboré con el centro de alumnos de la sede de Ingeniería de la Universidad Andrés Bello para \
desarrollar una plataforma tipo foro. Esta plataforma tenía el objetivo de fomentar el diálogo y el debate entre \
estudiantes. Entre los requisitos del proyecto estaban la integración con las APIs de Outlook y Meta, así como la \
creación de un foro que permitiera interacciones enriquecedoras.

En otro proyecto, colaboré con el centro de alumnos de la sede de Ingeniería de la Universidad Andrés Bello para \
desarrollar una plataforma tipo foro. Esta plataforma tenía el objetivo de fomentar el diálogo y el debate entre \
estudiantes. Entre los requisitos del proyecto estaban la integración con las APIs de Outlook y Meta, así como la \
creación de un foro que permitiera interacciones enriquecedoras.

Aunque la plataforma no llegó a desplegarse debido a factores ajenos al cliente y al equipo, se lograron cumplir \
todos los casos de uso y las fechas de entrega estipuladas.
`
}
            ]
    },
];

export default CareerData;