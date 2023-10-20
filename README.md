# JS-Wissenskontrolle-LetsCode
JavaScript Wissenskontrolle - Let's code  

Source: https://moodle.ffhs.ch/mod/assign/view.php?id=4440553&forceview=1  

## Ziel
Ich kann die Inhalte des der Leseaufträge JavaScript Grundlagen und JavaScript und das DOM anwenden  

## Auftrag
Teste dich selber!  

Erstelle eine HTML-Seite, in welche auch ein CSS und ein JavaScript eingebunden wird.

Auf der Seite sollen folgende Elemente enthalten sein. Die Klammern mit den Namen dienen lediglich den Verweisen im späteren Erklärtext. Du bist frei in der Namensgebung der Felder:  

* `[Input]` Text Input feld  
* `[Validation]` Dropdown oder Checkboxen mit folgenden Auswahlen:  
  * `Ausgefüllt`
  * `Numerisch`
  * `Zwischen 10 und 20 Zeichen`
  * `Enthält ein "X", eine "3" und ein "$"`
* `[Button]` Einen Button
* `[Feedback]` Ein Feld für das Feedback (wie das Feedback dargestellt wird, ist dir überlassen. Bedingungen: Auf der Seite ersichtlich, kein Alert)  

Das Ziel des Mini-Programms ist es, dass eine Person etwas in `[Input]` eingeben kann und anschliessend bei `[Validation]` eine Auswahl trifft. Bei Klick auf `[Button]` soll der Inhalt von `[Input]` auf die gewählte `[Validation]` geprüft werden. Wenn die Eingabe den Bedingungen entspricht, soll eine Erfolgsmeldung in `[Feedback]` erscheinen, andernfalls eine Fehlermeldung.

## Bonus (empfohlen):
Erstelle zusätzlich eine Liste, welche die "History" abbildet. Nach jeder Kontrolle wird eine Zeile mit dem Resultat hinzugefügt. Zum Beispiel:  

[2099-09-05 10:55] - Die Eingabe "1456" entspricht der Validation "Numerisch"  
[2099-09-05 10:55] - Die Eingabe "1456" entspricht NICHT der Validation "Zwischen 10 und 20 Zeichen"  
[2099-09-05 10:55] - Die Eingabe "Abcd hallo" entspricht der Validation "Zeichenkette"   
