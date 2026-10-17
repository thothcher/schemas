// ============================================================
// ICONS
// ============================================================
const ICONS = {
    database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4 3 9 3s9-1.34 9-3v-6"/></svg>',
    api: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    get: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/></svg>',
    post: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    put: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    delete: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/></svg>',
    service: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    componentTs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    pipe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    componentHtml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2h7l5 5v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><polyline points="11 2 11 7 16 7"/></svg>',
    browser: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
    router: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="3" r="3"/><path d="M6 21V8"/><path d="M6 8c0 4 6 4 6 8"/><path d="M18 8v13"/><circle cx="18" cy="5" r="3"/></svg>',
    interceptor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    listTs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    listHtml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="4" rx="1"/><rect x="3" y="10" width="18" height="4" rx="1"/><rect x="3" y="17" width="18" height="4" rx="1"/></svg>',
    cardTs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/></svg>',
    cardHtml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="9" y1="9" x2="15" y2="9"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
    appHtml: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    searchInput: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    debounce: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    loginForm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
    signupForm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>',
    authService: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    tokenStore: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
    authGuard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>',
    asyncState: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
    signalForm: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
    paginate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
    webSocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    routeParams: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    lazyRoute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    rotate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
    dive: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 12h6"/><path d="M12 9l3 3-3 3"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warning: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
    x: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
};

// ============================================================
// UI TRANSLATIONS  (en, ka)
// ============================================================
const T = {
    brand:        ['Angular Flow Lab', 'Angular Flow Lab'],
    academy:      ['IT Step Academy', 'IT Step აკადემია'],
    levels:       ['Levels', 'დონეები'],
    reset:        ['Reset', 'გადატვირთვა'],
    checkAnswer:  ['Check Answer', 'პასუხის შემოწმება'],
    runFlow:      ['Run Flow', 'ნაკადის გაშვება'],
    mission:      ['Mission:', 'მისია:'],
    showHint:     ['Show hint', 'მინიშნება'],
    hint:         ['Hint', 'მინიშნება'],
    library:      ['Block Library', 'ბლოკების ბიბლიოთეკა'],
    inspector:    ['Inspector', 'ინსპექტორი'],
    howWorks:     ['How it works', 'როგორ მუშაობს'],
    selectBlock:  ['Select a block', 'აირჩიე ბლოკი'],
    nothingSel:   ['Nothing selected', 'არცერთი არ არის არჩეული'],
    clickAnyBlock:['Click any block on the canvas to see what it does, its Angular file, code, and common mistakes.', 'დააწკაპუნე ნებისმიერ ბლოკზე, რომ ნახო რას აკეთებს, რომელ ფაილს ეკუთვნის, კოდის ნიმუში და ხშირი შეცდომა.'],
    whatDoes:     ['What it does', 'რას აკეთებს'],
    fileSrc:      ['File / source', 'ფაილი / წყარო'],
    codeEx:       ['Code example', 'კოდის მაგალითი'],
    commonMistake:['Common mistake', 'ხშირი შეცდომა'],
    emptyExplain: ['Drag blocks from the left, connect their ports, then press', 'გადმოიტანე ბლოკები მარცხნიდან, შეაერთე პორტები და დააჭირე'],
    canvasCleared:['Canvas cleared. Drag blocks from the library to start over.', 'არე გასუფთავდა. გადმოიტანე ბლოკები ხელახლა.'],
    runFlowB:     ['Run Flow', 'გაშვება'],
    toWatch:      ['to watch data travel through your Angular app.', 'რათა ნახო, როგორ მოძრაობს მონაცემები შენი Angular აპლიკაციის შიგნით.'],

    // Toast titles
    emptyFlow:    ['Empty flow', 'ცარიელი ნაკადი'],
    emptyFlowMsg: ['Drag blocks from the left and connect them first.', 'ჯერ გადმოიტანე და შეაერთე ბლოკები.'],
    notLinear:    ['Flow is not linear', 'ნაკადი არ არის წრფივი'],
    notLinearMsg: ['Each block should have at most one input and one output connection.', 'თითო ბლოკს უნდა ჰქონდეს მაქსიმუმ ერთი შემავალი და ერთი გამოსასვლელი კავშირი.'],
    unconnected:  ['Unconnected blocks', 'შეუერთებელი ბლოკები'],
    unconnectedMsg:['All blocks on the canvas must be linked into a single chain.', 'ყველა ბლოკი უნდა იყოს დაკავშირებული ერთ ჯაჭვში.'],
    correct:      ['Correct flow', 'სწორი ნაკადია'],
    correctMsg:   ['Great job — that is exactly how data moves in Angular.', 'შესანიშნავია — ზუსტად ასე მოძრაობს მონაცემები Angular-ში.'],
    notQuite:     ['Not quite right', 'არ არის ზუსტი'],
    nothingRun:   ['Nothing to run', 'არაფერია გასაშვები'],
    nothingRunMsg:['Connect at least two blocks into a flow first.', 'ჯერ შეაერთე მინიმუმ ორი ბლოკი.'],
    wrongDir:     ['Wrong direction', 'არასწორი მიმართულება'],
    wrongDirMsg:  ['Connect an output (right side) to an input (left side).', 'შეაერთე გამოსასვლელი (მარჯვენა) მხარე შემავალთან (მარცხენა).'],
    answerOk:     ['<strong>Answer accepted.</strong> Try Run Flow to see the data travel.', '<strong>პასუხი მიღებულია.</strong> დააჭირე გაშვებას, რომ ნახო მონაცემთა მოძრაობა.'],
    flowComplete: ['<strong>Flow complete.</strong>', '<strong>ნაკადი დასრულდა.</strong>'],
    browserRendered:['<strong>Browser</strong> rendered the page successfully.', '<strong>ბრაუზერმა</strong> წარმატებით დახაზა გვერდი.'],

    // Library group names
    grpBackend:   ['Backend', 'სერვერი'],
    grpHttp:      ['HTTP Methods', 'HTTP მეთოდები'],
    grpAngular:   ['Angular Core', 'Angular საფუძვლები'],
    grpComponents:['Components', 'კომპონენტები'],
    grpForms:     ['Forms & Input', 'ფორმები და შემავალი'],
    grpAuth:      ['Auth', 'ავტორიზაცია'],
    grpRouting:   ['Routing', 'მარშრუტიზაცია'],
    grpAdvanced:  ['Advanced', 'დამატებითი'],
    grpOutput:    ['Output', 'შედეგი'],

    // Preview
    ourProducts:  ['Our Products', 'ჩვენი პროდუქცია'],
    items:        ['items', 'ერთეული'],
    inStock:      ['In stock', 'მარაგშია'],
    outOfStock:   ['Out of stock', 'არ არის მარაგში'],
    renderedBy:   ['rendered by your Angular flow.', 'დახაზულია შენი Angular ნაკადით.'],

    // Step prefix
    step:         ['Step', 'ბიჯი'],

    // Position helper for check answer
    position:     ['Position', 'პოზიცია'],
    expectedWord: ['expected', 'მოსალოდნელია'],
    butFound:     ['but found', 'მაგრამ ნაპოვნია'],
    almostMissing:['Almost there — you are missing a block at position', 'თითქმის — ბლოკი აკლია პოზიციაზე'],
    extraAfter:   ['You have an extra block after position', 'გაქვს ზედმეტი ბლოკი პოზიციის შემდეგ'],

    // Outcome banners
    bannerInStock:['Only in-stock items rendered.', 'მხოლოდ მარაგში არსებული პროდუქცია გამოჩნდა.'],
    bannerCreated:['Product created — saved to database.', 'პროდუქტი შეიქმნა — შენახულია ბაზაში.'],
    bannerUpdated:['Product updated.', 'პროდუქტი განახლდა.'],
    bannerDeleted:['Product deleted.', 'პროდუქტი წაიშალა.'],
    bannerRouted: ['Route /products matched.', '/products მისამართი ემთხვევა.'],
    bannerAuthed: ['Authorization header attached.', 'Authorization-ის ჰედერი მიმაგრებულია.'],
    bannerLogged: ['Logged in — token stored.', 'წარმატებული ავტორიზაცია — ტოკენი შენახულია.'],
    bannerSearch: ['Search results for "lap".', 'საძიებო შედეგი "lap"-ისთვის.'],
    bannerDetail: ['Product detail view.', 'პროდუქტის დეტალური ხედი.'],
    bannerLoaded: ['Loaded with spinner shown during fetch.', 'ჩატვირთვის ხატულა ნაჩვენებია მონაცემთა მოლოდინში.'],
    bannerValid:  ['Form validated and submitted.', 'ფორმა ვალიდირებულია და გაგზავნილია.'],
    bannerPaged:  ['Page 1 — 4 items shown of 25.', 'გვერდი 1 — 25-დან 4 ერთეული.'],
    bannerSocket: ['Live updates streaming in.', 'რეალურ დროში განახლება მიდინარეობს.'],
    bannerLazy:   ['Lazy chunk loaded on demand.', 'ლეიზი ჩუნკი ჩაიტვირთა მოთხოვნისას.'],
    bannerCardPattern:['Reusable Card composed inside the List.', 'მრავალჯერადი Card-ი ჩამატებულია List-ში.'],

    // Dive / sub-canvas
    dblToFlip:    ['Double-click to flip back', 'ორმაგი დაწკაპუნება უკან გასარიყელად'],
    diveInto:     ['Dive into', 'შესვლა'],
    topCrumb:     ['Top', 'მთავარი'],
    dveTooltip:   ['Open block internals', 'ბლოკის შინაარსის გახსნა'],
    subLibraryTitle: ['Internals', 'შინაარსი'],
    apiUrlLabel:  ['URL (leave empty to use mock data)', 'URL (ცარიელის შემთხვევაში გამოიყენება ნიმუში)'],
    apiUrlHint:   ['Real fetch happens on Run Flow when the chain is correct.', 'რეალური მონაცემები მოვა Run Flow-ზე, თუ ჯაჭვი სწორია.'],
    livePreview:  ['Live data fetched from your URL', 'მონაცემები ჩამოტვირთულია მითითებული URL-დან'],
    fetchFailed:  ['Fetch failed — showing mock data', 'მოთხოვნა ვერ მოხერხდა — ნაჩვენებია ნიმუში'],
    examplesTitle:['Reference Schemas', 'მზა სქემები'],
    loadEditable: ['Unlock to edit', 'რედაქტირების ჩართვა'],
    readonlyHint: ['Read-only preview — drag blocks to rearrange, or unlock it to edit.', 'მხოლოდ საჩვენებლად — გადაადგილე ბლოკები ან ჩართე რედაქტირება.'],
    subMissingMsg:['Dive into the {block} block and complete its internals.', 'შედი {block} ბლოკში და დაასრულე მისი შინაარსი.'],
    snapOn:       ['Snap to grid: on', 'ბადეზე მიწებება: ჩართულია'],
    snapOff:      ['Snap to grid: off', 'ბადეზე მიწებება: გამორთულია']
};

let lang = 'en';
function tx(field) {
    if (Array.isArray(field)) return field[lang === 'ka' ? 1 : 0];
    return field == null ? '' : field;
}
function tt(key) {
    return T[key] ? tx(T[key]) : key;
}

