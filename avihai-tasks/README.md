# אביחי משימות — GitHub Pages

## העלאה ראשונה

### שלב 1 — צור Repository
1. כנס ל-github.com ← התחבר
2. לחץ **New repository**
3. שם: `avihai-tasks`
4. סמן **Public**
5. לחץ **Create repository**

### שלב 2 — העלה קבצים
1. בדף ה-repository לחץ **uploading an existing file**
2. גרור את כל הקבצים מהתיקייה:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icon-192.png`
   - `icon-512.png`
3. לחץ **Commit changes**

### שלב 3 — הפעל GitHub Pages
1. לחץ **Settings** בdrepository
2. בתפריט השמאלי לחץ **Pages**
3. תחת Source בחר **Deploy from a branch**
4. Branch: **main** → תיקייה: **/ (root)**
5. לחץ **Save**

### כתובת האפליקציה
תוך כ-2 דקות האפליקציה תהיה זמינה בכתובת:
```
https://[שם-משתמש-github].github.io/avihai-tasks/
```

---

## התקנה כאפליקציה

### iPhone / iPad
1. פתח את הכתובת ב-Safari
2. לחץ על אייקון השיתוף ↑
3. בחר **"הוסף למסך הבית"**
4. האפליקציה מותקנת כאפליקציה מלאה

### Android
1. פתח ב-Chrome
2. תפריט ⋮ ← **"הוסף למסך הבית"**

### מחשב (Chrome)
1. פתח את הכתובת
2. בשורת הכתובת יופיע אייקון התקנה ⊕
3. לחץ **התקן**

---

## עדכון האפליקציה
לעדכן קוד: העלה קובץ `index.html` חדש לאותו repository.
הנתונים (משימות) נשמרים ב-localStorage של הדפדפן — לא נמחקים בעדכון.
