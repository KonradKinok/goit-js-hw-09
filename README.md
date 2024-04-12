# goit-js-hw-09
 zadanie 9 js

Link do repozytorium:
https://github.com/KonradKinok/goit-js-hw-09

Link do strony:
https://konradkinok.github.io/goit-js-hw-09/



# Parcel template

Ten projekt został stworzony przy pomocy Parcel. W celu zapoznania się i
skonfigurowania dodatkowych opcji [zobacz dokumentację](https://parceljs.org/)

## Przygotowanie nowego projektu

1. Upewnij się, że na komputerze zainstalowana jest wersja LTS Node.js.
   [Ściągnij i zainstaluj](https://nodejs.org/en/), jeśli jest taka potrzeba.
2. Sklonuj to repozytorium.
3. Zmień nazwę folderu z `parcel-project-template` na nazwę swojego projektu.
4. Utwórz nowe, puste repozytorium na GitHub.
5. Otwórz projekt w VSCode, uruchom terminal i zwiąż projekt z repozytorium
   GitHub
   [zgodnie z instrukcją](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories#changing-a-remote-repositorys-url).
6. Utwórz zależność projektu w terminalu przez polecenie `npm install` .
7. Włącz tryb edycji, wykonując polecenie `npm start`.
8. Przejdź w przeglądarce pod adres
   [http://localhost:1234](http://localhost:1234). Ta strona będzie się
   automatycznie odświeżać po dokonaniu zmian w plikach projektu.

## Pliki i foldery

- Wszystkie partiale plików stylów powinny znajdować się w folderze `src/sass` i
  importować się w pliki stylów stron. Na przykład dla `index.html` plik stylów
  nazywa się `index.scss`.
- Obrazy dodawaj do pliku `src/images`. Moduł zbierający optymalizuje je, ale
  tylko przy deploymencie wersji produkcyjnej projektu. Wszystko to zachodzi w
  chmurze, aby nie obciążać twojego komputera, ponieważ na słabszym sprzęcie
  może to zająć sporo czasu.

## Deployment

Aby skonfigurować deployment projektu należy wykonać kilka dodatkowych kroków
konfigurowania twojego repozytorium. Wejdź w zakładkę `Settings` i w podsekcji
`Actions` wybierz punkt `General`.

![GitHub actions settings](./assets/actions-config-step-1.png)

Przejdź do ostatniej sekcji, w której upewnij się, że wybrane opcje są takie
same jak na następnym obrazku i kliknij `Save`. Bez tych ustawień w module
zbierającym będzie zbyt mało pozwoleń dla automatyzacji procesu deploymentu.

![GitHub actions settings](./assets/actions-config-step-2.png)

Wersja produkcyjna projektu będzie automatycznie gromadzić się i deployować na
GitHub Pages w gałęzi `gh-pages` za każdym razem, gdy aktualizuje się gałąź
`main`. Na przykład po bezpośrednim pushu lub przyjętym pull requeście. W tym
celu niezbędne jest, aby w pliku `package.json` wyedytować pole `homepage` i
skrypt `build`, zamieniając `your_username` i `your_repo_name` na swoje nazwy i
wysłać zmiany na GitHub.

```json
"homepage": "https://your_username.github.io/your_repo_name/",
"scripts": {
  "build": "parcel build src/*.html --public-url /your_repo_name/"
},
```

Dalej należy wejść w ustawienia repozytorium GitHub (`Settings` > `Pages`) i
wystawić dystrybucję wersji produkcyjnej z folderu `/root` gałęzi `gh-pages`,
jeśli nie zrobiło się to automatycznie.

![GitHub Pages settings](./assets/repo-settings.png)

### Status deploymentu

Status deploymentu ostatniego commitu wyświetla się na ikonie obok jego
identyfikatora.

- ** Żółty kolor** - wykonuje się zbudowanie i deployment projektu.
- ** Zielony kolor** - deployment zakończył się sukcesem.
- ** Czerwony kolor** - w czasie lintingu, budowania lub deplymentu pojawił się
  błąd.

Więcej informacji o statusie można zobaczyć klikając na ikonkę i w wyskakującym
oknie przejść do odnośnika `Details`.

![Deployment status](./assets/status.png)

### Działająca strona

Po jakimś czasie, zazwyczaj kilku minut, działającą stronę będzie można zobaczyć
pod adresem wskazanym w wyedytowanej właściwości `homepage`. Na przykład tu
znajduje się odnośnik do działającej strony dla tego repozytorium
[https://goitacademy.github.io/parcel-project-template](https://goitacademy.github.io/parcel-project-template).

Jeżeli otwiera się pusta strona, upewnij się, że w zakładce `Console` nie ma
błędów związanych z nieprawidłowymi ścieżkami do plików projektu CSS i JS
(**404**). Najprawdopodobniej wprowadzona została nieprawidłowa wartość
właściwości `homepage` lub skryptu `build` w pliku `package.json`.

## Jak to działa

![How it works](./assets/how-it-works.png)

1. Po każdym pushu w gałęzi `main` repozytorium GitHub, włącza się specjalny
   skrypt (GitHub Action) z pliku `.github/workflows/deploy.yml`.
2. Wszystkie pliki repozytorium kopiują się na serwer, gdzie projekt
   inicjalizuje się i buduje przed deploymentem.
3. Jeżeli wszystkie kroki zakończyły się sukcesem, zbudowana wersja produkcyjna
   plików projektu wysyła się w gałąź `gh-pages`. W przeciwnym razie, w logu
   wykonania skryptu wskazane zostanie, w czym jest problem.


# Kryteria przyjęcia

- Utworzono repozytorium `goit-js-hw-09`.
- Przy oddaniu pracy domowej dołączono linki: do plików
  źródłowych i strony roboczej na `GitHub Pages`.
- Wiersz poleceń nie zawiera błędów i ostrzeżeń.
- Projekt utworzono z pomocą
  [parcel-project-template](https://github.com/goitacademy/parcel-project-template).
- Sformatowano kod `Prettier`.

## Pliki startowe

W [folderze src](./src) znajdziesz pliki startowe z gotowym znacznikiem, stylami i
połączonymi plikami skryptów dla każdego zadania. Skopiuj je do swojego projektu, 
całkowicie zamieniając folder `src` w
[parcel-project-template](https://github.com/goitacademy/parcel-project-template).
Aby to zrobić, pobierz całe repozytorium jako archiwum lub użyj
[serwisu DownGit](https://downgit.github.io/) aby pobrać oddzielny folder z
repozytorium.

## Zadanie 1 - zmiana koloru

Wykonuj to zadanie w plikach `01-color-switcher.html` i `01-color-switcher.js`.
Obejrzyj wersję demonstracyjną wideo o działaniu zmiany koloru.

https://user-images.githubusercontent.com/17479434/127716753-fabd276f-6a7d-411b-bfa2-01c818f4ea66.mp4

W HTML znajdują się przyciski «Start» i «Stop».

```html
<button type="button" data-start>Start</button>
<button type="button" data-stop>Stop</button>
```
Napisz skrypt, który po kliknięciu przycisku «Start», raz na sekundę zmienia kolor
tła `<body>` na wartość losową używając stylu inline. Po kliknięciu
przycisku «Stop», kolor tła powinien przestać się zmieniać.

> ⚠️ Zwróć uwagę na to, że przycisk «Start» można klikać w nieskończoność. Zrób
> tak, żeby przycisk «Start» był nieaktywny, dopóki zmiana tematu jest uruchomiona
> (disabled).

Aby wygenerować losowy kolor użyj funkcji `getRandomHexColor`.

```js
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
```

## Zadanie 2 - odliczanie czasu

Wykonuj to zadanie w plikach `02-timer.html` i `02-timer.js`. Napisz skrypt
licznika, który odlicza czas do określonego zdarzenia. Taki licznik można
wykorzystywać na blogach czy w sklepach internetowych, stronach z różnymi wydarzeniami, podczas
przerwy technicznej itd. Obejrzyj wersję demonstracyjną wideo o działaniu licznika.

https://user-images.githubusercontent.com/17479434/127672390-2a51efe1-06fb-41dd-86dd-8542393d3043.mp4

### Elementy interfesju

W HTML znajduje się znacznik licznika, pola wyboru końcowej daty i przycisku, po
którego kliknięciu licznik powinien się uruchomić. Popraw wizualnie
elementy interfejsu.

```html
<input type="text" id="datetime-picker" />
<button type="button" data-start>Start</button>

<div class="timer">
  <div class="field">
    <span class="value" data-days>00</span>
    <span class="label">Days</span>
  </div>
  <div class="field">
    <span class="value" data-hours>00</span>
    <span class="label">Hours</span>
  </div>
  <div class="field">
    <span class="value" data-minutes>00</span>
    <span class="label">Minutes</span>
  </div>
  <div class="field">
    <span class="value" data-seconds>00</span>
    <span class="label">Seconds</span>
  </div>
</div>
```

### Biblioteka `flatpickr`

Używaj biblioteki [flatpickr](https://flatpickr.js.org/) po to, aby
pozwolić użytkownikowi wybrać ostateczną datę i godzinę w różnych przeglądarkach w jednym
elemencie interfejsu. Aby połączyć kod CSS biblioteki z projektem,
należy dodać jeszcze jeden import, oprócz tego opisanego w dokumentacji.

```js
// Opisany w dokumentacji
import flatpickr from 'flatpickr';
// Dodatkowy import stylów
import 'flatpickr/dist/flatpickr.min.css';
```

Biblioteka czeka na jej inicjalizację w elemencie `input[type="text"]`,
dlatego dodaliśmy do HTML `input#datetime-picker`.

```html
<input type="text" id="datetime-picker" />
```

Drugim argumentem funkcji `flatpickr(selector, options)` można przekazać
nieobowiązkowy obiekt parametrów. Przygotowaliśmy dla Ciebie obiekt, który jest niezbędny
do wykonania zadania. Zorientuj się, za co odpowiada każda właściwość w
[dokumentacji «Options»](https://flatpickr.js.org/options/) i użyj jej w 
swoim kodzie.

```js
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};
```

### Wybór daty

Metoda `onClose()` z obiektu parametrów pojawia się za każdym razem przy zamknięciu
elementu interfejsu, który tworzy `flatpickr`. To właśnie w nim należy opracować
datę wybraną przez użytkownika. Parametr `selectedDates` to tablica wybranych dat,
dlatego bierzemy pierwszy element.

- Jeśli użytkownik wybrał datę z przeszłości, pokaż `window.alert()` o treści
  `"Please choose a date in the future"`.
- Jeśli użytkownik wybrał odpowiednią datę (z przyszłości), przycisk «Start» staje się
  aktywny.
- Przycisk «Start» powinien być nieaktywny dotąd, dopóki użytkownik nie wybierze
  daty z przyszłości.
- Po kliknięciu przycisku «Start» zaczyna się odliczanie czasu do wybranej daty od
  momentu kliknięcia.

### Odliczanie czasu

Po kliknięciu na przycisk «Start» skrypt powinien wyliczać raz na sekundę ile
czasu pozostało do wskazanej daty i aktualizować interfejs licznika, pokazując
cztery liczby: dni, godziny, minuty i sekundy w formacie `xx:xx:xx:xx`.

- Liczba dni może się składać z więcej niż dwóch cyfr.
- Licznik powinien się zatrzymać, po dojściu do daty końcowej, czyli
  `00:00:00:00`.

> 💡 Nie będziemy komplikować. Jeśli licznik jest uruchomiony, należy odświeżyć stronę,
> aby go zrestartować i wybrać nową datę.

Aby obliczyć wartości użyj gotowej funkcji `convertMs`, gdzie `ms` - różnica
między końcową i aktualną datą w milisekundach.

```js
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
```

### Formatowanie czasu

Funkcja `convertMs()` przywraca obiekt z obliczonym pozostałym czasem do
daty końcowej. Zwróć uwagę, że nie formatuje wyniku. To znaczy, że jeśli
pozostały 4 minuty czy sekundy, to funkcja przywróci `4`,
a nie `04`. W interfejsie licznika konieczne jest dodanie `0` jeśli liczba zawiera mniej niż
dwa symbole. Napisz funkcję `addLeadingZero(value)`, która używa
metody `padStart()` i przed renderowaniem interfejsu sformatuj wartość.

### Biblioteka powiadomień

> ⚠️ Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą
> dodatkową praktyką.

Aby wyświetlić użytkownikowi powiadomienie, zamiast `window.alert()` użyj
biblioteki [notiflix](https://github.com/notiflix/Notiflix#readme).

## Zadanie 3 - generator obietnic

Wykonuj to zadanie w plikach `03-promises.html` i `03-promises.js`. Obejrzyj
wersję demonstracyjną wideo o działaniu generatora obietnic.

https://user-images.githubusercontent.com/17479434/127932183-42232f26-4db2-4614-86bc-6bec54b1d6a4.mp4

W HTML znajduje się znacznik formularza, w którego pola użytkownik będzie wprowadzał pierwsze
opóźnienie w milisekundach, stopień zwiększenia opóźnienia dla każdej kolejnej obietnicy
i liczbę obietnic, które należy utworzyć.

```html
<form class="form">
  <label>
    First delay (ms)
    <input type="number" name="delay" required />
  </label>
  <label>
    Delay step (ms)
    <input type="number" name="step" required />
  </label>
  <label>
    Amount
    <input type="number" name="amount" required />
  </label>
  <button type="submit">Create promises</button>
</form>
```

Napisz skrypt, który po wysłaniu formularza wywoła funkcję
`createPromise(position, delay)` tyle razy, ile wprowadzono w pole `amount`. Po
każdym wywołaniu przekaż jej numer utworzonej obietnicy (`position`) i opóźnienie,
uwzględniając wprowadzone przez użytkownika pierwsze opóźnienie (`delay`) i stopień (`step`).

```js
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}
```

Uzupełnij kod funkcji `createPromise` tak, aby przywracała **jedną obietnicę**,
którą realizuje się lub odkłada poprzez `delay` czasu. Wartością obietnicy
powinien być obiekt, w którym będą właściwości `position` i `delay` z wartościami
parametrów o tej samej nazwie. Użyj kodu początkowego funkcji, aby wybrać to, co
należy zrobić z obietnicą - zrealizować lub odłożyć.

```js
createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
```

### Biblioteka powiadomień

> ⚠️ Następna funkcja nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrą
> dodatkową praktyką.

Aby wyświetlić użytkownikowi powiadomienie, zamiast `console.log()` użyj
biblioteki [notiflix](https://github.com/notiflix/Notiflix#readme).
