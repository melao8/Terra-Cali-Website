# Terra Cali — versión para revisión

Preparada el 26 de septiembre de 2026. Cambios preparados en una rama de revisión. La publicación en la web no forma parte de esta rama hasta que se integre.

## Qué cambia

- Nueva portada con logo oficial, colores de Terra Cali y tipografías Outfit/Poppins.
- Tarjetas de terrenos que distinguen las modalidades: Islas Agrarias de contado/Infonavit; San Patricio de contado/financiamiento directo.
- Nueva página `vender.html` y formulario para propietarios con colonia, precio considerado y crédito vigente.
- Formulario de compradores con Islas Agrarias, San Patricio, casas y predios comerciales. Las opciones de financiamiento se ajustan a Islas Agrarias y San Patricio.
- San Patricio: ubicación suministrada por Melissa, estado sin servicios, apartado de $5,000 incluido en el enganche de $10,000 y escrituración al liquidar conforme a contrato. Se retiran referencias geográficas inconsistentes y afirmaciones de entrega no confirmadas.
- Cotizador con dos decimales y un único plazo preseleccionado de 144 meses. El cálculo es una estimación, sujeto a las condiciones contractuales.
- Islas Agrarias: $450,000 MXN por 200 m², equivalente a $2,250 MXN por m², confirmado por Melissa.
- Menú y pie de página unificados, acceso por teclado y estilos adaptables a celular.
- Se conserva el dominio de CNAME, las rutas anteriores, las galerías, el aviso de privacidad y los artículos del blog. Los artículos históricos no se han actualizado ni verificado nuevamente.
- Se conserva el identificador de Meta Pixel que ya contenía la web. No se creó, reactivó ni modificó ninguna cuenta publicitaria ni se hizo inversión.

## Fotografías y contenido

Las imágenes se tomaron de los archivos aportados y de las rutas públicas del sitio existente. Se conserva el logo original sin redibujarlo. Las tarjetas de Ampliación Islas Agrarias y San Patricio usan fotografías reales aportadas e identificadas por Melissa el 26 de septiembre. Se muestran también en las fichas de ambos desarrollos. Para San Patricio se seleccionó IMG_0620(1).jpeg por su vista amplia y formato horizontal; los archivos se conservan sin retoque. Se retiró del apartado residencial el bloque de testimonios visuales cuya autenticidad no se confirmó. La portada presenta un selector interactivo de Islas Agrarias y San Patricio con fotografías reales, filtros por tipo de búsqueda y preguntas frecuentes desplegables. Quintas del Rey no se muestra como disponible. Las galerías históricas conservan sus imágenes.

Quintas del Rey: Melissa confirmó el 26 de septiembre de 2026 que la casa está en notaría para su venta. Se muestra «En proceso de venta · En notaría» y se retira de la portada y del selector de propiedades disponibles. Se conservan su ficha y galería como referencia, sin invitaciones para visitarla. No se anuncia como vendida. Antes de publicar, confirmar disponibilidad y precios de los demás inmuebles. Las superficies adicionales del cotizador conservan las opciones del sitio original y requieren disponibilidad confirmada.

## Comprobaciones realizadas

- Sin archivos locales enlazados faltantes.
- Menú abre y cierra en las 16 páginas.
- Sintaxis de JavaScript y CSS validada.
- Cotizador: $400,000 menos $10,000, dividido en 144 = $2,708.33; con enganche de $20,000 = $2,638.89.
- Campos de propietarios se activan al seleccionar venta; campos de compra se desactivan.
- Modalidades incompatibles se deshabilitan para Islas Agrarias y San Patricio.
- Envíos simulados: éxito muestra confirmación y limpia el formulario; error conserva los datos y permite reintentar. No se enviaron mensajes reales.

## Pendiente antes de publicar

- Revisión visual real en navegador de escritorio y celular. El navegador remoto no pudo abrir la copia local; no se afirma que esa revisión esté completada.
- Prueba autorizada de entrega real del formulario al correo info@terracali.com.mx. Se conserva FormSubmit como proveedor; una respuesta exitosa del servicio no verifica que el correo haya llegado a la bandeja.
- Base comparada: melao8/Terra-Cali-Website, commit 7f88c4a. Se conserva el aviso de privacidad y sus enlaces, incluidos en la última actualización de Claude.

## Cómo revisar e integrar

1. Abrir la rama de revisión del repositorio conservando `assets/img` y los demás directorios.
2. Revisar la copia con un servidor estático. Por ejemplo, desde esta carpeta: `python3 -m http.server 8000`, y abrir `http://localhost:8000`.
3. Para probar formularios sin enviar información real, usar simulaciones o una configuración de prueba. No enviar mensajes ficticios al correo de producción.
4. En GitHub, crear una rama de revisión, comparar los cambios con el repositorio actual y añadir las páginas, `assets/terra-2026.css` y `assets/terra-2026.js`. Conservar cualquier configuración o archivo adicional del repositorio; este ZIP no es una copia de su historial ni de sus workflows.
5. Revisar antes de integrar en la rama que publica GitHub Pages. No cambiar CNAME ni la configuración del dominio.

Los originales enviados por Melissa no fueron sobrescritos.

## Correcciones de revisión

Melissa confirmó $450,000 MXN por un lote de 200 m² en Ampliación Islas Agrarias, equivalente a $2,250 MXN por m². Actualizado en portada, selector de desarrollo, tarjeta residencial y ficha. El plano se muestra durante una cita; se retiró la promesa de compartirlo y se cambió también el mensaje del enlace de WhatsApp. Melissa aprobó guardar las actualizaciones en GitHub el 26 de septiembre de 2026 tras revisar la muestra y solicitar estas correcciones.
