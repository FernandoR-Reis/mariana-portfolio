const root = document.documentElement;
const body = document.body;
const themeButton = document.getElementById('themeToggle');
const menuButton = document.getElementById('menuBtn');
const mobilePanel = document.getElementById('mobilePanel');
const menuIcon = document.getElementById('menuIcon');
const languageButtons = Array.from(document.querySelectorAll('.lang-btn'));
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
    htmlLang: 'en',
    title: "Mariana Casimiro D'Incao Sanchez - Operational & Strategic Management",
    description: "Executive portfolio of Mariana Casimiro D'Incao Sanchez - 13+ years in operations, sales, administrative and events management.",
    attrs: [
      ['#themeToggle', 'aria-label', 'Toggle light/dark theme'],
      ['#menuBtn', 'aria-label', 'Open menu'],
      ['#langSwitch', 'aria-label', 'Select website language']
    ],
    text: [
      ['.brand-name small', 'Executive Portfolio'],
      ['.navlinks li:nth-child(1) a', 'About'],
      ['.navlinks li:nth-child(2) a', 'Career'],
      ['.navlinks li:nth-child(3) a', 'Skills'],
      ['.navlinks li:nth-child(4) a', 'Metrics'],
      ['.navlinks li:nth-child(5) a', 'Education'],
      ['.navlinks li:nth-child(6) a', 'Contact'],
      ['.mobile-panel a:nth-child(1)', 'About'],
      ['.mobile-panel a:nth-child(2)', 'Career'],
      ['.mobile-panel a:nth-child(3)', 'Skills'],
      ['.mobile-panel a:nth-child(4)', 'Metrics'],
      ['.mobile-panel a:nth-child(5)', 'Education'],
      ['.mobile-panel a:nth-child(6)', 'Languages'],
      ['.mobile-panel a:nth-child(7)', 'Differentials'],
      ['.mobile-panel a:nth-child(8)', 'Contact'],
      ['.hero-kicker span:last-child', 'Available for new executive opportunities'],
      ['.hero-summary', 'Analytical and results-driven profile, with national and international experience in operational setup, metrics control (COGS, P&L, KPIs), and people development - ready to lead medium and large-scale operations.'],
      ['.hero-stat:nth-child(1) span', 'Years of experience'],
      ['.hero-stat:nth-child(2) span', 'Companies served'],
      ['.hero-stat:nth-child(3) span', 'Languages'],
      ['.hero-stat:nth-child(4) span', 'Countries of operation'],
      ['#sobre .eyebrow', 'About'],
      ['#sobre .about-text p:nth-child(1)', 'With more than 13 years of experience in operations, food and beverage, events, and administration management, Mariana built a solid career leading multidisciplinary teams in highly demanding operational environments.'],
      ['#sobre .about-text p:nth-child(2)', 'Her work combines financial management, purchasing and supplier negotiation with full operation setups - always focused on cost control (COGS), P&L management, and continuous process improvement.'],
      ['#sobre .about-text p:nth-child(3)', 'International experience in Australia expanded her management and service vision, reinforcing an analytical, strategic, and customer-experience-driven profile focused on people development.'],
      ['.pillar:nth-child(1) h4', 'Leadership Profile'],
      ['.pillar:nth-child(1) p', 'Building and developing multidisciplinary teams focused on autonomy, standardization, and results.'],
      ['.pillar:nth-child(2) h4', 'Professional Mission'],
      ['.pillar:nth-child(2) p', 'Transforming operations into profitable, predictable businesses centered on customer experience.'],
      ['.pillar:nth-child(3) h4', 'Values'],
      ['.pillar:nth-child(3) p', 'Operational excellence, transparency in metrics, and continuous people development.'],
      ['.pillar:nth-child(4) h4', 'Key Advantage'],
      ['.pillar:nth-child(4) p', 'International vision, financial metrics expertise, and proven track record of launching operations from scratch.'],
      ['#trajetoria .eyebrow', 'Career Journey'],
      ['#trajetoria .section-sub', 'Six operations, one consistent standard: launch, organize, and improve results.'],
      ['.tl-item:nth-child(1) .tl-role', 'General Operations Manager'],
      ['.tl-item:nth-child(2) .tl-role', 'Events Manager'],
      ['.tl-item:nth-child(3) .tl-role', 'General Manager'],
      ['.tl-item:nth-child(4) .tl-role', 'General Manager'],
      ['.tl-item:nth-child(5) .tl-role', 'General Manager'],
      ['.tl-item:nth-child(6) .tl-role', 'Food & Beverage Assistant Manager'],
      ['#competencias .eyebrow', 'Skills'],
      ['#competencias .section-sub', 'A practical toolkit built in real operations - from daily execution to strategic planning.'],
      ['.comp-cat:nth-child(1) h4', 'Operations Management'],
      ['.comp-cat:nth-child(2) h4', 'Commercial Management'],
      ['.comp-cat:nth-child(3) h4', 'Administrative Management'],
      ['.comp-cat:nth-child(4) h4', 'Financial Management & Metrics'],
      ['.comp-cat:nth-child(5) h4', 'Leadership & People'],
      ['.comp-cat:nth-child(6) h4', 'Procurement & Negotiation'],
      ['.comp-cat:nth-child(7) h4', 'Event Management'],
      ['.comp-cat:nth-child(8) h4', 'Strategic Planning'],
      ['.comp-cat:nth-child(9) h4', 'Continuous Improvement'],
      ['#indicadores .eyebrow', 'Executive Dashboard'],
      ['#indicadores .section-sub', 'Consolidated indicators throughout her trajectory. Values with "XX" are placeholders - replace with real numbers before publishing.'],
      ['.console-live', 'updated'],
      ['.kpi:nth-child(1) .kpi-label', 'Years of experience'],
      ['.kpi:nth-child(2) .kpi-label', 'Companies served'],
      ['.kpi:nth-child(3) .kpi-label', 'Units managed'],
      ['.kpi:nth-child(4) .kpi-label', 'Teams led'],
      ['.kpi:nth-child(5) .kpi-label', 'Events organized'],
      ['.kpi:nth-child(6) .kpi-label', 'Projects delivered'],
      ['.kpi:nth-child(7) .kpi-label', 'Targets achieved'],
      ['.kpi:nth-child(8) .kpi-label', 'COGS reduction'],
      ['.console-foot', 'COGS · P&L · KPIs - metrics monitored continuously in each led operation'],
      ['#formacao .eyebrow', 'Education'],
      ['#formacao .section-title', 'Knowledge foundation'],
      ['.edu-item:nth-child(1) .edu-body h4', 'Postgraduate in People Management'],
      ['.edu-item:nth-child(2) .edu-body h4', 'Postgraduate in Business Management - Food & Beverage'],
      ['.edu-item:nth-child(3) .edu-body h4', 'Technology Degree in Gastronomy'],
      ['.edu-item:nth-child(4) .edu-body h4', 'Bachelor in Public Relations'],
      ['#idiomas .eyebrow', 'Languages'],
      ['#idiomas .section-title', 'International communication'],
      ['.lang-card:nth-child(1) h4', 'English'],
      ['.lang-card:nth-child(1) span', 'Advanced'],
      ['.lang-card:nth-child(2) h4', 'Spanish'],
      ['.lang-card:nth-child(2) span', 'Intermediate'],
      ['.lang-card:nth-child(3) h4', 'Italian'],
      ['.lang-card:nth-child(3) span', 'Intermediate'],
      ['.lang-card:nth-child(4) h4', 'German'],
      ['.lang-card:nth-child(4) span', 'Intermediate'],
      ['#certificacoes .eyebrow', 'Certifications'],
      ['#certificacoes .section-title', 'Additional education'],
      ['#certificacoes .section-sub', 'Reserved area for certifications, short courses, and complementary education - add as they are completed.'],
      ['#certificacoes .cert-card:nth-child(1) b', 'Certification to add'],
      ['#certificacoes .cert-card:nth-child(2) b', 'Certification to add'],
      ['#certificacoes .cert-card:nth-child(3) b', 'Certification to add'],
      ['#certificacoes .cert-card:nth-child(1) small', 'Course name, institution, and completion year.'],
      ['#certificacoes .cert-card:nth-child(2) small', 'Course name, institution, and completion year.'],
      ['#certificacoes .cert-card:nth-child(3) small', 'Course name, institution, and completion year.'],
      ['#diferenciais .eyebrow', 'Differentials'],
      ['#diferenciais .section-title', 'What sets this trajectory apart'],
      ['#diferenciais .diff-card:nth-child(1) p', 'International experience in Australia, with hands-on work in hospitality'],
      ['#diferenciais .diff-card:nth-child(2) p', 'Operations management across bars, restaurants, hospitality, and events'],
      ['#diferenciais .diff-card:nth-child(3) p', 'Strong background in leadership, training, and people development'],
      ['#diferenciais .diff-card:nth-child(4) p', 'Full operation setup from initial structure'],
      ['#diferenciais .diff-card:nth-child(5) p', 'Metrics control and profitability improvement'],
      ['#diferenciais .diff-card:nth-child(6) p', 'Supplier and strategic partner negotiation'],
      ['#diferenciais .diff-card:nth-child(7) p', 'Results-driven strategic planning'],
      ['#diferenciais .diff-card:nth-child(8) p', 'End-to-end management of large corporate events'],
      ['#diferenciais .diff-card:nth-child(9) p', 'Operational excellence as a work standard'],
      ['#diferenciais .diff-card:nth-child(10) p', 'Continuous improvement culture across all operations'],
      ['#recomendacoes .eyebrow', 'Recommendations'],
      ['#recomendacoes .section-title', 'What others say about this leadership'],
      ['#recomendacoes .section-sub', 'Reserved area for testimonials from managers, partners, or stakeholders - add as received.'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-quote', '"Testimonial to be added - describe the work experience and observed outcomes here."'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-quote', '"Testimonial to be added - describe the work experience and observed outcomes here."'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-quote', '"Testimonial to be added - describe the work experience and observed outcomes here."'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-who b', 'Recommender name'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-who b', 'Recommender name'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-who b', 'Recommender name'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-who span', 'Role, company'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-who span', 'Role, company'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-who span', 'Role, company'],
      ['#contato .eyebrow', 'Contact'],
      ['#contato .section-title', 'Let us connect'],
      ['#contato .section-sub', 'Open to new opportunities in operations, commercial, administrative, and events management.'],
      ['#contato .contact-row:nth-child(1) .lbl', 'Email'],
      ['#contato .contact-row:nth-child(2) .lbl', 'Phone / WhatsApp'],
      ['#contato .contact-row:nth-child(3) .lbl', 'Location'],
      ['#contato .contact-row:nth-child(3) .val', 'Campinas - SP, Brazil'],
      ['#contato .contact-row:nth-child(4) .lbl', 'LinkedIn'],
      ['#contato .contact-row:nth-child(4) a', 'Add profile link'],
      ['label[for="fname"]', 'Name'],
      ['label[for="femail"]', 'Email'],
      ['label[for="fsubject"]', 'Subject'],
      ['label[for="fmsg"]', 'Message'],
      ['footer .footer-links a:nth-child(1)', 'Top'],
      ['footer .footer-links a:nth-child(2)', 'Email']
    ],
    html: [
      ['.hero h1', "Mariana Casimiro<br><em>D'Incao Sanchez</em>"],
      ['.hero-role', '<strong>Operational, Commercial &amp; Administrative Management</strong> - more than 13 years leading operations, teams, and results in food &amp; beverage, hospitality, and events.'],
      ['.cta-row a:nth-child(1)', '<svg><use href="#ic-cv"></use></svg>Download Resume'],
      ['.cta-row a:nth-child(2)', '<svg><use href="#ic-linkedin"></use></svg>LinkedIn'],
      ['.cta-row a:nth-child(3)', '<svg><use href="#ic-mail"></use></svg>Contact'],
      ['#sobre .section-title', 'A trajectory built<br>operation by operation.'],
      ['#trajetoria .section-title', 'Executive timeline'],
      ['#competencias .section-title', 'Technical expertise domains'],
      ['#indicadores .section-title', 'Results in numbers'],
      ['#contato form .btn.btn-primary', 'Send message <svg><use href="#ic-arrow"></use></svg>'],
      ['.console-live', '<span class="status-dot"></span>updated']
    ]
  },
  de: {
    htmlLang: 'de',
    title: "Mariana Casimiro D'Incao Sanchez - Operatives und strategisches Management",
    description: "Executive-Portfolio von Mariana Casimiro D'Incao Sanchez - 13+ Jahre in operativem, kommerziellem, administrativem und Event-Management.",
    attrs: [
      ['#themeToggle', 'aria-label', 'Hell/Dunkel umschalten'],
      ['#menuBtn', 'aria-label', 'Menü öffnen'],
      ['#langSwitch', 'aria-label', 'Website-Sprache auswählen']
    ],
    text: [
      ['.brand-name small', 'Executive-Portfolio'],
      ['.navlinks li:nth-child(1) a', 'Über mich'],
      ['.navlinks li:nth-child(2) a', 'Karriere'],
      ['.navlinks li:nth-child(3) a', 'Kompetenzen'],
      ['.navlinks li:nth-child(4) a', 'Kennzahlen'],
      ['.navlinks li:nth-child(5) a', 'Ausbildung'],
      ['.navlinks li:nth-child(6) a', 'Kontakt'],
      ['.mobile-panel a:nth-child(1)', 'Über mich'],
      ['.mobile-panel a:nth-child(2)', 'Karriere'],
      ['.mobile-panel a:nth-child(3)', 'Kompetenzen'],
      ['.mobile-panel a:nth-child(4)', 'Kennzahlen'],
      ['.mobile-panel a:nth-child(5)', 'Ausbildung'],
      ['.mobile-panel a:nth-child(6)', 'Sprachen'],
      ['.mobile-panel a:nth-child(7)', 'Stärken'],
      ['.mobile-panel a:nth-child(8)', 'Kontakt'],
      ['.hero-kicker span:last-child', 'Verfügbar für neue Führungspositionen'],
      ['.hero-summary', 'Analytisches und ergebnisorientiertes Profil mit nationaler und internationaler Erfahrung beim Aufbau von Abläufen, Kennzahlensteuerung (COGS, GuV, KPIs) und Personalentwicklung - bereit für die Leitung mittelgroßer und großer Betriebe.'],
      ['.hero-stat:nth-child(1) span', 'Jahre Erfahrung'],
      ['.hero-stat:nth-child(2) span', 'Betreute Unternehmen'],
      ['.hero-stat:nth-child(3) span', 'Sprachen'],
      ['.hero-stat:nth-child(4) span', 'Länder der Tätigkeit'],
      ['#sobre .eyebrow', 'Über mich'],
      ['#sobre .about-text p:nth-child(1)', 'Mit mehr als 13 Jahren Erfahrung im Operations-, Food-&-Beverage-, Event- und Administrationsmanagement hat Mariana eine solide Karriere beim Führen multidisziplinärer Teams in anspruchsvollen Umgebungen aufgebaut.'],
      ['#sobre .about-text p:nth-child(2)', 'Ihre Arbeit verbindet Finanzmanagement, Einkauf und Lieferantenverhandlung mit dem Aufbau von Betrieben von Grund auf - stets mit Fokus auf Kostenkontrolle (COGS), GuV und kontinuierliche Prozessverbesserung.'],
      ['#sobre .about-text p:nth-child(3)', 'Die internationale Erfahrung in Australien erweiterte ihre Management- und Serviceperspektive und stärkte ein analytisches, strategisches und kundenorientiertes Profil mit Fokus auf Personalentwicklung.'],
      ['.pillar:nth-child(1) h4', 'Führungsprofil'],
      ['.pillar:nth-child(1) p', 'Aufbau und Entwicklung multidisziplinärer Teams mit Fokus auf Eigenverantwortung, Standardisierung und Ergebnisse.'],
      ['.pillar:nth-child(2) h4', 'Berufliche Mission'],
      ['.pillar:nth-child(2) p', 'Abläufe in profitable, planbare und kundenorientierte Geschäftsmodelle verwandeln.'],
      ['.pillar:nth-child(3) h4', 'Werte'],
      ['.pillar:nth-child(3) p', 'Operative Exzellenz, Transparenz bei Kennzahlen und kontinuierliche Personalentwicklung.'],
      ['.pillar:nth-child(4) h4', 'Unterscheidungsmerkmal'],
      ['.pillar:nth-child(4) p', 'Internationale Perspektive, Finanzkennzahlen-Kompetenz und nachweisbare Erfahrung beim Aufbau von Betrieben von Grund auf.'],
      ['#trajetoria .eyebrow', 'Beruflicher Werdegang'],
      ['#trajetoria .section-sub', 'Sechs Betriebe, ein gleichbleibender Standard: aufbauen, organisieren und Ergebnisse steigern.'],
      ['.tl-item:nth-child(1) .tl-role', 'General Operations Managerin'],
      ['.tl-item:nth-child(2) .tl-role', 'Event Managerin'],
      ['.tl-item:nth-child(3) .tl-role', 'General Managerin'],
      ['.tl-item:nth-child(4) .tl-role', 'General Managerin'],
      ['.tl-item:nth-child(5) .tl-role', 'General Managerin'],
      ['.tl-item:nth-child(6) .tl-role', 'Assistenzleitung Food & Beverage'],
      ['#competencias .eyebrow', 'Kompetenzen'],
      ['#competencias .section-sub', 'Ein praxisnahes Repertoire - vom Tagesbetrieb bis zur strategischen Planung.'],
      ['.comp-cat:nth-child(1) h4', 'Operatives Management'],
      ['.comp-cat:nth-child(2) h4', 'Vertriebsmanagement'],
      ['.comp-cat:nth-child(3) h4', 'Administratives Management'],
      ['.comp-cat:nth-child(4) h4', 'Finanzmanagement & Kennzahlen'],
      ['.comp-cat:nth-child(5) h4', 'Führung & Personal'],
      ['.comp-cat:nth-child(6) h4', 'Einkauf & Verhandlung'],
      ['.comp-cat:nth-child(7) h4', 'Eventmanagement'],
      ['.comp-cat:nth-child(8) h4', 'Strategische Planung'],
      ['.comp-cat:nth-child(9) h4', 'Kontinuierliche Verbesserung'],
      ['#indicadores .eyebrow', 'Executive-Dashboard'],
      ['#indicadores .section-sub', 'Konsolidierte Kennzahlen über die gesamte Laufbahn. Werte mit "XX" sind Platzhalter - bitte vor der Veröffentlichung mit echten Zahlen ersetzen.'],
      ['.kpi:nth-child(1) .kpi-label', 'Jahre Erfahrung'],
      ['.kpi:nth-child(2) .kpi-label', 'Betreute Unternehmen'],
      ['.kpi:nth-child(3) .kpi-label', 'Geleitete Standorte'],
      ['.kpi:nth-child(4) .kpi-label', 'Geleitete Teams'],
      ['.kpi:nth-child(5) .kpi-label', 'Organisierte Events'],
      ['.kpi:nth-child(6) .kpi-label', 'Umgesetzte Projekte'],
      ['.kpi:nth-child(7) .kpi-label', 'Erreichte Ziele'],
      ['.kpi:nth-child(8) .kpi-label', 'COGS-Reduktion'],
      ['.console-foot', 'COGS · GuV · KPIs - Kennzahlen, die in jedem geleiteten Betrieb kontinuierlich überwacht wurden'],
      ['#formacao .eyebrow', 'Akademische Ausbildung'],
      ['#formacao .section-title', 'Wissensbasis'],
      ['.edu-item:nth-child(1) .edu-body h4', 'Aufbaustudium Personalmanagement'],
      ['.edu-item:nth-child(2) .edu-body h4', 'Aufbaustudium Business Management - Food & Beverage'],
      ['.edu-item:nth-child(3) .edu-body h4', 'Studium der Gastronomie (Technologie)'],
      ['.edu-item:nth-child(4) .edu-body h4', 'Bachelor in Öffentlichkeitsarbeit'],
      ['#idiomas .eyebrow', 'Sprachen'],
      ['#idiomas .section-title', 'Internationale Kommunikation'],
      ['.lang-card:nth-child(1) h4', 'Englisch'],
      ['.lang-card:nth-child(1) span', 'Fortgeschritten'],
      ['.lang-card:nth-child(2) h4', 'Spanisch'],
      ['.lang-card:nth-child(2) span', 'Mittelstufe'],
      ['.lang-card:nth-child(3) h4', 'Italienisch'],
      ['.lang-card:nth-child(3) span', 'Mittelstufe'],
      ['.lang-card:nth-child(4) h4', 'Deutsch'],
      ['.lang-card:nth-child(4) span', 'Mittelstufe'],
      ['#certificacoes .eyebrow', 'Zertifikate'],
      ['#certificacoes .section-title', 'Zusätzliche Qualifikationen'],
      ['#certificacoes .section-sub', 'Reservierter Bereich für Zertifikate, Kurzkurse und ergänzende Ausbildungen - bitte nach Abschluss ergänzen.'],
      ['#certificacoes .cert-card:nth-child(1) b', 'Zertifikat hinzufügen'],
      ['#certificacoes .cert-card:nth-child(2) b', 'Zertifikat hinzufügen'],
      ['#certificacoes .cert-card:nth-child(3) b', 'Zertifikat hinzufügen'],
      ['#certificacoes .cert-card:nth-child(1) small', 'Kursname, Institution und Abschlussjahr.'],
      ['#certificacoes .cert-card:nth-child(2) small', 'Kursname, Institution und Abschlussjahr.'],
      ['#certificacoes .cert-card:nth-child(3) small', 'Kursname, Institution und Abschlussjahr.'],
      ['#diferenciais .eyebrow', 'Stärken'],
      ['#diferenciais .section-title', 'Was diese Laufbahn besonders macht'],
      ['#diferenciais .diff-card:nth-child(1) p', 'Internationale Erfahrung in Australien mit direkter Tätigkeit in der Hotellerie'],
      ['#diferenciais .diff-card:nth-child(2) p', 'Management von Bars, Restaurants, Hotellerie und Events'],
      ['#diferenciais .diff-card:nth-child(3) p', 'Starker Fokus auf Führung, Training und Personalentwicklung'],
      ['#diferenciais .diff-card:nth-child(4) p', 'Aufbau von Betrieben von der ersten Struktur an'],
      ['#diferenciais .diff-card:nth-child(5) p', 'Kennzahlenkontrolle und Verbesserung der Rentabilität'],
      ['#diferenciais .diff-card:nth-child(6) p', 'Verhandlungen mit Lieferanten und strategischen Partnern'],
      ['#diferenciais .diff-card:nth-child(7) p', 'Ergebnisorientierte strategische Planung'],
      ['#diferenciais .diff-card:nth-child(8) p', 'Ganzheitliches Management großer Firmenevents'],
      ['#diferenciais .diff-card:nth-child(9) p', 'Operative Exzellenz als Arbeitsstandard'],
      ['#diferenciais .diff-card:nth-child(10) p', 'Kultur der kontinuierlichen Verbesserung in allen Betrieben'],
      ['#recomendacoes .eyebrow', 'Empfehlungen'],
      ['#recomendacoes .section-title', 'Was über diese Führung gesagt wird'],
      ['#recomendacoes .section-sub', 'Reservierter Bereich für Empfehlungen von Führungskräften und Partnern - bitte nach Erhalt ergänzen.'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-quote', '"Empfehlung wird ergänzt - beschreiben Sie hier die Zusammenarbeit und die beobachteten Ergebnisse."'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-quote', '"Empfehlung wird ergänzt - beschreiben Sie hier die Zusammenarbeit und die beobachteten Ergebnisse."'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-quote', '"Empfehlung wird ergänzt - beschreiben Sie hier die Zusammenarbeit und die beobachteten Ergebnisse."'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-who b', 'Name der empfehlenden Person'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-who b', 'Name der empfehlenden Person'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-who b', 'Name der empfehlenden Person'],
      ['#recomendacoes .rec-card:nth-child(1) .rec-who span', 'Position, Unternehmen'],
      ['#recomendacoes .rec-card:nth-child(2) .rec-who span', 'Position, Unternehmen'],
      ['#recomendacoes .rec-card:nth-child(3) .rec-who span', 'Position, Unternehmen'],
      ['#contato .eyebrow', 'Kontakt'],
      ['#contato .section-title', 'Lassen Sie uns sprechen'],
      ['#contato .section-sub', 'Offen für neue Möglichkeiten im operativen, kommerziellen, administrativen und Event-Management.'],
      ['#contato .contact-row:nth-child(1) .lbl', 'E-Mail'],
      ['#contato .contact-row:nth-child(2) .lbl', 'Telefon / WhatsApp'],
      ['#contato .contact-row:nth-child(3) .lbl', 'Standort'],
      ['#contato .contact-row:nth-child(3) .val', 'Campinas - SP, Brasilien'],
      ['#contato .contact-row:nth-child(4) .lbl', 'LinkedIn'],
      ['#contato .contact-row:nth-child(4) a', 'Profil-Link hinzufügen'],
      ['label[for="fname"]', 'Name'],
      ['label[for="femail"]', 'E-Mail'],
      ['label[for="fsubject"]', 'Betreff'],
      ['label[for="fmsg"]', 'Nachricht'],
      ['footer .footer-links a:nth-child(1)', 'Nach oben'],
      ['footer .footer-links a:nth-child(2)', 'E-Mail']
    ],
    html: [
      ['.hero h1', "Mariana Casimiro<br><em>D'Incao Sanchez</em>"],
      ['.hero-role', '<strong>Operatives, kommerzielles &amp; administratives Management</strong> - mehr als 13 Jahre Erfahrung in der Leitung von Abläufen, Teams und Ergebnissen in Food &amp; Beverage, Hotellerie und Events.'],
      ['.cta-row a:nth-child(1)', '<svg><use href="#ic-cv"></use></svg>Lebenslauf herunterladen'],
      ['.cta-row a:nth-child(2)', '<svg><use href="#ic-linkedin"></use></svg>LinkedIn'],
      ['.cta-row a:nth-child(3)', '<svg><use href="#ic-mail"></use></svg>Kontakt'],
      ['#sobre .section-title', 'Eine Laufbahn, aufgebaut<br>Betrieb für Betrieb.'],
      ['#trajetoria .section-title', 'Executive-Zeitleiste'],
      ['#competencias .section-title', 'Technische Kernkompetenzen'],
      ['#indicadores .section-title', 'Ergebnisse in Zahlen'],
      ['#contato form .btn.btn-primary', 'Nachricht senden <svg><use href="#ic-arrow"></use></svg>'],
      ['.console-live', '<span class="status-dot"></span>aktualisiert']
    ]
  }
};

