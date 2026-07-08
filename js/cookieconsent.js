import 'https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@3.1.0/dist/cookieconsent.umd.js';

let clarityLoaded = false;

function loadClarity() {
    console.log("Running?")
    if (clarityLoaded) return;

    clarityLoaded = true;

    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xje0031v9x");

}

CookieConsent.run({

    guiOptions: {

        consentModal: {
            layout: "box",
            position: "bottom right",
            equalWeightButtons: true,
            flipButtons: false
        },

        preferencesModal: {
            layout: "box",
            equalWeightButtons: true,
            flipButtons: false
        }

    },

    categories: {

        necessary: {

            enabled: true,
            readOnly: true

        },

        analytics: {

            autoClear: {

                cookies: [

                    {
                        name: /^_cl/
                    }

                ]

            }

        }

    },

    language: {

        default: "sv",

        translations: {

            sv: {

                consentModal: {

                    title: "Vi värnar om din integritet",

                    description:
                        "Vi använder cookies för att webbplatsen ska fungera korrekt och, med ditt samtycke, för att analysera hur webbplatsen används. Du kan när som helst ändra dina cookieinställningar.",

                    acceptAllBtn: "Acceptera alla",

                    acceptNecessaryBtn: "Endast nödvändiga",

                    showPreferencesBtn: "Anpassa inställningar"

                },

                preferencesModal: {

                    title: "Cookieinställningar",

                    acceptAllBtn: "Acceptera alla",

                    acceptNecessaryBtn: "Endast nödvändiga",

                    savePreferencesBtn: "Spara inställningar",

                    closeIconLabel: "Stäng",

                    sections: [

                        {

                            title: "Om cookies",

                            description:
                                "Vi använder cookies för att webbplatsen ska fungera korrekt och för att förstå hur den används. Du väljer själv vilka cookies du vill tillåta."

                        },

                        {

                            title: "Nödvändiga cookies",

                            description:
                                "Dessa cookies krävs för att webbplatsen ska fungera korrekt och kan därför inte stängas av.",

                            linkedCategory: "necessary"

                        },

                        {

                            title: "Analyscookies",

                            description:
                                "Analyscookies hjälper oss att förstå hur besökare använder webbplatsen. Informationen används endast för att förbättra webbplatsens funktion och användarupplevelse.",

                            linkedCategory: "analytics"

                        },

                        {

                            title: "Integritet",

                            description:
                                'Läs mer om hur vi behandlar personuppgifter i vår <a href="/integritetspolicy.html">integritetspolicy</a>.'

                        }

                    ]

                }

            }

        }

    },

    onFirstConsent: ({ cookie }) => {

        if (cookie.categories.includes("analytics")) {

            loadClarity();

        }

    },

    onConsent: ({ cookie }) => {

        if (cookie.categories.includes("analytics")) {

            loadClarity();

        }

    },

    onChange: ({ changedCategories, cookie }) => {

        if (
            changedCategories.includes("analytics") &&
            cookie.categories.includes("analytics")
        ) {

            loadClarity();

        }

    }

});

document
    .getElementById("manageCookies")
    ?.addEventListener("click", () => {

        CookieConsent.showPreferences();

    });