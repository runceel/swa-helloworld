module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const header = req.headers['x-ms-client-principal'];
    const encoded = Buffer.from(header, 'base64');
    const decoded = encoded.toString('ascii');
    const user = JSON.parse(decoded);
    const name = user.userDetails;
    // const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? process.env.GREETING_MESSAGE + ", " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}