// ============================================================
// NODE DEFINITIONS
// ============================================================
const NODE_DEFS = {
    database: {
        label: ['Database', 'მონაცემთა ბაზა'],
        category: ['Backend', 'სერვერი'],
        color: '',
        short: ['Stores all your data', 'ინახავს ყველა მონაცემს'],
        long: ['A database is where products live permanently. Think of it as a giant spreadsheet on a server. Tables hold rows of data. Your Angular app never talks to it directly — it always goes through an API.',
               'მონაცემთა ბაზაში ცხოვრობს პროდუქცია მუდმივად — წარმოიდგინე, როგორც დიდი ცხრილი სერვერზე. ცხრილებში არის სტრიქონები. Angular აპი მასთან პირდაპირ არ ურთიერთობს — ყოველთვის API-ის გავლით.'],
        file: 'PostgreSQL · MySQL · MongoDB',
        code: '<span class="c">-- products table</span>\nid | name      | price | inStock\n1  | Laptop    | 1200  | true\n2  | USB Mouse | 25    | false\n3  | Keyboard  | 80    | true',
        mistake: ["Don't ever connect your Angular app directly to the database. Always go through an API for security.",
                  'არასოდეს დააკავშირო Angular აპი პირდაპირ ბაზასთან. უსაფრთხოებისთვის ყოველთვის გადი API-ის გავლით.']
    },
    api: {
        label: ['API Endpoint', 'API წერტილი'],
        category: ['Backend', 'სერვერი'],
        color: '',
        short: ['Server URL returning JSON', 'სერვერის URL, აბრუნებს JSON-ს'],
        long: ['An API is a URL like /api/products. Your Angular app sends an HTTP request to it, and the server reads the database and responds with JSON data.',
               'API არის მისამართი, მაგ. /api/products. Angular აპი უგზავნის HTTP მოთხოვნას, სერვერი წაიკითხავს ბაზიდან და დააბრუნებს JSON-ს.'],
        file: 'Express · NestJS · Spring · Django',
        code: '<span class="k">app</span>.<span class="k">get</span>(<span class="s">\'/api/products\'</span>, (req, res) => {\n  res.<span class="k">json</span>(products);\n});',
        mistake: ['Forgetting CORS headers, or returning HTML instead of JSON.',
                  'CORS ჰედერების დავიწყება ან HTML-ის დაბრუნება JSON-ის ნაცვლად.']
    },
    get: {
        label: ['GET', 'GET'],
        category: ['HTTP Method', 'HTTP მეთოდი'],
        color: 'c-success',
        short: ['Read data from server', 'ამოიკითხავს მონაცემებს'],
        long: ['GET is the HTTP verb for reading data. It does not change anything on the server. Use it for fetching lists, single items, or anything where you only need to read.',
               'GET არის HTTP ზმნა მონაცემთა წასაკითხად. სერვერზე არაფერს ცვლის. გამოიყენე სიების, ცალკეული ერთეულის ან წაკითხვადი მონაცემის მისაღებად.'],
        file: 'HTTP verb',
        code: '<span class="c">// In a service:</span>\n<span class="k">this</span>.http.<span class="k">get</span>&lt;Product[]&gt;(<span class="s">\'/api/products\'</span>)',
        mistake: ['Using GET to modify data. GET must only read — never write.',
                  'GET-ის გამოყენება მონაცემთა შესაცვლელად. GET-ი მხოლოდ კითხულობს.']
    },
    post: {
        label: ['POST', 'POST'],
        category: ['HTTP Method', 'HTTP მეთოდი'],
        color: 'c-info',
        short: ['Create new data', 'შექმნის ახალ მონაცემს'],
        long: ['POST sends new data to the server to create something — for example, adding a brand new product. The new object goes in the request body.',
               'POST უგზავნის ახალ მონაცემს სერვერს რათა შექმნას რამე — მაგ. ახალი პროდუქტი. ახალი ობიექტი მოთხოვნის body-ში მიდის.'],
        file: 'HTTP verb',
        code: '<span class="k">this</span>.http.<span class="k">post</span>&lt;Product&gt;(\n  <span class="s">\'/api/products\'</span>,\n  newProduct\n)',
        mistake: ['Forgetting to send a body, or sending it as a query string instead of JSON.',
                  'body-ის გაგზავნის დავიწყება ან JSON-ის ნაცვლად query-ით გაგზავნა.']
    },
    put: {
        label: ['PUT', 'PUT'],
        category: ['HTTP Method', 'HTTP მეთოდი'],
        color: 'c-warning',
        short: ['Update existing data', 'განაახლებს მონაცემს'],
        long: ['PUT replaces an existing item with new values. Send the full updated object. Use the id in the URL to point at the item.',
               'PUT-ი ცვლის არსებულ ერთეულს ახალი მნიშვნელობებით. გადააგზავნე სრული ობიექტი. URL-ში მიუთითე id.'],
        file: 'HTTP verb',
        code: '<span class="k">this</span>.http.<span class="k">put</span>&lt;Product&gt;(\n  <span class="s">`/api/products/${id}`</span>,\n  updated\n)',
        mistake: ['Using PUT for partial updates — that is what PATCH is for.',
                  'PUT-ის გამოყენება ნაწილობრივი ცვლილებისთვის — ამისთვის არის PATCH.']
    },
    delete: {
        label: ['DELETE', 'DELETE'],
        category: ['HTTP Method', 'HTTP მეთოდი'],
        color: 'c-error',
        short: ['Remove data', 'წაშლა'],
        long: ['DELETE asks the server to remove an item. Usually you only need to send the id in the URL — no body needed.',
               'DELETE-ი ეუბნება სერვერს, რომ წაშალოს ერთეული. URL-ში მიეცი id, body საჭირო არ არის.'],
        file: 'HTTP verb',
        code: '<span class="k">this</span>.http.<span class="k">delete</span>(\n  <span class="s">`/api/products/${id}`</span>\n)',
        mistake: ['Not asking the user to confirm before deleting. Always show a confirm dialog.',
                  'მომხმარებლისგან დადასტურების მოთხოვნის გამორჩენა. ყოველთვის ვაჩვენოთ ფანჯარა.']
    },
    service: {
        label: ['Angular Service', 'Angular სერვისი'],
        category: ['Angular', 'Angular'],
        color: '',
        short: ['HttpClient wrapper class', 'HttpClient-ის გასახვევი კლასი'],
        long: ['A service is a class marked with @Injectable that wraps all your HTTP calls. Components get it with inject() instead of calling HttpClient directly. This keeps components clean and makes the code reusable.',
               'სერვისი არის @Injectable კლასი, რომელშიც თავმოყრილია HTTP გამოძახებები. კომპონენტი მას inject()-ით იღებს — არ უხდება HttpClient-ის პირდაპირ გამოყენება.'],
        file: 'product.service.ts',
        code: '<span class="k">@Injectable</span>({ providedIn: <span class="s">\'root\'</span> })\n<span class="k">export class</span> ProductService {\n  <span class="k">private readonly</span> http = <span class="k">inject</span>(HttpClient);\n\n  getAll() {\n    <span class="k">return this</span>.http.get&lt;Product[]&gt;(<span class="s">\'/api/products\'</span>);\n  }\n}',
        mistake: ['Calling HttpClient directly from a component instead of through a service.',
                  'HttpClient-ის გამოძახება პირდაპირ კომპონენტიდან, სერვისის ნაცვლად.']
    },
    componentTs: {
        label: ['Component (.ts)', 'კომპონენტი (.ts)'],
        category: ['Angular', 'Angular'],
        color: '',
        short: ['Component logic & state', 'კომპონენტის ლოგიკა'],
        long: ['The component class injects the service with inject() and turns the response into a signal with toSignal(). No manual subscribe() and no ngOnInit needed — the template just reads the signal. Components are OnPush by default in Angular 22, so signals are what keep the view up to date.',
               'კომპონენტი inject()-ით იღებს სერვისს და toSignal()-ით აქცევს პასუხს სიგნალად. subscribe() და ngOnInit საჭირო აღარ არის — HTML უბრალოდ კითხულობს სიგნალს. Angular 22-ში კომპონენტები ნაგულისხმევად OnPush-ია, ამიტომ ხედს სიგნალები ანახლებს.'],
        file: 'products.ts',
        code: '<span class="k">@Component</span>({\n  selector: <span class="s">\'app-products\'</span>,\n  templateUrl: <span class="s">\'./products.html\'</span>\n})\n<span class="k">export class</span> Products {\n  <span class="k">private readonly</span> svc = <span class="k">inject</span>(ProductService);\n  <span class="k">protected readonly</span> products = <span class="k">toSignal</span>(\n    <span class="k">this</span>.svc.getAll(),\n    { initialValue: [] }\n  );\n}',
        mistake: ['Calling subscribe() by hand and leaking the subscription. toSignal() subscribes for you and cleans up when the component is destroyed.',
                  'subscribe()-ის ხელით გამოძახება და გამოწერის გაუქმების დავიწყება. toSignal() თავად გამოიწერს და კომპონენტის განადგურებისას გააუქმებს.']
    },
    pipe: {
        label: ['Filter / Pipe', 'ფილტრი / Pipe'],
        category: ['Angular', 'Angular'],
        color: 'c-info',
        short: ['Transform or filter data', 'მონაცემთა ფილტრაცია'],
        long: ['A pipe transforms data inside a template. For filtering a list (like only in-stock products), it is usually cleaner to derive a computed() signal in the component. It is cached and only recalculated when products() changes.',
               'Pipe-ი გარდაქმნის მონაცემს HTML-ში. სიის გასაფილტრად ხშირად სჯობს კომპონენტში computed() სიგნალი — ის ქეშირდება და მხოლოდ products()-ის ცვლილებისას თავიდან ითვლება.'],
        file: 'in-stock.pipe.ts · or computed()',
        code: '<span class="c">// In the component:</span>\n<span class="k">protected readonly</span> inStock = <span class="k">computed</span>(() =&gt;\n  <span class="k">this</span>.products().filter(p =&gt; p.inStock)\n);',
        mistake: ['Calling .filter() (or a getter) inside the template — it re-runs on every change detection cycle. computed() caches the result.',
                  '.filter()-ის ან getter-ის გამოძახება HTML-ში — ყოველ ცვლილებაზე თავიდან სრულდება და ანელებს აპს. computed() შედეგს ინახავს.']
    },
    componentHtml: {
        label: ['Component (.html)', 'კომპონენტი (.html)'],
        category: ['Angular', 'Angular'],
        color: '',
        short: ['Template / view', 'ხედი / შაბლონი'],
        long: ['The template uses the built-in @for block (it replaces *ngFor) to loop over the data and render an element for each item. It reads the signal from the .ts file by calling it: products().',
               'HTML იყენებს ჩაშენებულ @for ბლოკს (ცვლის *ngFor-ს) მონაცემთა გადასახედად და ხატავს ცალკეულ ელემენტს. .ts-ში არსებულ სიგნალს ის გამოძახებით კითხულობს: products().'],
        file: 'products.html',
        code: '<span class="k">@for</span> (p of products(); track p.id) {\n  &lt;div class=<span class="s">"card"</span>&gt;\n    &lt;h3&gt;{{ p.name }}&lt;/h3&gt;\n    &lt;span&gt;{{ p.price }}&lt;/span&gt;\n  &lt;/div&gt;\n} <span class="k">@empty</span> {\n  &lt;p&gt;No products yet.&lt;/p&gt;\n}',
        mistake: ['Forgetting the track expression in @for — Angular needs it to track items efficiently.',
                  '@for-ში track-ის დავიწყება — Angular-ს ეს სჭირდება ეფექტური განახლებისთვის.']
    },
    browser: {
        label: ['Browser Screen', 'ბრაუზერის ეკრანი'],
        category: ['Output', 'შედეგი'],
        color: 'c-success',
        short: ['What the user sees', 'რასაც მომხმარებელი ხედავს'],
        long: ['The final rendered HTML in the user\'s browser. This is the end of the data journey — your products are now visible on screen, styled and interactive.',
               'საბოლოოდ ხატავს HTML-ს მომხმარებლის ბრაუზერში. მონაცემთა მგზავრობის ბოლო წერტილია.'],
        file: 'Chrome · Firefox · Safari',
        code: '<span class="c">&lt;!-- Rendered DOM --&gt;</span>\n&lt;div class=<span class="s">"card"</span>&gt;\n  &lt;h3&gt;Laptop&lt;/h3&gt;\n  &lt;span&gt;$1200&lt;/span&gt;\n&lt;/div&gt;',
        mistake: ['Assuming the browser runs the code as you wrote it — it actually runs a compiled bundle.',
                  'არ ეგონოს, რომ ბრაუზერი ისე უშვებს კოდს, როგორც დაიწერა — სინამდვილეში გაშვებულია კომპილაცია.']
    },
    router: {
        label: ['RouterOutlet', 'RouterOutlet'],
        category: ['Angular', 'Angular'],
        color: '',
        short: ['URL-based page switcher', 'URL-ის მიხედვით გვერდის ცვლა'],
        long: ['RouterOutlet is the slot where Angular mounts the component that matches the current URL. Define routes in app.routes.ts, register them with provideRouter() in app.config.ts, then put &lt;router-outlet /&gt; in your root template.',
               'RouterOutlet არის ის ადგილი, სადაც Angular ხატავს იმ კომპონენტს, რომელიც URL-ს შეესაბამება. მარშრუტები app.routes.ts-შია, app.config.ts-ში provideRouter()-ით რეგისტრირდება, ხოლო ფესვ HTML-ში &lt;router-outlet /&gt; იდება.'],
        file: 'app.routes.ts · app.config.ts',
        code: '<span class="k">export const</span> routes: Routes = [\n  {\n    path: <span class="s">\'products\'</span>,\n    component: Products\n  },\n  { path: <span class="s">\'\'</span>, redirectTo: <span class="s">\'products\'</span>, pathMatch: <span class="s">\'full\'</span> }\n];\n\n<span class="c">// app.config.ts</span>\nproviders: [<span class="k">provideRouter</span>(routes)]',
        mistake: ['Forgetting RouterOutlet in the root component\'s imports (or &lt;router-outlet /&gt; in its template) — routes match, but nothing renders.',
                  'RouterOutlet-ის root კომპონენტის imports-ში (ან &lt;router-outlet /&gt;-ის მის HTML-ში) დავიწყება — მისამართი ემთხვევა, მაგრამ არაფერი ჩანს.']
    },
    interceptor: {
        label: ['HTTP Interceptor', 'HTTP Interceptor'],
        category: ['Angular', 'Angular'],
        color: 'c-warning',
        short: ['Auto-attach auth header', 'ავტომატური Authorization-ი'],
        long: ['An interceptor sits between every service call and the API. It can attach an Authorization token to all requests automatically, so you never repeat that code.',
               'Interceptor-ი ზის სერვისსა და API-ს შორის — ავტომატურად აყენებს Authorization ჰედერს ყველა მოთხოვნაზე.'],
        file: 'auth.interceptor.ts',
        code: '<span class="k">export const</span> authInterceptor: HttpInterceptorFn =\n  (req, next) =&gt; {\n    <span class="k">const</span> token = <span class="k">inject</span>(TokenStore).get();\n    <span class="k">if</span> (!token) <span class="k">return</span> next(req);\n    <span class="k">return</span> next(req.clone({\n      setHeaders: { Authorization: <span class="s">`Bearer ${token}`</span> }\n    }));\n  };',
        mistake: ['Forgetting to register it in app.config.ts with provideHttpClient(withInterceptors(...)).',
                  'app.config.ts-ში provideHttpClient(withInterceptors(...))-ის დავიწყება.']
    },

    // ----- New nodes (advanced levels) -----
    listTs: {
        label: ['List Component (.ts)', 'სიის კომპონენტი (.ts)'],
        category: ['Components', 'კომპონენტები'],
        color: '',
        short: ['Fetches & holds the array', 'იღებს და ინახავს მასივს'],
        long: ['The list component is a parent. It injects the service, turns the array into a signal, and its template loops and passes each item down to a child Card component through a signal input.',
               'სიის კომპონენტი მშობელია. ის იღებს სერვისს და მასივს სიგნალად აქცევს. HTML-ში თითო ელემენტს Card-ის შვილ კომპონენტს გადასცემს სიგნალური input-ის გავლით.'],
        file: 'product-list.ts',
        code: '<span class="k">export class</span> ProductList {\n  <span class="k">private readonly</span> svc = <span class="k">inject</span>(ProductService);\n  <span class="k">protected readonly</span> products = <span class="k">toSignal</span>(\n    <span class="k">this</span>.svc.getAll(),\n    { initialValue: [] }\n  );\n}',
        mistake: ['Doing everything inside one big component instead of splitting List and Card — hard to reuse.',
                  'ყველაფრის ერთ კომპონენტში გაკეთება — გართულდება მრავალჯერადი გამოყენება.']
    },
    listHtml: {
        label: ['List Component (.html)', 'სიის კომპონენტი (.html)'],
        category: ['Components', 'კომპონენტები'],
        color: '',
        short: ['Loops and mounts cards', 'ციკლავს და ხატავს ბარათებს'],
        long: ['The list template uses @for to loop over the signal and renders one &lt;app-product-card /&gt; for each item, passing the item via property binding [product].',
               'სიის HTML იყენებს @for-ს ციკლისთვის და ხატავს &lt;app-product-card /&gt;-ს თითო ერთეულზე, ელემენტს გადასცემს [product]-ით.'],
        file: 'product-list.html',
        code: '<span class="k">@for</span> (p of products(); track p.id) {\n  &lt;app-product-card [product]=<span class="s">"p"</span> /&gt;\n}',
        mistake: ['Forgetting square brackets in [product] — that turns property binding into a plain string.',
                  '[product]-ში კვადრატული ფრჩხილების დავიწყება — შედეგად String გადადის ობიექტის ნაცვლად.']
    },
    cardTs: {
        label: ['Card Component (.ts)', 'ბარათის კომპონენტი (.ts)'],
        category: ['Components', 'კომპონენტები'],
        color: '',
        short: ['Receives input() item', 'იღებს input() ერთეულს'],
        long: ['A reusable child component. It declares a signal input, product = input.required&lt;Product&gt;(), and renders one card. The parent decides which item to give it — the card itself knows nothing about the list.',
               'მრავალჯერადი შვილი კომპონენტი. აქვს სიგნალური input — product = input.required&lt;Product&gt;() — და ხატავს ერთ ბარათს. სიის შესახებ მას არაფერი იცის.'],
        file: 'product-card.ts',
        code: '<span class="k">@Component</span>({\n  selector: <span class="s">\'app-product-card\'</span>,\n  templateUrl: <span class="s">\'./product-card.html\'</span>\n})\n<span class="k">export class</span> ProductCard {\n  <span class="k">readonly</span> product = <span class="k">input.required</span>&lt;Product&gt;();\n}',
        mistake: ['Fetching data inside a child card — children should be dumb and only receive data from the parent.',
                  'მონაცემთა მოპოვება შვილ კომპონენტში — შვილი მხოლოდ უნდა იღებდეს მონაცემს მშობლისგან.']
    },
    cardHtml: {
        label: ['Card Component (.html)', 'ბარათის კომპონენტი (.html)'],
        category: ['Components', 'კომპონენტები'],
        color: '',
        short: ['Renders one product', 'ხატავს ერთ პროდუქტს'],
        long: ['The card template renders one product using interpolation. A signal input is read by calling it — product().name. This HTML is reused for every item in the list.',
               'ბარათის HTML ხატავს ერთ პროდუქტს interpolation-ის გამოყენებით. სიგნალური input იკითხება გამოძახებით — product().name. ეს HTML მეორდება სიის თითო ერთეულზე.'],
        file: 'product-card.html',
        code: '&lt;div class=<span class="s">"card"</span>&gt;\n  &lt;h3&gt;{{ product().name }}&lt;/h3&gt;\n  &lt;p&gt;{{ product().price | currency }}&lt;/p&gt;\n  &lt;span&gt;\n    <span class="k">@if</span> (product().inStock) { In stock } <span class="k">@else</span> { Out }\n  &lt;/span&gt;\n&lt;/div&gt;',
        mistake: ['Adding styles inline instead of using a component stylesheet — harder to maintain.',
                  'ინლაინ სტილების გამოყენება სტილების ფაილის ნაცვლად — გართულდება მხარდაჭერა.']
    },
    appHtml: {
        label: ['App Component (.html)', 'App კომპონენტი (.html)'],
        category: ['Components', 'კომპონენტები'],
        color: '',
        short: ['Root template', 'ფესვი HTML'],
        long: ['The root template of your app. It mounts the list component (or &lt;router-outlet /&gt;) and contains the shell — header, sidebar, footer.',
               'აპლიკაციის ფესვი HTML. ის ხატავს List კომპონენტს ან &lt;router-outlet /&gt;-ს და მოიცავს ერთიან კარკასს.'],
        file: 'app.html',
        code: '&lt;header&gt;Shop&lt;/header&gt;\n&lt;main&gt;\n  &lt;app-product-list /&gt;\n&lt;/main&gt;',
        mistake: ['Cramming everything into app.html — split into smaller components.',
                  'ყველაფრის app.html-ში ჩაყრა — დაყავი პატარა კომპონენტებად.']
    },
    searchInput: {
        label: ['Search Input', 'ძიების ველი'],
        category: ['Forms', 'ფორმები'],
        color: 'c-info',
        short: ['User types a query', 'მომხმარებელი წერს მოთხოვნას'],
        long: ['An &lt;input&gt; in the template bound to a Signal Form field with [formField]. Each keystroke updates the model signal in the component, which then fires a search request.',
               '&lt;input&gt; ველი HTML-ში, რომელიც [formField]-ით არის დაკავშირებული Signal Form-ის ველთან. ყოველი ღილაკის დაჭერით კომპონენტის მოდელი სიგნალი ახლდება.'],
        file: 'search.html',
        code: '<span class="c">// component</span>\nmodel = <span class="k">signal</span>({ query: <span class="s">\'\'</span> });\nsearchForm = <span class="k">form</span>(<span class="k">this</span>.model);\n\n<span class="c">&lt;!-- template --&gt;</span>\n&lt;input\n  [formField]=<span class="s">"searchForm.query"</span>\n  placeholder=<span class="s">"Search…"</span>&gt;',
        mistake: ['Firing an HTTP call on every keystroke without debounce — that floods the server.',
                  'ყოველი ღილაკის დაჭერისას HTTP გამოძახება debounce-ის გარეშე — სერვერი იტვირთება.']
    },
    debounce: {
        label: ['Debounce (rxjs)', 'Debounce (rxjs)'],
        category: ['Advanced', 'დამატებითი'],
        color: 'c-warning',
        short: ['Wait before sending', 'დაცდის ოპერატორი'],
        long: ['debounceTime is an RxJS operator that delays values. If the user is still typing, it cancels the previous timer. Only the last value after a quiet period reaches the service.',
               'debounceTime არის RxJS ოპერატორი — დააყოვნებს მნიშვნელობას. სანამ მომხმარებელი წერს, წინა ტაიმერი იშლება. სერვისამდე აღწევს მხოლოდ ბოლო ღირებულება.'],
        file: 'rxjs operator',
        code: 'results = <span class="k">toSignal</span>(\n  <span class="k">toObservable</span>(<span class="k">this</span>.model).pipe(\n    map(m =&gt; m.query),\n    debounceTime(<span class="n">300</span>),\n    distinctUntilChanged(),\n    switchMap(q =&gt; svc.search(q))\n  ),\n  { initialValue: [] }\n);',
        mistake: ['Using 50ms — too short, still floods. 300ms is a good default for search inputs.',
                  '50მწმ-ი ძალიან მცირეა, კიდევ მრავალი მოთხოვნა გადადის. 300მწმ-ი ნორმალური ნაგულისხმევია.']
    },
    loginForm: {
        label: ['Login Form', 'ლოგინის ფორმა'],
        category: ['Forms', 'ფორმები'],
        color: 'c-info',
        short: ['Email + password input', 'ემაილი და პაროლი'],
        long: ['A form with email and password fields, built with Signal Forms: the model is a signal, form() wraps it, and validators live in a schema. On submit, the values are passed to the auth service.',
               'ფორმა ემაილით და პაროლით, აგებული Signal Forms-ით: მოდელი სიგნალია, form() მას ახვევს, ვალიდატორები კი schema-შია. გაგზავნისას მნიშვნელობები ჩაბარდება auth სერვისს.'],
        file: 'login.html',
        code: '&lt;form (submit)=<span class="s">"onSubmit($event)"</span>&gt;\n  &lt;input [formField]=<span class="s">"loginForm.email"</span>&gt;\n  &lt;input [formField]=<span class="s">"loginForm.password"</span>\n         type=<span class="s">"password"</span>&gt;\n  &lt;button [disabled]=<span class="s">"loginForm().invalid()"</span>&gt;\n    Login\n  &lt;/button&gt;\n&lt;/form&gt;',
        mistake: ['Storing the password in component state after login — never keep raw passwords in memory.',
                  'პაროლის შენახვა კომპონენტში ლოგინის შემდეგ — არასოდეს დატოვო პაროლი მეხსიერებაში.']
    },
    authService: {
        label: ['Auth Service', 'ავტორიზაციის სერვისი'],
        category: ['Auth', 'ავტორიზაცია'],
        color: '',
        short: ['Login / logout logic', 'შესვლა და გასვლა'],
        long: ['A service dedicated to authentication. It calls /api/login, receives a token, hands it to the token store, and exposes signals like isLoggedIn.',
               'სპეციალური სერვისი ავტორიზაციისთვის. გამოიძახებს /api/login-ს, მიიღებს ტოკენს, შეინახავს tokenStore-ში და გასცემს isLoggedIn-ის სიგნალს.'],
        file: 'auth.service.ts',
        code: '<span class="k">@Injectable</span>({ providedIn: <span class="s">\'root\'</span> })\n<span class="k">export class</span> AuthService {\n  <span class="k">private readonly</span> http = <span class="k">inject</span>(HttpClient);\n  <span class="k">private readonly</span> store = <span class="k">inject</span>(TokenStore);\n\n  login(email: string, password: string) {\n    <span class="k">return this</span>.http.post&lt;{ token: string }&gt;(<span class="s">\'/api/login\'</span>, { email, password })\n      .pipe(tap(r =&gt; <span class="k">this</span>.store.set(r.token)));\n  }\n}',
        mistake: ['Putting auth logic inside the login component instead of a dedicated service.',
                  'ავტორიზაციის ლოგიკის ჩაყრა login კომპონენტში სპეციალური სერვისის ნაცვლად.']
    },
    tokenStore: {
        label: ['Token Store', 'ტოკენის საცავი'],
        category: ['Auth', 'ავტორიზაცია'],
        color: 'c-warning',
        short: ['localStorage for JWT', 'JWT-ის შენახვა'],
        long: ['A small wrapper around localStorage (or sessionStorage). Holds the JWT, so other parts of the app (interceptors, guards) can read it.',
               'პატარა შრე localStorage-ის გარშემო. ინახავს JWT-ს, რომ სხვა ნაწილებმა (interceptor, guard) წაიკითხონ.'],
        file: 'token.store.ts',
        code: '<span class="k">@Injectable</span>({ providedIn: <span class="s">\'root\'</span> })\n<span class="k">export class</span> TokenStore {\n  set(t: string) { localStorage.setItem(<span class="s">\'token\'</span>, t); }\n  get() { <span class="k">return</span> localStorage.getItem(<span class="s">\'token\'</span>); }\n  clear() { localStorage.removeItem(<span class="s">\'token\'</span>); }\n}',
        mistake: ['Reading localStorage in 10 places — wrap it in one service so the rule is in one spot.',
                  'localStorage-ის ცოცხალ კოდში წაკითხვა მრავალ ადგილას — შეახვიე ერთ სერვისში.']
    },
    authGuard: {
        label: ['Auth Guard', 'ავტორიზაციის Guard'],
        category: ['Auth', 'ავტორიზაცია'],
        color: 'c-error',
        short: ['Protects a route', 'მარშრუტის დაცვა'],
        long: ['A function attached to a route. Before Angular activates the route, the guard checks if the user has a valid token. If not, it redirects to /login.',
               'ფუნქცია მარშრუტზე. სანამ Angular ააქტიურებს მარშრუტს, guard-ი ამოწმებს ვალიდურ ტოკენს. თუ არ არის — ხდება გადამისამართება /login-ზე.'],
        file: 'auth.guard.ts',
        code: '<span class="k">export const</span> authGuard: CanActivateFn = () => {\n  <span class="k">const</span> store = inject(TokenStore);\n  <span class="k">const</span> router = inject(Router);\n  <span class="k">return</span> store.get()\n    ? <span class="k">true</span>\n    : router.createUrlTree([<span class="s">\'/login\'</span>]);\n};',
        mistake: ['Checking auth inside every component instead of one guard at the route.',
                  'ავტორიზაციის შემოწმება ყოველ კომპონენტში ერთი route-ის guard-ის ნაცვლად.']
    },
    routeParams: {
        label: ['Route Params (:id)', 'მარშრუტის პარამეტრი'],
        category: ['Routing', 'მარშრუტიზაცია'],
        color: 'c-info',
        short: ['Read :id from URL', 'წაიკითხავს URL-ის :id-ს'],
        long: ['Defined as :id in the route. With withComponentInputBinding() the router hands it straight to a component input, and a resource refetches the matching record from the service whenever the id changes.',
               'მარშრუტში მიეთითება :id. withComponentInputBinding()-ით როუტერი მას პირდაპირ კომპონენტის input-ს გადასცემს, ხოლო resource-ი id-ის ყოველ ცვლილებაზე თავიდან ჩამოტვირთავს შესაბამის ჩანაწერს სერვისიდან.'],
        file: 'app.routes.ts · app.config.ts',
        code: '{ path: <span class="s">\'product/:id\'</span>, component: ProductDetail }\n\n<span class="c">// app.config.ts:</span>\n<span class="c">// provideRouter(routes, withComponentInputBinding())</span>\n\n<span class="c">// inside the component:</span>\nid = <span class="k">input.required</span>&lt;string&gt;();\nproduct = <span class="k">rxResource</span>({\n  params: () =&gt; <span class="k">this</span>.id(),\n  stream: ({ params }) =&gt; svc.getOne(params)\n});',
        mistake: ['Reading route.snapshot once — when the same component is reused for another id it never updates. Bind the param to an input() and let a resource react to it.',
                  'route.snapshot-ის ერთხელ წაკითხვა — როცა კომპონენტი სხვა id-ზე თავიდან გამოიყენება, ის აღარ ახლდება. მიაბი პარამეტრი input()-ს და resource-ი მას თავად გამოეხმაურება.']
    },
    asyncState: {
        label: ['Loading / Error State', 'ჩატვირთვა / შეცდომა'],
        category: ['Advanced', 'დამატებითი'],
        color: 'c-warning',
        short: ['Spinner & error UI', 'ხატულა და შეცდომა'],
        long: ['Three UI states for any async fetch: loading, success, error. A resource (rxResource or httpResource) gives you isLoading(), error() and value() signals out of the box, and the template shows the right one.',
               'სამი მდგომარეობა ნებისმიერი ასინქრონული ფეჩისთვის: loading, success, error. resource-ი (rxResource ან httpResource) უკვე გაძლევს isLoading(), error() და value() სიგნალებს, ხოლო HTML აჩვენებს შესაბამისს.'],
        file: 'products.ts',
        code: 'products = <span class="k">rxResource</span>({\n  stream: () =&gt; <span class="k">this</span>.svc.getAll()\n});\n\n<span class="c">// template</span>\n@if (products.isLoading()) { &lt;app-spinner /&gt; }\n@else if (products.error()) { &lt;p&gt;Could not load&lt;/p&gt; }\n@else if (products.hasValue()) {\n  <span class="c">&lt;!-- products.value() --&gt;</span>\n}',
        mistake: ['Showing only loading and forgetting the error case — users see a spinner forever. Also read value() only after hasValue(): it throws while the resource is in an error state.',
                  'მხოლოდ loading-ის ჩვენება და შეცდომის უგულებელყოფა — მომხმარებელი ხედავს მუდმივ ხატულას. value()-ც hasValue()-ს შემდეგ წაიკითხე: შეცდომის მდგომარეობაში ის გამონაკლისს აგდებს.']
    },
    signalForm: {
        label: ['Signal Form', 'Signal ფორმა'],
        category: ['Forms', 'ფორმები'],
        color: 'c-info',
        short: ['Model signal + validators', 'მოდელი სიგნალი + ვალიდატორები'],
        long: ['A form built from a model signal with form(). Validators such as required() and min() are declared once in a schema, and the template binds inputs with [formField]. Classic Reactive Forms (FormGroup) still work, but Signal Forms are the signal-first way to build forms.',
               'ფორმა, რომელიც მოდელი სიგნალიდან იქმნება form()-ით. ვალიდატორები (required(), min()...) ერთხელ აღიწერება schema-ში, ხოლო HTML-ში ველები [formField]-ით უკავშირდება. კლასიკური Reactive Forms (FormGroup) ისევ მუშაობს, მაგრამ Signal Forms signal-ზე დაფუძნებული გზაა.'],
        file: 'product-form.ts',
        code: 'model = <span class="k">signal</span>({ name: <span class="s">\'\'</span>, price: <span class="n">0</span> });\nproductForm = <span class="k">form</span>(<span class="k">this</span>.model, (p) =&gt; {\n  <span class="k">required</span>(p.name);\n  <span class="k">min</span>(p.price, <span class="n">0</span>);\n});\n\nsubmit(event: Event) {\n  event.preventDefault();\n  <span class="k">if</span> (<span class="k">this</span>.productForm().invalid()) <span class="k">return</span>;\n  svc.create(<span class="k">this</span>.model()).subscribe();\n}',
        mistake: ['Submitting an invalid form to the server — always check productForm().invalid() first.',
                  'არასწორი ფორმის გაგზავნა — ყოველთვის ჯერ შეამოწმე productForm().invalid().']
    },
    paginate: {
        label: ['Pagination', 'პაგინაცია'],
        category: ['Advanced', 'დამატებითი'],
        color: 'c-info',
        short: ['Page parameter', 'გვერდის პარამეტრი'],
        long: ['Instead of loading thousands of items, request one page at a time. Send ?page=1&size=10 to the server and let it return a slice.',
               'ათასობით ერთეულის ჩატვირთვის ნაცვლად, ერთ გვერდს ვითხოვთ ერთდროულად. ?page=1&size=10 პარამეტრით.'],
        file: 'product.service.ts',
        code: 'getPage(page: number) {\n  <span class="k">return this</span>.http.get(<span class="s">\'/api/products\'</span>, {\n    params: { page, size: <span class="n">10</span> }\n  });\n}',
        mistake: ['Loading the entire dataset and slicing on the client — kills performance with big tables.',
                  'მთლიანი მონაცემთა ნაკრების ჩამოტვირთვა და კლიენტზე დაჭრა — დიდ ცხრილებზე ანელებს აპს.']
    },
    webSocket: {
        label: ['WebSocket', 'WebSocket'],
        category: ['Advanced', 'დამატებითი'],
        color: 'c-info',
        short: ['Real-time stream', 'რეალურ დროში სტრიმი'],
        long: ['A persistent two-way connection between client and server. The server can push updates the moment something changes — no polling needed.',
               'მუდმივი ორმხრივი კავშირი კლიენტსა და სერვერს შორის. სერვერი მაშინვე უგზავნის განახლებას ცვლილებისას.'],
        file: 'live.service.ts',
        code: '<span class="k">@Injectable</span>({ providedIn: <span class="s">\'root\'</span> })\n<span class="k">export class</span> LiveService {\n  <span class="k">private readonly</span> socket = <span class="k">new</span> WebSocket(<span class="s">\'wss://api/live\'</span>);\n  <span class="k">readonly</span> products = <span class="k">signal</span>&lt;Product[]&gt;([]);\n\n  <span class="k">constructor</span>() {\n    <span class="k">this</span>.socket.onmessage = e =&gt;\n      <span class="k">this</span>.products.set(JSON.parse(e.data));\n  }\n}',
        mistake: ['Forgetting to close the socket on logout — wastes server resources.',
                  'logout-ისას სოკეტის დახურვის დავიწყება — სერვერის რესურსი იხარჯება ფუჭად.']
    },
    signupForm: {
        label: ['Signup Form', 'რეგისტრაციის ფორმა'],
        category: ['Forms', 'ფორმები'],
        color: '',
        short: ['Email + password + confirm', 'ელფოსტა + პაროლი + დადასტურება'],
        long: ['A signup form collects credentials for a new user account. It hands the values to an Auth Service which then POSTs them to the API — usually sharing the same service as the login form.',
               'რეგისტრაციის ფორმა ქმნის ახალ მომხმარებელს. იგი გადასცემს მნიშვნელობებს Auth Service-ს, რომელიც POST-ით აგზავნის API-ში — როგორც წესი იგივე სერვისით, რომელსაც login იყენებს.'],
        file: 'signup.ts',
        code: '<span class="k">onSubmit</span>(event: Event) {\n  event.preventDefault();\n  <span class="k">this</span>.auth.signup(<span class="k">this</span>.model())\n    .subscribe(t =&gt; <span class="k">this</span>.token.save(t));\n}',
        mistake: ['Creating a separate AuthService just for signup — share one service so login and signup stay in sync.',
                  'ცალკე AuthService-ის შექმნა მხოლოდ რეგისტრაციისთვის — ერთი სერვისი უნდა გამოიყენო ორივესთვის.']
    },
    lazyRoute: {
        label: ['Lazy Route', 'Lazy მარშრუტი'],
        category: ['Routing', 'მარშრუტიზაცია'],
        color: 'c-warning',
        short: ['Loaded on demand', 'საჭიროებისას ჩაიტვირთება'],
        long: ['A route whose code is loaded only when the user navigates to it. Reduces initial bundle size. Use loadComponent for a single component or loadChildren for a group of routes.',
               'მარშრუტი, რომლის კოდიც იტვირთება მხოლოდ ვიზიტისას. ამცირებს თავდაპირველი bundle-ის ზომას. loadComponent ერთი კომპონენტისთვის ან loadChildren მარშრუტების ჯგუფისთვის.'],
        file: 'app.routes.ts',
        code: '{\n  path: <span class="s">\'admin\'</span>,\n  loadComponent: () =&gt;\n    <span class="k">import</span>(<span class="s">\'./admin/admin\'</span>)\n      .then(m =&gt; m.Admin)\n}',
        mistake: ['Importing rarely-used features eagerly (a static import in your routes) — bloats the initial download. Use loadComponent / loadChildren.',
                  'იშვიათად საჭირო ფიჩერების უპირობოდ იმპორტი (სტატიკური import მარშრუტებში) — bundle ხდება დიდი. გამოიყენე loadComponent / loadChildren.']
    },

    // ----- Sub-blocks (used inside the Dive sub-canvas) -----
    'sub.inject': { sub: true, label: ['inject()', 'inject()'], category: ['Internals', 'შინაარსი'], color: '', short: ['Inject dependencies', 'დამოკიდებულებების ინჯექცია'], long: ['Pulls a dependency out of Angular\'s injector. Use it in field initializers — it is shorter than constructor parameters and infers the type for you.', 'იღებს დამოკიდებულებას Angular-ის injector-იდან. გამოიყენე ველის ინიციალიზაციაში — constructor-ის პარამეტრებზე მოკლეა და ტიპს თავად ადგენს.'], file: 'class member', code: '<span class="k">private readonly</span> http = <span class="k">inject</span>(HttpClient);', mistake: ['Calling inject() outside an injection context, e.g. inside a click handler — it throws. Call it in a field initializer or the constructor.', 'inject()-ის გამოძახება injection context-ის გარეთ, მაგ. click handler-ში — ის შეცდომას აგდებს. გამოიძახე ველის ინიციალიზაციაში ან constructor-ში.'] },
    'sub.ngOnInit': { sub: true, label: ['ngOnInit', 'ngOnInit'], category: ['Lifecycle', 'სასიცოცხლო ციკლი'], color: 'c-info', short: ['Init lifecycle hook', 'ინიციალიზაცია'], long: ['Called once after Angular has set up inputs. Still the place for one-off setup that needs inputs — but for loading data, prefer toSignal() or a resource.', 'გამოიძახება ერთხელ Input-ების დაყენების შემდეგ. ერთჯერადი ინიციალიზაციისთვის კვლავ გამოდგება — მაგრამ მონაცემების ჩასატვირთად სჯობს toSignal() ან resource.'], file: 'OnInit', code: '<span class="k">ngOnInit</span>() {\n  <span class="k">this</span>.load();\n}', mistake: ['Fetching here and subscribing by hand when toSignal() or a resource would do.', 'აქ მონაცემების ჩამოტვირთვა და ხელით subscribe, როცა toSignal() ან resource საკმარისია.'] },
    'sub.httpClient': { sub: true, label: ['HttpClient', 'HttpClient'], category: ['Internals', 'შინაარსი'], color: '', short: ['Angular HTTP utility', 'Angular HTTP'], long: ['The underlying HTTP utility your service wraps. It returns Observables of typed responses and uses the Fetch API by default (no withFetch() needed).', 'HTTP უტილიტა, რომელსაც სერვისი იყენებს. აბრუნებს Observable-ს და ნაგულისხმევად Fetch API-ს იყენებს (withFetch() საჭირო აღარ არის).'], file: '@angular/common/http', code: '<span class="k">this</span>.http.get&lt;T&gt;(url)', mistake: ['Using fetch() directly — you lose interceptors, retries and the typed pipeline.', 'fetch-ის გამოყენება — დაკარგავ interceptor-ებს.'] },
    'sub.signal': { sub: true, label: ['Signal', 'Signal'], category: ['Reactivity', 'რეაქტიულობა'], color: 'c-success', short: ['Reactive value', 'რეაქტიული მნიშვნელობა'], long: ['A signal is a reactive primitive. Read it as a function; update with .set / .update; derive new values with computed(). Angular tracks reads and re-renders when it changes.', 'Signal არის რეაქტიული პრიმიტივი. წაიკითხე როგორც ფუნქცია; განაახლე .set / .update; ახალი მნიშვნელობა მიიღე computed()-ით.'], file: '@angular/core', code: 'products = <span class="k">signal</span>&lt;Product[]&gt;([]);', mistake: ['Treating signal() as a static value — always invoke it.', 'signal()-ის სტატიკურ მნიშვნელობად მოპყრობა.'] },
    'sub.observable': { sub: true, label: ['Observable', 'Observable'], category: ['Reactivity', 'რეაქტიულობა'], color: 'c-info', short: ['rxjs stream', 'rxjs ნაკადი'], long: ['An RxJS Observable. Lazy — does nothing until subscribed. Pipe operators to transform, and use toSignal() to read it in a template.', 'RxJS Observable. სანამ subscribe არ მოხდება, არაფერი ხდება. გარდაქმენი ოპერატორებით, ხოლო HTML-ში წასაკითხად გამოიყენე toSignal().'], file: 'rxjs', code: 'products$ = <span class="k">this</span>.http.get&lt;Product[]&gt;(url);', mistake: ['Forgetting to subscribe — nothing happens.', 'subscribe-ის დავიწყება.'] },
    'sub.subject': { sub: true, label: ['Subject', 'Subject'], category: ['Reactivity', 'რეაქტიულობა'], color: 'c-info', short: ['Multicast emitter', 'მრავალარხიანი emitter'], long: ['A Subject is both an Observable and an Observer. Use it to push values to many subscribers.', 'Subject არის Observable და Observer ერთად. გამოიყენე მრავალი subscriber-ისთვის.'], file: 'rxjs', code: 'changes$ = <span class="k">new</span> Subject&lt;Product&gt;();', mistake: ['Using a plain Subject when a BehaviorSubject is needed for the latest value.', 'Subject-ის გამოყენება BehaviorSubject-ის ნაცვლად.'] },
    'sub.directive': { sub: true, label: ['Directive', 'დირექტივა'], category: ['Internals', 'შინაარსი'], color: '', short: ['Template attribute', 'შაბლონის ატრიბუტი'], long: ['A directive attaches behavior to an element via an attribute. The built-in @if / @for blocks have replaced *ngIf / *ngFor; attribute directives change appearance or behavior.', 'დირექტივა ანიჭებს ქცევას ელემენტს ატრიბუტით. ჩაშენებულმა @if / @for-მა ჩაანაცვლა *ngIf / *ngFor; ატრიბუტული დირექტივები ცვლის იერსახეს ან ქცევას.'], file: 'directive.ts', code: '<span class="k">@Directive</span>({ selector: <span class="s">\'[appHilite]\'</span> })', mistake: ['Writing a custom structural directive when @if / @for already does the job.', 'მორგებული სტრუქტურული დირექტივის წერა, როცა @if / @for უკვე საკმარისია.'] },
    'sub.pipe': { sub: true, label: ['Pipe', 'Pipe'], category: ['Internals', 'შინაარსი'], color: '', short: ['Template transform', 'შაბლონის ტრანსფორმაცია'], long: ['A pipe transforms a value inside a template, e.g. {{ price | currency }}.', 'Pipe ცვლის მნიშვნელობას შაბლონში.'], file: 'pipe.ts', code: '{{ price | <span class="k">currency</span> }}', mistake: ['Marking a pipe impure (pure: false) for heavy work — it then runs on every change detection.', 'მძიმე სამუშაოს pipe-ზე გადატანა pure: false-ით — ის მაშინ ყოველ ცვლილებაზე სრულდება.'] },
    'sub.loader': { sub: true, label: ['Loader / Spinner', 'ჩატვირთვა'], category: ['UX', 'UX'], color: 'c-info', short: ['Show while pending', 'ნახე ჩატვირთვისას'], long: ['A spinner shown while the response is pending. Bind it to a resource\'s isLoading() or to a loading signal.', 'ხატულა მონაცემთა მოლოდინში. მიაბი resource-ის isLoading()-ს ან loading სიგნალს.'], file: 'template', code: '@if (products.isLoading()) { &lt;app-spinner /&gt; }', mistake: ['Never hiding the loader on error — UI stays stuck.', 'spinner-ის დატოვება შეცდომისას.'] },
    'sub.errorState': { sub: true, label: ['Error State', 'შეცდომის მდგომარეობა'], category: ['UX', 'UX'], color: 'c-error', short: ['Render on failure', 'ნახე შეცდომისას'], long: ['Show an error message and a retry button when the request fails. A resource exposes error() and reload() for exactly this.', 'შეცდომის შეტყობინება და retry ღილაკი. resource-ი ამისთვის გაძლევს error()-სა და reload()-ს.'], file: 'template', code: '@if (products.error()) { &lt;p&gt;Could not load&lt;/p&gt; }', mistake: ['Swallowing the error silently.', 'შეცდომის ჩუმად გადაყლაპვა.'] },
    'sub.guardCheck': { sub: true, label: ['canActivate check', 'canActivate-ის შემოწმება'], category: ['Internals', 'შინაარსი'], color: '', short: ['Allow / block route', 'ნება / აკრძალვა'], long: ['Returns true (allow) or a UrlTree (redirect). Reads from the Token Store.', 'აბრუნებს true ან UrlTree-ს.'], file: 'auth.guard.ts', code: '<span class="k">return</span> token ? <span class="k">true</span> : router.parseUrl(<span class="s">\'/login\'</span>);', mistake: ['Returning false with no redirect — user is stuck.', 'false-ის დაბრუნება redirect-ის გარეშე.'] },
    'sub.routeRedirect': { sub: true, label: ['Redirect to /login', 'გადასვლა /login-ზე'], category: ['Internals', 'შინაარსი'], color: 'c-warning', short: ['Send user to login', 'მომხმარებლის გადამისამართება'], long: ['When the guard denies access, return a UrlTree that points at /login to send the user there.', 'როცა guard აკრძალავს, აბრუნე UrlTree /login-ზე.'], file: 'auth.guard.ts', code: '<span class="k">return</span> router.parseUrl(<span class="s">\'/login\'</span>);', mistake: ['Hard-coding window.location — bypasses Angular router.', 'window.location-ის გამოყენება.'] },
    'sub.formField': { sub: true, label: ['Form field', 'ფორმის ველი'], category: ['Internals', 'შინაარსი'], color: '', short: ['Single input model', 'ერთი ველის მოდელი'], long: ['A single field of a Signal Form. loginForm.email binds to an input with [formField] and exposes value(), valid(), touched() and errors() signals.', 'Signal Form-ის ერთი ველი. loginForm.email [formField]-ით უკავშირდება input-ს და გასცემს value(), valid(), touched() და errors() სიგნალებს.'], file: '@angular/forms/signals', code: '&lt;input [formField]=<span class="s">"loginForm.email"</span>&gt;', mistake: ['Skipping validators — invalid data sneaks in.', 'ვალიდატორების გამოტოვება.'] },
    'sub.validator': { sub: true, label: ['Validator', 'ვალიდატორი'], category: ['Internals', 'შინაარსი'], color: 'c-warning', short: ['Block bad input', 'არასწორი მონაცემის ბლოკი'], long: ['Built-in rules such as required(), email() and minLength() are declared on a field in the form schema. Custom rules use validate().', 'ჩაშენებული წესები (required(), email(), minLength()) form-ის schema-ში ველზე აღიწერება. მორგებულისთვის გამოიყენე validate().'], file: '@angular/forms/signals', code: '<span class="k">email</span>(schemaPath.email);', mistake: ['Validating only client-side — always validate on the server too.', 'მხოლოდ კლიენტზე ვალიდაცია.'] },
    'sub.submitHandler': { sub: true, label: ['onSubmit', 'onSubmit'], category: ['Internals', 'შინაარსი'], color: '', short: ['Form submit method', 'submit მეთოდი'], long: ['Reads the form value and hands it off to the service. Disable the button while pending.', 'წაიკითხავს ფორმის მნიშვნელობას და გადასცემს სერვისს.'], file: 'component.ts', code: '<span class="k">onSubmit</span>(e: Event) { e.preventDefault(); <span class="k">this</span>.auth.login(<span class="k">this</span>.model()); }', mistake: ['Submitting an invalid form — check loginForm().invalid() first.', 'არავალიდური ფორმის გაგზავნა — ჯერ შეამოწმე loginForm().invalid().'] },
    'sub.routeHandler': { sub: true, label: ['Route handler', 'მისამართის ხელჯოხი'], category: ['Server', 'სერვერი'], color: 'c-info', short: ['Server-side endpoint', 'სერვერის წერტილი'], long: ['The function on the server that responds to a specific HTTP path + method.', 'სერვერის ფუნქცია, რომელიც პასუხობს კონკრეტულ მისამართს.'], file: 'server', code: 'app.get(<span class="s">\'/api/products\'</span>, handler)', mistake: ['Not returning JSON.', 'JSON-ის დაუბრუნებლობა.'] },
    'sub.dbQuery': { sub: true, label: ['DB query', 'DB query'], category: ['Server', 'სერვერი'], color: '', short: ['SELECT / FIND', 'SELECT / FIND'], long: ['The SQL or ORM call that reads or writes the database row(s).', 'SQL ან ORM გამოძახება.'], file: 'server', code: 'db.query(<span class="s">\'SELECT * FROM products\'</span>)', mistake: ['Building SQL by string concatenation — open to injection.', 'SQL-ის სტრინგის შერწყმა — injection-ის რისკი.'] },
    'sub.tokenRead': { sub: true, label: ['Read token', 'ტოკენის წაკითხვა'], category: ['Internals', 'შინაარსი'], color: '', short: ['localStorage.getItem', 'localStorage.getItem'], long: ['Reads the saved auth token. Returns null if absent or expired.', 'წაიკითხავს შენახულ ტოკენს.'], file: 'token-store.ts', code: 'localStorage.getItem(<span class="s">\'token\'</span>)', mistake: ['Reading on every keystroke — cache the value.', 'ყოველ კლავიატურის დარტყმაზე წაკითხვა.'] },
    'sub.tokenWrite': { sub: true, label: ['Save token', 'ტოკენის შენახვა'], category: ['Internals', 'შინაარსი'], color: 'c-success', short: ['localStorage.setItem', 'localStorage.setItem'], long: ['Persists the auth token after login. Clear on logout.', 'შეინახავს ტოკენს login-ის შემდეგ.'], file: 'token-store.ts', code: 'localStorage.setItem(<span class="s">\'token\'</span>, t)', mistake: ['Forgetting to clear on logout.', 'logout-ზე გაწმენდის დავიწყება.'] }
};

