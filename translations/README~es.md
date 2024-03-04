![Header](https://github.com/ScribbleLabApp/ScribbleLab/assets/129311622/eb1953ca-f14f-43ba-84d9-a50b7db93303)



## ScribbleLab para iOS, macOS y visionOS

ScribbleLab es un revolucionario editor de texto diseñado exclusivamente para estudiantes, que ofrece una experiencia 
fluida en las plataformas iOS, macOS y visionOS. Creado por estudiantes, para estudiantes, ofrece un editor ligero pero potente 
con un diseño visualmente atractivo y una interfaz fácil de usar.
> [!NOTA]
> ScribbleLab está actualmente en desarrollo y aún no está listo para su uso en producción. Le invitamos a probar la [última versión alfa/dev](https://github.com/ScribbleLabApp/ScribbleLab/releases/latest)
> bajo su propia responsabilidad. Agradecemos sus comentarios [aquí](https://github.com/ScribbleLabApp/ScribbleLab/issues).
> [!ADVERTENCIA]
> ScribbleLab no funciona como se esperaba en iOS 17.4 beta. Por favor, utiliza Xcode 15.2 y iOS 17.3.1.
> Nuestros desarrolladores están investigando este problema.
### Traducciones
Este README está disponible en varios idiomas:
[Inglés](https://github.com/ScribbleLabApp/ScribbleLab/tree/main) · [Alemán](https://github.com/ScribbleLabApp/docs/blob/main/translations/README~de.md) · [Italiano](https://github.com/ScribbleLabApp/docs/blob/main/translations/README~it.md) · [日本語 `(まだ利用できません)`]() · [Español]()

## Motivación
En ScribbleLab nos dimos cuenta de que los editores de texto existentes en el mercado eran demasiado complicados, carecían de funciones esenciales o eran difíciles de personalizar para nuestras necesidades específicas. 

Pensamos: "¿Por qué no hay una aplicación que tenga todo lo que necesitas?". 

Por eso decidimos crear nuestro propio editor de texto, con control total sobre sus funciones y características.

## Misión
Nuestra misión en ScribbleLab es crear una aplicación que facilite el día a día de los estudiantes. 

A menudo, los estudiantes necesitan utilizar varias aplicaciones para organizar su vida académica. 
Con los flujos de trabajo de los estudiantes en mente, combinamos cuatro aplicaciones existentes
(Recordatorio, Calendario, Horario y Reloj) en dos aplicaciones con un diseño visualmente atractivo y un editor perfectamente integrado:
**ScribbleLab** y **ScribbleLink**

Nos esforzamos por mantenernos fieles a la filosofía de Apple. [directrices para la interfaz humana](https://developer.apple.com/design/human-interface-guidelines) y [patrones de diseño](https://developer.apple.com/design/human-interface-guidelines/patterns),
ScribbleLab parece y se siente como una aplicación desarrollada por la propia Apple, con una meticulosa atención al detalle.

## Características
Nuestro editor es la parte "Scribble" de ScribbleLab, y nuestras funciones constituyen el "Lab".

ScribbleLab ofrece un completo conjunto de herramientas, entre las que se incluyen:

- Colaboraciones en vivo (próximamente)
- Almacenamiento vinculado en la nube (Dropbox, GoogleDrive, iCloudDrive, etc.)
- Plantillas personalizables (páginas, portadas, etc.)
- Importación/exportación de archivos PDF, PNG y .scribble (formato de archivo propio, próximamente)
- Soporte AI (próximamente)
- Integración con ScribbleLink

Las funciones son fácilmente accesibles desde una barra lateral, proporcionando una experiencia potente pero fácil de usar. Nuestra selección de funciones se basa en los comentarios de la comunidad y de los evaluadores, lo que garantiza su relevancia y utilidad para los estudiantes.

Muchas de nuestras funciones están disponibles desde una barra lateral a la que se puede acceder con un simple clic.

## Comunidad
Para decidir qué funciones incluir, pedimos y evaluamos las opiniones de nuestros usuarios. [comunidad](https://discord.gg/7eyQFUws7A) y probadores, garantizando que nuestra lista de funciones sea pertinente y útil para los estudiantes.

Nuestra comunidad está formada por colaboradores de GitHub, probadores, desarrolladores y usuarios. Únete a nuestra [**Servidor Discord**](https://discord.gg/7eyQFUws7A) para mejorar la comunicación entre los miembros de la comunidad.

## Privacidad
¿Es seguro crear una cuenta en ScribbleLab? Sí.

En ScribbleLab creemos que la privacidad es un derecho fundamental y debe tratarse con la máxima importancia. 
Cuando se trata de datos personales, es importante que se almacenen de forma segura y responsable. 
Es crucial que las personas tengan control sobre sus datos. Debe poder acceder a sus datos, gestionarlos
y eliminarlos de forma fácil y privada. Esto es especialmente importante en el contexto de las violaciones de datos,
donde la información personal puede caer en las manos equivocadas. 

Por lo tanto, almacenamos sus datos únicamente en su dispositivo o en sus cuentas de almacenamiento en la nube de terceros,
garantizando que los datos no sean accesibles a personas o entidades no autorizadas. 
Utilizamos [Google Firebase](https://firebase.google.com/) 
(que incluye [FirebaseAuth](https://firebase.google.com/docs/auth?hl=en), 
[FirebaseStorage](https://firebase.google.com/docs/storage?hl=en), y
[Cloud Firestore](https://firebase.google.com/docs/firestore?hl=en)) para almacenar tus datos de forma segura.
Esto significa que nadie puede acceder a tus datos personales, como documentos creados o servicios en la nube,
ni siquiera nosotros. Lo único que podemos ver es cuántas personas tienen una cuenta de ScribbleLab, junto con datos
de [Google Analytics](https://developers.google.com/analytics?hl=en) y
[Google Crashlytics](https://firebase.google.com/docs/crashlytics?hl=en) para realizar un seguimiento de las caídas y otros eventos inusuales o errores.

Garantizar la seguridad de nuestro software es una prioridad para nosotros. Regularmente lanzamos actualizaciones de software que incluyen correcciones de errores y parches de seguridad para mantener sus datos y su sistema seguros. 
de seguridad para mantener seguros sus datos y su sistema. Es importante instalar estas actualizaciones tan pronto como estén disponibles para garantizar que 
de las amenazas más recientes.

Para facilitar el proceso de actualización del software, hemos implementado una función de actualización automática que le pedirá que 
para que instale las nuevas actualizaciones en cuanto estén disponibles. Le recomendamos encarecidamente que active esta función para tener siempre instaladas las últimas actualizaciones de seguridad. 
para tener siempre instaladas las últimas actualizaciones de seguridad.

Además de las actualizaciones automáticas, también ofrecemos instrucciones de actualización manual para macOS en nuestro sitio web. Asegúrese de seguir estas 
instrucciones cuidadosamente para garantizar un proceso de actualización sin problemas.

Recuerda que estar al día de las actualizaciones de software es esencial para mantener la seguridad y la integridad de tu sistema.

> [!PRECAUCIÓN]
> No se ofrece ninguna garantía por probar versiones Alfa, Beta, nightly o RC. Utilícelas bajo su propia responsabilidad.
## Contribución
Forma parte de la próxima revolución en la edición de código contribuyendo al proyecto. Se trata de un esfuerzo dirigido por la comunidad, por lo que damos la bienvenida a cuantos colaboradores puedan ayudar. Lea la [Guía de contribuciones](https://github.com/ScribbleLabApp/ScribbleLab/blob/main/CONTRIBUTING.md) para más información.

Este proyecto abarca [múltiples repositorios](https://github.com/ScribbleLabApp/ScribbleLab#related-repositories) así que en lugar de buscar temas en la pestaña de temas, puede ser útil encontrar un tema para empezar en nuestro [tablero de proyectos](https://github.com/orgs/ScribbleLabApp/projects/1/views/1).

Para los temas en los que queremos centrarnos y que son más relevantes en un momento dado, consulte los temas correspondientes a nuestra iteración actual [aquí]().

<!--
## Actividad
![Alt](https://repobeats.axiom.co/api/embed/d8d42dc7013c583d48502fe84223ce417c502c23.svg "Repobeats analytics image")
-->

## Licencia
Al crear una cuenta en ScribbleLab, acepta nuestra política de privacidad. [Acuerdo de licencia](LICENSE_AGREEMENT.md) así como las licencias de nuestros paquetes de terceros.
Este proyecto de código abierto ha sido licenciado bajo dos licencias separadas. La Licencia Apache 2.0 se aplica a la totalidad del proyecto, mientras que la Licencia AGPL 3.0 se aplica específicamente al código y servicio Auth de ScribbleLab. La Licencia Apache 2.0 es una licencia permisiva que permite la distribución del software bajo ciertos términos y condiciones. Por otro lado, la Licencia AGPL 3.0 es una licencia copyleft que requiere que cualquier modificación o derivado del código sea liberado bajo la misma licencia. Es importante tener en cuenta que las licencias no son intercambiables y que es necesario respetar ambas para utilizar y distribuir correctamente el proyecto.
[LICENCIA principal de ScribbleLab](LICENSE) · [LICENCIA de autorización de ScribbleLab](LICENSE-AUTH)

## Marcas
Para poder utilizar las marcas registradas de ScribbleLabApp como logotipos o copiar contenido, deberá aceptar nuestra Política de privacidad. [Directrices sobre marcas](TRADEMARKS.md).

## Apóyanos
Su apoyo es valioso para nosotros y nos ayuda a dedicar más tiempo a mejorar y mantener este repositorio. He aquí cómo puedes contribuir:

**⭐️ Deja una estrella**: Si encuentras este repositorio útil o interesante, por favor considera dejar una estrella en GitHub. Tus estrellas nos ayudan a ganar visibilidad y animan a otros miembros de la comunidad a descubrir y beneficiarse de este trabajo.

**📲 Compartir con amigos:** Si te gusta la idea de este proyecto, compártelo con tus amigos, colegas o cualquier otra persona a la que le pueda resultar útil.
