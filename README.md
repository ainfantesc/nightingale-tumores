# Visualización de la mortalidad por tumores en España mediante un diagrama de Nightingale

## 1. Descripción del proyecto

Este proyecto presenta una visualización interactiva de las principales causas de mortalidad por tumores en España, utilizando un **diagrama de rosa de Nightingale (Nightingale Rose Chart)**.

El objetivo es representar y comparar las defunciones de hombres y mujeres correspondientes a los diez tipos de tumores con mayor mortalidad, facilitando la identificación de diferencias entre sexos y la importancia relativa de cada tipo de tumor.

La visualización se ha desarrollado utilizando **JavaScript y Apache ECharts**, una biblioteca de código abierto especializada en la creación de gráficos interactivos.

## 2. Fuente de los datos

Los datos utilizados proceden del **Instituto Nacional de Estadística (INE)**, concretamente de la estadística *Defunciones según la causa de muerte*.

- **Fuente:** Instituto Nacional de Estadística (INE). Resultados detallados año 2024
- **Ámbito geográfico:** España.
- **Población analizada:** todas las edades.
- **Variables:** tipo de tumor, sexo y número de defunciones.
- **Unidad de medida:** número absoluto de fallecimientos.

El repositorio incluye el archivo Excel original descargado del INE, con el objetivo de garantizar la trazabilidad de los datos utilizados.

## 3. Preparación y tratamiento de los datos

Para construir la visualización se ha realizado el siguiente tratamiento:

1. Selección de las causas de defunción correspondientes al grupo de tumores.
2. Extracción de los datos correspondientes a **todas las edades**.
3. Separación del número de defunciones por sexo: hombres y mujeres.
4. Cálculo del total de defunciones para cada tipo de tumor mediante la suma de ambos sexos.
5. Ordenación de los tumores según el número total de defunciones, de mayor a menor.
6. Selección de los diez tipos de tumores con mayor mortalidad.
7. Preparación de los datos para su representación gráfica.

El conjunto de datos resultante se encuentra disponible en el archivo `top_10_tumores_mortalidad.xlsx`.

## 4. Técnica de visualización

La técnica seleccionada es el **diagrama de rosa de Nightingale**, también conocido como *Coxcomb Chart* o *Polar Area Chart*.

Se trata de una visualización radial que permite comparar magnitudes mediante sectores circulares.

En este proyecto se utiliza una variante apilada:

- Cada sector representa un tipo de tumor.
- La superficie total del sector representa el número total de defunciones.
- El área azul corresponde a los hombres.
- El área rosa corresponde a las mujeres.
- La distribución de las superficies permite comparar la contribución de ambos sexos a la mortalidad de cada tipo de tumor.

Esta representación facilita la identificación de las principales causas de mortalidad y permite observar diferencias entre hombres y mujeres.

La visualización incorpora elementos interactivos que permiten consultar los valores correspondientes a cada categoría.

## 5. Tecnologías utilizadas

Para desarrollar el proyecto se han utilizado las siguientes tecnologías:

- **HTML5:** estructura de la página web.
- **JavaScript:** tratamiento y representación de los datos.
- **Apache ECharts:** biblioteca de visualización interactiva.
- **Microsoft Excel:** preparación y filtrado del conjunto de datos.
- **GitHub Pages:** publicación de la visualización en Internet.

## 6. Estructura del repositorio

El repositorio contiene los siguientes archivos:

| Archivo | Descripción |
|---|---|
| `index.html` | Página principal que contiene la visualización interactiva. |
| `nightingale_top10.js` | Código JavaScript que genera el diagrama de Nightingale. |
| `top_10_tumores_mortalidad.xlsx` | Conjunto de datos filtrado con los diez tipos de tumores de mayor mortalidad. |
| `76944.xlsx` | Conjunto de datos original obtenido del INE. Defunciones por causas (lista reducida), sexo, lugar de residencia y edad. Detalle 2024 |
| `README.md` | Documentación del proyecto. |

## 7. Acceso a la visualización

La visualización se encuentra publicada mediante **GitHub Pages**.

**Enlace a la visualización:**

https://ainfantesc.github.io/nightingale-tumores/

## 8. Consideraciones sobre la interpretación

Los valores representados corresponden al número absoluto de defunciones registradas y no a tasas de mortalidad ajustadas por población o edad.

Por tanto, las diferencias observadas entre hombres y mujeres deben interpretarse teniendo en cuenta que pueden existir diferencias en el tamaño y la estructura por edades de ambas poblaciones.

Asimismo, la selección de los diez tipos de tumores con mayor mortalidad permite centrar el análisis en las categorías más relevantes, aunque no representa la totalidad de las defunciones por tumores.

## 9. Fuente y referencias

- Instituto Nacional de Estadística (INE). *Defunciones según la causa de muerte*.
- Apache ECharts. Biblioteca JavaScript para visualización de datos.
- Florence Nightingale. Diagrama de áreas polares como técnica histórica de representación estadística.

---

**Proyecto académico de visualización de datos.**
