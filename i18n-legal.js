// Translations of the Privacy Policy and Terms of Use (English lives in the HTML and is the binding
// version). Loaded before i18n.js on the legal pages only. Keep in sync when the English text changes.
(function () {
  var D = window.PULSE_I18N = window.PULSE_I18N || {};
  function add(lang, strings) {
    D[lang] = D[lang] || {};
    for (var k in strings) D[lang][k] = strings[k];
  }
  var MAIL = '<a href="mailto:slugics@gmail.com">slugics@gmail.com</a>';
  var EULA = 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/';

  add('es', {
    'priv.title': `Pulse · Política de privacidad`,
    'priv.h1': `<span>PULSE</span> Política de privacidad`,
    'priv.body': `
<p class="dim">Última actualización: 20 de octubre de 2026 · Traducción de cortesía; si hay diferencias, prevalece la versión en inglés.</p>
<p>Esta política explica qué recopila la app Pulse («Pulse», «nosotros»), para qué y qué puedes hacer al respecto. Contacto: ${MAIL}.</p>
<h2>Qué recopilamos</h2>
<ul>
<li><strong>Cuenta:</strong> al iniciar sesión con Apple recibimos un identificador de cuenta y, si decides compartirlo, tu correo (Apple puede darnos una dirección de reenvío privada).</li>
<li><strong>Lo que registras:</strong> comidas, entrenos, agua, peso, sueño, ánimo, notas y fotos del diario, tu perfil (edad, sexo, altura, peso, nivel de actividad, objetivo) y tus chats con el Coach. Se guarda en tu dispositivo. Si has iniciado sesión, también se copia en nuestra base de datos en la nube para que no lo pierdas.</li>
<li><strong>Apple Health (opcional):</strong> si lo permites, Pulse lee pasos, entrenos, energía activa, sueño y peso. Pulse nunca escribe en Apple Health. Los datos de salud solo se usan para registrar tu actividad y nunca se usan para publicidad ni se comparten con intermediarios de datos.</li>
<li><strong>Créditos de IA y compras:</strong> tu saldo de créditos, el uso por función y los registros de compra (producto, fecha, ID de transacción) de Apple a través de RevenueCat. Nunca vemos tu tarjeta.</li>
<li><strong>Métricas de uso de IA:</strong> por cada petición de IA, la función usada y los tokens de IA que consumió, para fijar un precio justo a los créditos.</li>
</ul>
<h2>Cómo lo usamos</h2>
<ul>
<li>Para que la app funcione: registrar tus entradas, calcular calorías y macros, mostrar tu progreso, misiones y rangos.</li>
<li>Para responderte con IA: cuando escribes al Coach o pides planes, resúmenes o análisis, el texto, las fotos o notas de voz relevantes, tu perfil y tus registros recientes se envían a través de nuestro servidor a la API Gemini de Google para generar la respuesta.</li>
<li>Para procesar compras y asignar créditos.</li>
<li>No vendemos tus datos, no mostramos anuncios ni te rastreamos en otras apps o webs.</li>
</ul>
<h2>Quién trata tus datos</h2>
<ul>
<li><strong>Supabase</strong> (base de datos, inicio de sesión y funciones de servidor, alojado en Canadá).</li>
<li><strong>API Gemini de Google</strong> (respuestas de IA). Las peticiones pasan por nuestra cuenta de pago; según esas condiciones, Google no las usa para entrenar sus modelos.</li>
<li><strong>RevenueCat</strong> y <strong>Apple</strong> (compras dentro de la app y suscripciones).</li>
<li><strong>Open Food Facts</strong> (búsqueda de productos al escanear un código de barras; solo se envía el número del código).</li>
</ul>
<h2>Conservación y eliminación</h2>
<p>Guardamos tus datos mientras tengas una cuenta. Puedes eliminarla cuando quieras desde la app (Crew → Cuenta → Eliminar cuenta), lo que borra tu cuenta, tus créditos, los registros de compra que tenemos y tu copia en la nube. Los datos guardados solo en tu dispositivo se borran al eliminar la app. Los registros de compra que conserva Apple se rigen por la política de privacidad de Apple.</p>
<h2>Tus derechos</h2>
<p>Puedes acceder a tus datos, corregirlos o eliminarlos en la app, o escribirnos para pedir una copia o su eliminación. Según dónde vivas (por ejemplo, la UE, el Reino Unido o California) puedes tener derechos adicionales, que respetaremos.</p>
<h2>Menores</h2>
<p>Pulse no está dirigida a menores de 13 años y no recopilamos sus datos de forma consciente.</p>
<h2>Seguridad</h2>
<p>Los datos se envían por conexiones cifradas y se guardan con acceso restringido a tu propia cuenta.</p>
<h2>Cambios</h2>
<p>Si cambiamos esta política, actualizaremos la fecha de arriba y, si los cambios son importantes, te avisaremos en la app.</p>
`,
    'terms.title': `Pulse · Condiciones de uso`,
    'terms.h1': `<span>PULSE</span> Condiciones de uso`,
    'terms.body': `
<p class="dim">Última actualización: 20 de octubre de 2026 · Traducción de cortesía; si hay diferencias, prevalece la versión en inglés.</p>
<p>Pulse se te concede bajo el <a href="${EULA}">Contrato de licencia de usuario final estándar</a> de Apple, más estas condiciones.</p>
<h2>No es consejo médico</h2>
<p>Pulse ofrece orientación general de fitness y nutrición generada por IA. No es consejo médico y puede equivocarse. Consulta a un médico antes de hacer grandes cambios en tu dieta o entrenamiento, y si tienes una enfermedad, una lesión, un trastorno alimentario o estás embarazada. Deja de hacer ejercicio y busca ayuda médica si sientes dolor en el pecho, mareo o mucha falta de aire.</p>
<h2>Créditos de IA</h2>
<ul>
<li>Las funciones de IA usan créditos. El precio de cada función se muestra en la app y puede cambiar.</li>
<li>Los créditos no tienen valor monetario, no se pueden transferir y solo se usan dentro de Pulse.</li>
<li>Los créditos de paquetes no caducan mientras exista tu cuenta. Los créditos de Pulse Pro se añaden en cada periodo de facturación, y los no usados se acumulan mientras sigas suscrito.</li>
</ul>
<h2>Suscripción Pulse Pro</h2>
<p>Pulse Pro es una suscripción mensual de renovación automática que se cobra a tu Apple ID. Se renueva automáticamente salvo que la canceles al menos 24 horas antes del final del periodo actual. Gestiónala o cancélala en los ajustes de tu cuenta del App Store. Apple gestiona los reembolsos según sus políticas.</p>
<h2>Tu contenido</h2>
<p>Lo que registras es tuyo. Nos das permiso para guardarlo y tratarlo para que Pulse funcione, incluido enviarlo a nuestro proveedor de IA para generar tus respuestas.</p>
<h2>Uso aceptable</h2>
<p>No abuses del servicio, no intentes romperlo ni sobrecargarlo, ni lo uses para nada ilegal.</p>
<h2>Responsabilidad</h2>
<p>Pulse se ofrece «tal cual». En la medida en que lo permita la ley, no somos responsables de pérdidas indirectas o consecuentes, y nuestra responsabilidad total se limita a lo que nos hayas pagado en los 12 meses anteriores a la reclamación.</p>
<h2>Contacto</h2>
<p>${MAIL}</p>
`,
  });

  add('de', {
    'priv.title': `Pulse · Datenschutzerklärung`,
    'priv.h1': `<span>PULSE</span> Datenschutz`,
    'priv.body': `
<p class="dim">Zuletzt aktualisiert: 20. Oktober 2026 · Übersetzung zur Information; bei Abweichungen gilt die englische Fassung.</p>
<p>Diese Erklärung beschreibt, was die App Pulse („Pulse“, „wir“) erhebt, warum, und was du dagegen tun kannst. Kontakt: ${MAIL}.</p>
<h2>Was wir erheben</h2>
<ul>
<li><strong>Konto:</strong> Wenn du dich mit Apple anmeldest, erhalten wir eine Konto-ID und, falls du sie teilst, deine E-Mail-Adresse (Apple kann uns eine private Weiterleitungsadresse geben).</li>
<li><strong>Deine Einträge:</strong> Mahlzeiten, Workouts, Wasser, Gewicht, Schlaf, Stimmung, Tagebuchnotizen und -fotos, dein Profil (Alter, Geschlecht, Größe, Gewicht, Aktivitätslevel, Ziel) und deine Chats mit dem Coach. Das wird auf deinem Gerät gespeichert. Wenn du angemeldet bist, wird es zusätzlich in unserer Cloud-Datenbank gesichert, damit nichts verloren geht.</li>
<li><strong>Apple Health (optional):</strong> Wenn du es erlaubst, liest Pulse Schritte, Workouts, aktive Energie, Schlaf und Gewicht. Pulse schreibt nie in Apple Health. Gesundheitsdaten dienen nur dazu, deine Aktivität einzutragen, und werden nie für Werbung genutzt oder an Datenhändler weitergegeben.</li>
<li><strong>KI-Credits und Käufe:</strong> dein Credit-Guthaben, der Verbrauch pro Funktion und Kaufbelege (Produkt, Datum, Transaktions-ID) von Apple über RevenueCat. Deine Zahlungskarte sehen wir nie.</li>
<li><strong>KI-Nutzungsdaten:</strong> pro KI-Anfrage die genutzte Funktion und die Zahl der verbrauchten KI-Tokens, damit wir Credits fair bepreisen können.</li>
</ul>
<h2>Wofür wir sie nutzen</h2>
<ul>
<li>Für den Betrieb der App: Einträge speichern, Kalorien und Makros berechnen, Fortschritt, Quests und Ränge anzeigen.</li>
<li>Für KI-Antworten: Wenn du dem Coach schreibst oder Pläne, Rückblicke oder Auswertungen anforderst, werden die relevanten Texte, Fotos oder Sprachnotizen, dein Profil und deine letzten Einträge über unseren Server an die Gemini-API von Google gesendet, um die Antwort zu erzeugen.</li>
<li>Für die Abwicklung von Käufen und die Gutschrift von Credits.</li>
<li>Wir verkaufen deine Daten nicht, zeigen keine Werbung und verfolgen dich nicht über andere Apps und Websites.</li>
</ul>
<h2>Wer deine Daten verarbeitet</h2>
<ul>
<li><strong>Supabase</strong> (Datenbank, Anmeldung und Serverfunktionen, gehostet in Kanada).</li>
<li><strong>Google Gemini API</strong> (KI-Antworten). Anfragen laufen über unser bezahltes API-Konto; unter diesen Bedingungen nutzt Google sie nicht zum Trainieren seiner Modelle.</li>
<li><strong>RevenueCat</strong> und <strong>Apple</strong> (In-App-Käufe und Abos).</li>
<li><strong>Open Food Facts</strong> (Produktsuche beim Scannen eines Barcodes; nur die Barcode-Nummer wird gesendet).</li>
</ul>
<h2>Speicherdauer und Löschung</h2>
<p>Wir speichern deine Daten, solange du ein Konto hast. Du kannst dein Konto jederzeit in der App löschen (Crew → Konto → Konto löschen). Dabei werden dein Konto, deine Credits, die bei uns gespeicherten Kaufbelege und dein Cloud-Backup gelöscht. Daten, die nur auf deinem Gerät liegen, verschwinden, wenn du die App löschst. Für Kaufbelege, die Apple speichert, gilt die Datenschutzrichtlinie von Apple.</p>
<h2>Deine Rechte</h2>
<p>Du kannst deine Daten in der App einsehen, korrigieren oder löschen, oder uns per E-Mail um eine Kopie oder Löschung bitten. Je nach Wohnort (zum Beispiel EU, Vereinigtes Königreich oder Kalifornien) hast du möglicherweise weitere Rechte, die wir respektieren.</p>
<h2>Kinder</h2>
<p>Pulse richtet sich nicht an Kinder unter 13 Jahren, und wir erheben wissentlich keine Daten von ihnen.</p>
<h2>Sicherheit</h2>
<p>Daten werden über verschlüsselte Verbindungen übertragen und so gespeichert, dass nur dein eigenes Konto darauf zugreifen kann.</p>
<h2>Änderungen</h2>
<p>Wenn wir diese Erklärung ändern, aktualisieren wir das Datum oben und informieren dich bei wesentlichen Änderungen in der App.</p>
`,
    'terms.title': `Pulse · Nutzungsbedingungen`,
    'terms.h1': `<span>PULSE</span> Nutzungsbedingungen`,
    'terms.body': `
<p class="dim">Zuletzt aktualisiert: 20. Oktober 2026 · Übersetzung zur Information; bei Abweichungen gilt die englische Fassung.</p>
<p>Pulse wird dir unter Apples <a href="${EULA}">Standard-Endbenutzer-Lizenzvertrag (EULA)</a> sowie diesen Bedingungen lizenziert.</p>
<h2>Keine medizinische Beratung</h2>
<p>Pulse gibt allgemeine, KI-generierte Tipps zu Fitness und Ernährung. Das ist keine medizinische Beratung und kann falsch sein. Sprich mit einer Ärztin oder einem Arzt, bevor du Ernährung oder Training stark umstellst, und wenn du eine Erkrankung, eine Verletzung oder eine Essstörung hast oder schwanger bist. Hör sofort mit dem Training auf und hol dir ärztliche Hilfe, wenn du Brustschmerzen, Schwindel oder starke Atemnot hast.</p>
<h2>KI-Credits</h2>
<ul>
<li>KI-Funktionen verbrauchen Credits. Die Preise pro Funktion stehen in der App und können sich ändern.</li>
<li>Credits haben keinen Geldwert, sind nicht übertragbar und nur innerhalb von Pulse nutzbar.</li>
<li>Credits aus Paketen verfallen nicht, solange dein Konto besteht. Pulse-Pro-Credits kommen in jedem Abrechnungszeitraum dazu, und ungenutzte Credits bleiben erhalten, solange du abonniert bist.</li>
</ul>
<h2>Pulse-Pro-Abo</h2>
<p>Pulse Pro ist ein sich automatisch verlängerndes Monatsabo, das über deine Apple-ID abgerechnet wird. Es verlängert sich automatisch, sofern es nicht mindestens 24 Stunden vor Ende des laufenden Zeitraums gekündigt wird. Verwalte oder kündige es in den Einstellungen deines App-Store-Kontos. Erstattungen bearbeitet Apple nach seinen Richtlinien.</p>
<h2>Deine Inhalte</h2>
<p>Was du einträgst, gehört dir. Du erlaubst uns, es zu speichern und zu verarbeiten, um Pulse zu betreiben, einschließlich der Weitergabe an unseren KI-Anbieter, um Antworten für dich zu erzeugen.</p>
<h2>Zulässige Nutzung</h2>
<p>Missbrauch den Dienst nicht, versuch nicht, ihn zu stören oder zu überlasten, und nutz ihn für nichts Illegales.</p>
<h2>Haftung</h2>
<p>Pulse wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, haften wir nicht für indirekte oder Folgeschäden, und unsere Gesamthaftung ist auf den Betrag begrenzt, den du uns in den 12 Monaten vor dem Anspruch gezahlt hast.</p>
<h2>Kontakt</h2>
<p>${MAIL}</p>
`,
  });

  add('fr', {
    'priv.title': `Pulse · Politique de confidentialité`,
    'priv.h1': `<span>PULSE</span> Confidentialité`,
    'priv.body': `
<p class="dim">Dernière mise à jour : 20 octobre 2026 · Traduction fournie à titre indicatif ; en cas de différence, la version anglaise prévaut.</p>
<p>Cette politique explique ce que l’app Pulse (« Pulse », « nous ») collecte, pourquoi, et ce que tu peux faire. Contact : ${MAIL}.</p>
<h2>Ce que nous collectons</h2>
<ul>
<li><strong>Compte :</strong> quand tu te connectes avec Apple, nous recevons un identifiant de compte et, si tu choisis de le partager, ton e-mail (Apple peut nous donner une adresse relais privée).</li>
<li><strong>Ce que tu notes :</strong> repas, séances, eau, poids, sommeil, humeur, notes et photos du journal, ton profil (âge, sexe, taille, poids, niveau d’activité, objectif) et tes conversations avec le Coach. Tout est stocké sur ton appareil. Quand tu es connecté, c’est aussi sauvegardé dans notre base de données cloud pour que tu ne le perdes pas.</li>
<li><strong>Apple Santé (facultatif) :</strong> si tu l’autorises, Pulse lit les pas, les entraînements, l’énergie active, le sommeil et le poids. Pulse n’écrit jamais dans Apple Santé. Les données de santé servent uniquement à noter ton activité ; elles ne sont jamais utilisées pour la publicité ni partagées avec des courtiers en données.</li>
<li><strong>Crédits IA et achats :</strong> ton solde de crédits, l’utilisation par fonction et les reçus d’achat (produit, date, ID de transaction) d’Apple via RevenueCat. Nous ne voyons jamais ta carte bancaire.</li>
<li><strong>Mesures d’usage de l’IA :</strong> pour chaque requête IA, la fonction utilisée et le nombre de tokens IA consommés, afin de fixer un prix juste pour les crédits.</li>
</ul>
<h2>Comment nous les utilisons</h2>
<ul>
<li>Pour faire fonctionner l’app : enregistrer tes notes, calculer calories et macros, afficher ta progression, tes quêtes et tes rangs.</li>
<li>Pour te répondre avec l’IA : quand tu écris au Coach ou demandes des plans, récaps ou analyses, les textes, photos ou notes vocales concernés, ton profil et tes notes récentes passent par notre serveur vers l’API Gemini de Google pour générer la réponse.</li>
<li>Pour traiter les achats et attribuer les crédits.</li>
<li>Nous ne vendons pas tes données, n’affichons pas de publicité et ne te suivons pas sur d’autres apps et sites.</li>
</ul>
<h2>Qui traite tes données</h2>
<ul>
<li><strong>Supabase</strong> (base de données, connexion et fonctions serveur, hébergé au Canada).</li>
<li><strong>API Google Gemini</strong> (réponses IA). Les requêtes passent par notre compte API payant ; selon ces conditions, Google ne les utilise pas pour entraîner ses modèles.</li>
<li><strong>RevenueCat</strong> et <strong>Apple</strong> (achats intégrés et abonnements).</li>
<li><strong>Open Food Facts</strong> (recherche de produits quand tu scannes un code-barres ; seul le numéro du code-barres est envoyé).</li>
</ul>
<h2>Conservation et suppression</h2>
<p>Nous conservons tes données tant que tu as un compte. Tu peux supprimer ton compte à tout moment dans l’app (Crew → Compte → Supprimer le compte), ce qui supprime ton compte, tes crédits, les reçus d’achat que nous détenons et ta sauvegarde cloud. Les données stockées uniquement sur ton appareil disparaissent quand tu supprimes l’app. Les reçus conservés par Apple relèvent de la politique de confidentialité d’Apple.</p>
<h2>Tes droits</h2>
<p>Tu peux consulter, corriger ou supprimer tes données dans l’app, ou nous écrire pour en demander une copie ou la suppression. Selon l’endroit où tu vis (par exemple l’UE, le Royaume-Uni ou la Californie), tu peux avoir des droits supplémentaires, que nous respecterons.</p>
<h2>Enfants</h2>
<p>Pulse ne s’adresse pas aux enfants de moins de 13 ans, et nous ne collectons pas sciemment leurs données.</p>
<h2>Sécurité</h2>
<p>Les données transitent par des connexions chiffrées et sont stockées avec un accès limité à ton propre compte.</p>
<h2>Modifications</h2>
<p>Si nous modifions cette politique, nous mettrons à jour la date ci-dessus et, pour les changements importants, nous te préviendrons dans l’app.</p>
`,
    'terms.title': `Pulse · Conditions d’utilisation`,
    'terms.h1': `<span>PULSE</span> Conditions d’utilisation`,
    'terms.body': `
<p class="dim">Dernière mise à jour : 20 octobre 2026 · Traduction fournie à titre indicatif ; en cas de différence, la version anglaise prévaut.</p>
<p>Pulse t’est concédé sous le <a href="${EULA}">Contrat de licence utilisateur final standard</a> d’Apple, complété par ces conditions.</p>
<h2>Pas un avis médical</h2>
<p>Pulse donne des conseils généraux de fitness et de nutrition générés par IA. Ce ne sont pas des conseils médicaux et ils peuvent être faux. Parle à un médecin avant de grands changements d’alimentation ou d’entraînement, et si tu as une maladie, une blessure, un trouble alimentaire ou si tu es enceinte. Arrête l’effort et consulte un médecin en cas de douleur thoracique, de malaise ou de fort essoufflement.</p>
<h2>Crédits IA</h2>
<ul>
<li>Les fonctions IA utilisent des crédits. Le prix de chaque fonction est affiché dans l’app et peut changer.</li>
<li>Les crédits n’ont aucune valeur monétaire, ne sont pas transférables et ne s’utilisent que dans Pulse.</li>
<li>Les crédits des packs n’expirent pas tant que ton compte existe. Les crédits Pulse Pro sont ajoutés à chaque période de facturation, et les crédits non utilisés sont reportés tant que tu restes abonné.</li>
</ul>
<h2>Abonnement Pulse Pro</h2>
<p>Pulse Pro est un abonnement mensuel à renouvellement automatique facturé sur ton identifiant Apple. Il se renouvelle automatiquement sauf s’il est annulé au moins 24 heures avant la fin de la période en cours. Gère-le ou annule-le dans les réglages de ton compte App Store. Les remboursements sont gérés par Apple selon ses règles.</p>
<h2>Ton contenu</h2>
<p>Ce que tu notes t’appartient. Tu nous autorises à le stocker et à le traiter pour faire fonctionner Pulse, y compris à l’envoyer à notre fournisseur d’IA pour générer tes réponses.</p>
<h2>Usage acceptable</h2>
<p>N’abuse pas du service, n’essaie pas de le casser ou de le surcharger, et ne l’utilise pas à des fins illégales.</p>
<h2>Responsabilité</h2>
<p>Pulse est fourni « en l’état ». Dans la mesure permise par la loi, nous ne sommes pas responsables des pertes indirectes ou consécutives, et notre responsabilité totale est limitée à ce que tu nous as payé au cours des 12 mois précédant la réclamation.</p>
<h2>Contact</h2>
<p>${MAIL}</p>
`,
  });

  add('it', {
    'priv.title': `Pulse · Informativa sulla privacy`,
    'priv.h1': `<span>PULSE</span> Privacy`,
    'priv.body': `
<p class="dim">Ultimo aggiornamento: 20 ottobre 2026 · Traduzione di cortesia; in caso di differenze prevale la versione inglese.</p>
<p>Questa informativa spiega cosa raccoglie l’app Pulse («Pulse», «noi»), perché e cosa puoi fare al riguardo. Contatto: ${MAIL}.</p>
<h2>Cosa raccogliamo</h2>
<ul>
<li><strong>Account:</strong> quando accedi con Apple riceviamo un identificativo dell’account e, se scegli di condividerla, la tua email (Apple può fornirci un indirizzo di inoltro privato).</li>
<li><strong>Cosa registri:</strong> pasti, allenamenti, acqua, peso, sonno, umore, note e foto del diario, il tuo profilo (età, sesso, altezza, peso, livello di attività, obiettivo) e le chat con il Coach. Tutto è salvato sul tuo dispositivo. Quando hai effettuato l’accesso, viene anche salvato nel nostro database cloud così non lo perdi.</li>
<li><strong>Apple Salute (facoltativo):</strong> se lo consenti, Pulse legge passi, allenamenti, energia attiva, sonno e peso. Pulse non scrive mai in Apple Salute. I dati sulla salute servono solo a registrare la tua attività e non vengono mai usati per pubblicità né condivisi con broker di dati.</li>
<li><strong>Crediti IA e acquisti:</strong> il saldo dei crediti, l’uso per funzione e le ricevute d’acquisto (prodotto, data, ID transazione) da Apple tramite RevenueCat. Non vediamo mai la tua carta di pagamento.</li>
<li><strong>Metriche d’uso dell’IA:</strong> per ogni richiesta IA, la funzione usata e il numero di token IA consumati, per dare ai crediti un prezzo equo.</li>
</ul>
<h2>Come li usiamo</h2>
<ul>
<li>Per far funzionare l’app: salvare le registrazioni, calcolare calorie e macro, mostrare progressi, missioni e gradi.</li>
<li>Per risponderti con l’IA: quando scrivi al Coach o chiedi piani, riepiloghi o analisi, i testi, le foto o i messaggi vocali pertinenti, il tuo profilo e le registrazioni recenti passano dal nostro server all’API Gemini di Google per generare la risposta.</li>
<li>Per gestire gli acquisti e assegnare i crediti.</li>
<li>Non vendiamo i tuoi dati, non mostriamo pubblicità e non ti tracciamo su altre app e siti.</li>
</ul>
<h2>Chi tratta i tuoi dati</h2>
<ul>
<li><strong>Supabase</strong> (database, accesso e funzioni server, ospitato in Canada).</li>
<li><strong>API Google Gemini</strong> (risposte IA). Le richieste passano dal nostro account API a pagamento; in base a quei termini, Google non le usa per addestrare i suoi modelli.</li>
<li><strong>RevenueCat</strong> e <strong>Apple</strong> (acquisti in-app e abbonamenti).</li>
<li><strong>Open Food Facts</strong> (ricerca prodotti quando scansioni un codice a barre; viene inviato solo il numero del codice).</li>
</ul>
<h2>Conservazione ed eliminazione</h2>
<p>Conserviamo i tuoi dati finché hai un account. Puoi eliminarlo in qualsiasi momento dall’app (Crew → Account → Elimina account): vengono eliminati account, crediti, ricevute d’acquisto in nostro possesso e backup su cloud. I dati salvati solo sul dispositivo vengono rimossi quando elimini l’app. Le ricevute conservate da Apple sono regolate dall’informativa sulla privacy di Apple.</p>
<h2>I tuoi diritti</h2>
<p>Puoi accedere ai tuoi dati, correggerli o eliminarli nell’app, oppure scriverci per chiederne una copia o la cancellazione. A seconda di dove vivi (ad esempio UE, Regno Unito o California) potresti avere diritti aggiuntivi, che rispetteremo.</p>
<h2>Minori</h2>
<p>Pulse non è rivolta ai minori di 13 anni e non raccogliamo consapevolmente i loro dati.</p>
<h2>Sicurezza</h2>
<p>I dati viaggiano su connessioni cifrate e sono conservati con accesso limitato al tuo account.</p>
<h2>Modifiche</h2>
<p>Se modifichiamo questa informativa aggiorneremo la data qui sopra e, per i cambiamenti importanti, te lo diremo nell’app.</p>
`,
    'terms.title': `Pulse · Termini d’uso`,
    'terms.h1': `<span>PULSE</span> Termini d’uso`,
    'terms.body': `
<p class="dim">Ultimo aggiornamento: 20 ottobre 2026 · Traduzione di cortesia; in caso di differenze prevale la versione inglese.</p>
<p>Pulse ti è concesso in licenza secondo il <a href="${EULA}">Contratto di licenza standard per l’utente finale</a> di Apple, più questi termini.</p>
<h2>Non è un consiglio medico</h2>
<p>Pulse offre indicazioni generali su fitness e alimentazione generate dall’IA. Non sono consigli medici e possono essere sbagliate. Parla con un medico prima di grandi cambiamenti a dieta o allenamento, e se hai una patologia, un infortunio, un disturbo alimentare o sei incinta. Interrompi l’esercizio e chiedi aiuto medico se senti dolore al petto, svenimento o forte mancanza di fiato.</p>
<h2>Crediti IA</h2>
<ul>
<li>Le funzioni IA usano crediti. I prezzi per funzione sono indicati nell’app e possono cambiare.</li>
<li>I crediti non hanno valore in denaro, non sono trasferibili e si usano solo all’interno di Pulse.</li>
<li>I crediti dei pacchetti non scadono finché esiste il tuo account. I crediti Pulse Pro vengono aggiunti a ogni periodo di fatturazione, e quelli non usati si accumulano finché resti abbonato.</li>
</ul>
<h2>Abbonamento Pulse Pro</h2>
<p>Pulse Pro è un abbonamento mensile a rinnovo automatico addebitato sul tuo ID Apple. Si rinnova automaticamente se non viene annullato almeno 24 ore prima della fine del periodo in corso. Gestiscilo o annullalo nelle impostazioni del tuo account App Store. I rimborsi sono gestiti da Apple secondo le sue regole.</p>
<h2>I tuoi contenuti</h2>
<p>Quello che registri è tuo. Ci autorizzi a conservarlo e trattarlo per far funzionare Pulse, incluso inviarlo al nostro fornitore di IA per generare le tue risposte.</p>
<h2>Uso consentito</h2>
<p>Non abusare del servizio, non cercare di romperlo o sovraccaricarlo e non usarlo per scopi illegali.</p>
<h2>Responsabilità</h2>
<p>Pulse è fornito «così com’è». Nei limiti consentiti dalla legge, non siamo responsabili di perdite indirette o consequenziali, e la nostra responsabilità complessiva è limitata a quanto ci hai pagato nei 12 mesi precedenti la richiesta.</p>
<h2>Contatti</h2>
<p>${MAIL}</p>
`,
  });

  add('pt', {
    'priv.title': `Pulse · Política de Privacidade`,
    'priv.h1': `<span>PULSE</span> Privacidade`,
    'priv.body': `
<p class="dim">Última atualização: 20 de outubro de 2026 · Tradução de cortesia; em caso de diferença, vale a versão em inglês.</p>
<p>Esta política explica o que o app Pulse ("Pulse", "nós") coleta, por quê e o que você pode fazer a respeito. Contato: ${MAIL}.</p>
<h2>O que coletamos</h2>
<ul>
<li><strong>Conta:</strong> quando você entra com a Apple, recebemos um identificador de conta e, se você escolher compartilhar, seu e-mail (a Apple pode nos dar um endereço de retransmissão privado).</li>
<li><strong>O que você registra:</strong> refeições, treinos, água, peso, sono, humor, notas e fotos do diário, seu perfil (idade, sexo, altura, peso, nível de atividade, meta) e suas conversas com o Coach. Isso fica no seu aparelho. Quando você está conectado, também é copiado para nosso banco de dados na nuvem para você não perder nada.</li>
<li><strong>Apple Saúde (opcional):</strong> se você permitir, o Pulse lê passos, treinos, energia ativa, sono e peso. O Pulse nunca grava no Apple Saúde. Os dados de saúde servem só para registrar sua atividade e nunca são usados para publicidade nem compartilhados com corretores de dados.</li>
<li><strong>Créditos de IA e compras:</strong> seu saldo de créditos, o uso por recurso e os registros de compra (produto, data, ID da transação) da Apple via RevenueCat. Nunca vemos seu cartão.</li>
<li><strong>Métricas de uso de IA:</strong> para cada pedido de IA, o recurso usado e o número de tokens de IA consumidos, para precificar os créditos de forma justa.</li>
</ul>
<h2>Como usamos</h2>
<ul>
<li>Para o app funcionar: salvar seus registros, calcular calorias e macros, mostrar progresso, missões e níveis.</li>
<li>Para responder com IA: quando você fala com o Coach ou pede planos, resumos ou análises, os textos, fotos ou áudios relevantes, seu perfil e seus registros recentes passam pelo nosso servidor até a API Gemini do Google para gerar a resposta.</li>
<li>Para processar compras e liberar créditos.</li>
<li>Não vendemos seus dados, não mostramos anúncios e não rastreamos você em outros apps e sites.</li>
</ul>
<h2>Quem trata seus dados</h2>
<ul>
<li><strong>Supabase</strong> (banco de dados, login e funções de servidor, hospedado no Canadá).</li>
<li><strong>API Google Gemini</strong> (respostas de IA). Os pedidos passam pela nossa conta paga da API; por esses termos, o Google não os usa para treinar seus modelos.</li>
<li><strong>RevenueCat</strong> e <strong>Apple</strong> (compras no app e assinaturas).</li>
<li><strong>Open Food Facts</strong> (busca de produtos quando você escaneia um código de barras; só o número do código é enviado).</li>
</ul>
<h2>Retenção e exclusão</h2>
<p>Guardamos seus dados enquanto você tiver uma conta. Você pode apagar sua conta a qualquer momento no app (Crew → Conta → Apagar conta), o que apaga sua conta, seus créditos, os registros de compra que mantemos e seu backup na nuvem. Os dados guardados só no seu aparelho são removidos quando você apaga o app. Os registros de compra mantidos pela Apple seguem a política de privacidade da Apple.</p>
<h2>Seus direitos</h2>
<p>Você pode acessar, corrigir ou apagar seus dados no app, ou nos mandar um e-mail pedindo uma cópia ou a exclusão. Dependendo de onde você mora (por exemplo, UE, Reino Unido, Califórnia ou Brasil), você pode ter direitos adicionais, que vamos respeitar.</p>
<h2>Crianças</h2>
<p>O Pulse não é voltado a menores de 13 anos, e não coletamos dados deles conscientemente.</p>
<h2>Segurança</h2>
<p>Os dados trafegam por conexões criptografadas e ficam guardados com acesso restrito à sua própria conta.</p>
<h2>Mudanças</h2>
<p>Se mudarmos esta política, vamos atualizar a data acima e, em mudanças importantes, avisar você no app.</p>
`,
    'terms.title': `Pulse · Termos de Uso`,
    'terms.h1': `<span>PULSE</span> Termos de Uso`,
    'terms.body': `
<p class="dim">Última atualização: 20 de outubro de 2026 · Tradução de cortesia; em caso de diferença, vale a versão em inglês.</p>
<p>O Pulse é licenciado para você pelo <a href="${EULA}">Contrato de Licença de Usuário Final Padrão</a> da Apple, mais estes termos.</p>
<h2>Não é orientação médica</h2>
<p>O Pulse dá orientações gerais de fitness e nutrição geradas por IA. Não é orientação médica e pode errar. Fale com um médico antes de grandes mudanças na alimentação ou no treino, e se você tiver alguma doença, lesão, transtorno alimentar ou estiver grávida. Pare o exercício e procure ajuda médica se sentir dor no peito, desmaio ou falta de ar intensa.</p>
<h2>Créditos de IA</h2>
<ul>
<li>Os recursos de IA usam créditos. Os preços por recurso aparecem no app e podem mudar.</li>
<li>Créditos não têm valor em dinheiro, não podem ser transferidos e só são usados dentro do Pulse.</li>
<li>Créditos de pacotes não expiram enquanto sua conta existir. Os créditos do Pulse Pro são adicionados a cada período de cobrança, e os não usados se acumulam enquanto você continuar assinante.</li>
</ul>
<h2>Assinatura Pulse Pro</h2>
<p>O Pulse Pro é uma assinatura mensal com renovação automática cobrada no seu ID Apple. Ela renova automaticamente, a menos que seja cancelada pelo menos 24 horas antes do fim do período atual. Gerencie ou cancele nos ajustes da sua conta da App Store. Reembolsos são tratados pela Apple conforme as regras dela.</p>
<h2>Seu conteúdo</h2>
<p>O que você registra é seu. Você nos autoriza a guardar e tratar esse conteúdo para o Pulse funcionar, incluindo enviá-lo ao nosso provedor de IA para gerar suas respostas.</p>
<h2>Uso aceitável</h2>
<p>Não abuse do serviço, não tente quebrá-lo ou sobrecarregá-lo e não o use para nada ilegal.</p>
<h2>Responsabilidade</h2>
<p>O Pulse é fornecido "no estado em que se encontra". Na medida permitida por lei, não respondemos por perdas indiretas ou consequenciais, e nossa responsabilidade total se limita ao que você nos pagou nos 12 meses anteriores à reclamação.</p>
<h2>Contato</h2>
<p>${MAIL}</p>
`,
  });
})();