const selectorSnapshot = new Map();
const attrSnapshot = new Map();
const baseTitle = document.title;
const baseDescription = metaDescription?.getAttribute('content') || '';
const baseLang = root.lang || 'pt-BR';

const rememberSelector = (selector) => {
  if (selectorSnapshot.has(selector)) {
    return;
  }

  const node = document.querySelector(selector);
  if (!node) {
    return;
  }

  selectorSnapshot.set(selector, {
    text: node.textContent,
    html: node.innerHTML
  });
};

const rememberAttr = (selector, attribute) => {
  const key = `${selector}::${attribute}`;

  if (attrSnapshot.has(key)) {
    return;
  }

  const node = document.querySelector(selector);
  if (!node) {
    return;
  }

  attrSnapshot.set(key, node.getAttribute(attribute));
};

Object.values(translations).forEach((localeConfig) => {
  localeConfig.text.forEach(([selector]) => rememberSelector(selector));
  localeConfig.html.forEach(([selector]) => rememberSelector(selector));
  localeConfig.attrs.forEach(([selector, attribute]) => rememberAttr(selector, attribute));
});

const setText = (selector, value) => {
  const node = document.querySelector(selector);

  if (!node) {
    return;
  }

  node.textContent = value;
};

const setHTML = (selector, value) => {
  const node = document.querySelector(selector);

  if (!node) {
    return;
  }

  node.innerHTML = value;
};

