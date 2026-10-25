// Site translations. English lives in the HTML; this file holds the other five app languages.
// Language order: ?lang= in the URL, then the visitor's saved pick, then the browser language, then English.
// Elements opt in with data-i18n (text), data-i18n-html (markup), data-i18n-aria (aria-label) and
// data-i18n-content (meta content). Every <select class="lang"> on the page becomes the language picker.
(function () {
  var LANGS = { en: 'English', es: 'Español', de: 'Deutsch', fr: 'Français', it: 'Italiano', pt: 'Português' };
  var KEY = 'pulse-lang';

  var D = window.PULSE_I18N = window.PULSE_I18N || {};
  function add(lang, strings) {
    D[lang] = D[lang] || {};
    for (var k in strings) D[lang][k] = strings[k];
  }

  add('es', {
    'meta.title': `Pulse: rastreador de fitness retro`,
    'meta.desc': `Pulse es un rastreador de fitness con estilo retro. Registra comidas, entrenos, agua y ánimo hablando, escribiendo o con una foto. Cuenta calorías y macros, mantén tu racha, sube de rango y reta a tu crew.`,
    'nav.features': `Funciones`, 'nav.screens': `Pantallas`, 'nav.support': `Soporte`, 'nav.getIt': `Descargar`, 'nav.home': `Inicio`,
    'hero.kicker': `Contador de calorías y registro de entrenos · estilo retro`,
    'hero.title': `REGÍSTRALO.<br>SUMA XP.<br><span class="drip">DOMINA EL BARRIO.</span>`,
    'hero.lead': `Pulse convierte cuidarte en un arcade callejero de los 80. Dile al Coach qué comiste, haz una foto o escanea un código de barras, y él se encarga de las calorías y los macros. Cada registro da XP, las rachas lo multiplican, y las misiones, cofres y retos te hacen volver.`,
    'hero.download': `⬇ Descargar para iPhone`, 'hero.see': `Mira lo que trae`,
    'hero.note': `Gratis · 50 créditos de IA al registrarte · iPhone`, 'hero.streak': `RACHA DE 2 DÍAS 🔥`,
    'features.title': `QUÉ HAY EN LA CAJA`,
    'features.sub': `Todo lo que necesitas para comer bien, entrenar y no perder la cabeza, envuelto en neón y spray.`,
    'f1.t': `EL COACH`, 'f1.p': `Habla, escribe o manda una foto. Tu coach con IA registra comidas y entrenos, responde preguntas y crea planes de comidas y de entreno. Elige una personalidad: Sarge, MC Hype, Breeze, Sensei y más.`,
    'f2.t': `FOTO Y ESCÁNER`, 'f2.p': `Fotografía un plato para ver calorías y macros al instante, o escanea un código de barras. Agua, peso, sueño y ánimo a un toque. Apple Health mantiene sincronizadas tus calorías quemadas.`,
    'f3.t': `RACHAS Y RANGOS`, 'f3.p': `Cada registro da XP. Sube 15 rangos de Street Crew, de Rookie a Pulse Immortal, desbloquea nuevos muros y usa protectores de racha para salvar un día perdido.`,
    'f4.t': `MISIONES DIARIAS`, 'f4.p': `Tres misiones nuevas cada día, de fáciles a difíciles. Complétalas todas para el bonus de Día Perfecto y gana fichas para gastar en el arcade.`,
    'f5.t': `ARCADE ANTIESTRÉS`, 'f5.p': `Juegos mentales de un minuto para desconectar. Gana rondas de Brain Gym y consigue cofres de plata y oro llenos de fichas, XP, protectores y avatares raros.`,
    'f6.t': `BATALLAS DE SQUAD`, 'f6.p': `Añade amigos, mira la clasificación y empieza retos en solitario o cara a cara. Activa el Modo Difícil para un objetivo más duro y un cofre de oro.`,
    'screens.title': `DIRECTO DEL TÚNEL`, 'screens.sub': `Un tour rápido por la app. Toca las flechas o desliza para avanzar.`,
    'screens.prev': `Pantalla anterior`, 'screens.next': `Pantalla siguiente`,
    'cap.stats': `ESTADÍSTICAS`, 'cap.ranks': `RANGOS`,
    'crew.title': `REPRESENTA A TU CREW`, 'crew.sub': `Elige tu avatar. Desbloquea más al subir de rango o gastando XP, y busca cofres para los raros.`,
    'install.title': `CONSIGUE PULSE EN TU IPHONE`,
    'install.sub': `Pulse está en beta pública en TestFlight, la app oficial de betas de Apple. Cualquiera puede unirse, y es gratis.`,
    'badge.rec': `Recomendado`, 'beta.t': `ÚNETE A LA BETA`,
    'beta.1': `Instala <a href="https://apps.apple.com/app/testflight/id899247664">TestFlight</a> desde el App Store.`,
    'beta.2': `En tu iPhone, toca <strong>Unirse a la beta</strong> abajo y luego <strong>Aceptar</strong>.`,
    'beta.3': `Toca <strong>Instalar</strong>. Pulse aparece en tu pantalla de inicio y se actualiza solo.`,
    'beta.btn': `⬇ Unirse a la beta`, 'beta.note': `¿Abriste esta página en un ordenador? Envía el enlace a tu móvil.`,
    'badge.soon': `Próximamente`, 'store.t': `APP STORE`,
    'store.p': `Pulse 1.0 está en revisión de Apple. Esta página enlazará directamente al App Store cuando esté disponible.`,
    'badge.adv': `Avanzado`, 'ipa.t': `DESCARGAR EL .IPA`,
    'ipa.p': `La última versión está en GitHub. El iPhone solo instala apps del App Store o TestFlight, así que necesitas una herramienta de sideloading como AltStore o Sideloadly para firmarla con tu propio Apple ID.`,
    'ipa.all': `Todas las versiones`,
    'support.title': `SOPORTE`,
    'support.sub': `Preguntas, errores o sugerencias: <a href="mailto:slugics@gmail.com">slugics@gmail.com</a>. Solemos responder en 2 días hábiles.`,
    'faq1.q': `¿Cómo funcionan los créditos de IA?`,
    'faq1.a': `El Coach, los planes y los resúmenes usan créditos de IA. Las cuentas nuevas reciben 50 créditos gratis. Puedes comprar paquetes o suscribirte a Pulse Pro en Crew → Créditos, donde se indica el coste de cada función. También puedes ganar créditos gratis invitando a amigos o canjeando XP.`,
    'faq2.q': `¿Cómo restauro mis compras?`, 'faq2.a': `Crew → Créditos → Restaurar compras. Inicia sesión con el mismo Apple ID con el que compraste.`,
    'faq3.q': `¿Cómo cancelo Pulse Pro?`, 'faq3.a': `Ajustes del iPhone → tu nombre → Suscripciones → Pulse Pro → Cancelar. Conservas tus créditos hasta el final del periodo.`,
    'faq4.q': `¿Cómo elimino mi cuenta?`, 'faq4.a': `Crew → Cuenta → Eliminar cuenta. Esto borra tu cuenta, tus créditos y tu copia en la nube.`,
    'faq5.q': `¿Cómo cambio el idioma?`, 'faq5.a': `Pulse usa el idioma de tu iPhone. Para cambiarlo solo en Pulse: Ajustes → Apps → Pulse → Idioma.`,
    'faq6.q': `¿Mis datos son privados?`, 'faq6.a': `Tus registros se quedan en tu móvil salvo que actives la copia en la nube. Lee la <a href="privacy.html">Política de privacidad</a> para más detalles.`,
    'support.disclaimer': `Pulse ofrece orientación general de fitness y nutrición generada por IA. No es consejo médico.`,
    'footer.made': `© 2026 Pulse · Hecho en los túneles`, 'footer.privacy': `Política de privacidad`, 'footer.terms': `Condiciones de uso`, 'footer.contact': `Contacto`,
    'inv.title': `Te invitan a Pulse`,
    'inv.desc': `Un amigo te invitó a Pulse, el coach de fitness con IA hecho como un juego arcade. Únete y los dos recibís 25 créditos de IA gratis.`,
    'inv.tag': `Tu crew te llama`, 'inv.h1': `TE INVITAN<br>A PULSE`,
    'inv.p': `Únete con este código y <strong>los dos recibís 25 créditos de IA gratis</strong> para el Coach, los planes de comidas y los de entreno.`,
    'inv.tap': `Toca el código para copiarlo`, 'inv.copied': `¡Copiado!`, 'inv.copyTitle': `Toca para copiar`,
    'inv.s1': `Consigue Pulse desde la beta en TestFlight (gratis).`,
    'inv.s2': `Ábrelo e inicia sesión con Apple en Crew → Cuenta.`,
    'inv.s3': `Toca <strong>Abrir en Pulse</strong> abajo, o escribe el código en Crew → Créditos → Tengo un código.`,
    'inv.pSquad': `Un amigo te quiere en su <strong>tabla del Squad</strong>. Abre este enlace en tu iPhone con Pulse instalado y listo.`,
    'inv.pCrew': `Tu equipo te quiere dentro. Abre este enlace en tu iPhone con Pulse instalado y <strong>te unes al equipo automáticamente</strong>.`,
    'inv.s3Squad': `Toca <strong>Abrir en Pulse</strong> abajo. Pulse hace el resto en cuanto inicies sesión.`,
    'inv.open': `Abrir en Pulse`, 'inv.get': `⬇ Consigue Pulse`, 'inv.what': `¿Qué es Pulse?`,
  });

  add('de', {
    'meta.title': `Pulse: Retro-Fitness-Tracker`,
    'meta.desc': `Pulse ist ein Fitness-Tracker im Retro-Stil. Trag Mahlzeiten, Workouts, Wasser und Stimmung per Sprache, Text oder Foto ein. Zähl Kalorien und Makros, halte deinen Streak, steig im Rang auf und fordere deine Crew heraus.`,
    'nav.features': `Funktionen`, 'nav.screens': `Screens`, 'nav.support': `Support`, 'nav.getIt': `Holen`, 'nav.home': `Start`,
    'hero.kicker': `Kalorienzähler & Trainingslog · Retro-Stil`,
    'hero.title': `EINTRAGEN.<br>XP STAPELN.<br><span class="drip">DEN BLOCK RULEN.</span>`,
    'hero.lead': `Pulse macht gesund bleiben zu einer 80er-Straßen-Arcade. Sag dem Coach, was du gegessen hast, mach ein Foto oder scanne einen Barcode – er kümmert sich um Kalorien und Makros. Jeder Eintrag bringt XP, Serien vervielfachen sie, und Quests, Truhen und Challenges halten dich bei der Stange.`,
    'hero.download': `⬇ Für iPhone laden`, 'hero.see': `Was drin ist`,
    'hero.note': `Kostenlos · 50 KI-Credits bei der Anmeldung · iPhone`, 'hero.streak': `2-TAGE-SERIE 🔥`,
    'features.title': `WAS IN DER BOX IST`,
    'features.sub': `Alles, was du brauchst, um gut zu essen, zu trainieren und entspannt zu bleiben – in Neon und Sprühfarbe.`,
    'f1.t': `DER COACH`, 'f1.p': `Sprich, tipp oder schick ein Foto. Dein KI-Coach trägt Mahlzeiten und Workouts ein, beantwortet Fragen und erstellt Ernährungs- und Trainingspläne. Wähl eine Persönlichkeit: Sarge, MC Hype, Breeze, Sensei und mehr.`,
    'f2.t': `FOTO &amp; SCAN`, 'f2.p': `Fotografier einen Teller für sofortige Kalorien und Makros, oder scanne einen Barcode. Wasser, Gewicht, Schlaf und Stimmung sind nur einen Tipp entfernt. Apple Health hält deine verbrannten Kalorien synchron.`,
    'f3.t': `SERIEN &amp; RÄNGE`, 'f3.p': `Jeder Eintrag bringt XP. Klettere 15 Street-Crew-Ränge von Rookie bis Pulse Immortal hoch, schalte neue Wände frei und rette verpasste Tage mit Serien-Freezes.`,
    'f4.t': `TÄGLICHE QUESTS`, 'f4.p': `Jeden Tag drei neue Quests, von leicht bis schwer. Schaff alle für den Perfekter-Tag-Bonus und verdien Tokens für die Arcade.`,
    'f5.t': `STRESS-ARCADE`, 'f5.p': `Einminütige Denkspiele für einen schnellen Reset. Gewinn Brain-Gym-Runden für Silber- und Goldtruhen voller Tokens, XP, Freezes und seltener Avatare.`,
    'f6.t': `SQUAD-BATTLES`, 'f6.p': `Füg Freunde hinzu, check die Rangliste und starte Challenges allein oder im Duell. Mit dem Hard Mode gibt es ein härteres Ziel und eine Goldtruhe.`,
    'screens.title': `DIREKT AUS DEM TUNNEL`, 'screens.sub': `Eine kurze Tour durch die App. Tipp auf die Pfeile oder wisch weiter.`,
    'screens.prev': `Vorheriger Screen`, 'screens.next': `Nächster Screen`,
    'cap.stats': `STATISTIK`, 'cap.ranks': `RÄNGE`,
    'crew.title': `ZEIG DEINE CREW`, 'crew.sub': `Wähl deinen Avatar. Schalte mehr frei, wenn du aufsteigst oder XP ausgibst, und jag Truhen für die seltenen.`,
    'install.title': `HOL DIR PULSE AUFS IPHONE`,
    'install.sub': `Pulse ist in der öffentlichen Beta auf TestFlight, Apples offizieller Beta-App. Jeder kann mitmachen, und es ist kostenlos.`,
    'badge.rec': `Empfohlen`, 'beta.t': `BETA BEITRETEN`,
    'beta.1': `Installier <a href="https://apps.apple.com/app/testflight/id899247664">TestFlight</a> aus dem App Store.`,
    'beta.2': `Tipp auf deinem iPhone unten auf <strong>Beta beitreten</strong> und dann auf <strong>Akzeptieren</strong>.`,
    'beta.3': `Tipp auf <strong>Installieren</strong>. Pulse landet auf deinem Home-Bildschirm und aktualisiert sich automatisch.`,
    'beta.btn': `⬇ Beta beitreten`, 'beta.note': `Du bist am Computer? Schick dir den Link aufs Handy.`,
    'badge.soon': `Bald verfügbar`, 'store.t': `APP STORE`,
    'store.p': `Pulse 1.0 ist im App Review. Sobald es live ist, verlinkt diese Seite direkt in den App Store.`,
    'badge.adv': `Für Profis`, 'ipa.t': `.IPA HERUNTERLADEN`,
    'ipa.p': `Der neueste Build liegt auf GitHub. iPhones installieren nur Apps aus dem App Store oder TestFlight, du brauchst also ein Sideloading-Tool wie AltStore oder Sideloadly, um ihn mit deiner eigenen Apple-ID neu zu signieren.`,
    'ipa.all': `Alle Releases`,
    'support.title': `SUPPORT`,
    'support.sub': `Fragen, Bugs oder Feedback: <a href="mailto:slugics@gmail.com">slugics@gmail.com</a>. Wir antworten meist innerhalb von 2 Werktagen.`,
    'faq1.q': `Wie funktionieren KI-Credits?`,
    'faq1.a': `Coach, Pläne und Rückblicke verbrauchen KI-Credits. Neue Konten bekommen 50 Gratis-Credits. Du kannst Credit-Pakete kaufen oder Pulse Pro abonnieren unter Crew → Credits, wo die Kosten jeder Funktion stehen. Gratis-Credits gibt es auch, wenn du Freunde einlädst oder XP eintauschst.`,
    'faq2.q': `Wie stelle ich Käufe wieder her?`, 'faq2.a': `Crew → Credits → Käufe wiederherstellen. Melde dich mit derselben Apple-ID an, mit der du gekauft hast.`,
    'faq3.q': `Wie kündige ich Pulse Pro?`, 'faq3.a': `iPhone-Einstellungen → dein Name → Abonnements → Pulse Pro → Kündigen. Deine Credits bleiben bis zum Ende des Zeitraums.`,
    'faq4.q': `Wie lösche ich mein Konto?`, 'faq4.a': `Crew → Konto → Konto löschen. Damit werden dein Konto, deine Credits und dein Cloud-Backup gelöscht.`,
    'faq5.q': `Wie ändere ich die Sprache?`, 'faq5.a': `Pulse folgt der Sprache deines iPhones. Nur für Pulse ändern: Einstellungen → Apps → Pulse → Sprache.`,
    'faq6.q': `Sind meine Daten privat?`, 'faq6.a': `Deine Einträge bleiben auf deinem Handy, außer du schaltest das Cloud-Backup ein. Details in der <a href="privacy.html">Datenschutzerklärung</a>.`,
    'support.disclaimer': `Pulse gibt allgemeine, KI-generierte Tipps zu Fitness und Ernährung. Das ist keine medizinische Beratung.`,
    'footer.made': `© 2026 Pulse · Gemacht in den Tunneln`, 'footer.privacy': `Datenschutz`, 'footer.terms': `Nutzungsbedingungen`, 'footer.contact': `Kontakt`,
    'inv.title': `Du bist zu Pulse eingeladen`,
    'inv.desc': `Ein Freund hat dich zu Pulse eingeladen, dem KI-Fitnesscoach im Arcade-Stil. Mach mit und ihr bekommt beide 25 Gratis-KI-Credits.`,
    'inv.tag': `Deine Crew ruft`, 'inv.h1': `DU BIST ZU<br>PULSE EINGELADEN`,
    'inv.p': `Tritt mit diesem Code bei und <strong>ihr bekommt beide 25 Gratis-KI-Credits</strong> für den Coach, Ernährungs- und Trainingspläne.`,
    'inv.tap': `Tipp auf den Code, um ihn zu kopieren`, 'inv.copied': `Kopiert!`, 'inv.copyTitle': `Zum Kopieren tippen`,
    'inv.s1': `Hol dir Pulse über die Beta auf TestFlight (kostenlos).`,
    'inv.s2': `Öffne es und melde dich mit Apple an unter Crew → Konto.`,
    'inv.s3': `Tipp unten auf <strong>In Pulse öffnen</strong> oder gib den Code ein unter Crew → Credits → Ich habe einen Code.`,
    'inv.pSquad': `Ein Freund will dich auf seiner <strong>Squad-Rangliste</strong>. Öffne diesen Link auf deinem iPhone mit Pulse und du bist dabei.`,
    'inv.pCrew': `Deine Crew will dich dabeihaben. Öffne diesen Link auf deinem iPhone mit Pulse und du <strong>trittst der Crew automatisch bei</strong>.`,
    'inv.s3Squad': `Tipp unten auf <strong>In Pulse öffnen</strong>. Den Rest erledigt Pulse, sobald du angemeldet bist.`,
    'inv.open': `In Pulse öffnen`, 'inv.get': `⬇ Pulse holen`, 'inv.what': `Was ist Pulse?`,
  });

  add('fr', {
    'meta.title': `Pulse : suivi fitness rétro`,
    'meta.desc': `Pulse est un suivi fitness au style rétro. Note tes repas, séances, eau et humeur en parlant, en écrivant ou en photo. Compte calories et macros, garde ta série, monte en rang et défie ton crew.`,
    'nav.features': `Fonctions`, 'nav.screens': `Écrans`, 'nav.support': `Aide`, 'nav.getIt': `L’obtenir`, 'nav.home': `Accueil`,
    'hero.kicker': `Compteur de calories et journal d’entraînement · style rétro`,
    'hero.title': `NOTE-LE.<br>CUMULE L’XP.<br><span class="drip">RÈGNE SUR LE QUARTIER.</span>`,
    'hero.lead': `Pulse transforme ta santé en arcade de rue des années 80. Dis au Coach ce que tu as mangé, prends une photo ou scanne un code-barres, et il gère les calories et les macros. Chaque note rapporte des XP, les séries les multiplient, et les quêtes, coffres et défis te font revenir.`,
    'hero.download': `⬇ Télécharger pour iPhone`, 'hero.see': `Voir ce qu’il y a dedans`,
    'hero.note': `Gratuit · 50 crédits IA à l’inscription · iPhone`, 'hero.streak': `SÉRIE DE 2 JOURS 🔥`,
    'features.title': `DANS LA BOÎTE`,
    'features.sub': `Tout ce qu’il faut pour bien manger, s’entraîner et garder la tête froide, emballé dans le néon et la bombe de peinture.`,
    'f1.t': `LE COACH`, 'f1.p': `Parle, écris ou envoie une photo. Ton coach IA note repas et séances, répond à tes questions et crée des plans repas et entraînement. Choisis une personnalité : Sarge, MC Hype, Breeze, Sensei et d’autres.`,
    'f2.t': `PHOTO &amp; SCAN`, 'f2.p': `Photographie une assiette pour avoir calories et macros instantanément, ou scanne un code-barres. Eau, poids, sommeil et humeur en un geste. Apple Health synchronise tes calories brûlées.`,
    'f3.t': `SÉRIES &amp; RANGS`, 'f3.p': `Chaque note rapporte des XP. Grimpe les 15 rangs du Street Crew, de Rookie à Pulse Immortal, débloque de nouveaux murs et utilise des gels de série pour sauver un jour manqué.`,
    'f4.t': `QUÊTES DU JOUR`, 'f4.p': `Trois nouvelles quêtes chaque jour, de facile à difficile. Réussis-les toutes pour le bonus Journée parfaite et gagne des jetons à dépenser à l’arcade.`,
    'f5.t': `ARCADE ANTI-STRESS`, 'f5.p': `Des jeux de réflexion d’une minute pour souffler. Gagne des manches de Brain Gym pour des coffres d’argent et d’or remplis de jetons, d’XP, de gels et d’avatars rares.`,
    'f6.t': `BATAILLES DE SQUAD`, 'f6.p': `Ajoute des amis, consulte le classement et lance des défis en solo ou en face-à-face. Active le Mode difficile pour un objectif plus dur et un coffre d’or.`,
    'screens.title': `TOUT DROIT DU TUNNEL`, 'screens.sub': `Un tour rapide de l’app. Touche les flèches ou balaie pour avancer.`,
    'screens.prev': `Écran précédent`, 'screens.next': `Écran suivant`,
    'cap.stats': `STATS`, 'cap.ranks': `RANGS`,
    'crew.title': `REPRÉSENTE TON CREW`, 'crew.sub': `Choisis ton avatar. Débloques-en d’autres en montant en rang ou avec des XP, et chasse les coffres pour les plus rares.`,
    'install.title': `INSTALLE PULSE SUR TON IPHONE`,
    'install.sub': `Pulse est en bêta publique sur TestFlight, l’app officielle de bêta d’Apple. Tout le monde peut la rejoindre, et c’est gratuit.`,
    'badge.rec': `Recommandé`, 'beta.t': `REJOINDRE LA BÊTA`,
    'beta.1': `Installe <a href="https://apps.apple.com/app/testflight/id899247664">TestFlight</a> depuis l’App Store.`,
    'beta.2': `Sur ton iPhone, touche <strong>Rejoindre la bêta</strong> ci-dessous, puis <strong>Accepter</strong>.`,
    'beta.3': `Touche <strong>Installer</strong>. Pulse arrive sur ton écran d’accueil et se met à jour tout seul.`,
    'beta.btn': `⬇ Rejoindre la bêta`, 'beta.note': `Tu es sur un ordinateur ? Envoie le lien sur ton téléphone.`,
    'badge.soon': `Bientôt`, 'store.t': `APP STORE`,
    'store.p': `Pulse 1.0 est en cours de validation par Apple. Cette page mènera directement à l’App Store dès sa sortie.`,
    'badge.adv': `Avancé`, 'ipa.t': `TÉLÉCHARGER LE .IPA`,
    'ipa.p': `La dernière version est sur GitHub. L’iPhone n’installe que des apps de l’App Store ou de TestFlight : il te faut un outil de sideloading comme AltStore ou Sideloadly pour la signer avec ton propre identifiant Apple.`,
    'ipa.all': `Toutes les versions`,
    'support.title': `AIDE`,
    'support.sub': `Questions, bugs ou avis : <a href="mailto:slugics@gmail.com">slugics@gmail.com</a>. Nous répondons en général sous 2 jours ouvrés.`,
    'faq1.q': `Comment fonctionnent les crédits IA ?`,
    'faq1.a': `Le Coach, les plans et les récaps utilisent des crédits IA. Les nouveaux comptes reçoivent 50 crédits gratuits. Tu peux acheter des packs ou t’abonner à Pulse Pro dans Crew → Crédits, où le coût de chaque fonction est indiqué. Tu peux aussi gagner des crédits gratuits en invitant des amis ou en échangeant des XP.`,
    'faq2.q': `Comment restaurer mes achats ?`, 'faq2.a': `Crew → Crédits → Restaurer les achats. Connecte-toi avec le même identifiant Apple que pour l’achat.`,
    'faq3.q': `Comment résilier Pulse Pro ?`, 'faq3.a': `Réglages de l’iPhone → ton nom → Abonnements → Pulse Pro → Annuler. Tu gardes tes crédits jusqu’à la fin de la période.`,
    'faq4.q': `Comment supprimer mon compte ?`, 'faq4.a': `Crew → Compte → Supprimer le compte. Cela supprime ton compte, tes crédits et ta sauvegarde cloud.`,
    'faq5.q': `Comment changer la langue ?`, 'faq5.a': `Pulse suit la langue de ton iPhone. Pour la changer uniquement pour Pulse : Réglages → Apps → Pulse → Langue.`,
    'faq6.q': `Mes données sont-elles privées ?`, 'faq6.a': `Tes notes restent sur ton téléphone sauf si tu actives la sauvegarde cloud. Lis la <a href="privacy.html">Politique de confidentialité</a> pour les détails.`,
    'support.disclaimer': `Pulse donne des conseils généraux de fitness et de nutrition générés par IA. Ce ne sont pas des conseils médicaux.`,
    'footer.made': `© 2026 Pulse · Fait dans les tunnels`, 'footer.privacy': `Confidentialité`, 'footer.terms': `Conditions d’utilisation`, 'footer.contact': `Contact`,
    'inv.title': `Tu es invité sur Pulse`,
    'inv.desc': `Un ami t’invite sur Pulse, le coach fitness IA conçu comme un jeu d’arcade. Rejoins-le et vous recevez tous les deux 25 crédits IA gratuits.`,
    'inv.tag': `Ton crew t’appelle`, 'inv.h1': `TU ES INVITÉ<br>SUR PULSE`,
    'inv.p': `Rejoins avec ce code et <strong>vous recevez tous les deux 25 crédits IA gratuits</strong> pour le Coach, les plans repas et les plans d’entraînement.`,
    'inv.tap': `Touche le code pour le copier`, 'inv.copied': `Copié !`, 'inv.copyTitle': `Touche pour copier`,
    'inv.s1': `Installe Pulse via la bêta sur TestFlight (gratuit).`,
    'inv.s2': `Ouvre-le et connecte-toi avec Apple dans Crew → Compte.`,
    'inv.s3': `Touche <strong>Ouvrir dans Pulse</strong> ci-dessous, ou saisis le code dans Crew → Crédits → J’ai un code.`,
    'inv.pSquad': `Un ami te veut dans son <strong>classement Squad</strong>. Ouvre ce lien sur ton iPhone avec Pulse installé et c’est fait.`,
    'inv.pCrew': `Ton équipe te veut avec elle. Ouvre ce lien sur ton iPhone avec Pulse installé et tu <strong>rejoins l’équipe automatiquement</strong>.`,
    'inv.s3Squad': `Touche <strong>Ouvrir dans Pulse</strong> ci-dessous. Pulse fait le reste dès que tu es connecté.`,
    'inv.open': `Ouvrir dans Pulse`, 'inv.get': `⬇ Obtenir Pulse`, 'inv.what': `C’est quoi Pulse ?`,
  });

  add('it', {
    'meta.title': `Pulse: fitness tracker rétro`,
    'meta.desc': `Pulse è un fitness tracker in stile rétro. Registra pasti, allenamenti, acqua e umore parlando, scrivendo o con una foto. Conta calorie e macro, mantieni la serie, sali di grado e sfida la tua crew.`,
    'nav.features': `Funzioni`, 'nav.screens': `Schermate`, 'nav.support': `Assistenza`, 'nav.getIt': `Scaricala`, 'nav.home': `Home`,
    'hero.kicker': `Contacalorie e diario di allenamento · stile rétro`,
    'hero.title': `REGISTRA.<br>ACCUMULA XP.<br><span class="drip">COMANDA IL QUARTIERE.</span>`,
    'hero.lead': `Pulse trasforma lo stare in salute in un arcade di strada anni ’80. Di’ al Coach cosa hai mangiato, scatta una foto o scansiona un codice a barre, e lui pensa a calorie e macro. Ogni registrazione dà XP, le serie li moltiplicano, e missioni, forzieri e sfide ti fanno tornare.`,
    'hero.download': `⬇ Scarica per iPhone`, 'hero.see': `Scopri cosa c’è dentro`,
    'hero.note': `Gratis · 50 crediti IA all’iscrizione · iPhone`, 'hero.streak': `SERIE DI 2 GIORNI 🔥`,
    'features.title': `COSA C’È NELLA SCATOLA`,
    'features.sub': `Tutto quello che serve per mangiare bene, allenarti e restare sereno, avvolto in neon e vernice spray.`,
    'f1.t': `IL COACH`, 'f1.p': `Parla, scrivi o manda una foto. Il tuo coach IA registra pasti e allenamenti, risponde alle domande e crea piani alimentari e di allenamento. Scegli una personalità: Sarge, MC Hype, Breeze, Sensei e altri.`,
    'f2.t': `FOTO &amp; SCANSIONE`, 'f2.p': `Fotografa un piatto per avere subito calorie e macro, o scansiona un codice a barre. Acqua, peso, sonno e umore a un tocco. Apple Health tiene sincronizzate le calorie bruciate.`,
    'f3.t': `SERIE &amp; GRADI`, 'f3.p': `Ogni registrazione dà XP. Scala 15 gradi della Street Crew, da Rookie a Pulse Immortal, sblocca nuovi muri e usa i congelamenti per salvare un giorno saltato.`,
    'f4.t': `MISSIONI GIORNALIERE`, 'f4.p': `Tre nuove missioni ogni giorno, dalla facile alla difficile. Completale tutte per il bonus Giornata Perfetta e guadagna gettoni da spendere nell’arcade.`,
    'f5.t': `ARCADE ANTISTRESS`, 'f5.p': `Giochi mentali da un minuto per staccare. Vinci round di Brain Gym per forzieri d’argento e d’oro pieni di gettoni, XP, congelamenti e avatar rari.`,
    'f6.t': `SFIDE DI SQUAD`, 'f6.p': `Aggiungi amici, guarda la classifica e avvia sfide da solo o testa a testa. Attiva la Modalità Difficile per un obiettivo più tosto e un forziere d’oro.`,
    'screens.title': `DRITTO DAL TUNNEL`, 'screens.sub': `Un giro veloce nell’app. Tocca le frecce o scorri per andare avanti.`,
    'screens.prev': `Schermata precedente`, 'screens.next': `Schermata successiva`,
    'cap.stats': `STATISTICHE`, 'cap.ranks': `GRADI`,
    'crew.title': `RAPPRESENTA LA TUA CREW`, 'crew.sub': `Scegli il tuo avatar. Sbloccane altri salendo di grado o spendendo XP, e caccia i forzieri per quelli rari.`,
    'install.title': `METTI PULSE SUL TUO IPHONE`,
    'install.sub': `Pulse è in beta pubblica su TestFlight, l’app ufficiale di Apple per le beta. Chiunque può partecipare, ed è gratis.`,
    'badge.rec': `Consigliato`, 'beta.t': `ENTRA NELLA BETA`,
    'beta.1': `Installa <a href="https://apps.apple.com/app/testflight/id899247664">TestFlight</a> dall’App Store.`,
    'beta.2': `Sul tuo iPhone tocca <strong>Entra nella beta</strong> qui sotto, poi <strong>Accetta</strong>.`,
    'beta.3': `Tocca <strong>Installa</strong>. Pulse arriva nella schermata Home e si aggiorna da solo.`,
    'beta.btn': `⬇ Entra nella beta`, 'beta.note': `Sei su un computer? Manda il link al tuo telefono.`,
    'badge.soon': `In arrivo`, 'store.t': `APP STORE`,
    'store.p': `Pulse 1.0 è in revisione da Apple. Quando sarà disponibile, questa pagina porterà direttamente all’App Store.`,
    'badge.adv': `Avanzato`, 'ipa.t': `SCARICA IL .IPA`,
    'ipa.p': `L’ultima build è su GitHub. L’iPhone installa solo app dall’App Store o da TestFlight, quindi ti serve uno strumento di sideloading come AltStore o Sideloadly per firmarla con il tuo ID Apple.`,
    'ipa.all': `Tutte le versioni`,
    'support.title': `ASSISTENZA`,
    'support.sub': `Domande, bug o feedback: <a href="mailto:slugics@gmail.com">slugics@gmail.com</a>. Di solito rispondiamo entro 2 giorni lavorativi.`,
    'faq1.q': `Come funzionano i crediti IA?`,
    'faq1.a': `Il Coach, i piani e i riepiloghi usano crediti IA. I nuovi account ricevono 50 crediti gratis. Puoi comprare pacchetti o abbonarti a Pulse Pro in Crew → Crediti, dove trovi il costo di ogni funzione. Puoi anche guadagnare crediti gratis invitando amici o scambiando XP.`,
    'faq2.q': `Come ripristino gli acquisti?`, 'faq2.a': `Crew → Crediti → Ripristina acquisti. Accedi con lo stesso ID Apple usato per l’acquisto.`,
    'faq3.q': `Come disdico Pulse Pro?`, 'faq3.a': `Impostazioni dell’iPhone → il tuo nome → Abbonamenti → Pulse Pro → Annulla. Mantieni i crediti fino alla fine del periodo.`,
    'faq4.q': `Come elimino il mio account?`, 'faq4.a': `Crew → Account → Elimina account. Vengono eliminati account, crediti e backup su cloud.`,
    'faq5.q': `Come cambio la lingua?`, 'faq5.a': `Pulse segue la lingua del tuo iPhone. Per cambiarla solo per Pulse: Impostazioni → App → Pulse → Lingua.`,
    'faq6.q': `I miei dati sono privati?`, 'faq6.a': `Le tue registrazioni restano sul telefono, a meno che non attivi il backup su cloud. Leggi l’<a href="privacy.html">Informativa sulla privacy</a> per i dettagli.`,
    'support.disclaimer': `Pulse offre indicazioni generali su fitness e alimentazione generate dall’IA. Non sono consigli medici.`,
    'footer.made': `© 2026 Pulse · Fatto nei tunnel`, 'footer.privacy': `Privacy`, 'footer.terms': `Termini d’uso`, 'footer.contact': `Contatti`,
    'inv.title': `Sei invitato su Pulse`,
    'inv.desc': `Un amico ti ha invitato su Pulse, il coach fitness con IA fatto come un gioco arcade. Unisciti e ricevete entrambi 25 crediti IA gratis.`,
    'inv.tag': `La tua crew ti chiama`, 'inv.h1': `SEI INVITATO<br>SU PULSE`,
    'inv.p': `Unisciti con questo codice e <strong>ricevete entrambi 25 crediti IA gratis</strong> per il Coach, i piani alimentari e di allenamento.`,
    'inv.tap': `Tocca il codice per copiarlo`, 'inv.copied': `Copiato!`, 'inv.copyTitle': `Tocca per copiare`,
    'inv.s1': `Scarica Pulse dalla beta su TestFlight (gratis).`,
    'inv.s2': `Aprilo e accedi con Apple in Crew → Account.`,
    'inv.s3': `Tocca <strong>Apri in Pulse</strong> qui sotto, oppure inserisci il codice in Crew → Crediti → Ho un codice.`,
    'inv.pSquad': `Un amico ti vuole nella sua <strong>classifica Squad</strong>. Apri questo link sul tuo iPhone con Pulse installato e ci sei.`,
    'inv.pCrew': `La tua squadra ti vuole dentro. Apri questo link sul tuo iPhone con Pulse installato e <strong>entri nella squadra automaticamente</strong>.`,
    'inv.s3Squad': `Tocca <strong>Apri in Pulse</strong> qui sotto. Pulse fa il resto appena hai effettuato l’accesso.`,
    'inv.open': `Apri in Pulse`, 'inv.get': `⬇ Scarica Pulse`, 'inv.what': `Cos’è Pulse?`,
  });

  add('pt', {
    'meta.title': `Pulse: rastreador fitness retrô`,
    'meta.desc': `O Pulse é um rastreador fitness com estilo retrô. Registre refeições, treinos, água e humor falando, digitando ou tirando uma foto. Conte calorias e macros, mantenha sua sequência, suba de nível e desafie sua crew.`,
    'nav.features': `Recursos`, 'nav.screens': `Telas`, 'nav.support': `Suporte`, 'nav.getIt': `Baixar`, 'nav.home': `Início`,
    'hero.kicker': `Contador de calorias e registro de treinos · estilo retrô`,
    'hero.title': `REGISTRE.<br>JUNTE XP.<br><span class="drip">DOMINE O PEDAÇO.</span>`,
    'hero.lead': `O Pulse transforma cuidar da saúde num fliperama de rua dos anos 80. Conte ao Coach o que você comeu, tire uma foto ou escaneie um código de barras, e ele cuida das calorias e dos macros. Cada registro dá XP, as sequências multiplicam, e missões, baús e desafios fazem você voltar.`,
    'hero.download': `⬇ Baixar para iPhone`, 'hero.see': `Veja o que tem dentro`,
    'hero.note': `Grátis · 50 créditos de IA ao se cadastrar · iPhone`, 'hero.streak': `SEQUÊNCIA DE 2 DIAS 🔥`,
    'features.title': `O QUE VEM NA CAIXA`,
    'features.sub': `Tudo o que você precisa para comer bem, treinar e manter a cabeça no lugar, embrulhado em neon e spray.`,
    'f1.t': `O COACH`, 'f1.p': `Fale, digite ou mande uma foto. Seu coach com IA registra refeições e treinos, responde perguntas e monta planos de refeições e de treino. Escolha uma personalidade: Sarge, MC Hype, Breeze, Sensei e mais.`,
    'f2.t': `FOTO &amp; SCAN`, 'f2.p': `Fotografe um prato para ver calorias e macros na hora, ou escaneie um código de barras. Água, peso, sono e humor a um toque. O Apple Health mantém suas calorias gastas sincronizadas.`,
    'f3.t': `SEQUÊNCIAS &amp; NÍVEIS`, 'f3.p': `Cada registro dá XP. Suba 15 níveis da Street Crew, de Rookie a Pulse Immortal, desbloqueie novos muros e use proteções de sequência para salvar um dia perdido.`,
    'f4.t': `MISSÕES DIÁRIAS`, 'f4.p': `Três missões novas todo dia, da fácil à difícil. Complete todas para o bônus de Dia Perfeito e ganhe fichas para gastar no arcade.`,
    'f5.t': `ARCADE ANTIESTRESSE`, 'f5.p': `Jogos mentais de um minuto para dar uma pausa. Vença rodadas de Brain Gym e ganhe baús de prata e ouro cheios de fichas, XP, proteções e avatares raros.`,
    'f6.t': `BATALHAS DE SQUAD`, 'f6.p': `Adicione amigos, confira o ranking e comece desafios sozinho ou cara a cara. Ative o Modo Difícil para uma meta mais dura e um baú de ouro.`,
    'screens.title': `DIRETO DO TÚNEL`, 'screens.sub': `Um tour rápido pelo app. Toque nas setas ou deslize para avançar.`,
    'screens.prev': `Tela anterior`, 'screens.next': `Próxima tela`,
    'cap.stats': `ESTATÍSTICAS`, 'cap.ranks': `NÍVEIS`,
    'crew.title': `REPRESENTE SUA CREW`, 'crew.sub': `Escolha seu avatar. Desbloqueie mais ao subir de nível ou gastando XP, e cace baús para os raros.`,
    'install.title': `TENHA O PULSE NO SEU IPHONE`,
    'install.sub': `O Pulse está em beta pública no TestFlight, o app oficial de betas da Apple. Qualquer pessoa pode entrar, e é grátis.`,
    'badge.rec': `Recomendado`, 'beta.t': `ENTRE NO BETA`,
    'beta.1': `Instale o <a href="https://apps.apple.com/app/testflight/id899247664">TestFlight</a> pela App Store.`,
    'beta.2': `No seu iPhone, toque em <strong>Entrar no beta</strong> abaixo e depois em <strong>Aceitar</strong>.`,
    'beta.3': `Toque em <strong>Instalar</strong>. O Pulse aparece na tela inicial e se atualiza sozinho.`,
    'beta.btn': `⬇ Entrar no beta`, 'beta.note': `Está no computador? Mande o link para o seu celular.`,
    'badge.soon': `Em breve`, 'store.t': `APP STORE`,
    'store.p': `O Pulse 1.0 está em análise pela Apple. Quando sair, esta página vai levar direto para a App Store.`,
    'badge.adv': `Avançado`, 'ipa.t': `BAIXAR O .IPA`,
    'ipa.p': `A versão mais recente está no GitHub. O iPhone só instala apps da App Store ou do TestFlight, então você precisa de uma ferramenta de sideloading como AltStore ou Sideloadly para assinar com seu próprio ID Apple.`,
    'ipa.all': `Todas as versões`,
    'support.title': `SUPORTE`,
    'support.sub': `Dúvidas, bugs ou sugestões: <a href="mailto:slugics@gmail.com">slugics@gmail.com</a>. Costumamos responder em até 2 dias úteis.`,
    'faq1.q': `Como funcionam os créditos de IA?`,
    'faq1.a': `O Coach, os planos e os resumos usam créditos de IA. Contas novas ganham 50 créditos grátis. Você pode comprar pacotes ou assinar o Pulse Pro em Crew → Créditos, onde aparece o custo de cada recurso. Também dá para ganhar créditos grátis convidando amigos ou trocando XP.`,
    'faq2.q': `Como restauro minhas compras?`, 'faq2.a': `Crew → Créditos → Restaurar compras. Entre com o mesmo ID Apple usado na compra.`,
    'faq3.q': `Como cancelo o Pulse Pro?`, 'faq3.a': `Ajustes do iPhone → seu nome → Assinaturas → Pulse Pro → Cancelar. Você mantém seus créditos até o fim do período.`,
    'faq4.q': `Como apago minha conta?`, 'faq4.a': `Crew → Conta → Apagar conta. Isso apaga sua conta, seus créditos e seu backup na nuvem.`,
    'faq5.q': `Como mudo o idioma?`, 'faq5.a': `O Pulse segue o idioma do seu iPhone. Para mudar só no Pulse: Ajustes → Apps → Pulse → Idioma.`,
    'faq6.q': `Meus dados são privados?`, 'faq6.a': `Seus registros ficam no celular, a menos que você ative o backup na nuvem. Leia a <a href="privacy.html">Política de Privacidade</a> para mais detalhes.`,
    'support.disclaimer': `O Pulse dá orientações gerais de fitness e nutrição geradas por IA. Não é aconselhamento médico.`,
    'footer.made': `© 2026 Pulse · Feito nos túneis`, 'footer.privacy': `Política de Privacidade`, 'footer.terms': `Termos de Uso`, 'footer.contact': `Contato`,
    'inv.title': `Você foi convidado para o Pulse`,
    'inv.desc': `Um amigo convidou você para o Pulse, o coach de fitness com IA feito como um jogo de arcade. Entre e vocês dois ganham 25 créditos de IA grátis.`,
    'inv.tag': `Sua crew está chamando`, 'inv.h1': `VOCÊ FOI<br>CONVIDADO`,
    'inv.p': `Entre com este código e <strong>vocês dois ganham 25 créditos de IA grátis</strong> para o Coach, planos de refeições e de treino.`,
    'inv.tap': `Toque no código para copiar`, 'inv.copied': `Copiado!`, 'inv.copyTitle': `Toque para copiar`,
    'inv.s1': `Baixe o Pulse pelo beta no TestFlight (grátis).`,
    'inv.s2': `Abra e entre com a Apple em Crew → Conta.`,
    'inv.s3': `Toque em <strong>Abrir no Pulse</strong> abaixo, ou digite o código em Crew → Créditos → Tenho um código.`,
    'inv.pSquad': `Um amigo quer você no <strong>ranking do Squad</strong>. Abra este link no seu iPhone com o Pulse instalado e pronto.`,
    'inv.pCrew': `Sua equipe quer você junto. Abra este link no seu iPhone com o Pulse instalado e você <strong>entra na equipe automaticamente</strong>.`,
    'inv.s3Squad': `Toque em <strong>Abrir no Pulse</strong> abaixo. O Pulse faz o resto assim que você entrar.`,
    'inv.open': `Abrir no Pulse`, 'inv.get': `⬇ Baixar o Pulse`, 'inv.what': `O que é o Pulse?`,
  });

  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (q && LANGS[q]) return q;
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && LANGS[saved]) return saved;
    } catch (e) {}
    var list = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en'];
    for (var i = 0; i < list.length; i++) {
      var code = String(list[i]).toLowerCase().split('-')[0];
      if (LANGS[code]) return code;
    }
    return 'en';
  }

  var ATTRS = [['data-i18n', 'text'], ['data-i18n-html', 'html'], ['data-i18n-aria', 'aria-label'], ['data-i18n-content', 'content'], ['data-i18n-title', 'title']];
  var current = 'en';

  // Look up a key in the current language; falls back to the English passed in.
  function t(key, fallback) {
    return (D[current] && D[current][key]) || fallback;
  }

  function apply(lang) {
    current = lang;
    document.documentElement.lang = lang;
    ATTRS.forEach(function (pair) {
      var attr = pair[0], prop = pair[1];
      document.querySelectorAll('[' + attr + ']').forEach(function (el) {
        var store = el.__i18nEn || (el.__i18nEn = {});
        var read = prop === 'text' ? el.textContent : prop === 'html' ? el.innerHTML : el.getAttribute(prop);
        if (!(prop in store)) store[prop] = read;
        var value = t(el.getAttribute(attr), store[prop]);
        if (prop === 'text') el.textContent = value;
        else if (prop === 'html') el.innerHTML = value;
        else el.setAttribute(prop, value);
      });
    });
    document.querySelectorAll('select.lang').forEach(function (s) { s.value = lang; });
    document.dispatchEvent(new CustomEvent('pulse:lang', { detail: lang }));
  }

  function init() {
    document.querySelectorAll('select.lang').forEach(function (s) {
      for (var code in LANGS) s.add(new Option(LANGS[code], code));
      s.addEventListener('change', function () {
        try { localStorage.setItem(KEY, s.value); } catch (e) {}
        apply(s.value);
      });
    });
    var lang = pick();
    // A ?lang= link also becomes the visitor's saved pick, so it sticks on the next page.
    if (new URLSearchParams(location.search).get('lang') === lang) {
      try { localStorage.setItem(KEY, lang); } catch (e) {}
    }
    apply(lang);
  }

  window.pulseI18n = { t: t, apply: apply, lang: function () { return current; } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
