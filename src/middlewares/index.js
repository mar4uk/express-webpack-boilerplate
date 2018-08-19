const prepareState = (req, res, next) => {
    req.state = {
        page: {}
    }

    next();
};

export {
    prepareState
};