const setAttr = (selector, attribute, value) => {
  const node = document.querySelector(selector);

  if (!node) {
    return;
  }

  node.setAttribute(attribute, value);
};

const restorePortuguese = () => {
  document.title = baseTitle;
  root.lang = baseLang;

  if (metaDescription) {
    metaDescription.setAttribute('content', baseDescription);
  }

  selectorSnapshot.forEach((snapshot, selector) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    node.textContent = snapshot.text;
    node.innerHTML = snapshot.html;
  });

  attrSnapshot.forEach((value, key) => {
    const [selector, attribute] = key.split('::');
    const node = document.querySelector(selector);

    if (!node) {
      return;
    }

    if (value === null) {
      node.removeAttribute(attribute);
      return;
    }

    node.setAttribute(attribute, value);
  });
};

const setActiveLanguageButton = (language) => {
  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
};

const applyLanguage = (language) => {
  if (language === 'pt') {
    restorePortuguese();
    setActiveLanguageButton('pt');
    localStorage.setItem('portfolio-language', 'pt');
    return;
  }

  const localeConfig = translations[language];

  if (!localeConfig) {
    return;
  }

  document.title = localeConfig.title;
  root.lang = localeConfig.htmlLang;

  if (metaDescription) {
    metaDescription.setAttribute('content', localeConfig.description);
  }

  localeConfig.text.forEach(([selector, value]) => setText(selector, value));
  localeConfig.html.forEach(([selector, value]) => setHTML(selector, value));
  localeConfig.attrs.forEach(([selector, attribute, value]) => setAttr(selector, attribute, value));

  setActiveLanguageButton(language);
  localStorage.setItem('portfolio-language', language);
};

const setTheme = (theme) => {
  root.setAttribute('data-theme', theme);
};

setTheme('dark');

themeButton?.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  setTheme(nextTheme);
});

const setMenuState = (isOpen) => {
  mobilePanel?.classList.toggle('open', isOpen);
  body.classList.toggle('menu-open', isOpen);
  menuButton?.setAttribute('aria-expanded', String(isOpen));
  menuIcon?.setAttribute('href', isOpen ? '#ic-x' : '#ic-menu');
};

menuButton?.addEventListener('click', () => {
  const isOpen = !mobilePanel?.classList.contains('open');
  setMenuState(Boolean(isOpen));
});

mobilePanel?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuState(false));
});

languageButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const selectedLanguage = button.dataset.lang || 'pt';
    applyLanguage(selectedLanguage);
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    setMenuState(false);
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    setMenuState(false);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach((element, index) => {
  element.style.transitionDelay = `${(index % 6) * 45}ms`;
  observer.observe(element);
});

const savedLanguage = localStorage.getItem('portfolio-language') || 'pt';
applyLanguage(savedLanguage);
