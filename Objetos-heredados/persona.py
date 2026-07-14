class Persona:
    def __init__(self, nombre, edad, email):
        self.nombre = nombre
        self.edad = edad
        self.email = email

    def __str__(self):
        return f"{self.nombre}, {self.edad} años, {self.email}"

    def __repr__(self):
        return f"Persona(nombre='{self.nombre}', edad={self.edad}, email='{self.email}')"

    def __eq__(self, otro):
        if not isinstance(otro, Persona):
            return False
        return (self.nombre == otro.nombre and 
                self.edad == otro.edad and 
                self.email == otro.email)

    def __hash__(self):
        return hash((self.nombre, self.edad, self.email))
    
    def __init__(self, nombre, edad, email):
        self.nombre = nombre
        self.edad = edad
        self.email = email


p1 = Persona("Juan", 30, "juan@mail.com")
p2 = Persona("Juan", 30, "juan@mail.com")

print(p1)              
print(str(p1))
print(repr(p1))
print(p1 == p2)
print(hash(p1))
print(type(p1))
print(dir(p1))