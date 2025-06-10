# API Endpoints

## Blommor

### Hämta alla blommor för en användare

```
GET /api/{userId}/get-flowers
```

### Lägg till en blomma för en användare

```
POST /api/{userId}/add-flower
```

### Ta bort en blomma

```
DELETE /api/{userId}/remove-flower/{flowerId}
```

### Uppdatera en blommas namn

```
PUT /api/{userId}/update-flower/{flowerId}
```

---

## Användare

### Hämta alla användare

```
GET /api/get-users
```

### Skapa en ny användare

```
POST /api/create-user
```

### Logga in användare

```
POST /api/user-login
```

---

## Övrigt

### Testa om servern är aktiv

```
GET /
```

### Uppdatera blomma information (för systemutvecklare)

```
POST /api/sensor/update/:flowerId
```
