const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `The first thing you’ll want to do is set up an environment that supports at the very least JSX, the XML-like syntax most React code relies upon. 
            You’ll probably also want all the niceties of ES6 or ES7, and maybe even TypeScript.`,
            `The React extension adds another tab to your browser’s dev tools, allowing you to look through React components the same way you would look at HTML elements. 
            Along with the structure of the components, 
            it also shows the props, state, and context a component contains. This can be a big help when debugging.`,
           
        ]
    },    {
        name: 'learn-node',
        title: ' Node Server ',
        content: [
            `Node.js, which has become an incredibly popular framework since it was released, our entire web application can be written in JavaScript, 
            and this is great news for JavaScript developers. So there are many different npm's packages that can be used to write Node.js servers, 
            and the one that we're going to use in these videos is called Express. `,
            `Node.js can feel like a brand new technology, but it's been around for about a decade, and it's one of the most powerful JavaScript tools available.
             Node.js was created by Ryan Dahl in 2009 as a JavaScript Runtime based on Chrome's v8 Engine. 
            In 2011, NPM version 1 was released to allow for sharing of open source node libraries. `,
            ` The foundation is made up of several large companies, including IBM, Microsoft, PayPal, and Groupon. `,
        ]
    },     {
        name: 'MongoDB',
        title: 'MongoDB',
        content: [
            ` One of the coolest things about MongoDB, beyond it's blazing performance, is the modern and flexible JSON-inspired document model. `,
            `field-value pairs stored in JSON-like format called, BSON which stands for Binary JSON. `,
            ` MongoDB document can store a wide variety of data in a number of different formats, which often makes development easier. 
            So far, we've mostly worked with text or number fields in our documents. 
            These are much like the basic types you might be used to in a relational database.`,
        ]
    },  
];

export default articles;