const logger = {
    log: function(message) {
        console.log(message);
    },
    error: function(message) {
        if (console.error) {
            console.error(message);
        }
        else {
            console.log('error', message);
        }
    }
};

export default logger;