// ============================================================
// SUB-CANVAS: maps a parent block type to its internal toolset
// ============================================================
const SUB_TOOLS = {
    service:      ['sub.inject', 'sub.httpClient', 'sub.observable', 'sub.signal', 'sub.errorState'],
    componentTs:  ['sub.inject', 'sub.ngOnInit', 'sub.signal', 'sub.observable', 'sub.loader', 'sub.errorState'],
    componentHtml:['sub.directive', 'sub.pipe', 'sub.loader', 'sub.errorState'],
    listTs:       ['sub.inject', 'sub.ngOnInit', 'sub.signal', 'sub.observable'],
    listHtml:     ['sub.directive', 'sub.pipe'],
    cardTs:       ['sub.inject', 'sub.signal'],
    cardHtml:     ['sub.directive', 'sub.pipe'],
    appHtml:      ['sub.directive'],
    api:          ['sub.routeHandler', 'sub.validator', 'sub.dbQuery'],
    authGuard:    ['sub.guardCheck', 'sub.tokenRead', 'sub.routeRedirect'],
    authService:  ['sub.inject', 'sub.httpClient', 'sub.observable', 'sub.tokenWrite', 'sub.signal'],
    loginForm:    ['sub.formField', 'sub.validator', 'sub.submitHandler'],
    signupForm:   ['sub.formField', 'sub.validator', 'sub.submitHandler'],
    signalForm: ['sub.formField', 'sub.validator', 'sub.submitHandler'],
    searchInput:  ['sub.formField', 'sub.subject'],
    interceptor:  ['sub.tokenRead'],
    debounce:     ['sub.subject', 'sub.observable'],
    asyncState:   ['sub.signal', 'sub.loader', 'sub.errorState'],
    paginate:     ['sub.formField', 'sub.signal'],
    webSocket:    ['sub.subject', 'sub.observable'],
    routeParams:  ['sub.observable'],
    lazyRoute:   ['sub.routeHandler'],
    tokenStore:   ['sub.tokenRead', 'sub.tokenWrite'],
    router:       ['sub.routeHandler', 'sub.routeRedirect'],
    pipe:         ['sub.pipe'],
    database:     ['sub.dbQuery'],
    get:          ['sub.httpClient'],
    post:         ['sub.httpClient'],
    put:          ['sub.httpClient'],
    delete:       ['sub.httpClient'],
    browser:      ['sub.directive', 'sub.pipe']
};

