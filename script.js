const questionsBackup = [
    {
        "question": "Do ograniczeń spojrzenia ilościowego zalicza się to że:",
        "answers": [
            {"text": "nie jest ono w stanie w pełni wyjaśnić i przewidzieć ludzkie zachowania w organizacjach", "correct": true},
            {"text": "matematyczne modele zależą od sytuacji na rynku i w przedsiębiorstwie", "correct": false},
            {"text": "modele mogą wymagać nierealistycznych lub bezzasadnych założeń", "correct": true},
            {"text": "teoria ta zajmowała się prostymi organizacjami, które obecnie są złożone i ulegają zmianom", "correct": false}
        ]
    },
    {
        "question": "Karol Adamecki:",
        "answers": [
            {"text": "opracował naukowe metody mierzenia wydajności pracy", "correct": false},
            {"text": "przyczynił się do rozwoju zasad funkcjonowania rynku", "correct": true},
            {"text": "sformułował prawo podziału pracy i wynikające z tego prawa specjalizacji", "correct": true},
            {"text": "był przedstawicielem naukowego zarządzania", "correct": false}
        ]
    },
    {
        "question": "Wśród kryteriów oceny sformułowanej strategii wymienia się czy:",
        "answers": [
            {"text": "Jest odpowiednia pod względem przyjętego poziomu ryzyka", "correct": true},
            {"text": "Jest adekwatna do udziału przedsiębiorstwa w rynku", "correct": false},
            {"text": "Obejmuje odbiorców produktów i usług przedsiębiorstwa", "correct": false},
            {"text": "Jest odpowiednia w stosunku do posiadanych zasobów", "correct": true}
        ]
    },
    {
        "question": "W procesie racjonalnego podejmowania decyzji w drugim etapie należy",
        "answers": [
            {"text": "Opracować warianty decyzji ale ich nie oceniać", "correct": true},
            {"text": "Oceniać warianty decyzji i wybrać najlepszy", "correct": false},
            {"text": "Zdefiniować problem i określić jego przyczyny", "correct": false},
            {"text": "Wdrożyć najlepszy wariant decyzji i kontrolować jego realizację", "correct": false}
        ]
    },
    {
        "question": "Do skutecznych systemów kontroli należy",
        "answers": [
            {"text": "Różnorodność wykorzystywanych w systemie informacji", "correct": false},
            {"text": "Koncentracja na strategicznych punktach kontroli", "correct": true},
            {"text": "Koordynacja z tokiem pracy w całej organizacji", "correct": true},
            {"text": "Nastawienie na wyniki przekraczające poziom minimalny", "correct": false}
        ]
    },
    {
        "question": "Styl negocjacji opartych na zasadach cechuje:",
        "answers": [
            {"text": "Upieranie się przy stosowaniu obiektywnych kryteriów", "correct": true},
            {"text": "Ustępowanie aby pielęgnować wzajemne stosunki", "correct": false},
            {"text": "Wprowadzanie w błąd, co do dolnej granicy porozumienia", "correct": false},
            {"text": "Żądanie jednostronnych korzyści jako warunku zawarcia porozumienia", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawidłowe zdanie/zdania",
        "answers": [
            {"text": "Pierwszym etapem tworzenia struktury organizacyjnej jest określenie układu władzy w organizacji", "correct": false},
            {"text": "Przedstawicielem zarządzania administracyjnego był Abraham Maslow", "correct": false},
            {"text": "Źródłem rozpoznawania problemów w przedsiębiorstwie jest odchylenie od dotychczasowych osiągnięć", "correct": true},
            {"text": "Problem decyzyjny występuje wówczas, jeśli liczba jego rozwiązań jest duża lub nieokreślona", "correct": true}
        ]
    },
    {
        "question": "Zarządzanie operacyjne (zaznacz prawidłowe zdanie/a):",
        "answers": [
            {"text": "Wpływa na rozwój oferty przedsiębiorstwa, wzbogacenie jej o nowe usługi i produkty.", "correct": false},
            {"text": "Jego celem jest zapewnienie płynnej kontynuacji codziennych działań.", "correct": true},
            {"text": "Ułatwia dbałość o regularne dostarczanie usług lub produktów określonej jakości.", "correct": true},
            {"text": "Dzięki niemu organizacja skupia się na planowym zarządzaniu zmianą.", "correct": false}
        ]
    },
    {
        "question": "Analiza luki strategicznej (dokończ zdanie/a):",
        "answers": [
            {"text": "Jej celem jest określenie sytuacji konkurencyjnej firmy w sektorze.", "correct": false},
            {"text": "Odnosi się do zjawisk mierzalnych i powtarzalnych.", "correct": true},
            {"text": "Jest wykorzystywana do badania strategii dla poszczególnych produktów.", "correct": false},
            {"text": "Ilustruje dopasowanie strategii firmy do dynamiki zmian otoczenia.", "correct": true}
        ]
    },
    {
        "question": "Zarządzanie naukowe koncentrowało się na:",
        "answers": [
            {"text": "Poprawie wyników osiąganych przez poszczególnych robotników.", "correct": true},
            {"text": "Stosowaniu technik ilościowych w kierowaniu ludźmi.", "correct": true},
            {"text": "Zarządzaniu całą organizacją w celu zwiększenia integracji w łańcuchach dostaw.", "correct": false},
            {"text": "Konstruktywnym planowaniu dystrybucji sprzedaży produktów.", "correct": false}
        ]
    },
    {
        "question": "Do zalet koncepcji Lean Management należy:",
        "answers": [
            {"text": "Zwracanie większej uwagi na potrzeby i życzenia klientów.", "correct": true},
            {"text": "Zwiększenie luki strategicznej między przedsiębiorstwem a konkurencją.", "correct": false},
            {"text": "Brak zadowolenia pracowników z lepszej komunikacji między kierownikami a podwładnymi.", "correct": false},
            {"text": "Silniejsza motywacja pracowników i ich utożsamianie się z sukcesami firmy.", "correct": true}
        ]
    },
    {
        "question": "Kontrola biurokratyczna w organizacji:",
        "answers": [
            {"text": "Jest stosowana w spłaszczonych strukturach organizacyjnych.", "correct": false},
            {"text": "Jest charakterystyczna dla wysmukłych struktur organizacyjnych.", "correct": true},
            {"text": "Obejmuje współuczestnictwo szerokie i nieformalne.", "correct": false},
            {"text": "Jest nastawiona na najniższy poziom wyników do zaakceptowania.", "correct": true}
        ]
    },
    {
        "question": "Które zachowanie organizacji jest zgodne z nazwą:",
        "answers": [
            {"text": "adaptacyjne - organizacja podejmuje próby działań dostosowawczych do otoczenia", "correct": true},
            {"text": "reaktywne - organizacja nie śledzi otoczenia, nie respektuje jego oddziaływania", "correct": false},
            {"text": "kreatywne - organizacja usiłuje oddziaływać na stan otoczenia, wywołuje w nim określone zdarzenia", "correct": true},
            {"text": "ignorujące - organizacja respektuje (przyjmuje) oddziaływanie otoczenia w najprostszy sposób", "correct": false}
        ]
    },
	    {
        "question": "Do przesłanek wdrażania benchmarkingu należy to, że ta koncepcja:",
        "answers": [
            {"text": "Pomaga wyznaczać ambitne, ale możliwe do osiągnięcia cele.", "correct": true},
            {"text": "Umożliwia identyfikację pozycji konkurencyjnej organizacji.", "correct": true},
            {"text": "Zwiększa potrzebę większej rotacji pracowników na stanowiskach.", "correct": false},
            {"text": "Pozwala na ograniczanie i rozwiązywanie konfliktów.", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawdziwe zdanie/a:",
        "answers": [
            {"text": "Podstawą koncepcji łańcucha wartości jest systemowe podejście do biznesu.", "correct": true},
            {"text": "Metody scenariuszowe pozwalają firmie określić kluczowe czynniki sukcesu.", "correct": false},
            {"text": "Macierz BCG jest stosowana w badaniach zmian nieciągłych na rynku.", "correct": false},
            {"text": "Celem analizy '5 sił Portera' jest określenie sytuacji konkurencyjnej firmy w sektorze.", "correct": true}
        ]
    },
    {
        "question": "Do najczęstszych błędów przy dokonywaniu zmian należy:",
        "answers": [
            {"text": "skuteczne przekonywanie ludzi do konieczności zmiany", "correct": false},
            {"text": "zbyt duża ilość zasobów materialnych i niematerialnych utrudniająca organizację pracy", "correct": false},
            {"text": "wprowadzanie zbyt wielu zmian w zbyt krótkim czasie", "correct": true},
            {"text": "niskiej jakości analizy, oceny i monitorowanie rezultatów zmiany", "correct": true}
        ]
    },
    {
        "question": "Demokratyczny styl przewodzenia cechuje to, że:",
        "answers": [
            {"text": "wymaga od kierownika umiejętności wczuwania się w sytuację współpracowników", "correct": true},
            {"text": "kierownik w minimalnym stopniu interesuje się problemami swoich podwładnych", "correct": false},
            {"text": "wymaga od kierownika silnej osobowości i ugruntowanej wiedzy fachowej", "correct": true},
            {"text": "kierownik niechętnie przyjmuje przejawy inicjatywy ze strony podwładnych", "correct": false}
        ]
    },
    {
        "question": "Do przyczyn niepowodzeń w planowaniu należy:",
        "answers": [
            {"text": "Przygotowywanie planów przez grupę odrębną nie uczestniczącą w zarządzaniu firmą", "correct": true},
            {"text": "Zbyt skomplikowane plany wynikające z dążenia planistów do uwzględnienia zmian w otoczeniu", "correct": true},
            {"text": "Opracowywanie prostych planów, które dotyczą tylko poszczególnych funkcji działania", "correct": false},
            {"text": "Uwzględnianie zmian koniunkturalnych na rynku i bazowanie na prognozach", "correct": false}
        ]
    },
    {
        "question": "Teoria oczekiwań Victora H. Vrooma zakłada, że:",
        "answers": [
            {"text": "ludzie dążą do sprawiedliwości społecznej i porównują się do współpracowników", "correct": false},
            {"text": "ludzie dokonują wyborów spośród alternatywnych planów zachowania", "correct": true},
            {"text": "zachowanie człowieka jest funkcją sił tkwiących w nim samym i jego otoczeniu", "correct": true},
            {"text": "źródłem motywacji dla pracowników są nieuświadomione impulsy wewnętrzne", "correct": false}
        ]
    },
    {
        "question": "Do wad Reengineeringu należy:",
        "answers": [
            {"text": "wzrost wydajności i skrócenie czasu trwania procesów", "correct": false},
            {"text": "niedocenianie aspektów kulturowych, co może doprowadzić do silnego oporu wobec zmian", "correct": true},
            {"text": "pomijanie pracowników w trakcie przygotowywania reorganizacji", "correct": true},
            {"text": "niskie koszty wdrażania tej koncepcji i realizacji szkoleń", "correct": false}
        ]
    },
    {
        "question": "Cykl życia produktu jest różny dla różnych produktów i zależy od:",
        "answers": [
            {"text": "struktury podmiotów działających na rynku", "correct": true},
            {"text": "możliwości zróżnicowania kanałów dystrybucji", "correct": false},
            {"text": "postępu technicznego i technologicznego w sferze wytwarzania", "correct": true},
            {"text": "możliwości zwiększenia sprzedaży produktu na dotychczasowym rynku", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawidłowe zdanie/a:",
        "answers": [
            {"text": "kultura roli najlepiej sprawdza się w małych organizacjach", "correct": false},
            {"text": "kultura celu jest ukierunkowana na pracę zespołową, na grupę osiągającą wspólny cel", "correct": true},
            {"text": "w kulturze roli władza wynika z wiedzy i doświadczenia w wykonywaniu danego rodzaju zadań", "correct": false},
            {"text": "kultura jednostki jest stworzona dla pracownika i do zaspokajania jego potrzeb zawodowych", "correct": true}
        ]
    },
    {
        "question": "Do zalet struktury funkcjonalnej zalicza się:",
        "answers": [
            {"text": "możliwość bezpośrednich kontaktów ze specjalistami", "correct": true},
            {"text": "wysoką centralizację w podejmowaniu decyzji", "correct": false},
            {"text": "zdolność szybkiego reagowania na zmiany w organizacji", "correct": true},
            {"text": "przestrzeganie zasady jednoosobowego kierownictwa", "correct": false}
        ]
    },
    {
        "question": "Strategia penetracji rynku w modelu strategii H.I. Ansoffa polega na:",
        "answers": [
            {"text": "zdobyciu nowych klientów poprzez złamanie ich lojalności wobec poprzednich dostawców", "correct": true},
            {"text": "oferowaniu na starym rynku nowych lub zmodyfikowanych produktów", "correct": false},
            {"text": "wejściu z produktami na nowe, wcześniej nie obsługiwane segmenty rynku", "correct": false},
            {"text": "zdobyciu nowych klientów, którzy do tej pory nie kupowali danego produktu", "correct": true}
        ]
    },
    {
        "question": "Jedną z cech zarządzania strategicznego jest to, że:",
        "answers": [
            {"text": "występuje w nim określony poziom ryzyka w zakresie wyników finansowych", "correct": false},
            {"text": "nie istnieje jeden, najwłaściwszy sposób formułowania strategii", "correct": true},
            {"text": "w formułowaniu strategii uwzględnia się zarówno metody empiryczne jak i dedukcyjne", "correct": true},
            {"text": "opiera się tylko na danych ilościowych i nie uwzględnia danych jakościowych", "correct": false}
        ]
    }
];

let questions = [
    {
        "question": "Do ograniczeń spojrzenia ilościowego zalicza się to że:",
        "answers": [
            {"text": "nie jest ono w stanie w pełni wyjaśnić i przewidzieć ludzkie zachowania w organizacjach", "correct": true},
            {"text": "matematyczne modele zależą od sytuacji na rynku i w przedsiębiorstwie", "correct": false},
            {"text": "modele mogą wymagać nierealistycznych lub bezzasadnych założeń", "correct": true},
            {"text": "teoria ta zajmowała się prostymi organizacjami, które obecnie są złożone i ulegają zmianom", "correct": false}
        ]
    },
    {
        "question": "Karol Adamecki:",
        "answers": [
            {"text": "opracował naukowe metody mierzenia wydajności pracy", "correct": false},
            {"text": "przyczynił się do rozwoju zasad funkcjonowania rynku", "correct": true},
            {"text": "sformułował prawo podziału pracy i wynikające z tego prawa specjalizacji", "correct": true},
            {"text": "był przedstawicielem naukowego zarządzania", "correct": false}
        ]
    },
    {
        "question": "Wśród kryteriów oceny sformułowanej strategii wymienia się czy:",
        "answers": [
            {"text": "Jest odpowiednia pod względem przyjętego poziomu ryzyka", "correct": true},
            {"text": "Jest adekwatna do udziału przedsiębiorstwa w rynku", "correct": false},
            {"text": "Obejmuje odbiorców produktów i usług przedsiębiorstwa", "correct": false},
            {"text": "Jest odpowiednia w stosunku do posiadanych zasobów", "correct": true}
        ]
    },
    {
        "question": "W procesie racjonalnego podejmowania decyzji w drugim etapie należy",
        "answers": [
            {"text": "Opracować warianty decyzji ale ich nie oceniać", "correct": true},
            {"text": "Oceniać warianty decyzji i wybrać najlepszy", "correct": false},
            {"text": "Zdefiniować problem i określić jego przyczyny", "correct": false},
            {"text": "Wdrożyć najlepszy wariant decyzji i kontrolować jego realizację", "correct": false}
        ]
    },
    {
        "question": "Do skutecznych systemów kontroli należy",
        "answers": [
            {"text": "Różnorodność wykorzystywanych w systemie informacji", "correct": false},
            {"text": "Koncentracja na strategicznych punktach kontroli", "correct": true},
            {"text": "Koordynacja z tokiem pracy w całej organizacji", "correct": true},
            {"text": "Nastawienie na wyniki przekraczające poziom minimalny", "correct": false}
        ]
    },
    {
        "question": "Styl negocjacji opartych na zasadach cechuje:",
        "answers": [
            {"text": "Upieranie się przy stosowaniu obiektywnych kryteriów", "correct": true},
            {"text": "Ustępowanie aby pielęgnować wzajemne stosunki", "correct": false},
            {"text": "Wprowadzanie w błąd, co do dolnej granicy porozumienia", "correct": false},
            {"text": "Żądanie jednostronnych korzyści jako warunku zawarcia porozumienia", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawidłowe zdanie/zdania",
        "answers": [
            {"text": "Pierwszym etapem tworzenia struktury organizacyjnej jest określenie układu władzy w organizacji", "correct": false},
            {"text": "Przedstawicielem zarządzania administracyjnego był Abraham Maslow", "correct": false},
            {"text": "Źródłem rozpoznawania problemów w przedsiębiorstwie jest odchylenie od dotychczasowych osiągnięć", "correct": true},
            {"text": "Problem decyzyjny występuje wówczas, jeśli liczba jego rozwiązań jest duża lub nieokreślona", "correct": true}
        ]
    },
    {
        "question": "Zarządzanie operacyjne (zaznacz prawidłowe zdanie/a):",
        "answers": [
            {"text": "Wpływa na rozwój oferty przedsiębiorstwa, wzbogacenie jej o nowe usługi i produkty.", "correct": false},
            {"text": "Jego celem jest zapewnienie płynnej kontynuacji codziennych działań.", "correct": true},
            {"text": "Ułatwia dbałość o regularne dostarczanie usług lub produktów określonej jakości.", "correct": true},
            {"text": "Dzięki niemu organizacja skupia się na planowym zarządzaniu zmianą.", "correct": false}
        ]
    },
    {
        "question": "Analiza luki strategicznej (dokończ zdanie/a):",
        "answers": [
            {"text": "Jej celem jest określenie sytuacji konkurencyjnej firmy w sektorze.", "correct": false},
            {"text": "Odnosi się do zjawisk mierzalnych i powtarzalnych.", "correct": true},
            {"text": "Jest wykorzystywana do badania strategii dla poszczególnych produktów.", "correct": false},
            {"text": "Ilustruje dopasowanie strategii firmy do dynamiki zmian otoczenia.", "correct": true}
        ]
    },
    {
        "question": "Zarządzanie naukowe koncentrowało się na:",
        "answers": [
            {"text": "Poprawie wyników osiąganych przez poszczególnych robotników.", "correct": true},
            {"text": "Stosowaniu technik ilościowych w kierowaniu ludźmi.", "correct": true},
            {"text": "Zarządzaniu całą organizacją w celu zwiększenia integracji w łańcuchach dostaw.", "correct": false},
            {"text": "Konstruktywnym planowaniu dystrybucji sprzedaży produktów.", "correct": false}
        ]
    },
    {
        "question": "Do zalet koncepcji Lean Management należy:",
        "answers": [
            {"text": "Zwracanie większej uwagi na potrzeby i życzenia klientów.", "correct": true},
            {"text": "Zwiększenie luki strategicznej między przedsiębiorstwem a konkurencją.", "correct": false},
            {"text": "Brak zadowolenia pracowników z lepszej komunikacji między kierownikami a podwładnymi.", "correct": false},
            {"text": "Silniejsza motywacja pracowników i ich utożsamianie się z sukcesami firmy.", "correct": true}
        ]
    },
    {
        "question": "Kontrola biurokratyczna w organizacji:",
        "answers": [
            {"text": "Jest stosowana w spłaszczonych strukturach organizacyjnych.", "correct": false},
            {"text": "Jest charakterystyczna dla wysmukłych struktur organizacyjnych.", "correct": true},
            {"text": "Obejmuje współuczestnictwo szerokie i nieformalne.", "correct": false},
            {"text": "Jest nastawiona na najniższy poziom wyników do zaakceptowania.", "correct": true}
        ]
    },
    {
        "question": "Które zachowanie organizacji jest zgodne z nazwą:",
        "answers": [
            {"text": "adaptacyjne - organizacja podejmuje próby działań dostosowawczych do otoczenia", "correct": true},
            {"text": "reaktywne - organizacja nie śledzi otoczenia, nie respektuje jego oddziaływania", "correct": false},
            {"text": "kreatywne - organizacja usiłuje oddziaływać na stan otoczenia, wywołuje w nim określone zdarzenia", "correct": true},
            {"text": "ignorujące - organizacja respektuje (przyjmuje) oddziaływanie otoczenia w najprostszy sposób", "correct": false}
        ]
    },
	    {
        "question": "Do przesłanek wdrażania benchmarkingu należy to, że ta koncepcja:",
        "answers": [
            {"text": "Pomaga wyznaczać ambitne, ale możliwe do osiągnięcia cele.", "correct": true},
            {"text": "Umożliwia identyfikację pozycji konkurencyjnej organizacji.", "correct": true},
            {"text": "Zwiększa potrzebę większej rotacji pracowników na stanowiskach.", "correct": false},
            {"text": "Pozwala na ograniczanie i rozwiązywanie konfliktów.", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawdziwe zdanie/a:",
        "answers": [
            {"text": "Podstawą koncepcji łańcucha wartości jest systemowe podejście do biznesu.", "correct": true},
            {"text": "Metody scenariuszowe pozwalają firmie określić kluczowe czynniki sukcesu.", "correct": false},
            {"text": "Macierz BCG jest stosowana w badaniach zmian nieciągłych na rynku.", "correct": false},
            {"text": "Celem analizy '5 sił Portera' jest określenie sytuacji konkurencyjnej firmy w sektorze.", "correct": true}
        ]
    },
    {
        "question": "Do najczęstszych błędów przy dokonywaniu zmian należy:",
        "answers": [
            {"text": "skuteczne przekonywanie ludzi do konieczności zmiany", "correct": false},
            {"text": "zbyt duża ilość zasobów materialnych i niematerialnych utrudniająca organizację pracy", "correct": false},
            {"text": "wprowadzanie zbyt wielu zmian w zbyt krótkim czasie", "correct": true},
            {"text": "niskiej jakości analizy, oceny i monitorowanie rezultatów zmiany", "correct": true}
        ]
    },
    {
        "question": "Demokratyczny styl przewodzenia cechuje to, że:",
        "answers": [
            {"text": "wymaga od kierownika umiejętności wczuwania się w sytuację współpracowników", "correct": true},
            {"text": "kierownik w minimalnym stopniu interesuje się problemami swoich podwładnych", "correct": false},
            {"text": "wymaga od kierownika silnej osobowości i ugruntowanej wiedzy fachowej", "correct": true},
            {"text": "kierownik niechętnie przyjmuje przejawy inicjatywy ze strony podwładnych", "correct": false}
        ]
    },
    {
        "question": "Do przyczyn niepowodzeń w planowaniu należy:",
        "answers": [
            {"text": "Przygotowywanie planów przez grupę odrębną nie uczestniczącą w zarządzaniu firmą", "correct": true},
            {"text": "Zbyt skomplikowane plany wynikające z dążenia planistów do uwzględnienia zmian w otoczeniu", "correct": true},
            {"text": "Opracowywanie prostych planów, które dotyczą tylko poszczególnych funkcji działania", "correct": false},
            {"text": "Uwzględnianie zmian koniunkturalnych na rynku i bazowanie na prognozach", "correct": false}
        ]
    },
    {
        "question": "Teoria oczekiwań Victora H. Vrooma zakłada, że:",
        "answers": [
            {"text": "ludzie dążą do sprawiedliwości społecznej i porównują się do współpracowników", "correct": false},
            {"text": "ludzie dokonują wyborów spośród alternatywnych planów zachowania", "correct": true},
            {"text": "zachowanie człowieka jest funkcją sił tkwiących w nim samym i jego otoczeniu", "correct": true},
            {"text": "źródłem motywacji dla pracowników są nieuświadomione impulsy wewnętrzne", "correct": false}
        ]
    },
    {
        "question": "Do wad Reengineeringu należy:",
        "answers": [
            {"text": "wzrost wydajności i skrócenie czasu trwania procesów", "correct": false},
            {"text": "niedocenianie aspektów kulturowych, co może doprowadzić do silnego oporu wobec zmian", "correct": true},
            {"text": "pomijanie pracowników w trakcie przygotowywania reorganizacji", "correct": true},
            {"text": "niskie koszty wdrażania tej koncepcji i realizacji szkoleń", "correct": false}
        ]
    },
    {
        "question": "Cykl życia produktu jest różny dla różnych produktów i zależy od:",
        "answers": [
            {"text": "struktury podmiotów działających na rynku", "correct": true},
            {"text": "możliwości zróżnicowania kanałów dystrybucji", "correct": false},
            {"text": "postępu technicznego i technologicznego w sferze wytwarzania", "correct": true},
            {"text": "możliwości zwiększenia sprzedaży produktu na dotychczasowym rynku", "correct": false}
        ]
    },
    {
        "question": "Zaznacz prawidłowe zdanie/a:",
        "answers": [
            {"text": "kultura roli najlepiej sprawdza się w małych organizacjach", "correct": false},
            {"text": "kultura celu jest ukierunkowana na pracę zespołową, na grupę osiągającą wspólny cel", "correct": true},
            {"text": "w kulturze roli władza wynika z wiedzy i doświadczenia w wykonywaniu danego rodzaju zadań", "correct": false},
            {"text": "kultura jednostki jest stworzona dla pracownika i do zaspokajania jego potrzeb zawodowych", "correct": true}
        ]
    },
    {
        "question": "Do zalet struktury funkcjonalnej zalicza się:",
        "answers": [
            {"text": "możliwość bezpośrednich kontaktów ze specjalistami", "correct": true},
            {"text": "wysoką centralizację w podejmowaniu decyzji", "correct": false},
            {"text": "zdolność szybkiego reagowania na zmiany w organizacji", "correct": true},
            {"text": "przestrzeganie zasady jednoosobowego kierownictwa", "correct": false}
        ]
    },
    {
        "question": "Strategia penetracji rynku w modelu strategii H.I. Ansoffa polega na:",
        "answers": [
            {"text": "zdobyciu nowych klientów poprzez złamanie ich lojalności wobec poprzednich dostawców", "correct": true},
            {"text": "oferowaniu na starym rynku nowych lub zmodyfikowanych produktów", "correct": false},
            {"text": "wejściu z produktami na nowe, wcześniej nie obsługiwane segmenty rynku", "correct": false},
            {"text": "zdobyciu nowych klientów, którzy do tej pory nie kupowali danego produktu", "correct": true}
        ]
    },
    {
        "question": "Jedną z cech zarządzania strategicznego jest to, że:",
        "answers": [
            {"text": "występuje w nim określony poziom ryzyka w zakresie wyników finansowych", "correct": false},
            {"text": "nie istnieje jeden, najwłaściwszy sposób formułowania strategii", "correct": true},
            {"text": "w formułowaniu strategii uwzględnia się zarówno metody empiryczne jak i dedukcyjne", "correct": true},
            {"text": "opiera się tylko na danych ilościowych i nie uwzględnia danych jakościowych", "correct": false}
        ]
    }
];

let incorrectQuestions = [];
let repeatMode = false;

document.getElementById('start-btn').addEventListener('click', startQuiz);

let currentQuestionIndex = 0;
let correctAnswers = 0;
let incorrectAnswers = 0;
let userAnswers = [];

function startQuiz() {
    shuffleArray(questions);
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('counters').style.display = 'flex';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('results-container').classList.add('d-none');
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
    }

    const question = questions[currentQuestionIndex];
    shuffleArray(question.answers);

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <h2 class="question font-weight-bold">${question.question}</h2>
        <div class="answers">
            ${question.answers.map(answer => `
                <div class="form-check answer">
                    <input type="checkbox" class="form-check-input" id="answer${currentQuestionIndex}-${answer.text}" value="${answer.correct}">
                    <label class="form-check-label" for="answer${currentQuestionIndex}-${answer.text}">${answer.text}</label>
                </div>
            `).join('')}
        </div>
        <div>
            <button class="btn btn-success d-block" onclick="checkAnswer()">Następne</button>
        </div>
        <br/>
        <div>
            <button class="btn btn-primary d-block" onclick="handleUnansweredQuestions()">Przejdź do podsumowania</button>
        </div>
    `;

    document.getElementById('question-counter').innerText = `Pytanie ${currentQuestionIndex + 1}/${questions.length}`;
}

function checkAnswer() {
    const answers = document.querySelectorAll('.answer input');
    let isCorrect = true;
    let userAnswerTexts = [];

    answers.forEach(answer => {
        if (answer.checked) {
            userAnswerTexts.push(answer.parentNode.textContent.trim());
            if (answer.value === 'false') {
                isCorrect = false;
            }
        } else if (answer.value === 'true') {
            isCorrect = false;
        }
    });

    userAnswers.push(userAnswerTexts);

    if (isCorrect) {
        correctAnswers++;
    } else {
        incorrectAnswers++;
        incorrectQuestions.push(questions[currentQuestionIndex]);
    }

    document.getElementById('correct-answers').innerText = `Poprawne: ${correctAnswers}`;
    document.getElementById('incorrect-answers').innerText = `Błędne: ${incorrectAnswers}`;

    currentQuestionIndex++;
    showQuestion();
}

function showResults() {
    document.getElementById('quiz-container').classList.add('d-none');
    const resultsContainer = document.getElementById('results-container');
    resultsContainer.classList.remove('d-none');

    const resultsBody = document.getElementById('results-body');
    resultsBody.innerHTML = questions.map((question, index) => `
        <tr>
            <td>${question.question}</td>
            <td style="color: ${isAnswerCorrect(question, userAnswers[index]) ? 'green' : 'red'}">
                <ol>
                    ${userAnswers[index] ? userAnswers[index].map(answer => `<li>${answer}</li>`).join('') : ''}
                </ol>
            </td>
            <td>
                <ol>
                    ${getCorrectAnswer(question)}
                </ol>
            </td>
        </tr>
    `).join('');
}

function handleUnansweredQuestions() {
    questions.slice(currentQuestionIndex).forEach((question, index) => {
        let userAnswerTexts = ["Brak odpowiedzi"];
        userAnswers.push(userAnswerTexts);
        incorrectAnswers++;
        incorrectQuestions.push(question);
    });

    document.getElementById('correct-answers').innerText = `Poprawne: ${correctAnswers}`;
    document.getElementById('incorrect-answers').innerText = `Błędne: ${incorrectAnswers}`;

    currentQuestionIndex = questions.length;
    showResults();
}

function repeatIncorrectQuestions() {
    if (incorrectQuestions.length === 0) {
        alert('Nie ma błędnych pytań do powtórki.');
        return;
    }

    questions = incorrectQuestions;
    incorrectQuestions = [];
    repeatMode = true;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    userAnswers = [];

    document.getElementById('correct-answers').innerText = 'Poprawne: 0';
    document.getElementById('incorrect-answers').innerText = 'Błędne: 0';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('results-container').classList.add('d-none');

    showQuestion();
}

function isAnswerCorrect(question, userAnswers) {
    if (!userAnswers) return false;
    const correctAnswers = getCorrectAnswer(question).replace(/<li>|<\/li>/g, '').split('| ');
    return userAnswers.every(answer => correctAnswers.includes(answer));
}

function getUserAnswer(question, index) {
    return userAnswers[index] ? userAnswers[index].join('<br>') : '';
}

function getCorrectAnswer(question) {
    return question.answers
        .filter(answer => answer.correct)
        .map(answer => `<li>${answer.text}</li>`)
        .join('| ');
}

function restartQuiz() {
    questions = questionsBackup;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;
    userAnswers = [];
    document.getElementById('correct-answers').innerText = 'Poprawne: 0';
    document.getElementById('incorrect-answers').innerText = 'Błędne: 0';
    document.getElementById('quiz-container').innerHTML = '<h2>Kliknij start aby rozpocząć test [Zarządzanie dla wtajemniczonych]</h2><button id="start-btn" class="btn btn-success">Start</button>';
    document.getElementById('quiz-container').classList.remove('d-none');
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('start-btn').addEventListener('click', startQuiz);
    document.getElementById('counters').style.display = 'none';
    document.getElementById('results-container').classList.add('d-none');
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}