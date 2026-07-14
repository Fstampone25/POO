TP: Métodos heredados de object
Preguntas y respuestas

--------------------------------------------------------------------
1) ¿Qué imprime el objeto antes de sobrescribir __str__()?
--------------------------------------------------------------------
Imprime la representación por defecto que hereda de object: como
<__main__.Persona object at 0x7f8a2c3d4e50>. Es decir, el nombre completo
de la clase y la dirección de memoria donde vive el objeto, sin mostrar
nada de sus atributos.


--------------------------------------------------------------------
2) ¿Qué cambia después de implementar __str__()?
--------------------------------------------------------------------
print() y str() dejan de usar la representación genérica de memoria y
pasan a usar lo que uno define explícitamente en el método. Se ve
información útil y legible (por ejemplo "Juan, 30 años, juan@mail.com")
.


--------------------------------------------------------------------
3) ¿Por qué p1 == p2 primero da False? 
--------------------------------------------------------------------
Porque el __eq__ heredado de object compara identidad, no contenido.
Equivale a "self is otro", es decir, pregunta si son
literalmente el mismo objeto en memoria. Como p1 y p2 son dos instancias
distintas, la respuesta es False.


--------------------------------------------------------------------
4) ¿Por qué después puede dar True?
--------------------------------------------------------------------
Porque se sobrescribe __eq__ para que compare atributo por atributo
(nombre, edad, email) en vez de comparar identidad. Ahora dos objetos
son iguales si tienen el mismo contenido, sin importar si son
instancias distintas en memoria.


--------------------------------------------------------------------
5) ¿Qué relación tienen __eq__() y __hash__()?
--------------------------------------------------------------------
Están ligados por una regla que Python espera que se cumpla: si dos
objetos son iguales, __eq__ da True, deben tener el mismo hash().
Esto es fundamental porque estructuras como dict y set usan el hash
para ubicar objetos y __eq__ para confirmar que son iguales. Por eso,
al redefinir __eq__ basándose en los atributos, también hay que
redefinir __hash__


--------------------------------------------------------------------
6) ¿Cuál sería el equivalente de getClass() de Java en Python?
--------------------------------------------------------------------
Es: type (objeto). En Java, objeto.getClass() devuelve la clase en tiempo
de ejecución. En Python, type hace lo mismo: devuelve la clase
del objeto.

