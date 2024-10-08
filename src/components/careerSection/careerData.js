const PlaceholderIMG = 'https://res.cloudinary.com/dq6ua6vmy/image/upload/v1724443539/1280x720_i3w97x.svg';

const CareerData = [
    {
        id: 1,
        formation_title: 'Ingenieria Civil informatica (2000-2024)',
        formation_title_en: 'Software Engineering (2000-2024)',
        start_year: '2020',
        end_year: '2024',
        formation_content:
            [
                { year: 'Jun 2023', description: 'PSYS' },
                { year: 'Ago 2023', description: 'UNAB-Centro de alumnos' },
            ],
        formation_content_en:
            [
                { year: 'Jun 2023', description: 'PSYS' },
                { year: 'Aug 2023', description: 'UNAB-Student Council' },
            ],
        demo_image: { PlaceholderIMG },
        formation_description:
            [

                {
                    type: 'paragraph',
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
                    type: 'title',
                    content:
                        `PSYS`
                },
                {
                    type: 'paragraph',
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
                    type: 'title',
                    content:
                        `Centro de alumnos UNAB`
                },
                {
                    type: 'paragraph',
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
            ],
        formation_description_en:
            [

                {
                    type: 'paragraph',
                    content:
                        `I completed my higher education at the Andrés Bello University, located in the Metropolitan Region. \
During my academic training, I had the opportunity to work with various technologies, highlighting \
areas such as machine learning, computer vision, cybersecurity and web development.

Throughout my career, I participated in several projects that expanded my knowledge and skills. \
Among these, the year 2023 stands out, in which we carried out two outstanding projects within the framework of a \
institutional activity known as "Relationship with the Environment". This initiative offered students the \
possibility of collaborating on projects with external clients.`
                },
                {
                    type: 'title',
                    content:
                        `PSYS`
                },
                {
                    type: 'paragraph',
                    content:
                        `One of the clients was PSYS, a small organization dedicated to providing mental health services in \
line. Our team had the mission of advising the client on the performance of their platform, which \
was facing problems scheduling appointments and making requests to AWS services.

The work included a comprehensive evaluation of the platform's performance and the preparation of a report\
detailed. This report revealed several flaws, including locally uploaded files and incorrect calls to AWS. \
This project allowed me to understand the structure of a platform and the implications of a performance\
poor, in addition to offering me my first contact with a real client.
`
                },
                {
                    type: 'title',
                    content:
                        `Student Council UNAB`
                },
                {
                    type: 'paragraph',
                    content:
                        `In another project, I collaborated with the student center of the Engineering headquarters of the Andrés Bello University to \
develop a forum type platform. This platform had the objective of promoting dialogue and debate between \
students. Among the project requirements were integration with the Outlook and Meta APIs, as well as the \
creation of a forum that would allow for enriching interactions.

In another project, I collaborated with the student center of the Engineering headquarters of the Andrés Bello University to \
develop a forum type platform. This platform had the objective of promoting dialogue and debate between \
students. Among the project requirements were integration with the Outlook and Meta APIs, as well as the \
creation of a forum that would allow for enriching interactions.

Although the platform was not deployed due to factors beyond the control of the client and the team, it was achieved \
all use cases and stipulated delivery dates.
`
                }
            ]
    },
];

export default CareerData;