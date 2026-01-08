# Guide : Configuration Google Sheets pour les Réservations Maréa

Ce guide vous explique comment connecter votre calendrier de réservations à Google Sheets pour une gestion automatique des disponibilités.

---

## Étape 1 : Créer le Google Sheet

1. Allez sur [Google Sheets](https://sheets.google.com)
2. Créez une nouvelle feuille de calcul
3. Nommez-la : `Réservations Maréa`
4. Créez les colonnes suivantes dans la première ligne :

| A | B | C |
|---|---|---|
| **property** | **from** | **to** |

5. Remplissez les réservations avec ce format :

| property | from | to |
|----------|------|-----|
| lodge | 2025-07-15 | 2025-07-22 |
| lodge | 2025-08-01 | 2025-08-15 |
| nest | 2025-07-10 | 2025-07-17 |
| nest | 2025-08-20 | 2025-08-27 |

**Important :**
- `property` : Utilisez `lodge` ou `nest` (en minuscules)
- `from` et `to` : Format **YYYY-MM-DD** (ex: 2025-07-15)

---

## Étape 2 : Créer le Google Apps Script

1. Dans votre Google Sheet, allez dans **Extensions > Apps Script**
2. Supprimez tout le code existant
3. Copiez-collez ce code :

```javascript
function doGet(e) {
  // Ouvrir la feuille active
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = sheet.getDataRange().getValues();

  // Première ligne = en-têtes
  var headers = data[0];
  var result = [];

  // Parcourir les lignes (à partir de la 2ème)
  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var obj = {};

    for (var j = 0; j < headers.length; j++) {
      var header = headers[j].toString().toLowerCase();
      var value = row[j];

      // Convertir les dates en format YYYY-MM-DD
      if (value instanceof Date) {
        value = Utilities.formatDate(value, Session.getScriptTimeZone(), "yyyy-MM-dd");
      }

      obj[header] = value;
    }

    // N'ajouter que les lignes avec des données
    if (obj.property && obj.from && obj.to) {
      result.push(obj);
    }
  }

  // Retourner en JSON avec CORS activé
  return ContentService
    .createTextOutput(JSON.stringify(result))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Cliquez sur **Enregistrer** (Ctrl+S)
5. Nommez le projet : `API Réservations Maréa`

---

## Étape 3 : Déployer le script

1. Cliquez sur **Déployer > Nouveau déploiement**
2. Cliquez sur l'engrenage ⚙️ à côté de "Sélectionner un type"
3. Choisissez **Application Web**
4. Configurez :
   - **Description** : API Réservations v1
   - **Exécuter en tant que** : Moi
   - **Qui peut accéder** : **Tout le monde** (important !)
5. Cliquez sur **Déployer**
6. **Autorisez** l'accès quand demandé
7. **Copiez l'URL** qui s'affiche (elle ressemble à : `https://script.google.com/macros/s/AKfycb.../exec`)

---

## Étape 4 : Connecter au site Maréa

1. Ouvrez le fichier `index.html`
2. Trouvez la ligne (vers la ligne 990) :
```javascript
const GOOGLE_SHEETS_URL = '';
```
3. Remplacez par votre URL :
```javascript
const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/VOTRE_ID_ICI/exec';
```
4. Sauvegardez et déployez le site

---

## Utilisation quotidienne

### Ajouter une réservation
1. Ouvrez votre Google Sheet
2. Ajoutez une nouvelle ligne avec :
   - `property` : `lodge` ou `nest`
   - `from` : date d'arrivée (YYYY-MM-DD)
   - `to` : date de départ (YYYY-MM-DD)
3. C'est tout ! Le calendrier se met à jour automatiquement

### Supprimer une réservation
1. Supprimez simplement la ligne dans Google Sheet

### Modifier une réservation
1. Modifiez directement les cellules dans Google Sheet

---

## Exemple de Google Sheet

```
| property | from       | to         |
|----------|------------|------------|
| lodge    | 2025-07-15 | 2025-07-22 |
| lodge    | 2025-08-01 | 2025-08-15 |
| lodge    | 2025-08-20 | 2025-08-31 |
| nest     | 2025-07-10 | 2025-07-17 |
| nest     | 2025-07-25 | 2025-08-05 |
| nest     | 2025-08-15 | 2025-08-22 |
```

---

## Dépannage

### Le calendrier ne se met pas à jour
- Vérifiez que l'URL Google Apps Script est correcte
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Assurez-vous que le script est déployé en "Tout le monde"

### Les dates ne s'affichent pas correctement
- Vérifiez le format des dates : **YYYY-MM-DD**
- Assurez-vous que les colonnes sont nommées `property`, `from`, `to`

### Mettre à jour le script Apps Script
Si vous modifiez le code Apps Script :
1. Allez dans **Déployer > Gérer les déploiements**
2. Cliquez sur le crayon ✏️ pour modifier
3. Dans "Version", sélectionnez **Nouveau déploiement**
4. Cliquez sur **Déployer**

---

## Support

Pour toute question, contactez le développeur du site.