// Default sub-canvas seed per parent type — a small representative arrangement
const SUB_SEED = {
    service:      { nodes: [{type: 'sub.inject', x: 200, y: 250}, {type: 'sub.httpClient', x: 500, y: 250}, {type: 'sub.observable', x: 800, y: 250}], connections: [[0,1],[1,2]] },
    componentTs:  { nodes: [{type: 'sub.inject', x: 200, y: 220}, {type: 'sub.ngOnInit', x: 500, y: 220}, {type: 'sub.signal', x: 800, y: 220}], connections: [[0,1],[1,2]] },
    componentHtml:{ nodes: [{type: 'sub.directive', x: 250, y: 250}, {type: 'sub.pipe', x: 550, y: 250}], connections: [[0,1]] },
    authService:  { nodes: [{type: 'sub.inject', x: 200, y: 240}, {type: 'sub.httpClient', x: 480, y: 240}, {type: 'sub.tokenWrite', x: 760, y: 240}], connections: [[0,1],[1,2]] },
    loginForm:    { nodes: [{type: 'sub.formField', x: 200, y: 240}, {type: 'sub.validator', x: 500, y: 240}, {type: 'sub.submitHandler', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    signupForm:   { nodes: [{type: 'sub.formField', x: 200, y: 240}, {type: 'sub.validator', x: 500, y: 240}, {type: 'sub.submitHandler', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    api:          { nodes: [{type: 'sub.routeHandler', x: 200, y: 240}, {type: 'sub.validator', x: 500, y: 240}, {type: 'sub.dbQuery', x: 800, y: 240}], connections: [[0,1],[1,2]] },
    authGuard:    { nodes: [{type: 'sub.tokenRead', x: 200, y: 240}, {type: 'sub.guardCheck', x: 500, y: 240}, {type: 'sub.routeRedirect', x: 800, y: 240}], connections: [[0,1],[1,2]] }
};

// ============================================================
// LIBRARY GROUPS
// ============================================================
const LIBRARY_GROUPS = [
    { title: 'grpBackend',    items: ['database', 'api'] },
    { title: 'grpHttp',       items: ['get', 'post', 'put', 'delete'] },
    { title: 'grpAngular',    items: ['service', 'componentTs', 'componentHtml', 'pipe', 'interceptor'] },
    { title: 'grpComponents', items: ['listTs', 'listHtml', 'cardTs', 'cardHtml', 'appHtml'] },
    { title: 'grpForms',      items: ['signalForm', 'loginForm', 'signupForm', 'searchInput'] },
    { title: 'grpAuth',       items: ['authService', 'tokenStore', 'authGuard'] },
    { title: 'grpRouting',    items: ['router', 'routeParams', 'lazyRoute'] },
    { title: 'grpAdvanced',   items: ['debounce', 'asyncState', 'paginate', 'webSocket'] },
    { title: 'grpOutput',     items: ['browser'] }
];

// ============================================================
// LEVELS
// ============================================================
const LEVELS = [
    {
        title:   ['Get Products', 'პროდუქტების მიღება'],
        mission: ['You have products in a database. Build a flow that gets all products and displays them on the browser screen.',
                  'პროდუქცია გაქვს ბაზაში. ააწყვე ნაკადი, რომ აიღო ისინი და გამოაჩინო ბრაუზერში.'],
        hint:    ['Database → API → GET → Service → Component (.ts) → Component (.html) → Browser.',
                  'Database → API → GET → Service → Component (.ts) → Component (.html) → Browser.'],
        expected: ['database', 'api', 'get', 'service', 'componentTs', 'componentHtml', 'browser'],
        outcome: 'all'
    },
    {
        title:   ['Filter In-Stock Products', 'მარაგში არსებულის გაფილტვრა'],
        mission: ['Some products are out of stock. Build a flow that fetches all products and shows only the ones that are in stock.',
                  'ზოგი პროდუქტი არ არის მარაგში. ააწყვე ნაკადი, რომ აჩვენო მხოლოდ მარაგში არსებული.'],
        hint:    ['Same as level 1, but add a Filter / Pipe between Component (.ts) and Component (.html).',
                  'როგორც წინა, მაგრამ Component (.ts)-სა და Component (.html)-ს შორის ჩასვი Filter / Pipe.'],
        expected: ['database', 'api', 'get', 'service', 'componentTs', 'pipe', 'componentHtml', 'browser'],
        outcome: 'inStock'
    },
    {
        title:   ['Add Product with POST', 'პროდუქტის დამატება (POST)'],
        mission: ['A new product needs to be saved. Build a POST flow that sends the new product from the component all the way to the database.',
                  'ახალი პროდუქტი ბაზაში უნდა შეინახო. ააწყვე POST ნაკადი კომპონენტიდან ბაზამდე.'],
        hint:    ['Component (.ts) → Service → POST → API → Database.',
                  'Component (.ts) → Service → POST → API → Database.'],
        expected: ['componentTs', 'service', 'post', 'api', 'database'],
        outcome: 'created'
    },
    {
        title:   ['Update Product with PUT', 'პროდუქტის განახლება (PUT)'],
        mission: ['Edit an existing product and send the updated values back to the server using PUT.',
                  'შეცვალე არსებული პროდუქტი და გაუგზავნე ცვლილება PUT-ით.'],
        hint:    ['Component (.ts) → Service → PUT → API → Database.',
                  'Component (.ts) → Service → PUT → API → Database.'],
        expected: ['componentTs', 'service', 'put', 'api', 'database'],
        outcome: 'updated'
    },
    {
        title:   ['Delete Product with DELETE', 'პროდუქტის წაშლა (DELETE)'],
        mission: ['Remove a product from the database. Build the DELETE flow.',
                  'წაშალე პროდუქტი ბაზიდან. ააწყვე DELETE ნაკადი.'],
        hint:    ['Component (.ts) → Service → DELETE → API → Database.',
                  'Component (.ts) → Service → DELETE → API → Database.'],
        expected: ['componentTs', 'service', 'delete', 'api', 'database'],
        outcome: 'deleted'
    },
    {
        title:   ['Angular Routing with RouterOutlet', 'Angular Routing'],
        mission: ['When the URL is /products, RouterOutlet must mount the products component, which then fetches the data from the database.',
                  'როცა URL არის /products, RouterOutlet უნდა ჩასვას products კომპონენტი, რომელიც ბაზიდან წაიკითხავს მონაცემს.'],
        hint:    ['RouterOutlet → Component (.ts) → Service → GET → API → Database.',
                  'RouterOutlet → Component (.ts) → Service → GET → API → Database.'],
        expected: ['router', 'componentTs', 'service', 'get', 'api', 'database'],
        outcome: 'routed'
    },
    {
        title:   ['HTTP Interceptor with Auth Token', 'HTTP Interceptor ტოკენით'],
        mission: ['Every request needs an Authorization header. Insert an interceptor between the service and the GET so the token is added automatically.',
                  'ყოველი მოთხოვნა საჭიროებს Authorization ჰედერს. ჩასვი interceptor service-სა და GET-ს შორის.'],
        hint:    ['Component (.ts) → Service → Interceptor → GET → API → Database.',
                  'Component (.ts) → Service → Interceptor → GET → API → Database.'],
        expected: ['componentTs', 'service', 'interceptor', 'get', 'api', 'database'],
        outcome: 'authed'
    },
    // ----- Advanced levels -----
    {
        title:   ['Parent-Child Card Pattern', 'მშობელ-შვილი Card-ის შაბლონი'],
        mission: ['Build a real Angular pattern: fetch products, pass each one to a reusable Card component via a signal input(), and compose everything inside the App template.',
                  'ააწყვე რეალური Angular-ის შაბლონი: აიღე პროდუქცია, თითო ერთეული გადააფაცე Card-ის შვილ კომპონენტს სიგნალური input()-ით, ხოლო ყველაფერი ჩასვი App HTML-ში.'],
        hint:    ['Database → API → GET → Service → List (.ts) → Card (.ts) → Card (.html) → List (.html) → App (.html) → Browser.',
                  'Database → API → GET → Service → List (.ts) → Card (.ts) → Card (.html) → List (.html) → App (.html) → Browser.'],
        expected: ['database', 'api', 'get', 'service', 'listTs', 'cardTs', 'cardHtml', 'listHtml', 'appHtml', 'browser'],
        outcome: 'cardPattern'
    },
    {
        title:   ['Product Detail Page', 'პროდუქტის დეტალური გვერდი'],
        mission: ['When the URL is /product/42, read the :id, fetch that single product, and render the detail view.',
                  'როცა URL არის /product/42, წაიკითხე :id, ჩამოტვირთე კონკრეტული პროდუქტი და დახატე დეტალური ხედი.'],
        hint:    ['RouterOutlet → Route Params → Component (.ts) → Service → GET → API → Database → Component (.html) → Browser.',
                  'RouterOutlet → Route Params → Component (.ts) → Service → GET → API → Database → Component (.html) → Browser.'],
        expected: ['router', 'routeParams', 'componentTs', 'service', 'get', 'api', 'database', 'componentHtml', 'browser'],
        outcome: 'detail'
    },
    {
        title:   ['Search Products with Debounce', 'ძიება debounce-ით'],
        mission: ['As the user types into a search box, fetch matching products — but wait 300ms between keystrokes so the server is not flooded.',
                  'როცა მომხმარებელი წერს ძიების ველში, ჩამოტვირთე შესაბამისი პროდუქცია, მაგრამ დაიცადე 300მწმ.'],
        hint:    ['Search Input → Component (.ts) → Debounce → Service → GET → API → Database → Component (.html) → Browser.',
                  'Search Input → Component (.ts) → Debounce → Service → GET → API → Database → Component (.html) → Browser.'],
        expected: ['searchInput', 'componentTs', 'debounce', 'service', 'get', 'api', 'database', 'componentHtml', 'browser'],
        outcome: 'search'
    },
    {
        title:   ['Login & Save Token', 'ლოგინი და ტოკენის შენახვა'],
        mission: ['Build a login flow: the user submits a form, the auth service POSTs the credentials, and on success the token is saved in storage.',
                  'ააწყვე ლოგინის ნაკადი: ფორმა, auth სერვისი, POST და ტოკენი შენახული საცავში.'],
        hint:    ['Login Form → Component (.ts) → Auth Service → POST → API → Database → Token Store.',
                  'Login Form → Component (.ts) → Auth Service → POST → API → Database → Token Store.'],
        expected: ['loginForm', 'componentTs', 'authService', 'post', 'api', 'database', 'tokenStore'],
        outcome: 'logged'
    },
    {
        title:   ['Auth Guard Protected Route', 'Auth Guard დაცული მარშრუტი'],
        mission: ['Protect the /dashboard route. The Auth Guard reads the token from storage. If valid, it lets the component load and fetch data; if not, it redirects to login.',
                  'დაიცავი /dashboard-ი. Auth Guard წაიკითხავს ტოკენს. თუ ვალიდურია — კომპონენტი ჩაიტვირთება; თუ არა — გადადის login-ზე.'],
        hint:    ['RouterOutlet → Auth Guard → Token Store → Component (.ts) → Service → GET → API → Database → Browser.',
                  'RouterOutlet → Auth Guard → Token Store → Component (.ts) → Service → GET → API → Database → Browser.'],
        expected: ['router', 'authGuard', 'tokenStore', 'componentTs', 'service', 'get', 'api', 'database', 'browser'],
        outcome: 'authed'
    },
    {
        title:   ['Loading & Error States', 'ჩატვირთვა და შეცდომა'],
        mission: ['Show a spinner while loading and an error message if the fetch fails. Only render the list when the data arrives. Dive into Component (.ts) and add a Loader and an Error State inside it.',
                  'აჩვენე ხატულა მონაცემთა ჩატვირთვისას და შეცდომა — წარუმატებლობისას. შედი Component (.ts)-ში და დაამატე Loader და Error State.'],
        hint:    ['Database → API → GET → Service → Async State → Component (.ts) → Component (.html) → Browser. Then dive into Component (.ts) and add sub.loader + sub.errorState.',
                  'Database → API → GET → Service → Async State → Component (.ts) → Component (.html) → Browser. შემდეგ შედი Component (.ts)-ში და დაამატე loader + errorState.'],
        expected: ['database', 'api', 'get', 'service', 'asyncState', 'componentTs', 'componentHtml', 'browser'],
        subSeeds: {
            componentTs: { nodes: [{type: 'sub.inject', x: 200, y: 240}, {type: 'sub.ngOnInit', x: 500, y: 240}], connections: [[0,1]] }
        },
        subRequired: { componentTs: ['sub.loader', 'sub.errorState'] },
        outcome: 'loaded'
    },
    {
        title:   ['Signal Form Submit', 'Signal ფორმის გაგზავნა'],
        mission: ['Build a validated Signal Form for creating a product. Submit it through the service and save it to the database.',
                  'ააწყვე ვალიდირებული Signal ფორმა პროდუქტის შესაქმნელად. გააგზავნე სერვისით ბაზაში.'],
        hint:    ['Signal Form → Component (.ts) → Service → POST → API → Database.',
                  'Signal Form → Component (.ts) → Service → POST → API → Database.'],
        expected: ['signalForm', 'componentTs', 'service', 'post', 'api', 'database'],
        outcome: 'valid'
    },
    {
        title:   ['Pagination Flow', 'პაგინაცია'],
        mission: ['Show only one page of products at a time. The pagination control tells the component which page to fetch from the server.',
                  'აჩვენე მხოლოდ ერთი გვერდი ერთდროულად. პაგინაცია ეუბნება კომპონენტს, რომელი გვერდი მოითხოვოს.'],
        hint:    ['Pagination → Component (.ts) → Service → GET → API → Database → Component (.html) → Browser.',
                  'Pagination → Component (.ts) → Service → GET → API → Database → Component (.html) → Browser.'],
        expected: ['paginate', 'componentTs', 'service', 'get', 'api', 'database', 'componentHtml', 'browser'],
        outcome: 'paged'
    },
    {
        title:   ['Real-time Updates (WebSocket)', 'რეალურ დროში WebSocket'],
        mission: ['The dashboard should update live whenever a product changes. Connect via WebSocket and stream updates straight to the component.',
                  'Dashboard-ი უნდა განახლდეს რეალურ დროში. დაუკავშირდი WebSocket-ით და გადაეცი განახლება პირდაპირ კომპონენტს.'],
        hint:    ['Database → WebSocket → Service → Component (.ts) → Component (.html) → Browser.',
                  'Database → WebSocket → Service → Component (.ts) → Component (.html) → Browser.'],
        expected: ['database', 'webSocket', 'service', 'componentTs', 'componentHtml', 'browser'],
        outcome: 'socket'
    },
    {
        title:   ['Lazy-loaded Route', 'Lazy ჩატვირთვადი მარშრუტი'],
        mission: ['The admin area is rarely used. Load it lazily — only when the user navigates there — to keep the initial app small.',
                  'ადმინ პანელი იშვიათად გამოიყენება. ჩატვირთე lazy-ად — მხოლოდ მისი მონახულებისას.'],
        hint:    ['RouterOutlet → Lazy Route → Component (.ts) → Service → GET → API → Database → Browser.',
                  'RouterOutlet → Lazy Route → Component (.ts) → Service → GET → API → Database → Browser.'],
        expected: ['router', 'lazyRoute', 'componentTs', 'service', 'get', 'api', 'database', 'browser'],
        outcome: 'lazy'
    },
    {
        title:   ['Shared Auth Service (Login + Signup)', 'საერთო Auth სერვისი (Login + Signup)'],
        mission: ['One AuthService handles BOTH Login and Signup. Wire both forms into the same service, then POST credentials to the API and save the token. This is a graph — connections can fan in and out.',
                  'ერთი AuthService უმკლავდება ორივეს — Login-სა და Signup-ს. შეაერთე ორივე ფორმა იმავე სერვისზე, შემდეგ POST API-ში და ტოკენის შენახვა. ეს არის გრაფი — კავშირები იყოფა.'],
        hint:    ['Login Form → Auth Service, Signup Form → Auth Service, Auth Service → POST → API → Database, Auth Service → Token Store.',
                  'Login Form → Auth Service, Signup Form → Auth Service, Auth Service → POST → API → Database, Auth Service → Token Store.'],
        expectedGraph: {
            nodes: ['loginForm', 'signupForm', 'authService', 'post', 'api', 'database', 'tokenStore'],
            edges: [
                ['loginForm', 'authService'],
                ['signupForm', 'authService'],
                ['authService', 'post'],
                ['post', 'api'],
                ['api', 'database'],
                ['authService', 'tokenStore']
            ]
        },
        outcome: 'logged'
    }
];

// ============================================================
// STATE
// ============================================================
const state = {
    currentLevel: 0,
    nodes: [],
    connections: [],
    selectedNodeId: null,
    nextNodeId: 1,
    nextConnId: 1,
    completed: new Set(),
    running: false,
    zoom: 1,
    theme: 'light',
    spacePressed: false,
    panning: false,
    canvasStack: [],
    readonly: false,
    snapToGrid: false,
    undoStack: [],
    redoStack: []
};

const NODE_W = 220;
const NODE_H = 108;
const SVG_NS = 'http://www.w3.org/2000/svg';
const MIN_ZOOM = 0.4;
const MAX_ZOOM = 2;

// ============================================================
// DOM REFS
// ============================================================
const $ = (id) => document.getElementById(id);
const canvasEl = $('canvas');
const canvasStageEl = $('canvas-stage');
const canvasWrapEl = $('canvas-wrap');
const svgEl = $('connections-svg');
const nodesContainer = $('nodes-container');
const libraryListEl = $('library-list');
const inspectorBody = $('inspector-body');
const inspectorTitle = $('insp-title');
const explainStepsEl = $('explain-steps');
const explainBodyEl = $('explain-body');
const missionTextEl = $('mission-text');
const missionHintBtn = $('mission-hint');
const levelNumEl = $('level-num');
const levelTitleEl = $('level-title');
const levelsToggle = $('levels-toggle');
const levelsDropdown = $('levels-dropdown');
const levelsMenuEl = $('levels-menu');
const toastWrap = $('toast-wrap');
const previewOverlay = $('preview-overlay');
const previewBody = $('preview-body');
const zoomLevelEl = $('zoom-level');

// ============================================================
// UTIL
// ============================================================
const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const easeInOut = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

function portPos(node, type) {
    if (type === 'in') return { x: node.x, y: node.y + NODE_H / 2 };
    return { x: node.x + NODE_W, y: node.y + NODE_H / 2 };
}
function bezier(sx, sy, tx, ty) {
    const dx = Math.max(40, Math.abs(tx - sx) * 0.5);
    return `M ${sx} ${sy} C ${sx + dx} ${sy}, ${tx - dx} ${ty}, ${tx} ${ty}`;
}
function eventToCanvas(e) {
    const rect = canvasEl.getBoundingClientRect();
    return {
        x: (e.clientX - rect.left) / state.zoom,
        y: (e.clientY - rect.top) / state.zoom
    };
}
function isOverCanvas(e) {
    const r = canvasWrapEl.getBoundingClientRect();
    return e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
}
function nowTime() {
    const d = new Date();
    return String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0');
}

// ============================================================
// ZOOM
// ============================================================
function applyZoom() {
    canvasEl.style.transform = `scale(${state.zoom})`;
    canvasStageEl.style.width = (2400 * state.zoom) + 'px';
    canvasStageEl.style.height = (1400 * state.zoom) + 'px';
    zoomLevelEl.textContent = Math.round(state.zoom * 100) + '%';
}
function setZoom(z, anchor) {
    const old = state.zoom;
    const newZ = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, z));
    if (newZ === old) return;
    // anchor in canvas-wrap (visible viewport)
    if (anchor) {
        const scrollX = canvasWrapEl.scrollLeft;
        const scrollY = canvasWrapEl.scrollTop;
        // canvas coord under cursor before zoom
        const canvasX = (scrollX + anchor.x) / old;
        const canvasY = (scrollY + anchor.y) / old;
        state.zoom = newZ;
        applyZoom();
        canvasWrapEl.scrollLeft = canvasX * newZ - anchor.x;
        canvasWrapEl.scrollTop = canvasY * newZ - anchor.y;
    } else {
        state.zoom = newZ;
        applyZoom();
    }
}

// ============================================================
// RENDERING
// ============================================================
function renderLibrary() {
    libraryListEl.innerHTML = '';
    const header = $('lbl-library');
    const inSub = state.canvasStack.length > 0;
    if (inSub) {
        const parentType = state.canvasStack[state.canvasStack.length - 1].ownerNodeType;
        if (header) header.textContent = tt('subLibraryTitle') + ' · ' + tx(NODE_DEFS[parentType].label);
        const items = SUB_TOOLS[parentType] || [];
        const sec = document.createElement('div');
        sec.className = 'library-section';
        sec.innerHTML = `<div class="library-section-title">${tx(NODE_DEFS[parentType].label)}</div>`;
        items.forEach(type => {
            const def = NODE_DEFS[type];
            if (!def) return;
            const item = document.createElement('div');
            item.className = 'lib-item';
            item.dataset.type = type;
            item.innerHTML = `
                <div class="lib-icon ${def.color || ''}">${subIconFor(type)}</div>
                <div class="lib-label">${tx(def.label)}</div>
            `;
            item.addEventListener('mousedown', (e) => startLibraryDrag(type, e));
            sec.appendChild(item);
        });
        libraryListEl.appendChild(sec);
        return;
    }
    if (header) header.textContent = tt('library');
    LIBRARY_GROUPS.forEach(group => {
        const sec = document.createElement('div');
        sec.className = 'library-section';
        sec.innerHTML = `<div class="library-section-title">${tt(group.title)}</div>`;
        group.items.forEach(type => {
            const def = NODE_DEFS[type];
            const item = document.createElement('div');
            item.className = 'lib-item';
            item.dataset.type = type;
            item.innerHTML = `
                <div class="lib-icon ${def.color || ''}">${ICONS[type] || ICONS.componentTs}</div>
                <div class="lib-label">${tx(def.label)}</div>
            `;
            item.addEventListener('mousedown', (e) => startLibraryDrag(type, e));
            sec.appendChild(item);
        });
        libraryListEl.appendChild(sec);
    });
}

// Pick a representative icon for sub-blocks — many share semantics with main blocks
function subIconFor(type) {
    const map = {
        'sub.inject': ICONS.service,
        'sub.ngOnInit': ICONS.componentTs,
        'sub.httpClient': ICONS.api,
        'sub.signal': ICONS.debounce,
        'sub.observable': ICONS.debounce,
        'sub.subject': ICONS.debounce,
        'sub.directive': ICONS.appHtml,
        'sub.pipe': ICONS.pipe,
        'sub.loader': ICONS.asyncState,
        'sub.errorState': ICONS.warning,
        'sub.guardCheck': ICONS.authGuard,
        'sub.routeRedirect': ICONS.router,
        'sub.formField': ICONS.signalForm,
        'sub.validator': ICONS.check,
        'sub.submitHandler': ICONS.loginForm,
        'sub.routeHandler': ICONS.api,
        'sub.dbQuery': ICONS.database,
        'sub.tokenRead': ICONS.tokenStore,
        'sub.tokenWrite': ICONS.tokenStore
    };
    return map[type] || ICONS.componentTs;
}

function renderBreadcrumb() {
    const el = $('breadcrumb');
    if (!el) return;
    if (!state.canvasStack.length) {
        el.classList.remove('show');
        el.innerHTML = '';
        return;
    }
    const ownerType = state.canvasStack[state.canvasStack.length - 1].ownerNodeType;
    el.innerHTML = `
        <span class="crumb" id="crumb-top">${tt('topCrumb')}</span>
        <span class="sep">›</span>
        <span class="crumb current">${tx(NODE_DEFS[ownerType].label)}</span>
    `;
    el.classList.add('show');
    $('crumb-top').addEventListener('click', surface);
}

// ============================================================
// SUB-CANVAS (Dive into) — 1 level deep
// ============================================================
function openSubCanvas(node) {
    if (state.canvasStack.length) return; // 1-level cap
    if (state.running) return;
    if (!SUB_TOOLS[node.type]) return;     // nothing meaningful to dive into

    // Snapshot the top-level canvas
    const snapshot = {
        nodes: state.nodes,
        connections: state.connections,
        nextNodeId: state.nextNodeId,
        nextConnId: state.nextConnId,
        selectedNodeId: state.selectedNodeId,
        zoom: state.zoom,
        scrollLeft: canvasWrapEl.scrollLeft,
        scrollTop: canvasWrapEl.scrollTop
    };
    state.canvasStack.push({ ownerNodeId: node.id, ownerNodeType: node.type, snapshot });

    // Lazy-create or seed the child canvas
    if (!node.children) {
        node.children = { nodes: [], connections: [], nextNodeId: 1, nextConnId: 1 };
        const lvl = LEVELS[state.currentLevel];
        const levelSeed = lvl && lvl.subSeeds && lvl.subSeeds[node.type];
        const seed = levelSeed === null ? null : (levelSeed || SUB_SEED[node.type]);
        if (seed) {
            seed.nodes.forEach((sn) => {
                node.children.nodes.push({
                    id: 'n' + node.children.nextNodeId++,
                    type: sn.type, x: sn.x, y: sn.y, flipped: false
                });
            });
            (seed.connections || []).forEach(([fromIdx, toIdx]) => {
                const a = node.children.nodes[fromIdx];
                const b = node.children.nodes[toIdx];
                if (!a || !b) return;
                node.children.connections.push({
                    id: 'c' + node.children.nextConnId++,
                    from: a.id, to: b.id
                });
            });
        }
    }

    // Animate library out, swap, animate back in
    const rotator = $('library-rotator');
    if (rotator) {
        rotator.classList.add('rotate-out');
        setTimeout(() => {
            // Swap state to children
            state.nodes = node.children.nodes;
            state.connections = node.children.connections;
            state.nextNodeId = node.children.nextNodeId;
            state.nextConnId = node.children.nextConnId;
            state.selectedNodeId = null;
            renderLibrary();
            renderAll();
            renderBreadcrumb();
            renderExplainSteps();
            // Reset scroll/zoom for the sub-canvas
            canvasWrapEl.scrollLeft = 0;
            canvasWrapEl.scrollTop = 0;
            rotator.classList.remove('rotate-out');
        }, 200);
    } else {
        // No rotator — swap synchronously
        state.nodes = node.children.nodes;
        state.connections = node.children.connections;
        state.nextNodeId = node.children.nextNodeId;
        state.nextConnId = node.children.nextConnId;
        state.selectedNodeId = null;
        renderLibrary();
        renderAll();
        renderBreadcrumb();
    }
}

function surface() {
    if (!state.canvasStack.length) return;
    if (state.running) return;
    const frame = state.canvasStack[state.canvasStack.length - 1];
    const ownerNodeId = frame.ownerNodeId;
    const snapshot = frame.snapshot;

    // Persist any edits made in the sub-canvas back onto the owner node
    // (we're working on the same arrays — but capture the counters)
    const owner = snapshot.nodes.find(n => n.id === ownerNodeId);
    if (owner && owner.children) {
        owner.children.nodes = state.nodes;
        owner.children.connections = state.connections;
        owner.children.nextNodeId = state.nextNodeId;
        owner.children.nextConnId = state.nextConnId;
    }

    state.canvasStack.pop();

    const rotator = $('library-rotator');
    if (rotator) {
        rotator.classList.add('rotate-out');
        setTimeout(() => {
            state.nodes = snapshot.nodes;
            state.connections = snapshot.connections;
            state.nextNodeId = snapshot.nextNodeId;
            state.nextConnId = snapshot.nextConnId;
            state.selectedNodeId = snapshot.selectedNodeId;
            renderLibrary();
            renderAll();
            renderBreadcrumb();
            renderExplainSteps();
            canvasWrapEl.scrollLeft = snapshot.scrollLeft;
            canvasWrapEl.scrollTop = snapshot.scrollTop;
            rotator.classList.remove('rotate-out');
        }, 200);
    } else {
        state.nodes = snapshot.nodes;
        state.connections = snapshot.connections;
        state.nextNodeId = snapshot.nextNodeId;
        state.nextConnId = snapshot.nextConnId;
        state.selectedNodeId = snapshot.selectedNodeId;
        renderLibrary();
        renderAll();
        renderBreadcrumb();
    }
}

function renderLevelsMenu() {
    levelsMenuEl.innerHTML = '';
    const basicHeader = document.createElement('div');
    basicHeader.className = 'level-section-title';
    basicHeader.textContent = lang === 'ka' ? 'საფუძვლები' : 'Fundamentals';
    levelsMenuEl.appendChild(basicHeader);

    LEVELS.forEach((lvl, idx) => {
        if (idx === 7) {
            const adv = document.createElement('div');
            adv.className = 'level-section-title';
            adv.textContent = lang === 'ka' ? 'დამატებითი ნაკადები' : 'Advanced Flows';
            levelsMenuEl.appendChild(adv);
        }
        const item = document.createElement('div');
        item.className = 'level-item';
        if (idx === state.currentLevel) item.classList.add('active');
        if (state.completed.has(idx)) item.classList.add('done');
        item.innerHTML = `
            <div class="level-item-num">${state.completed.has(idx) ? '✓' : idx + 1}</div>
            <div class="level-item-body">
                <div class="level-item-title">${tx(lvl.title)}</div>
                <div class="level-item-mission">${tx(lvl.mission)}</div>
            </div>
        `;
        item.addEventListener('click', () => {
            loadLevel(idx);
            levelsDropdown.classList.remove('open');
        });
        levelsMenuEl.appendChild(item);
    });
}

function renderNodes() {
    nodesContainer.innerHTML = '';
    state.nodes.forEach(node => {
        const def = NODE_DEFS[node.type];
        const el = document.createElement('div');
        el.className = 'node' + (node.flipped ? ' flipped' : '') + (state.selectedNodeId === node.id ? ' selected' : '');
        el.style.left = node.x + 'px';
        el.style.top = node.y + 'px';
        el.dataset.id = node.id;

        const hasIn = state.connections.some(c => c.to === node.id);
        const hasOut = state.connections.some(c => c.from === node.id);

        const canDive = !state.canvasStack.length;
        el.innerHTML = `
            <div class="node-inner">
                <div class="node-face node-front">
                    <div class="node-header">
                        <div class="node-icon ${def.color || ''}">${ICONS[node.type] || ICONS.componentTs}</div>
                        <div class="node-title">${tx(def.label)}</div>
                        <div class="node-actions">
                            ${canDive ? `<button class="node-btn dive-btn" title="Dive in">${ICONS.dive}</button>` : ''}
                            <button class="node-btn delete" title="Delete">${ICONS.close}</button>
                        </div>
                    </div>
                    <div class="node-body">${tx(def.short)}</div>
                    <div class="node-tag">${tx(def.category)}</div>
                    <div class="port port-in ${hasIn ? 'connected' : ''}" data-port="in"></div>
                    <div class="port port-out ${hasOut ? 'connected' : ''}" data-port="out"></div>
                </div>
                <div class="node-face node-back">
                    <div class="node-back-title">${tx(def.label)}</div>
                    <div class="node-back-text">${tx(def.long)}</div>
                    <div class="node-back-hint">${tt('dblToFlip')}</div>
                </div>
            </div>
        `;

        el.addEventListener('mousedown', (e) => onNodeMouseDown(e, node));
        el.addEventListener('click', (e) => onNodeClick(e, node));
        el.addEventListener('dblclick', (e) => {
            if (e.target.closest('.port, .node-btn')) return;
            e.preventDefault();
            flipNode(node.id);
        });
        nodesContainer.appendChild(el);
    });
}

function renderConnections() {
    Array.from(svgEl.querySelectorAll('.conn, .conn-hit')).forEach(n => n.remove());
    state.connections.forEach(conn => {
        const from = state.nodes.find(n => n.id === conn.from);
        const to = state.nodes.find(n => n.id === conn.to);
        if (!from || !to) return;
        const sp = portPos(from, 'out');
        const tp = portPos(to, 'in');
        const d = bezier(sp.x, sp.y, tp.x, tp.y);

        const hit = document.createElementNS(SVG_NS, 'path');
        hit.setAttribute('d', d);
        hit.setAttribute('class', 'conn-hit');
        hit.addEventListener('click', () => removeConnection(conn.id));
        svgEl.appendChild(hit);

        const path = document.createElementNS(SVG_NS, 'path');
        path.setAttribute('d', d);
        path.setAttribute('class', 'conn');
        path.dataset.id = conn.id;
        svgEl.appendChild(path);
    });
}

function renderInspector() {
    const node = state.nodes.find(n => n.id === state.selectedNodeId);
    if (!node) {
        inspectorTitle.textContent = tt('selectBlock');
        inspectorBody.innerHTML = `
            <div class="inspector-empty">
                <div class="inspector-empty-icon">${ICONS.info}</div>
                <div class="inspector-empty-title">${tt('nothingSel')}</div>
                <div class="inspector-empty-text">${tt('clickAnyBlock')}</div>
            </div>
        `;
        return;
    }
    const def = NODE_DEFS[node.type];
    inspectorTitle.textContent = tx(def.label);
    const apiSection = node.type === 'api' ? `
        <div class="insp-section">
            <div class="insp-section-label">${tt('apiUrlLabel')}</div>
            <input class="insp-input" id="insp-api-url" placeholder="https://fakestoreapi.com/products" value="${(node.apiUrl || '').replace(/"/g, '&quot;')}">
            <div class="insp-hint">${tt('apiUrlHint')}</div>
        </div>
    ` : '';
    inspectorBody.innerHTML = `
        ${apiSection}
        <div class="insp-section">
            <div class="insp-section-label">${tt('whatDoes')}</div>
            <div class="insp-text">${tx(def.long)}</div>
        </div>
        <div class="insp-section">
            <div class="insp-section-label">${tt('fileSrc')}</div>
            <div class="insp-file">${def.file}</div>
        </div>
        <div class="insp-section">
            <div class="insp-section-label">${tt('codeEx')}</div>
            <div class="insp-code">${def.code}</div>
        </div>
        <div class="insp-section">
            <div class="insp-section-label">${tt('commonMistake')}</div>
            <div class="insp-mistake">
                <div class="insp-mistake-icon">${ICONS.warning}</div>
                <div class="insp-mistake-text">${tx(def.mistake)}</div>
            </div>
        </div>
    `;
    if (node.type === 'api') {
        const inp = $('insp-api-url');
        if (inp) {
            inp.addEventListener('input', (e) => { node.apiUrl = e.target.value; });
            // Stop dragging / hotkeys from intercepting input
            inp.addEventListener('mousedown', (e) => e.stopPropagation());
            inp.addEventListener('keydown', (e) => e.stopPropagation());
        }
    }
}

function renderExplainSteps() {
    explainStepsEl.innerHTML = '';
    if (state.canvasStack.length) return; // sub-canvas — no top-level dots
    const lvl = LEVELS[state.currentLevel];
    const expected = lvl.expected || (lvl.expectedGraph && lvl.expectedGraph.nodes) || [];
    expected.forEach(() => {
        const dot = document.createElement('div');
        dot.className = 'explain-dot';
        explainStepsEl.appendChild(dot);
    });
}

function appendLog(text, kind = '') {
    if (explainBodyEl.querySelector('.explain-empty')) explainBodyEl.innerHTML = '';
    const entry = document.createElement('div');
    entry.className = 'log-entry ' + (kind || '');
    entry.innerHTML = `<span class="log-time">${nowTime()}</span><span class="log-dot"></span><span class="log-text">${text}</span>`;
    explainBodyEl.appendChild(entry);
    explainBodyEl.scrollTop = explainBodyEl.scrollHeight;
}

function renderHeader() {
    const lvl = LEVELS[state.currentLevel];
    levelNumEl.textContent = (lang === 'ka' ? 'დონე ' : 'Level ') + (state.currentLevel + 1);
    levelTitleEl.textContent = tx(lvl.title);
    missionTextEl.textContent = tx(lvl.mission);
}

function renderEmptyExplain() {
    explainBodyEl.innerHTML = `<div class="explain-empty">${tt('emptyExplain')} <strong style="color: var(--brand);">${tt('runFlowB')}</strong> ${tt('toWatch')}</div>`;
}

function renderUIStrings() {
    $('lbl-levels').textContent = tt('levels');
    $('lbl-reset').textContent = tt('reset');
    $('lbl-check').textContent = tt('checkAnswer');
    $('lbl-run').textContent = tt('runFlow');
    $('lbl-library').textContent = tt('library');
    $('lbl-inspector').textContent = tt('inspector');
    $('lbl-howitworks').textContent = tt('howWorks');
    $('lbl-mission').textContent = tt('mission');
    $('mission-hint').textContent = tt('showHint');
    $('brand-name').textContent = tt('brand');
    $('brand-sub').textContent = tt('academy');
    $('lbl-readonly').textContent = tt('readonlyHint');
    $('example-load-editable').textContent = tt('loadEditable');
}

function renderAll() {
    renderNodes();
    renderConnections();
    renderInspector();
}

// ============================================================
// NODE OPS
// ============================================================
function pushUndo() {
    state.undoStack.push({
        nodes: deepCloneNodes(state.nodes),
        connections: state.connections.map(c => ({ ...c }))
    });
    if (state.undoStack.length > 50) state.undoStack.shift();
    state.redoStack.length = 0;
}
function deepCloneNodes(nodes) {
    return nodes.map(n => {
        const copy = { ...n };
        if (n.children) {
            copy.children = {
                nodes: deepCloneNodes(n.children.nodes),
                connections: n.children.connections.map(c => ({ ...c })),
                nextNodeId: n.children.nextNodeId,
                nextConnId: n.children.nextConnId
            };
        }
        return copy;
    });
}
function applySnapshot(snap) {
    state.nodes = snap.nodes;
    state.connections = snap.connections;
    state.selectedNodeId = null;
    renderAll();
}
function undo() {
    if (!state.undoStack.length) return;
    const cur = {
        nodes: deepCloneNodes(state.nodes),
        connections: state.connections.map(c => ({ ...c }))
    };
    state.redoStack.push(cur);
    applySnapshot(state.undoStack.pop());
}
function redo() {
    if (!state.redoStack.length) return;
    const cur = {
        nodes: deepCloneNodes(state.nodes),
        connections: state.connections.map(c => ({ ...c }))
    };
    state.undoStack.push(cur);
    applySnapshot(state.redoStack.pop());
}

function addNode(type, x, y) {
    if (state.readonly) return null;
    pushUndo();
    const node = {
        id: 'n' + state.nextNodeId++,
        type,
        x: Math.max(10, x - NODE_W / 2),
        y: Math.max(10, y - NODE_H / 2),
        flipped: false
    };
    if (type === 'api') node.apiUrl = '';
    state.nodes.push(node);
    renderAll();
    return node;
}
function removeNode(id) {
    if (state.readonly) return;
    pushUndo();
    state.nodes = state.nodes.filter(n => n.id !== id);
    state.connections = state.connections.filter(c => c.from !== id && c.to !== id);
    if (state.selectedNodeId === id) state.selectedNodeId = null;
    renderAll();
}
function addConnection(fromId, toId) {
    if (state.readonly) return;
    if (fromId === toId) return;
    if (state.connections.some(c => c.from === fromId && c.to === toId)) return;
    pushUndo();
    const lvl = LEVELS[state.currentLevel];
    const inSub = state.canvasStack.length > 0;
    const allowGraph = inSub || (lvl && lvl.expectedGraph);
    if (!allowGraph) {
        // Linear-only top-level levels: strip any prior edge sharing the same source
        // or target so the user's flow always remains a single chain.
        state.connections = state.connections.filter(c => !(c.from === fromId));
        state.connections = state.connections.filter(c => !(c.to === toId));
    }
    state.connections.push({ id: 'c' + state.nextConnId++, from: fromId, to: toId });
    renderConnections();
    renderNodes();
}
function removeConnection(id) {
    if (state.readonly) return;
    pushUndo();
    state.connections = state.connections.filter(c => c.id !== id);
    renderConnections();
    renderNodes();
}
function flipNode(id) {
    const n = state.nodes.find(x => x.id === id);
    if (!n) return;
    n.flipped = !n.flipped;
    renderNodes();
}

// ============================================================
// INTERACTIONS
// ============================================================
function startLibraryDrag(type, e) {
    if (state.readonly) return;
    e.preventDefault();
    const def = NODE_DEFS[type];
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.innerHTML = `${ICONS[type] || ICONS.componentTs} ${tx(def.label)}`;
    document.body.appendChild(ghost);
    const positionGhost = (ev) => {
        ghost.style.left = (ev.clientX + 10) + 'px';
        ghost.style.top = (ev.clientY + 10) + 'px';
    };
    positionGhost(e);
    const onMove = (ev) => positionGhost(ev);
    const onUp = (ev) => {
        ghost.remove();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        if (isOverCanvas(ev)) {
            const pos = eventToCanvas(ev);
            addNode(type, pos.x, pos.y);
        }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

function onNodeMouseDown(e, node) {
    if (state.readonly) {
        if (e.target.closest('.node-btn.delete, .dive-btn')) return;
    }
    if (e.target.closest('.dive-btn')) {
        e.stopPropagation();
        openSubCanvas(node);
        return;
    }
    if (e.target.closest('.node-btn.delete')) {
        e.stopPropagation();
        removeNode(node.id);
        return;
    }
    // Read-only (reference schema) locks the structure, but blocks can still be moved
    if (!state.readonly && e.target.classList.contains('port')) {
        e.stopPropagation();
        startConnectionDrag(node, e.target.dataset.port, e);
        return;
    }
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const origX = node.x;
    const origY = node.y;
    const el = e.currentTarget;
    el.classList.add('dragging');
    let moved = false;
    const snap = (v) => state.snapToGrid ? Math.round(v / 20) * 20 : v;
    const onMove = (ev) => {
        node.x = Math.max(0, snap(origX + (ev.clientX - startX) / state.zoom));
        node.y = Math.max(0, snap(origY + (ev.clientY - startY) / state.zoom));
        el.style.left = node.x + 'px';
        el.style.top = node.y + 'px';
        moved = true;
        renderConnections();
    };
    const onUp = () => {
        el.classList.remove('dragging');
        if (!state.readonly && moved && (node.x !== origX || node.y !== origY)) pushUndo();
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

function onNodeClick(e, node) {
    if (e.target.closest('.dive-btn') || e.target.closest('.node-btn.delete') || e.target.classList.contains('port')) return;
    state.selectedNodeId = node.id;
    renderNodes();
    renderInspector();
}

function startConnectionDrag(node, portType, e) {
    if (state.readonly) return;
    e.preventDefault();
    const isOutgoing = portType === 'out';
    const sp = portPos(node, portType);
    const pending = document.createElementNS(SVG_NS, 'path');
    pending.setAttribute('class', 'pending');
    svgEl.appendChild(pending);
    let targetEl = null;
    const onMove = (ev) => {
        const rect = canvasEl.getBoundingClientRect();
        const mx = (ev.clientX - rect.left) / state.zoom;
        const my = (ev.clientY - rect.top) / state.zoom;
        const d = isOutgoing ? bezier(sp.x, sp.y, mx, my) : bezier(mx, my, sp.x, sp.y);
        pending.setAttribute('d', d);
        const el = document.elementFromPoint(ev.clientX, ev.clientY);
        const port = el && el.classList && el.classList.contains('port') ? el : null;
        if (targetEl && targetEl !== port) targetEl.classList.remove('target');
        if (port) {
            const wantedType = isOutgoing ? 'in' : 'out';
            if (port.dataset.port === wantedType) { port.classList.add('target'); targetEl = port; }
            else targetEl = null;
        } else targetEl = null;
    };
    const onUp = (ev) => {
        pending.remove();
        if (targetEl) targetEl.classList.remove('target');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
        const el = document.elementFromPoint(ev.clientX, ev.clientY);
        if (el && el.classList && el.classList.contains('port')) {
            const wantedType = isOutgoing ? 'in' : 'out';
            if (el.dataset.port !== wantedType) {
                showToast(tt('wrongDir'), tt('wrongDirMsg'), 'warning');
                return;
            }
            const otherNodeEl = el.closest('.node');
            if (!otherNodeEl) return;
            const otherId = otherNodeEl.dataset.id;
            if (otherId === node.id) return;
            if (isOutgoing) addConnection(node.id, otherId);
            else addConnection(otherId, node.id);
        }
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
}

canvasEl.addEventListener('click', (e) => {
    if (e.target === canvasEl || e.target === svgEl || e.target === nodesContainer) {
        state.selectedNodeId = null;
        renderNodes();
        renderInspector();
    }
});

// ============================================================
// FLOW VALIDATION
// ============================================================
function topologicalChain() {
    if (!state.nodes.length) return [];
    const incoming = new Map(state.nodes.map(n => [n.id, 0]));
    state.connections.forEach(c => incoming.set(c.to, (incoming.get(c.to) || 0) + 1));
    const starts = state.nodes.filter(n => incoming.get(n.id) === 0);
    if (starts.length !== 1) return null;
    const order = [starts[0].id];
    let current = starts[0].id;
    const visited = new Set([current]);
    while (true) {
        const next = state.connections.filter(c => c.from === current);
        if (next.length === 0) break;
        if (next.length > 1) return null;
        if (visited.has(next[0].to)) return null;
        order.push(next[0].to);
        visited.add(next[0].to);
        current = next[0].to;
    }
    return order;
}

// Generalized graph analyzer (Kahn's algorithm). Returns topological order
// even when the shape has fan-in / fan-out, so multi-parent flows can be
// validated and animated. `topologicalChain` above stays linear-only so the
// 17 existing levels keep their exact validation behavior.
function flowGraph() {
    const nodes = state.nodes;
    const conns = state.connections;
    const indeg = new Map(nodes.map(n => [n.id, 0]));
    const outdeg = new Map(nodes.map(n => [n.id, 0]));
    const adj = new Map(nodes.map(n => [n.id, []]));
    conns.forEach(c => {
        indeg.set(c.to, (indeg.get(c.to) || 0) + 1);
        outdeg.set(c.from, (outdeg.get(c.from) || 0) + 1);
        adj.get(c.from).push(c.to);
    });
    const starts = nodes.filter(n => indeg.get(n.id) === 0).map(n => n.id);
    const ends = nodes.filter(n => outdeg.get(n.id) === 0).map(n => n.id);
    const remaining = new Map(indeg);
    const queue = [...starts];
    const order = [];
    while (queue.length) {
        const id = queue.shift();
        order.push(id);
        for (const next of adj.get(id) || []) {
            remaining.set(next, remaining.get(next) - 1);
            if (remaining.get(next) === 0) queue.push(next);
        }
    }
    const acyclic = order.length === nodes.length;
    const isLinear = acyclic
        && starts.length <= 1
        && [...outdeg.values()].every(v => v <= 1)
        && [...indeg.values()].every(v => v <= 1);
    return { order, isLinear, acyclic, starts, ends, indeg, outdeg };
}

// Validates sub-canvas contents per LEVELS[i].subRequired.
// Returns null on success, otherwise a friendly message describing the gap.
function checkSubAnswers(lvl) {
    if (!lvl.subRequired) return null;
    // Operate on top-level nodes regardless of whether the user is dived in
    const topNodes = state.canvasStack.length
        ? state.canvasStack[0].snapshot.nodes
        : state.nodes;
    for (const [parentType, expectedTypes] of Object.entries(lvl.subRequired)) {
        const node = topNodes.find(n => n.type === parentType);
        if (!node) continue;
        const sub = node.children;
        const presentTypes = sub ? sub.nodes.map(n => n.type) : [];
        const missing = expectedTypes.filter(t => !presentTypes.includes(t));
        if (missing.length) {
            const blockLabel = tx(NODE_DEFS[parentType].label);
            return tt('subMissingMsg').replace('{block}', blockLabel)
                + ' (' + missing.map(t => tx(NODE_DEFS[t].label)).join(', ') + ')';
        }
    }
    return null;
}

function checkAnswer() {
    const lvl = LEVELS[state.currentLevel];
    if (lvl.expectedGraph) {
        return checkAnswerGraph(lvl.expectedGraph);
    }
    const order = topologicalChain();
    const expected = lvl.expected;
    if (!order || order.length === 0) {
        showToast(tt('emptyFlow'), tt('emptyFlowMsg'), 'warning');
        return;
    }
    if (order.length !== state.nodes.length) {
        showToast(tt('unconnected'), tt('unconnectedMsg'), 'warning');
        return;
    }
    const types = order.map(id => state.nodes.find(n => n.id === id).type);
    const matches = types.length === expected.length && types.every((t, i) => t === expected[i]);
    if (matches) {
        const subProblem = checkSubAnswers(lvl);
        if (subProblem) {
            showToast(tt('notQuite'), subProblem, 'warning');
            appendLog(subProblem, 'warning');
            return;
        }
        state.completed.add(state.currentLevel);
        showToast(tt('correct'), tt('correctMsg'), 'success');
        appendLog(tt('answerOk'), 'success');
        renderLevelsMenu();
    } else {
        const firstWrong = types.findIndex((t, i) => t !== expected[i]);
        let msg;
        if (firstWrong === -1) {
            msg = types.length < expected.length
                ? `${tt('almostMissing')} ${types.length + 1}.`
                : `${tt('extraAfter')} ${expected.length}.`;
        } else {
            const expectedDef = NODE_DEFS[expected[firstWrong]];
            const actualDef = NODE_DEFS[types[firstWrong]];
            msg = `${tt('position')} ${firstWrong + 1}: ${tt('expectedWord')} <strong>${tx(expectedDef.label)}</strong>, ${tt('butFound')} <strong>${tx(actualDef.label)}</strong>.`;
        }
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
    }
}

function multisetEqual(a, b) {
    if (a.length !== b.length) return false;
    const counts = new Map();
    for (const x of a) counts.set(x, (counts.get(x) || 0) + 1);
    for (const x of b) {
        if (!counts.has(x)) return false;
        const n = counts.get(x) - 1;
        if (n < 0) return false;
        counts.set(x, n);
    }
    return [...counts.values()].every(v => v === 0);
}

function checkAnswerGraph(expectedGraph) {
    if (!state.nodes.length) {
        showToast(tt('emptyFlow'), tt('emptyFlowMsg'), 'warning');
        return;
    }
    const types = state.nodes.map(n => n.type);
    if (!multisetEqual(types, expectedGraph.nodes)) {
        const missing = expectedGraph.nodes.filter(t => !types.includes(t));
        const extra = types.filter(t => !expectedGraph.nodes.includes(t));
        let msg;
        if (missing.length) {
            msg = `${tt('expectedWord')} <strong>${tx(NODE_DEFS[missing[0]].label)}</strong>.`;
        } else if (extra.length) {
            msg = `${tt('extraAfter')} — <strong>${tx(NODE_DEFS[extra[0]].label)}</strong>.`;
        } else {
            msg = tt('notQuite');
        }
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
        return;
    }
    // Map id → type for edge translation
    const typeOf = new Map(state.nodes.map(n => [n.id, n.type]));
    const userEdges = state.connections.map(c => typeOf.get(c.from) + '→' + typeOf.get(c.to));
    const expectedEdges = expectedGraph.edges.map(([a, b]) => a + '→' + b);
    if (!multisetEqual(userEdges, expectedEdges)) {
        const missing = expectedEdges.filter(e => !userEdges.includes(e));
        let msg;
        if (missing.length) {
            const [a, b] = missing[0].split('→');
            msg = `${tt('expectedWord')} <strong>${tx(NODE_DEFS[a].label)}</strong> → <strong>${tx(NODE_DEFS[b].label)}</strong>.`;
        } else {
            msg = tt('notQuite');
        }
        showToast(tt('notQuite'), msg, 'error');
        appendLog(msg, 'error');
        return;
    }
    // Sanity: graph should be acyclic (Kahn's algo proves this)
    const fg = flowGraph();
    if (!fg.acyclic) {
        showToast(tt('notQuite'), tt('notQuite'), 'error');
        return;
    }
    state.completed.add(state.currentLevel);
    showToast(tt('correct'), tt('correctMsg'), 'success');
    appendLog(tt('answerOk'), 'success');
    renderLevelsMenu();
}

// ============================================================
// RUN FLOW
// ============================================================
async function runFlow() {
    if (state.running) return;
    const lvl = LEVELS[state.currentLevel];
    let order;
    if (lvl.expectedGraph) {
        const fg = flowGraph();
        if (!fg.acyclic || fg.order.length < 2) {
            showToast(tt('nothingRun'), tt('nothingRunMsg'), 'warning');
            return;
        }
        order = fg.order;
    } else {
        order = topologicalChain();
        if (!order || order.length < 2) {
            showToast(tt('nothingRun'), tt('nothingRunMsg'), 'warning');
            return;
        }
    }
    state.running = true;
    Array.from(nodesContainer.querySelectorAll('.node')).forEach(el => el.classList.remove('firing'));
    renderExplainSteps();
    explainBodyEl.innerHTML = '';

    const firstEl = nodesContainer.querySelector(`.node[data-id="${order[0]}"]`);
    if (firstEl) firstEl.classList.add('firing');
    markStep(0);
    logForNode(state.nodes.find(n => n.id === order[0]).type, 0);
    await sleep(450);

    if (lvl.expectedGraph) {
        // Walk every edge in topological order — handles fan-in / fan-out
        const orderIdx = new Map(order.map((id, i) => [id, i]));
        const visited = new Set([order[0]]);
        let step = 1;
        for (const id of order) {
            const outs = state.connections.filter(c => c.from === id);
            outs.sort((a, b) => orderIdx.get(a.to) - orderIdx.get(b.to));
            for (const conn of outs) {
                await animateParticle(conn.from, conn.to);
                if (!visited.has(conn.to)) {
                    visited.add(conn.to);
                    const el = nodesContainer.querySelector(`.node[data-id="${conn.to}"]`);
                    if (el) el.classList.add('firing');
                    markStep(step++);
                    const node = state.nodes.find(n => n.id === conn.to);
                    logForNode(node.type, step - 1);
                    await sleep(180);
                }
            }
        }
    } else {
        for (let i = 0; i < order.length - 1; i++) {
            await animateParticle(order[i], order[i + 1]);
            const el = nodesContainer.querySelector(`.node[data-id="${order[i + 1]}"]`);
            if (el) el.classList.add('firing');
            markStep(i + 1);
            const node = state.nodes.find(n => n.id === order[i + 1]);
            logForNode(node.type, i + 1);
            await sleep(260);
        }
    }

    const lastNode = state.nodes.find(n => n.id === order[order.length - 1]);
    if (lastNode && lastNode.type === 'browser') {
        await sleep(120);
        const apiNode = order.map(id => state.nodes.find(n => n.id === id)).find(n => n && n.type === 'api');
        await showBrowserPreview({ apiUrl: apiNode && apiNode.apiUrl });
    } else {
        appendLog(tt('flowComplete'), 'success');
    }
    await sleep(400);
    Array.from(nodesContainer.querySelectorAll('.node')).forEach(el => el.classList.remove('firing'));
    state.running = false;
}

function markStep(i) {
    const dots = explainStepsEl.querySelectorAll('.explain-dot');
    dots.forEach((d, idx) => {
        d.classList.remove('active');
        if (idx < i) d.classList.add('done');
        if (idx === i) d.classList.add('active');
    });
}

function animateParticle(fromId, toId) {
    return new Promise(resolve => {
        const from = state.nodes.find(n => n.id === fromId);
        const to = state.nodes.find(n => n.id === toId);
        const sp = portPos(from, 'out');
        const tp = portPos(to, 'in');
        const d = bezier(sp.x, sp.y, tp.x, tp.y);
        const conn = state.connections.find(c => c.from === fromId && c.to === toId);
        const connEl = conn ? svgEl.querySelector(`path.conn[data-id="${conn.id}"]`) : null;
        if (connEl) connEl.classList.add('active');
        const measure = document.createElementNS(SVG_NS, 'path');
        measure.setAttribute('d', d);
        measure.style.visibility = 'hidden';
        svgEl.appendChild(measure);
        const len = measure.getTotalLength();
        const halo = document.createElementNS(SVG_NS, 'circle');
        halo.setAttribute('r', '12');
        halo.setAttribute('class', 'particle-halo');
        svgEl.appendChild(halo);
        const particle = document.createElementNS(SVG_NS, 'circle');
        particle.setAttribute('r', '5');
        particle.setAttribute('class', 'particle');
        svgEl.appendChild(particle);
        const duration = 700;
        const start = performance.now();
        function step(t) {
            const elapsed = t - start;
            const progress = Math.min(elapsed / duration, 1);
            const pt = measure.getPointAtLength(len * easeInOut(progress));
            particle.setAttribute('cx', pt.x);
            particle.setAttribute('cy', pt.y);
            halo.setAttribute('cx', pt.x);
            halo.setAttribute('cy', pt.y);
            if (progress < 1) requestAnimationFrame(step);
            else {
                particle.remove(); halo.remove(); measure.remove();
                if (connEl) setTimeout(() => connEl.classList.remove('active'), 200);
                resolve();
            }
        }
        requestAnimationFrame(step);
    });
}

const LOG_MSGS = {
    database:    [['<strong>Database</strong> ready — rows of products stored on disk.', '<strong>ბაზა</strong> მზადაა — პროდუქცია დისკზე ინახება.']],
    api:         [['<strong>API</strong> received a request and is reading from the database.', '<strong>API</strong>-მ მიიღო მოთხოვნა და კითხულობს ბაზიდან.']],
    get:         [['<strong>GET</strong> request issued — asking the server for data.', '<strong>GET</strong> მოთხოვნა გაგზავნილია — სერვერისგან მონაცემს ვითხოვთ.']],
    post:        [['<strong>POST</strong> request issued — sending new data to the server.', '<strong>POST</strong> — ახალი მონაცემი გაგზავნილია.']],
    put:         [['<strong>PUT</strong> request issued — sending updated data to the server.', '<strong>PUT</strong> — განახლებული მონაცემი გაგზავნილია.']],
    delete:      [['<strong>DELETE</strong> request issued — asking the server to remove an item.', '<strong>DELETE</strong> — სერვერს ვთხოვთ წაშლას.']],
    service:     [['<strong>Service</strong> received the response and is returning an observable.', '<strong>სერვისმა</strong> მიიღო პასუხი და აბრუნებს Observable-ს.']],
    componentTs: [['<strong>Component (.ts)</strong> turned the response into a signal with toSignal().', '<strong>Component (.ts)</strong>-მა toSignal()-ით აქცია პასუხი სიგნალად.']],
    pipe:        [['<strong>Filter / Pipe</strong> kept only the products where inStock is true.', '<strong>Filter</strong>-მ დატოვა მხოლოდ inStock = true.']],
    componentHtml:[['<strong>Component (.html)</strong> looped over the data with @for and produced HTML.', '<strong>Component (.html)</strong> @for-ით გადახედა და დახაზა HTML.']],
    browser:     [['<strong>Browser</strong> rendered the final view — the user sees the products.', '<strong>ბრაუზერმა</strong> დახაზა საბოლოო ხედი — მომხმარებელი ხედავს.']],
    router:      [['<strong>RouterOutlet</strong> matched the route and mounted the component.', '<strong>RouterOutlet</strong>-მ ჩასვა შესაბამისი კომპონენტი.']],
    interceptor: [['<strong>Interceptor</strong> attached an Authorization header to the request.', '<strong>Interceptor</strong>-მ მიამატა Authorization ჰედერი.']],
    listTs:      [['<strong>List (.ts)</strong> stored the array on the products property.', '<strong>List (.ts)</strong>-ში მასივი შენახულია.']],
    listHtml:    [['<strong>List (.html)</strong> looped and mounted one Card per item.', '<strong>List (.html)</strong> ხატავს თითო Card-ს.']],
    cardTs:      [['<strong>Card (.ts)</strong> received one product through a signal input.', '<strong>Card (.ts)</strong>-მ მიიღო პროდუქტი სიგნალური input-ით.']],
    cardHtml:    [['<strong>Card (.html)</strong> rendered name, price and stock badge.', '<strong>Card (.html)</strong>-მ დახაზა სახელი, ფასი და მარაგი.']],
    appHtml:     [['<strong>App (.html)</strong> composed everything inside the root template.', '<strong>App (.html)</strong>-ში ყველაფერი თავმოყრილია.']],
    searchInput: [['<strong>Search Input</strong> emitted the latest query.', '<strong>ძიების ველმა</strong> გასცა მოთხოვნა.']],
    debounce:    [['<strong>Debounce</strong> waited 300ms — only stable queries pass.', '<strong>Debounce</strong>-მა დაიცადა 300მწმ.']],
    loginForm:   [['<strong>Login Form</strong> collected email and password.', '<strong>Login ფორმამ</strong> ემაილი და პაროლი მიიღო.']],
    authService: [['<strong>Auth Service</strong> sent credentials to the server.', '<strong>Auth სერვისმა</strong> სერვერს გადასცა მონაცემები.']],
    tokenStore:  [['<strong>Token Store</strong> persisted the JWT in localStorage.', '<strong>Token Store</strong>-ში JWT შენახულია.']],
    authGuard:   [['<strong>Auth Guard</strong> verified the token before mounting the route.', '<strong>Auth Guard</strong>-მ შეამოწმა ტოკენი.']],
    asyncState:  [['<strong>Async State</strong> toggled loading off and exposed the result.', '<strong>Async State</strong>-მ გამორთო loading და გასცა შედეგი.']],
    signalForm:[['<strong>Signal Form</strong> validated values before submit.', '<strong>Signal ფორმამ</strong> ვალიდირება მოახდინა.']],
    paginate:    [['<strong>Pagination</strong> requested page 1 with size 4.', '<strong>Pagination</strong>-მა მოითხოვა 1-ლი გვერდი.']],
    webSocket:   [['<strong>WebSocket</strong> pushed a live update to the client.', '<strong>WebSocket</strong>-მა გადასცა რეალურ დროში განახლება.']],
    routeParams: [['<strong>Route Params</strong> read :id from the URL.', '<strong>Route Params</strong>-მა წაიკითხა :id URL-დან.']],
    lazyRoute:  [['<strong>Lazy Route</strong> downloaded the chunk on demand.', '<strong>Lazy მარშრუტმა</strong> ჩატვირთა ჩუნკი მოთხოვნისას.']]
};

function logForNode(type, step) {
    const entry = LOG_MSGS[type];
    const msg = entry ? tx(entry[0]) : type;
    appendLog(`${tt('step')} ${step + 1}: ${msg}`);
}

// ============================================================
// BROWSER PREVIEW
// ============================================================
const SAMPLE_PRODUCTS = [
    { name: 'Laptop',     price: 1200, inStock: true  },
    { name: 'USB Mouse',  price: 25,   inStock: false },
    { name: 'Keyboard',   price: 80,   inStock: true  },
    { name: 'Monitor',    price: 320,  inStock: true  },
    { name: 'Headphones', price: 90,   inStock: false }
];
const SEARCH_RESULTS = [
    { name: 'Laptop Pro 14"', price: 1599, inStock: true },
    { name: 'Laptop Stand',   price: 45,   inStock: true }
];

async function showBrowserPreview(opts) {
    const apiUrl = (opts && opts.apiUrl) || '';
    // Live fetch path
    if (apiUrl && /^https?:\/\//i.test(apiUrl)) {
        try {
            const res = await fetch(apiUrl, { headers: { 'Accept': 'application/json' } });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const json = await res.json();
            renderLivePreview(apiUrl, json);
            appendLog(tt('livePreview'), 'success');
            return;
        } catch (err) {
            appendLog(tt('fetchFailed') + ' (' + err.message + ')', 'warning');
            // fall through to canned outcome
        }
    }
    showBrowserPreviewMock();
}

function renderLivePreview(url, data) {
    $('preview-url').textContent = url;
    let bodyHtml = '';
    const items = Array.isArray(data) ? data : (data && Array.isArray(data.products) ? data.products : null);
    if (items && items.length && typeof items[0] === 'object') {
        const cards = items.slice(0, 20).map(p => {
            const name = p.name || p.title || p.label || p.id || '(item)';
            const priceRaw = p.price ?? p.cost ?? p.amount;
            const price = priceRaw == null ? '' : (typeof priceRaw === 'number' ? '$' + priceRaw : String(priceRaw));
            const stock = (p.inStock ?? p.available ?? p.stock);
            const stockHtml = stock === undefined
                ? ''
                : `<span class="product-stock ${stock ? '' : 'out'}">${stock ? tt('inStock') : tt('outOfStock')}</span>`;
            return `<div class="product-card">
                <div class="product-name">${escapeHtml(String(name))}</div>
                <div class="product-meta">
                    <span class="product-price">${escapeHtml(price)}</span>
                    ${stockHtml}
                </div>
            </div>`;
        }).join('');
        previewBody.innerHTML = `
            <h1 class="preview-title">${tt('ourProducts')}</h1>
            <div class="preview-sub">${items.length} ${tt('items')} — ${tt('livePreview')}</div>
            <div class="preview-banner info">${tt('livePreview')}</div>
            <div class="preview-grid">${cards}</div>
        `;
    } else {
        // Generic JSON dump
        const pretty = escapeHtml(JSON.stringify(data, null, 2));
        previewBody.innerHTML = `
            <h1 class="preview-title">${tt('ourProducts')}</h1>
            <div class="preview-sub">${tt('livePreview')}</div>
            <div class="preview-banner info">${tt('livePreview')}</div>
            <pre style="background:var(--gray-100); padding:12px; border-radius:6px; max-height:340px; overflow:auto; font-family:var(--mono); font-size:11.5px; color:var(--gray-900);">${pretty}</pre>
        `;
    }
    previewOverlay.classList.add('show');
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function showBrowserPreviewMock() {
    const lvl = LEVELS[state.currentLevel];
    let list = SAMPLE_PRODUCTS;
    let banner = '';
    let urlPath = '/products';

    switch (lvl.outcome) {
        case 'inStock':
            list = SAMPLE_PRODUCTS.filter(p => p.inStock);
            banner = `<div class="preview-banner">${tt('bannerInStock')}</div>`;
            break;
        case 'search':
            list = SEARCH_RESULTS;
            urlPath = '/products?q=lap';
            banner = `<div class="preview-banner info">${tt('bannerSearch')}</div>`;
            break;
        case 'detail':
            list = [SAMPLE_PRODUCTS[0]];
            urlPath = '/product/1';
            banner = `<div class="preview-banner info">${tt('bannerDetail')}</div>`;
            break;
        case 'routed':
            banner = `<div class="preview-banner info">${tt('bannerRouted')}</div>`;
            break;
        case 'authed':
            banner = `<div class="preview-banner info">${tt('bannerAuthed')}</div>`;
            break;
        case 'loaded':
            banner = `<div class="preview-banner info">${tt('bannerLoaded')}</div>`;
            break;
        case 'paged':
            list = SAMPLE_PRODUCTS.slice(0, 4);
            urlPath = '/products?page=1';
            banner = `<div class="preview-banner info">${tt('bannerPaged')}</div>`;
            break;
        case 'socket':
            banner = `<div class="preview-banner info">${tt('bannerSocket')}</div>`;
            break;
        case 'lazy':
            urlPath = '/admin';
            banner = `<div class="preview-banner info">${tt('bannerLazy')}</div>`;
            break;
        case 'cardPattern':
            banner = `<div class="preview-banner">${tt('bannerCardPattern')}</div>`;
            break;
    }

    $('preview-url').textContent = 'https://shop.local' + urlPath;
    const cards = list.map(p => `
        <div class="product-card">
            <div class="product-name">${p.name}</div>
            <div class="product-meta">
                <span class="product-price">$${p.price}</span>
                <span class="product-stock ${p.inStock ? '' : 'out'}">${p.inStock ? tt('inStock') : tt('outOfStock')}</span>
            </div>
        </div>
    `).join('');
    previewBody.innerHTML = `
        <h1 class="preview-title">${tt('ourProducts')}</h1>
        <div class="preview-sub">${list.length} ${tt('items')} — ${tt('renderedBy')}</div>
        ${banner}
        <div class="preview-grid">${cards}</div>
    `;
    previewOverlay.classList.add('show');
    appendLog(tt('browserRendered'), 'success');
}

function showOutcomeToast() {
    const lvl = LEVELS[state.currentLevel];
    const map = {
        created: 'bannerCreated', updated: 'bannerUpdated', deleted: 'bannerDeleted',
        logged: 'bannerLogged', valid: 'bannerValid'
    };
    if (map[lvl.outcome]) appendLog(tt(map[lvl.outcome]), 'success');
}

$('preview-close').addEventListener('click', () => previewOverlay.classList.remove('show'));
previewOverlay.addEventListener('click', (e) => {
    if (e.target === previewOverlay) previewOverlay.classList.remove('show');
});

// ============================================================
// TOASTS
// ============================================================
function showToast(title, body, kind = 'info') {
    const t = document.createElement('div');
    t.className = 'toast ' + kind;
    const icon = kind === 'success' ? ICONS.check
               : kind === 'error' ? ICONS.warning
               : kind === 'warning' ? ICONS.warning
               : ICONS.info;
    t.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-body"><strong>${title}</strong>${body}</div>
        <button class="toast-close">${ICONS.x}</button>
    `;
    t.querySelector('.toast-close').addEventListener('click', () => t.remove());
    toastWrap.appendChild(t);
    setTimeout(() => {
        t.style.transition = 'opacity 0.25s, transform 0.25s';
        t.style.opacity = '0';
        t.style.transform = 'translateY(8px)';
        setTimeout(() => t.remove(), 250);
    }, 5000);
}

// ============================================================
// LEVEL MANAGEMENT
// ============================================================
function loadLevel(idx) {
    // Discard any open sub-canvas without animation
    state.canvasStack = [];
    exitExampleReadonly();
    renderBreadcrumb();
    renderLibrary();
    state.currentLevel = idx;
    state.nodes = [];
    state.connections = [];
    state.selectedNodeId = null;
    state.nextNodeId = 1;
    state.nextConnId = 1;
    renderHeader();
    renderExplainSteps();
    renderEmptyExplain();
    renderLevelsMenu();
    renderAll();
}
function resetCanvas() {
    // Clearing a read-only example must not leave an empty, locked canvas behind
    exitExampleReadonly();
    if (state.canvasStack.length) {
        // Reset just the active sub-canvas
        if (state.nodes.length === 0 && state.connections.length === 0) return;
        state.nodes = [];
        state.connections = [];
        state.selectedNodeId = null;
        state.nextNodeId = 1;
        state.nextConnId = 1;
        renderAll();
        return;
    }
    if (state.nodes.length === 0 && state.connections.length === 0) return;
    state.nodes = [];
    state.connections = [];
    state.selectedNodeId = null;
    state.nextNodeId = 1;
    state.nextConnId = 1;
    renderExplainSteps();
    explainBodyEl.innerHTML = `<div class="explain-empty">${tt('canvasCleared')}</div>`;
    renderAll();
}

// ============================================================
// REFERENCE SCHEMAS (20 pre-built examples, easy → hard)
// ============================================================
// Each entry: { id, title, difficulty (1-5), description, nodes, connections }
// nodes: [{type, x, y}]   connections: [[fromIdx, toIdx]]
const EXAMPLES = [
    { id:'fetch',     diff:1, title:['Hello fetch','პირველი fetch'],
      desc:['Database → API → GET → Service → Component → Browser','ბაზიდან ბრაუზერამდე'],
      nodes:[{type:'database',x:120,y:280},{type:'api',x:380,y:280},{type:'get',x:640,y:280},{type:'service',x:900,y:280},{type:'componentTs',x:1160,y:280},{type:'componentHtml',x:1420,y:280},{type:'browser',x:1680,y:280}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'filter',    diff:1, title:['Filter with Pipe','ფილტრი Pipe-ით'],
      desc:['Add a pipe between component logic and template','ფილტრის Pipe-ის ჩამატება'],
      nodes:[{type:'database',x:120,y:280},{type:'api',x:360,y:280},{type:'get',x:600,y:280},{type:'service',x:840,y:280},{type:'componentTs',x:1080,y:280},{type:'pipe',x:1320,y:280},{type:'componentHtml',x:1560,y:280},{type:'browser',x:1800,y:280}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'post',      diff:1, title:['Create with POST','შექმნა POST-ით'],
      desc:['Component → Service → POST → API → Database','კომპონენტიდან ბაზამდე POST-ით'],
      nodes:[{type:'componentTs',x:160,y:300},{type:'service',x:440,y:300},{type:'post',x:720,y:300},{type:'api',x:1000,y:300},{type:'database',x:1280,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'put',       diff:1, title:['Update with PUT','განახლება PUT-ით'],
      desc:['Component → Service → PUT → API → Database','კომპონენტიდან ბაზამდე PUT-ით'],
      nodes:[{type:'componentTs',x:160,y:300},{type:'service',x:440,y:300},{type:'put',x:720,y:300},{type:'api',x:1000,y:300},{type:'database',x:1280,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4]] },
    { id:'router',    diff:2, title:['Router outlet','Router'],
      desc:['URL /products mounts a component that fetches data','URL → კომპონენტი → მონაცემები'],
      nodes:[{type:'router',x:140,y:300},{type:'componentTs',x:420,y:300},{type:'service',x:700,y:300},{type:'get',x:980,y:300},{type:'api',x:1260,y:300},{type:'database',x:1540,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'detail',    diff:2, title:['Detail page :id','დეტალური /:id'],
      desc:['Read :id and fetch one item','აიღე ერთი ერთეული :id-ით'],
      nodes:[{type:'router',x:120,y:280},{type:'routeParams',x:380,y:280},{type:'componentTs',x:640,y:280},{type:'service',x:900,y:280},{type:'get',x:1160,y:280},{type:'api',x:1420,y:280},{type:'database',x:1680,y:280},{type:'componentHtml',x:1680,y:460},{type:'browser',x:1420,y:460}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'card',      diff:2, title:['List + Card pattern','List + Card'],
      desc:['Parent fetches, Card renders each item via a signal input()','მშობელი იღებს, Card ხატავს'],
      nodes:[{type:'database',x:120,y:300},{type:'api',x:340,y:300},{type:'get',x:560,y:300},{type:'service',x:780,y:300},{type:'listTs',x:1000,y:300},{type:'cardTs',x:1220,y:300},{type:'cardHtml',x:1440,y:300},{type:'listHtml',x:1660,y:300},{type:'appHtml',x:1660,y:480},{type:'browser',x:1440,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'search',    diff:3, title:['Search with debounce','ძიება debounce-ით'],
      desc:['Wait 300ms between keystrokes before calling','დაიცადე 300მწმ კლავიატურის დარტყმებს შორის'],
      nodes:[{type:'searchInput',x:120,y:300},{type:'componentTs',x:380,y:300},{type:'debounce',x:640,y:300},{type:'service',x:900,y:300},{type:'get',x:1160,y:300},{type:'api',x:1420,y:300},{type:'database',x:1680,y:300},{type:'componentHtml',x:1680,y:480},{type:'browser',x:1420,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'paginate',  diff:3, title:['Pagination','პაგინაცია'],
      desc:['One page at a time','ერთი გვერდი ერთდროულად'],
      nodes:[{type:'paginate',x:120,y:300},{type:'componentTs',x:400,y:300},{type:'service',x:680,y:300},{type:'get',x:960,y:300},{type:'api',x:1240,y:300},{type:'database',x:1520,y:300},{type:'componentHtml',x:1520,y:480},{type:'browser',x:1240,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'login',     diff:3, title:['Login + Save token','Login + ტოკენი'],
      desc:['Submit credentials, store token','კრედენციალები + ტოკენი'],
      nodes:[{type:'loginForm',x:120,y:300},{type:'componentTs',x:380,y:300},{type:'authService',x:640,y:300},{type:'post',x:900,y:300},{type:'api',x:1160,y:300},{type:'database',x:1420,y:300},{type:'tokenStore',x:1420,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6]] },
    { id:'authShare', diff:4, title:['Login + Signup share Auth','Login + Signup ერთად'],
      desc:['Both forms feed one AuthService (graph)','ორი ფორმა — ერთი სერვისი'],
      nodes:[{type:'loginForm',x:120,y:180},{type:'signupForm',x:120,y:380},{type:'authService',x:480,y:280},{type:'post',x:780,y:280},{type:'api',x:1080,y:280},{type:'database',x:1380,y:280},{type:'tokenStore',x:780,y:480}],
      connections:[[0,2],[1,2],[2,3],[3,4],[4,5],[2,6]] },
    { id:'guard',     diff:3, title:['Auth guard protect','Auth Guard'],
      desc:['Block /dashboard unless token is valid','დაიცავი /dashboard'],
      nodes:[{type:'router',x:120,y:300},{type:'authGuard',x:380,y:300},{type:'tokenStore',x:640,y:300},{type:'componentTs',x:900,y:300},{type:'service',x:1160,y:300},{type:'get',x:1420,y:300},{type:'api',x:1680,y:300},{type:'database',x:1940,y:300},{type:'browser',x:1940,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8]] },
    { id:'intercept', diff:4, title:['HTTP Interceptor','Interceptor'],
      desc:['Auto-attach Authorization token','ავტომატური Authorization'],
      nodes:[{type:'componentTs',x:120,y:300},{type:'service',x:400,y:300},{type:'interceptor',x:680,y:300},{type:'get',x:960,y:300},{type:'api',x:1240,y:300},{type:'database',x:1520,y:300},{type:'tokenStore',x:680,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[6,2]] },
    { id:'lazy',      diff:4, title:['Lazy-loaded route','Lazy მარშრუტი'],
      desc:['/admin loads only when visited','/admin ჩატვირთვა მოთხოვნისას'],
      nodes:[{type:'router',x:120,y:300},{type:'lazyRoute',x:380,y:300},{type:'componentTs',x:640,y:300},{type:'service',x:900,y:300},{type:'get',x:1160,y:300},{type:'api',x:1420,y:300},{type:'database',x:1680,y:300},{type:'browser',x:1680,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'reactive',  diff:3, title:['Signal Form submit','Signal ფორმა'],
      desc:['Validated Signal Form → POST','ვალიდირებული ფორმა'],
      nodes:[{type:'signalForm',x:120,y:300},{type:'componentTs',x:400,y:300},{type:'service',x:680,y:300},{type:'post',x:960,y:300},{type:'api',x:1240,y:300},{type:'database',x:1520,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'loading',   diff:4, title:['Loading / Error UX','Loading / Error'],
      desc:['Spinner + error + retry','სპინერი + შეცდომა'],
      nodes:[{type:'database',x:120,y:300},{type:'api',x:380,y:300},{type:'get',x:640,y:300},{type:'service',x:900,y:300},{type:'asyncState',x:1160,y:300},{type:'componentTs',x:1420,y:300},{type:'componentHtml',x:1680,y:300},{type:'browser',x:1680,y:480}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]] },
    { id:'socket',    diff:4, title:['WebSocket live updates','WebSocket რეალურ დროში'],
      desc:['Stream changes straight to component','ნაკადი კომპონენტისკენ'],
      nodes:[{type:'database',x:120,y:300},{type:'webSocket',x:400,y:300},{type:'service',x:680,y:300},{type:'componentTs',x:960,y:300},{type:'componentHtml',x:1240,y:300},{type:'browser',x:1520,y:300}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5]] },
    { id:'searchPage',diff:5, title:['Search + Pagination','ძიება + პაგინაცია'],
      desc:['Two controls feed one component','ორი კონტროლი ერთ კომპონენტს'],
      nodes:[{type:'searchInput',x:120,y:180},{type:'paginate',x:120,y:380},{type:'debounce',x:420,y:180},{type:'componentTs',x:720,y:280},{type:'service',x:1000,y:280},{type:'get',x:1280,y:280},{type:'api',x:1560,y:280},{type:'database',x:1840,y:280},{type:'componentHtml',x:1840,y:480},{type:'browser',x:1560,y:480}],
      connections:[[0,2],[2,3],[1,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] },
    { id:'logout',    diff:2, title:['Logout flow','Logout-ი'],
      desc:['Clear token, route to login','ტოკენი + redirect'],
      nodes:[{type:'componentTs',x:120,y:300},{type:'authService',x:420,y:300},{type:'tokenStore',x:720,y:300},{type:'router',x:1020,y:300}],
      connections:[[0,1],[1,2],[2,3]] },
    { id:'roleGuard', diff:5, title:['Role-based guard','როლზე დაფუძნებული Guard'],
      desc:['Admin vs user route protection','ადმინი vs მომხმარებელი'],
      nodes:[{type:'router',x:120,y:280},{type:'authGuard',x:380,y:280},{type:'tokenStore',x:640,y:280},{type:'componentTs',x:900,y:280},{type:'service',x:1160,y:280},{type:'get',x:1420,y:280},{type:'api',x:1680,y:280},{type:'database',x:1940,y:280},{type:'componentHtml',x:1940,y:460},{type:'browser',x:1680,y:460}],
      connections:[[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]] }
];

function renderExamples() {
    const body = $('examples-body');
    if (!body) return;
    body.innerHTML = '';
    EXAMPLES.forEach((ex) => {
        const card = document.createElement('div');
        card.className = 'example-card';
        const stars = Array.from({length: 5}, (_, i) =>
            `<span class="star ${i < ex.diff ? '' : 'dim'}">★</span>`
        ).join('');
        card.innerHTML = `
            <div class="example-thumb">${makeExampleThumb(ex)}</div>
            <div class="example-title">${tx(ex.title)}</div>
            <div class="example-diff">${stars}</div>
            <div class="example-desc">${tx(ex.desc)}</div>
        `;
        card.addEventListener('click', () => loadExample(ex, true));
        body.appendChild(card);
    });
}

function makeExampleThumb(ex) {
    // Tiny SVG thumbnail: dots-and-lines representation
    const xs = ex.nodes.map(n => n.x);
    const ys = ex.nodes.map(n => n.y);
    const minX = Math.min(...xs), maxX = Math.max(...xs);
    const minY = Math.min(...ys), maxY = Math.max(...ys);
    const w = maxX - minX + 220, h = maxY - minY + 110;
    const pad = 20;
    const sx = (x) => ((x - minX + 20) / w) * (240 - 2 * pad) + pad;
    const sy = (y) => ((y - minY + 20) / h) * (100 - 2 * pad) + pad;
    const dots = ex.nodes.map(n =>
        `<circle cx="${sx(n.x)}" cy="${sy(n.y)}" r="3" fill="var(--brand)"/>`).join('');
    const lines = ex.connections.map(([a, b]) => {
        const A = ex.nodes[a], B = ex.nodes[b];
        return `<line x1="${sx(A.x)}" y1="${sy(A.y)}" x2="${sx(B.x)}" y2="${sy(B.y)}" stroke="var(--gray-400)" stroke-width="1"/>`;
    }).join('');
    return `<svg viewBox="0 0 240 100" preserveAspectRatio="xMidYMid meet">${lines}${dots}</svg>`;
}

let _currentExample = null;
function loadExample(ex, readonly) {
    _currentExample = ex;
    // Surface from any sub-canvas first (no animation)
    state.canvasStack = [];
    renderBreadcrumb();
    renderLibrary();
    // Replace canvas content
    state.nodes = [];
    state.connections = [];
    state.nextNodeId = 1;
    state.nextConnId = 1;
    state.selectedNodeId = null;
    const idMap = [];
    ex.nodes.forEach((n) => {
        const node = {
            id: 'n' + state.nextNodeId++,
            type: n.type, x: n.x, y: n.y, flipped: false
        };
        if (n.type === 'api') node.apiUrl = '';
        state.nodes.push(node);
        idMap.push(node.id);
    });
    ex.connections.forEach(([a, b]) => {
        state.connections.push({
            id: 'c' + state.nextConnId++,
            from: idMap[a], to: idMap[b]
        });
    });
    state.readonly = !!readonly;
    renderAll();
    $('examples-overlay').classList.remove('show');
    const banner = $('example-readonly-banner');
    if (banner) banner.classList.toggle('show', !!readonly);
}

function exitExampleReadonly() {
    state.readonly = false;
    const banner = $('example-readonly-banner');
    if (banner) banner.classList.remove('show');
}

// ============================================================
// THEME
// ============================================================
function setTheme(theme) {
    state.theme = theme === 'dark' ? 'dark' : 'light';
    if (state.theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    try { localStorage.setItem('afl-theme', state.theme); } catch (_) {}
}
function loadTheme() {
    let saved = 'light';
    try { saved = localStorage.getItem('afl-theme') || 'light'; } catch (_) {}
    setTheme(saved);
}

// ============================================================
// LANGUAGE
// ============================================================
function setLanguage(newLang) {
    if (newLang === lang) return;
    lang = newLang;
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });
    renderUIStrings();
    renderHeader();
    renderLibrary();
    renderLevelsMenu();
    renderAll();
    if (explainBodyEl.querySelector('.explain-empty')) renderEmptyExplain();
}

// ============================================================
// EVENT WIRING
// ============================================================
$('run-btn').addEventListener('click', runFlow);
$('check-btn').addEventListener('click', checkAnswer);
$('reset-btn').addEventListener('click', resetCanvas);

levelsToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    levelsDropdown.classList.toggle('open');
});
document.addEventListener('click', (e) => {
    if (!levelsDropdown.contains(e.target)) levelsDropdown.classList.remove('open');
});

missionHintBtn.addEventListener('click', () => {
    const lvl = LEVELS[state.currentLevel];
    showToast(tt('hint'), tx(lvl.hint), 'info');
});

document.querySelectorAll('.lang-btn').forEach(b => {
    b.addEventListener('click', () => setLanguage(b.dataset.lang));
});

$('theme-toggle').addEventListener('click', () => {
    setTheme(state.theme === 'dark' ? 'light' : 'dark');
});

const examplesOverlay = $('examples-overlay');
$('examples-toggle').addEventListener('click', () => {
    renderExamples();
    examplesOverlay.classList.add('show');
});
$('examples-close').addEventListener('click', () => examplesOverlay.classList.remove('show'));
examplesOverlay.addEventListener('click', (e) => {
    if (e.target === examplesOverlay) examplesOverlay.classList.remove('show');
});
// Unlock in place so any rearranged layout is kept
$('example-load-editable').addEventListener('click', exitExampleReadonly);

// Zoom buttons
$('zoom-in').addEventListener('click', () => setZoom(state.zoom + 0.1));
$('zoom-out').addEventListener('click', () => setZoom(state.zoom - 0.1));
$('zoom-level').addEventListener('click', () => setZoom(1));

// Snap-to-grid + Undo/Redo
$('snap-toggle').addEventListener('click', () => {
    state.snapToGrid = !state.snapToGrid;
    $('snap-toggle').classList.toggle('active', state.snapToGrid);
    showToast('', state.snapToGrid ? tt('snapOn') : tt('snapOff'), 'info');
});
$('undo-btn').addEventListener('click', undo);
$('redo-btn').addEventListener('click', redo);

// Keyboard
document.addEventListener('keydown', (e) => {
    const target = e.target;
    const inField = target.tagName === 'INPUT' || target.tagName === 'TEXTAREA';
    if ((e.ctrlKey || e.metaKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault();
        setZoom(state.zoom + 0.1);
        return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === '-') {
        e.preventDefault();
        setZoom(state.zoom - 0.1);
        return;
    }
    if ((e.ctrlKey || e.metaKey) && e.key === '0') {
        e.preventDefault();
        setZoom(1);
        return;
    }
    if ((e.ctrlKey || e.metaKey) && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
        e.preventDefault();
        if (!inField) undo();
        return;
    }
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'z' || e.key === 'Z' || e.key === 'y' || e.key === 'Y')) {
        e.preventDefault();
        if (!inField) redo();
        return;
    }
    if ((e.key === 'Delete' || e.key === 'Backspace') && state.selectedNodeId && !inField) {
        removeNode(state.selectedNodeId);
    }
    if (e.key === 'Escape') {
        previewOverlay.classList.remove('show');
        levelsDropdown.classList.remove('open');
    }
});

// Wheel zoom (Ctrl + wheel)
canvasWrapEl.addEventListener('wheel', (e) => {
    if (e.ctrlKey) {
        e.preventDefault();
        const r = canvasWrapEl.getBoundingClientRect();
        const anchor = { x: e.clientX - r.left, y: e.clientY - r.top };
        const delta = -Math.sign(e.deltaY) * 0.1;
        setZoom(state.zoom + delta, anchor);
    }
}, { passive: false });

// ============================================================
// PAN (Space + drag, or middle-mouse drag)
// ============================================================
function inFormField(target) {
    return target && target.matches && target.matches('input, textarea, [contenteditable]');
}

window.addEventListener('keydown', (e) => {
    if (e.code !== 'Space') return;
    if (inFormField(e.target)) return;
    if (state.spacePressed) return;
    state.spacePressed = true;
    canvasWrapEl.classList.add('pan-ready');
    e.preventDefault();
});
window.addEventListener('keyup', (e) => {
    if (e.code !== 'Space') return;
    state.spacePressed = false;
    canvasWrapEl.classList.remove('pan-ready');
});

canvasWrapEl.addEventListener('mousedown', (e) => {
    // Only initiate a pan when:
    //  - spacebar is held (left button), or
    //  - middle mouse button is pressed
    const isMiddle = e.button === 1;
    const isSpaceDrag = state.spacePressed && e.button === 0;
    if (!isMiddle && !isSpaceDrag) return;
    // Don't pan when starting on interactive elements
    if (e.target.closest('.node-btn, .port, .lib-item')) return;
    e.preventDefault();
    state.panning = true;
    canvasWrapEl.classList.add('panning');
    const startX = e.clientX;
    const startY = e.clientY;
    const startScrollLeft = canvasWrapEl.scrollLeft;
    const startScrollTop = canvasWrapEl.scrollTop;
    const onMove = (ev) => {
        canvasWrapEl.scrollLeft = startScrollLeft - (ev.clientX - startX);
        canvasWrapEl.scrollTop = startScrollTop - (ev.clientY - startY);
    };
    const onUp = () => {
        state.panning = false;
        canvasWrapEl.classList.remove('panning');
        document.removeEventListener('mousemove', onMove);
        document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
});

// Prevent the browser's middle-click autoscroll (so our pan handler wins)
canvasWrapEl.addEventListener('auxclick', (e) => { if (e.button === 1) e.preventDefault(); });

// ============================================================
// BOOT
// ============================================================
function preloadStarter() {
    addNode('database', 200, 250);
    addNode('api', 500, 250);
    state.connections.push({ id: 'c' + state.nextConnId++, from: 'n1', to: 'n2' });
    renderAll();
}

loadTheme();
renderUIStrings();
renderLibrary();
renderLevelsMenu();
renderHeader();
renderExplainSteps();
renderEmptyExplain();
applyZoom();
preloadStarter();
