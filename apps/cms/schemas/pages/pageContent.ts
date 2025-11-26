

export default {
    title: 'Side (Page)',
    name: 'pageProps',
    type: 'document',
    fields: [
        {
            type: "string",
            name: "title",
            title: "Sidetittel (Page Name)",
            description: "This field is used to match Hulen.No page routing and need to match exactly the page config"
        },
        {
            title: 'Innhold (Content)',
            description: "The content you wish to show",
            type: 'localeBlock',
            name: "locale",

        }]


}