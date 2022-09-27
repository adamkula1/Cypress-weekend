# cypress-weekend
Cypress weekend Entry Task

Info
Entry Task je jednoduchá úloha, ktorá môže byť vyriešená mnohými spôsobmi. Počas testov kontroluj, že zobrazené výsledky zodpovedajú zadaným kritériám (e.g. dátumy, destinácie, ceny, ...). Svoje riešenie môžeš vypracovať v JavaScripte alebo TypeScripte. Ak nemáš skúsenosti s poslednou, 10. verziou Cypressu, svoje riešenie môžeš zaslať aj vo verzii 9.7.0. Keď budeš mať Entry Task hotový nahraj svoje riešenie na Github a zdieľaj riešenie s nami.

Posledný deň pre odovzdanie tvojho riešenia je 9. október!

Vypracuj Entry Task v Cypress.io podľa vybranej obtiažnosti (Task 1 alebo Task 2):

Task 1 - Vypracuj prvú časť
Task 2 - Vypracuj prvú časť a druhú časť
Entry Task
Prvá časť
Náročnosť 💀
Navštív webovú stránku kiwi.com
Použi placepicker na vyhľadanie destinácie, vyhľadaj let do Dublinu.
Pridaj jedného dospelého cestujúceho.
Skús si poradiť so zaškrtávacím políčkom Check accommodation with Booking.com.
Pokračuj na výsledky vyhľadávania.
Daj si zobraziť výsledky podľa najlacnejších.
Over, že zobrazené výsledky zodpovedajú kritériám zadaným vyššie.
Pokračuj na rezervačný formulár.
Presvedč sa, že tvoj test je stabilný a prechádza 10/10 (10x z desiatich pokusov).
Druhá časť
Náročnosť 💀💀
V tomto bode by si už mal mať hotovú prvú časť, a tak byť viac zoznámený s kiwi.com webovou aplikáciou.
Kedže v tomto prípade testujeme rezervačný formulár, preto chceme aby náš test začal na stránke rezervačného formuláru. Inými slovami nenavštevuj stránku kiwi.com a nehľadaj lety na hlavnej stránke.
Prejdeme priamo na rezervačný formulár a to na adresu https://www.kiwi.com/booking?token={booking_token}.
booking_token je možno získať pomocou Search API a to prostredníctvom flights endpointu.
Nie je nutné sa registrovať na Tequila portáli, pre komunikáciu s flights API použi cypress ako hodnotu pre parameter partner.
V prípade, že ti IATA kód nič nehovorí, tu je stránka kódy letísk ktorá by ti mala pômocť získať potrebné info.
booking_token je dynamická hodnota, preto si treba booking_toke získať pred každým testom.
V rezervačnom formulári sa budeme sústrediť na doplnkovú službu cestovného poistenia.
Otestuj, že v prípade národnosti inej ako US* (vrátane teritórií patriacich pod US), má zákazník na výber z troch možností. Skontroluj, že všetky možnosti sú klikateľné a fungujú.
Zmeň národnosť na US a otestuj možnosti ako v predošlom prípade. V teste skontroluj, či sú nutné daľšie informácie, ak áno tak ich vyplň.
Odovzdanie
V tomto momente máš hotovo, nahraj svoje riešenie na Github a zdieľaj ho s cypressweekend@kiwi.com.

Nezabudni, že deadline je 9.10.2022!

*US - United States - Amerika
