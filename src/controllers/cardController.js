import NameCard from "../modules/NameCard.js";

export const getCreateCard = (req, res) => {
    return res.render("createTemplate");
}

export const postCreateCard = (req, res) => {
    const {body : {template}} = req;
    console.log(req.session);

    return res.render("createDetails");
}
